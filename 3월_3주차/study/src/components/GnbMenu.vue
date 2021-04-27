<template>
    <div class="gnb-menu">
		<v-link 
			v-for="(item, key) in gnbMenu" 
			:key="key"
			:href="item.href">
			<slot>{{ item.menu }}</slot>
		</v-link>
    </div>
</template>

<script>
import VLink from '@/components/VLink.vue'

export default {
	name: 'gbnMenu',
	components: { VLink},	
	data() {
		return {
			gnbMenu: [
				{
					menu: 'index',
					href: '/'
				},
				{
					menu: 'About',
					href: '/About'
				},
				{
					menu: 'Work',
					href: '/Work'
				},
				{
					menu: 'Contact',
					href: '/Contact'
				},
			]
		}	
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
