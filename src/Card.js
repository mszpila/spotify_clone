import React, { useEffect, useState } from "react";
import PlayCircleOutlinedIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineRoundedIcon from "@material-ui/icons/PauseCircleOutlineRounded";
// import PersonTwoToneIcon from "@material-ui/icons/PersonTwoTone";
import { useDataLayerValue } from "./DataLayer";
import BeatLoader from "react-spinners/BeatLoader";
import "./Card.css";

function Card({ track, type, spotifyApi }) {
	const [{ player, playback }, dispatch] = useDataLayerValue();

	const [isLoading, setIsLoading] = useState(true);

	const playPause = (event, newState) => {
		if (
			track.type === "album" ||
			track.type === "artist" ||
			track.type === "playlist" ||
			track.type === "show"
		) {
			if (playback?.context.uri === track?.uri) {
				player.togglePlay();
			} else {
				spotifyApi.play({
					context_uri: track?.uri,
				});
			}
		} else {
			if (playback?.track_window?.current_track?.uri === track?.uri) {
				player.togglePlay();
			} else {
				spotifyApi.play({
					uris: [track.uri],
				});
			}
		}
	};

	useEffect(() => {
		setIsLoading(true);
	}, [track.uri]);

	const imgLoaded = () => {
		setIsLoading(false);
	};

	return (
		<div className="card">
			<div className={`${isLoading ? "card__spinner" : "hide"}`}>
				<BeatLoader loading={isLoading} />
			</div>
			<div className={`${isLoading ? "hide" : "card__container"}`}>
				<img
					className="card__cover"
					src={
						type === "track"
							? track?.album?.images[0]?.url
							: track?.images[0]?.url ||
							  "https://teslamotorsclub.com/tmc/styles/xenith/xenforo/avatars/avatar_male_l.png"
					}
					alt=""
					onLoad={imgLoaded}
				/>
				<div className="card__overlay">
					{(!playback?.paused &&
						playback?.context.uri === track?.uri) ||
					(!playback?.paused &&
						playback?.track_window?.current_track?.uri ===
							track?.uri) ? (
						<PauseCircleOutlineRoundedIcon
							className="card__overlayIcon"
							onClick={playPause}
						/>
					) : (
						<PlayCircleOutlinedIcon
							// fontSize="large"
							className="card__overlayIcon"
							onClick={playPause}
						/>
					)}
				</div>
			</div>
			<div className={`${isLoading ? "hide" : "card__info"}`}>
				<h1>{track.name}</h1>
				<p>
					{type === "Tracks" || type === "Albums"
						? track.artists.map((artist) => artist.name).join(", ")
						: null}
				</p>
			</div>
		</div>
	);
}

export default Card;
