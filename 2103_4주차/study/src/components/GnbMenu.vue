<template>
    <div class="gnb-menu">
        <v-link href="/">index</v-link>
		<v-link href="/About">About</v-link>
		<v-link href="/Work">Work</v-link>
		<v-link href="/Contact">Contact</v-link>
    </div>
</template>

<script>
import VLink from '@/components/VLink.vue'

export default {
	name: 'gbnMenu',
	components: { VLink },	
	props: {
	},
	computed: {
	},
	methods: {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gnb-menu {
	width: 100%;
	height: 80px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	background-color: #515151;
}

.gnb-menu a {
	
}
</style>
