<script setup lang="ts">
import Title from '@/components/title.vue'
const props = defineProps<{
  title?: string
  img?: string
}>()
</script>

<template>
  <div>
    <div class="border bg-[#fff] dark:bg-gray-950 box">
      <div class="relative">
        <img
          class="h-[300px] w-full object-cover"
          src="../static/Images/bg3.jpg"
        />
        <div class="absolute bottom-6 left-10">
          <Title
            title="关于我"
            subtile="你好"
            title-color="#fff"
            subtile-color="#fff"
          />
        </div>
      </div>
      <div class="p-16">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  border: 1px solid #f0f0f0;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
}
</style>
