import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'

Vue.config.productionTip = false

import { directive as onClickaway } from 'vue-clickaway'
Vue.directive('on-clickaway', onClickaway)

import VModal from 'vue-js-modal'
Vue.use(VModal, { dialog: true })

import VueMask from 'v-mask'
Vue.use(VueMask)

import VueTippy, { TippyComponent } from 'vue-tippy'
Vue.use(VueTippy)

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

Vue.component('tippy', TippyComponent)

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
