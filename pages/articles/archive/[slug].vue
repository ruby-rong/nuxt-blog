<script setup>
const route = useRoute()
const { slug } = route.params
useSeoMeta({
  ogImage: ``,
  twitterCard: '',
  articleAuthor: 'Ivy Rong'
})

const { root, hasComment } = useComment(tabUrl)
initViewer(root)
</script>

<template>
  <main class="flex justify-center items-center">
    <UCard
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <ContentDoc
        v-slot="{ doc }"
        tag="article"
      >
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </UCard>
  </main>
</template>

<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
