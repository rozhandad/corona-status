<template>
	<div id="app">
		<div class="loader" v-if="preloader">
			<img src="@/assets/images/logotype.svg" class="loader__logotype" alt="" />
			<img src="@/assets/images/loader.svg" class="loader__loading" alt="" />
		</div>
		<Transition
			enter-active-class="transition-all duration-300 ease-out"
			enter-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition-all duration-300 ease-out"
			leave-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div v-if="!preloader" class="layout" :class="{ 'layout--small': small }">
				<Header
					@small="initVersion"
					@logout="logout"
					:balanceBadge="balanceBadge"
					:auth="isAuth"
					:small="small"
				/>
				<main>
					<Leftside v-if="!small" />
					<div class="content">
						<div class="content__inner">
							<router-view :small="small"></router-view>
						</div>
					</div>
					<Rightside v-if="!small" :liveMobile="liveMobile" />
				</main>
				<MobileMenu @live="liveCheck" />
			</div>
		</Transition>
		<WalletModal />
		<SignIn />
		<SignUp />
		<Forgot />
		<Promo />
		<FriendsClub />
		<v-dialog />
	</div>
</template>

<script>
export default {
	data() {
		return {
			small: false,
			preloader: true,
			isAuth: true,
			liveMobile: false,
			balanceBadge: {
				status: null,
				value: null,
			},
		}
	},
	components: {
		Header: () => import('@/components/layout/Header/Header.vue'),
		Leftside: () => import('@/components/layout/Leftside/Leftside.vue'),
		Rightside: () => import('@/components/layout/Rightside/Rightside.vue'),
		MobileMenu: () => import('@/components/layout/MobileMenu/MobileMenu.vue'),

		WalletModal: () => import('@/components/modals/Wallet.vue'),
		SignIn: () => import('@/components/modals/SignIn.vue'),
		SignUp: () => import('@/components/modals/SignUp.vue'),
		Forgot: () => import('@/components/modals/Forgot.vue'),
		Promo: () => import('@/components/modals/Promo.vue'),
		FriendsClub: () => import('@/components/modals/FriendsClub.vue'),
	},
	methods: {
		initVersion(value) {
			this.small = value
			if (value) {
				localStorage.setItem('version', 'small')
			} else {
				localStorage.removeItem('version')
			}
		},
		preloaderDestroy() {
			setTimeout(() => {
				this.preloader = false
			}, 500)
		},
		liveCheck(status) {
			this.liveMobile = status
		},
		logout(key) {
			this.isAuth = key
		},
		viewBadgeBalance(type) {
			setTimeout(() => {
				this.balanceBadge = {
					status: type,
					value: 20,
				}
				setTimeout(() => {
					this.balanceBadge = {
						status: null,
						value: 0,
					}
				}, 500)
			}, 1500)
		},
	},
	mounted() {
		if (localStorage.getItem('version') === 'small') {
			this.small = true
		} else {
			localStorage.removeItem('version')
			this.small = false
		}
		this.preloaderDestroy()
		// status: lose/win
		this.viewBadgeBalance('lose')
	},
}
</script>
