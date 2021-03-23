<template>
	<div class="hello-page">
		HelloWorld page
		<v-link href="/About">About</v-link>
	</div>
</template>

<script>
import VLink from '@/components/VLink.vue'

export default {
	name: 'HelloWorld',
    components: { VLink },	
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
.hello-page {
	font-size: 20px;
	width: 100%;
	height: 100vh;
	color: black;
	background-color: #ffcfc3;
}
</style>
