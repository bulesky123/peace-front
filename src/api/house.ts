import Http from '../utils/http'
import { HTTP_VERSION } from '../constants/status'

export const getHouse = params => Http.post(`/house/${HTTP_VERSION}/list`, params)
export const addHouse = params => Http.post(`/house/${HTTP_VERSION}/add`, params)
export const delHouse = params => Http.post(`/house/${HTTP_VERSION}/del`, params)
export const queryHouseDetail = params => Http.post(`/house/${HTTP_VERSION}/detail`, params)
export const queryHouseList = params => Http.post(`/house/${HTTP_VERSION}/list`, params)
export const queryRoomList = params => Http.post(`/room/${HTTP_VERSION}/list`, params)
export const setHouseCost = params => Http.post(`/house/${HTTP_VERSION}/setHouseCost`, params)
export const addRoom = params => Http.post(`/room/${HTTP_VERSION}/add`, params)
export const delRoom = params => Http.post(`/room/${HTTP_VERSION}/del`, params)
