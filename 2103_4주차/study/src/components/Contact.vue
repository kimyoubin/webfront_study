<template>
	<div class="contact-page">
		<gnb-menu />
		<div class="content">
			Contact page	
		</div>	
	</div>
</template>

<script>
import GnbMenu from './GnbMenu.vue'

export default {
	name: 'Contact',
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
.contact-page {
	font-size: 20px;
	width: 100%;
	height: 100vh;
	color: black;
	background-color: #dcffc3;
}
.content {
	border-top: 1px solid #000;
	padding: 40px;
}

</style>
