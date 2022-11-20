import Http from '../utils/http'
import { HTTP_VERSION } from '../constants/status'

export const userInfo = params => Http.post(`/user/${HTTP_VERSION}/info`, params)

export const addManager = params => Http.post(`/user/${HTTP_VERSION}/commonManager/add`, params)
export const delManager = params => Http.post(`/user/${HTTP_VERSION}/commonManager/del`, params)
export const updateManager = params => Http.post(`/user/${HTTP_VERSION}/commonManager/update`, params)
export const queryManager = params => Http.post(`/user/${HTTP_VERSION}/commonManager/list`, params)