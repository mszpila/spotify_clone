import React, { useEffect } from "react";
import "./SongRow.css";
import PlayCircleOutlinedIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineRoundedIcon from "@material-ui/icons/PauseCircleOutlineRounded";
// import VolumeUpRoundedIcon from "@material-ui/icons/VolumeUpRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import { useDataLayerValue } from "./DataLayer";

function SongRow({ track, spotifyApi, index, isLocal }) {
	const [
		{ playlist, player, playback, saved, library },
		dispatch,
	] = useDataLayerValue();

	const playPause = (event, newState) => {
		if (playlist) {
			if (
				playback?.context.uri === playlist?.uri &&
				playback?.track_window?.current_track?.uri === track?.uri
			) {
				player.togglePlay();
			} else {
				spotifyApi.play({
					context_uri: playlist?.uri,
					offset: { uri: track?.uri },
				});
			}
		} else if (library) {
			if (playback?.track_window?.current_track?.uri === track?.uri) {
				player.togglePlay();
			} else {
				const context = library.items.map((item) => {
					return item.track.uri;
				});
				spotifyApi.play({
					uris: context,
					offset: { uri: track?.uri },
				});
			}
		}
	};

	useEffect(() => {
		if (
			library &&
			playback?.track_window?.next_tracks == null &&
			library.next
		) {
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
				})
				.then(() => {
					const context = library.items.map((item) => {
						return item.track.uri;
					});
					return context;
				})
				.then((context) => {
					spotifyApi.play({
						uris: context,
						offset: { uri: track?.uri },
					});
				});
		}
	});

	const toggleFav = () => {
		if (saved[index]) {
			spotifyApi.removeFromMySavedTracks([track?.id]).then(() =>
				dispatch({
					type: "SET_SINGLE_SAVED",
					payload: false,
					index: index,
				})
			);
		} else {
			spotifyApi.addToMySavedTracks([track?.id]).then(() =>
				dispatch({
					type: "SET_SINGLE_SAVED",
					payload: true,
					index: index,
				})
			);
		}
	};

	return (
		<div className="songRow">
			<div className="songRow__container">
				<img
					className="songRow__cover"
					src={
						track?.is_local
							? "https://image.flaticon.com/icons/png/512/121/121148.png"
							: track.album?.images[0]?.url
					}
					alt=""
					onClick={isLocal ? null : playPause}
				/>
				<div
					className={`${isLocal ? null : "songRow__overlay"} ${
						isLocal
							? null
							: !playback?.paused &&
							  playback?.track_window.current_track.id ===
									track?.id
							? "visible"
							: null
					}`}
				>
					{isLocal ? null : playback?.track_window.current_track
							.id === track?.id ? (
						playback?.paused ? (
							<PlayCircleOutlinedIcon
								// fontSize="large"
								className="songRow__overlayIcon"
								onClick={playPause}
							/>
						) : (
							<PauseCircleOutlineRoundedIcon
								className="songRow__overlayIcon"
								onClick={playPause}
							/>
						)
					) : (
						<PlayCircleOutlinedIcon
							// fontSize="large"
							className="songRow__overlayIcon"
							onClick={playPause}
						/>
					)}
				</div>
			</div>
			<div className="songRow__savedTrack">
				{isLocal ? (
					<FavoriteRoundedIcon fontSize="small" className="hidden" />
				) : saved[index] ? (
					<FavoriteRoundedIcon fontSize="small" onClick={toggleFav} />
				) : (
					<FavoriteBorderRoundedIcon
						fontSize="small"
						onClick={toggleFav}
					/>
				)}
			</div>
			<div className="songRow__info">
				<h1>{track.name}</h1>
				<p>
					{track.artists.map((artist) => artist.name).join(", ")}
					<span>{isLocal ? null : " • "}</span>
					{track.album.name}
				</p>
			</div>
		</div>
	);
}

export default SongRow;
