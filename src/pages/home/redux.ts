// Actions
const UPDATE = 'GLOBAL_UPDATE'

// Reducer
const initState = {
  init: false,
  routes: [], // 显示的路由
  buttons: {},
  userInfo: {
    name: '',
    id: '', // 100001
  },
}

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

// Action Creators
export const globalUpdate = params => ({
  payload: params,
  type: UPDATE,
})
