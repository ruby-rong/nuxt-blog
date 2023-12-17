<script setup lang="ts">
const props = defineProps<{
  title?: string
  subtile?: string
  logo?: string
  titleColor?: string
  subtileColor?: string
}>()
</script>
<template>
  <div class="flex gap-2">
    <img
      v-if="props.logo"
      height="60"
      width="60"
      :src="props.logo"
    />
    <img
      v-else
      class="border shadow"
      height="60"
      width="60"
      src="../static/images/ava.jpg"
    />

    <div class="h-[60px]">
      <div
        class="text-3xl"
        :class="[
          props.titleColor ? `text-[${props.titleColor}]` : 'text-[#333]'
        ]"
      >
        {{ props.title }}
        --{{ `text-[${props.titleColor}]` }}
      </div>
      <div
        class="text-xl"
        :class="[
          props.subtileColor ? `text-[${props.subtileColor}]` : 'text-[#666]'
        ]"
      >
        {{ props.subtile }} -- {{ `text-[${props.subtileColor}]` }}
      </div>
    </div>
  </div>
</template>
