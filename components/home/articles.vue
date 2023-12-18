import type { ArtCardLine } from '#build/components';
<script lang="ts" setup>
const { data: articles } = await useAsyncData('articles-home', () =>
  queryContent('/articles')
    .sort({ published: -1 })
    .limit(3)
    .only(['title', 'description', 'published', 'slug', '_path'])
    .find()
)
</script>
<template>
  <div>
    <h1
      class="text-xl my-10 font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      RECENT ARTICLES
    </h1>
    <ul class="space-y-16">
      <li
        v-for="(article, id) in articles"
        :key="id"
      >
        <ArtCardLine :article="article" />
      </li>
    </ul>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="All Projects &rarr;"
        to="/articles/archive"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>
