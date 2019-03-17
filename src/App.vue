<template>
  <v-app>
    <pm-toolbar />
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
