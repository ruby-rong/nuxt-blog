<script setup lang="ts"></script>
<template>
  <Body>
    <NuxtClientFallback fallback-tag="span">
      <NuxtLayout>
        <!-- <NuxtLoadingIndicator /> -->
        <NuxtPage />
      </NuxtLayout>
    </NuxtClientFallback>
  </Body>
</template>
