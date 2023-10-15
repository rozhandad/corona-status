<template>
	<div class="rightside" :class="{ active: liveMobile }">
		<div class="rightside__inner">
			<div class="rightside__inner-block">
				<div class="rightside__wrapper">
					<div class="rightside__month">
						<div class="rightside__month-title">Множитель месяца</div>
						<div class="rightside__month-content">
							<router-link to="/" class="rightside__item">
								<div class="rightside__overlay">
									<svg class="icon"><use xlink:href="icons.svg#icon-play"></use></svg>
								</div>
								<div class="rightside__item-img">
									<span class="rightside__badge rightside__badge--purple">x111111</span>
									<img src="https://elsikora-image-router.com//300/100/0/13/644" alt="" />
								</div>
								<div class="rightside__item-info">
									<div class="rightside__game-name">Rio Gems</div>
									<div class="rightside__win-amount">610.00 ₽</div>
									<div class="rightside__user-link">***37863749</div>
								</div>
							</router-link>
						</div>
					</div>
					<div class="rightside__items">
						<div class="rightside__items-inner" ref="scrollRight">
							<router-link v-for="item in 15" :key="item.id" to="/" class="rightside__item">
								<div class="rightside__overlay">
									<svg class="icon"><use xlink:href="icons.svg#icon-play"></use></svg>
								</div>
								<div class="rightside__item-img">
									<span class="rightside__badge rightside__badge--blue">x3</span>
									<img src="https://elsikora-image-router.com//300/100/0/13/644" alt="" />
								</div>
								<div class="rightside__item-info">
									<div class="rightside__game-name">Rio Gems</div>
									<div class="rightside__win-amount">610.00 ₽</div>
									<div class="rightside__user-link">***37863749</div>
								</div>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	updated() {
		this.$nextTick(() => {
			const rightside = this.$refs.scrollRight
			rightside.scrollTop = rightside.scrollHeight
		})
	},
	mounted() {
		this.$nextTick(() => {
			const rightside = this.$refs.scrollRight
			rightside.scrollTop = rightside.scrollHeight
		})
	},
	props: {
		liveMobile: {
			type: Boolean,
			default: () => {},
		},
	},
}
</script>
