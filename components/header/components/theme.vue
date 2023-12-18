<script setup lang="ts">
const colorMode = useColorMode()
const handleTheme = () =>
  colorMode.value === 'light'
    ? (colorMode.preference = 'dark')
    : (colorMode.preference = 'light')
</script>

<template>
  <div>
    <button
      @click="handleTheme"
      class="cursor-pointer"
    >
      <template v-if="colorMode.value === 'dark'">
        <Icon
          name="line-md:sunny-outline-to-moon-loop-transition"
          color="#F0F0F0"
        />
      </template>
      <template v-else>
        <Icon
          name="line-md:sunny-outline-loop"
          color="#FFA500"
        />
      </template>
    </button>
  </div>
</template>
