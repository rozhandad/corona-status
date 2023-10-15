<template>
	<div class="typical__tabs-block-tab">
		<div class="typical__loader" v-if="preloader">
			<img src="@/assets/images/loader.svg" class="loading" alt="" />
		</div>
		<div class="typical__tabs-block-tab-inner" v-if="!preloader">
			<div class="typical__tabs-block-tab-title">
				<h1>Общее</h1>
			</div>
			<div class="typical__input-list">
				<div class="typical__input">
					<label>Профиль VK</label>
					<input type="text" v-model="models.vk" disabled />
				</div>
				<div class="typical__input">
					<label>E-mail</label>
					<div class="typical__input--ico">
						<input type="text" v-model="models.email" placeholder="Ваш E-mail" />
						<button type="button" class="typical__input-btn">
							<span>ОК</span>
						</button>
					</div>
				</div>
				<div class="typical__input typical__input--ico">
					<label>Телефон</label>
					<div class="typical__input--ico">
						<div class="modal__input w-full">
							<div class="auth__flag-select modal__select" v-on-clickaway="closeLanguage">
								<div>
									<button @click="select = !select" class="modal__select-button" type="button">
										<svg class="icon shrink-0">
											<use :xlink:href="'icons.svg#flag-' + language.flag"></use>
										</svg>
										{{ language.value }}
									</button>
								</div>
								<Transition>
									<div v-if="select" class="modal__select-inner scroll-0">
										<div class="wallet__list-inner">
											<button
												@click="
													selectLang(item.flag, item.value, item.mask)
													select = false
												"
												v-for="(item, index) in flags"
												:key="index"
												class="wallet__list-item"
												type="button"
											>
												<div class="flex items-center">
													<div class="wallet__list-item-image">
														<svg class="icon">
															<use :xlink:href="'icons.svg#flag-' + item.flag"></use>
														</svg>
													</div>
													{{ item.value }}
												</div>
											</button>
										</div>
									</div>
								</Transition>
							</div>
							<input
								inputmode="decimal"
								class="!pl-[81px]"
								v-mask="language.mask"
								v-model="models.phone"
								placeholder=""
							/>
						</div>
						<button type="button" class="typical__input-btn">
							<span>ОК</span>
						</button>
					</div>
				</div>
				<div class="flex items-center py-2">
					<svg class="icon shrink-0 mr-4"><use xlink:href="icons.svg#icon-plus"></use></svg>
					<div class="flex flex-wrap gap-2 items-center">
						<button
							type="button"
							class="rounded-full py-2 px-4 text-sm font-[500] transition-all duration-300 ease-out bg-[#3b5999] hover:bg-[#2c4374]"
						>
							Facebook
						</button>
						<button
							type="button"
							class="rounded-full py-2 px-4 text-sm font-[500] transition-all duration-300 ease-out bg-[#db8a37] hover:bg-[#c47626]"
						>
							OK
						</button>
						<button
							type="button"
							class="rounded-full py-2 px-4 text-sm font-[500] transition-all duration-300 ease-out bg-[#db4437] hover:bg-[#c63024]"
						>
							Google
						</button>
						<button
							type="button"
							class="rounded-full py-2 px-4 text-sm font-[500] transition-all duration-300 ease-out bg-[#363c4a] hover:bg-[#2e333f]"
						>
							Steam
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			preloader: true,
			models: {
				vk: 'https://vk.com/id314035024',
				email: '',
				phone: '',
			},
			language: {
				flag: 'ru',
				value: '+7',
				mask: '(###) ### ## ##',
			},
			select: false,
			flags: [
				{
					flag: 'ru',
					value: '+7',
					mask: '(###) ### ## ##',
				},
				{
					flag: 'en',
					value: '+1',
					mask: '(###) ### ## ##',
				},
				{
					flag: 'de',
					value: '+22',
					mask: '### ## ##',
				},
				{
					flag: 'pl',
					value: '+243',
					mask: '### ## #',
				},
			],
		}
	},
	methods: {
		preloaderDestroy() {
			setTimeout(() => {
				this.preloader = false
			}, 150)
		},
		selectLang(flag, value, mask) {
			this.language.flag = flag
			this.language.value = value
			this.language.mask = mask
			this.models.phone = ''
		},
		async copyURL(value) {
			try {
				await navigator.clipboard.writeText(value)
			} catch ($e) {}
		},
		closeLanguage() {
			this.select = false
		},
	},
	mounted() {
		this.preloaderDestroy()
	},
}
</script>
