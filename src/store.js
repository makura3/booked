import Vue from 'vue'
import Vuex from 'vuex'
// import firebase from 'firebase'
// import config from './util/firebaseConfig'

import axios from 'axios'
import { LOADING, HOGE } from './store/types'

// firebase.initializeApp(config);


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    smartphoneList: []
  },
  mutations: {
    [LOADING](state, isLoading) {
      state.loading = isLoading
    },
    [HOGE](state, data) {
      state.smartphoneList = data
    }
  },
  actions: {
    [HOGE]({ commit }){
    axios.get('')
    .then(function (response) {
      commit('HOGE', response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    })
    }
  },
  getters : {
    getSPList: state => {
      return state.smartphoneList
    }
  }
})
