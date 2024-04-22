<script lang="ts" setup>
const { data: projects } = await useAsyncData('projects-home', () =>
  queryContent('/projects').limit(3).find()
)

// 定义获取projects数据的函数

// const projects = ref<any>([])
// const fetchProjects = async () => {
//   const { data } = await useAsyncData('projects-home', () =>
//     queryContent('/projects').limit(3).find()
//   )
//   // 更新projects的值
//   projects.value = data
// }

// onMounted(fetchProjects)
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
