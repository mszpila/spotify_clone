// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

// https://developer.spotify.com/documentation/general/guides/authorization-guide/
export const authEndpoint = "https://accounts.spotify.com/authorize";

// established in the Spotify App -
// https://developer.spotify.com/documentation/general/guides/app-settings/
const redirectUri = "http://localhost:3000/";
// const redirectUri = "https://mszpila.github.io/spotify_clone/";

// Spotify App ID
const clientId = "227bcf1c0a174f888e12f43096773e43";

// https://developer.spotify.com/documentation/general/guides/scopes/
const scopes = [
	"user-read-playback-state",
	"user-read-currently-playing",
	"user-modify-playback-state",
	"user-top-read",
	// 'user-read-playback-position'
	"user-read-recently-played",
	"streaming",
	"user-read-email",
	"user-read-private",
	"user-library-read",
	"user-read-playback-position",
	"user-library-modify",
];

// token is like a pass string that authenticate who you are
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true"`;

export const getTokenFromUrl = () => {
	// window location is just the place where is the url
	// window.location.hash =
	// #access_token=BQBkz5BZk1wpfYIGlK8lQw55_FHau-e6CgVLdB13_2jlv6WOC9iH93WLoicJIRqDmZ3u5XTI4dedfr8DBIikShE8rDNym-pUQAyvKcdEyWYr-omGoKvo5TNGRRlTmdJAcPBI_2WK0ZuSpwAnM4lvDl0czdDhPg&token_type=Bearer&expires_in=3600
	// .substring(1) removes the "#"
	// .split("&") we got 3 items:
	// 0: "access_token=BQBkz5BZk1wpfYIGlK8lQw55_FHau-e6CgVLdB13_2jlv6WOC9iH93WLoicJIRqDmZ3u5XTI4dedfr8DBIikShE8rDNym-pUQAyvKcdEyWYr-omGoKvo5TNGRRlTmdJAcPBI_2WK0ZuSpwAnM4lvDl0czdDhPg"
	// 1: "token_type=Bearer"
	// 2: "expires_in=3600"
	// reduce function returns an object
	// access_token: "BQBkz5BZk1wpfYIGlK8lQw55_FHau-e6CgVLdB13_2jlv6WOC9iH93WLoicJIRqDmZ3u5XTI4dedfr8DBIikShE8rDNym-pUQAyvKcdEyWYr-omGoKvo5TNGRRlTmdJAcPBI_2WK0ZuSpwAnM4lvDl0czdDhPg"
	// expires_in: "3600"
	// token_type: "Bearer"
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((init, item) => {
			let parts = item.split("=");
			init[parts[0]] = decodeURIComponent(parts[1]);
			return init;
		}, {});
};
