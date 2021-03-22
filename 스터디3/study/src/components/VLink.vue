<template>
    <div>
        <a :href="href"
			:class="{ active: isActive }"
			@click="go">
			<slot></slot>
		</a>
    </div>
</template>

<script>
import routes from '../router.js';

export default {
	name: 'About',
	components: {routes},
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
<style lang="scss" scoped>
div { 
	color: pink;
}
</style>
