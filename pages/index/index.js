Page({
  data: {},
  onLoad: function () {
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
  onUnload: function () {
    console.log("页面销毁时执行")
  },
  // 处理页面点击搜索
  handleClickSearch() {
    wx.navigateTo({
      url: '/pages/search/index',
    })
  }
})