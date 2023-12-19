<script setup lang="ts">
const router = useRouter()

const links = [
  {
    label: '首页',
    icon: 'ph:house-line-bold',
    url: '/'
  },
  {
    label: '项目',
    icon: 'ic:baseline-auto-fix-high',
    url: '/projects',
    children: [
      {
        label: 'Instal',
        icon: 'i-heroicons-home',
        to: '/getting-started/installation'
      },
      {
        label: 'Vertical',
        icon: 'i-heroicons-chart-bar',
        to: '/navigation/vertical-navigation'
      },
      {
        label: 'Command',
        icon: 'i-heroicons-command-line',
        to: '/navigation/command-palette'
      }
    ]
  },
  {
    label: '文章',
    icon: 'ic:baseline-menu-book',
    children: [
      {
        label: '归档',
        icon: 'ic:outline-archive',
        to: '/articles/archive'
      },
      {
        label: '分类',
        icon: 'ic:outline-class',
        to: '/articles/classification'
      }
    ]
  }
  // {
  //   label: '个人',
  //   icon: 'ic:baseline-person-outline',
  //   children: [
  //     [
  //       {
  //         label: '关于',
  //         icon: 'ic:baseline-account-box',
  //         click: () => router.push('/me/about')
  //       },
  //       {
  //         label: '音乐',
  //         icon: 'ic:outline-music-note',
  //         click: () => router.push('/me/songs')
  //       }
  //     ]
  //   ]
  // },
  // {
  //   label: '社交',
  //   icon: 'ic:outline-person-add-alt',
  //   children: [
  //     [
  //       {
  //         label: '友联',
  //         icon: 'ic:outline-link',
  //         click: () => router.push('/social/friendLink')
  //       },
  //       {
  //         label: '留言板',
  //         icon: 'ic:round-chat-bubble-outline',
  //         click: () => router.push('/social/messageBoard')
  //       }
  //     ]
  //   ]
  // },
  // {
  //   label: '站点',
  //   icon: 'humbleicons:globe',
  //   children: [
  //     [
  //       {
  //         label: '站点分析',
  //         icon: 'ic:round-pie-chart-outline',
  //         click: () => router.push('/site/analysis')
  //       },
  //       {
  //         label: '站点统计',
  //         icon: 'ic:twotone-bar-chart',
  //         click: () => router.push('/site/statistics')
  //       }
  //     ]
  //   ]
  // }
]

const ui = {
  width: 'w-fit',
  border: 'border',
  padding: 'px-1'
}
const isOpen = ref(false)
const isExpand = ref(Array(links.length).fill(false))
</script>
<template>
  <div>
    <Icon
      @click="isOpen = true"
      name="ic:baseline-menu"
    />

    <div>
      <USlideover
        v-model="isOpen"
        class="w-1/2"
        side="left"
      >
        <div class="h-full">
          <div class="flex justify-end items-center p-4">
            <Icon
              @click="isOpen = false"
              name="ic:round-close"
            />
          </div>
          <div class="flex gap-4 justify-center flex-col items-center border">
            <div
              v-for="(item, index) in links"
              :key="index"
              class="border-amber-300"
            >
              <NuxtLink
                :to="item.url"
                class="flex justify-center items-center space-x-1"
              >
                <Icon :name="item.icon" />
                <span class="text-xl">{{ item.label }}</span>
              </NuxtLink>

              <div
                class="bg-red-200 flex flex-col gap-2 justify-center items-center"
              >
                <div
                  class="border flex justify-start items-center"
                  v-for="(children, id) in item.children"
                  :links="item.children"
                  :key="id"
                  @click="() => (isExpand[index] = !isExpand[index])"
                >
                  <NuxtLink
                    v-if="isExpand[id]"
                    :to="children.to"
                    class="flex justify-center items-center space-x-1"
                  >
                    <Icon :name="children.icon" />
                    <span class="text-xl">{{ children.label }}</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </USlideover>
    </div>
  </div>
</template>
