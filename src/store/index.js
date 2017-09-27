import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import { testData } from './defaultValue'

Vue.use(Vuex);

const state = {
  testData
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
