import request from '../lib/http/axios/index'





export default class Service {
  // 向服务查询数据并分页返回结果
  static fetchUserData(data) {
    return request({
      url: 'http://127.0.0.1:7200/epi/user/wx/code',
      method: 'get',
      data: data
    })
  }
}