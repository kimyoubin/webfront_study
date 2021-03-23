<template>
	<div class="about-page">
		About page
		<v-link href="/">HelloWorld</v-link>
	</div>
</template>

<script>
import VLink from '@/components/VLink.vue'

export default {
	name: 'About',
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
.about-page {
	font-size: 20px;
	width: 100%;
	height: 100vh;
	color: black;
	background-color: #e2c3ff;
}
</style>
