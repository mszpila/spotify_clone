import React, { useEffect, useState } from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
// import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";
import PauseCircleFilledRoundedIcon from "@material-ui/icons/PauseCircleFilledRounded";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import SongRow from "./SongRow";
import BeatLoader from "react-spinners/BeatLoader";

function Library({ spotifyApi }) {
	const [
		{ playlist, player, playback, library, user },
		dispatch,
	] = useDataLayerValue();

	const [isLoading, setIsLoading] = useState(true);
	const element = document.getElementsByClassName("body");

	const header = document.getElementsByClassName("header");

	useEffect(() => {
		element[0].addEventListener("scroll", colorChange);

		return () => {
			element[0].removeEventListener("scroll", colorChange);
		};
	});

	const colorChange = () => {
		if (element[0].scrollTop > 25) {
			header[0].style.backgroundColor = "#0a0a0a";
		} else if (element[0].scrollTop < 25) {
			header[0].style.backgroundColor = "#636363";
		}
	};

	useEffect(() => {
		dispatch({
			type: "SET_PLAYLIST",
			payload: null,
		});
		setIsLoading(true);
		spotifyApi
			.getMySavedTracks({ limit: 50 })
			.then((savedTracks) => {
				dispatch({
					type: "SET_LIBRARY",
					payload: savedTracks,
				});
				return savedTracks;
			})
			.then((savedTracks) => {
				const idsStatus = savedTracks.items.map((item) => {
					return item.track.id;
				});
				return idsStatus;
			})
			.then((ids) => spotifyApi.containsMySavedTracks(ids))
			.then((ids) => {
				dispatch({
					type: "SET_SAVED",
					payload: ids,
				});
			})
			.then(() => {
				const context = library?.items.map((item) => {
					return item.track.uri;
				});
				return context;
			})
			.then((uris) => {
				dispatch({
					type: "SET_URIS",
					payload: uris,
				});
			})
			.then(() => setIsLoading(false))
			.catch((err) => console.log("err in library: ", err));
	}, []);

	useEffect(() => {
		element[0].addEventListener("scroll", handleScroll);

		return () => {
			element[0].removeEventListener("scroll", handleScroll);
		};
	});

	function handleScroll() {
		if (
			element[0].scrollHeight - element[0].scrollTop ===
			element[0].clientHeight
		) {
			if (library.next !== null) {
				spotifyApi
					.getMySavedTracks({
						offset: library.offset + library.limit,
						limit: 50,
					})
					.then((savedTracks) => {
						dispatch({
							type: "ADD_TO_LIBRARY",
							payload: savedTracks,
						});
						const idsStatus = savedTracks.items.map((item) => {
							return item.track.id;
						});
						return idsStatus;
					})
					.then((ids) => spotifyApi.containsMySavedTracks(ids))
					.then((ids) => {
						dispatch({
							type: "ADD_SAVED",
							payload: ids,
						});
					})
					.catch((err) => console.log("err in library: ", err));
			}
		}
	}

	const playPause = (event, newState) => {
		if (playback?.context.uri === `spotify:user:${user.name}:collection`) {
			player.togglePlay();
		} else {
			spotifyApi.play({ context_uri: `spotify:collection` });
		}
	};

	return (
		<div className="body">
			<Header spotifyApi={spotifyApi} />

			<BeatLoader loading={isLoading} />

			<div className={`${isLoading ? "hide" : "body__info"}`}>
				<img
					src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
					alt=""
				/>
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>Polubione utwory</h2>
					<p></p>
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
					<MoreHorizRoundedIcon className="body__more" />
				</div>
				{library?.items?.map((item) => (
					<SongRow
						spotifyApi={spotifyApi}
						track={item.track}
						index={1}
					/>
				))}
			</div>
		</div>
	);
}

export default Library;
