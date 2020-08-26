import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
	return (
		<div className="login">
			<img
				src="https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/1036/assets/56130/Spotify_Logo_CMYK_Green.png"
				alt="spotify logo"
			/>
			<a href={loginUrl}>LOG IN</a>
		</div>
	);
}

export default Login;
