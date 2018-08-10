import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import { LOADING, HOGE } from './store/types'


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
    // axios.get('http://weather.livedoor.com/forecast/webservice/json/v1?city=400040') //クロスドメイン系の検証
    .then(function (response) {
      let list = []
      Object.entries(response.data).forEach(([name,datas]) => {
        let data = {
          name: name,
          type: datas.type,
          state: datas.state
        }
        list.push(data)
      });
      commit('HOGE', list)
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
