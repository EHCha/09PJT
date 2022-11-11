<template>
  <div>
    <button @click="getMovieList">PICK</button>
    <h1>{{movieList}}</h1>
  </div>
</template>

<script>
export default {
    name:'RandomView',

    methods:{
      getMovieList(){
        this.$store.dispatch('getMovieList')
      }
    },
    computed:{
      movieList(){
        return this.$store.state.movieList.results[0]
      }
    },
}
</script>

<style>

</style>