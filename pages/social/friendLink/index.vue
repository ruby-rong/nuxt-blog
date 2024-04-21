<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import type { RecordsVo, BasePageModel, FriendsDto } from '~/types'

const state = reactive<FriendsDto>({
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
const recordsModel = ref<FriendsDto[]>([])

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.nickName) errors.push({ path: 'nickName', message: 'Required' })
  if (!state.siteTitle) errors.push({ path: 'siteTitle', message: 'Required' })
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.avatar) errors.push({ path: 'avatar', message: 'Required' })
  if (!state.website) errors.push({ path: 'website', message: 'Required' })
  return errors
}

// async function onSubmit(event: FormSubmitEvent<any>) {
//   // Do something with data
//   console.log(event.data)
//   addFriends()
// }

async function getList() {
  const data = await $fetch('/api/friends', {
    method: 'get',
    query: pageModel
  })
  console.log(data, 'data-data', Array.isArray(data.records))
  recordsModel.value = data.records
}

async function addFriends() {
  console.log(state, 'state-state')
  const { prismaData } = await $fetch('/api/friends', {
    method: 'post',
    body: state
  })
  console.log(prismaData, 'addFriends')
  state.avatar = ''
  state.email = ''
  state.nickName = ''
  state.siteTitle = ''
  state.website = ''
  state.description = ''
}

const submit = async () => {
  await addFriends()
  await getList()
}

onMounted(() => {
  getList()
})
</script>
<template>
  <div>
    <div class="space-y-4 mb-8">
      <div class="text-xl font-bold mt-8">朋友们</div>
      <div class="text-base text-slate-300 dark:text-white">海内存知己 天涯若比邻</div>
    </div>
    <div>
      <div class="py-2">
        <!-- <span class="text-green-600 font-bold pr-4">|</span> -->
        <span>我的朋友</span>
      </div>
      <div
        class="mb-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap justify-center sm:justify-between items-center"
      >
        <div
          v-for="item in recordsModel"
          :key="item.id"
        />

        <SocialFriend
          v-for="item in recordsModel"
          :key="item.id"
          :data="item"
        />
      </div>
    </div>

    <div>
      <div class="py-2">
        <!-- <span class="w-[4px] mr-2 h-[2px] border bg-green-400" /> -->
        <span>我想和你交朋友</span>
      </div>
      <UForm
        :on-submit="submit"
        :validate="validate"
        :state="state"
        class="space-y-4"
      >
        <!-- @submit="onSubmit" -->
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
            placeholder="邮箱"
          />
        </UFormGroup>

        <UFormGroup name="description">
          <!-- <UTextarea
            v-model="state.description"
            placeholder="描述"
            type="textarea"
          /> -->
        </UFormGroup>

        <UButton
          type="submit"
          @click="submit"
        >
          Submit
        </UButton>
      </UForm>
    </div>
  </div>
</template>
