import Taro from '@tarojs/taro'
import { userLogin } from '../../api/home'
import { userInfo } from '../../api/my'
import { addNickName, addMobile } from '../../api/weixin'
import Tools from '../../utils/tools'

// Actions
const UPDATE = 'GLOBAL_UPDATE'

// Reducer
const initState = {
  init: false,
  nicknameFlag: false,
  mobileFlag: false,
  userInfo: {
    token: '',
    headImageUrl: '',
    nickName: '',
    phone: '',
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

export const codeForOpenId = () => async (dispatch) => {
  Taro.login({
    success: async function (res) {
      if (res.code) {
        //发起网络请求
        try {
          const { data } = await userLogin({jsCode: res.code}) || {}
          const json = data.data || {}
          dispatch(globalUpdate({
            token: json.peaceToken,
            nicknameFlag: json.nicknameFlag,
            mobileFlag: json.mobileFlag,
          }))
          Taro.setStorageSync('Peace-X-Token', json.peaceToken)
          Taro.switchTab({
            url: '/pages/home/index'
          })
        } catch (err) {
          console.log(`请求接口userLogin失败：${err}`)
        }
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })
}


export const getUserInfo = () => async(dispatch) => {
  const { data } = await userInfo({}) || {}
  const { headImageUrl, nickName } = data.data
  dispatch(globalUpdate({
    headImageUrl,
    nickName,
  }))
}

export const addName = (params) => async(dispatch) => {
  await addNickName(params) || {}
  dispatch(globalUpdate({
    ...params,
    nicknameFlag: true,
  }))
}
export const addPhone = (params) => async (dispatch) => {
  await addMobile(params) || {}
  dispatch(globalUpdate({
    mobileFlag: true,
  }))
}
