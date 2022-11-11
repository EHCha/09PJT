<template>
  <div>
    <span 
      @click="updateTodoStatus" 
      :class="{ 'is-completed': todo.isCompleted }"
    >{{ todo.title }}</span>
    <button @click="deleteTodo">Delete</button>
  </div>
</template>

<script>
export default {
    name:'WatchListItem',
    computed:{
        todos(){
            return this.$store.state.todos
        }
    },
    props:{
        todo:Object
    },
    methods: {
    deleteTodo () {
      this.$store.dispatch('deleteTodo', this.todo)
    },
}   
}
</script>

<style>

</style>