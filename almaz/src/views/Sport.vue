<template>
	<div class="content__layout">
		<section class="fullscreen sport">
			<div class="wrapper">
				<div class="sport__inner">
					<div class="loader">
						<img src="@/assets/images/logotype.svg" class="loader__logotype" alt="" />
						<img src="@/assets/images/loader.svg" class="loader__loading" alt="" />
					</div>
				</div>
			</div>
		</section>
		<Footer v-if="width >= 900" />
		<router-link to="/lobby" class="mobileBtn" v-if="width <= 900">
			<svg class="icon"><use xlink:href="icons.svg#icon-logout"></use></svg>
		</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			width: null,
		}
	},
	methods: {
		updateWidth() {
			this.width = window.innerWidth
		},
	},
	created() {
		window.addEventListener('resize', this.updateWidth)
		this.updateWidth()
	},
	components: {
		Footer: () => import('@/components/layout/Footer/Footer.vue'),
	},
}
</script>
