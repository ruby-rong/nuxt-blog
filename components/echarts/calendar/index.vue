<script setup lang="ts">
import * as echarts from 'echarts/core'
import { CalendarComponent, VisualMapComponent } from 'echarts/components'
//import type { CalendarComponentOption, VisualMapComponentOption } from 'echarts/components'
import { HeatmapChart } from 'echarts/charts'
//import type { HeatmapSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([CalendarComponent, VisualMapComponent, HeatmapChart, CanvasRenderer])
// type EChartsOption = echarts.ComposeOption<
//   CalendarComponentOption | VisualMapComponentOption | HeatmapSeriesOption
// >
import VChart from 'vue-echarts'

function getVirtualData(year: string) {
  const date = +echarts.time.parse(year + '-01-01')
  const end = +echarts.time.parse(year + '-12-31')
  const dayTime = 3600 * 24 * 1000
  const data: [string, number][] = []
  for (let time = date; time <= end; time += dayTime) {
    data.push([
      echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
      Math.floor(Math.random() * 10000)
    ])
  }
  return data
}

const chartOption = ref({
  visualMap: {
    show: false,
    min: 0,
    max: 10000
  },
  calendar: {
    range: '2017'
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: getVirtualData('2017')
  }
})
</script>

<template>
  <div>
    <client-only>
      <v-chart
        class="chart h-[300px] w-[1200px] bg-white rounded shadow dark:bg-gray-800"
        :option="chartOption"
      />
    </client-only>
  </div>
</template>
