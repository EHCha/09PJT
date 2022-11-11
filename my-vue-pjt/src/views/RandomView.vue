<template>
  <div>
    <button @click="randomJson" class="btn btn-success" style="width:300px;">PICK</button>
    <div v-if="movie">
      <img :src="randomQ" style="width:300px;">
      <h2>{{movie.title}}</h2>
    </div>
  </div>
</template>

<script>

export default {
    name:'RandomView', 
    computed:{
      movie(){
        return this.$store.getters.getRandomMovieData
      },
      randomQ(){
        return 'https://image.tmdb.org/t/p/original/'+this.movie.poster_path
      }

    },
    methods:{
      randomJson(){
        this.$store.dispatch('getRandomJson')
      }
    }
}
</script>

<style>
  
</style>