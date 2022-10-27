export default class Tools {

  static debounce(fn, interval = 600) {
    let Timer:any = null
    return function () {
      clearTimeout(Timer)
      Timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, interval)
    }
  }
  // 获取内部链接参数
  static getInUrlPrams(obj, type) {
    if (type) {
      return obj.match.params[type]
    }
    return obj.match.params
  }

  // 获取外部链接参数
  static getOutUrlPrams(name) {
    const oldUrlParams = window.location.href.split('?')[1] || ''
    const urlParams = oldUrlParams.split('#')[0] || ''
    const urlParamsObj = {}
    const urlParamsArray = urlParams.split('&')
    for (let i = 0; i < urlParamsArray.length; i++) {
      const currParam = urlParamsArray[i].split('=')
      urlParamsObj[currParam[0]] = currParam[1]
    }
    if (name) {
      return urlParamsObj[name]
    }
    return urlParamsObj
  }

  static getParameterByName(name) {
    let location:any = window.location
    let values = decodeURIComponent((location.search.match(RegExp("[?|&|/]" + name + '=([^\&|?&]+)')) || [, null])[1])// eslint-disable-line
    if (this.isNullOrEmpty(values)) {
        values = decodeURIComponent((location.hash.match(RegExp("[?|&|/]" + name + '=([^\&|?&]+)')) || [, null])[1])// eslint-disable-line
    }
    return this.isNullOrEmpty(values) || values === 'null' ? '' : values
  }

  static isNullOrEmpty(obj) {
    const result = (obj == null || obj === 'null' || obj === undefined || obj === 'undefined' || typeof obj === 'undefined' || obj === '' || JSON.stringify(obj) === '{}' || JSON.stringify(obj) === '[]')
    if (result && (obj !== 0 || obj !== '0')) {
      return result
    }
    return false
  }
}
