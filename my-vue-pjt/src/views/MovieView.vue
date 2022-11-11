<template>
  <div>
    <div
    v-for="(movie, index) in totalMovie"
    :key="index">

    <MovieCard :movie="movie"/>
    
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';

export default {
  name:'MovieView',
  components: {
    MovieCard,
  },

  computed: {
    totalMovie() {
      console.log(this.$store.state.MovieJsonData)
      return this.$store.state.MovieJsonData
    },
    // getMovie() {
    //   return this.$store.getters.getMovieJsonData
    // },
  },
  beforeMount() {
    this.$store.dispatch('getMovieJson')
  }
}
</script>

<style>

</style>
