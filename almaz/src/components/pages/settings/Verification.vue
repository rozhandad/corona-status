<template>
	<div class="typical__tabs-block-tab">
		<div class="typical__loader" v-if="preloader">
			<img src="@/assets/images/loader.svg" class="loading" alt="" />
		</div>
		<div class="typical__tabs-block-tab-inner" v-if="!preloader">
			<div class="typical__tabs-block-tab-title">
				<h1>Верификация</h1>
			</div>
			<div class="settings__verification">
				<div class="settings__verification-info">
					<p>
						Для повышения уровня вашего обслуживания мы просим предоставить идентифицирующие
						документы. Это обезопасит вашу учетную запись в случае ее восстановления, а также
						обеспечит точную адресную доставку физических подарков.
					</p>
					<p>
						К приемлемым способам верификации является предоставление фотографии вашего
						удостоверения личности, водительских прав или паспорта. По завершении данного процесса
						мы оповестим вас по электронной почте.
					</p>
				</div>
				<div class="settings__verification-inner">
					<div class="typical__input-list">
						<div class="typical__input">
							<label>Фото лицевой стороны документа, удостоверяющего личность</label>
							<div @click="onPickFrontFile" class="typical__input--ico cursor-pointer">
								<input
									class="cursor-pointer"
									type="text"
									disabled
									:value="
										models.photo.front.image === null
											? 'Файл не выбран'
											: models.photo.front.image.name
									"
								/>
								<input
									type="file"
									accept="image/*"
									@change="onFrontFilePicked"
									class="absolute left-0 top-0 w-0 h-0 overflow-hidden hidden"
									ref="fileFrontInput"
								/>
								<button type="button" class="typical__input-btn">Выбрать файл</button>
							</div>
						</div>
						<div class="typical__input">
							<label>Фото обратной стороны документа, удостоверяющего личность</label>
							<div @click="onPickBackFile" class="cursor-pointer typical__input--ico">
								<input
									class="cursor-pointer"
									type="text"
									disabled
									:value="
										models.photo.back.image === null
											? 'Файл не выбран'
											: models.photo.back.image.name
									"
								/>
								<input
									type="file"
									accept="image/*"
									@change="onBackFilePicked"
									class="absolute left-0 top-0 w-0 h-0 overflow-hidden hidden"
									ref="fileBackInput"
								/>
								<button type="button" class="typical__input-btn">Выбрать файл</button>
							</div>
						</div>
						<div class="w-full grid grid-cols-2 max-[475px]:grid-cols-1 gap-4">
							<div class="typical__input">
								<Transition
									enter-active-class="transition-all duration-150 ease-out"
									enter-class="translate-y-[20px] opacity-0"
									enter-to-class="translate-y-0 opacity-100"
									leave-active-class="transition-all duration-150 ease-out"
									leave-class="translate-y-0 opacity-100"
									leave-to-class="translate-y-[20px] opacity-0"
								>
									<div v-if="models.name.error.status" class="tooltip">
										<div class="tooltip__inner">{{ models.name.error.message }}</div>
										<div class="tooltip__arrow"></div>
									</div>
								</Transition>
								<label>Имя</label>
								<input
									type="text"
									placeholder="Имя"
									@input="checkName"
									v-model="models.name.model"
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
									<div v-if="models.surname.error.status" class="tooltip">
										<div class="tooltip__inner">{{ models.surname.error.message }}</div>
										<div class="tooltip__arrow"></div>
									</div>
								</Transition>
								<label>Фамилия</label>
								<input
									type="text"
									placeholder="Фамилия"
									@input="checkSurname"
									v-model="models.surname.model"
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
									<div v-if="models.birthday.error.status" class="tooltip">
										<div class="tooltip__inner">{{ models.birthday.error.message }}</div>
										<div class="tooltip__arrow"></div>
									</div>
								</Transition>
								<label>Дата рождения</label>
								<input
									type="text"
									v-mask="models.birthday.mask"
									placeholder="дд.мм.гггг"
									@input="checkBirthday"
									v-model="models.birthday.model"
								/>
							</div>
							<div class="typical__input">
								<label>Пол</label>
								<select v-model="models.floor.model">
									<option
										v-for="(item, index) in models.floor.list"
										:key="index"
										v-bind:value="index"
									>
										{{ item.text }}
									</option>
								</select>
							</div>
							<div class="typical__input">
								<label>Страна</label>
								<select v-model="models.country.model">
									<option
										v-for="(item, index) in models.country.list"
										:key="index"
										v-bind:value="index"
									>
										{{ item.text }}
									</option>
								</select>
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
									<div v-if="models.city.error.status" class="tooltip">
										<div class="tooltip__inner">{{ models.city.error.message }}</div>
										<div class="tooltip__arrow"></div>
									</div>
								</Transition>
								<label>Город</label>
								<input
									type="text"
									placeholder="Город регистрации"
									@input="checkCity"
									v-model="models.city.model"
								/>
							</div>
						</div>
						<div class="typical__input">
							<button type="button" class="btn btn--yellow">Отправить на проверку</button>
						</div>
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
			preloader: true,
			models: {
				photo: {
					front: {
						image: null,
						error: {
							status: false,
							message: null,
						},
					},
					back: {
						image: null,
						error: {
							status: false,
							message: null,
						},
					},
				},
				name: {
					model: '',
					error: {
						status: false,
						message: null,
					},
				},
				surname: {
					model: '',
					error: {
						status: false,
						message: null,
					},
				},
				birthday: {
					model: '',
					mask: '##.##.####',
					error: {
						status: false,
						message: null,
					},
				},
				floor: {
					model: 0,
					list: [{ text: 'Мужской', selected: true }, { text: 'Женский' }],
				},
				country: {
					model: 0,
					list: [{ text: 'Russian Federation' }, { text: 'USA' }, { text: 'Ukraine' }],
				},
				city: {
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
		onPickFrontFile() {
			this.$refs.fileFrontInput.click()
		},
		onFrontFilePicked(event) {
			const files = event.target.files
			let filename = files[0].name
			const fileReader = new FileReader()
			fileReader.addEventListener('load', () => {
				this.imageUrl = fileReader.result
			})
			fileReader.readAsDataURL(files[0])
			this.models.photo.front.image = files[0]
		},
		onPickBackFile() {
			this.$refs.fileBackInput.click()
		},
		onBackFilePicked(event) {
			const files = event.target.files
			let filename = files[0].name
			const fileReader = new FileReader()
			fileReader.addEventListener('load', () => {
				this.imageUrl = fileReader.result
			})
			fileReader.readAsDataURL(files[0])
			this.models.photo.back.image = files[0]
		},
		checkName() {
			if (!Object.keys(this.models.name.model).length) {
				this.models.name.error = {
					status: true,
					message: 'Обязательное поле',
				}
			} else {
				this.models.name.error = {
					status: false,
					message: null,
				}
			}
		},
		checkSurname() {
			if (!Object.keys(this.models.surname.model).length) {
				this.models.surname.error = {
					status: true,
					message: 'Обязательное поле',
				}
			} else {
				this.models.surname.error = {
					status: false,
					message: null,
				}
			}
		},
		checkBirthday() {
			if (!Object.keys(this.models.birthday.model).length) {
				this.models.birthday.error = {
					status: true,
					message: 'Обязательное поле',
				}
			} else {
				this.models.birthday.error = {
					status: false,
					message: null,
				}
			}
		},
		checkCity() {
			if (!Object.keys(this.models.city.model).length) {
				this.models.city.error = {
					status: true,
					message: 'Обязательное поле',
				}
			} else {
				this.models.city.error = {
					status: false,
					message: null,
				}
			}
		},
	},
	mounted() {
		this.preloaderDestroy()
	},
}
</script>
