<template>
  <div>
    <WatchListForm/>
    <WatchList/>
  </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm.vue'
import WatchList from '@/components/WatchListItem.vue'

export default {
  name: 'WatchListView',
  components:{
    WatchListForm,
    WatchList,
  },
  
}
</script>

<style>

</style>