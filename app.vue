<script setup lang="ts">
import { theme } from 'ant-design-vue'
</script>
<template>
  <Body>
    <NuxtLayout>
      <a-config-provider
        :theme="{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: '#00b96b'
          }
        }"
      >
        <!-- <NuxtLoadingIndicator /> -->
        <NuxtPage />
        <a-button>1231231</a-button>
      </a-config-provider>
    </NuxtLayout>
  </Body>
</template>
