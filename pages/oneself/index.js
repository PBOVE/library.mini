import configs from '../../configs/index'

Page({
  data: {
    configs
  },
  onLoad: function () {
    // wx.getUserInfo({
    //   lang: 'zh_CN',
    //   success(res){
    //     console.log(res)
    //   }
    // })
    console.log("页面创建时执行")
  },
  onShow: function () {
    console.log("页面出现在前台时执行")
  },
  onReady: function () {
    console.log("页面首次渲染完毕时执行")
  },
  onHide: function () {
    console.log("页面从前台变为后台时执行")
  },

})