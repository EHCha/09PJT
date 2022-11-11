<template>
  <div>
    <button @click="getMovieList">PICK</button>
    <h1>rr</h1>
    
    <hr>
    <img :src="imgSrc2" alt="Movie">

  </div>
</template>

<script>
export default {
    name:'RandomView', 
    methods:{
      getMovieList(){
        this.$store.dispatch('getMovieList')
      },
      
    },
    computed:{
      movieList(){

        return this.$store.state.movieList
      },
      imgSrc(){
        return this.$store.getters.movieSrc
      },
      imgSrc2(){
        return `https://image.tmdb.org/t/p/original${this.imgSrc}`

      }
    },
    beforeMount() {
        this.$store.dispatch('getMovieList')
    },
}
</script>

<style>

</style>