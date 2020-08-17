import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
	return (
		<div className="login">
			{/* Spotify logo */}
			{/* Login button */}
			<img
				// src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				// src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
				src="https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/1036/assets/56130/Spotify_Logo_CMYK_Green.png"
				alt="spotify logo"
			/>
			<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
		</div>
	);
}

export default Login;
