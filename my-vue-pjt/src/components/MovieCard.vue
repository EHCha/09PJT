<template>
  <div>
    <button @click="getMovie">영화</button>
    <img :src="imgSrc" alt="">
    
  </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props:{
        movieList: Array,
    },
    // data() {
    //     return {
    //         imgUrl: this.$store.movieList,
    //     }
    // },
    computed: {
        imgSrc() {
           return this.$store.getters.movieList
        },
        getMovie() {
            return this.$store.dispatch('getMovieList')
        }
    },
}
</script>

<style>

</style>