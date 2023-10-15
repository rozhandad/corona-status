<template>
	<header class="header [&_*]:z-[105]">
		<router-link to="/" exact-active-class="" active-class="" class="header__logotype">
			<img src="@/assets/images/logotype.svg" alt="" />
		</router-link>
		<div class="header__inner">
			<div class="header__inner-left">
				<ul class="header__links">
					<li v-for="item in links" :key="item.id">
						<router-link
							:to="item.url"
							active-class="header__link--active"
							exact-active-class="header__link--active"
							>{{ item.name }}</router-link
						>
					</li>
				</ul>
			</div>
			<div class="header__inner-right">
				<div class="header__auth-buttons" v-if="!auth">
					<button @click="$modal.show('sign-in')" class="btn btn--light">Вход</button>
					<button @click="$modal.show('sign-up')" class="btn btn--yellow">Регистрация</button>
				</div>
				<div class="header__user" v-if="auth">
					<div class="header__balance-inner">
						<div class="header__balance">
							<span class="header__balance-label">Баланс</span>
							<span class="header__balance-value"
								>0.00
								<div class="header__balance-icon">₽</div></span
							>
							<Transition
								enter-active-class="transition-all duration-[200ms] ease-out"
								:enter-class="
									balanceBadge.status === 'lose'
										? '-translate-y-[20px] opacity-0'
										: 'translate-y-[20px] opacity-0'
								"
								enter-to-class="translate-y-0 opacity-100"
								leave-active-class="transition-all duration-[200ms] ease-out"
								leave-class="translate-y-0 opacity-100"
								leave-to-class="-translate-y-[20px] opacity-0"
							>
								<div
									v-if="balanceBadge.status"
									class="header__balance-badge"
									:style="{
										'background-color': balanceBadge.status === 'lose' ? '#e54f4f' : '#5b9340',
									}"
								>
									<span>{{
										balanceBadge.status === 'lose'
											? '- ' + balanceBadge.value
											: '+ ' + balanceBadge.value
									}}</span>
									₽
								</div>
							</Transition>
						</div>
						<router-link to="/wallet" v-if="width < 744" class="btn btn--yellow"
							>Кошелек</router-link
						>
						<button v-if="width >= 744" @click="modalWallet()" class="btn btn--yellow">
							Кошелек
						</button>
					</div>
					<UserInfo @logout="logout" />
				</div>
				<button @click="initVersion()" class="header__btn-version btn-drop" type="button">
					<span class="btn-drop__ico-wrapper">
						<svg class="icon"><use xlink:href="icons.svg#icon-stats"></use></svg>
					</span>
					<div class="btn-drop__ico-second">
						<svg v-if="!small" class="icon"><use xlink:href="icons.svg#icon-close"></use></svg>
						<svg v-if="small" class="icon -rotate-180">
							<use xlink:href="icons.svg#icon-left"></use>
						</svg>
					</div>
				</button>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					id: 0,
					url: '/lobby',
					name: 'Игры',
				},
				{
					id: 1,
					url: '/sport',
					name: 'Спорт',
				},
				{
					id: 2,
					url: '/promotions',
					name: 'Акции',
				},
				{
					id: 3,
					url: '/partner',
					name: 'Партнерам',
				},
				{
					id: 4,
					url: '/loyalty',
					name: 'Лояльность',
				},
				{
					id: 5,
					url: '/promo',
					name: 'Бонусы',
				},
			],
			width: null,
		}
	},
	props: {
		small: {
			type: Boolean,
			default: () => {},
		},
		auth: {
			type: Boolean,
			default: () => {},
		},
		balanceBadge: {
			type: Object,
			default: () => {},
		},
	},
	components: {
		UserInfo: () => import('./UserInfo.vue'),
	},
	methods: {
		initVersion() {
			if (this.small) {
				this.$emit('small', false)
			} else {
				this.$emit('small', true)
			}
		},
		modalWallet() {
			this.$modal.show('wallet')
		},
		modalSignIn() {
			this.$modal.show('sign-in')
		},
		updateWidth() {
			this.width = window.innerWidth
		},
		logout(key) {
			this.$modal.show('dialog', {
				title: 'Вы точно хотите выйти?',
				class: 'confirm',
				buttons: [
					{
						title: 'Нет',
						handler: () => {
							this.$modal.hide('dialog')
						},
					},
					{
						title: 'Да',
						handler: () => {
							this.$emit('logout', key)
							this.$modal.hide('dialog')
						},
					},
				],
			})
		},
	},
	created() {
		window.addEventListener('resize', this.updateWidth)
		this.updateWidth()
	},
}
</script>
