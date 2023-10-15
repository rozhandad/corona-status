<template>
	<div class="content__layout partner typical">
		<section class="typical__tabs-block">
			<div class="wrapper">
				<div class="typical__tabs-block-inner">
					<div class="typical__tabs-block-sidebar">
						<div
							class="typical__tabs-block-top max-[1024px]:mb-[18px] max-[1024px]:!p-[12px_15px] max-[1024px]:!justify-start max-[1024px]:border-b max-[1024px]:border-[#2b214c]"
						>
							<div
								class="typical__tabs-block-top-inner max-[1024px]:!flex-row max-[1024px]:!space-y-0 max-[1024px]:space-x-4"
							>
								<div
									class="typical__tabs-block-avatar max-[1024px]:!p-0 max-[1024px]:!border-0 max-[1024px]:!w-[48px] max-[1024px]:!h-[48px]"
								>
									<div v-if="avatar === 0" style="background-color: #007bff; color: #fff">V</div>
									<img
										v-if="avatar === 1"
										src="https://sun9-north.userapi.com/sun9-87/s/v1/ig2/XViopQK49t2BSix2EfgLssu4CNkBajgal2wmhItQa9bZU1DPlxar3ANv4IvYI1qkV8IMz_66NAO955QWzkUvi7gW.jpg?size=1213x2160&quality=95&type=album"
										alt=""
									/>
								</div>
								<div class="typical__tabs-block-user-info">ID партнера: #272614</div>
							</div>
						</div>
						<div class="typical__tabs-block-body">
							<div class="typical__tabs-block-nav-label">Кабинет партнера</div>
							<ul class="typical__tabs-block-nav" v-if="width >= 1025">
								<li v-for="(item, index) in tabs" :key="index">
									<a
										href="javascript:;"
										@click="setTab(index, item)"
										:class="{ active: currentTab.index === index }"
									>
										<div class="typical__tabs-block-nav-ico">
											<svg class="icon">
												<use :xlink:href="'icons.svg#icon-' + item.icon"></use>
											</svg>
										</div>
										{{ item.value }}
									</a>
								</li>
							</ul>
							<div
								class="typical__tabs-select relative"
								v-on-clickaway="closeSelect"
								v-if="width <= 1025"
							>
								<div>
									<button
										type="button"
										:class="{ 'rounded-bl-none rounded-br-none': select }"
										@click="select = !select"
										class="py-2 px-3 rounded-[8px] bg-[#2a1d54] flex items-center"
									>
										<div class="typical__tabs-block-nav-ico !bg-[#37276a]">
											<svg class="icon">
												<use :xlink:href="'icons.svg#icon-' + currentTab.icon"></use>
											</svg>
										</div>
										{{ currentTab.name }}
										<div class="text-xs ml-3">
											<svg class="icon"><use xlink:href="icons.svg#icon-down"></use></svg>
										</div>
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
									<ul class="lobby__filter-menu scroll-0 !bg-[#2a1d54]" v-if="select">
										<li
											v-for="(item, index) in tabs"
											:class="{ hidden: currentTab.name === tabs.value }"
											@click="
												setTab(index, item)
												select = false
											"
											:key="index"
										>
											<a href="javascript:;" class="hover:bg-[#322460]">
												<span>{{ item.value }}</span>
											</a>
										</li>
									</ul>
								</Transition>
							</div>
						</div>
					</div>
					<div class="typical__tabs-block-content">
						<Index v-if="currentTab.index === 0" />
						<Companies v-if="currentTab.index === 1" />
						<Stats v-if="currentTab.index === 2" />
						<Users v-if="currentTab.index === 3" />
						<History v-if="currentTab.index === 4" />
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
			avatar: 0,
			currentTab: {
				index: 0,
				icon: 'person',
				name: 'Общее',
			},
			width: null,
			tabs: [
				{
					icon: 'person',
					value: 'Общее',
				},
				{
					icon: 'fairness',
					value: 'Кампании',
				},
				{
					icon: 'stats',
					value: 'Статистика',
				},
				{
					icon: 'network',
					value: 'Игроки',
				},
				{
					icon: 'history',
					value: 'Лог начислений',
				},
			],
			select: false,
		}
	},
	components: {
		Footer: () => import('@/components/layout/Footer/Footer.vue'),
		Index: () => import('@/components/pages/partner/Index.vue'),
		Companies: () => import('@/components/pages/partner/Companies.vue'),
		Stats: () => import('@/components/pages/partner/stats/Index.vue'),
		Users: () => import('@/components/pages/partner/Users.vue'),
		History: () => import('@/components/pages/partner/History.vue'),
	},
	methods: {
		setTab(value, item) {
			this.currentTab = {
				index: value,
				icon: item.icon,
				name: item.value,
			}
			localStorage.setItem('partner.currentTab.index', value)
			localStorage.setItem('partner.currentTab.icon', item.icon)
			localStorage.setItem('partner.currentTab.name', item.value)
		},
		initTab() {
			if (localStorage.getItem('partner.currentTab.index') === null) {
				this.currentTab.index = 0
				localStorage.setItem('partner.currentTab.index', 0)
				localStorage.setItem('partner.currentTab.icon', 'person')
				localStorage.setItem('partner.currentTab.name', 'Общее')
			} else {
				this.currentTab.index = parseInt(localStorage.getItem('partner.currentTab.index'))
				this.currentTab.icon = localStorage.getItem('partner.currentTab.icon')
				this.currentTab.name = localStorage.getItem('partner.currentTab.name')
			}
		},
		updateWidth() {
			this.width = window.innerWidth
		},
		closeSelect() {
			this.select = false
		},
	},
	mounted() {
		this.initTab()
	},
	created() {
		window.addEventListener('resize', this.updateWidth)
		this.updateWidth()
	},
}
</script>
