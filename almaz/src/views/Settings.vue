<template>
	<div class="content__layout settings typical">
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
									<div
										v-if="avatar === 0"
										class="max-[1024px]:!text-lg"
										style="background-color: #007bff; color: #fff"
									>
										V
									</div>
									<img
										v-if="avatar === 1"
										src="https://sun9-north.userapi.com/sun9-87/s/v1/ig2/XViopQK49t2BSix2EfgLssu4CNkBajgal2wmhItQa9bZU1DPlxar3ANv4IvYI1qkV8IMz_66NAO955QWzkUvi7gW.jpg?size=1213x2160&quality=95&type=album"
										alt=""
									/>
								</div>
								<div class="typical__tabs-block-user-info" v-on-clickaway="closeEdit">
									<button
										class="flex items-center h-[44px]"
										type="button"
										v-if="!editState"
										@click="
											editState = true
											models.login = user.login
										"
									>
										{{ user.login }}
										<svg class="icon ml-2"><use xlink:href="icons.svg#icon-edit"></use></svg>
									</button>
									<div class="w-[180px] h-[44px] relative" v-if="editState">
										<Transition
											enter-active-class="transition-all duration-150 ease-out"
											enter-class="translate-y-[20px] opacity-0"
											enter-to-class="translate-y-0 opacity-100"
											leave-active-class="transition-all duration-150 ease-out"
											leave-class="translate-y-0 opacity-100"
											leave-to-class="translate-y-[20px] opacity-0"
										>
											<div v-if="error.status" class="tooltip">
												<div class="tooltip__inner">{{ error.message }}</div>
												<div class="tooltip__arrow"></div>
											</div>
										</Transition>
										<button
											type="button"
											@click="saveLogin(5, 16)"
											class="w-[44px] h-[44px] absolute flex text-xs text-[#a5acbb] transition-all duration-300 ease-out hover:text-white items-center justify-center right-0 bottom-0"
										>
											<svg class="icon ml-2"><use xlink:href="icons.svg#icon-success"></use></svg>
										</button>
										<input
											type="text"
											@keyup.enter="saveLogin(5, 16)"
											@input="changeUserName(5, 16)"
											v-model="models.login"
											class="!bg-transparent !pr-[32px] !border-[2px] !border-[#332560] !text-white"
										/>
									</div>
								</div>
							</div>
						</div>
						<div class="typical__tabs-block-body">
							<div class="typical__tabs-block-nav-label">Настройки</div>
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
						<Secure v-if="currentTab.index === 1" />
						<Seans v-if="currentTab.index === 2" />
						<Verification v-if="currentTab.index === 3" />
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
			user: {
				login: 'vk314035024',
			},
			width: null,
			tabs: [
				{
					icon: 'person',
					value: 'Общее',
				},
				{
					icon: 'fairness',
					value: 'Безопасность',
				},
				{
					icon: 'network',
					value: 'Сеансы',
				},
				{
					icon: 'shield',
					value: 'Верификация',
				},
			],
			select: false,
			editState: false,
			error: {
				status: false,
				message: null,
			},
			models: {
				login: '',
			},
		}
	},
	components: {
		Footer: () => import('@/components/layout/Footer/Footer.vue'),
		Index: () => import('@/components/pages/settings/Index.vue'),
		Secure: () => import('@/components/pages/settings/Secure.vue'),
		Seans: () => import('@/components/pages/settings/Seans.vue'),
		Verification: () => import('@/components/pages/settings/Verification.vue'),
	},
	methods: {
		setTab(value, item) {
			this.currentTab = {
				index: value,
				icon: item.icon,
				name: item.value,
			}
			localStorage.setItem('settings.currentTab.index', value)
			localStorage.setItem('settings.currentTab.icon', item.icon)
			localStorage.setItem('settings.currentTab.name', item.value)
		},
		initTab() {
			if (localStorage.getItem('settings.currentTab.index') === null) {
				this.currentTab.index = 0
				localStorage.setItem('settings.currentTab.index', 0)
				localStorage.setItem('settings.currentTab.icon', 'person')
				localStorage.setItem('settings.currentTab.name', 'Общее')
			} else {
				this.currentTab.index = parseInt(localStorage.getItem('settings.currentTab.index'))
				this.currentTab.icon = localStorage.getItem('settings.currentTab.icon')
				this.currentTab.name = localStorage.getItem('settings.currentTab.name')
			}
		},
		updateWidth() {
			this.width = window.innerWidth
		},
		closeSelect() {
			this.select = false
		},
		closeEdit() {
			this.editState = false
			this.error = {
				status: false,
				message: null,
			}
		},
		changeUserName(min, max) {
			if (Object.keys(this.models.login).length < min) {
				this.error = {
					status: true,
					message: 'Минимальная длина логина: ' + min + ' символов',
				}
			} else {
				this.error = {
					status: false,
					message: null,
				}
				if (Object.keys(this.models.login).length > max) {
					this.error = {
						status: true,
						message: 'Максимальная длина логина: ' + max + ' символов',
					}
				} else {
					this.error = {
						status: false,
						message: null,
					}
					this.user.login = this.models.login
				}
			}
		},
		saveLogin(min, max) {
			if (Object.keys(this.models.login).length < min) {
				this.error = {
					status: true,
					message: 'Минимальная длина логина: ' + min + ' символов',
				}
			} else {
				this.error = {
					status: false,
					message: null,
				}
				if (Object.keys(this.models.login).length > max) {
					this.error = {
						status: true,
						message: 'Максимальная длина логина: ' + max + ' символов',
					}
				} else {
					this.error = {
						status: false,
						message: null,
					}
					this.user.login = this.models.login
					this.editState = false
				}
			}
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
