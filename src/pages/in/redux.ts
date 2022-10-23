import Taro from '@tarojs/taro'
import { userLogin } from '../../api/home'
import { userInfo } from '../../api/my'

// Actions
const UPDATE = 'GLOBAL_UPDATE'

// Reducer
const initState = {
  init: false,
  userInfo: {
    token: '',
    headImageUrl: '',
    nickName: '',
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
          dispatch(globalUpdate({
            token: data.peaceToken
          }))
          Taro.setStorageSync('Peace-X-Token', data.peaceToken)
          Taro.redirectTo({
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
  const { headImageUrl, nickName } = await userInfo({}) || {}
  dispatch(globalUpdate({
    headImageUrl,
    nickName,
  }))
}
