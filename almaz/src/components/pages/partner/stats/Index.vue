<template>
	<div class="typical__tabs-block-tab">
		<div class="typical__loader" v-if="preloader">
			<img src="@/assets/images/loader.svg" class="loading" alt="" />
		</div>
		<div class="typical__tabs-block-tab-inner" v-if="!preloader">
			<div class="typical__tabs-block-tab-title">
				<h1>Статистика</h1>
			</div>
			<div class="typical__tabs max-[575px]:flex-col max-[575px]:items-end max-[575px]:space-y-4">
				<ul class="max-[575px]:w-full">
					<li>
						<a
							href="javascript:;"
							:class="{ '!bg-[#fdcd2d] !text-black': view === 0 }"
							@click="view = 0"
							>Таблицей</a
						>
					</li>
					<li>
						<a
							href="javascript:;"
							:class="{ '!bg-[#fdcd2d] !text-black': view === 1 }"
							@click="view = 1"
							>Графиком</a
						>
					</li>
					<li><a href="javascript:;">Экспорт</a></li>
				</ul>
				<div class="relative z-[1]" v-on-clickaway="closeSelect">
					<div>
						<button
							type="button"
							:class="{ 'rounded-bl-none rounded-br-none': select }"
							@click="select = !select"
							class="py-2 px-3 text-[13px] rounded-[8px] text-[#9aa0b1] flex items-center transition-all duration-300 ease-out hover:text-white"
						>
							{{ filterTab.current.name }}
							<div class="text-xs ml-1.5">
								<svg class="icon"><use xlink:href="icons.svg#icon-down"></use></svg>
							</div>
						</button>
					</div>
					<Transition
						enter-active-class="transition-all duration-100 ease-out"
						enter-class="opacity-0"
						enter-to-class="opacity-100"
						leave-active-class="transition-all duration-100 ease-out"
						leave-class="opacity-100"
						leave-to-class="opacity-0"
					>
						<ul
							class="absolute top-[calc(100%_+_1px)] overflow-hidden right-0 flex flex-col min-w-[180px] rounded-[8px] scroll-0 bg-[#342562]"
							v-if="select"
						>
							<li
								v-for="(item, index) in filterTab.items"
								:key="index"
								@click="
									filterTab.current.name = item.name
									filterTab.current.index = index
									select = false
								"
								class=""
							>
								<a
									href="javascript:;"
									class="px-4 py-2 text-xs inline-block w-full transition-all duration-300 ease-out hover:bg-[#3f2d75]"
								>
									{{ item.name }}
								</a>
							</li>
						</ul>
					</Transition>
				</div>
			</div>
			<div class="typical__list">
				<div class="flex flex-col" v-if="view === 0">
					<div class="table overflow-x-auto pb-[15px]" v-if="table.items.length">
						<table class="!min-w-[1275px]">
							<thead>
								<tr>
									<td v-for="(item, index) in table.head" :key="index">{{ item }}</td>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item, index) in table.items" :key="index">
									<td>{{ item.date }}</td>
									<td>{{ item.users }}</td>
									<td>{{ item.registrations }}</td>
									<td>{{ item.sum_deposits }}</td>
									<td>{{ item.count_deposits }}</td>
									<td>{{ item.sum_withdraws }}</td>
									<td>{{ item.count_withdraws }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="typical__graphics" v-if="view === 1">
					<LineChart
						class="relative w-full [&_canvas]:!w-full [&_canvas]:!h-full p-4 rounded-[8px] bg-[#291e4e] shadow-[0px_22px_30px_-16px_rgba(0,0,0,0.1)]"
						v-for="(item, index) in charts"
						:key="index"
						:data="item.data"
						:options="item.options"
					></LineChart>
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
			select: false,
			view: 0,
			filterTab: {
				current: {
					name: 'Общая статистика',
					index: 0,
				},
				items: [{ name: 'Общая статистика' }, { name: 'Основная ссылка' }, { name: 'BLACKMAZE' }],
			},
			table: {
				head: [
					'Дата',
					'Переходов',
					'Регистраций',
					'Сумма депозитов',
					'Кол-во депозитов',
					'Сумма выводов',
					'Кол-во выводов',
				],
				items: [
					{
						date: '02 фев.',
						users: 3,
						registrations: 0,
						sum_deposits: 150 + '₽',
						count_deposits: 1,
						sum_withdraws: 0,
						count_withdraws: 0,
					},
					{
						date: '02 фев.',
						users: 3,
						registrations: 0,
						sum_deposits: 150 + '₽',
						count_deposits: 1,
						sum_withdraws: 0,
						count_withdraws: 0,
					},
					{
						date: '02 фев.',
						users: 3,
						registrations: 0,
						sum_deposits: 150 + '₽',
						count_deposits: 1,
						sum_withdraws: 0,
						count_withdraws: 0,
					},
					{
						date: '02 фев.',
						users: 3,
						registrations: 0,
						sum_deposits: 150 + '₽',
						count_deposits: 1,
						sum_withdraws: 0,
						count_withdraws: 0,
					},
					{
						date: '02 фев.',
						users: 3,
						registrations: 0,
						sum_deposits: 150 + '₽',
						count_deposits: 1,
						sum_withdraws: 0,
						count_withdraws: 0,
					},
					{
						date: '02 фев.',
						users: 3,
						registrations: 0,
						sum_deposits: 150 + '₽',
						count_deposits: 1,
						sum_withdraws: 0,
						count_withdraws: 0,
					},
				],
			},
			charts: [
				{
					data: {
						labels: ['18.01', '19.01', '21.01', '22.01', '23.01', '24.01', '25.01', '26.01'],
						datasets: [
							{
								label: 'Переходов',
								data: [0, 3, 2, 4, 1, 3, 6, 12],
								backgroundColor: 'rgba(73,134,245,0.15)',
								borderWidth: 2,
								borderColor: '#4986f5',
								pointBorderWidth: 0,
								pointRadius: 4,
								pointBackgroundColor: '#4986f5',
								pointHoverBackgroundColor: '#4986f5',
								pointHoverBorderColor: '#4986f5',
							},
							{
								label: 'Регистраций',
								data: [1, 0, 1, 0, 3, 2, 0, 4],
								backgroundColor: 'rgba(253,205,45,0.05)',
								borderWidth: 2,
								borderColor: '#fdcd2d',
								pointBorderWidth: 0,
								pointRadius: 4,
								pointBackgroundColor: '#fdcd2d',
								pointHoverBackgroundColor: '#fdcd2d',
								pointHoverBorderColor: '#fdcd2d',
							},
						],
					},
				},
				{
					data: {
						labels: [
							'18.01',
							'19.01',
							'21.01',
							'22.01',
							'23.01',
							'24.01',
							'25.01',
							'26.01',
							'28.01',
							'30.01',
						],
						datasets: [
							{
								label: 'Ставки',
								data: [300, 150, 600, 1200, -300, 450, 2100, 840, 200, -100],
								backgroundColor: 'rgba(73,134,245,0.15)',
								borderWidth: 2,
								borderColor: '#4986f5',
								pointBorderWidth: 0,
								pointRadius: 4,
								pointBackgroundColor: '#4986f5',
								pointHoverBackgroundColor: '#4986f5',
								pointHoverBorderColor: '#4986f5',
							},
							{
								label: 'Профит',
								data: [50, 200, -50, 400, 150, 200, -300, 0],
								backgroundColor: 'rgba(253,205,45,0.05)',
								borderWidth: 2,
								borderColor: '#fdcd2d',
								pointBorderWidth: 0,
								pointRadius: 4,
								pointBackgroundColor: '#fdcd2d',
								pointHoverBackgroundColor: '#fdcd2d',
								pointHoverBorderColor: '#fdcd2d',
							},
							{
								label: 'Сумма депозитов',
								data: [2500, 4000, 1773, 3200, 1500, 800, 6720, 0],
								backgroundColor: 'rgba(208,4,252,0.1)',
								borderWidth: 2,
								borderColor: '#d004fc',
								pointBorderWidth: 0,
								pointRadius: 4,
								pointBackgroundColor: '#d004fc',
								pointHoverBackgroundColor: '#d004fc',
								pointHoverBorderColor: '#d004fc',
							},
							{
								label: 'Сумма выводов',
								data: [799, 8200, 1000, 500, 3800, 10400, 6720, 1200, 8200],
								backgroundColor: 'rgba(245,73,73,0.1)',
								borderWidth: 2,
								borderColor: '#f54949',
								pointBorderWidth: 0,
								pointRadius: 4,
								pointBackgroundColor: '#f54949',
								pointHoverBackgroundColor: '#f54949',
								pointHoverBorderColor: '#f54949',
							},
						],
					},
				},
			],
		}
	},
	components: {
		LineChart: () => import('@/components/charts/LineChart.vue'),
	},
	methods: {
		preloaderDestroy() {
			setTimeout(() => {
				this.preloader = false
			}, 150)
		},
		closeSelect() {
			this.select = false
		},
	},
	mounted() {
		this.preloaderDestroy()
	},
}
</script>
