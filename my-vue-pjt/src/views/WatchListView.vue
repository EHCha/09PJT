<template>
  <div>
    <h1>보고싶은 영화</h1>
    
    <WatchListForm/>
    <WatchListItem
          v-for="(movie,index) in movies"
          :key="index"
          :movie="movie"
        />
  </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm.vue'
import WatchListItem from '@/components/WatchListItem.vue'

export default {
  name: 'WatchListView',
  components:{
    WatchListForm,
    WatchListItem,
  },
  computed:{
    movies(){
      return this.$store.state.movies
    }
  }
  
}
</script>

<style>

</style>