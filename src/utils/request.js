import Taro from '@tarojs/taro'
import {getOrigin} from './config'

/**
 * 简易封装网络请求
 * // NOTE 需要注意 RN 不支持 *StorageSync，此处用 async/await 解决
 * @param {*} options
 */
export default  function request(options) {
  const { url, data, method = 'GET',type='json'} = options

  const header =  {}
  if ( method === 'POST' || method === 'PUT' || method === 'DELETE') {
    if (type == 'json') {
      // json格式
      header['content-type'] = 'application/json'
    } else {
      // 表单格式
      header['content-type'] = 'application/x-www-form-urlencoded'
    }
  }

  const weapp = Taro.getEnv() === "WEAPP"

  weapp && Taro.showNavigationBarLoading()

  Taro.showLoading({
    title: '加载中...'
  })
  
  return Taro.request({
    url: getOrigin(url),
    method,
    data,
    header
  }).then(async (response) => {
    const { statusCode, data: {code, message} } = response
    
    Taro.hideLoading()

    weapp && Taro.hideNavigationBarLoading() // 隐藏导航条加载动画

    // HTTP状态码
    if (statusCode >= 200 && statusCode < 300) {
      // 处理业务代码
        if(code == 401) {
          return Taro.navigateTo({
            url: '/pages/user-login/user-login'
          })
        }
        if(code == 403) {
          return Taro.showToast({
            title: "您没有权限访问",
            icon: 'none'
          })
        }
        if(code == 500) {
          return Taro.showToast({
            title: "服务器异常",
            icon: 'none'
          })
        }
        // 普通报错
        if(code == 400) {
          return Taro.showToast({
            title: message,
            icon: 'none'
          })
        }
    } else {
      return Taro.showToast({
        title: `网络请求错误，状态码${statusCode}`,
        icon: 'none'
      })
    }

    return response.data
  }).catch((err) => {
    Taro.showToast({
      title: err && err.errorMsg || "服务异常",
      icon: 'none'
    })
  })
}