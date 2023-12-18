<template>
  <div>
    <Header class="h-16" />
    <main class="min-h-[calc(100vh-128px)]">
      <Card class="w-[1000px] m-auto">
        <slot />
      </Card>
    </main>
    <Footer class="h-16" />
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 text-black dark:bg-gray-900 dark:text-white;
}
</style>
