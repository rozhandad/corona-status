<template>
	<div class="typical__tabs-block-tab">
		<div class="typical__loader" v-if="preloader">
			<img src="@/assets/images/loader.svg" class="loading" alt="" />
		</div>
		<div class="typical__tabs-block-tab-inner" v-if="!preloader">
			<div class="typical__tabs-block-tab-title">
				<h1>Кампании</h1>
			</div>
			<div class="typical__tabs">
				<ul>
					<li>
						<a
							href="javascript:;"
							class="typical__btn-create"
							:class="{ '!bg-[#ff4d4d] !text-white': createShow }"
							@click="createShow = !createShow"
							>{{ createShow ? 'Отменить' : 'Создать' }}</a
						>
					</li>
					<li><a href="javascript:;">Обновить</a></li>
					<li><a href="javascript:;">Экспорт</a></li>
				</ul>
			</div>
			<div class="typical__list">
				<div class="typical__input-list partner__company-create mb-4" v-if="createShow">
					<div class="typical__input">
						<Transition
							enter-active-class="transition-all duration-150 ease-out"
							enter-class="translate-y-[20px] opacity-0"
							enter-to-class="translate-y-0 opacity-100"
							leave-active-class="transition-all duration-150 ease-out"
							leave-class="translate-y-0 opacity-100"
							leave-to-class="translate-y-[20px] opacity-0"
						>
							<div v-if="validate.name.error.status" class="tooltip">
								<div class="tooltip__inner">{{ validate.name.error.message }}</div>
								<div class="tooltip__arrow"></div>
							</div>
						</Transition>
						<label>Название</label>
						<input
							type="text"
							@input="validateName"
							v-model="validate.name.model"
							placeholder="Название для отображения в панели"
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
							<div v-if="validate.link.error.status" class="tooltip">
								<div class="tooltip__inner">{{ validate.link.error.message }}</div>
								<div class="tooltip__arrow"></div>
							</div>
						</Transition>
						<label>Партнерская ссылка</label>
						<div class="typical__input--ico">
							<input
								type="text"
								@input="validateLink"
								v-model="validate.link.model"
								placeholder="Название для отображения в панели"
							/>
							<button type="button" class="typical__input-btn">
								<span>Подтвердить</span>
							</button>
						</div>
					</div>
				</div>
				<div class="table" v-if="table.items.length">
					<table>
						<thead>
							<tr>
								<td v-for="(item, index) in table.head" :key="index">{{ item }}</td>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, index) in table.items" :key="index">
								<td>{{ item.name }}</td>
								<td>{{ item.date }}</td>
								<td>{{ item.users }}</td>
								<td>
									<a href="javascript:;" class="table__link" @click="copyURL($event, item.code)">
										{{ '/' + item.code }}
										<span>Скопировано</span>
									</a>
								</td>
								<td>
									<div class="table__buttons">
										<button class="table__btn table__btn--edit">
											<svg class="icon"><use xlink:href="icons.svg#icon-edit"></use></svg>
										</button>
										<button class="table__btn table__btn--delete" @click="deleteItem(index)">
											<svg class="icon"><use xlink:href="icons.svg#icon-close"></use></svg>
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="not-found" v-if="!table.items.length">
					<b>N/A</b>
					<span>История отсутствует</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			preloader: true,
			createShow: false,
			table: {
				head: ['Название', 'Дата создания', 'Переходов', 'Ссылка', 'Действие'],
				items: [
					{
						name: 'Blackmaze',
						date: '02 фев. 2023г.',
						users: 0,
						code: 'blackmaze',
					},
				],
			},
			validate: {
				name: {
					model: '',
					error: {
						status: false,
						message: null,
					},
				},
				link: {
					model: '',
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
		validateName() {
			if (Object.keys(this.validate.name.model).length < 1) {
				this.validate.name.error = {
					status: true,
					message: 'Минимальная длина названия: 1 символ',
				}
			} else {
				this.validate.name.error = {
					status: false,
					message: null,
				}
				if (Object.keys(this.validate.name.model).length > 16) {
					this.validate.name.error = {
						status: true,
						message: 'Максимальная длина названия: 16 символов',
					}
				} else {
					this.validate.name.error = {
						status: false,
						message: null,
					}
				}
			}
		},
		validateLink() {
			if (Object.keys(this.validate.link.model).length < 3) {
				this.validate.link.error = {
					status: true,
					message: 'Минимальная длина кода: 3 символа',
				}
			} else {
				this.validate.link.error = {
					status: false,
					message: null,
				}
				if (Object.keys(this.validate.link.model).length > 16) {
					this.validate.link.error = {
						status: true,
						message: 'Максимальная длина кода: 16 символов',
					}
				} else {
					this.validate.link.error = {
						status: false,
						message: null,
					}
				}
			}
		},
		acceptActionConfirm(key) {
			console.log(key)
		},
		copyURL(event, value) {
			this.$copyText('https://friends-casino36.com/' + value).then(
				function (e) {
					event.target.classList.add('animate')
					setTimeout(() => {
						event.target.classList.remove('animate')
					}, 400)
				},
				function (e) {},
			)
		},
		deleteItem(index) {
			this.$modal.show('dialog', {
				title: 'Вы точно хотите удалить кампанию?',
				class: 'confirm',
				buttons: [
					{
						title: 'Нет',
						handler: () => {
							this.$modal.hide('dialog')
						},
					},
					{
						title: 'Да',
						handler: () => {
							this.table.items.splice(index, 1)
							this.$modal.hide('dialog')
						},
					},
				],
			})
		},
	},
	mounted() {
		this.preloaderDestroy()
	},
}
</script>
