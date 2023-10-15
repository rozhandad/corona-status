<template>
	<div class="content__layout loyalty">
		<section class="typical__page-block">
			<div class="wrapper">
				<div class="typical__page-block-inner">
					<div class="typical__page-block-head">
						<div class="typical__page-block-caption">
							<h1>Программа лояльности</h1>
						</div>
						<div class="typical__page-block-info">
							Получайте кэшбэк, зависящий от уровня в программе лояльности, от каждой сделанной
							ставки
						</div>
					</div>
					<div class="typical__page-block-body">
						<div class="loyalty__tabs">
							<a href="javascript:;" :class="{ active: currentTab === 0 }" @click="currentTab = 0"
								>Мой кабинет</a
							>
							<a href="javascript:;" :class="{ active: currentTab === 1 }" @click="currentTab = 1"
								>Лог начислений</a
							>
						</div>
						<div class="loyalty__inner">
							<Index v-if="currentTab === 0" />
							<History v-if="currentTab === 1" />
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
			currentTab: 0,
		}
	},
	components: {
		Footer: () => import('@/components/layout/Footer/Footer.vue'),
		Index: () => import('@/components/pages/loyalty/Index.vue'),
		History: () => import('@/components/pages/loyalty/History.vue'),
	},
}
</script>
