<template>
	<div class="typical__tabs-block-tab">
		<div class="typical__loader" v-if="preloader">
			<img src="@/assets/images/loader.svg" class="loading" alt="" />
		</div>
		<div class="typical__tabs-block-tab-inner" v-if="!preloader">
			<div class="typical__tabs-block-tab-title">
				<h1>Игроки</h1>
			</div>
			<div class="typical__list">
				<div class="not-found">
					<b>N/A</b>
					<span>Нет приглашенных игроков</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			preloader: true,
		}
	},
	methods: {
		preloaderDestroy() {
			setTimeout(() => {
				this.preloader = false
			}, 150)
		},
	},
	mounted() {
		this.preloaderDestroy()
	},
}
</script>
