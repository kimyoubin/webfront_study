import index from "@/components/index.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Work from "@/components/Work.vue";

const routes = [
	{
		path: '/',
		component: index
	},
	{
		path: '/About',
		component: About
	},
	{
		path: '/Contact',
		component: Contact
	},
	{
		path: '/Work',
		component: Work
	},
]

export default routes;