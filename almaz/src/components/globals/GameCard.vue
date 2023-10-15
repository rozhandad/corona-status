<template>
	<div class="games-box__item">
		<div class="games-box__item-slide">
			<router-link :to="data.url" class="games-box__item-slide-inner">
				<div class="games-box__item-thumb">
					<div class="games-box__item-online">
						<svg class="icon"><use xlink:href="icons.svg#icon-user"></use></svg>
						{{ data.online }}
					</div>
					<div
						class="games-box__item-badge"
						:class="{
							'games-box__item-badge--red': data.badge.status === 'red',
							'games-box__item-badge--top': data.badge.status === 'top',
							'games-box__item-badge--new': data.badge.status === 'new',
							'games-box__item-badge--select': data.badge.status === 'select',
						}"
					>
						{{ data.badge.value }}
						<svg v-if="data.badge.status === 'red'" class="icon">
							<use xlink:href="icons.svg#icon-arrow-pointer"></use>
						</svg>
					</div>
					<div
						class="games-box__item-img"
						:style="{ 'background-image': 'url(' + data.image + ')' }"
					></div>
				</div>
				<div
					class="games-box__item-overlay"
					:class="{ 'games-box__item-overlay--heart': data.heart.show }"
				>
					<div class="games-box__item-overlay-title">{{ data.title }}</div>
					<div class="games-box__item-overlay-play">
						<svg class="icon"><use xlink:href="icons.svg#icon-play"></use></svg>
					</div>
					<div class="games-box__item-overlay-provider">{{ data.provider }}</div>
				</div>
			</router-link>
			<div
				class="games-box__item-favorite"
				:class="{ active: data.heart.status }"
				v-if="data.heart.show"
			>
				<button type="button">
					<svg class="icon"><use xlink:href="icons.svg#icon-heart"></use></svg>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: {
		data: {
			type: Object,
			default: () => {},
		},
	},
}
</script>
