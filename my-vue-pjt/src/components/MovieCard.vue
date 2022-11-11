<template>
<div class="card justify-content-center">
  <div v-if="movie" class="cards arrange2">
    <br>
    <img :src="imgSrc" style="width: 300px">
    <p></p>
    <p class="fonts">{{ movie.title }}</p>
    <p class="str fonts arrange">{{ movie.overview }}</p>
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
.str{text-overflow: ellipsis;

white-space: nowrap;

overflow: hidden}

.cards {
  width: 600px;
}

.fonts {
    font-weight: bold;
}

.arrange {
    padding-left: 40px;
}
.arrange2 {
    padding-left: 100px;
}
</style>