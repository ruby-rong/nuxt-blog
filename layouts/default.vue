<template>
  <div>
    <Header class="h-16" />
    <main class="min-h-[calc(100vh-128px)]">
      <Content />
      <slot />
    </main>
    <Footer class="h-16" />
  </div>
</template>
