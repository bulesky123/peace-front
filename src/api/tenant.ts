import Http from '../utils/http'
import { HTTP_VERSION } from '../constants/status'

export const querySelHoldTenantPage = params => Http.post(`/tenant/${HTTP_VERSION}/selHoldTenantPage`, params)
export const querySelHousePage = params => Http.post(`/tenant/${HTTP_VERSION}/selHousePage`, params)
export const queryTarDetail = params => Http.post(`/user/${HTTP_VERSION}/tarDetail`, params)