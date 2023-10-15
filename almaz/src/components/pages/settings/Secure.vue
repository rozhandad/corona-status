<template>
	<div class="typical__tabs-block-tab">
		<div class="typical__loader" v-if="preloader">
			<img src="@/assets/images/loader.svg" class="loading" alt="" />
		</div>
		<div class="typical__tabs-block-tab-inner" v-if="!preloader">
			<div class="typical__tabs-block-tab-title">
				<h1>Безопасность</h1>
			</div>
			<div class="grid grid-cols-2 max-[475px]:grid-cols-1 gap-4 pb-[20px]">
				<div class="typical__input">
					<Transition
						enter-active-class="transition-all duration-150 ease-out"
						enter-class="translate-y-[20px] opacity-0"
						enter-to-class="translate-y-0 opacity-100"
						leave-active-class="transition-all duration-150 ease-out"
						leave-class="translate-y-0 opacity-100"
						leave-to-class="translate-y-[20px] opacity-0"
					>
						<div v-if="models.login.error.status" class="tooltip">
							<div class="tooltip__inner">{{ models.login.error.message }}</div>
							<div class="tooltip__arrow"></div>
						</div>
					</Transition>
					<label>Логин</label>
					<input
						type="text"
						@input="checkLogin(5, 16)"
						placeholder="Логин"
						v-model="models.login.model"
					/>
				</div>
				<div class="typical__input">
					<Transition
						enter-active-class="transition-all duration-150 ease-out"
						enter-class="translate-y-[20px] opacity-0"
						enter-to-class="translate-y-0 opacity-100"
						leave-active-class="transition-all duration-150 ease-out"
						leave-class="translate-y-0 opacity-100"
						leave-to-class="translate-y-[20px] opacity-0"
					>
						<div v-if="models.password.error.status" class="tooltip">
							<div class="tooltip__inner">{{ models.password.error.message }}</div>
							<div class="tooltip__arrow"></div>
						</div>
					</Transition>
					<label>Пароль</label>
					<input
						type="password"
						@input="checkPassword(8, 16)"
						placeholder="Пароль"
						v-model="models.password.pass_1"
					/>
				</div>
				<div class="typical__input">
					<Transition
						enter-active-class="transition-all duration-150 ease-out"
						enter-class="translate-y-[20px] opacity-0"
						enter-to-class="translate-y-0 opacity-100"
						leave-active-class="transition-all duration-150 ease-out"
						leave-class="translate-y-0 opacity-100"
						leave-to-class="translate-y-[20px] opacity-0"
					>
						<div
							v-if="
								models.password.pass_2 === null
									? false
									: models.password.pass_1 != models.password.pass_2
									? true
									: false
							"
							class="tooltip"
						>
							<div class="tooltip__inner">Пароли должны совпадать</div>
							<div class="tooltip__arrow"></div>
						</div>
					</Transition>
					<label>Пароль</label>
					<input type="password" placeholder="Повторите пароль" v-model="models.password.pass_2" />
				</div>
				<div class="typical__input">
					<label>Сохранить действия</label>
					<button type="button" class="btn btn--yellow !h-[44px] w-full flex justify-center">
						Сохранить
					</button>
				</div>
			</div>
			<div class="typical__tabs-block-tab-title">
				<h2>ДВУХФАКТОРНАЯ АУТЕНТИФИКАЦИЯ</h2>
			</div>
			<div
				class="flex items-center justify-between overflow-hidden relative rounded-[8px] bg-[#2f2352] px-4 h-[72px] max-[575px]:flex-col max-[575px]:items-start max-[575px]:h-fit max-[575px]:py-3 max-[575px]:space-y-2"
			>
				<span>Защитите свою учетную запись Friends дополнительным уровнем безопасности</span>
				<button
					@click="$modal.show('two-factor-settings')"
					type="button"
					class="btn btn--yellow !h-[36px] whitespace-nowrap"
				>
					Настройки 2FA
				</button>
				<img
					src="@/assets/images/twoFactor.png"
					class="absolute h-[280px] opacity-[0.04] -right-[30px] -top-[100px]"
					alt=""
				/>
			</div>
		</div>
		<TwoFactorSettings />
	</div>
</template>

<script>
export default {
	data() {
		return {
			preloader: true,
			models: {
				login: {
					model: '',
					error: {
						status: false,
						message: null,
					},
				},
				password: {
					pass_1: '',
					pass_2: '',
					error: {
						status: false,
						message: null,
					},
				},
			},
		}
	},
	methods: {
		preloaderDestroy() {
			setTimeout(() => {
				this.preloader = false
			}, 150)
		},
		async copyURL(value) {
			try {
				await navigator.clipboard.writeText(value)
			} catch ($e) {}
		},
		checkLogin(min, max) {
			if (Object.keys(this.models.login.model).length < min) {
				this.models.login.error = {
					status: true,
					message: 'Минимальная длина логина: ' + min + ' символов',
				}
			} else {
				this.models.login.error = {
					status: false,
					message: null,
				}
				if (Object.keys(this.models.login.model).length > max) {
					this.models.login.error = {
						status: true,
						message: 'Максимальная длина логина: ' + max + ' символов',
					}
				} else {
					this.models.login.error = {
						status: false,
						message: null,
					}
				}
			}
		},
		checkPassword(min, max) {
			if (Object.keys(this.models.password.pass_1).length < min) {
				this.models.password.error = {
					status: true,
					message: 'Минимальная длина пароля: ' + min + ' символов',
				}
			} else {
				this.models.password.error = {
					status: false,
					message: null,
				}
				if (Object.keys(this.models.password.pass_1).length > max) {
					this.models.password.error = {
						status: true,
						message: 'Максимальная длина пароля: ' + max + ' символов',
					}
				} else {
					this.models.password.error = {
						status: false,
						message: null,
					}
				}
			}
		},
	},
	mounted() {
		this.preloaderDestroy()
	},
	components: {
		TwoFactorSettings: () => import('@/components/modals/TwoFactorSettings.vue'),
	},
}
</script>
