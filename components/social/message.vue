<script setup lang="ts">
import type { ReplyVo } from '~/types'
import ChildrenMsg from './childrenMsg.vue'
const props = defineProps<{
  id: number
  userName: string
  content?: string
  orgName?: string
  title?: string
  createdAt: Date
  reply?: ReplyVo[]
}>()
const showReply = ref(false)
const handleReply = () => {
  showReply.value = !showReply.value
}
</script>

<template>
  <div class="flex border-y pt-2 pb-6 gap-2">
    <div class="w-16 h-16 bg-slate-300 rounded-full">
      <!-- <img
        class="w-12 rounded-full border shadow"
        :src="url"
      /> -->
    </div>
    <div class="space-y-1 flex-1">
      <div class="flex justify-between">
        <div>
          <div class="space-x-2 text-sm text-[#999] dark:text-[#fff]">
            <span>{{ userName }}</span>
            <span>{{ createdAt }}</span>
          </div>
          <div class="text-2xl text-[#333] dark:text-[#fff]">
            {{ title }}
          </div>
          <div class="text-xl text-[#666] dark:text-[#fff]">
            {{ content }}
          </div>
        </div>
        <div class="space-x-2">
          <Icon
            size="24"
            class="text-[#666] dark:text-[#fff] cursor-pointer"
            name="mdi:heart-outline"
          />
          <Icon
            size="24"
            class="text-[#666] dark:text-[#fff] cursor-pointer"
            name="mdi:message-reply-text-outline"
            @click="handleReply"
          />
        </div>
      </div>
      <div v-if="showReply">
        <SocialBoard :message-id="props.id" />
      </div>
      <div
        v-if="reply && reply.length > 0"
        class="space-y-2"
      >
        <div
          v-for="item in reply"
          :key="item.id"
        >
          <ChildrenMsg
            :id="item.id"
            :user-name="item.userName"
            :content="item.content"
            :org-name="item.orgName"
            :title="item.title"
            :created-at="item.createdAt as Date"
          />
        </div>
      </div>
    </div>
  </div>
</template>
