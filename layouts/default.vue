<script setup lang="ts">
const route = useRoute()
console.log(route.meta.title)
useHead({
  title: `${route.meta.title} ｜ Ivy Rong Blog`,
  link: [{ rel: 'icon', href: '/cat.png' }],
  meta: [
    { name: 'description', content: '关于我的标题' },
    { name: 'keywords', content: '个人博客' }
  ]
})
</script>

<template>
  <div>
    <Header class="h-16" />
    <main class="min-h-[calc(100vh-128px)]">
      <Card class="w-full sm:w-[1000px] m-auto">
        <slot />
      </Card>
    </main>
    <Footer class="h-16" />
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 text-black dark:bg-gray-900 dark:text-white;
}
</style>
