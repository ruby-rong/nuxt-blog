<script setup lang="ts">
const value = ref('')
</script>
<template>
  <div>
    <div>发表留言</div>
    <div>
      <UInput v-model="value" />
      <UInput v-model="value" />
      <UInput v-model="value" />
      <UTextarea v-model="value" />
    </div>
  </div>
</template>
