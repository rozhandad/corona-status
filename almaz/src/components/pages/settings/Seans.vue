<template>
	<div class="typical__tabs-block-tab">
		<div class="typical__loader" v-if="preloader">
			<img src="@/assets/images/loader.svg" class="loading" alt="" />
		</div>
		<div class="typical__tabs-block-tab-inner" v-if="!preloader">
			<div class="typical__tabs-block-tab-title">
				<h1>Сеансы</h1>
			</div>
			<div
				class="table max-[1475px]:!overflow-auto max-[1475px]:pb-[10px]"
				v-if="table.items.length"
			>
				<table class="max-[1475px]:min-w-[1075px]">
					<thead>
						<tr>
							<td v-for="(item, index) in table.head" :key="index">{{ item }}</td>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in table.items" :key="index">
							<td>{{ item.browser }}</td>
							<td>{{ item.region }}</td>
							<td>{{ item.ip }}</td>
							<td>{{ item.data }}</td>
							<td>
								<span
									:class="{
										'text-[#e86376]': item.status === 1,
										'text-[#62ca5b]': item.status === 0,
									}"
									>{{ item.status === 0 ? 'Открытая' : 'Закрытая' }}</span
								>
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
</template>

<script>
export default {
	data() {
		return {
			preloader: true,
			table: {
				head: ['Устройство', 'Регион', 'Ip-Адрес', 'Дата', 'Сессия'],
				items: [
					{
						browser: 'Opera (Windows 10)',
						region: 'RU, Moskow',
						ip: '123.213.23.21',
						data: '05.02.2023 15:24',
						status: 0,
					},
					{
						browser: 'Opera (Windows 10)',
						region: 'RU, Moskow',
						ip: '123.213.23.21',
						data: '05.02.2023 15:24',
						status: 1,
					},
				],
			},
		}
	},
	methods: {
		preloaderDestroy() {
			setTimeout(() => {
				this.preloader = false
			}, 150)
		},
	},
	mounted() {
		this.preloaderDestroy()
	},
}
</script>
