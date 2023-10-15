<template>
	<div class="loyalty__tab">
		<div class="typical__loader" v-if="preloader">
			<img src="@/assets/images/loader.svg" class="loading" alt="" />
		</div>
		<div class="loyalty__tab-inner" v-if="!preloader">
			<div class="loyalty__levels">
				<div
					class="loyalty__level-item"
					:class="{ active: item.current }"
					v-for="(item, index) in levels.slice((page - 1) * perPage, page * perPage)"
					:key="index"
				>
					<div class="loyalty__level-item-inner">
						<img :src="require('@/assets/images/loyalty/' + item.image)" alt="" />
						<div class="loyalty__level-item-info">
							<b class="loyalty__level-name">LVL {{ index + 1 }}</b>
							<div class="loyalty__level-bottom">
								<span>Кэшбэк:</span>
								<b>{{ item.cashback + '%' }}</b>
							</div>
						</div>
					</div>
					<svg class="icon -rotate-180"><use xlink:href="icons.svg#icon-left"></use></svg>
				</div>
			</div>
			<div class="partner__info">
				<div class="partner__info-left">
					<div class="partner__info-item">
						<div class="partner__info-item-inner">
							<svg class="icon"><use xlink:href="icons.svg#icon-person"></use></svg>
							<span>0 (0/2)</span>
							<label>Уровень</label>
						</div>
					</div>
					<div class="partner__info-item !border-b">
						<div class="partner__info-item-inner">
							<svg class="icon"><use xlink:href="icons.svg#icon-briefcase"></use></svg>
							<span>0.00</span>
							<label>Сумма выигрышей</label>
						</div>
					</div>
					<div class="partner__info-item col-span-2 max-[625px]:!border-r-0">
						<div class="partner__info-item-inner">
							<svg class="icon"><use xlink:href="icons.svg#icon-star"></use></svg>
							<span>0.00</span>
							<label>Сумма ставок</label>
						</div>
					</div>
				</div>
				<div class="partner__info-right">
					<div class="partner__info-item-inner">
						<svg class="icon"><use xlink:href="icons.svg#icon-rub"></use></svg>
						<span>0.00</span>
						<label>Доступный баланс</label>
						<button type="button" class="btn btn--yellow min-w-[180px] flex justify-center">
							Забрать
						</button>
					</div>
				</div>
			</div>
			<div class="loyalty__text">
				<p>
					Вы получаете одну единицу опыта за каждые <strong>2 000.00 ₽</strong> ставок. Количество
					опыта, необходимое для получения каждого уровня растет в геометрической прогрессии: для
					получения первого уровня требуется 2 единицы опыта (сумма ставок
					<strong>4 000.00 ₽</strong>), для второго - 4 единицы опыта, для третьего - 8 единиц
					опыта, и так далее.
				</p>
				<p>
					Полученные средства могут использоваться для любых целей и не требуют отыгрыша. Уровень не
					сбрасывается с течением времени, на данный момент максимальный уровень, который можно
					получить - восьмой.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			preloader: true,
			levels: [
				{
					image: 'star1.png',
					cashback: 0.15,
					current: true,
				},
				{
					image: 'star2.png',
					cashback: 0.3,
					current: false,
				},
				{
					image: 'star3.png',
					cashback: 0.45,
					current: false,
				},
				{
					image: 'star4.png',
					cashback: 0.6,
					current: false,
				},
				{
					image: 'star5.png',
					cashback: 0.75,
					current: false,
				},
			],
			page: 1,
			perPage: 6,
			width: null,
		}
	},
	methods: {
		preloaderDestroy() {
			setTimeout(() => {
				this.preloader = false
			}, 150)
		},
		updateWidth() {
			this.width = window.innerWidth
			if (this.width < 1195) {
				if (this.width < 480) {
					this.perPage = 2
				} else {
					this.perPage = 3
				}
			} else {
				this.perPage = 6
			}
		},
	},
	mounted() {
		this.preloaderDestroy()
		window.addEventListener('resize', this.updateWidth)
		this.updateWidth()
	},
	computed: {
		numPages() {
			return Math.ceil(this.levels.length / this.perPage)
		},
	},
}
</script>
