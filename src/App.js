import React, { useEffect, useState, useScript } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
// import { useSpotifyWebPlaybackSdk } from "use-spotify-web-playback-sdk";
// import sdkPlayer from "./spotify_sdk_player";

const spotifyApi = new SpotifyWebApi();

function App() {
	// const [token, setToken] = useState();
	const [
		{ user, token, ids, playlists, player, playback, deviceId },
		dispatch,
	] = useDataLayerValue();
	// run the code based on the given codition and it will reload as
	// the [input] changes, it you want it run once leave it empty
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
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;
		if (_token) {
			window.onSpotifyWebPlaybackSDKReady = () => {
				var player = new window.Spotify.Player({
					name: "Localhost Player",
					getOAuthToken: (cb) => {
						cb(_token);
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
					console.log(state);
					dispatch({
						type: "SET_CURRENT_PLAYBACK",
						payload: state,
					});
				});

				// Ready
				player.addListener("ready", ({ device_id }) => {
					console.log("The Web Playback SDK is ready to play music!");
					console.log("Device ID", device_id);
					spotifyApi
						.getMyDevices()
						.then((result) => {
							const targetId = result.devices.filter((device) => {
								// console.log("device filter: ", device.name);
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
								console.log(
									`The volume of the player is ${volume_percentage}%`
								);
								dispatch({
									type: "SET_VOLUME",
									payload: volume_percentage,
								});
							});
						});
					// .then(() => spotifyApi.getMyCurrentPlaybackState())
					// // .then(() => player.getCurrentState())
					// .then((state) => {
					// 	console.log("dif state: ", state);
					// 	dispatch({
					// 		type: "SET_CURRENT_PLAYBACK",
					// 		payload: state,
					// 	});
					// });
					// spotifyApi.getMyCurrentPlaybackState().then((result) =>
					// 	dispatch({
					// 		type: "SET_CURRENT_PLAYBACK",
					// 		payload: result,
					// 	})
					// );
					// .catch((err) => console.log("getMydevices: ", err));
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
			dispatch({
				type: "SET_TOKEN",
				payload: _token,
			});
			// setToken(_token);
			spotifyApi.setAccessToken(_token);
			spotifyApi.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					payload: user,
				});
			});
			spotifyApi.getUserPlaylists().then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					payload: playlists,
				});
			});
			spotifyApi
				.getPlaylist("37i9dQZEVXcSGu8DAFFrX6")
				.then((playlist) => {
					dispatch({
						type: "SET_DISCOVER_WEEKLY",
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
			// spotifyApi.setVolume(100).then(
			// 	dispatch({
			// 		type: "SET_VOLUME",
			// 		payload: 100,
			// 	})
			// );
		}
		// }
	}, []);

	return (
		<div className="App">
			{token ? <Player spotify={spotifyApi} /> : <Login />}
		</div>
	);
}

export default App;
export { spotifyApi };
