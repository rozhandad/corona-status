<template>
	<div class="content__layout">
		<section class="wallet wallet--page modal">
			<div class="wrapper">
				<div class="modal-container max-[900px]:pb-[calc(6px_+_54px)]">
					<div class="modal__tabs">
						<button
							class="modal__tab"
							@click="currentTab = 'deposit'"
							:class="{ 'modal__tab--active': currentTab === 'deposit' }"
						>
							<svg class="icon"><use xlink:href="icons.svg#icon-plus"></use></svg>
							Депозит
						</button>
						<button
							class="modal__tab"
							@click="currentTab = 'withdraw'"
							:class="{ 'modal__tab--active': currentTab === 'withdraw' }"
						>
							<svg class="icon"><use xlink:href="icons.svg#icon-minus"></use></svg>
							Вывод
						</button>
						<button
							class="modal__tab"
							@click="currentTab = 'history'"
							:class="{ 'modal__tab--active': currentTab === 'history' }"
						>
							<svg class="icon"><use xlink:href="icons.svg#icon-time"></use></svg>
							История
						</button>
					</div>
					<div class="modal__content">
						<div class="wallet__tab-content" v-if="currentTab === 'deposit'">
							<div class="flex w-full flex-col">
								<div class="modal__label">Выберите способ</div>
								<div class="modal__select" v-on-clickaway="closeDepositSelect">
									<div>
										<button
											:class="{ active: deposit.select }"
											@click="deposit.select = !deposit.select"
											class="modal__select-button"
											type="button"
										>
											<img
												:src="
													require('@/assets/images/pay-systems/' + deposit.operator.image + '.png')
												"
												alt=""
											/>
											{{ deposit.operator.name }}
											<div class="modal__select-opener">
												<svg class="icon"><use xlink:href="icons.svg#icon-down"></use></svg>
											</div>
										</button>
									</div>
									<Transition>
										<div v-if="deposit.select" class="modal__select-inner scroll-0">
											<div class="modal__label">Все способы</div>
											<div class="wallet__list-inner">
												<button
													@click="
														selectPayDeposit(item.image, item.items)
														deposit.select = false
													"
													v-for="(item, index) in deposit.paySystems"
													:key="index"
													class="wallet__list-item"
													type="button"
												>
													<div class="flex items-center">
														<div class="wallet__list-item-image">
															<img
																:src="require('@/assets/images/pay-systems/' + item.image + '.png')"
																alt=""
															/>
														</div>
														{{ item.name }}
													</div>
													<span class="text-xs text-[#828F9A]">{{ item.comission + '%' }}</span>
												</button>
											</div>
										</div>
									</Transition>
								</div>
							</div>
							<div class="flex w-full flex-col">
								<div class="modal__label">Выберите оператора</div>
								<div class="wallet__sub-buttons">
									<button
										:class="{ active: deposit.operator.id === index }"
										@click="selectOperatorDeposit(item.name, index, item.image, item.parameters)"
										v-for="(item, index) in deposit.operators"
										:key="index"
									>
										<img
											:src="require('@/assets/images/pay-systems/' + item.image + '.png')"
											alt=""
										/>
										{{ item.name }}
									</button>
								</div>
							</div>
							<div class="flex w-full flex-col">
								<div class="modal__label">Сумма пополнения</div>
								<div class="modal__form">
									<div class="modal__input">
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
													deposit.value === null
														? false
														: deposit.value <= deposit.operator.parameters.min - 1
												"
												class="tooltip"
											>
												<div class="tooltip__inner">
													Минимальный депозит через {{ deposit.operator.name }}:
													{{ deposit.operator.parameters.min }} ₽
												</div>
												<div class="tooltip__arrow"></div>
											</div>
										</Transition>
										<div class="modal__input-icon">
											<svg class="icon"><use xlink:href="icons.svg#icon-rub"></use></svg>
										</div>
										<input
											type="number"
											inputmode="decimal"
											@input="inputValueDeposit(deposit.operator.parameters.max)"
											v-model="deposit.value"
										/>
									</div>
									<div class="modal__form-buttons">
										<button
											:class="{ active: deposit.value === item }"
											@click="depositSetValue(item)"
											v-for="(item, index) in deposit.buttons.slice(
												(page - 1) * perPage,
												page * perPage,
											)"
											:key="index"
											type="button"
										>
											{{ item + '₽' }}
										</button>
									</div>
									<div class="modal__form-btn">
										<button type="submit">Перейти к оплате</button>
									</div>
								</div>
							</div>
							<div class="wallet__footer">
								<div class="wallet__footer-txt">
									Комиссия: <span>{{ deposit.operator.parameters.comission + '%' }}</span>
								</div>
								<div class="wallet__footer-txt">
									Лимит одного пополнения: <br />
									<span
										>{{ deposit.operator.parameters.min + ' ₽' }} −
										{{ deposit.operator.parameters.max + ' ₽' }}</span
									>
								</div>
							</div>
						</div>

						<div class="wallet__tab-content" v-if="currentTab === 'withdraw'">
							<div class="flex w-full flex-col">
								<div class="modal__label">Выберите способ</div>
								<div class="modal__select" v-on-clickaway="closeWithdrawSelect">
									<div>
										<button
											:class="{ active: withdraw.select }"
											@click="withdraw.select = !withdraw.select"
											class="modal__select-button"
											type="button"
										>
											<img
												:src="
													require('@/assets/images/pay-systems/' + withdraw.operator.image + '.png')
												"
												alt=""
											/>
											{{ withdraw.operator.name }}
											<div class="modal__select-opener">
												<svg class="icon"><use xlink:href="icons.svg#icon-down"></use></svg>
											</div>
										</button>
									</div>
									<Transition>
										<div v-if="withdraw.select" class="modal__select-inner scroll-0">
											<div class="modal__label">Все способы</div>
											<div class="wallet__list-inner">
												<button
													@click="
														selectPayWithdraw(item.image, item.items)
														withdraw.select = false
													"
													v-for="(item, index) in withdraw.paySystems"
													:key="index"
													class="wallet__list-item"
													type="button"
												>
													<div class="flex items-center">
														<div class="wallet__list-item-image">
															<img
																:src="require('@/assets/images/pay-systems/' + item.image + '.png')"
																alt=""
															/>
														</div>
														{{ item.name }}
													</div>
													<span class="text-xs text-[#828F9A]">{{ item.comission + '%' }}</span>
												</button>
											</div>
										</div>
									</Transition>
								</div>
							</div>
							<div class="flex w-full flex-col">
								<div class="modal__label">Выберите оператора</div>
								<div class="wallet__sub-buttons">
									<button
										:class="{ active: withdraw.operator.id === index }"
										@click="selectOperatorWithdraw(item.name, index, item.image, item.parameters)"
										v-for="(item, index) in withdraw.operators"
										:key="index"
									>
										<img
											:src="require('@/assets/images/pay-systems/' + item.image + '.png')"
											alt=""
										/>
										{{ item.name }}
									</button>
								</div>
							</div>
							<div class="flex w-full flex-col">
								<div class="modal__label">Номер счёта</div>
								<div class="modal__form">
									<div class="modal__input">
										<div class="modal__input-icon">
											<img
												:src="
													require('@/assets/images/pay-systems/' + withdraw.operator.image + '.png')
												"
												class="w-[17px] h-[17px]"
												alt=""
											/>
										</div>
										<input
											type="text"
											v-mask="withdraw.operator.mask"
											:placeholder="withdraw.operator.placeholder"
											v-model="withdraw.value"
										/>
									</div>
								</div>
							</div>
							<div class="flex w-full flex-col">
								<div class="wallet__content-block !grid grid-cols-2 gap-4">
									<div class="flex flex-col">
										<div class="modal__label">Сумма вывода</div>
										<div class="modal__input">
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
														withdraw.sum === null
															? false
															: withdraw.sum <= withdraw.operator.parameters.min - 1
													"
													class="tooltip"
												>
													<div class="tooltip__inner">
														Мин. вывод: {{ withdraw.operator.parameters.min + '₽' }}
													</div>
													<div class="tooltip__arrow"></div>
												</div>
											</Transition>
											<div class="modal__input-icon">
												<svg class="icon"><use xlink:href="icons.svg#icon-rub"></use></svg>
											</div>
											<input
												type="number"
												inputmode="decimal"
												@input="inputValueWithdraw(withdraw.operator.parameters.max)"
												v-model="withdraw.sum"
											/>
										</div>
									</div>
									<div class="flex flex-col">
										<div class="modal__label">К получению</div>
										<div class="modal__input">
											<div class="modal__input-icon">
												<svg class="icon"><use xlink:href="icons.svg#icon-rub"></use></svg>
											</div>
											<input
												type="text"
												:value="
													withdraw.operator.parameters.comission
														? withdraw.sum -
														  (withdraw.sum * withdraw.operator.parameters.comission) / 100
														: withdraw.sum
												"
												disabled
											/>
										</div>
									</div>
								</div>
								<div class="modal__form-btn">
									<button type="submit">Создать заявку</button>
								</div>
								<div class="wallet__fast-withdraws" v-on-clickaway="closeFastWithdraws">
									<Transition
										enter-active-class="transition-all duration-150 ease-out"
										enter-class="translate-y-[20px] opacity-0"
										enter-to-class="translate-y-0 opacity-100"
										leave-active-class="transition-all duration-150 ease-out"
										leave-class="translate-y-0 opacity-100"
										leave-to-class="translate-y-[20px] opacity-0"
									>
										<div v-if="fastWithdraws" class="tooltip">
											<div class="tooltip__inner">
												Вывод средств до 30-и минут для Вашего аккаунта
											</div>
											<div class="tooltip__arrow"></div>
										</div>
									</Transition>
									<button
										type="button"
										:class="{ active: fastWithdraws }"
										@click="fastWithdraws = !fastWithdraws"
									>
										<svg class="icon"><use xlink:href="icons.svg#icon-lightning"></use></svg>
										Быстрые выплаты активированы
									</button>
								</div>
							</div>
							<div class="wallet__footer">
								<div class="wallet__footer-txt">
									Комиссия: <span>{{ withdraw.operator.parameters.comission + '%' }}</span>
								</div>
								<div class="wallet__footer-txt">
									Лимит одного пополнения: <br />
									<span
										>{{ withdraw.operator.parameters.min + ' ₽' }} −
										{{ withdraw.operator.parameters.max + ' ₽' }}</span
									>
								</div>
							</div>
						</div>

						<div class="wallet__tab-content max-[695px]:!p-0" v-if="currentTab === 'history'">
							<div class="history">
								<div
									class="history__nav !pt-0 max-[500px]:[&_button]:min-w-fit max-[500px]:[&_button]:px-[16px] max-[500px]:[&_button]:h-[36px]"
								>
									<button
										@click="history.currentTab = 'deposit'"
										:class="{ active: history.currentTab === 'deposit' }"
									>
										Пополнения
									</button>
									<button
										@click="history.currentTab = 'withdraw'"
										:class="{ active: history.currentTab === 'withdraw' }"
									>
										Выводы
									</button>
								</div>
								<div class="history__content">
									<div class="history__tab" v-show="history.currentTab === 'deposit'">
										<div class="wallet__history">
											<div
												class="wallet__history-item"
												v-on:click="historyItem"
												v-for="(item, index) in history.deposit.items"
												:key="index"
											>
												<div class="wallet__history-head">
													<div class="wallet__history-left">
														<div class="wallet__history-logo">
															<img
																:src="require('@/assets/images/pay-systems/' + item.operator.image)"
																alt=""
															/>
														</div>
														<div class="wallet__history-info">
															<span>{{ item.operator.name }}</span>
															<p>ID операции: {{ item.id }}</p>
														</div>
													</div>
													<div class="wallet__history-center">
														<div class="wallet__history-date">{{ item.date }}</div>
														<div class="wallet__history-sum">{{ item.sum + ' ₽' }}</div>
													</div>
													<div class="wallet__history-right">
														<div
															class="wallet__history-badge"
															:class="item.badge.status === 'error' ? 'error' : 'success'"
														>
															{{
																item.badge.status === 'error'
																	? 'Ошибка'
																	: '' || item.badge.status === 'success'
																	? 'Успешно'
																	: '' || item.badge.status === 'wait'
																	? 'Зачисляем..'
																	: ''
															}}
														</div>
													</div>
												</div>
												<div class="wallet__history-content">
													<div class="wallet__history-content-inner">
														<div class="wallet__history-content-item">
															Сумма транзакции:
															<span>{{ item.sum + ' ₽' }}</span>
														</div>
														<div class="wallet__history-content-item">
															Дата операции:
															<span>{{ item.date }}, {{ item.time }}</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="history__tab" v-show="history.currentTab === 'withdraw'">
										<div class="wallet__history p-0">
											<div
												class="wallet__history-item"
												v-on:click="historyItem"
												v-for="(item, index) in history.withdraw.items"
												:key="index"
											>
												<div class="wallet__history-head">
													<div class="wallet__history-left">
														<div class="wallet__history-logo">
															<img
																:src="require('@/assets/images/pay-systems/' + item.operator.image)"
																alt=""
															/>
														</div>
														<div class="wallet__history-info">
															<span>{{ item.operator.name }}</span>
															<p>ID операции: {{ item.id }}</p>
														</div>
													</div>
													<div class="wallet__history-center">
														<div class="wallet__history-date">{{ item.date }}</div>
														<div class="wallet__history-sum">{{ item.sum + ' ₽' }}</div>
													</div>
													<div class="wallet__history-right">
														<div
															class="wallet__history-badge"
															:class="item.badge.status === 'error' ? 'error' : 'success'"
														>
															{{
																item.badge.status === 'error'
																	? 'Ошибка'
																	: '' || item.badge.status === 'success'
																	? 'Выведено'
																	: '' || item.badge.status === 'wait'
																	? 'Зачисляем..'
																	: ''
															}}
														</div>
													</div>
												</div>
												<div class="wallet__history-content">
													<div class="wallet__history-content-inner">
														<div class="wallet__history-content-item">
															Сумма транзакции:
															<span>{{ item.sum + ' ₽' }}</span>
														</div>
														<div class="wallet__history-content-item">
															Дата операции:
															<span>{{ item.date }}, {{ item.time }}</span>
														</div>
														<div class="wallet__history-content-item">
															Номер счета:
															<span>{{ item.payNumber }}</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentTab: 'deposit',
			deposit: {
				select: false,
				paySystems: [
					{
						image: 'visa',
						name: 'Карта',
						comission: 0,
						items: [
							{
								image: 'visa',
								name: 'Карта №12',
								parameters: { min: 500, max: 100000, comission: 0 },
							},
							{
								image: 'visa',
								name: 'Карта P2P №2',
								parameters: { min: 300, max: 300000, comission: 0 },
							},
							{
								image: 'visa',
								name: 'Карта СБП',
								parameters: { min: 100, max: 100000, comission: 0 },
							},
						],
					},
					{
						image: 'qiwi',
						name: 'Qiwi',
						comission: 0,
						items: [
							{ image: 'qiwi', name: 'QIWI', parameters: { min: 100, max: 45000, comission: 0 } },
							{
								image: 'qiwi',
								name: 'QIWI 2',
								parameters: { min: 300, max: 300000, comission: 0 },
							},
							{ image: 'qiwi', name: 'QIWI №4', parameters: { min: 500, max: 3000, comission: 0 } },
						],
					},
					{
						image: 'ecorpay',
						name: 'Ecorpay',
						comission: 0,
						items: [
							{
								image: 'ecorpay',
								name: 'Ecorpay',
								parameters: { min: 100, max: 300000, comission: 0 },
							},
						],
					},
					{
						image: 'onlinebank',
						name: 'Онлайн банк',
						comission: 0,
						items: [
							{
								image: 'onlinebank',
								name: 'Онлайн банк',
								parameters: { min: 500, max: 15000, comission: 0 },
							},
						],
					},
					{
						image: 'yoomoney',
						name: 'ЮMoney',
						comission: 0,
						items: [
							{
								image: 'yoomoney',
								name: 'ЮMoney №3',
								parameters: { min: 300, max: 300000, comission: 0 },
							},
							{
								image: 'yoomoney',
								name: 'ЮMoney',
								parameters: { min: 300, max: 50000, comission: 0 },
							},
							{
								image: 'yoomoney',
								name: 'ЮMoney №2',
								parameters: { min: 300, max: 75000, comission: 0 },
							},
						],
					},
					{
						image: 'piastrix',
						name: 'Piastrix',
						comission: 0,
						items: [
							{
								image: 'piastrix',
								name: 'Piastrix',
								parameters: { min: 100, max: 300000, comission: 0 },
							},
							{
								image: 'piastrix',
								name: 'Piastrix ₸',
								parameters: { min: 100, max: 30000, comission: 0 },
							},
							{
								image: 'piastrix',
								name: 'Piastrix $',
								parameters: { min: 100, max: 50000, comission: 0 },
							},
							{
								image: 'piastrix',
								name: 'Piastrix €',
								parameters: { min: 100, max: 50000, comission: 0 },
							},
						],
					},
					{
						image: 'fkwallet',
						name: 'FK Wallet',
						comission: 0,
						items: [
							{
								image: 'fkwallet',
								name: 'FK Wallet',
								parameters: { min: 100, max: 300000, comission: 0 },
							},
							{
								image: 'fkwallet',
								name: 'FK Wallet $',
								parameters: { min: 100, max: 20000, comission: 0 },
							},
						],
					},
					{
						image: 'perfectmoney',
						name: 'Perfect Money',
						comission: 0,
						items: [
							{
								image: 'perfectmoney',
								name: 'Perfect Money $',
								parameters: { min: 100, max: 30000, comission: 0 },
							},
						],
					},
					{
						image: 'steam',
						name: 'Steam',
						comission: 0,
						items: [
							{ image: 'steam', name: 'Steam', parameters: { min: 100, max: 50000, comission: 0 } },
						],
					},
				],
				operators: [
					{ image: 'visa', name: 'Карта №12', parameters: { min: 500, max: 100000, comission: 0 } },
					{
						image: 'visa',
						name: 'Карта P2P №2',
						parameters: { min: 300, max: 300000, comission: 0 },
					},
					{ image: 'visa', name: 'Карта СБП', parameters: { min: 100, max: 100000, comission: 0 } },
				],
				currentTab: 'visa',
				operator: {
					id: 0,
					name: 'Карта №12',
					image: 'visa',
					parameters: {
						min: 500,
						max: 100000,
						comission: 0,
					},
				},
				value: null,
				buttons: [100, 500, 1000, 2500, 5000],
			},
			withdraw: {
				select: false,
				paySystems: [
					{
						image: 'visa',
						name: 'Карта',
						comission: 3,
						items: [
							{
								image: 'visa',
								name: 'Карта',
								parameters: {
									min: 600,
									max: 50000,
									comission: 3,
									mask: '#### #### #### ####',
									placeholder: '5469 3456 7890 XXXX',
								},
							},
							{
								image: 'visa',
								name: 'Карта №2',
								parameters: {
									min: 150,
									max: 10000,
									comission: 6,
									mask: '#### #### #### ####',
									placeholder: '5469 3456 7890 XXXX',
								},
							},
							{
								image: 'visa',
								name: 'Карта ₸',
								parameters: {
									min: 250,
									max: 60000,
									comission: 5,
									mask: '#### #### #### ####',
									placeholder: '5469 3456 7890 XXXX',
								},
							},
						],
					},
					{
						image: 'qiwi',
						name: 'Qiwi',
						comission: 3,
						items: [
							{
								image: 'qiwi',
								name: 'QIWI',
								parameters: {
									min: 1100,
									max: 50000,
									comission: 3,
									mask: '# (###) ### ## ##',
									placeholder: '7 (999) XXX XX XX',
								},
							},
							{
								image: 'qiwi',
								name: 'QIWI №2',
								parameters: {
									min: 150,
									max: 15000,
									comission: 6,
									mask: '# (###) ### ## ##',
									placeholder: '7 (999) XXX XX XX',
								},
							},
						],
					},
					{
						image: 'ecorpay',
						name: 'Ecorpay',
						comission: 0,
						items: [
							{
								image: 'ecorpay',
								name: 'Ecorpay',
								parameters: {
									min: 100,
									max: 300000,
									comission: 0,
									mask: '# (###) ### ## ##',
									placeholder: '7 (999) XXX XX XX',
								},
							},
						],
					},
					{
						image: 'yoomoney',
						name: 'ЮMoney',
						comission: 3,
						items: [
							{
								image: 'yoomoney',
								name: 'ЮMoney',
								parameters: {
									min: 1150,
									max: 50000,
									comission: 3,
									mask: '###############',
									placeholder: '41001XXXXXXXXXX',
								},
							},
						],
					},
					{
						image: 'piastrix',
						name: 'Piastrix',
						comission: 0,
						items: [
							{
								image: 'piastrix',
								name: 'Piastrix',
								parameters: {
									min: 100,
									max: 10000,
									comission: 0,
									mask: '############',
									placeholder: '1234XXXXXXXX',
								},
							},
							{
								image: 'piastrix',
								name: 'Piastrix ₸',
								parameters: {
									min: 100,
									max: 30000,
									comission: 0,
									mask: '############',
									placeholder: '1234XXXXXXXX',
								},
							},
							{
								image: 'piastrix',
								name: 'Piastrix $',
								parameters: {
									min: 150,
									max: 50000,
									comission: 0,
									mask: '############',
									placeholder: '1234XXXXXXXX',
								},
							},
							{
								image: 'piastrix',
								name: 'Piastrix €',
								parameters: {
									min: 150,
									max: 50000,
									comission: 0,
									mask: '############',
									placeholder: '1234XXXXXXXX',
								},
							},
						],
					},
					{
						image: 'fkwallet',
						name: 'FK Wallet',
						comission: 0,
						items: [
							{
								image: 'fkwallet',
								name: 'FK Wallet',
								parameters: {
									min: 100,
									max: 60000,
									comission: 0,
									mask: 'A###########',
									placeholder: 'F123######',
								},
							},
						],
					},
					{
						image: 'mobile',
						name: 'Моб. платежи',
						comission: 3,
						items: [
							{
								image: 'skylink',
								name: 'Skylink',
								parameters: {
									min: 1150,
									max: 50000,
									comission: 3,
									mask: '# (###) ### ## ##',
									placeholder: '7 (999) XXX XX XX',
								},
							},
							{
								image: 'yota',
								name: 'Yota',
								parameters: {
									min: 1150,
									max: 50000,
									comission: 3,
									mask: '# (###) ### ## ##',
									placeholder: '7 (999) XXX XX XX',
								},
							},
							{
								image: 'rostelecom',
								name: 'Rostelecom',
								parameters: {
									min: 1150,
									max: 50000,
									comission: 3,
									mask: '# (###) ### ## ##',
									placeholder: '7 (999) XXX XX XX',
								},
							},
							{
								image: 'sbermobile',
								name: 'Sber Mobile',
								parameters: {
									min: 1150,
									max: 50000,
									comission: 3,
									mask: '# (###) ### ## ##',
									placeholder: '7 (999) XXX XX XX',
								},
							},
							{
								image: 'tinkoff',
								name: 'Tinkoff',
								parameters: {
									min: 1150,
									max: 50000,
									comission: 3,
									mask: '# (###) ### ## ##',
									placeholder: '7 (999) XXX XX XX',
								},
							},
							{
								image: 'tele2',
								name: 'Tele2',
								parameters: {
									min: 1150,
									max: 50000,
									comission: 3,
									mask: '# (###) ### ## ##',
									placeholder: '7 (999) XXX XX XX',
								},
							},
							{
								image: 'beeline',
								name: 'Билайн',
								parameters: {
									min: 1150,
									max: 50000,
									comission: 3,
									mask: '# (###) ### ## ##',
									placeholder: '7 (999) XXX XX XX',
								},
							},
							{
								image: 'mtc',
								name: 'МТС',
								parameters: {
									min: 1150,
									max: 50000,
									comission: 3,
									mask: '# (###) ### ## ##',
									placeholder: '7 (999) XXX XX XX',
								},
							},
							{
								image: 'megafon',
								name: 'Мегафон',
								parameters: {
									min: 1150,
									max: 50000,
									comission: 3,
									mask: '# (###) ### ## ##',
									placeholder: '7 (999) XXX XX XX',
								},
							},
						],
					},
					{
						image: 'payeer',
						name: 'Payeer',
						comission: 17,
						items: [
							{
								image: 'payeer',
								name: 'Payeer',
								parameters: {
									min: 100,
									max: 100000,
									comission: 17,
									mask: 'A#######',
									placeholder: 'A1234XXX',
								},
							},
							{
								image: 'payeer',
								name: 'Payeer $',
								parameters: {
									min: 1200,
									max: 25000,
									comission: 15,
									mask: 'A#######',
									placeholder: 'A1234XXX',
								},
							},
						],
					},
					{
						image: 'btc',
						name: 'Криптовалюта',
						comission: 2,
						items: [
							{
								image: 'trc20',
								name: 'TRC 20',
								parameters: {
									min: 25000,
									max: 500000,
									comission: 2,
									placeholder: 'TAzsQ9Gx8eqFNFSKbeXXXXXXXXXXXXXXXX',
								},
							},
							{
								image: 'erc20',
								name: 'ERC 20',
								parameters: {
									min: 80000,
									max: 500000,
									comission: 2,
									placeholder: '0xe688b84b23f322a994a5XXXXXXXXXXXXXXXXXXXX',
								},
							},
							{
								image: 'btc',
								name: 'Bitcoin',
								parameters: {
									min: 25000,
									max: 15000,
									comission: 2,
									placeholder: '38AwyYdyrG8yesfNXXXXXXXXXXXXXXX',
								},
							},
						],
					},
					{
						image: 'perfectmoney',
						name: 'Perfect Money',
						comission: 15,
						items: [
							{
								image: 'perfectmoney',
								name: 'Perfect Money',
								parameters: {
									min: 100,
									max: 15000,
									comission: 15,
									mask: 'A########',
									placeholder: 'U111XXXXX',
								},
							},
							{
								image: 'perfectmoney',
								name: 'Perfect Money $',
								parameters: {
									min: 100,
									max: 15000,
									comission: 6.5,
									mask: 'A########',
									placeholder: 'U111XXXXX',
								},
							},
						],
					},
					{
						image: 'webmoney',
						name: 'Web Money',
						comission: 10,
						items: [
							{
								image: 'webmoney',
								name: 'Web Money',
								parameters: {
									min: 100,
									max: 15000,
									comission: 10,
									mask: 'A############',
									placeholder: 'Z324039XXXXXX',
								},
							},
						],
					},
				],
				operators: [
					{
						image: 'visa',
						name: 'Карта',
						parameters: {
							min: 600,
							max: 50000,
							comission: 3,
							mask: '#### #### #### ####',
							placeholder: '5469 3456 7890 XXXX',
						},
					},
					{
						image: 'visa',
						name: 'Карта №2',
						parameters: {
							min: 150,
							max: 10000,
							comission: 6,
							mask: '#### #### #### ####',
							placeholder: '5469 3456 7890 XXXX',
						},
					},
					{
						image: 'visa',
						name: 'Карта ₸',
						parameters: {
							min: 250,
							max: 60000,
							comission: 5,
							mask: '#### #### #### ####',
							placeholder: '5469 3456 7890 XXXX',
						},
					},
				],
				currentTab: 'visa',
				operator: {
					id: 0,
					name: 'Карта №12',
					image: 'visa',
					mask: '#### #### #### ####',
					placeholder: '5469 3456 7890 XXXX',
					parameters: {
						min: 500,
						max: 100000,
						comission: 0,
					},
				},
				value: null,
				sum: null,
				buttons: [100, 500, 1000, 2500, 5000],
			},
			history: {
				currentTab: 'deposit',
				deposit: {
					items: [
						{
							id: 2076157,
							operator: {
								image: 'fkwallet.png',
								name: 'FK Wallet $',
							},
							date: '30 янв. 2023г.',
							time: '19:29',
							sum: 1000,
							badge: {
								status: 'error',
							},
						},
						{
							id: 124562,
							operator: {
								image: 'ecorpay.png',
								name: 'Ecorpay',
							},
							date: '30 янв. 2023г.',
							time: '19:29',
							sum: 700,
							badge: {
								status: 'success',
							},
						},
					],
				},
				withdraw: {
					items: [
						{
							id: 124562,
							operator: {
								image: 'qiwi.png',
								name: 'Qiwi',
							},
							date: '30 янв. 2023г.',
							time: '19:29',
							sum: 150,
							payNumber: '+7 (900) 222 ** **',
							badge: {
								status: 'wait',
							},
						},
					],
				},
			},
			width: null,
			page: 1,
			perPage: 6,
			fastWithdraws: false,
		}
	},
	methods: {
		closeDepositSelect() {
			this.deposit.select = false
		},
		closeWithdrawSelect() {
			this.withdraw.select = false
		},
		selectPayDeposit(system, items) {
			this.deposit.operators.length = 0
			this.deposit.operators.push(...items)
			this.deposit.currentTab = system
			const operatorInfo = Object.keys(items)[0]
			const data = items[operatorInfo]
			this.deposit.operator = {
				id: 0,
				name: data.name,
				image: data.image,
				parameters: {
					min: data.parameters.min,
					max: data.parameters.max,
					comission: data.parameters.comission,
				},
			}
			this.deposit.value = data.parameters.min
			this.deposit.select = false
		},
		selectOperatorDeposit(system, index, image, parameters) {
			this.deposit.operator.name = system
			this.deposit.operator.image = image
			this.deposit.operator.id = index
			this.deposit.operator.parameters.min = parameters.min
			this.deposit.operator.parameters.max = parameters.max
			this.deposit.operator.parameters.comission = parameters.comission
			this.deposit.value = parameters.min
			this.deposit.select = false
		},
		depositSetValue(value) {
			this.deposit.value = value
		},
		selectPayWithdraw(system, items) {
			this.withdraw.operators.length = 0
			this.withdraw.operators.push(...items)
			this.withdraw.currentTab = system
			const operatorInfo = Object.keys(items)[0]
			const data = items[operatorInfo]
			this.withdraw.operator = {
				id: 0,
				name: data.name,
				image: data.image,
				mask: data.parameters.mask,
				placeholder: data.parameters.placeholder,
				parameters: {
					min: data.parameters.min,
					max: data.parameters.max,
					comission: data.parameters.comission,
				},
			}
			this.withdraw.sum = data.parameters.min
			this.withdraw.value = null
			this.withdraw.select = false
		},
		selectOperatorWithdraw(system, index, image, parameters) {
			this.withdraw.operator.name = system
			this.withdraw.operator.image = image
			this.withdraw.operator.id = index
			this.withdraw.operator.parameters.min = parameters.min
			this.withdraw.operator.parameters.max = parameters.max
			this.withdraw.operator.parameters.comission = parameters.comission
			this.withdraw.operator.mask = parameters.mask
			this.withdraw.operator.placeholder = parameters.placeholder
			this.withdraw.sum = parameters.min
			this.withdraw.select = false
		},
		inputValueDeposit(max) {
			const val = this.deposit.value
			const newVal = `${Math.min(max, Math.max(0, val.slice('-' + max) | 0))}`

			if (val !== newVal) {
				this.deposit.value = newVal
			}
			if (val === '') {
				this.deposit.value = null
			}
		},
		inputValueWithdraw(max) {
			const val = this.withdraw.sum
			const newVal = `${Math.min(max, Math.max(0, val.slice('-' + max) | 0))}`

			if (val !== newVal) {
				this.withdraw.sum = newVal
			}
			if (val === '') {
				this.withdraw.sum = null
			}
		},
		historyItem(event) {
			if (event.target.classList.contains('active')) {
				event.target.classList.remove('active')
			} else {
				event.target.classList.add('active')
			}
		},
		updateWidth() {
			this.width = window.innerWidth
			if (this.width < 454) {
				this.perPage = 4
			} else {
				this.perPage = 5
			}
		},
		closeFastWithdraws() {
			this.fastWithdraws = false
		},
	},
	mounted() {
		if (window.innerWidth >= 744) {
			this.$modal.show('wallet')
			this.$router.push('/')
		}
		window.addEventListener('resize', this.updateWidth)
		this.updateWidth()
	},
	computed: {
		numPages() {
			return Math.ceil(this.levels.length / this.perPage)
		},
	},
}
</script>
