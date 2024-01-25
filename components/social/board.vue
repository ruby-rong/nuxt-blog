<script setup lang="ts">
import type { FormError } from '#ui/types'
import type { MessageDto } from '~/types'
import ChildrenMsg from './childrenMsg.vue'

const state = reactive<MessageDto>({
  userName: '',
  orgName: undefined,
  title: undefined,
  content: undefined
})

const props = defineProps<{
  messageId?: number
}>()

const emit = defineEmits<{
  change: [id: number] // 具名元组语法
  update: [value: string]
}>()

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.userName) errors.push({ path: 'userName', message: 'Required' })
  if (!state.orgName) errors.push({ path: 'orgName', message: 'Required' })
  return errors
}

async function onSubmit() {
  // Do something with data
  let url: string
  if (!props.messageId) {
    url = '/api/message'
  } else {
    url = '/api/reply'
  }
  try {
    await $fetch(`${url}?messageId=${props.messageId}`, {
      method: 'post',
      body: state
    })
    state.userName = ''
    state.orgName = ''
    state.title = ''
    state.content = ''

    //通知父组件刷线列表
    emit('change', 1)
  } catch {
    console.log('失败')
  }
}
</script>

<template>
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

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>
