<template>
	<div class="leftside">
		<div class="leftside__inner">
			<ul class="leftside__nav">
				<li v-for="(item, index) in links" :key="index">
					<router-link
						:to="item.url"
						active-class="leftside__link--active"
						exact-active-class="leftside__link--active"
					>
						<svg class="icon"><use :xlink:href="'icons.svg#icon-' + item.ico"></use></svg>
						<span>{{ item.name }}</span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					url: '/lobby',
					ico: '777',
					name: 'Лобби',
				},
				{
					url: '/promo',
					ico: 'faucet',
					name: 'Промо',
				},
				{
					url: '/partner',
					ico: 'network',
					name: 'Партнерам',
				},
				{
					url: '/loyalty',
					ico: 'briefcase',
					name: 'Лояльность',
				},
				{
					url: '/help',
					ico: 'help-circle',
					name: 'Поддержка',
				},
				{
					url: '/sport',
					ico: 'soccer',
					name: 'Спорт',
				},
			],
		}
	},
}
</script>
