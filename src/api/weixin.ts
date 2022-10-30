import Http from '../utils/http'
import { HTTP_VERSION } from '../constants/status'

export const addNickName = params => Http.post(`/wechat/${HTTP_VERSION}/addNickName`, params)
export const addMobile= params => Http.post(`/wechat/${HTTP_VERSION}/bindMobile`, params)