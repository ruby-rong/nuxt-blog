import type { ProjectsCard } from '#build/components';
<script lang="ts" setup>
const { data: projects } = await useAsyncData('projects-home', () =>
  queryContent('/projects').limit(3).find()
)
console.log(projects, '11111')
</script>
<template>
  <div>
    <h1 class="text-xl my-10 font-bold tracking-tight text-gray-800 dark:text-gray-100">
      FEATURED PROEJCTS
    </h1>
    <div class="space-y-4">
      <ProjectsCardLine
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="All Projects &rarr;"
        to="/projects"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>
