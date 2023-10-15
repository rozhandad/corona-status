<template>
	<div class="footer__language" v-on-clickaway="close">
		<div>
			<button
				@click="show = !show"
				:class="{ 'footer__language-btn--active': show }"
				class="footer__language-btn"
				type="button"
			>
				<svg class="icon"><use xlink:href="icons.svg#flag-ru"></use></svg>
				Русский
				<div class="footer__language-btn-ico">
					<svg class="icon"><use xlink:href="icons.svg#icon-down"></use></svg>
				</div>
			</button>
		</div>
		<Transition
			enter-active-class="transition ease-out duration-100"
			enter-class="transform opacity-0 scale-95"
			enter-to-class="transform opacity-100 scale-100"
			leave-active-class="transition ease-in duration-75"
			leave-class="transform opacity-100 scale-100"
			leave-to-class="transform opacity-0 scale-95"
		>
			<div v-if="show" class="footer__menu-language">
				<button @click="show = false" v-for="(item, index) in languages" :key="index">
					<svg class="icon"><use :xlink:href="'icons.svg#flag-' + item.icon"></use></svg>
					{{ item.name }}
				</button>
			</div>
		</Transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			languages: [
				{ icon: 'ru', name: 'Русский' },
				{ icon: 'pt', name: 'Portugués' },
				{ icon: 'en', name: 'English' },
				{ icon: 'tr', name: 'Türkçe' },
				{ icon: 'de', name: 'Deutsch' },
				{ icon: 'uk', name: 'Українська' },
				{ icon: 'es', name: 'Español' },
				{ icon: 'vi', name: 'Tiếng Việt' },
				{ icon: 'fl', name: 'Filippiiniläinen' },
				{ icon: 'zh', name: '中国人' },
				{ icon: 'fr', name: 'Français' },
				{ icon: 'hy', name: 'հայերեն' },
				{ icon: 'hi', name: 'हिंदी' },
				{ icon: 'uz', name: 'O`zbek' },
				{ icon: 'id', name: 'Indonesia' },
				{ icon: 'az', name: 'Azərbaycan' },
				{ icon: 'ja', name: '日本人' },
				{ icon: 'ka', name: 'ქართული' },
				{ icon: 'ko', name: '한국어' },
				{ icon: 'kk', name: 'Қазақ' },
				{ icon: 'pl', name: 'Polskie' },
			],
		}
	},
	methods: {
		close() {
			this.show = false
		},
	},
}
</script>
