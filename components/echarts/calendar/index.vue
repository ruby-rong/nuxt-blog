<script setup lang="ts">
import * as echarts from 'echarts/core'
import {
  CalendarComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent
} from 'echarts/components'
//import type { CalendarComponentOption, VisualMapComponentOption } from 'echarts/components'
import { HeatmapChart } from 'echarts/charts'
//import type { HeatmapSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts'
echarts.use([
  CalendarComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  HeatmapChart,
  CanvasRenderer
])
// type EChartsOption = echarts.ComposeOption<
//   CalendarComponentOption | VisualMapComponentOption | HeatmapSeriesOption
// >

export interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '访问流量'
})

function getVirtualData(year: string) {
  const date = +echarts.time.parse(year + '-01-01')
  const end = +echarts.time.parse(year + '-12-31')
  const dayTime = 3600 * 24 * 1000
  const data: [string, number][] = []
  for (let time = date; time <= end; time += dayTime) {
    data.push([
      echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
      Math.floor(Math.random() * 10)
    ])
  }
  console.log(data)
  return data
}

const chartOption = ref({
  title: {
    top: 10,
    left: 'center',
    text: props.title
  },
  visualMap: {
    show: false,
    categories: [0, 1, 2, 3, 4],
    calculable: false,
    inRange: {
      symbol: 'rect',
      color: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127']
    }
  },
  calendar: {
    range: '2024',
    cellSize: [16, 16],
    splitLine: {
      show: false
    },
    itemStyle: {
      color: '#196127',
      borderColor: '#fff',
      borderWidth: 1
    },
    yearLabel: {
      show: true
    },
    monthLabel: {
      nameMap: 'cn',
      fontSize: 11
    },
    dayLabel: {
      formatter: '{start}  1st',
      nameMap: 'cn',
      fontSize: 11
    }
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: getVirtualData('2024')
  },

  tooltip: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#777',
    borderWidth: 1,
    formatter: function (obj: { value: any }) {
      const value = obj.value
      return '<div style="font-size: 14px;">' + value[0] + '：' + value[1] + '</div>'
    }
  }
})
</script>

<template>
  <div>
    <client-only>
      <v-chart
        class="chart h-[250px] w-[1000px] bg-white rounded shadow dark:bg-gray-800"
        :option="chartOption"
      />
    </client-only>
  </div>
</template>
