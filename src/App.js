import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotifyApi = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;
		spotifyApi.setAccessToken(_token);

		dispatch({
			type: "SET_TOKEN",
			payload: _token,
		});
	}, []);

	return (
		<div className="App">
			{token ? <Player spotifyApi={spotifyApi} /> : <Login />}
		</div>
	);
}

export default App;
