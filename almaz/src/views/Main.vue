<template>
	<div class="content__layout">
		<section class="sliders">
			<div class="sliders__shadow"></div>
			<div class="wrapper relative">
				<Swiper
					:slides-per-view="1"
					:space-between="16"
					:speed="sliders.speed"
					:autoplay="{
						delay: sliders.delay,
						disableOnInteraction: false,
					}"
					:pagination="{ clickable: true }"
					@swiper="onSwiper"
					@mouseenter="console.log('fdf')"
					class="sliders__slide-item"
				>
					<SwiperSlide v-for="item in banners" :key="item.id" class="sliders__slide">
						<div class="sliders__timeline">
							<div class="sliders__timeline-inner"></div>
						</div>
						<div
							class="sliders__slide-inner"
							:style="{
								'background-color': item.bg,
								'background-image': 'url(' + item.imageSlide + ')',
								'background-size': item.imageSizeSlide + 'px',
							}"
						>
							<div class="sliders__slide-top">
								<div class="sliders__slide-title">{{ item.title }}</div>
								<div class="sliders__slide-description">{{ item.description }}</div>
								<div>
									<router-link class="sliders__slide-btn" :style="{ color: item.bg }" :to="item.url"
										>Подробнее</router-link
									>
								</div>
							</div>
							<div class="sliders__slide-bottom">
								<div class="sliders__slide-info">
									<div class="sliders__slide-info-item" v-if="item.textLeft">
										<img src="@/assets/images/svg/revenue.svg" alt="" />
										<span v-html="item.textLeft"></span>
									</div>
									<div class="sliders__slide-info-item" v-if="item.textRight">
										<img src="@/assets/images/svg/bigPercents.svg" alt="" />
										<span v-html="item.textRight"></span>
									</div>
								</div>
							</div>
							<div class="sliders__slide-img">
								<img :src="item.image" alt="" />
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
		<section class="breadcrumbs">
			<div class="wrapper">
				<div class="breadcrumbs__inner">
					<div class="breadcrumbs__item">
						<div class="breadcrumbs__item-inner">
							<b>25 мин. 18 сек.</b>
							<span>средняя скорость выплаты</span>
						</div>
					</div>
					<div class="breadcrumbs__item">
						<div class="breadcrumbs__item-inner">
							<b>24/7</b>
							<span>топовая поддержка</span>
						</div>
					</div>
					<div class="breadcrumbs__item">
						<div class="breadcrumbs__item-inner">
							<b>8608</b>
							<span>популярных игр в каталоге</span>
						</div>
					</div>
					<div class="breadcrumbs__item">
						<div class="breadcrumbs__item-inner">
							<b>850839</b>
							<span>начислено Bounty-бонусов</span>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="menu-block">
			<div class="wrapper">
				<div class="menu-block__inner">
					<router-link
						v-for="item in menu"
						:key="item.id"
						:to="item.url"
						:style="{ width: 100 / menu.length + '%' }"
					>
						<img :src="item.image" alt="" />
						<span>{{ item.name }}</span>
					</router-link>
				</div>
				<Swiper
					:slides-per-view="5.5"
					:space-between="16"
					:free-mode="true"
					:breakpoints="{
						1150: {
							slidesPerView: 5.5,
						},
						975: {
							slidesPerView: 4.5,
						},
						625: {
							slidesPerView: 4.5,
						},
						475: {
							slidesPerView: 3.5,
						},
						390: {
							slidesPerView: 3.25,
						},
						0: {
							slidesPerView: 2.8,
							spaceBetween: 10,
						},
					}"
					class="menu-block__slider"
				>
					<SwiperSlide v-for="item in menu" :key="item.id">
						<router-link :to="item.url">
							<img :src="item.image" alt="" />
							<span>{{ item.name }}</span>
						</router-link>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
		<section class="games-box">
			<div class="wrapper">
				<div class="games-box__list">
					<GamesBox :list="games" :small="small" />
				</div>
			</div>
		</section>
		<section class="site-info">
			<div class="wrapper">
				<div class="site-info__inner" :class="{ active: accordeon }">
					<div class="site-info__column">
						<h1>FriendsCasino</h1>
						<p>
							Ознакомьтесь с широким спектром захватывающих игр здесь, на Friends.GG, сайте игровых
							автоматов, специально созданном для вашего удовлетворения. Тысячи первоклассных
							игровых автоматов доступны для игроков по всему миру. Будь то огромные джекпоты,
							покерные слоты или тематические игровые автоматы, которые вам нужны, у нас есть все,
							что вам нужно!
						</p>
						<p>
							Испытайте легкость быстрой регистрации, нажав кнопку регистрации прямо сейчас!
							Наслаждайтесь моментами, когда Вы играете в игровые автоматы на реальные деньги от
							ведущих поставщиков игр.
						</p>
						<p>
							Наше казино с быстрыми выплатами и огромным выбором всевозможных вариаций игровых
							автоматов работает для вас 24/7 - просто выберите игру и начните играть!
						</p>
						<p>
							Мы никогда не портим Вам удовольствие, поэтому Вы можете играть во все наши игры, не
							загружая ничего на свой компьютер.
						</p>
						<strong>Играйте в слоты онлайн</strong>
						<p>
							Мы никогда не портим Вам удовольствие, поэтому Вы можете играть во все наши игры, не
							загружая ничего на свой компьютер.
						</p>
						<p>
							Просмотрите тысячи слотов, выберите понравившуюся игру и нажмите кнопку «ИГРАТЬ» - это
							так просто!
						</p>
						<p>
							Слот-игры в казино - одни из самых популярных игр. Не только из-за огромных стимулов,
							которые Вы можете получить, но и из-за захватывающей графики, хорошей музыки и, в
							целом, приятного визуального эффекта игры.
						</p>
						<p>
							Вы даже можете опробовать каждую из наших игровых автоматов, переключившись в режим
							развлечения - удивительная функция, которая позволяет вам играть во все наши игровые
							автоматы без загрузки и без регистрации бесплатно! Вы можете получить к нему доступ
							через мобильный телефон, компьютер или планшет. Откройте для себя одни из лучших
							игровых автоматов сегодня, в которые Вы можете играть бесплатно без необходимости
							загрузки, и испытайте уникальное приключение в лучшем казино слотами во всем мире.
							Сделайте свой лучший выстрел сегодня, и пусть судьба решит, что вас ждет!
						</p>
						<p>Чего ты ждешь? Сегодня может быть твой удачный день!</p>
					</div>
					<div class="site-info__column">
						<strong>Тысячи игровых автоматов</strong>
						<p>Вот различные типы игровых автоматов, которые вы можете найти в нашем казино:</p>
						<strong>Слоты с 3 барабанами</strong>
						<p>
							Слоты с 3 барабанами наиболее известны как классические или традиционные игровые
							автоматы. Барабаны - это вертикальные линии, которые Вы можете найти в игре, где
							символы располагаются каскадом. Если вы ищете острых ощущений, попробуйте сыграть в
							игровой автомат с 3 барабанами! Некоторые из игр, в которые вы можете играть, - это
							Book of Alchemy, Watford FC Slot и многие другие.
						</p>
						<strong>Слоты с 5 барабанами</strong>
						<p>
							Получите больше шансов на выпадение выигрышных комбинаций, играя в слот с 5
							барабанами! В большинстве слотов с 5 барабанами выплачиваются соответствующие выплаты
							каждый раз, когда на барабанах выпадают 3, 4 или 5 символов. Вы также можете получить
							множители выигрыша, раунды бонусной игры или бесплатные вращения в зависимости от
							игры. Некоторые из игр с 5 барабанами, в которые вы можете играть, - это Vikings Go
							Berzerk, Legacy of Dead и That’s Rich.
						</p>
						<strong>Прогрессивные слоты</strong>
						<p>
							Прогрессивные слоты - уловка среди всех типов игровых автоматов. Размер джекпота
							увеличивается по мере прохождения игры. Вас ждут огромные миллионы, и вы можете стать
							одним из самых богатых людей на сегодняшний день!
						</p>
						<strong>Рулетка</strong>
						<p>
							Рулетка - это игра, в которую делают ставки на отдельные числа на столе, цвет, тип
							числа или комбинации. Проверьте свою удачу и выиграйте, если то, на что вы сделали
							ставку, попадет в колесо. Играйте в наши грандиозные игры в рулетку в реальном времени
							прямо сейчас!
						</p>
						<strong>Покер</strong>
						<p>
							Если вы знакомы с покером в обычном казино, вы можете попробовать сыграть в него прямо
							сейчас, воспользовавшись нашим широким выбором онлайн-игр в видеопокер. Будьте готовы
							испытать незабываемую игру уже сегодня! Благодаря анимации в высоком разрешении и
							отличным специальным видео-раундам Вы обязательно вернетесь за новым выигрышем.
						</p>
						<strong>Баккара</strong>
						<p>
							Баккара - одна из самых популярных игр в мире. Победите дилера, сделав ставку на руку,
							ближайшую к 9. Кроме того, вы также можете выиграть, если будет ничья. Звучит
							захватывающе, правда? Готовьте свои ставки сейчас и сделайте ставку на выигрышную
							сторону!
						</p>
						<strong>Блэкджек</strong>
						<p>
							В блэкджеке вы можете обыграть дилера, если у вас наберется рука, ближайшая к 21.
							Получите шанс удвоить свою ставку, когда вы сыграете в наши величественные игровые
							автоматы в блэкджек!
						</p>
					</div>
				</div>
				<div class="site-info__btn">
					<a href="javascript:;" class="btn btn--light" @click="accordeon = !accordeon">{{
						accordeon ? 'Скрыть информацию' : 'Показать больше'
					}}</a>
				</div>
			</div>
		</section>
		<section class="games-box">
			<div class="wrapper">
				<div class="games-box__list">
					<GamesBox :list="providers" :small="small" />
				</div>
			</div>
		</section>
		<section class="footer !pb-0">
			<div class="wrapper">
				<div class="footer__pay-systems">
					<div v-for="(item, index) in paySystems" :key="index" class="footer__pay-system">
						<img :src="require('@/assets/images/pay-systems/' + item + '.png')" alt="" />
					</div>
				</div>
			</div>
		</section>
		<Footer />
	</div>
</template>

<script>
import { Navigation, Pagination, Autoplay } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation, Pagination, Autoplay])
export default {
	components: {
		Swiper,
		SwiperSlide,
		GamesBox: () => import('@/components/globals/GamesBox.vue'),
		Footer: () => import('@/components/layout/Footer/Footer.vue'),
	},
	data() {
		return {
			swiper: null,
			banners: [
				{
					id: 0,
					bg: '#793FC2',
					image: require('@/assets/images/banners/smiles_sv.png'),
					title: "Valentine's Day",
					description: '20% на каждый депозит!',
					url: '/promotions',
					textLeft: 'Быстрая регистрация, <br> без верификации.',
					textRight: 'Быстрые выплаты, <br> высокие лимиты.',
				},
				{
					id: 1,
					bg: '#fb4f05',
					imageSlide: require('@/assets/images/banners/bars.png'),
					imageSizeSlide: 575,
					image: require('@/assets/images/banners/bomber.png'),
					title: 'Программа лояльности',
					description: 'До 1.2% с каждого выигрыша!',
					url: '/loyalty',
					textLeft: 'Уровневая система, <br> Большие проценты.',
					textRight: 'Платим за выигрыш, <br> а не за ставки.',
				},
				{
					id: 2,
					bg: '#5600cb',
					image: require('@/assets/images/banners/viking.png'),
					title: 'Партнерская программа',
					description: 'Присоединяйся',
					url: '/partner',
					textLeft: '40% Revenue Share, <br> вывод в любой момент.',
					textRight: 'Партнерский кабинет, <br> подробная статистика.',
				},
			],
			menu: [
				{
					id: 0,
					url: '/lobby',
					name: 'Новинки',
					image: require('@/assets/images/lobby/menu1.svg'),
				},
				{
					id: 1,
					url: '/lobby',
					name: 'Bonus Buy',
					image: require('@/assets/images/lobby/menu2.svg'),
				},
				{
					id: 2,
					url: '/lobby',
					name: 'Live',
					image: require('@/assets/images/lobby/menu3.svg'),
				},
				{
					id: 3,
					url: '/lobby',
					name: 'Слоты',
					image: require('@/assets/images/lobby/menu4.svg'),
				},
				{
					id: 4,
					url: '/lobby',
					name: 'Рулетка',
					image: require('@/assets/images/lobby/menu5.svg'),
				},
				{
					id: 5,
					url: '/lobby',
					name: 'Карточные',
					image: require('@/assets/images/lobby/menu6.svg'),
				},
				{
					id: 6,
					url: '/lobby',
					name: 'Instant Win',
					image: require('@/assets/images/lobby/menu7.svg'),
				},
				{
					id: 7,
					url: '/lobby',
					name: 'Джекпот',
					image: require('@/assets/images/lobby/menu8.svg'),
				},
			],
			paySystems: [
				'qiwi',
				'visa',
				'yoomoney',
				'payeer',
				'btc',
				't',
				'mtc',
				'megafon',
				'tele2',
				'beeline',
			],
			games: [
				{
					title: 'LIVE RTP - 24 ЧАСА',
					items: [
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Drops Of Water',
							provider: 'EGT',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/72/egt425',
							online: 7,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Drops Of Water',
							provider: 'EGT',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/72/egt425',
							online: 7,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Drops Of Water',
							provider: 'EGT',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/72/egt425',
							online: 7,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Drops Of Water',
							provider: 'EGT',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/72/egt425',
							online: 7,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
						},
						{
							title: 'Drops Of Water',
							provider: 'EGT',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/72/egt425',
							online: 7,
							badge: {
								value: 120 + '%',
								status: 'red',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
					],
				},
				{
					title: 'ПОПУЛЯРНЫЕ ИГРЫ',
					items: [
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 'TOP',
								status: 'top',
							},
						},
						{
							title: 'Drops Of Water',
							provider: 'EGT',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/72/egt425',
							online: 7,
							badge: {
								value: 'TOP',
								status: 'top',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 'TOP',
								status: 'top',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Drops Of Water',
							provider: 'EGT',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/72/egt425',
							online: 7,
							badge: {
								value: 'TOP',
								status: 'top',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 'TOP',
								status: 'top',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Drops Of Water',
							provider: 'EGT',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/72/egt425',
							online: 7,
							badge: {
								value: 'TOP',
								status: 'top',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 'TOP',
								status: 'top',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Drops Of Water',
							provider: 'EGT',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/72/egt425',
							online: 7,
							badge: {
								value: 'TOP',
								status: 'top',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 'TOP',
								status: 'top',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
						{
							title: 'Drops Of Water',
							provider: 'EGT',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/72/egt425',
							online: 7,
							badge: {
								value: 'TOP',
								status: 'top',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
					],
				},
				{
					title: 'НОВЫЕ ИГРЫ',
					items: [
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 'new',
								status: 'new',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
					],
				},
				{
					title: 'Какой-то заголовок',
					items: [
						{
							title: 'Gator Gold Deluxe: Gigablox',
							provider: 'Yggdrasil',
							url: '/game',
							image: 'https://elsikora-image-router.com//300/100/0/3/10170',
							online: 18,
							badge: {
								value: 'select',
								status: 'select',
							},
							new: false,
							heart: {
								show: false,
								status: false,
							},
						},
					],
				},
			],
			providers: [
				{
					id: 0,
					title: 'Провайдеры игр',
					providers: true,
					items: [
						{
							id: 0,
							url: '/',
							image: require('@/assets/images/providers/netent.svg'),
						},
						{
							id: 1,
							url: '/',
							image: require('@/assets/images/providers/playngo.svg'),
						},
						{
							id: 2,
							url: '/',
							image: require('@/assets/images/providers/evolution.svg'),
						},
						{
							id: 3,
							url: '/',
							image: require('@/assets/images/providers/pragmaticplay.svg'),
						},
						{
							id: 4,
							url: '/',
							image: require('@/assets/images/providers/playtech.svg'),
						},
						{
							id: 5,
							url: '/',
							image: require('@/assets/images/providers/microgaming.svg'),
						},
						{
							id: 6,
							url: '/',
							image: require('@/assets/images/providers/yggdrasil.svg'),
						},
						{
							id: 7,
							url: '/',
							image: require('@/assets/images/providers/novomatic.svg'),
						},
					],
				},
			],
			sliders: {
				speed: 500,
				delay: 10500,
			},
			accordeon: false,
		}
	},
	methods: {
		onSwiper(swiper) {
			this.swiper = swiper
		},
	},
	props: {
		small: {
			type: Boolean,
			default: () => {},
		},
	},
	watch: {
		small: function (newVal, oldVal) {
			this.swiper.update()
		},
	},
	created() {
		document.addEventListener(
			'mouseenter',
			(event) => {
				const el = event.target
				if (el && el.matches && el.matches('.sliders .swiper-container')) {
					// console.log('mouseenter');
					// console.log('autoplay running', swiper.autoplay.running);
					el.swiper.autoplay.stop()
					el.classList.add('swiper-paused')

					const activeNavItem = el.querySelector('.sliders__timeline-inner')
					activeNavItem.style.animationPlayState = 'paused'
				}
			},
			true,
		)
		document.addEventListener(
			'mouseleave',
			(event) => {
				// console.log('mouseleave', swiper.activeIndex, swiper.slides[swiper.activeIndex].progress);
				// console.log('autoplay running', swiper.autoplay.running);
				const el = event.target
				if (el && el.matches && el.matches('.sliders .swiper-container')) {
					el.swiper.autoplay.start()
					el.classList.remove('swiper-paused')
					const activeNavItem = el.querySelector('.sliders__timeline-inner')
					activeNavItem.style.animationPlayState = 'inherit'
				}
			},
			true,
		)
	},
}
</script>
