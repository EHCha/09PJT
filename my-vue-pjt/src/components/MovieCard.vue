<template>
<div>
  <div v-if="movie">
    <img :src="imgSrc" style="width: 300px">
    <p>{{ movie.title }}</p>
    </div>    
  </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props:{
        movie: Object
    },
    computed: {
        // getMovie() {
        //     return this.$store.getters.getMovieJsonData
        // },
        imgSrc() {
            return 'https://image.tmdb.org/t/p/original/'+this.movie.poster_path
        },
        
    },

    methods: {
        MovieJson() {
            this.$store.dispatch('getMovieJson')
            // console.log(this.getMovie)
        }
    },
    
}
</script>

<style>

</style>