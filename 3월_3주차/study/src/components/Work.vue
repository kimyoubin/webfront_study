<template>
	<div class="work-page">
		<gnb-menu />
		<div class="content">
			Work page	
		</div>	
	</div>
</template>

<script>
import GnbMenu from './GnbMenu.vue'

export default {
	name: 'Work',
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
.work-page {
	font-size: 20px;
	width: 100%;
	height: 100vh;
	color: black;
	background-color: #c3f8ff;
}
.content {
	border-top: 1px solid #000;
	padding: 40px;
}

</style>
