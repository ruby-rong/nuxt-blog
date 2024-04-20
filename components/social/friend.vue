<script setup lang="ts">
const url = '../../assets/images/ava.jpg'

defineProps<{
  id?: number
  nickName?: string
  siteTitle?: string
  website?: string
  avatar?: string
  email?: Date
}>()
</script>
<template>
  <NuxtLink
    to="https://twitter.com/nuxt_js"
    target="_blank"
  >
    <div
      class="flex items-center justify-start hover:bg-[#f5f5f5] hover:dark:bg-slate-700 dark:border-[#333] border h-22 w-96 p-2 gap-2"
    >
      <div
        class="w-20 h-20 rounded-full border-pink-200 border-4 text-white text-center leading-20"
      >
        <NuxtImg
          src="/ava.jpg"
          placeholder
          format="webp"
          sizes="80px"
          class="rounded-full w-[100%] h-[100%]"
        />
      </div>

      <div class="space-y-1 w-[80%] overflow-hidden whitespace-nowrap overflow-ellipsis">
        <div class="font-semibold text-xl">喵小博客</div>
        <small class="">缘，妙不可言</small>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
