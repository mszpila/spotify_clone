// React/html
//   <button class="toggle-favorite" @click="toggle">
//     <FavoriteIcon
//       class="toggle-favorite__icon"
//       :class="iconClasses"
//       @animationend.native="onIconAnimationEnds"
//     />
//     <transition name="favorite-particles-transition">
//       <div v-if="animating" class="toggle-favorite__particles"></div>
//     </transition>
//   </button>

// import FavoriteIcon from "./FavoriteIcon";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
export default {
	name: "ToggleFavorite",
	components: {
		FavoriteBorderRoundedIcon,
	},
	data() {
		return {
			favorited: false,
			animating: false,
		};
	},
	computed: {
		iconClasses() {
			return {
				"toggle-favorite__icon--favorited": this.favorited,
				"toggle-favorite__icon--animate": this.animating,
			};
		},
	},
	methods: {
		toggle() {
			// Only animate on favoriting.
			if (!this.favorited) {
				this.animating = true;
			}

			this.favorited = !this.favorited;
		},
		onIconAnimationEnds() {
			this.animating = false;
		},
	},
};
