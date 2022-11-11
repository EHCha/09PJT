<template>
  <div>
    <button @click="getRandomJson">PICK</button>

    <img :src="this.poster_url" alt="Movie">
    {{this.poster_url}}
    <hr>
  </div>
</template>

<script>


export default {
    name:'RandomView', 
    
}
</script>

<style>

</style>