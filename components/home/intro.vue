<script lang="ts" setup>
const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/ivy-rong',
    icon: 'mdi:github'
  }
]
</script>
<template>
  <div class="space-y-6">
    <div class="h-48 flex justify-end items-end">
      <NuxtImg
        src="/ava.jpg"
        alt="Ivy Rong"
        class="ring-2 rounded w-36 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900"
        sizes="64px sm:64px"
        placeholder
        format="webp"
      />
    </div>
    <h1
      class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      Hello! Hi, I'm Ivy👋 A Web Developer
    </h1>
    <p class="text-lg text-gray-900 dark:text-white">
      🌛An independent developer coding with love.
    </p>
    <p class="text-lg text-gray-900 dark:text-white">
      🌱 I'm currently focusing on React, Vue, TypeScript, Nest.js .
    </p>
    <p class="text-lg text-gray-900 dark:text-white">
      ✨My tech stacks: HTML | CSS | SCSS | TailwindCSS | JS | TS | React | Vue
      | Vite | Nuxt.js | Nest.js | Prisma
    </p>
    <p>
      🪐FIND ME ON:
      <span>
        <NuxtLink
          v-for="link in links"
          :key="link.icon"
          :to="link.url"
          target="_blank"
          external
        >
          <Icon
            :name="link.icon"
            class="w-6 h-6"
          />
        </NuxtLink>
      </span>
    </p>
  </div>
</template>
