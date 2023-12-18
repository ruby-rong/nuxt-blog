<script setup lang="ts">
export interface Props {
  name?: string
  url?: string
  description?: string
  icon?: string
  tab?: string[]
  opensource?: boolean
  status: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'nuxt-blog',
  url: 'string',
  description: 'The personal website of Ivy Rong',
  icon: 'ic:baseline-aspect-ratio',
  tab: () => [
    'logos:javascript',
    'logos:nuxt-icon',
    'logos:vue',
    'logos:react',
    'logos:react-query',
    'logos:prisma'
  ],
  opensource: true,
  status: 'Active'
})
</script>

<template>
  <div
    class="flex w-[500px] justify-between px-2 hover:bg-[] items-center h-24 border dark:border-[#333]"
  >
    <div>
      <div>
        {{ props.name }}
        <Icon
          v-for="(item, index) in props.tab"
          :key="index"
          :name="item"
        />
      </div>
      <div>{{ props.description }}</div>
    </div>
    <div>
      <Icon :name="props.icon" />
    </div>
  </div>
</template>
