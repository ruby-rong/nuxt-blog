<template>
  <div class="space-y-1">
    <h1
      class="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
    >
      {{ title }}
    </h1>
    <p class="text-base py-8 text-gray-600 dark:text-gray-400">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
    default: '标题'
  },
  description: {
    type: String,
    required: true,
    default: '标题描述'
  }
})
</script>
