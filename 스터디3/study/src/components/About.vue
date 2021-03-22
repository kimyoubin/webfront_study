<template>
	<div>
		About
		<v-link href="/helloworld">HelloWorld</v-link>
	</div>
</template>

<script>
import VLink from './VLink.vue'

export default {
    components: { VLink },
	name: 'About',
	props: {		
	},
	data() {
		return {

		}		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
	color: green
}
</style>
