<script setup lang="ts">
useHead({
  title: '关于我',
  meta: [
    { name: 'description', content: '关于我的标题' },
    { name: 'keywords', content: '关键词' }
  ]
})
const route = useRoute()
console.log(route.meta.title)
definePageMeta({
  title: 'Catalog Page'
})
</script>

<template>
  <div>
    关于我
    <h1>{{ route.meta.title }}</h1>
    <EchartsCalendar />
  </div>
</template>
