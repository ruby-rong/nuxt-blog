<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import type { RecordsVo, BasePageModel } from '~/types'

const state = reactive({
  nickName: '',
  siteTitle: '',
  website: '',
  avatar: '',
  email: '',
  description: ''
})
const pageModel = reactive<BasePageModel>({
  page: 1,
  pageSize: 10
})
const totalModel = ref(0)
const recordsModel = ref<RecordsVo[]>([])

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.website) errors.push({ path: 'website', message: 'Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
  addFriends()
}

async function getList() {
  const data = await $fetch('/api/friends', {
    method: 'get',
    query: pageModel
  })
  console.log(data, 'data-data')

  // const { page, pageSize, total, records } = await $fetch('/api/friends', {
  //   method: 'get',
  //   query: pageModel
  // })
  // console.log(page, pageSize)
  // totalModel.value = total
  // recordsModel.value = records as unknown as RecordsVo[]
}

async function addFriends() {
  const data = await $fetch('/api/friends', {
    method: 'post',
    body: state
  })
  console.log(data, 'addFriends')
}
onMounted(() => {
  getList()
})
</script>
<template>
  <div>
    <div class="py-2 text-xl">友情连接</div>
    <SocialFriend />
    <div class="text-xl py-2">我想和你交朋友</div>
    <UForm
      :validate="validate"
      :state="state"
      class="space-y-4"
      @submit="onSubmit"
    >
      <UFormGroup name="nickName">
        <UInput
          v-model="state.nickName"
          placeholder="昵称"
        />
      </UFormGroup>

      <UFormGroup name="siteTitle">
        <UInput
          v-model="state.siteTitle"
          placeholder="站点标题"
          icon="i-heroicons-envelope"
        />
      </UFormGroup>

      <UFormGroup name="website">
        <UInput
          v-model="state.website"
          placeholder="网站链接"
        />
      </UFormGroup>

      <UFormGroup name="avatar">
        <UInput
          v-model="state.avatar"
          placeholder="头像链接"
        />
      </UFormGroup>

      <UFormGroup name="email">
        <UInput
          v-model="state.email"
          placeholder="头像链接"
        />
      </UFormGroup>

      <UFormGroup name="description">
        <UTextarea
          v-model="state.description"
          placeholder="描述"
        />
      </UFormGroup>

      <UButton type="submit"> Submit </UButton>
    </UForm>
  </div>
</template>
