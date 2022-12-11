import Taro from '@tarojs/taro'
import { HTTP_STATUS } from '../constants/status'
import env from './env'
import { logError } from './error'

const { baseUrl } = env

export default {
  baseOptions(params, method: any = 'GET') {
    let { url, data } = params
    let contentType = 'application/json'
    contentType = params.contentType || contentType
    // type OptionType = {
    //   url: string,
    //   data?: object | string,
    //   method?: any,
    //   header: object,
    //   // mode: string,
    //   success: any,
    //   error: any,
    //   xhrFields: object,
    // }
    // const option: OptionType = {
    //   url: url.indexOf('http') !== -1 ? url : baseUrl + url,
    //   data: data,
    //   method: method,
    //   header: {
    //     'content-type': contentType,
    //     'Peace-X-Token': Taro.getStorageSync('Peace-X-Token') || 'AAAA'
    //   },
    //   // mode: 'cors',
    //   xhrFields: { withCredentials: true },
    //   success(res) {
    //     const { code, msg, data } = res.data || {}
    //     if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
    //       return logError('api', '请求资源不存在')
    //     } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
    //       return logError('api', '服务端出现了问题')
    //     } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
    //       return logError('api', '没有权限访问')
    //     } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
    //       Taro.clearStorage()
    //       Taro.navigateTo({
    //         url: '/pages/packageA/pages/login/index'
    //       })
    //       return logError('api', '请先登录')
    //     } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
    //       if (code == HTTP_STATUS.SUCCESS) {
    //         return data
    //       } else {
    //         Taro.showToast({
    //           title: msg,
    //           // icon: 'error',
    //           duration: 2000
    //         })
    //       }
    //     }
    //   },
    //   error(e) {
    //     logError('api', '请求接口出现问题', e)
    //   }
    // }
    return new Promise(async (resove, reject) => {
      Taro.request({
        url: url.indexOf('http') !== -1 ? url : baseUrl + url,
        data: data,
        method: method,
        header: {
          'content-type': contentType,
          'Peace-X-Token': Taro.getStorageSync('Peace-X-Token') || 'AAAA'
        },
        // mode: 'cors',
        // xhrFields: { withCredentials: true },
        success(res) {
          const { code, msg, data } = res.data || {}
          if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
            reject(res.data)
            return logError('api', '请求资源不存在')
          } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
            reject(res.data)
            return logError('api', '服务端出现了问题')
          } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
            reject(res.data)
            return logError('api', '没有权限访问')
          } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
            reject(res.data)
            Taro.clearStorage()
            Taro.navigateTo({
              url: '/pages/packageA/pages/login/index'
            })
            return logError('api', '请先登录')
          } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
            if (code == HTTP_STATUS.SUCCESS) {
              // return data
              resove(data)
            } else {
              Taro.showToast({
                title: msg,
                icon: 'none',
                duration: 2000
              })
              reject(res.data)
            }
          }
        },
        fail(e) {
          reject(e)
          logError('api', '请求接口出现问题', e)
        }
      })
    })
    // eslint-disable-next-line
    // return Taro.request(option)
  },
  get(url, data?: object) {
    let option = { url, data }
    return this.baseOptions(option)
  },
  post: function (url, data?: object, contentType?: string) {
    let params = { url, data, contentType }
    return this.baseOptions(params, 'POST')
  },
  put(url, data?: object) {
    let option = { url, data }
    return this.baseOptions(option, 'PUT')
  },
  delete(url, data?: object) {
    let option = { url, data }
    return this.baseOptions(option, 'DELETE')
  }
}
