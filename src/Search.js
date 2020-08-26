import React from "react";
import Header from "./Header";
import Cards from "./Cards";
import "./Body.css";
import "./Search.css";
import { useDataLayerValue } from "./DataLayer";

function Search({ spotifyApi }) {
	const [{ query }, dispatch] = useDataLayerValue();

	return (
		<div className="body">
			<div className="search__header">
				<Header spotifyApi={spotifyApi} className="search__header" />
			</div>
			<div className="search__cards">
				{query?.tracks?.items.length ? (
					<Cards
						title="Tracks"
						items={query?.tracks?.items}
						spotifyApi={spotifyApi}
					/>
				) : null}
				{query?.artists?.items.length ? (
					<Cards
						title="Artists"
						items={query?.artists?.items}
						spotifyApi={spotifyApi}
					/>
				) : null}
				{query?.albums?.items.length ? (
					<Cards
						title="Albums"
						items={query?.albums?.items}
						spotifyApi={spotifyApi}
					/>
				) : null}
				{query?.playlists?.items.length ? (
					<Cards
						title="Playlists"
						items={query?.playlists?.items}
						spotifyApi={spotifyApi}
					/>
				) : null}
				{query?.shows?.items.length ? (
					<Cards
						title="Shows"
						items={query?.shows?.items}
						spotifyApi={spotifyApi}
					/>
				) : null}
				{query?.episodes?.items.length ? (
					<Cards
						title="Episodes"
						items={query?.episodes?.items}
						spotifyApi={spotifyApi}
					/>
				) : null}
			</div>
		</div>
	);
}

export default Search;
