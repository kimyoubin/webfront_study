<template>
    <div class="v-link">
        <a :href="href"
			@click="go">
			<slot></slot>
		</a>
    </div>
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
</style>
