<script setup lang="ts">
const colorMode = useColorMode()
console.log(colorMode)
const handleTheme = (value: string) => {
  colorMode.preference = value
}
</script>

<template>
  <div>
    <Icon
      class="cursor-pointer"
      v-if="$colorMode.preference === 'dark'"
      @click="handleTheme('light')"
      name="line-md:sunny-outline-to-moon-loop-transition"
      color="#F0F0F0"
    />
    <Icon
      v-if="$colorMode.preference === 'light'"
      class="cursor-pointer"
      @click="handleTheme('dark')"
      name="line-md:sunny-outline-loop"
      color="#FFA500"
    />
  </div>
</template>

<style scoped>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
</style>
