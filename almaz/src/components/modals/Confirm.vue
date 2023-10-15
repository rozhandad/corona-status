<template>
	<Teleport to="#modals-container">
		<Modal
			name="confirm"
			class="confirm modal"
			:shiftY="0.5"
			:adaptive="true"
			width="680"
			height="auto"
			@before-open="beforeOpen"
			@before-close="beforeClose"
		>
			<div class="modal__content">
				<div class="confirm__inner">
					<svg class="icon"><use xlink:href="icons.svg#icon-alert"></use></svg>
					<span>{{ text }}</span>
					<div class="confirm__buttons">
						<button @click="$modal.hide('confirm')">Нет</button>
						<button class="confirm__btn--confirm" @click.stop="$emit('acceptActionConfirm', key)">
							Да
						</button>
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
			text: null,
			key: null,
		}
	},
	components: {
		Teleport,
	},
	methods: {
		beforeOpen(event) {
			document.body.classList.add('modal--active')
			this.modal = true
			this.text = event.params.text
			this.key = event.params.key
		},
		beforeClose() {
			this.modal = false
			document.body.classList.remove('modal--active')
		},
	},
}
</script>
