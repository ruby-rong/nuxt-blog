<script setup>
const description =
  'I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.'
useSeoMeta({
  title: 'Projects | Ivy',
  description
})

// 初始化projects为一个响应式的ref
const projects = ref([])
// 定义获取projects数据的函数
const fetchProjects = async () => {
  const { data } = await useAsyncData('projects-all', () => {
    return queryContent('/projects').find()
  })
  // 更新projects的值
  projects.value = data
}

// const { data: projects } = await useAsyncData('projects-all', () => {
//   // debugger
//   const a = queryContent('/projects').find()
//   console.log(a, 'a')
//   return a
// })

onMounted(() => {
  fetchProjects()
})
</script>

<template>
  <div>
    <CommonTitle
      class="mt-12"
      title="Projects"
      :description="description"
    />
    <div class="flex justify-center items-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProjectsCard
          v-for="(item, index) in projects"
          :key="index"
          :project="item"
        />
      </div>
    </div>
  </div>
</template>
