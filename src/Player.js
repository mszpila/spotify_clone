import React, { useEffect } from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
// import Topbar from "./Topbar";
// import Playbar from "./Playbar";
import Library from "./Library";
// import Header from "./Header";
import Home from "./Home";
import Search from "./Search";
import { Switch, Route } from "react-router-dom";
import { useDataLayerValue } from "./DataLayer";

function Player({ spotifyApi }) {
	const [{ user, token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const script = document.createElement("script");

		script.src = "https://sdk.scdn.co/spotify-player.js";
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	useEffect(() => {
		if (spotifyApi) {
			window.onSpotifyWebPlaybackSDKReady = () => {
				var player = new window.Spotify.Player({
					name: "Localhost Player",
					getOAuthToken: (cb) => {
						cb(token);
					},
				});
				// Error handling
				player.addListener("initialization_error", ({ message }) => {
					console.error(message);
				});
				player.addListener("authentication_error", ({ message }) => {
					console.error(message);
				});
				player.addListener("account_error", ({ message }) => {
					console.error(message);
				});
				player.addListener("playback_error", ({ message }) => {
					console.error(message);
				});

				// Playback status updates
				player.addListener("player_state_changed", (state) => {
					dispatch({
						type: "SET_CURRENT_PLAYBACK",
						payload: state,
					});
				});

				// Ready
				player.addListener("ready", ({ device_id }) => {
					spotifyApi
						.getMyDevices()
						.then((result) => {
							const targetId = result.devices.filter((device) => {
								return device.name === "Localhost Player";
							});
							return targetId;
						})
						.then((id) =>
							spotifyApi.transferMyPlayback([id[0].id], {
								play: "false",
							})
						)
						.then(() => {
							player.getVolume().then((volume) => {
								let volume_percentage = volume * 100;
								// console.log(
								// 	`The volume of the player is ${volume_percentage}%`
								// );
								dispatch({
									type: "SET_VOLUME",
									payload: volume_percentage,
								});
							});
						});
				});

				// Not Ready
				player.addListener("not_ready", ({ device_id }) => {
					console.log("Device ID has gone offline", device_id);
				});

				// Connect to the player!
				player.connect().then((success) => {
					if (success) {
						console.log(
							"The Web Playback SDK successfully connected to Spotify!"
						);
					}
				});
				dispatch({
					type: "SET_PLAYER",
					payload: player,
				});
			};
			spotifyApi.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					payload: user,
				});
			});
			spotifyApi.getUserPlaylists(user?.id).then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					payload: playlists,
				});
			});
			spotifyApi
				.getPlaylist("37i9dQZEVXcSGu8DAFFrX6")
				.then((playlist) => {
					dispatch({
						type: "SET_OVER_WEEKLY",
						payload: playlist,
					});
				});
			spotifyApi.getUserPlaylists().then((playlists) => {
				const ids = playlists.items.map((playlist) => playlist.id);
				dispatch({
					type: "SET_PLAYLISTS_ID",
					payload: ids,
				});
			});
		}
	}, []);

	return (
		<div className="player">
			<div className="player__body">
				<Sidebar />
				<Switch>
					<Route path="/search">
						<Search spotifyApi={spotifyApi} />
					</Route>
					<Route path="/library">
						<Library spotifyApi={spotifyApi} />
					</Route>
					<Route path="/playlist/:id">
						<Body spotifyApi={spotifyApi} />
					</Route>
					<Route path="/">
						<Home spotifyApi={spotifyApi} />
					</Route>
				</Switch>
			</div>
			<Footer spotifyApi={spotifyApi} />
		</div>
	);
}

export default Player;
