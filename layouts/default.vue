<script setup lang="ts">
const route = useRoute()
console.log(route.meta.title)
useHead({
  title: `${route.meta.title} ｜ Ivy Rong Blog`,
  link: [{ rel: 'icon', href: '/favicon.ico' }],

  meta: [
    { name: 'description', content: 'Ivy Rong' },
    { name: 'keywords', content: '个人博客' }
  ]
})
</script>

<template>
  <div>
    <Header class="h-16" />
    <UContainer class="min-h-[calc(100vh-128px)]">
      <div class="w-full sm:w-[800px] m-auto !border-0">
        <slot />
      </div>
    </UContainer>
    <Footer class="h-16" />
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 text-black dark:bg-gray-900 dark:text-white;
}

html {
  font-family: Kalam, sans-serif;
}
</style>
