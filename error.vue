<template>
  <div class="flex justify-center items-center h-screen">
      <button @click="handleError">发生错误。返回首页</button>  
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>
