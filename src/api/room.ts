import Http from '../utils/http'
import { HTTP_VERSION } from '../constants/status'

// 房间添加
export const addRoom = params => Http.post(`/room/${HTTP_VERSION}/add`, params)
// 房间删除
export const delRoom = params => Http.post(`/room/${HTTP_VERSION}/del`, params)
// 房屋预定详情
export const qyeryDetails = params => Http.post(`/room/${HTTP_VERSION}/details`, params)
// 查询房间费用
export const qyeryGetCost = params => Http.post(`/room/${HTTP_VERSION}/getCost`, params)
// 查询房间费用
export const getRentRefundCost = params => Http.post(`/room/${HTTP_VERSION}/getRentRefundCost`, params)
// 查看签约信息
export const getSign = params => Http.post(`/room/${HTTP_VERSION}/getSign`, params)
// 查看当前房屋租客
export const getTenantLists = params => Http.post(`/room/${HTTP_VERSION}/getTenantLists`, params)
// 分页查询票据
export const invoicePage = params => Http.post(`/room/${HTTP_VERSION}/invoicePage`, params)
// 房间列表查询
export const queryList = params => Http.post(`/room/${HTTP_VERSION}/list`, params)
//  退租退款
export const rentRefund = params => Http.post(`/room/${HTTP_VERSION}/rentRefund`, params)
// 预订房间
export const reserve = params => Http.post(`/room/${HTTP_VERSION}/reserve`, params)
// reserveCancel
export const reserveCancel = params => Http.post(`/room/${HTTP_VERSION}/reserveCancel`, params)
// 确认收款
export const saveOrder = params => Http.post(`/room/${HTTP_VERSION}/saveOrder`, params)
// 添加租客
export const sign = params => Http.post(`/room/${HTTP_VERSION}/sign`, params)
