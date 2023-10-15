<template>
	<div class="content__layout">
		<section class="typical__page-block help">
			<div class="wrapper">
				<div class="typical__page-block-inner">
					<div class="typical__page-block-head">
						<div class="typical__page-block-caption">
							<h1>Помощь и поддержка</h1>
						</div>
						<div class="typical__page-block-info">
							Ответы на самые распространенные вопросы и связь со службой поддержки.
						</div>
					</div>
					<div class="typical__page-block-body">
						<div class="help__inner">
							<div class="help__item">
								<div class="help__caption">
									Способы связи с нами
									<span>Операторы онлайн 24 часа в сутки</span>
								</div>
								<div class="help__feedback">
									<div class="help__feedback-item">
										<div class="help__feedback-icon">
											<svg class="icon"><use xlink:href="icons.svg#icon-support"></use></svg>
										</div>
										<div class="help__feedback-wrapper">
											<div class="help__feedback-info">
												<b>Служба поддержки (Live)</b>
												<button type="button" class="help__feedback-link">Онлайн-чат</button>
												<span>Среднее время ответа: 10 минут</span>
											</div>
											<button class="help__feedback-btn">
												<svg class="icon -rotate-180">
													<use xlink:href="icons.svg#icon-left"></use>
												</svg>
											</button>
										</div>
									</div>
									<div class="help__feedback-item">
										<div class="help__feedback-icon">
											<svg class="icon"><use xlink:href="icons.svg#icon-envelope"></use></svg>
										</div>
										<div class="help__feedback-wrapper">
											<div class="help__feedback-info">
												<b>Служба поддержки (E-Mail)</b>
												<a href="mailto:support@friends-casino.com" class="help__feedback-link"
													>support@friends-casino.com</a
												>
												<span>Среднее время ответа: 1 день</span>
											</div>
											<a href="mailto:support@friends-casino.com" class="help__feedback-btn">
												<svg class="icon -rotate-180">
													<use xlink:href="icons.svg#icon-left"></use>
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>
							<HelpCard v-for="(item, index) in items" :key="index" :data="item" />
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
		return {
			items: [
				{
					caption: {
						text: 'Общие вопросы',
						badge: null,
					},
					items: [
						{
							title: 'О сайте',
						},
						{
							title: 'Бонусы',
						},
					],
				},
				{
					caption: {
						text: 'Пополнение баланса',
						badge: null,
					},
					items: [
						{
							title: 'Как пополнить баланс?',
						},
						{
							title: 'Комиссии',
						},
						{
							title: 'Сроки зачисления средств',
						},
					],
				},
				{
					caption: {
						text: 'Вывод средств',
						badge: null,
					},
					items: [
						{
							title: 'Как вывести средства?',
						},
						{
							title: 'Комиссии',
						},
						{
							title: 'Сроки вывода средств',
						},
					],
				},
			],
		}
	},
	components: {
		Footer: () => import('@/components/layout/Footer/Footer.vue'),
		HelpCard: () => import('@/components/pages/help/HelpCard.vue'),
	},
}
</script>
