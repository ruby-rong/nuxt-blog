<script setup lang="ts">
export interface Props {
  title?: string
  subtile?: string
  logo?: string
  titleColor?: string
  subtileColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '关于我',
  subtile: '你好',
  logo: '/ava.jpg'
})

const img = useImage()
const imgUrl = img('/ava.jpg')
</script>
<template>
  <div class="flex gap-2 px-4 py-2 rounded-sm">
    <NuxtImg
      src="/ava.jpg"
      alt="Ivy Rong"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px"
      placeholder
      format="webp"
    />
    <div class="h-[60px]">
      <div class="text-2xl text-[#fff]">
        {{ props.title }}
      </div>
      <div class="text-lg text-[#fff]">
        {{ props.subtile }}
      </div>
    </div>
  </div>
</template>
