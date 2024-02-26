<script setup lang="ts">
  import { routes } from '../../config/app.config'
  import { useAppStore } from '../../stores/appStore';
  const app = useAppStore()
</script>

<template>
  <VAppBar
    scroll-behavior="hide"
    elevation="1"
    :height="90"
    class="d-flex align-center"
  >
    <!-- logo -->
    <template #prepend>
      <NuxtLink to="/">
        <NuxtImg width="30" src="https://avatars.githubusercontent.com/u/26115581?v=4s" />
      </NuxtLink>
    </template>

    <!-- nav buttons -->
    <NavButton
      v-for="(route, index) in routes"
      :key="index"
      :route="route"
      class="ma-2 d-none d-lg-flex"
    />

    <template #append>

      <!-- divider -->
      <VDivider
        vertical
        inset
        length="75%"
        class="my-4 mx-2 d-none d-lg-flex"
      />

      <NavThemeSwitcher class="mx-2 d-none d-lg-flex" />
      
      <!-- open navigation drawer -->
      <VBtn
        class="d-flex d-lg-none"
        icon="mdi-menu"
        @click="app.drawer = true"
      />
    </template>
  </VAppBar>
</template>

<style lang="scss">
  @use 'vuetify/settings';

  .VAppBar {
    padding-left: 3rem !important;
    padding-right: 3rem !important;

    // on sm breakpoint set padding to 1rem
    @media #{map-get(settings.$display-breakpoints, 'sm-and-down')} {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }

    .v-toolbar__extension {
      height: fit-content !important;
      width: 100vw !important;
    }
  }
</style>