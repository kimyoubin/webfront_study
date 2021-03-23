import Vue from 'vue'
import routes from './router.js'

const app = new Vue({
	data: {
		currentRoute: window.location.pathname
	},
	computed: {
		ViewComponent() {
			return routes[this.currentRoute];
		}
	},
	render(h) { return h(this.ViewComponent); }
}).$mount('#app');

window.addEventListener('popstate', () => {
	app.currentRoute = window.location.pathname;
});