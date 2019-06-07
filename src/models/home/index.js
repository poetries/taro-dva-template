import {queryMock} from '@services/api';

export default {
  namespace: 'home',
  state: {
    data: [],
  },

  effects: {
    *query({ payload }, { call,put}) {
      const data = yield call(queryMock,payload);

      yield put({
        type: 'save',
        payload: data && Array.isArray(data.data)?data.data : []
      })
    }
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        data: payload
       }
    }
  }
}
