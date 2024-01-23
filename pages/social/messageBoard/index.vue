<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { MessageApi } from '~/api'
import type { MessageDto } from '~/types'

const state = reactive<MessageDto>({
  userName: '',
  orgName: undefined,
  title: undefined,
  content: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.userName) errors.push({ path: 'userName', message: 'Required' })
  if (!state.orgName) errors.push({ path: 'orgName', message: 'Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
  const data = MessageApi.create(state)
  console.log(data, 'data')
}
</script>
<template>
  <div>
    <div class="text-xl py-2">发表留言</div>
    <client-only>
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
    </client-only>
  </div>
</template>
