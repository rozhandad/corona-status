<template>
	<div class="mobile-menu" v-if="width < 900">
		<div class="mobile-menu__menu" v-if="menu">
			<button class="mobile-menu__close" type="button" @click="menuCheck()">
				<svg class="icon"><use xlink:href="icons.svg#icon-close"></use></svg>
			</button>
			<ul>
				<li>
					<router-link to="/promotions">
						<svg class="icon"><use xlink:href="icons.svg#icon-star"></use></svg>
						Акции
					</router-link>
				</li>
				<li>
					<router-link to="/help">
						<svg class="icon"><use xlink:href="icons.svg#icon-help-circle"></use></svg>
						Поддержка
					</router-link>
				</li>
				<li>
					<router-link to="/fair">
						<svg class="icon"><use xlink:href="icons.svg#icon-fairness"></use></svg>
						Честная игра
					</router-link>
				</li>
				<li>
					<router-link to="/loyalty">
						<svg class="icon"><use xlink:href="icons.svg#icon-briefcase"></use></svg>
						Лояльность
					</router-link>
				</li>
				<li>
					<router-link to="/partner">
						<svg class="icon"><use xlink:href="icons.svg#icon-network"></use></svg>
						Партнерам
					</router-link>
				</li>
				<li>
					<a href="javascript:;" @click="$modal.show('friends-club')">
						<svg class="icon"><use xlink:href="icons.svg#icon-star"></use></svg>
						Friends club
					</a>
				</li>
			</ul>
		</div>
		<div class="mobile-menu__inner">
			<ul class="mobile-menu__wrapper">
				<li>
					<router-link to="/promo" active-class="active" exact-active-class="active">
						<div>
							<svg class="icon"><use xlink:href="icons.svg#icon-faucet"></use></svg>
						</div>
						Бонусы
					</router-link>
				</li>
				<li>
					<router-link to="/sport" active-class="active" exact-active-class="active">
						<div>
							<svg class="icon"><use xlink:href="icons.svg#icon-soccer"></use></svg>
						</div>
						Спорт
					</router-link>
				</li>
				<li>
					<router-link to="/lobby" active-class="active" exact-active-class="active">
						<div>
							<svg class="icon"><use xlink:href="icons.svg#icon-gamepad"></use></svg>
						</div>
						Лобби
					</router-link>
				</li>
				<li>
					<a href="javascript:;" :class="{ active: live }" @click="liveCheck()">
						<div>
							<svg class="icon"><use xlink:href="icons.svg#icon-stats"></use></svg>
						</div>
						Live
					</a>
				</li>
				<li>
					<a href="javascript:;" :class="{ active: menu }" @click="menuCheck()">
						<div>
							<svg class="icon"><use xlink:href="icons.svg#icon-more"></use></svg>
						</div>
						Ещё
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			width: null,
			menu: false,
			live: false,
		}
	},
	methods: {
		updateWidth() {
			this.width = window.innerWidth
		},
		liveCheck() {
			if (this.live) {
				this.live = false
				this.$emit('live', false)
			} else {
				this.live = true
				this.menu = false
				this.$emit('live', true)
			}
		},
		menuCheck() {
			if (this.menu) {
				this.menu = false
			} else {
				this.menu = true
				this.live = false
				this.$emit('live', false)
			}
		},
	},
	created() {
		window.addEventListener('resize', this.updateWidth)
		this.updateWidth()
	},
	watch: {
		$route(to, from) {
			this.menu = false
			this.live = false
			this.$emit('live', false)
		},
	},
}
</script>
