<script setup lang="ts">
// function complexCalc() {
//   // ... do something
//   umTrackEvent('complex-btn', { propA: 1, propB: 'two', propC: false })
// }
</script>

<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <Body>
    <NuxtLayout>
      <!-- <NuxtLoadingIndicator /> -->
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
  filter: blur(1rem);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
  filter: blur(1rem);
}
</style>
