<script setup lang="ts">
import { links } from '~/constants'

const isOpen = ref(false)
const ui = {
  icon: {
    base: 'w-0'
  }
}
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
          <div
            class="flex gap-4 justify-center mt-10 flex-col items-center border"
          >
            <div
              v-for="(item, index) in links"
              :key="index"
            >
              <NuxtLink
                :to="item.url"
                class="flex justify-center items-center space-x-1"
              >
                <Icon :name="item.icon" />
                <span class="text-xl">{{ item.label }}</span>
              </NuxtLink>

              <UVerticalNavigation
                :ui="ui"
                :links="item.children ? item.children[0] : []"
              >
                <template #default="{ link }">
                  <div class="flex justify-center items-center">
                    <Icon :name="link.icon" />
                    <span class="hover:text-[#333] hover:dark:text-[#fff]">{{
                      link.label
                    }}</span>
                  </div>
                </template>
              </UVerticalNavigation>
            </div>
          </div>
        </div>
      </USlideover>
    </div>
  </div>
</template>
