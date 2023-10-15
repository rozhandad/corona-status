<template>
	<div class="content__layout lobby">
		<div class="lobby__title">
			<Teleport to=".layout">
				<div class="lobby__title-ellipse-left"></div>
			</Teleport>
			<div class="wrapper">
				<div class="lobby__title-left">
					<h1>Лобби</h1>
					<p>
						Добро пожаловать в каталог игр Friends! <br />
						На выбор доступно несколько тысяч различных слотов и Live-игр.
					</p>
				</div>
				<div class="lobby__title-right">
					<div class="lobby__games-count">
						<label>Игр доступно</label>
						<div class="lobby__games-count-inner"><span>8546</span></div>
					</div>
				</div>
			</div>
		</div>
		<div class="lobby__content">
			<div class="wrapper">
				<div class="lobby__filters">
					<ul class="lobby__filters-links">
						<li v-for="(item, index) in links" :key="index">
							<router-link
								:to="item.url + '/' + index"
								active-class="active"
								exact-active-class="active"
								exact
							>
								<svg class="icon"><use :xlink:href="'icons.svg#icon-' + item.icon"></use></svg>
								<span>{{ item.name }}</span>
							</router-link>
						</li>
					</ul>
					<div class="lobby__filter-inner">
						<div class="lobby__filter-search">
							<svg class="icon"><use xlink:href="icons.svg#icon-search"></use></svg>
							<input type="text" v-model="models.search" placeholder="Например: Book of Ra" />
						</div>
						<div class="lobby__filter-right">
							<div class="lobby__filter-labels" v-on-clickaway="closeFilters">
								<div>
									<button
										@click="filters.status = !filters.status"
										:class="{ active: filters.status }"
										class="lobby__filter-providers-btn"
									>
										{{ filters.current }}
										<svg class="icon"><use xlink:href="icons.svg#icon-down"></use></svg>
									</button>
								</div>
								<Transition
									enter-active-class="transition-all duration-100 ease-in"
									enter-class="opacity-0"
									enter-to-class="opacity-100"
									leave-active-class="transition-all duration-100 ease-in"
									leave-class="opacity-100"
									leave-to-class="opacity-0"
								>
									<ul class="lobby__filter-menu scroll-0" v-if="filters.status">
										<li
											v-for="(item, index) in filters.items"
											:class="{ hidden: item === filters.current }"
											@click="
												filters.current = item
												filters.status = false
											"
											:key="index"
										>
											<a href="javascript:;">
												{{ item }}
											</a>
										</li>
									</ul>
								</Transition>
							</div>
							<div class="lobby__filter-providers" v-on-clickaway="closeProviders">
								<div>
									<button
										@click="providers.status = !providers.status"
										:class="{ active: providers.status }"
										class="lobby__filter-providers-btn"
									>
										<svg class="icon"><use xlink:href="icons.svg#icon-bets"></use></svg>
										{{ providers.current === null ? 'Провайдеры' : 'Провайдеры:' }}
										<span v-if="providers.current">{{ providers.current }}</span>
									</button>
								</div>
								<Transition
									enter-active-class="transition-all duration-100 ease-in"
									enter-class="opacity-0"
									enter-to-class="opacity-100"
									leave-active-class="transition-all duration-100 ease-in"
									leave-class="opacity-100"
									leave-to-class="opacity-0"
								>
									<ul class="lobby__filter-menu scroll-0" v-if="providers.status">
										<li
											v-for="(item, index) in providers.items"
											:class="{ hidden: item.name === filters.current }"
											@click="
												providers.current = item.name
												providers.status = false
											"
											:key="index"
										>
											<a href="javascript:;">
												<span>{{ item.name }}</span>
												<label>{{ item.games }}</label>
											</a>
										</li>
									</ul>
								</Transition>
							</div>
						</div>
					</div>
				</div>
				<div class="lobby__list games-box">
					<div class="lobby__list-inner">
						<GameCard v-for="(item, index) in gamesList" :key="index" :data="item"></GameCard>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Teleport from 'vue2-teleport'
export default {
	data() {
		return {
			links: [
				{
					url: '/lobby',
					icon: 'lobby-slots',
					name: 'Slots',
				},
				{
					url: '/lobby',
					icon: 'lobby-livegames',
					name: 'Live Games',
				},
				{
					url: '/lobby',
					icon: 'lobby-roulette',
					name: 'Roulette',
				},
				{
					url: '/lobby',
					icon: 'lobby-blackjack',
					name: 'Blackjack',
				},
				{
					url: '/lobby',
					icon: 'lobby-virtualsports',
					name: 'Virtual Sports',
				},
				{
					url: '/lobby',
					icon: 'lobby-bonusbuy',
					name: 'Bonus Buy',
				},
				{
					url: '/lobby',
					icon: 'lobby-jackpot',
					name: 'Jackpot',
				},
				{
					url: '/lobby',
					icon: 'lobby-instantwin',
					name: 'Instant Win',
				},
			],
			models: {
				search: '',
			},
			filters: {
				status: false,
				current: 'Все игры',
				items: ['Все игры', 'Недавние', 'Популярные', 'Новые', 'Избранные'],
			},
			providers: {
				status: false,
				current: null,
				items: [{ name: 'Netent', games: 158 }],
			},
			gamesList: [
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
					heart: {
						show: true,
						status: false,
					},
				},
				{
					title: 'Gator Gold Deluxe: Gigablox',
					provider: 'Yggdrasil',
					url: '/game',
					image: 'https://elsikora-image-router.com//300/100/0/234/wazdan_HotSlot777Rubies',
					online: 18,
					badge: {
						value: 'TOP',
						status: 'top',
					},
					heart: {
						show: true,
						status: false,
					},
				},
				{
					title: 'Gator Gold Deluxe: Gigablox',
					provider: 'Yggdrasil',
					url: '/game',
					image: 'https://elsikora-image-router.com//300/100/0/248/pragmaticexternal_FishEye',
					online: 18,
					badge: {
						value: 'New',
						status: 'new',
					},
					heart: {
						show: true,
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
					heart: {
						show: true,
						status: false,
					},
				},
				{
					title: 'Gator Gold Deluxe: Gigablox',
					provider: 'Yggdrasil',
					url: '/game',
					image: 'https://elsikora-image-router.com//300/100/0/234/wazdan_HotSlot777Rubies',
					online: 18,
					badge: {
						value: 'TOP',
						status: 'top',
					},
					heart: {
						show: true,
						status: false,
					},
				},
				{
					title: 'Gator Gold Deluxe: Gigablox',
					provider: 'Yggdrasil',
					url: '/game',
					image: 'https://elsikora-image-router.com//300/100/0/248/pragmaticexternal_FishEye',
					online: 18,
					badge: {
						value: 'New',
						status: 'new',
					},
					heart: {
						show: true,
						status: false,
					},
				},
				{
					title: 'Gator Gold Deluxe: Gigablox',
					provider: 'Yggdrasil',
					url: '/game',
					image:
						'https://elsikora-image-router.com//300/100/0/117/f0d9fce0cd9a43dbacf26dd7827f8723',
					online: 18,
					badge: {
						value: 'Select',
						status: 'select',
					},
					heart: {
						show: true,
						status: true,
					},
				},
				{
					title: 'Gator Gold Deluxe: Gigablox',
					provider: 'Yggdrasil',
					url: '/game',
					image: 'https://elsikora-image-router.com//300/100/0/234/wazdan_HotSlot777Rubies',
					online: 18,
					badge: {
						value: 'TOP',
						status: 'top',
					},
					heart: {
						show: true,
						status: false,
					},
				},
				{
					title: 'Gator Gold Deluxe: Gigablox',
					provider: 'Yggdrasil',
					url: '/game',
					image: 'https://elsikora-image-router.com//300/100/0/248/pragmaticexternal_FishEye',
					online: 18,
					badge: {
						value: 'New',
						status: 'new',
					},
					heart: {
						show: true,
						status: false,
					},
				},
				{
					title: 'Gator Gold Deluxe: Gigablox',
					provider: 'Yggdrasil',
					url: '/game',
					image: 'https://elsikora-image-router.com//300/100/0/234/wazdan_HotSlot777Rubies',
					online: 18,
					badge: {
						value: 'TOP',
						status: 'top',
					},
					heart: {
						show: true,
						status: false,
					},
				},
			],
		}
	},
	components: {
		Teleport,
		GameCard: () => import('@/components/globals/GameCard.vue'),
	},
	methods: {
		closeFilters() {
			this.filters.status = false
		},
		closeProviders() {
			this.providers.status = false
		},
	},
}
</script>
