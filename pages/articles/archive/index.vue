<script setup lang="ts">
// import Giscus from '@giscus/vue'
const description =
  'All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.'
useSeoMeta({
  title: 'Articles | Ivy Rong',
  description
})

const { data: articles } = await useAsyncData('all-articles', () =>
  queryContent('/articles').find()
)

// const articles = ref<any>([])
// const fetchProjects = async () => {
//   const { data } = await useAsyncData('all-articles', () => queryContent('/articles').find())
//   // 更新projects的值
//   articles.value = data
// }

// onMounted(() => {
//   fetchProjects()
// })
</script>

<template>
  <main class="min-h-screen">
    <CommonTitle
      class="mb-16"
      title="Articles"
      :description="description"
    />
    <ul class="space-y-16">
      <li
        v-for="(article, id) in articles"
        :key="id"
      >
        <ArtCardLine :article="article" />
      </li>
    </ul>
    <!-- <Giscus
      id="comments"
      default-comment-order="newest"
      repo="ivy-rong/nuxt-blog"
      repo-id="R_kgDOK6McQw"
      category="Comments"
      category-id="Comments"
      mapping="title"
      strict="0"
      reactionsenabled="1"
      emitmetadata="1"
      inputposition="top"
      theme="light"
      crossorigin="anonymous"
      lang="zh-CN"
      loading="lazy"
    /> -->
  </main>
</template>
