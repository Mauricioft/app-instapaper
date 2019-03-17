<template>
  <v-toolbar app>
    <v-btn
      icon v-if="$route.name !== 'home'"
      @click="$router.go(-1)"
    >
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title>
      <span>{{title}}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
  export default {
    data: () => ({
      title: 'Instapaper'
    })
  }
</script>