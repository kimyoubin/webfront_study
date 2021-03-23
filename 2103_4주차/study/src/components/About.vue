<template>
	<div class="about-page">
		<gnb-menu />
		<div class="content">
			About page	
		</div>			
	</div>
</template>

<script>
import GnbMenu from './GnbMenu.vue'

export default {
	name: 'About',
    components: { GnbMenu },	
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
.content {
	border-top: 1px solid #000;
	padding: 40px;
}
</style>
