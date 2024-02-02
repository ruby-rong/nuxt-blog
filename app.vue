<script setup lang="ts">
function complexCalc() {
  // ... do something
  umTrackEvent('complex-btn', { propA: 1, propB: 'two', propC: false })
}
</script>

<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <Body>
    <button @click="umTrackEvent('button-1')">Button 1</button>
    <button @click="complexCalc">Button 2</button>
    <button v-umami="'Event-Name'">Event Button</button>

    <button v-umami="{ name: 'Event-Name' }">as object</button>
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
