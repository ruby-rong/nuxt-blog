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
