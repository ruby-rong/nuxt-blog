<script setup lang="ts">
import { links } from '~/constants'

const ui = {
  width: 'w-28'
}
</script>

<template>
  <div class="space-x-5 hidden sm:block">
    <UDropdown
      :ui="ui"
      v-for="(item, index) in links"
      :key="index"
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
          ></Icon>
          <span>{{ item.label }}</span>
        </div>
      </NuxtLink>
    </UDropdown>
  </div>
</template>
