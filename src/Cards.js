import React from "react";
import Card from "./Card";
import { useDataLayerValue } from "./DataLayer";
import "./Cards.css";

function Cards({ title, items, spotifyApi }) {
	const [
		{ query, playlist, player, playback, saved, tracks },
		dispatch,
	] = useDataLayerValue();
	return (
		<div className="cards">
			<h1 className="cards__title">{title}</h1>
			<hr />
			<div className="cards__container">
				{items?.map(
					(item) => (
						<Card
							track={item}
							type={item.type}
							spotifyApi={spotifyApi}
						/>
					)
					// )
				)}
			</div>
		</div>
	);
}

export default Cards;
