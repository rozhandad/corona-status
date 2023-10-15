<template>
	<Teleport to="#modals-container">
		<Modal
			name="forgot"
			class="auth modal"
			:shiftY="0.5"
			:adaptive="true"
			width="680"
			height="auto"
			@before-open="beforeOpen"
			@before-close="beforeClose"
		>
			<div class="auth__content">
				<button @click="$modal.hide('forgot')" type="button" class="auth__close">
					<svg class="icon"><use xlink:href="icons.svg#icon-close"></use></svg>
				</button>
				<div
					class="auth__image"
					:style="{ 'background-image': 'url(' + require('@/assets/images/auth/signup.png') + ')' }"
				></div>
				<div class="auth__inner">
					<div class="auth__top">
						<div class="auth__title">Сброс пароля</div>
						<form class="modal__form">
							<div class="auth__tabs">
								<button
									type="button"
									:class="{ active: currentTab === 'email' }"
									@click="currentTab = 'email'"
								>
									Через E-mail
								</button>
								<button
									type="button"
									:class="{ active: currentTab === 'phone' }"
									@click="currentTab = 'phone'"
								>
									Через телефон
								</button>
							</div>
							<div class="flex flex-col space-y-3" v-if="currentTab === 'phone'">
								<div class="modal__input">
									<div class="auth__flag-select modal__select" v-on-clickaway="close">
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
														v-for="(item, index) in items"
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
										type="text"
										class="!pl-[81px]"
										v-mask="language.mask"
										v-model="models.phone"
										placeholder=""
									/>
								</div>
							</div>
							<div class="flex flex-col space-y-3" v-if="currentTab === 'email'">
								<div class="modal__input">
									<input type="text" v-model="models.email" placeholder="E-mail" />
								</div>
							</div>
							<div class="modal__form-btn">
								<button type="submit">Сбросить</button>
							</div>
						</form>
					</div>
					<div class="auth__bottom pt-[20px]">
						<ul>
							<li>
								<a
									href="javascript:;"
									@click="
										$modal.hide('forgot')
										$modal.show('sign-in')
									"
									>Вспомнили пароль?</a
								>
							</li>
							<li>
								<a
									href="javascript:;"
									@click="
										$modal.hide('forgot')
										$modal.show('sign-up')
									"
									>Нет аккаунта?</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Modal>
	</Teleport>
</template>

<script>
import Teleport from 'vue2-teleport'
export default {
	data() {
		return {
			modal: false,
			currentTab: 'email',
			select: false,
			language: {
				flag: 'ru',
				value: '+7',
				mask: '(###) ### ## ##',
			},
			items: [
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
			models: {
				phone: '',
				email: '',
			},
		}
	},
	components: {
		Teleport,
	},
	methods: {
		beforeOpen() {
			document.body.classList.add('modal--active')
			this.modal = true
		},
		beforeClose() {
			this.modal = false
			document.body.classList.remove('modal--active')
		},
		selectLang(flag, value, mask) {
			this.language.flag = flag
			this.language.value = value
			this.language.mask = mask
			this.models.phone = ''
		},
		close() {
			this.select = false
		},
	},
}
</script>
