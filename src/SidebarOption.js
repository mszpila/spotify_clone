import React from "react";
import "./SidebarOption.css";
import { Link } from "react-router-dom";

function SidebarOption({ title, Icon, to }) {
	return (
		<Link to={to} className="sidebarOption">
			{Icon && <Icon className="sidebarOption__icon" />}
			{Icon ? <h4>{title}</h4> : <p>{title}</p>}
		</Link>
	);
}

export default SidebarOption;
