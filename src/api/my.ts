import Http from '../utils/http'
import { HTTP_VERSION } from '../constants/status'

export const userInfo = params => Http.post(`/user/${HTTP_VERSION}/info`, params)