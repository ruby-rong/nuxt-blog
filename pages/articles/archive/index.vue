<script setup lang="ts">
import Giscus from '@giscus/vue'
const description =
  'All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.'
useSeoMeta({
  title: 'Articles | Ivy Rong',
  description
})

const { data: articles } = await useAsyncData('all-articles', () =>
  queryContent('/articles').find()
)
console.log(articles)
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
    <Giscus
      id="comments"
      defaultCommentOrder="newest"
      repo="ivy-rong/nuxt-blog"
      repoId="R_kgDOK6McQw"
      category="Comments"
      categoryId="Comments"
      mapping="title"
      strict="0"
      reactionsenabled="1"
      emitmetadata="1"
      inputposition="top"
      theme="light"
      crossorigin="anonymous"
      lang="zh-CN"
      loading="lazy"
    />
  </main>
</template>
