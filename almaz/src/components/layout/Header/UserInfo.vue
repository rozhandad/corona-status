<template>
	<div class="header__user-information" v-on-clickaway="close">
		<div>
			<button @click="show = !show" class="btn-drop" type="button">
				<span class="btn-drop__ico-wrapper">
					<svg class="icon"><use xlink:href="icons.svg#icon-person"></use></svg>
				</span>
				<div class="btn-drop__ico-second">
					<svg class="icon"><use xlink:href="icons.svg#icon-dots"></use></svg>
				</div>
			</button>
		</div>
		<Transition
			enter-active-class="transition ease-out duration-100"
			enter-class="transform opacity-0 scale-95"
			enter-to-class="transform opacity-100 scale-100"
			leave-active-class="transition ease-in duration-75"
			leave-class="transform opacity-100 scale-100"
			leave-to-class="transform opacity-0 scale-95"
		>
			<div v-if="show" class="header__user-menu">
				<div class="header__user-menu-info">
					<router-link to="/profile">
						<span class="header__user-menu-avatar" style="background-color: rgb(0, 123, 255)"
							>V</span
						>
						<span class="header__user-menu-username">vk314035024</span>
					</router-link>
				</div>
				<ul class="header__user-menu-links">
					<li v-for="(item, index) in links" :key="index">
						<router-link :to="item.link.url" v-if="item.link">
							<span>
								<svg class="icon"><use :xlink:href="'icons.svg#icon-' + item.ico"></use></svg>
							</span>
							{{ item.link.name }}
						</router-link>
						<a
							href="javascript:;"
							@click="
								$modal.show(item.modal.modalName)
								show = false
							"
							v-if="item.modal"
						>
							<span>
								<svg class="icon"><use :xlink:href="'icons.svg#icon-' + item.ico"></use></svg>
							</span>
							{{ item.modal.name }}
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<span>
								<svg class="icon"><use xlink:href="icons.svg#icon-support"></use></svg>
							</span>
							Онлайн чат
						</a>
					</li>
					<li>
						<a href="javascript:;" @click="logout()">
							<span>
								<svg class="icon"><use xlink:href="icons.svg#icon-logout"></use></svg>
							</span>
							Выйти
						</a>
					</li>
				</ul>
			</div>
		</Transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			links: [
				{
					ico: 'settings',
					link: {
						url: '/settings',
						name: 'Настройки',
					},
				},
				{
					ico: 'promo',
					modal: {
						modalName: 'promo',
						name: 'Промокод',
					},
				},
				{
					ico: 'star',
					modal: {
						modalName: 'friends-club',
						name: 'Friends Club',
					},
				},
				{
					ico: 'history',
					link: {
						url: '/profile',
						name: 'История игры',
					},
				},
				{
					ico: 'network',
					link: {
						url: '/partner',
						name: 'Партнерам',
					},
				},
				{
					ico: 'fairness',
					link: {
						url: '/fair',
						name: 'Честная игра',
					},
				},
				{
					ico: 'help-circle',
					link: {
						url: '/help',
						name: 'Поддержка',
					},
				},
			],
		}
	},
	methods: {
		close() {
			this.show = false
		},
		logout() {
			this.$emit('logout', false)
			this.show = false
		},
	},
	watch: {
		$route(from, to) {
			this.show = false
		},
	},
}
</script>
