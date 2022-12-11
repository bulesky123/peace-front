import { queryHouseDetail, queryRoomList } from '@/api/house'
// Actions
const UPDATE = 'LIST_UPDATE'

// Reducer
const initState = {
  init: false,
  emptyRoomCount: 0,
  liveRoomCount: 0,
  name: '',
  roomCount: 0,
  tenantCount: 0,
  total: 0,
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

export const getDetail = (houseId) => async (dispatch) => {
  const json = await queryHouseDetail({
    houseId
  }) || {}
  dispatch(globalUpdate({
    emptyRoomCount: json.emptyRoomCount,
    houseId: json.houseId,
    liveRoomCount: json.liveRoomCount,
    name: json.name,
    roomCount: json.roomCount,
    tenantCount: json.tenantCount
  }))
}

export const getList = (houseId) => async (dispatch) => {
  const arr = await queryRoomList({
    houseId,
    pageIndex: 1,
    pageSize: 10000
  }) || {}
  console.log(arr, '----')
  dispatch(globalUpdate({
    list: arr,
    // list: arr.data,
    // total: arr.total,
  }))
}
