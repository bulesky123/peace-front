import { querySelHoldTenantPage, querySelHousePage, queryTarDetail } from '@/api/tenant'
// Actions
const UPDATE = 'LIST_UPDATE'

// Reducer
const initState = {
  init: false,
  currentList: [],
  roomTenantList: [],
  historyList: [],
  historyTenantNum: 0,
  holdTenantNum: 0,
  houseNum: 0,
  tabs: [],
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
export const getTabNum = () => async (dispatch) => {
  const { data } = await queryTarDetail({})
  console.log(data, '---data---')
  const {
    historyTenantNum,
    holdTenantNum,
    houseNum,
  } = data || {}
  dispatch(globalUpdate({
    historyTenantNum,
    holdTenantNum,
    houseNum,
    tabs: [
      { key: 'currentList', lable: `现有租客(${holdTenantNum})` },
      { key: 'roomTenantList', lable: `按房屋(${houseNum})` },
      { key: 'historyList', lable: `历史租客(${historyTenantNum})` },
    ]
  }))
}
export const getList = (type, params) => async (dispatch) => {
  const mapApi = {
    currentList: async () => await querySelHoldTenantPage({
      ...params,
      pageIndex: 1,
      pageSize: 10000
    }),
    roomTenantList: async () => await querySelHousePage({
      ...params,
      pageIndex: 1,
      pageSize: 10000
    }),
    historyList: async () => []
  }
  const { data } = await mapApi[type]()
  const json = data?.data
  dispatch(globalUpdate({
    [type]: json?.data || [{ name: '红木林南区-1号楼102', tenantName: '张悦' }]
  }))
}
