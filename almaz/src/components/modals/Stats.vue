<template>
	<Teleport to="#modals-container">
		<Modal
			name="game-stats"
			class="stats modal typical"
			:shiftY="0.5"
			:adaptive="true"
			width="680"
			height="auto"
			@before-open="beforeOpen"
			@before-close="beforeClose"
		>
			<div class="modal__container">
				<div class="modal__tabs modal__title">
					Текущая статистика
					<button @click="$modal.hide('game-stats')" class="modal__close">
						<svg class="icon"><use xlink:href="icons.svg#icon-close"></use></svg>
					</button>
				</div>
				<div class="modal__content">
					<div class="stats__inner">
						<div class="stats__item">
							<span>Сумма ставок</span>
							<b>{{ sumBets === null ? 0.0 + ' ₽' : sumBets + ' ₽' }}</b>
						</div>
						<div class="stats__item">
							<span>Средняя ставка</span>
							<b>{{ mediumBet === null ? 0.0 + ' ₽' : mediumBet + ' ₽' }}</b>
						</div>
						<div class="stats__item">
							<span>Итоговый RTP</span>
							<b>{{ rtp === null ? 0.0 + ' %' : rtp + ' %' }}</b>
						</div>
						<div class="stats__item">
							<span>Топ выигрыш</span>
							<b>{{ topWin === null ? 0.0 + ' ₽' : topWin + ' ₽' }}</b>
						</div>
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
			sumBets: null,
			rtp: null,
			mediumBet: null,
			topWin: null,
		}
	},
	components: {
		Teleport,
	},
	methods: {
		beforeOpen(event) {
			document.body.classList.add('modal--active')
			this.modal = true
			this.sumBets = event.params.sumBets
			this.rtp = event.params.rtp
			this.mediumBet = event.params.mediumBet
			this.topWin = event.params.topWin
		},
		beforeClose() {
			this.modal = false
			document.body.classList.remove('modal--active')
		},
	},
}
</script>
