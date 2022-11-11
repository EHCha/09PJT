import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'
const API_KEY = '54f36fb75007c2e17a09cf9651dcdae2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    MovieJsonData: null,
    randomMovie: null,
  },
  getters: {
    getMovieJsonData(state) {
      return state.MovieJsonData
    },
    getRandomMovieData(state) {
      return state.randomMovie
    }
  },
  mutations: {
    GET_MOVIE_JSON_DATA(state, results) {
      state.MovieJsonData = results
    },
    GET_RANDOM_MOVIE_DATA(state, result) {
      state.randomMovie = result
    }
  },
  actions: {
    getMovieJson(context) {
      const url = 'https://api.themoviedb.org/3/movie/popular'
      const params= {
        api_key: API_KEY,
        language: 'ko-KR',
        region: 'KR',
        adult: 'true',
      }
      axios.get(url, { params })
      .then((response) => {
        console.log(response.data)
        context.commit('GET_MOVIE_JSON_DATA', response.data.results)
      })
    },
    getRandomJson(context) {
      const url = 'https://api.themoviedb.org/3/movie/' + _.random(1, 300000)
      const params= {
        api_key: API_KEY,
        language: 'ko-KR',
      }
      axios.get(url, { params })
      .then((response) => {
        context.commit('GET_RANDOM_MOVIE_DATA', response.data)
      })
      .catch((error) => {
        error
        context.dispatch('getRandomJson')
      })
    }
  },
  modules: {
  }
})