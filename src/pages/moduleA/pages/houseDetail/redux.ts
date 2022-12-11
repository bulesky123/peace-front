import { queryHouseDetail } from '@/api/house'
// Actions
const UPDATE = 'LIST_UPDATE'

// Reducer
const initState = {
  init: false,
  list: [],
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

export const getList = () => async (dispatch) => {
  const { list } = await queryHouseDetail({}) || {}
  dispatch(globalUpdate({
    list: list || [1, 2]
  }))
}
