<script>
import { Line } from 'vue-chartjs'
export default {
	extends: Line,
	props: {
		data: {
			type: Object,
			default: null,
		},
	},
	data() {
		return {
			options: {
				scales: {
					xAxes: [
						{
							ticks: {
								padding: 15,
								fontFamily: 'Rubik',
								fontColor: '#9ca4b3',
								fontStyle: '500',
								fontSize: 11,
								maxTicksLimit: 6,
							},
							gridLines: {
								display: true,
								borderDash: [10],
								lineWidth: 1,
								drawBorder: false,
								drawTicks: false,
								zeroLineBorderDash: [12],
								color: '#2e2354',
								zeroLineColor: '#2e2354',
							},
						},
					],
					yAxes: [
						{
							ticks: {
								padding: 15,
								fontFamily: 'Rubik',
								fontColor: 'white',
								fontSize: 11,
								fontStyle: '400',
								maxTicksLimit: 8,
							},
							gridLines: {
								display: true,
								borderDash: [10],
								lineWidth: 1,
								drawBorder: false,
								drawTicks: false,
								zeroLineBorderDash: [12],
								color: '#2e2354',
								zeroLineColor: '#2e2354',
							},
						},
					],
				},
				elements: {
					point: {
						radius: 4,
						hoverRadius: 6,
						borderWidth: 0,
						hoverBorderWidth: 0,
						hitRadius: 20,
					},
					line: {
						tension: 0.4,
					},
				},
				tooltips: {
					backgroundColor: '#fff',
					titleFontColor: '#000',
					xPadding: 10,
					yPadding: 10,
					displayColors: false,
					bodyFontColor: '#9ca4b3',
					bodyFontFamily: 'Rubik',
					bodyFontStyle: '500',
					titleFontSize: 14,
					titleMarginBottom: 8,
					titleFontStyle: '800',
					cornerRadius: 10,
					borderColor: 'transparent',
					borderWidth: 0,
				},
				legend: {
					position: 'bottom',
					labels: {
						boxWidth: 6,
						fontSize: 13,
						fontFamily: 'Rubik',
						padding: 16,
						usePointStyle: true,
						fontColor: '#fff',
						fontStyle: '500',
					},
				},
				layout: {
					padding: {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
					},
				},
				responsive: true,
				maintainAspectRatio: false,
			},
		}
	},
	mounted() {
		this.renderChart(this.data, this.options)
	},
}
</script>
