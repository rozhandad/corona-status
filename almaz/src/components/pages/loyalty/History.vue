<template>
	<div class="loyalty__tab">
		<div class="typical__loader" v-if="preloader">
			<img src="@/assets/images/loader.svg" class="loading" alt="" />
		</div>
		<div class="loyalty__tab-inner" v-if="!preloader">
			<div class="not-found">
				<b>N/A</b>
				<span>История отсутствует</span>
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
