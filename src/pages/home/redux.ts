// Actions
const UPDATE = 'HOME_UPDATE'

// Reducer
const initState = {
  init: false,
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
export const homeUpdate = params => ({
  payload: params,
  type: UPDATE,
})

