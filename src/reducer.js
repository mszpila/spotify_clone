export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	ids: [],
	volume: 100,
	player: null,
	playback: null,
	deviceId: null,
	// msCurrent: null,
	// msDuration: null,
	// change to null before deplotyment
	// token:
	// 	"BQBxtKH_dZRuJTRUfYctZaKEqEFuuqsQl9xMr3w5BlBgqsbFCT_QHl9VpGCqJrUYgofORIut3cI4ZayjbNVSRi9-hhfKq0Zu-tZ_unQd9PTJ9h56HPmMMU3H-WNciAfwXBdqRVQrYUK4XHL3BtrvwvpGIdTHQw",
};

const reducer = (state, action) => {
	console.log(action);

	switch (action.type) {
		case "SET_USER":
			return { ...state, user: action.payload };
		case "SET_TOKEN":
			return { ...state, token: action.payload };
		case "SET_PLAYLISTS":
			return { ...state, playlists: action.payload };
		case "SET_DISCOVER_WEEKLY":
			return { ...state, discover_weekly: action.payload };
		case "SET_PLAYLISTS_ID":
			return { ...state, ids: action.payload };
		case "SET_VOLUME":
			return { ...state, volume: action.payload };
		case "SET_PLAYER":
			return { ...state, player: action.payload };
		case "SET_CURRENT_PLAYBACK":
			return { ...state, playback: action.payload };
		case "SET_DEVICE_ID":
			return { ...state, deviceId: action.payload };
		default:
			return state;
	}
};

export default reducer;
