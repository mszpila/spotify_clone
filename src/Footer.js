import React, { useState, useEffect } from "react";
import "./Footer.css";
import PlayCircleOutlinedIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineRoundedIcon from "@material-ui/icons/PauseCircleOutlineRounded";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
// import RepeatIcon from "@material-ui/icons/Repeat";
import RepeatRoundedIcon from "@material-ui/icons/RepeatRounded";
import RepeatOneRoundedIcon from "@material-ui/icons/RepeatOneRounded";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeUpRoundedIcon from "@material-ui/icons/VolumeUpRounded";
// import VolumeDownRoundedIcon from "@material-ui/icons/VolumeDownRounded";
import VolumeMuteRoundedIcon from "@material-ui/icons/VolumeMuteRounded";
import VolumeOffRoundedIcon from "@material-ui/icons/VolumeOffRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import { useDataLayerValue } from "./DataLayer";

function Footer({ spotifyApi }) {
	const [
		{
			volume,
			player,
			playback,
			query,
			recentTracks,
			recommandations,
			featuredPlaylists,
			newReleases,
			categories,
			topTracks,
		},
		dispatch,
	] = useDataLayerValue();
	const [vol, setVol] = useState(0);
	const [fav, setFav] = useState(false);

	const element = document.body;

	const keyBoardController = (event) => {
		if (player && event.target === element) {
			if (event.keyCode === 32) {
				event.preventDefault();
				player.togglePlay();
			} else if (event.keyCode === 77) {
				mute(event);
			} else if (event.keyCode === 37) {
				seekPosition(
					event,
					((playback?.position - 5000) * 100) / playback?.duration
				);
			} else if (event.keyCode === 39) {
				seekPosition(
					event,
					((playback?.position + 5000) * 100) / playback?.duration
				);
			} else if (event.keyCode === 38) {
				event.preventDefault();
				changeVolume(event, volume + 10);
			} else if (event.keyCode === 40) {
				event.preventDefault();
				changeVolume(event, volume - 10);
			} else if (event.keyCode === 188) {
				prevTrack();
			} else if (event.keyCode === 190) {
				nextTrack();
			} else if (event.keyCode === 82) {
				activateRepeat();
			} else if (event.keyCode === 83) {
				activateShuffle();
			}
		}
	};
	useEffect(() => {
		element.addEventListener("keydown", keyBoardController);

		return () => {
			element.removeEventListener("keydown", keyBoardController);
		};
	});

	const activateShuffle = () => {
		spotifyApi.setShuffle(!playback?.shuffle);
	};

	const activateRepeat = () => {
		switch (playback?.repeat_mode) {
			case 0:
				spotifyApi.setRepeat("context");
				break;
			case 1:
				spotifyApi.setRepeat("track");
				break;
			case 2:
				spotifyApi.setRepeat("off");
				break;
			default:
				return playback?.repeat_mode;
		}
	};

	const mute = (event) => {
		if (vol === 0) {
			player.setVolume(0);
			dispatch({
				type: "SET_VOLUME",
				payload: 0, // volume: 64 ==> 0
			});
			setVol(volume); // volume: 64 vol: 0 ==> 64
		} else {
			player.setVolume(vol / 100);
			dispatch({
				type: "SET_VOLUME",
				payload: vol,
			});
			setVol(0); // volume: 0 vol: 64 ==> 0
		}
	};

	const changeVolume = (event, newVolume) => {
		if (newVolume > 100) {
			newVolume = 100;
		} else if (newVolume < 0) {
			newVolume = 0;
		}
		player.setVolume(newVolume / 100);
		dispatch({
			type: "SET_VOLUME",
			payload: newVolume,
		});
	};

	const prevTrack = () => {
		spotifyApi
			.getMyCurrentPlaybackState()
			.then((result) => result.progress_ms)
			.then((ms) => {
				if (ms > 3000) {
					player.seek(0);
				} else {
					player.previousTrack();
				}
			});
	};

	const playPause = (event, newState) => {
		player.togglePlay();
	};

	const check = () => {
		console.log("wtf: ", player);
		console.log("playback: ", playback);
		console.log("recent: ", recentTracks);
		console.log("recommendations: ", recommandations);
		console.log("featured: ", featuredPlaylists);
		console.log("releases: ", newReleases);
		console.log("categories: ", categories);
		console.log("top tracks: ", topTracks);
		console.log("query: ", query);
	};

	const nextTrack = () => {
		player.nextTrack();
	};

	const seekPosition = (event, newPosition) => {
		player.seek((newPosition * playback?.duration) / 100);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (player && !playback?.paused) {
				player.getCurrentState().then((state) => {
					// if (!state) {
					// 	console.error(
					// 		"User is not playing music through the Web Playback SDK"
					// 	);
					// 	return;
					// }
					dispatch({
						type: "SET_CURRENT_PLAYBACK",
						payload: state,
					});
				});
			}
		}, 250);
		if (playback?.paused) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	});

	useEffect(() => {
		if (playback) {
			spotifyApi
				.containsMySavedTracks([
					playback?.track_window.current_track.id,
				])
				.then((result) => {
					setFav(...result);
				})
				.catch((err) => console.log("error in footer ", err));
		}
	}, [playback]);

	const toggleFav = () => {
		if (fav) {
			spotifyApi
				.removeFromMySavedTracks([
					playback?.track_window?.current_track?.id,
				])
				.then(() => setFav(false));
		} else {
			spotifyApi
				.addToMySavedTracks([playback?.track_window?.current_track?.id])
				.then(() => setFav(true));
		}
	};

	return (
		<div className="footer">
			<div className="footer__left">
				<img
					className={`${playback ? "footer__albumLogo" : null}`}
					src={
						playback?.track_window.current_track.album.images[0].url
					}
					alt=""
				/>
				<div className="footer__songInfo">
					<h4>{playback?.track_window.current_track.name}</h4>
					<p>
						{playback?.track_window.current_track.artists
							.map((artist) => artist.name)
							.join(", ")}
					</p>
				</div>
				<div className="footer__savedTrack">
					{playback ? (
						fav ? (
							<FavoriteRoundedIcon
								fontSize="small"
								onClick={toggleFav}
							/>
						) : (
							<FavoriteBorderRoundedIcon
								fontSize="small"
								onClick={toggleFav}
							/>
						)
					) : (
						<div> </div>
					)}
				</div>
			</div>
			<div className="footer__center">
				<div className="footer_buttons">
					<ShuffleIcon
						className={`footer__icon ${
							playback?.shuffle ? "footer__green" : ""
						}`}
						onClick={activateShuffle}
					/>
					<SkipPreviousIcon
						className="footer__icon"
						onClick={prevTrack}
					/>
					{playback ? (
						playback.paused ? (
							<PlayCircleOutlinedIcon
								fontSize="large"
								className="footer__icon"
								onClick={playPause}
							/>
						) : (
							<PauseCircleOutlineRoundedIcon
								fontSize="large"
								className="footer__icon"
								onClick={playPause}
							/>
						)
					) : (
						<PlayCircleOutlinedIcon
							fontSize="large"
							className="footer__icon"
							onClick={playPause}
						/>
					)}
					<SkipNextIcon
						className="footer__icon"
						onClick={nextTrack}
					/>
					{playback ? (
						playback?.repeat_mode < 2 ? (
							<RepeatRoundedIcon
								className={`footer__icon ${
									playback?.repeat_mode ? "footer__green" : ""
								}`}
								onClick={activateRepeat}
							/>
						) : (
							<RepeatOneRoundedIcon
								className="footer__icon footer__green"
								onClick={activateRepeat}
							/>
						)
					) : (
						<RepeatRoundedIcon
							className="footer__icon"
							onClick={activateRepeat}
						/>
					)}
				</div>
				<Slider
					value={(playback?.position * 100) / playback?.duration}
					onChange={seekPosition}
					className="footer__progress"
				/>
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon
							onClick={check}
							className="footer__icon"
						/>
					</Grid>
					<Grid item>
						{volume > 66 ? (
							<VolumeUpRoundedIcon
								onClick={mute}
								className="footer__icon"
							/>
						) : volume > 33 ? (
							<VolumeDownIcon
								onClick={mute}
								className="footer__icon"
							/>
						) : volume > 0 ? (
							<VolumeMuteRoundedIcon
								onClick={mute}
								className="footer__icon"
							/>
						) : (
							<VolumeOffRoundedIcon
								onClick={mute}
								className="footer__icon"
							/>
						)}
					</Grid>
					<Grid item xs>
						<Slider value={volume} onChange={changeVolume} />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
