<template>
  <div>
    <div class="container" style="width:75%" >

      <h1>보고싶은 영화</h1>
      <WatchListForm/>
    </div>

    <WatchListItem
          v-for="(movie,index) in movies"
          :key="index"
          :movie="movie"
          class="video-list-item"
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
.video-list-item:hover{
  cursor: pointer;
  background-color: #eee;
  /* width: 60%; */
}
</style>