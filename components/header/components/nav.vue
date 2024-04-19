<script setup lang="ts">
const router = useRouter()
const ui = {
  width: 'w-28'
}
const links = [
  {
    label: '首页',
    icon: 'ph:house-line-bold',
    url: '/'
  },
  {
    label: '项目',
    icon: 'ic:baseline-auto-fix-high',
    url: '/projects'
  },
  {
    label: '文章',
    icon: 'ic:baseline-menu-book',
    children: [
      [
        {
          label: '归档',
          icon: 'ic:outline-archive',
          click: () => router.push('/articles/archive')
        },
        {
          label: '分类',
          icon: 'ic:outline-class',
          click: () => router.push('/articles/classification')
        }
      ]
    ]
  },
  {
    label: '个人',
    icon: 'ic:baseline-person-outline',
    children: [
      [
        {
          label: '关于',
          icon: 'ic:baseline-account-box',
          click: () => router.push('/me/about')
        },
        {
          label: '音乐',
          icon: 'ic:outline-music-note',
          click: () => router.push('/me/songs')
        }
      ]
    ]
  },
  {
    label: '社交',
    icon: 'ic:outline-person-add-alt',
    children: [
      [
        {
          label: '友联',
          icon: 'ic:outline-link',
          click: () => router.push('/social/friendLink')
        },
        {
          label: '留言板',
          icon: 'ic:round-chat-bubble-outline',
          click: () => router.push('/social/messageBoard')
        }
      ]
    ]
  },
  {
    label: '站点',
    icon: 'humbleicons:globe',
    children: [
      [
        {
          label: '站点分析',
          icon: 'ic:round-pie-chart-outline',
          click: () => router.push('/site/analysis')
        },
        {
          label: '站点统计',
          icon: 'ic:twotone-bar-chart',
          click: () => router.push('/site/statistics')
        }
      ]
    ]
  }
]
</script>

<template>
  <div class="space-x-5 hidden sm:block">
    <UDropdown
      v-for="(item, index) in links"
      :key="index"
      :ui="ui"
      mode="hover"
      :items="item.children"
      :popper="{ placement: 'bottom' }"
    >
      <template #item="{ item }">
        <Icon
          size="18"
          class="text-[#666] dark:text-[#fff]"
          :name="item.icon"
        />
        <span class="truncate">{{ item.label }}</span>
      </template>

      <NuxtLink
        class="pl-1"
        :to="item.url"
      >
        <div class="flex justify-center items-center space-x-1">
          <Icon
            class="text-[#333] dark:text-[#fff]"
            size="20"
            :name="item.icon"
          />
          <span>{{ item.label }}</span>
        </div>
      </NuxtLink>
    </UDropdown>
  </div>
</template>
