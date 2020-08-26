export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	ids: [],
	id: null,
	volume: 100,
	player: null,
	playback: null,
	deviceId: null,
	spotifyApi: null,
	playlist: null,
	library: null,
	saved: [],
	tracks: [],
	uris: null,
	query: null,
	recentTracks: null,
	recommandations: null,
	featuredPlaylists: null,
	newReleases: null,
	categories: null,
	topTracks: null,
	token: null,
	// token:
	// 	"BQBxtKH_dZRuJTRUfYctZaKEqEFuuqsQl9xMr3w5BlBgqsbFCT_QHl9VpGCqJrUYgofORIut3cI4ZayjbNVSRi9-hhfKq0Zu-tZ_unQd9PTJ9h56HPmMMU3H-WNciAfwXBdqRVQrYUK4XHL3BtrvwvpGIdTHQw",
};

const reducer = (state, action, index) => {
	// console.log(action);

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
		case "SET_API":
			return { ...state, spotifyApi: action.payload };
		case "SET_PLAYLIST":
			return { ...state, playlist: action.payload };
		case "SET_LIBRARY":
			return { ...state, library: action.payload };
		case "ADD_TO_LIBRARY":
			return {
				...state,
				library: {
					items: [...state.library.items, ...action.payload.items],
					href: action.payload.href,
					limit: action.payload.limit,
					next: action.payload.next,
					offset: action.payload.offset,
					previous: action.payload.previous,
					total: action.payload.total,
				},
			};
		case "SET_SAVED":
			return { ...state, saved: action.payload };
		case "ADD_SAVED":
			return {
				...state,
				saved: [...state.saved, ...action.payload],
			};
		case "SET_TRACKS":
			return { ...state, tracks: action.payload };
		case "ADD_TRACKS":
			return {
				...state,
				tracks: {
					items: [...state.tracks.items, ...action.payload.items],
					href: action.payload.href,
					limit: action.payload.limit,
					next: action.payload.next,
					offset: action.payload.offset,
					previous: action.payload.previous,
					total: action.payload.total,
				},
			};
		case "SET_URIS":
			return { ...state, uris: action.payload };
		case "SET_SINGLE_SAVED":
			return {
				...state,
				saved: [
					...state.saved,
					(state.saved[action.index] = action.payload),
				],
			};
		case "SET_QUERY":
			return { ...state, query: action.payload };
		case "SET_RECENT_TRACKS":
			return { ...state, recentTracks: action.payload };
		case "SET_RECOMMENDATIONS":
			return { ...state, recommandations: action.payload };
		case "SET_FEATURED_PLAYLISTS":
			return { ...state, featuredPlaylists: action.payload };
		case "SET_NEW_RELEASES":
			return { ...state, newReleases: action.payload };
		case "SET_CATEGORIES":
			return { ...state, categories: action.payload };
		case "SET_TOP_TRACKS":
			return { ...state, topTracks: action.payload };
		default:
			return state;
	}
};

export default reducer;
