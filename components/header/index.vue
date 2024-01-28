<script setup lang="ts">
import { Theme, Nav, MobileNav, Github } from './components'
</script>

<template>
  <div class="flex justify-between px-4 items-center">
    <div class="text-lg flex space-x-2">
      <MobileNav class="block sm:hidden" />
      <span> Ivy Rong</span>
    </div>
    <Nav />
    <div class="flex justify-center items-center gap-2">
      <Github />
      <Theme />
    </div>
  </div>
</template>

<style scoped></style>
