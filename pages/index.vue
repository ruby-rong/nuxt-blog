<script setup lang="ts">
import { userCounter } from '~/composables/counter'
import { useExample } from '~/stores/test'
const example = useExample()
const handleClick = () => {
  console.log(1111)
  example.handleUser()
  console.log(example.user)
}
const colorMode = useColorMode()

const counter = userCounter()
const handleMessage = () => {
  console.log('This is a normal message')
}
</script>
<template>
  <div>
    业务组件内容: {{ counter }}
    <button @click="counter--">－</button>
    <button @click="counter++">＋</button>
  </div>

  <div class="bg-pink-500 dark:bg-red-200">index</div>

  <NuxtLink to="http://localhost:3000/me/about">友联</NuxtLink>
  <NuxtLink to="https://www.baidu.com/"> to baidu </NuxtLink>
  <div>{{ example.user }}</div>
  <button @click="example.user++">－</button>
  <button @click="example.test">test</button>

  <button
    class="bg-red-200"
    @click="handleClick"
  >
    ++
  </button>

  <div>
    <!-- <h1>Color mode: {{ $colorMode.value }}</h1> -->
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
  </div>
  <Header />
  <div class="space-x-2">
    <Icon
      size="40"
      name="🚀"
    />
    <Icon name="👋" />

    <Icon
      name="uil:github"
      color="black"
    />

    <Icon name="icon-park-solid:alignment-left-top"></Icon>
    <br />
  </div>
  <Button label="Primary" />
  <Button
    label="Secondary"
    severity="secondary"
  />
  <Button
    label="Success"
    severity="success"
  />
  <Button
    label="Info"
    severity="info"
  />
  <Button
    label="Warning"
    severity="warning"
  />
  <Button
    label="Help"
    severity="help"
  />
  <Button
    label="Danger"
    severity="danger"
  />
  <Card>
    <template #title> Simple Card </template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </p>
    </template>
  </Card>
  <a-button @click="handleMessage"> button </a-button>
  <slot />
</template>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
