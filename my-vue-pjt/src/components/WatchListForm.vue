<template>
    <div>
        <input type="text"
        v-model.trim="todoTitle"
        @keyup.enter="createTodo">
    </div>
  </template>
  
  <script>
  export default {
    name: 'WatchListForm',
    data(){
        return {
            todoTitle:null,
        }
    },
    methods:{
        createTodo(){
            
            this.$store.dispatch('createTodo', this.todoTitle)
            this.todoTitle= null
        }
    }
  }
  </script>
  
  <style>
  
  </style>