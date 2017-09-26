import * as types from './mutation-types'

export default {
  setTestData({commit}, testData) {
      commit(types.TEST_DATA, testData)
   }
}
