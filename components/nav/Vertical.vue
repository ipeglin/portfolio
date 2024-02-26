<script setup lang="ts">
  import { routes } from '~/config/app.config'
  import { useAppStore } from '../../stores/appStore'
  import { useDisplay } from 'vuetify'

  const app = useAppStore()
  const { mobile } = useDisplay()

  // close navigation drawer when leaving mobile breakpiont
  watch(mobile, () => (app.drawer = false))
</script>

<template>
  <VNavigationDrawer
    location="right"
    temporary
    :elevation="5"
    class="pa-4 d-flex d-lg-none"
    :model-value="app.drawer"
    @update:model-value="(value) => (app.drawer = value)"
  >
    <!-- close vertical nav -->
    <template v-if="app.drawer" #prepend>
      <VBtn
        icon="mdi-window-close"
        size="large"
        variant="text"
        @click="app.drawer = false"
      ></VBtn>
    </template>

    <div
      v-if="app.drawer"
      class="d-flex flex-column justify-end mt-4"
      style="gap: 1rem"
    >
      <NavButton
        v-for="(route, index) in routes"
        :key="index"
        size="large"
        :route="route"
      />
    </div>

      <!-- divider -->
      <VDivider class="my-4" />

      <NavThemeSwitcher />
  </VNavigationDrawer>
</template>

<style lang="scss">
  @use 'vuetify/settings';

  .v-navigation-drawer--active {
    width: 400px !important;

    @media #{map-get(settings.$display-breakpoints, "xs")} {
      width: 100vw !important;
    }
  }

  .v-navigation-drawer {
    transition: 0.3s !important;
  }
</style>