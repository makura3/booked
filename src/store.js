import Vue from 'vue'
import Vuex from 'vuex'
import terminal from './store/modules/terminal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    terminal
  }
})

// import Vue from 'vue'
// import Vuex from 'vuex'

// import axios from 'axios'
// import { LOADING, GET_TERMINAL_DATA, RESERVE } from './store/types'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     loading: true,
//     smartphoneList: []
//   },
//   mutations: {
//     [LOADING](state, isLoading) {
//       state.loading = isLoading
//     },
//     [GET_TERMINAL_DATA](state, data) {
//       state.smartphoneList = data
//     },
//     [RESERVE](state, data) {
//       state.smartphoneList = data
//     }
//   },
//   actions: {
//     [GET_TERMINAL_DATA]({ commit }) {
//       axios
//         .get(
//           'https://booked-10dfc.firebaseio.com/terminal.json?auth=KDfgnbLHUq1tpKCBERHaDevK2SDPGdHkv5XUjj1s'
//         )
//         // axios.get('http://weather.livedoor.com/forecast/webservice/json/v1?city=400040') //クロスドメイン系の検証
//         .then(function(response) {
//           let list = []
//           Object.entries(response.data).forEach(([name, datas]) => {
//             let data = {
//               name: name,
//               type: datas.type,
//               state: datas.state
//             }
//             list.push(data)
//           })
//           commit('GET_TERMINAL_DATA', list)
//         })
//         .catch(function(error) {
//           console.log(error)
//         })
//         .then(function() {})
//     },
//     [RESERVE]() {
//       axios.get('').then(function(response) {
//         console.log(response)
//       })
//     }
//   },
//   getters: {
//     getSPList: state => {
//       return state.smartphoneList
//     }
//   }
// })
