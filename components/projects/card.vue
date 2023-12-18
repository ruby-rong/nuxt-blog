<script setup lang="ts">
// export interface Props {
//   name?: string
//   url?: string
//   description?: string
//   icon?: string
//   tab?: string[]
//   opensource?: boolean
//   status: string
// }

// const props = withDefaults(defineProps<Props>(), {
//   name: 'nuxt-blog',
//   url: 'string',
//   description: 'The personal website of Ivy Rong',
//   icon: 'ic:baseline-aspect-ratio',
//   tab: () => [
//     'logos:javascript',
//     'logos:nuxt-icon',
//     'logos:vue',
//     'logos:react',
//     'logos:react-query',
//     'logos:prisma'
//   ],
//   opensource: true,
//   status: 'Active'
// })

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="flex h-[180px] cursor-pointer w-[380px] hover:bg-[#f5f5f5] hover:dark:bg-slate-700 justify-between px-4 items-center border dark:border-[#333]"
  >
    <div class="space-y-1 flex flex-col justify-between">
      <div class="space-x-4">
        <span class="text-2xl">{{ project.name }}</span>
      </div>
      <div>{{ project.description }}</div>
      <div class="space-x-2">
        <Icon
          size="18"
          v-for="(item, index) in project.tab"
          :key="index"
          :name="item"
        />
      </div>
    </div>
    <div>
      <Icon
        class="text-[#666] dark:text-[#fff]"
        size="38"
        :name="project.icon"
      />
    </div>
  </div>
</template>
