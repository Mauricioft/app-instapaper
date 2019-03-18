<template>
  <pm-layout>
    <v-flex>
      <div id="spinner_container">
        <v-progress-circular
          v-if="loading"
          v-bind:size="40"
          indeterminate color="pink"
          class="spinner"
        />
      </div>

      <img
        :src="this.dogUrl"
      />

      <v-container
        fluid
        style="min-height: 0"
        grid-list-lg
      >
        <v-layout
          row
          wrap
        >
          <v-flex
            xs12
          >
            <v-text-field
              v-model="title"
              name="title"
              label="Describe me"
              id="title"
            />
            <v-text-field
              v-model="author"
              name="author"
              label="Author"
              hint="your name"
              id="author"
            />
            <v-btn
              block
              color="primary"
              @click="add()"
            >
              POST A DOG
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </pm-layout>
</template>

<script>
  import PmLayout from '../components/material/Layout'
  import postDog from '../mixins/postDogMixin'
  import DogSrvc from '../services/dogSrvc'

  export default {
    components: {
      PmLayout
    },
    data: () => ({
      dogUrl: null,
      title: '',
      author: '',
      loading: true,
    }),
    mounted(){
      this.init()
    },
    methods: {
      async init(){
        try{
          let suma = 1+1
          alert(suma)
          const response = await DogSrvc.list()
          if(response.status){
            this.dogUrl = response.message
            this.loading = false
          }
        }catch(error){
          this.loading = false;
          console.log(error)
        }
      },
      add(){
        console.log('add', this.postDog)
        // postDog.add(this.dogUrl, this.title, this.author)
      }
    },
  }
</script>

<style scoped>
  img {
    max-width: 100%;
    height: auto;
    width: auto\9;
    /* ie8 */
  }

  #spinner_container{
    text-align: center;
  }

  .spinner{
    margin:auto;
    margin: 4rem;
  }
</style>