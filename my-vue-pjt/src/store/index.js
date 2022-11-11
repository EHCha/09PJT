import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieList: [],
  },
  getters: {
    movieList(state){
      return state.movieList.length
    }
  },
  mutations: {
    GET_MOVIE_LIST(state, movie){
      state.movieList = movie
    }
  },
  actions: {
    getMovieList(context){
      console.log('a')
      const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key='
      const API_KEY = '54f36fb75007c2e17a09cf9651dcdae2'
      axios({
        method:'get',
        url: API_URL + API_KEY
      })
      .then(response=>{
        context.commit('GET_MOVIE_LIST', response.data)
        console.log(response.data)
      })
      .catch(error =>{
        console.log(error)
      })
    }
  },
  modules: {
  }
})
