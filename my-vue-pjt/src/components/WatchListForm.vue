<template>
    <div style="background:">
        <input type="text"
        v-model.trim="movieTitle"
        @keyup.enter="createMovie">
    </div>
  </template>
  
  <script>
  export default {
    name: 'WatchListForm',
    data(){
        return {
            movieTitle:null,
        }
    },
    methods:{
        createMovie(){
            
            this.$store.dispatch('createMovie', this.movieTitle)
            this.movieTitle= null
        }
    }
  }
  </script>
  
  <style>
  
  </style>