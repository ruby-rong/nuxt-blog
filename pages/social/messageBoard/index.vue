<script setup lang="ts">
import type { RecordsVo, BasePageModel, ReplyVo } from '~/types'

const pageModel = reactive<BasePageModel>({
  page: 1,
  pageSize: 10
})
const totalModel = ref(0)
const recordsModel = ref<RecordsVo[]>([])

async function getList() {
  const { page, pageSize, total, records } = await $fetch('/api/message', {
    method: 'get',
    query: pageModel
  })
  console.log(page, pageSize)
  totalModel.value = total
  recordsModel.value = records as unknown as RecordsVo[]
}
const handleUpdateList = (e: any) => {
  console.log(e, 'eee')
  getList()
}

const handlePage = (r: any) => {
  console.log(r, 'r')
}

onMounted(() => {
  getList()
})
</script>
<template>
  <div>
    <div class="text-xl py-2">发表留言</div>

    <div class="mb-16">
      <SocialBoard @change="handleUpdateList" />
    </div>
    <div
      v-for="item in recordsModel"
      :key="item.id"
    >
      <SocialMessage
        :id="item.id"
        :user-name="item.userName"
        :content="item.content"
        :org-name="item.orgName"
        :title="item.title"
        :created-at="item.createdAt as Date"
        :reply="item.reply as ReplyVo[]"
      />
    </div>
    <div
      v-if="totalModel > 0"
      class="flex py-2 justify-center"
    >
      <UPagination
        v-model="pageModel.page"
        :page-count="pageModel.pageSize"
        :total="totalModel"
        @chick="handlePage"
      />
    </div>
  </div>
</template>
