<template>
	<Teleport to="#modals-container">
		<Modal
			name="sign-in"
			class="auth modal"
			:shiftY="0.5"
			:adaptive="true"
			width="680"
			height="auto"
			@before-open="beforeOpen"
			@before-close="beforeClose"
		>
			<div class="auth__content">
				<button @click="$modal.hide('sign-in')" type="button" class="auth__close">
					<svg class="icon"><use xlink:href="icons.svg#icon-close"></use></svg>
				</button>
				<div
					class="auth__image"
					:style="{ 'background-image': 'url(' + require('@/assets/images/auth/signup.png') + ')' }"
				></div>
				<div class="auth__inner">
					<div class="auth__top">
						<div class="auth__title">Войти</div>
						<div class="auth__socials">
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
						<div class="auth__or">Или</div>
						<form class="modal__form">
							<div class="modal__input">
								<input type="text" placeholder="Ваш логин" />
							</div>
							<div class="modal__input">
								<input type="password" placeholder="Ваш пароль" />
							</div>
							<div class="modal__form-btn">
								<button type="submit">Войти</button>
							</div>
							<div class="modal__form-txt">
								Я подтверждаю, что мне исполнилось 18 лет и я ознакомился с
								<router-link to="/">условиями предоставления услуг</router-link>
							</div>
						</form>
					</div>
					<div class="auth__bottom">
						<ul>
							<li>
								<a
									href="javascript:;"
									@click="
										$modal.hide('sign-in')
										$modal.show('sign-up')
									"
									>Нет аккаунта?</a
								>
							</li>
							<li>
								<a
									href="javascript:;"
									@click="
										$modal.hide('sign-in')
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
	},
}
</script>
