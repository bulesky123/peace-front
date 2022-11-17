import Http from '../utils/http'
import { HTTP_VERSION } from '../constants/status'

export const getHouse = params => Http.post(`/house/${HTTP_VERSION}/list`, params)
export const addHouse = params => Http.post(`/house/${HTTP_VERSION}/add`, params)
export const delHouse = params => Http.post(`/house/${HTTP_VERSION}/del`, params)
export const queryHouseDetail = params => Http.post(`/house/${HTTP_VERSION}/detail`, params)