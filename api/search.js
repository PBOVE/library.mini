import request from '../lib/http/axios/index'






export default class Service {
  // 向服务查询数据并分页返回结果
  static fecthHotList() {
    return request({
      url: 'https://library.tibis.top/epi/search/hot',
      method: 'get'
    })
  }
}