<template>
	<div class="content__layout">
		<section class="typical__page-block fair">
			<div class="wrapper">
				<div class="typical__page-block-inner">
					<div class="typical__page-block-head">
						<div class="typical__page-block-caption">
							<h1>Лицензия и гарантия честности</h1>
						</div>
						<div class="typical__page-block-info">Мы гарантируем честную игру для всех</div>
					</div>
					<div class="typical__page-block-body">
						<div class="typical__typical-block">
							<p>
								Friends Casino понимает, как важно создать атмосферу защищенности, чтобы
								пользователи были уверены в честности наших игр.
							</p>
							<p>
								Поэтому в нашем казино мы используем игры, предоставленные топовыми компаниями,
								разрабатывающих програмное обеспечение для онлайн-казино. Среди них такие компании,
								как: <router-link to="/lobby">NetEnt</router-link>,
								<router-link to="/lobby">Yggdrasil</router-link>,
								<router-link to="/lobby">Play'n GO</router-link>,
								<router-link to="/lobby">Playtech</router-link> и другие.
							</p>
							<p>
								Так же мы предоставляем игры созданные компанией
								<router-link to="/lobby">Microgaming</router-link>. Будучи одним из основателей
								eCOGRA и IGC, компания Майкрогейминг на голову опережает других производителей игр
								для казино, задавая самые высокие стандарты в игорной индустрии в целом, особенно в
								отношении честности онлайн-игр, выбора самых ответственных операторов и защиты
								интересов игроков..
							</p>
							<div
								class="fair__inner"
								:style="{ 'background-image': 'url(' + require('@/assets/images/' + image) + ')' }"
							>
								<div class="fair__col" v-if="width > 520">
									<div class="fair__col-title">Обычное казино</div>
									<ul class="fair__list">
										<li>Вы делаете ставку, которая записывается на сервер казино</li>
										<li>Ваши данные собираются и сохраняются на серверах казино</li>
										<li>
											Проверка честности игры невозможна – все алгоритмы записаны и сохранены на
											стороне казино
										</li>
										<li>
											Чтобы получить выигрыш, вы должны пройти длительную процедуру авторизации
										</li>
										<li>
											Платежеспособность казино под вопросом, т.к. его баланс нигде не публикуется
										</li>
									</ul>
								</div>
								<div class="fair__col" v-if="width > 520">
									<div class="fair__col-title !text-[#fcbc3d]">Friends Casino</div>
									<ul class="fair__list">
										<li>Вы делаете ставку, которая записывается на сервер казино</li>
										<li>Ваши данные собираются и сохраняются на серверах казино</li>
										<li>
											Проверка честности игры невозможна – все алгоритмы записаны и сохранены на
											стороне казино
										</li>
										<li>
											Чтобы получить выигрыш, вы должны пройти длительную процедуру авторизации
										</li>
										<li>
											Платежеспособность казино под вопросом, т.к. его баланс нигде не публикуется
										</li>
									</ul>
								</div>
								<div class="fair__tab" v-if="width <= 520">
									<div class="fair__tabs">
										<button
											type="button"
											@click="currentTab = 0"
											:class="{ active: currentTab === 0 }"
										>
											Обычное казино
										</button>
										<button
											type="button"
											@click="currentTab = 1"
											:class="{ active: currentTab === 1 }"
										>
											Friends Casino
										</button>
									</div>
									<ul class="fair__list" v-if="currentTab === 0">
										<li>
											<img src="@/assets/images/false.svg" alt="" />
											Вы делаете ставку, которая записывается на сервер казино
										</li>
										<li>
											<img src="@/assets/images/false.svg" alt="" />
											Ваши данные собираются и сохраняются на серверах казино
										</li>
										<li>
											<img src="@/assets/images/false.svg" alt="" />
											Проверка честности игры невозможна – все алгоритмы записаны и сохранены на
											стороне казино
										</li>
										<li>
											<img src="@/assets/images/false.svg" alt="" />
											Чтобы получить выигрыш, вы должны пройти длительную процедуру авторизации
										</li>
										<li>
											<img src="@/assets/images/false.svg" alt="" />
											Платежеспособность казино под вопросом, т.к. его баланс нигде не публикуется
										</li>
									</ul>
									<ul class="fair__list" v-if="currentTab === 1">
										<li>
											<img src="@/assets/images/true.svg" alt="" />
											Вы делаете ставку, которая записывается на сервер казино
										</li>
										<li>
											<img src="@/assets/images/true.svg" alt="" />
											Ваши данные собираются и сохраняются на серверах казино
										</li>
										<li>
											<img src="@/assets/images/true.svg" alt="" />
											Проверка честности игры невозможна – все алгоритмы записаны и сохранены на
											стороне казино
										</li>
										<li>
											<img src="@/assets/images/true.svg" alt="" />
											Чтобы получить выигрыш, вы должны пройти длительную процедуру авторизации
										</li>
										<li>
											<img src="@/assets/images/true.svg" alt="" />
											Платежеспособность казино под вопросом, т.к. его баланс нигде не публикуется
										</li>
									</ul>
								</div>
							</div>
							<p class="text-[#828f9a]">
								This site’s operations are regulated by the Gambling Comission (license number
								CUK/28569) issued on 1 September 2021 and is operated by Selector Group N.V.,
								Abraham de Veerstraat 9, Curacao
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<Footer />
	</div>
</template>

<script>
export default {
	data() {
		return {
			width: null,
			image: 'fairBig.jpg',
			currentTab: 0,
		}
	},
	components: {
		Footer: () => import('@/components/layout/Footer/Footer.vue'),
	},
	methods: {
		updateWidth() {
			this.width = window.innerWidth
			if (this.width > 1100) {
				this.image = 'fairBig.jpg'
			} else {
				if (this.width > 520) {
					this.image = 'fairMedium.jpg'
				} else {
					this.image = 'fairMini.jpg'
				}
			}
		},
	},
	created() {
		window.addEventListener('resize', this.updateWidth)
		this.updateWidth()
	},
}
</script>
