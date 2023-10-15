<template>
	<div class="content__layout">
		<section class="history">
			<div class="wrapper">
				<div class="history__inner">
					<div class="history__user">
						<div class="history__user-card">
							<div class="history__user-avatar" :style="{ 'background-color': 'rgb(0, 123, 255)' }">
								V
							</div>
							<div class="history__user-info">
								<b>vk314035024</b>
								<span>На сайте с 10 янв. 2023г.</span>
							</div>
						</div>
						<ul class="history__user-stats">
							<li>
								<span>Сумма ставок</span>
								<b>0.00 ₽</b>
							</li>
							<li>
								<span>Сделано ставок</span>
								<b>0.00 ₽</b>
							</li>
							<li>
								<span>Сумма выигрышей</span>
								<b>0.00 ₽</b>
							</li>
							<li>
								<span>Лучший выигрыш</span>
								<b>0.00 ₽</b>
							</li>
						</ul>
					</div>
					<div class="history__content">
						<div class="not-found">
							<b>N/A</b>
							<span>История отсутствует</span>
						</div>
					</div>
				</div>
			</div>
		</section>
		<Footer />
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	components: {
		Footer: () => import('@/components/layout/Footer/Footer.vue'),
	},
}
</script>
