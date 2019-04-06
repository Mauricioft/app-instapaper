<template>
  <v-app>
    <pm-toolbar />
    <v-btn
      color="red"
      dark
      fixed
      bottom
      right
      fab
      v-if="$route.name == 'post'"
      @click="$router.push({ name: 'camera' })"
    >
      <v-icon>camera_alt</v-icon>
    </v-btn>
    <pm-view />
  </v-app>
</template>

<script>
  import PmView from './components/core/View'
  import PmToolbar from './components/core/Toolbar'

  export default {
    name: 'App',
    components: {
      PmToolbar,
      PmView
    },
  }
</script>
