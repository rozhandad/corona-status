<template>
	<Teleport to="#modals-container">
		<Modal
			name="sign-up"
			class="auth modal"
			:shiftY="0.5"
			:adaptive="true"
			width="680"
			height="auto"
			@before-open="beforeOpen"
			@before-close="beforeClose"
		>
			<div class="auth__content">
				<button @click="$modal.hide('sign-up')" type="button" class="auth__close">
					<svg class="icon"><use xlink:href="icons.svg#icon-close"></use></svg>
				</button>
				<div
					class="auth__image"
					:style="{ 'background-image': 'url(' + require('@/assets/images/auth/signup.png') + ')' }"
				></div>
				<div class="auth__inner">
					<div class="auth__top">
						<div class="auth__title">Регистрация</div>
						<form class="modal__form">
							<div class="auth__tabs">
								<button
									type="button"
									:class="{ active: currentTab === 'click' }"
									@click="currentTab = 'click'"
								>
									В 1 клик
								</button>
								<button
									type="button"
									:class="{ active: currentTab === 'phone' }"
									@click="currentTab = 'phone'"
								>
									По телефону
								</button>
								<button
									type="button"
									:class="{ active: currentTab === 'login' }"
									@click="currentTab = 'login'"
								>
									По логину
								</button>
								<button
									type="button"
									:class="{ active: currentTab === 'socials' }"
									@click="currentTab = 'socials'"
								>
									Соц.сети
								</button>
							</div>
							<div class="auth__socials" v-if="currentTab === 'socials'">
								<button type="button">
									<svg class="icon"><use xlink:href="icons.svg#icon-vk"></use></svg>
								</button>
								<button type="button">
									<svg class="icon"><use xlink:href="icons.svg#icon-facebook"></use></svg>
								</button>
								<button type="button">
									<svg class="icon"><use xlink:href="icons.svg#icon-odnoklassniki"></use></svg>
								</button>
								<button type="button">
									<svg class="icon"><use xlink:href="icons.svg#icon-google"></use></svg>
								</button>
								<button type="button">
									<svg class="icon"><use xlink:href="icons.svg#icon-steam"></use></svg>
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
										inputmode="decimal"
										class="!pl-[81px]"
										v-mask="language.mask"
										v-model="models.phone"
										placeholder=""
									/>
								</div>
							</div>
							<div class="flex flex-col space-y-3" v-if="currentTab === 'login'">
								<div class="modal__input">
									<input type="text" placeholder="Придумайте логин" />
								</div>
								<div class="modal__input">
									<input type="password" placeholder="Придумайте пароль" />
								</div>
							</div>
							<div class="auth__promocode">
								<div class="modal__input" v-if="promo">
									<input type="password" placeholder="Промокод" />
								</div>
								<button type="button" @click="promo = false" v-if="promo">
									Не вводить промокод
								</button>
								<button type="button" @click="promo = true" v-if="!promo">
									У меня есть промокод
								</button>
							</div>
							<div class="modal__form-btn">
								<button type="submit">Регистрация</button>
							</div>
							<div class="modal__form-txt">
								Я подтверждаю, что мне исполнилось 18 лет и я ознакомился с
								<router-link to="/">условиями предоставления услуг</router-link>
							</div>
						</form>
					</div>
					<div class="auth__bottom pt-[20px]">
						<ul>
							<li>
								<a
									href="javascript:;"
									@click="
										$modal.hide('sign-up')
										$modal.show('sign-in')
									"
									>Уже есть аккаунт?</a
								>
							</li>
							<li>
								<a
									href="javascript:;"
									@click="
										$modal.hide('sign-up')
										$modal.show('forgot')
									"
									>Забыли пароль?</a
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
			currentTab: 'click',
			select: false,
			promo: false,
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
				login: '',
				password: '',
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
