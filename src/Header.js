import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import { useHistory, Link, useLocation } from "react-router-dom";

function Header({ spotifyApi }) {
	const [{ user }, dispatch] = useDataLayerValue();
	const history = useHistory();
	const location = useLocation().pathname;

	function goBack() {
		if (history.location.key) {
			history.goBack();
		}
	}

	function goForward() {
		history.goForward();
	}

	const sendQuery = (event) => {
		spotifyApi
			.search(
				event.target.value,
				["track", "artist", "album", "playlist", "show", "episode"],
				{ limit: 7 }
			)
			.then((response) => {
				dispatch({
					type: "SET_QUERY",
					payload: response,
				});
			})
			.catch((err) => console.log("error in header ", err));
	};

	return (
		<div className="header">
			<div className="header__left">
				<div className="header__left--arrows">
					<ArrowBackIosRoundedIcon onClick={goBack} />
					<ArrowForwardIosRoundedIcon onClick={goForward} />
				</div>
				<div>
					<Link to="/search" className="header__left--search">
						<SearchIcon />
						<input
							placeholder="Search"
							type="text"
							onChange={sendQuery}
							autoFocus={location === "/search" ? true : false}
						/>
					</Link>
				</div>
			</div>
			<div className="header__right">
				<Avatar src={user?.images[0].url} alt="avatar" />
				<h4>{user?.display_name}</h4>
				<ArrowDropDownOutlinedIcon />
			</div>
		</div>
	);
}

export default Header;
