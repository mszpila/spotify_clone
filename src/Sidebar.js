import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
	const [{ playlists }, dispatch] = useDataLayerValue();

	// const updateId = (id) => {
	// 	dispatch({
	// 		type: "SET_PLAYLIST_ID",
	// 		payload: id,
	// 	});
	// 	console.log("id3", id);
	// };

	return (
		<div className="sidebar">
			<img
				className="sidebar__logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt=""
			/>
			<SidebarOption Icon={HomeIcon} title="Home" to="/" />
			<SidebarOption Icon={SearchIcon} title="Search" to="/search" />
			<SidebarOption
				Icon={LibraryMusicIcon}
				title="Your Library"
				to="/library"
			/>

			<br />
			<strong className="sidebar__title">PLAYLISTS</strong>
			<hr />
			<div className="sidebar__playlist">
				{playlists?.items?.map((playlist) => (
					<SidebarOption
						title={playlist.name}
						to={`/playlist/${playlist.id}`}
						id={playlist.id}
					/>
				))}
			</div>
		</div>
	);
}

export default Sidebar;
