import React, { useEffect } from "react";
import Header from "./Header";
import Cards from "./Cards";
import { useDataLayerValue } from "./DataLayer";
import "./Body.css";
import "./Search.css";
import "./Home.css";

function Home({ spotifyApi }) {
	const [
		{ featuredPlaylists, newReleases, topTracks },
		dispatch,
	] = useDataLayerValue();

	useEffect(() => {
		spotifyApi
			.getMyTopTracks()
			.then((tracks) => {
				dispatch({
					type: "SET_TOP_TRACKS",
					payload: tracks,
				});
			})
			.catch((err) => console.log("error: ", err));
		spotifyApi
			.getMyRecentlyPlayedTracks()
			.then((tracks) => {
				dispatch({
					type: "SET_RECENT_TRACKS",
					payload: tracks,
				});
				return tracks;
			})
			.then((tracks) => {
				const ids = tracks.items[0].track.id;
				// .slice(0, 5)
				// .map((item) => item.track.id);
				console.log("ids ", ids);
				return spotifyApi.getRecommendations([ids]);
			})
			.then((recommendations) => {
				console.log("recommendations: ", recommendations);
				dispatch({
					type: "SET_RECOMMENDATIONS",
					payload: recommendations,
				});
			})
			.catch((err) => console.log("error: ", err));

		spotifyApi
			.getFeaturedPlaylists()
			.then((playlists) => {
				dispatch({
					type: "SET_FEATURED_PLAYLISTS",
					payload: playlists,
				});
			})
			.catch((err) => console.log("error: ", err));
		spotifyApi
			.getNewReleases()
			.then((releases) =>
				dispatch({
					type: "SET_NEW_RELEASES",
					payload: releases,
				})
			)
			.catch((err) => console.log("error: ", err));
		spotifyApi
			.getCategories()
			.then((categories) =>
				dispatch({
					type: "SET_CATEGORIES",
					payload: categories,
				})
			)
			.catch((err) => console.log("error: ", err));
	}, []);

	return (
		<div className="body">
			<div className="home__header">
				<Header spotifyApi={spotifyApi} />
			</div>
			<div className="search__cards">
				{topTracks ? (
					<Cards
						title="Top tracks"
						items={topTracks?.items}
						spotifyApi={spotifyApi}
					/>
				) : null}
				{/* {recentTracks?.items?.length ? (
					<Cards
						title="Recently played"
						items={recentTracks?.items}
						spotifyApi={spotifyApi}
					/>
				) : null} */}
				{featuredPlaylists ? (
					<Cards
						title="Featured playlists"
						items={featuredPlaylists?.playlists.items}
						spotifyApi={spotifyApi}
					/>
				) : null}
				{newReleases ? (
					<Cards
						title="New releases"
						items={newReleases?.albums.items}
						spotifyApi={spotifyApi}
					/>
				) : null}
			</div>
		</div>
	);
}

export default Home;
