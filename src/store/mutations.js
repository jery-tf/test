import * as types from './mutation-types'

export default {
   [types.TEST_DATA] (state, testData) {
      state.testData = testData
   }
};
