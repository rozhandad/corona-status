<template>
	<Teleport to="#modals-container">
		<Modal
			name="promo"
			class="promocode modal typical"
			:shiftY="0.5"
			:adaptive="true"
			width="680"
			height="auto"
			@before-open="beforeOpen"
			@before-close="beforeClose"
		>
			<div class="modal__container">
				<div class="modal__tabs modal__title">
					Промокод
					<button @click="$modal.hide('promo')" class="modal__close">
						<svg class="icon"><use xlink:href="icons.svg#icon-close"></use></svg>
					</button>
				</div>
				<div class="modal__content">
					<div class="promocode__inner">
						<div class="modal__alert">
							<div class="modal__alert-image">
								<img src="@/assets/images/promo.png" alt="" />
							</div>
							<div class="modal__alert-info">
								промокоды каждый день в нашей группе ВКонтакте
								<a href="javascript:;">@official_frc</a>
							</div>
						</div>
						<div class="auth__or">активация бонус-кода</div>
						<div class="typical__input-list">
							<div class="typical__input">
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
								<div class="typical__input--ico">
									<input
										type="text"
										v-model="models.promo"
										placeholder="Промокод"
										@input="checkPromocode(3, 16)"
									/>
									<button class="typical__input-btn">Активировать</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal__body">
					Для получения бонуса Вы должны привязать <br />
					Ваш аккаунт ВКонтакте и подписаться на нас
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
			error: {
				status: false,
				message: null,
			},
			models: {
				promo: '',
			},
		}
	},
	components: {
		Teleport,
	},
	methods: {
		beforeOpen(event) {
			document.body.classList.add('modal--active')
			this.modal = true
		},
		beforeClose() {
			this.modal = false
			document.body.classList.remove('modal--active')
			this.models.promo = ''
			this.error = {
				status: false,
				message: null,
			}
		},
		checkPromocode(min, max) {
			if (Object.keys(this.models.promo).length < min) {
				this.error = {
					status: true,
					message: 'Минимальная длина кода: ' + min + ' символа',
				}
			} else {
				this.error = {
					status: false,
					message: null,
				}
				if (Object.keys(this.models.promo).length > max) {
					this.error = {
						status: true,
						message: 'Максимальная длина промокода: ' + max + ' символов',
					}
				} else {
					this.error = {
						status: false,
						message: null,
					}
				}
			}
		},
	},
}
</script>
