<template>
	<div class="content__layout promotions typical">
		<section class="typical__page-block">
			<div class="wrapper">
				<div class="typical__page-block-inner">
					<div class="typical__page-block-head">
						<div class="typical__page-block-caption">
							<h1>Акции и предложения</h1>
						</div>
						<div class="typical__page-block-info">
							Не пропустите возможность получить бонус в наших текущих акциях
						</div>
					</div>
					<div class="typical__page-block-body">
						<div class="promotions__list">
							<div class="promotions__item" v-for="(item, index) in items" :key="index">
								<div class="promotions__image">
									<img :src="require('@/assets/images/promotions/' + item.image)" alt="" />
								</div>
								<div class="promotions__body">
									<h2 class="promotions__title">{{ item.title }}</h2>
									<ul class="promotions__info">
										<li v-for="(item, index) in item.info" :key="index">
											<label>{{ item.label }}</label>
											<span>{{ item.value }}</span>
										</li>
									</ul>
									<div class="promotions__activate">
										<div class="promotions__activate-info">
											<span>Активация</span>
											<b>{{ item.activate === null ? 'Безлимитно' : item.activate }}</b>
										</div>
										<button class="btn btn--gray" type="button">Активировать</button>
									</div>
								</div>
							</div>
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
					image: '7.jpg',
					title: "Valentine's Day",
					activate: null,
					info: [
						{
							label: 'Игра:',
							value: 'Любая',
						},
						{
							label: 'Мин. депозит:',
							value: 1500 + ' ₽',
						},
						{
							label: 'Бонус:',
							value: 'До 50% на каждый депозит',
						},
						{
							label: 'Доп. вейджер:',
							value: 'x' + 0,
						},
						{
							label: 'Действует до:',
							value: '01 янв. 2023г., 23:59',
						},
					],
				},
				{
					image: '6.jpg',
					title: 'New Year 2023',
					activate: null,
					info: [
						{
							label: 'Игра:',
							value: 'Любая',
						},
						{
							label: 'Мин. депозит:',
							value: 1500 + ' ₽',
						},
						{
							label: 'Бонус:',
							value: 'До 50% на каждый депозит',
						},
						{
							label: 'Доп. вейджер:',
							value: 'x' + 0,
						},
						{
							label: 'Действует до:',
							value: '01 янв. 2023г., 23:59',
						},
					],
				},
				{
					image: '5.jpg',
					title: 'Halloween Party',
					activate: null,
					info: [
						{
							label: 'Игра:',
							value: 'Любая',
						},
						{
							label: 'Мин. депозит:',
							value: 100 + ' ₽',
						},
						{
							label: 'Бонус:',
							value: '10% на каждый депозит',
						},
						{
							label: 'Доп. вейджер:',
							value: 'x' + 0,
						},
						{
							label: 'Действует до:',
							value: '31 окт. 2022г., 23:59',
						},
					],
				},
				{
					image: '1.jpg',
					title: 'Постоянный бонус',
					activate: null,
					info: [
						{
							label: 'Игра:',
							value: 'Любая',
						},
						{
							label: 'Мин. депозит:',
							value: 100 + ' ₽',
						},
						{
							label: 'Бонус:',
							value: '10% на каждый депозит',
						},
						{
							label: 'Доп. вейджер:',
							value: 'x' + 0,
						},
						{
							label: 'Действует до:',
							value: '30 авг. 2022г., 23:59',
						},
					],
				},
				{
					image: '2.jpg',
					title: 'Welcome Bonus',
					activate: null,
					info: [
						{
							label: 'Игра:',
							value: 'Любая',
						},
						{
							label: 'Мин. депозит:',
							value: 100 + ' ₽',
						},
						{
							label: 'Бонус:',
							value: '30% на каждый депозит',
						},
						{
							label: 'Доп. вейджер:',
							value: 'x' + 0,
						},
						{
							label: 'Действует до:',
							value: '20 июн. 2022г., 23:59',
						},
					],
				},
			],
		}
	},
	components: {
		Footer: () => import('@/components/layout/Footer/Footer.vue'),
	},
}
</script>
