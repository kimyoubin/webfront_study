<template>
        <!-- <a :href="href"
			@click="go">
			<slot></slot>
		</a> -->
		<router-link to="/Index">Index Page</router-link>
</template>

<script>
import routes from '../router.js';

export default {
	props: {
		href: {
			type: String,
			required: true
		}
	},
	computed: {
		inActive() {
			return this.href === this.$root.currentRoute;
		}
	},
	methods: {
		go(event) {
			event.preventDefault();
			this.$root.currentRoute = this.href;
			window.history.pushState(
				null,
				routes[this.href],
				this.href
			)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-link { 
	color: pink;
}
a {
	text-decoration: none;
	list-style:none;
	color: #fff;
	font-size: 18px;
	margin: 0 30px;
}
</style>
