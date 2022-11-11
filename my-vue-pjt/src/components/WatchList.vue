<template>
    <div>
        <WatchListItem
          v-for="(todo,index) in todos"
          :key="index"
          :todo="todo"
        />
    </div>
</template>

<script>
import WatchListItem from '@/components/WatchListItem.vue';

export default {
    name:'WatchList',
    components:{
        WatchListItem
    },
    computed:{
        todos(){
            return this.$store.state.todos
        }
    }
}
</script>

<style>

</style>