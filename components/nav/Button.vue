<script setup lang="ts">
  import type { Route } from '@/models/Nav'
  import { useAppStore } from '../../stores/appStore';
  const app = useAppStore()

  defineProps({
    route: {
      type: Object as PropType<Route>,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  })

  const currentRouteName = computed(() => {
    const routeNames = useRoute().fullPath.split('/')
    const name = routeNames[1]
    return name === '' ? 'index' : name ?? 'index'
  })
</script>

<template>
  <VBtn
    color="black"
    variant="text"
    :rounded="!route.icon ? 'lg' : undefined"
    :active="active && currentRouteName === route.name"
    :icon="route.icon"
    @click="
      () => {
        app.drawer = false
        navigateTo(route.route)
      }
    "
  >
    <template v-if="!route.icon" #default>
      {{ route.name }}
    </template>
  </VBtn>
</template>