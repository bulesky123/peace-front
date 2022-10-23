import Http from '../utils/http'
import { HTTP_VERSION } from '../constants/status'

export const userLogin = params => Http.post(`/wechat/${HTTP_VERSION}/userLogin`, params)