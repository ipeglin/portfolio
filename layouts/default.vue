<template>
  <div class="main">
    <!-- navigation menu -->
    <NavVertical />
    <NavHorisontal />

    <!-- main content -->
    <VMain style="min-height: 100vh">
      <slot />
    </VMain>

  </div>
</template>

<style scoped lang="scss">
  .main {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>