<script setup lang="ts">
const props = defineProps<{
  id?: number
  userName?: string
  content?: string
  orgName?: string
  title?: string
  createdAt?: Date
}>()
</script>

<template>
  <div class="flex rounded w-full bg-slate-100 dark:bg-slate-800 pt-2 pb-6 gap-2">
    <div class="w-16 h-16 bg-slate-300 rounded-full" />
    <div class="space-y-1">
      <div class="space-x-2 text-sm text-[#999] dark:text-[#fff]">
        <span>{{ userName }}</span>
        <span>{{ createdAt }}</span>
      </div>
      <div class="text-2xl text-[#333] dark:text-[#fff]">
        {{ title }}
      </div>
      <div class="text-xl text-[#666] dark:text-[#fff]">
        {{ content }}
      </div>
    </div>
  </div>
</template>
