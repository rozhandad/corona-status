'use strict'

Object.defineProperty(exports, '__esModule', {
	value: true,
})
exports['default'] = void 0

var _vueChartjs = require('vue-chartjs')

var reactiveProp = _vueChartjs.mixins.reactiveProp
var _default = {
	extends: _vueChartjs.Line,
	mixins: [reactiveProp],
	props: ['options'],
	mounted: function mounted() {
		// this.chartData создаётся внутри миксина.
		// Если вы хотите передать опции, создайте локальный объект options
		this.renderChart(this.chartData, this.options)
	},
}
exports['default'] = _default
