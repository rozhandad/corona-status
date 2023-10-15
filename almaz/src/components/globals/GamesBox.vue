<template>
	<div class="flex flex-col space-y-[30px] max-[1100px]:space-y-[20px]">
		<div v-for="(item, index) in list" :key="index" class="games-box__item">
			<Swiper
				:slides-per-view="7"
				:slides-per-group="7"
				:spaceBetween="10"
				:navigation="{
					prevEl: '.games-box__item-arrow--prev',
					nextEl: '.games-box__item-arrow--next',
				}"
				@swiper="onSwiper"
				:breakpoints="{
					1275: {
						slidesPerGroup: 7,
						slidesPerView: 7,
					},
					1125: {
						slidesPerGroup: 5,
						slidesPerView: 5,
					},
					900: {
						slidesPerGroup: 4,
						slidesPerView: 4,
					},
					695: {
						slidesPerGroup: 5,
						slidesPerView: 5,
					},
					525: {
						slidesPerGroup: 4,
						slidesPerView: 4,
					},
					375: {
						slidesPerGroup: 3,
						slidesPerView: 3,
					},
					0: {
						slidesPerGroup: 2,
						slidesPerView: 2,
					},
				}"
				class="games-box__item-slider"
			>
				<template v-slot:container-start>
					<div class="games-box__item-title">
						<div>
							<h4>{{ item.title }}</h4>
						</div>
						<div class="games-box__item-title-right">
							<a href="javascript:;" class="games-box__item-arrow games-box__item-arrow--prev">
								<svg class="icon"><use xlink:href="icons.svg#icon-backward"></use></svg>
							</a>
							<a href="javascript:;" class="games-box__item-arrow games-box__item-arrow--next">
								<svg class="icon"><use xlink:href="icons.svg#icon-forward"></use></svg>
							</a>
						</div>
					</div>
				</template>
				<template v-slot:wrapper-start v-if="!item.providers">
					<SwiperSlide
						v-for="item in item.items"
						:key="item.index"
						class="games-box__item-slider-wrap"
					>
						<div class="games-box__item-slide">
							<router-link :to="item.url" class="games-box__item-slide-inner">
								<div class="games-box__item-thumb">
									<div class="games-box__item-online">
										<svg class="icon"><use xlink:href="icons.svg#icon-user"></use></svg>
										{{ item.online }}
									</div>
									<div
										class="games-box__item-badge"
										:class="{
											'games-box__item-badge--red': item.badge.status === 'red',
											'games-box__item-badge--top': item.badge.status === 'top',
											'games-box__item-badge--new': item.badge.status === 'new',
											'games-box__item-badge--select': item.badge.status === 'select',
										}"
									>
										{{ item.badge.value }}
										<svg v-if="item.badge.status === 'red'" class="icon">
											<use xlink:href="icons.svg#icon-arrow-pointer"></use>
										</svg>
									</div>
									<div
										class="games-box__item-img"
										:style="{ 'background-image': 'url(' + item.image + ')' }"
									></div>
								</div>
								<div class="games-box__item-overlay">
									<div class="games-box__item-overlay-title">{{ item.title }}</div>
									<div class="games-box__item-overlay-play">
										<svg class="icon"><use xlink:href="icons.svg#icon-play"></use></svg>
									</div>
									<div class="games-box__item-overlay-provider">{{ item.provider }}</div>
								</div>
							</router-link>
						</div>
					</SwiperSlide>
				</template>
				<template v-slot:wrapper-end v-if="item.providers">
					<SwiperSlide v-for="item in item.items" :key="item.index" class="pt-[10px]">
						<div class="games-box__item-provider">
							<router-link :to="item.url" class="games-box__item-provider-inner">
								<img :src="item.image" alt="" />
							</router-link>
						</div>
					</SwiperSlide>
				</template>
			</Swiper>
		</div>
	</div>
</template>

<script>
import { Navigation, Pagination } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation, Pagination])
export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			swiper: null,
		}
	},
	props: {
		list: {
			type: Array,
			default: () => {},
		},
		small: {
			type: Boolean,
			default: () => {},
		},
	},
	methods: {
		onSwiper(swiper) {
			this.swiper = swiper
		},
	},
	watch: {
		small: function (newVal, oldVal) {
			this.swiper.update()
		},
	},
}
</script>
