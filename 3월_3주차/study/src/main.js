import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.js'
import App from './App.vue'

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
	router,
	renter: h => h(App)
}).$mount('#app')

