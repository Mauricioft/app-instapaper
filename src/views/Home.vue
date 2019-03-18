<template>
  <pm-layout>
    <v-btn
      router
      to="post"
      color="red"
      dark
      fixed
      bottom
      right
      fab
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-flex
      v-for="(dog, key) in dogs"
      :key="dog.id"
      xs12
      md6
      xl3 
      pa-2
    >
      <v-card
        @click="$router.push({
          name: 'details',
          params: {
            id: dog.id,
            dog: dogs[key]
          }
        })"
      >
        <v-img
          height="170"
          :src="dog.url"
          aspect-ratio="2.75"
        />
        <v-card-title
          primary-title
          style="padding-top:13px"
        >
          <div>
            <h3 class="headline">{{ dog.comment }}</h3>
            <div>{{ dog.info }}</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </pm-layout>
</template>

<script>
  import PmLayout from '../components/material/Layout'
  import {
    dogList
  } from '../mixins/postDogMixin'

  export default {
    components: {
      PmLayout
    },
    data: () => ({
      dogs: []
    }),
    mounted() {
      this.list()
    },
    methods: {
      list(){
        /*
        console.log(dogList)
        debugger
        */
        dogList().then((data) => {
          console.log('Home@list', data)
        })
        .catch((error) => {
          console.log(error);
        })
      }
    }
  }
</script>
