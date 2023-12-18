<template>
    <button @click="handleError">发生错误。返回首页</button>  
  <div>{{ error }}</div>
</template>
<script setup lang="ts">
const props = defineProps({
  error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>
