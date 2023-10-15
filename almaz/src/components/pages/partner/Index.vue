<template>
	<div class="typical__tabs-block-tab">
		<div class="typical__loader" v-if="preloader">
			<img src="@/assets/images/loader.svg" class="loading" alt="" />
		</div>
		<div class="typical__tabs-block-tab-inner" v-if="!preloader">
			<div class="typical__tabs-block-tab-title">
				<h1>Общее</h1>
			</div>
			<div class="partner__link">
				<span>Основная партнерская ссылка:</span>
				<div class="partner__link-input typical__input">
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
							@focus="focusIn"
							@input="changeCode"
							@keyup.enter="saveCode"
							@focusout="focusOut"
							v-model="model"
						/>
						<button
							type="button"
							class="typical__input-btn"
							:class="{ '!bg-[#3cbd3c]': state }"
							v-if="state"
						>
							<svg class="icon"><use xlink:href="icons.svg#icon-success"></use></svg>
						</button>
						<button
							type="button"
							class="copy-tooltip typical__input-btn"
							@click="copyURL($event, model)"
							v-if="!state"
						>
							<svg class="icon"><use xlink:href="icons.svg#icon-copy"></use></svg>
							<span class="copy-tooltip__value">Скопировано</span>
						</button>
					</div>
				</div>
			</div>
			<div class="partner__info">
				<div class="partner__info-left">
					<div class="partner__info-item">
						<div class="partner__info-item-inner">
							<svg class="icon"><use xlink:href="icons.svg#icon-stats"></use></svg>
							<span>0</span>
							<label>Переходов</label>
						</div>
					</div>
					<div class="partner__info-item">
						<div class="partner__info-item-inner">
							<svg class="icon"><use xlink:href="icons.svg#icon-person"></use></svg>
							<span>0</span>
							<label>Регистраций</label>
						</div>
					</div>
					<div class="partner__info-item">
						<div class="partner__info-item-inner">
							<svg class="icon"><use xlink:href="icons.svg#icon-network"></use></svg>
							<span>0.00</span>
							<label>Сумма ставок</label>
						</div>
					</div>
					<div class="partner__info-item">
						<div class="partner__info-item-inner">
							<svg class="icon"><use xlink:href="icons.svg#icon-briefcase"></use></svg>
							<span>0.00</span>
							<label>Общий профит</label>
						</div>
					</div>
				</div>
				<div class="partner__info-right">
					<div class="partner__info-item-inner">
						<svg class="icon"><use xlink:href="icons.svg#icon-rub"></use></svg>
						<span>0.00</span>
						<label>Общий профит</label>
						<button type="button" class="btn btn--yellow min-w-[140px] flex justify-center">
							Забрать
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
			model: 'https://friends-casino.onl/6HpPGn',
			code: '6HpPGn',
			state: false,
			preloader: true,
			error: {
				status: false,
				message: null,
			},
		}
	},
	methods: {
		focusIn() {
			this.model = this.code
			this.state = true
		},
		focusOut() {
			this.model = 'https://friends-casino.onl/' + this.code
			this.state = false
			this.error = {
				status: false,
				message: null,
			}
		},
		changeCode() {
			if (Object.keys(this.model).length <= 2) {
				this.error = {
					status: true,
					message: 'Минимальная длина кода: 3 символа',
				}
			} else {
				this.code = this.model
				this.error = {
					status: false,
					message: null,
				}
			}
		},
		saveCode() {
			if (Object.keys(this.model).length <= 2) {
				this.error = {
					status: true,
					message: 'Минимальная длина кода: 3 символа',
				}
			} else {
				this.code = this.model
				this.model = this.model = 'https://friends-casino.onl/' + this.code
				this.error = {
					status: false,
					message: null,
				}
				this.state = false
			}
		},
		preloaderDestroy() {
			setTimeout(() => {
				this.preloader = false
			}, 150)
		},
		copyURL(event, value) {
			this.$copyText(value).then(
				function (e) {
					event.target.classList.add('animate')
					setTimeout(() => {
						event.target.classList.remove('animate')
					}, 400)
				},
				function (e) {},
			)
		},
	},
	mounted() {
		this.preloaderDestroy()
	},
}
</script>
