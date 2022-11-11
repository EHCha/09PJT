<template>
  <div>
    <button @click="randomJson">PICK</button>
    <br>
    <div v-if="movie">
      <img :src="randomQ">
      <p>{{movie.title}}</p>
    </div>
      
    <hr>
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