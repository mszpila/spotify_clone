import React, { useEffect, useState } from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
// import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";
import PauseCircleFilledRoundedIcon from "@material-ui/icons/PauseCircleFilledRounded";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import SongRow from "./SongRow";
import { useParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

function Body({ spotifyApi, library }) {
	let { id } = useParams();
	const [
		{ playlist, player, playback, tracks },
		dispatch,
	] = useDataLayerValue();

	const [isLoading, setIsLoading] = useState(true);

	const playPause = (event, newState) => {
		if (playback?.context.uri === playlist?.uri) {
			player.togglePlay();
		} else {
			spotifyApi.play({ context_uri: playlist?.uri });
		}
	};

	const element = document.getElementsByClassName("body");

	const header = document.getElementsByClassName("header");

	useEffect(() => {
		element[0].addEventListener("scroll", handleScroll);

		return () => {
			element[0].removeEventListener("scroll", handleScroll);
		};
	});

	useEffect(() => {
		element[0].addEventListener("scroll", colorChange);

		return () => {
			element[0].removeEventListener("scroll", colorChange);
		};
	}, []);

	const colorChange = () => {
		if (element[0].scrollTop > 25) {
			header[0].style.backgroundColor = "#0a0a0a";
		} else if (element[0].scrollTop < 25) {
			header[0].style.backgroundColor = "#636363";
		}
	};

	function handleScroll() {
		if (
			element[0].scrollHeight - element[0].scrollTop ===
			element[0].clientHeight
		) {
			if (tracks.next !== null) {
				spotifyApi
					.getPlaylistTracks(playlist?.id, {
						offset: tracks.offset + tracks.limit,
						limit: 50,
					})
					.then((savedTracks) => {
						dispatch({
							type: "ADD_TRACKS",
							payload: savedTracks,
						});
						const idsStatus = savedTracks.items.map((item) => {
							return item.track.id;
						});
						return idsStatus;
					})
					.then((ids) => {
						return spotifyApi.containsMySavedTracks(ids);
					})
					.then((ids) => {
						dispatch({
							type: "ADD_SAVED",
							payload: ids,
						});
					})
					.catch((err) => console.log("err: ", err));
			}
		}
	}

	useEffect(() => {
		dispatch({
			type: "SET_LIBRARY",
			payload: null,
		});
	}, []);

	useEffect(() => {
		if (id) {
			setIsLoading(true);
			spotifyApi
				.getPlaylist(id, { limit: 50 })
				.then((playlist) => {
					dispatch({
						type: "SET_PLAYLIST",
						payload: playlist,
					});
					return playlist;
				})
				.then((playlist) => {
					return spotifyApi.getPlaylistTracks(playlist.id, {
						limit: 50,
					});
				})
				.then((tracks) => {
					dispatch({
						type: "SET_TRACKS",
						payload: tracks,
					});
					const idsStatus = tracks.items.map((item) => {
						return item.track.id;
					});
					return idsStatus;
				})
				.then((ids) => {
					return spotifyApi
						.containsMySavedTracks(ids)
						.then((results) => {
							let index = 0;
							const final = ids.map((item) => {
								if (item === null) {
									return item;
								} else {
									let id = results[index];
									index++;
									return id;
								}
							});
							return final;
						});
				})
				.then((ids) => {
					dispatch({
						type: "SET_SAVED",
						payload: ids,
					});
				})
				.then(() => setIsLoading(false))
				.catch((err) => console.log("error body.js ", err));
		}
	}, [id]);

	return (
		<div className="body">
			<Header spotifyApi={spotifyApi} />

			<BeatLoader loading={isLoading} />

			<div className={`${isLoading ? "hide" : "body__info"}`}>
				<img src={playlist?.images[0]?.url} alt="" />
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>{playlist?.name}</h2>
					<p>{playlist?.description}</p>
				</div>
			</div>

			<div className={`${isLoading ? "hide" : "body__songs"}`}>
				<div className="body__icons">
					{playback?.context.uri === playlist?.uri ? (
						playback?.paused ? (
							<PlayCircleFilledRoundedIcon
								className="body__play"
								onClick={playPause}
							/>
						) : (
							<PauseCircleFilledRoundedIcon
								className="body__play"
								onClick={playPause}
							/>
						)
					) : (
						<PlayCircleFilledRoundedIcon
							className="body__play"
							onClick={playPause}
						/>
					)}
					<FavoriteRoundedIcon className="body__heart" />
					<MoreHorizRoundedIcon className="body__more" />
				</div>
				{tracks?.items?.map((item, index) => (
					<SongRow
						spotifyApi={spotifyApi}
						track={item.track}
						index={index}
						isLocal={item.is_local}
					/>
				))}
			</div>
		</div>
	);
}

export default Body;
