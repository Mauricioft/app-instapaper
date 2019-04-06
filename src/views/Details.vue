<template>
  <pm-layout
    v-if="!!dog"
  >
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
  import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex'

  import PmLayout from '../components/material/Layout'

  export default {
    components: {
      PmLayout
    },
    props: {
      dogProp: {
        type: Object
      }
    },
    computed: {
      ...mapState(['dog'])
    },
    beforeMount(){
      if(!!this.dogProp){
        // this.dog = this.dogProp
        this.setDog(this.dogProp)
      }else{
        const id = this.$route.params.id
        if(!!id){
          this.init(id)
        }else{
          this.$router.go(-1)
        }
      }
    },
    methods: {
      ...mapMutations(['setDog']),
      ...mapActions(['findDog']),
      init(id){
        this.findDog({ id,})
          .then((data) => {
            console.log('findDog', data)
          })
          .catch((error) => {
            console.log(error)
          })
      },
    }
  }
</script>