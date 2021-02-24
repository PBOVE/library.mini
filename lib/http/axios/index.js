import {
  ResultEnum
} from '../../../enum/httpEnum'


export default function (requestConfig) {

  return new Promise((resolve, reject) => {
    // 设置用户的请求参数
    let config = requestConfig

    wx.request({
      url: config.url,
      data: config.data,
      header: config.header,
      method: config.method,
      success: (response) => {
        const res = response.data
        if (res.code === ResultEnum.SUCCESS && res.msg === ResultEnum.SUCCESSMSG) {
          // 请求成功
          resolve(res)
        } else {
          // 请求失败
          reject(res)
        }
      },
      fail: (err) => {
        const error = {
          code: 0,
          msg: '错误'
        }
        reject(error)
      }
    })

  })
}