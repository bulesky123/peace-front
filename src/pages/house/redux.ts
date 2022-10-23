import { getHouse } from '../../api/house'

// Actions
const UPDATE = 'HOUSE_UPDATE'

// Reducer
const initState = {
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
export const houseUpdate = params => ({
  payload: params,
  type: UPDATE,
})

// "emptyRoomCount": 0,
//  "houseId": 0,
//  "name": "string",
//  "roomCount": 0
export const getHouseList = () => async(dispatch) => {
  const { data } = await getHouse({})
  dispatch(houseUpdate({
    list: data.data.length > 0 ?  data.data : [{
      emptyRoomCount: 6,
      houseId: 6,
      name: "红木林南1号楼",
      roomCount: 10
    }],
  }))
}
