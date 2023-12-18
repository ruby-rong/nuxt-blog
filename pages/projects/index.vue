<script setup>
const description =
  'I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.'
useSeoMeta({
  title: 'Projects | Ivy',
  description
})

const { data: projects } = await useAsyncData('projects-all', () =>
  queryContent('/projects').find()
)
</script>

<template>
  <div class="bg-pink-300">
    <CommonTitle
      class="mt-12"
      title="Projects"
      :description="description"
    />
    <div
      class="flex flex-col flex-wrap sm:flex-row bg-stone-400 items-center gap-4 justify-end"
    >
      <ProjectsCard
        v-for="(item, index) in projects"
        :key="index"
        :project="item"
      />
    </div>
  </div>
</template>
