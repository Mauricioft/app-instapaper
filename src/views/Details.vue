<template>
  <pm-layout>
    <v-flex>
      <v-img
        :src="dog.url"
      />
    </v-flex>
    <v-flex>
      <h1>{{ dog.comment }}</h1>
      <p class="subtitle">{{ dog.info }}</p>
    </v-flex>
  </pm-layout>
</template>

<script>
  import PmLayout from '../components/material/Layout'
  export default {
    components: {
      PmLayout
    },
    props: {
      dog: {
        type: Object,
        required: true
      }
    },
  }
</script>