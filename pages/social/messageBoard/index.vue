<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import type { MessageDto, BasePageModel } from '~/types'

const state = reactive<MessageDto>({
  userName: '',
  orgName: undefined,
  title: undefined,
  content: undefined
})

const pageModel = reactive<BasePageModel>({
  page: 1,
  pageSize: 10
})
const totalModel = ref(0)

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.userName) errors.push({ path: 'userName', message: 'Required' })
  if (!state.orgName) errors.push({ path: 'orgName', message: 'Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  const data = await $fetch('/api/message', {
    method: 'post',
    body: state
  })
  state.userName = ''
  state.orgName = ''
  state.title = ''
  state.content = ''
  console.log(data, 'data')
}

async function getList() {
  // Do something with data
  // const data = await $fetch('/api/message', {
  //   method: 'get',
  //   query: pageModel
  // })
  //const { records, total } = data
  // totalModel.value = total
  // console.log(records, 'getList')
}

onMounted(() => {
  getList()
})
</script>
<template>
  <div>
    <div class="text-xl py-2">发表留言</div>

    <div>
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <div class="flex justify-between">
          <UFormGroup
            label="名字"
            class="w-52"
          >
            <UInput v-model="state.userName" />
          </UFormGroup>

          <UFormGroup
            label="地区"
            class="w-52"
          >
            <UInput v-model="state.orgName" />
          </UFormGroup>

          <UFormGroup
            label="标题"
            class="w-52"
          >
            <UInput v-model="state.title" />
          </UFormGroup>
        </div>

        <UTextarea
          v-model="state.content"
          placeholder="请输入内容"
          type="textarea"
        />

        <UButton type="submit"> Submit </UButton>
      </UForm>
    </div>
    <div>
      <SocialMessage
        :id="1"
        user-name="userName"
        content="content"
        org-name="orgName"
        title="title"
        :created-at="new Date()"
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
      />
    </div>
  </div>
</template>
