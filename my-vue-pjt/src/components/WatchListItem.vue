<template>
  <div>
    <span 
      @click="updateMovieStatus" 
      :class="{ 'is-completed': movie.isCompleted }"
    >{{ movie.title }}</span>
    <button @click="deleteMovie">Delete</button>
  </div>
</template>

<script>
export default {
    name:'WatchListItem',
    props:{
        movie:Object
    },
    methods: {
        deleteMovie () {
        this.$store.dispatch('deleteMovie', this.movie)
        },
        updateMovieStatus(){
            this.$store.dispatch('updateMovieStatus', this.movie)
        },
    }   
}
</script>

<style>
    .is-completed {
    text-decoration: line-through;
    }
</style>