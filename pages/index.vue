<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Ivy Rong Site',
  description: 'This is Ivy Rong site, let me tell you all about it.',
  ogDescription: 'This is Ivy Rong site, let me tell you all about it.'
})

definePageMeta({
  title: '首页'
})
</script>
<template>
  <div>
    <HomeIntro />
    <HomeProjects />
    <HomeArticles />
  </div>
</template>

<style scoped></style>
