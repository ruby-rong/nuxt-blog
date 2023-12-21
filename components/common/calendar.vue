<script setup lang="ts">
import * as d3 from 'd3'
import { Legend } from '@d3/color-legend'

const container = ref<Element>()

const width = 928 // width of the chart
const cellSize = 17 // height of a day
const height = cellSize * 7
// height of a week (5 days + padding)

//为轴和工具提示定义格式化函数
const formatValue = d3.format('+.2%')
const formatClose = d3.format('$,.2f')
const formatDate = d3.utcFormat('%x')
const formatDay = (i: number) => 'SMTWTFS'[i]
const formatMonth = d3.utcFormat('%b')


let dji =  [
  {Date: '2000-01-03', Open: 11501.849609, High: 11522.009766, Low: 11305.69043, Close: 11357.509766, Adj Close: 11357.509766, Volume: 169750000},
  {Date: '2000-01-04', Open: 11349.75, High: 11350.05957, Low: 10986.450195, Close: 10997.929688, Adj Close: 10997.929688, Volume: 178420000},
  {Date: '2000-01-05', Open: 10989.370117, High: 11215.099609, Low: 10938.669922, Close: 11122.650391, Adj Close: 11122.650391, Volume: 203190000},
  {Date: '2000-01-06', Open: 11113.370117, High: 11313.450195, Low: 11098.450195, Close: 11253.259766, Adj Close: 11253.259766, Volume: 176550000},
  {Date: '2000-01-07', Open: 11247.05957, High: 11528.139648, Low: 11239.919922, Close: 11522.55957, Adj Close: 11522.55957, Volume: 184900000},
  {Date: '2000-01-10', Open: 11532.480469, High: 11638.280273, Low: 11532.480469, Close: 11572.200195, Adj Close: 11572.200195, Volume: 168180000},
  {Date: '2000-01-11', Open: 11568.469727, High: 11663.099609, Low: 11502.700195, Close: 11511.080078, Adj Close: 11511.080078, Volume: 177300000},
  {Date: '2000-01-12', Open: 11506.730469, High: 11612.530273, Low: 11505.179688, Close: 11551.099609, Adj Close: 11551.099609, Volume: 194060000},
  {Date: '2000-01-13', Open: 11558.240234, High: 11656.580078, Low: 11524.110352, Close: 11582.429688, Adj Close: 11582.429688, Volume: 174910000},
  {Date: '2000-01-14', Open: 11619.349609, High: 11750.280273, Low: 11612.530273, Close: 11722.980469, Adj Close: 11722.980469, Volume: 266830000},
  ]
  dji = FileAttachment("^DJI.csv").csv({typed: true})


// 帮助计算一周中一天的位置。
const timeWeek = d3.utcMonday
const countDay = (i: number) => (i + 6) % 7

//计算给单元格着色的值：百分比变化是当天的
//closing value and the previous day’s, as a fraction of the latter.
const data = d3.pairs(dji, ({ Close: Previous }, { Date, Close }) => ({
  date: Date,
  value: (Close - Previous) / Previous,
  close: Close
}))

//计算值的范围，忽略异常值
//并定义发散和对称的色标
const max = d3.quantile(data, 0.9975, (d) => Math.abs(d.value))
const color = d3.scaleSequential(d3.interpolatePiYG).domain([-max, +max])

const years = d3.groups(data, (d) => d.date.getUTCFullYear()).reverse()

// 在每个月的左侧绘制一条细白线的函数。
function pathMonth(t:any) {
  const d = Math.max(0, Math.min(5, countDay(t.getUTCDay())))
  const w = timeWeek.count(d3.utcYear(t), t)
  return `${
    d === 0
      ? `M${w * cellSize},0`
      : d === 5
      ? `M${(w + 1) * cellSize},0`
      : `M${(w + 1) * cellSize},0V${d * cellSize}H${w * cellSize}`
  }V${5 * cellSize}`
}

const svg = d3
  .create('svg')
  .attr('width', width)
  .attr('height', height * years.length)
  .attr('viewBox', [0, 0, width, height * years.length])
  .attr('style', 'max-width: 100%; height: auto; font: 10px sans-serif;')

const year = svg
  .selectAll('g')
  .data(years)
  .join('g')
  .attr('transform', (d, i) => `translate(40.5,${height * i + cellSize * 1.5})`)

year
  .append('text')
  .attr('x', -5)
  .attr('y', -5)
  .attr('font-weight', 'bold')
  .attr('text-anchor', 'end')
  .text(([key]) => key)

year
  .append('g')
  .attr('text-anchor', 'end')
  .selectAll()
  .data(d3.range(1, 6))
  .join('text')
  .attr('x', -5)
  .attr('y', (i) => (countDay(i) + 0.5) * cellSize)
  .attr('dy', '0.31em')
  .text(formatDay)

year
  .append('g')
  .selectAll()
  .data(([, values]) =>
    values.filter((d) => ![0, 6].includes(d.date.getUTCDay()))
  )
  .join('rect')
  .attr('width', cellSize - 1)
  .attr('height', cellSize - 1)
  .attr('x', (d) => timeWeek.count(d3.utcYear(d.date), d.date) * cellSize + 0.5)
  .attr('y', (d) => countDay(d.date.getUTCDay()) * cellSize + 0.5)
  .attr('fill', (d) => color(d.value))
  .append('title')
  .text(
    (d) => `${formatDate(d.date)}
${formatValue(d.value)}${
      d.close === undefined
        ? ''
        : `
${formatClose(d.close)}`
    }`
  )

const month = year
  .append('g')
  .selectAll()
  .data(([, values]) =>
    d3.utcMonths(d3.utcMonth(values[0].date), values.at(-1).date)
  )
  .join('g')

month
  .filter((d, i) => i)
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', '#fff')
  .attr('stroke-width', 3)
  .attr('d', pathMonth)

month
  .append('text')
  .attr(
    'x',
    (d) => timeWeek.count(d3.utcYear(d), timeWeek.ceil(d)) * cellSize + 2
  )
  .attr('y', -5)
  .text(formatMonth)

  onMounted(() => {
    container.value!.append(svg.node());
  })



  // 没有自尊心 死皮赖 我看不上你 猪带不动 坑 你就是坑
</script>

<template>
  <div ref="container"></div>
</template>
