<template>
	<div class="content__layout game">
		<section class="fullscreen game__top" v-if="width >= 900 || play">
			<div class="wrapper">
				<div class="game__inner">
					<fullscreen class="game__iframe" v-model="fullscreen">
						<div class="loader">
							<img src="@/assets/images/logotype.svg" class="loader__logotype" alt="" />
							<img src="@/assets/images/loader.svg" class="loader__loading" alt="" />
						</div>
					</fullscreen>
					<div class="game__controls" v-if="width >= 900">
						<div class="game__controls-left">
							<router-link to="/lobby" class="game__control-btn">
								<svg class="icon"><use xlink:href="icons.svg#icon-back"></use></svg>
							</router-link>
							<button
								type="button"
								class="game__control-btn"
								@click="fullscreen = !fullscreen"
								content="Полноэкранный режим"
								v-tippy="{ arrow: true, animation: 'shift-toward' }"
							>
								<svg class="icon"><use xlink:href="icons.svg#icon-fullscreen"></use></svg>
							</button>
							<button
								type="button"
								class="game__control-btn"
								@click="
									$modal.show('game-stats', {
										sumBets: 1200,
										mediumBet: 400,
										rtp: 12,
										topWin: 20000,
									})
								"
								content="Статистика"
								v-tippy="{ arrow: true, animation: 'shift-toward' }"
							>
								<svg class="icon"><use xlink:href="icons.svg#icon-stats"></use></svg>
							</button>
							<button
								type="button"
								class="game__control-btn"
								content="Добавить в избранные"
								v-tippy="{ arrow: true, animation: 'shift-toward' }"
							>
								<svg class="icon"><use xlink:href="icons.svg#icon-heart"></use></svg>
							</button>
							<button
								type="button"
								class="game__control-btn"
								@click="$modal.show('wallet')"
								content="Пополнить баланс"
								v-tippy="{ arrow: true, animation: 'shift-toward' }"
							>
								<svg class="icon"><use xlink:href="icons.svg#icon-coins"></use></svg>
							</button>
						</div>
						<div class="game__controls-right">
							<div class="game__controls-checkbox-inner">
								<a href="javascript:;" @click="demo = false" :class="{ active: demo === false }"
									>Обычный режим</a
								>
								<div
									class="game__controls-checkbox"
									:class="{ active: demo }"
									@click="demo = !demo"
								>
									<span></span>
								</div>
								<a href="javascript:;" @click="demo = true" :class="{ active: demo === true }"
									>Демо режим</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="game__about">
			<div class="wrapper">
				<div class="game__about-inner" v-if="width <= 900 && !play">
					<div class="flex flex-col space-y-2">
						<h1>Betty bongers</h1>
						<router-link to="/lobby" class="text-base text-[#b1bad3]">Fugaso</router-link>
					</div>
					<div class="game__tabs-blocks">
						<div class="game__tab">
							<div class="game__info">
								<div class="game__img">
									<img
										src="https://elsikora-image-router.com//300/100/0/237/groove_LilSantaBonusBuy"
										alt="Lil Santa: Bonus Buy"
									/>
								</div>
								<div class="game__buttons">
									<button type="button" @click="play = true" class="game__play">
										<svg class="icon"><use xlink:href="icons.svg#icon-play"></use></svg>
										Играть
									</button>
									<button type="button">Демо режим</button>
								</div>
								<div class="game__controls">
									<div class="game__controls-left">
										<router-link to="/lobby" class="game__control-btn">
											<svg class="icon"><use xlink:href="icons.svg#icon-back"></use></svg>
										</router-link>
										<button
											type="button"
											class="game__control-btn"
											@click="
												$modal.show('game-stats', {
													sumBets: 1200,
													mediumBet: 400,
													rtp: 12,
													topWin: 20000,
												})
											"
											content="Статистика"
											v-tippy="{ arrow: true, animation: 'shift-toward' }"
										>
											<svg class="icon"><use xlink:href="icons.svg#icon-stats"></use></svg>
										</button>
										<button
											type="button"
											class="game__control-btn"
											content="Добавить в избранные"
											v-tippy="{ arrow: true, animation: 'shift-toward' }"
										>
											<svg class="icon"><use xlink:href="icons.svg#icon-heart"></use></svg>
										</button>
										<button
											type="button"
											class="game__control-btn"
											@click="currentTab = 0"
											:class="{ active: currentTab === 0 }"
											content="Удачные выигрыши"
											v-tippy="{ arrow: true, animation: 'shift-toward' }"
										>
											<svg class="icon"><use xlink:href="icons.svg#icon-casino"></use></svg>
										</button>
										<button
											type="button"
											class="game__control-btn"
											@click="currentTab = 1"
											:class="{ active: currentTab === 1 }"
											content="Большие выигрыши"
											v-tippy="{ arrow: true, animation: 'shift-toward' }"
										>
											<svg class="icon"><use xlink:href="icons.svg#icon-favourite"></use></svg>
										</button>
										<button
											type="button"
											class="game__control-btn"
											@click="currentTab = 2"
											:class="{ active: currentTab === 2 }"
											content="Об игре"
											v-tippy="{ arrow: true, animation: 'shift-toward' }"
										>
											<svg class="icon"><use xlink:href="icons.svg#icon-info"></use></svg>
										</button>
									</div>
								</div>
								<div class="game__tab-mobiles">
									<div class="game__tab-mobile" v-if="currentTab === 0">
										<div class="not-found">
											<b>N/A</b>
											<span>История отсутствует</span>
										</div>
									</div>
									<div class="game__tab-mobile" v-if="currentTab === 1">
										<div class="table" v-if="bigWonTable.items.length">
											<table>
												<thead>
													<tr>
														<td v-for="(item, index) in bigWonTable.head" :key="index">
															{{ item }}
														</td>
													</tr>
												</thead>
												<tbody>
													<tr v-for="(item, index) in bigWonTable.items" :key="index">
														<td>{{ item.user }}</td>
														<td>{{ item.coeff }}</td>
														<td>{{ item.win }}</td>
														<td>{{ item.date }}</td>
													</tr>
												</tbody>
											</table>
										</div>
										<div class="not-found" v-if="!bigWonTable.items.length">
											<b>N/A</b>
											<span>История отсутствует</span>
										</div>
									</div>
									<div class="game__right game__tab-mobile" v-if="currentTab === 2">
										<p>
											Игра Lil Santa: Bonus Buy от провайдера Fugaso была запущена 05 фев. 2023г..
											Преимущество казино перед игроком в данном слоте - 4.00%, RTP - 96.00%.
											Показатель волатильности средний, по шкале от 1 до 100: 66.
										</p>
										<p>Преимущество казино: 4.00%</p>
										<ul>
											<li>
												<router-link to="/lobby"> Fugaso </router-link>
											</li>
											<li>
												<router-link to="/lobby"> Slots </router-link>
											</li>
											<li>
												<router-link to="/lobby"> Bonus Buy </router-link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="game__about-inner" v-if="width >= 900">
					<h1>Betty bongers</h1>
					<ul class="game__tabs">
						<li>
							<a href="javascript:;" @click="currentTab = 0" :class="{ active: currentTab === 0 }"
								>Большие выигрыши</a
							>
						</li>
						<li>
							<a href="javascript:;" @click="currentTab = 1" :class="{ active: currentTab === 1 }"
								>Удачные выигрыши</a
							>
						</li>
						<li>
							<a href="javascript:;" @click="currentTab = 2" :class="{ active: currentTab === 2 }"
								>Об игре</a
							>
						</li>
					</ul>
					<div class="game__tabs-blocks">
						<div class="game__tab" v-if="currentTab === 0">
							<div class="not-found">
								<b>N/A</b>
								<span>История отсутствует</span>
							</div>
						</div>
						<div class="game__tab" v-if="currentTab === 1">
							<div class="table" v-if="bigWonTable.items.length">
								<table>
									<thead>
										<tr>
											<td v-for="(item, index) in bigWonTable.head" :key="index">{{ item }}</td>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(item, index) in bigWonTable.items" :key="index">
											<td>{{ item.user }}</td>
											<td>{{ item.coeff }}</td>
											<td>{{ item.win }}</td>
											<td>{{ item.date }}</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="not-found" v-if="!bigWonTable.items.length">
								<b>N/A</b>
								<span>История отсутствует</span>
							</div>
						</div>
						<div class="game__tab" v-if="currentTab === 2">
							<div class="game__info">
								<div class="game__img">
									<img
										src="https://elsikora-image-router.com//300/100/0/237/groove_LilSantaBonusBuy"
										alt="Lil Santa: Bonus Buy"
									/>
								</div>
								<div class="game__right">
									<p>
										Игра Lil Santa: Bonus Buy от провайдера Fugaso была запущена 05 фев. 2023г..
										Преимущество казино перед игроком в данном слоте - 4.00%, RTP - 96.00%.
										Показатель волатильности средний, по шкале от 1 до 100: 66.
									</p>
									<p>Преимущество казино: 4.00%</p>
									<ul>
										<li>
											<router-link to="/lobby"> Fugaso </router-link>
										</li>
										<li>
											<router-link to="/lobby"> Slots </router-link>
										</li>
										<li>
											<router-link to="/lobby"> Bonus Buy </router-link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="games-box" v-if="play != true">
			<div class="wrapper">
				<div class="games-box__list">
					<GamesBox :list="games" :small="small" />
				</div>
			</div>
		</section>
		<Footer v-if="!play" />
		<router-link to="/lobby" class="mobileBtn" v-if="play">
			<svg class="icon"><use xlink:href="icons.svg#icon-logout"></use></svg>
		</router-link>
		<Stats />
	</div>
</template>

<script>
import VueFullscreen from 'vue-fullscreen'
import Vue from 'vue'
Vue.use(VueFullscreen)
export default {
	data() {
		return {
			width: null,
			fullscreen: false,
			play: false,
			demo: false,
			currentTab: 2,
			bigWonTable: {
				head: ['Игрок', 'Коэффициент', 'Выигрыш', 'Дата'],
				items: [
					{
						user: '№1. ***98475971',
						coeff: '75.00x',
						win: 900 + ' ₽',
						date: '06 фев. 2023г.',
					},
					{
						user: '№1. ***98475971',
						coeff: '75.00x',
						win: 900 + ' ₽',
						date: '06 фев. 2023г.',
					},
				],
			},
			games: [
				{
					id: 0,
					title: 'Похожие игры',
					items: [
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Drops Of Water',
							provider: 'EGT',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/72/egt425',
							online: 7,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Drops Of Water',
							provider: 'EGT',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/72/egt425',
							online: 7,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Drops Of Water',
							provider: 'EGT',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/72/egt425',
							online: 7,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Drops Of Water',
							provider: 'EGT',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/72/egt425',
							online: 7,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
						},
						{
							title: 'Drops Of Water',
							provider: 'EGT',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/72/egt425',
							online: 7,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
					],
				},
				{
					id: 0,
					title: 'Провайдеры игр',
					providers: true,
					items: [
						{
							id: 0,
							url: '/',
							image: require('@/assets/images/providers/netent.svg'),
						},
						{
							id: 1,
							url: '/',
							image: require('@/assets/images/providers/playngo.svg'),
						},
						{
							id: 2,
							url: '/',
							image: require('@/assets/images/providers/evolution.svg'),
						},
						{
							id: 3,
							url: '/',
							image: require('@/assets/images/providers/pragmaticplay.svg'),
						},
						{
							id: 4,
							url: '/',
							image: require('@/assets/images/providers/playtech.svg'),
						},
						{
							id: 5,
							url: '/',
							image: require('@/assets/images/providers/microgaming.svg'),
						},
						{
							id: 6,
							url: '/',
							image: require('@/assets/images/providers/yggdrasil.svg'),
						},
						{
							id: 7,
							url: '/',
							image: require('@/assets/images/providers/novomatic.svg'),
						},
					],
				},
			],
		}
	},
	methods: {
		updateWidth() {
			this.width = window.innerWidth
			if (this.width >= 900) {
				this.play = false
			}
		},
	},
	created() {
		window.addEventListener('resize', this.updateWidth)
		this.updateWidth()
	},
	components: {
		Footer: () => import('@/components/layout/Footer/Footer.vue'),
		GamesBox: () => import('@/components/globals/GamesBox.vue'),
		Stats: () => import('@/components/modals/Stats.vue'),
	},
	props: {
		small: {
			type: Boolean,
			default: () => {},
		},
	},
}
</script>
