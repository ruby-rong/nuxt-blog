<script setup lang="ts">
const props = defineProps<{
  title?: string
  img?: string
  subtile?: string
  logo?: string
  titleColor?: string
  subtileColor?: string
}>()
</script>

<template>
  <div>
    <div
      class="border dark:border-0 bg-[#fff] ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700 box dark:shadow"
    >
      <div class="relative">
        <img
          class="h-[300px] w-full object-cover"
          src="../static/Images/bg3.jpg"
        />
        <div class="absolute bottom-6 left-10">
          <ArtTitle
            logo="../static/images/ava.jgp"
            title="关于我"
            subtile="你好321312"
            title-color="#fff"
            subtile-color="#fff"
          />
        </div>
      </div>
      <div class="px-10 sm:px-16">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
}
</style>
