import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Main',
		component: () => import('../views/Main.vue'),
		meta: {
			title: 'Онлайн казино - Friends',
		},
	},
	{
		path: '/wallet',
		component: () => import('../views/Wallet.vue'),
		meta: {
			title: 'Пополнение - Friends',
		},
	},
	{
		path: '/lobby',
		component: () => import('../views/Lobby.vue'),
		meta: {
			title: 'Лобби - Friends',
		},
	},
	{
		path: '/lobby/:id',
		component: () => import('../views/Lobby.vue'),
		meta: {
			title: 'Лобби - Friends',
		},
	},
	{
		path: '/sport',
		component: () => import('../views/Sport.vue'),
		meta: {
			title: 'Спорт - Friends',
		},
	},
	{
		path: '/promotions',
		component: () => import('../views/Promotions.vue'),
		meta: {
			title: 'Акции - Friends',
		},
	},
	{
		path: '/partner',
		component: () => import('../views/Partner.vue'),
		meta: {
			title: 'Партнерам - Friends',
		},
	},
	{
		path: '/loyalty',
		component: () => import('../views/Loyalty.vue'),
		meta: {
			title: 'Лояльность - Friends',
		},
	},
	{
		path: '/promo',
		component: () => import('../views/Promo.vue'),
		meta: {
			title: 'Промо - Friends',
		},
	},
	{
		path: '/settings',
		component: () => import('../views/Settings.vue'),
		meta: {
			title: 'Настройки - Friends',
		},
	},
	{
		path: '/profile',
		component: () => import('../views/History.vue'),
		meta: {
			title: 'Профиль - Friends',
		},
	},
	{
		path: '/fair',
		component: () => import('../views/Fair.vue'),
		meta: {
			title: 'Честная игра - Friends',
		},
	},
	{
		path: '/help',
		component: () => import('../views/Help.vue'),
		meta: {
			title: 'Поддержка - Friends',
		},
	},
	{
		path: '/responsibility',
		component: () => import('../views/Responsibility.vue'),
		meta: {
			title: 'Ответственная игра - Friends',
		},
	},
	{
		path: '/tos',
		component: () => import('../views/Tos.vue'),
		meta: {
			title: 'Пользовательское соглашение - Friends',
		},
	},
	{
		path: '/privacy',
		component: () => import('../views/Privacy.vue'),
		meta: {
			title: 'Политика конфиденциальности - Friends',
		},
	},
	{
		path: '/aml',
		component: () => import('../views/Aml.vue'),
		meta: {
			title: 'Противодействие коррупции - Friends',
		},
	},
	{
		path: '/game',
		component: () => import('../views/game/Index.vue'),
		meta: {
			title: 'Betty Bongers - Friends',
		},
	},
]

const router = new VueRouter({
	routes,
})

router.beforeEach((to, from, next) => {
	document.title = to.meta.title
	next()
})

export default router
