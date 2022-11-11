<template>
  <div id="app">
    <nav>
      <router-link :to="{name: 'movie'}">Movie</router-link> |
      <router-link :to="{name: 'random'}">Random</router-link> |
      <router-link :to="{name: 'watchlist'}">WatchList</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
// API_KEY = 54f36fb75007c2e17a09cf9651dcdae2
// API_URL = https://api.themoviedb.org/3/movie/popular?api_key=

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
