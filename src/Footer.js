import React, { useState, useEffect } from "react";
import "./Footer.css";
import PlayCircleOutlinedIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { useDataLayerValue } from "./DataLayer";
import { spotifyApi } from "./App";

function Footer() {
	const [{ volume, player, playback }, dispatch] = useDataLayerValue();
	// const [ms, setMs] = useState(0);
	// const [msMax, setMsMax] = useState(1);
	const [vol, setVol] = useState(0);
	const [activeShuffle, setActiveShuffle] = useState(false);
	// const [activeRepeat, setActiveRepeat] = useState(false);
	// const repeatStates = ["off", "context", "track"];
	// const [repeatState, setRepeatState] = useState(repeatStates[0]);
	const [mode, setMode] = useState(0);

	const activateShuffle = () => {
		setActiveShuffle(!activeShuffle);
	};

	useEffect(() => {
		spotifyApi.setShuffle(activeShuffle);
	}, [activeShuffle]);

	const activateRepeat = () => {
		// if (mode === 2) {
		// 	setMode(0);
		// } else {
		// 	setMode(mode + 1);
		// }
		switch (mode) {
			case 0:
				setMode(1);
				break;
			case 1:
				setMode(2);
				break;
			case 2:
				setMode(0);
				break;
			default:
				return mode;
		}
	};

	// const activateRepeat = () => {
	// 	setRepeatState(repeatStates[]);
	// };

	// useEffect(() => {
	// 	// spotifyApi.setRepeat(activeShuffle);
	// 	if (activeRepeat) {
	// 		spotifyApi.setRepeat(repeatStates[1]);
	// 	} else {
	// 		spotifyApi.setRepeat(repeatStates[0]);
	// 	}
	// }, [activeRepeat]);

	useEffect(() => {
		switch (mode) {
			case 0:
				spotifyApi.setRepeat("off");
				break;
			case 1:
				spotifyApi.setRepeat("context");
				break;
			case 2:
				spotifyApi.setRepeat("track");
				break;
			default:
				return mode;
		}
	}, [mode]);

	const mute = (event) => {
		console.log("event: ", event, "mute");
		if (vol === 0) {
			player.setVolume(0).then(() => {
				console.log("Volume updated!");
			});
			dispatch({
				type: "SET_VOLUME",
				payload: 0, // volume: 64 ==> 0
			});
			setVol(volume); // volume: 64 vol: 0 ==> 64
		} else {
			console.log("event: ", event, "unmute");
			player.setVolume(vol / 100).then(() => {
				console.log("Volume updated!");
			});
			dispatch({
				type: "SET_VOLUME",
				payload: vol,
			});
			setVol(0); // volume: 0 vol: 64 ==> 0
		}
	};

	const changeVolume = (event, newVolume) => {
		console.log("event: ", event, "newVolume:", newVolume);
		player.setVolume(newVolume / 100).then(() => {
			console.log("Volume updated!");
		});
		dispatch({
			type: "SET_VOLUME",
			payload: newVolume,
		});
	};
	// useEffect(() => {
	// 	spotifyApi.getMyCurrentPlaybackState().then((result) =>
	// 		// dispatch({
	// 		// 	type: "SET_CURRENT_PLAYBACK",
	// 		// 	payload: result,
	// 		// })
	// 		console.log("state ", result)
	// 	);
	// }, []);

	const prevTrack = () => {
		spotifyApi
			.getMyCurrentPlaybackState()
			.then((result) => result.progress_ms)
			.then((ms) => {
				if (ms > 3000) {
					player.seek(0).then(() => {
						console.log("Changed position to beginning!");
					});
				} else {
					player.previousTrack().then(() => {
						console.log("Set to previous track!");
					});
				}
			});
		// spotifyApi
		// 	.getMyCurrentPlaybackState()
		// 	// .then(() => player.getCurrentState())
		// 	.then((state) => {
		// 		// console.log("dif state: ", state);
		// 		dispatch({
		// 			type: "SET_CURRENT_PLAYBACK",
		// 			payload: state,
		// 		});
		// 	});
	};

	const playPause = (event, newState) => {
		player.togglePlay().then(() => {
			console.log("Toggled playback!");
			// setMs(playback.position);
			// setMsMax(playback.duration);
		});
		// spotifyApi
		// 	.getMyCurrentPlaybackState()
		// 	// .then(() => player.getCurrentState())
		// 	.then((state) => {
		// 		// console.log("dif state: ", state);
		// 		dispatch({
		// 			type: "SET_CURRENT_PLAYBACK",
		// 			payload: state,
		// 		});
		// 	});
		// spotifyApi
		// 	.getMyCurrentPlaybackState()
		// 	.then((result) =>
		// 		// dispatch({
		// 		// 	type: "SET_CURRENT_PLAYBACK",
		// 		// 	payload: result,
		// 		// })
		// 		console.log("state: ", result)
		// 	)
		// 	.catch((err) => console.log(err));
	};

	const check = () => {
		// spotifyApi
		// 	.getMyCurrentPlaybackState()
		// 	.then((result) =>
		// 		// dispatch({
		// 		// 	type: "SET_CURRENT_PLAYBACK",
		// 		// 	payload: result,
		// 		// })
		// 		console.log("state: ", result)
		// 	)
		// 	.catch((err) => console.log(err));
		// spotifyApi.getMyCurrentPlayingTrack().then((result) =>
		// 	// dispatch({
		// 	// 	type: "SET_CURRENT_PLAYBACK",
		// 	// 	payload: result,
		// 	// })
		// 	console.log("state ", result)
		// );
		// console.log("playback ", playback);
		// console.log("ms ", ms, "msMax ", msMax);
		// console.log("ms2 ", playback?.position, "msMax2 ", playback?.duration);
		// setMs((ms) => playback?.position);
		// setMsMax((msMax) => playback?.duration);
		// console.log("ms ", ms, "msMax ", msMax);
		// player.getCurrentState().then()
		// player.getCurrentState().then((state) => {
		// 	if (!state) {
		// 		console.error(
		// 			"User is not playing music through the Web Playback SDK"
		// 		);
		// 		return;
		// 	}
		// 	console.log("player state: ", state);
		// 	// let {
		// 	// 	current_track,
		// 	// 	next_tracks: [next_track],
		// 	// } = state.track_window;

		// 	// console.log("Currently Playing", current_track);
		// 	// console.log("Playing Next", next_track);
		// });
		console.log("wtf: ", player);
	};

	// const position = setInterval(() => {
	// 	// console.log("player:", player);
	// 	console.log("playback:", playback?.position);
	// }, 1000);

	const nextTrack = () => {
		player.nextTrack().then(() => {
			console.log("Skipped to next track!");
		});
		// spotifyApi
		// 	.getMyCurrentPlaybackState()
		// 	// .then(() => player.getCurrentState())
		// 	.then((state) => {
		// 		// console.log("dif state: ", state);
		// 		dispatch({
		// 			type: "SET_CURRENT_PLAYBACK",
		// 			payload: state,
		// 		});
		// 	});
	};

	const seekPosition = (event, newPosition) => {
		console.log("event: ", event, "newPosition:", newPosition);
		// dispatch({
		// 	type: "SET_VOLUME",
		// 	payload: newVolume,
		// });
		player.seek((newPosition * playback?.duration) / 100).then(() => {
			console.log("Changed position!");
		});
	};

	useEffect(() => {
		const interval = setInterval(() => {
			// console.log("every sec ", player);
			if (player && !playback?.paused) {
				player.getCurrentState().then((state) => {
					if (!state) {
						console.error(
							"User is not playing music through the Web Playback SDK"
						);
						return;
					}
					dispatch({
						type: "SET_CURRENT_PLAYBACK",
						payload: state,
					});
				});
			}
		}, 250);
		// interval();
		if (playback?.paused) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	});
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		player.getCurrentState().then(state => {
	// 			if (!state) {
	// 			  console.error('User is not playing music through the Web Playback SDK');
	// 			  return;
	// 			}

	// 			let {
	// 			  current_track,
	// 			  next_tracks: [next_track]
	// 			} = state.track_window;

	// 			console.log('Currently Playing', current_track);
	// 			console.log('Playing Next', next_track);
	// 		  });
	// 		return () => clearInterval(interval);
	// 		// }
	// 	}, 1000);
	// });
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		if (!playback?.paused) {
	// 			// setMs((ms) => ms + 100);
	// 			setMs(ms + 100);
	// 			setMsMax(playback?.duration);
	// 			console.log("interval: ", playback);
	// 		}
	// 	}, 100);
	// 	return () => clearInterval(interval);
	// }, []);
	// const interval = setInterval(() => {
	// 	//   console.log('This will run every second!');
	// 	if (!playback?.paused) {
	// 		// let count = (playback.position * 100) / playback.duration;
	// 		// console.log("count ", count);
	// 		// return count;
	// 		// let current = ((ms + 1000) * 100) / msMax;
	// 		// console.log("current ", current);
	// 		// return current;
	// 		setMs(playback?.position)
	// 	}
	// 	// }
	// }, 1000);
	// console.log("position ", ms, "duration ", msMax);

	return (
		<div className="footer">
			<div className="footer__left">
				<img
					className={`${playback ? "footer__albumLogo" : null}`}
					// src="https://img.discogs.com/didA8oLs3ricJa5ecMmoTDAyjrU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2255190-1274289191.jpeg.jpg"
					src={
						playback?.track_window.current_track.album.images[0].url
					}
					// src={playback?.item.album.images[0].url}
					alt=""
				/>
				<div className="footer__songInfo">
					{/* playback?.item.name / playback?.track_window.current_track.name  */}
					{/* playback?.item.artists / playback?.track_window.current_track.artists  */}
					<h4>{playback?.track_window.current_track.name}</h4>
					<p>
						{playback?.track_window.current_track.artists
							.map((artist) => artist.name)
							.join(", ")}
					</p>
				</div>
			</div>
			<div className="footer__center">
				<div className="footer_buttons">
					<ShuffleIcon
						className={`footer__icon ${
							activeShuffle ? "footer__green" : ""
						}`}
						onClick={activateShuffle}
					/>
					<SkipPreviousIcon
						className="footer__icon"
						onClick={prevTrack}
					/>
					<PlayCircleOutlinedIcon
						fontSize="large"
						className="footer__icon"
						onClick={playPause}
					/>
					<SkipNextIcon
						className="footer__icon"
						onClick={nextTrack}
					/>
					<RepeatIcon
						className={`footer__icon ${
							mode ? "footer__green" : ""
						}`}
						onClick={activateRepeat}
					/>
				</div>
				<Slider
					// variant="determinate"
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
						<VolumeDownIcon
							onClick={mute}
							className="footer__icon"
						/>
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
