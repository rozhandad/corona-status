<template>
	<Teleport to="#modals-container">
		<Modal
			name="friends-club"
			class="friends-club wallet modal typical"
			:shiftY="0.5"
			:adaptive="true"
			width="680"
			height="auto"
			@before-open="beforeOpen"
			@before-close="beforeClose"
		>
			<div class="modal__container">
				<div class="modal__tabs">
					<button
						class="modal__tab"
						@click="currentTab = 'bust'"
						:class="{ 'modal__tab--active': currentTab === 'bust' }"
					>
						<svg class="icon"><use xlink:href="icons.svg#icon-fast"></use></svg>
						Буст
					</button>
					<button
						class="modal__tab"
						@click="currentTab = 'cran'"
						:class="{ 'modal__tab--active': currentTab === 'cran' }"
					>
						<svg class="icon"><use xlink:href="icons.svg#icon-faucet2"></use></svg>
						Кран
					</button>
					<button @click="$modal.hide('friends-club')" class="modal__close">
						<svg class="icon"><use xlink:href="icons.svg#icon-close"></use></svg>
					</button>
				</div>
				<div class="flex flex-col" v-if="currentTab === 'bust'">
					<div class="modal__content">
						<div class="friends-club__inner">
							<div class="friends-club__title">Буст</div>
							<div class="modal__alert">
								<div class="modal__alert-image">
									<img src="@/assets/images/bust.png" alt="" />
								</div>
								<div class="modal__alert-info">Получай 1% на остаток по счету раз в 24 часа.</div>
							</div>
							<div class="auth__or">Следующий буст через</div>
							<div class="friends-club__activate" v-if="status === 0">
								<button class="btn btn--yellow" type="button" @click="status = 1">
									Активировать
								</button>
							</div>
							<div class="friends-club__activate" v-if="status === 1">
								<div class="friends-club__time">
									<span>01</span>:<span>23</span>:<span>07</span>
								</div>
							</div>
						</div>
					</div>
					<div class="modal__body">
						Для получения бонуса Вы должны привязать <br />
						Ваш аккаунт ВКонтакте и подписаться на нас
					</div>
				</div>
				<div class="flex flex-col" v-if="currentTab === 'cran'">
					<div class="modal__content">
						<div class="friends-club__inner">
							<div class="friends-club__title">Кран</div>
							<div class="modal__alert">
								<div class="modal__alert-image">
									<img src="@/assets/images/give.png" alt="" />
								</div>
								<div class="modal__alert-info">
									Получайте до 52.00 ₽ каждый день на QIWI кошелек, на который имеется хотя бы один
									успешный вывод за последний месяц.
								</div>
							</div>
							<div class="auth__or">крутите барабан</div>
							<div class="friends-club__wheel">
								<div
									class="friends-club__wheel-arrow"
									:style="{
										'background-image': 'url(' + require('@/assets/images/badge.svg') + ')',
									}"
								></div>
								<ul
									class="friends-club__wheel-inner"
									:style="{ transform: 'translate(-90.5px, 0px)' }"
								>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
									<li>1.75₽</li>
								</ul>
							</div>
							<div class="typical__input-list">
								<div class="modal__input">
									<div class="modal__input-icon">
										<img
											src="@/assets/images/pay-systems/qiwi.png"
											class="w-[17px] h-[17px]"
											alt=""
										/>
									</div>
									<input
										type="text"
										v-mask="'+# (###) ### ## ##'"
										placeholder="+7 999 XXX XX XX"
										v-model="models.number"
									/>
								</div>
								<div class="friends-club__activate">
									<button class="btn btn--yellow" type="button">Крутить</button>
								</div>
							</div>
						</div>
					</div>
					<div class="modal__body">
						Кран могут использовать игроки, которые имеют <br />
						первый уровень и выше. <a href="javascript:;">Подробнее</a>
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
			currentTab: 'bust',
			status: 0,
			models: {
				nubmer: '',
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
		},
	},
}
</script>
