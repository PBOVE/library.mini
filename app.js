App({
  onLaunch: function () {
    console.log("页面创建时执行")

    wx.login({
      success(res){
        console.log(res)
      }
    })

    wx.getSystemInfo({
      success: (result) => {
        this.globalData.statusBarHeight = result.statusBarHeight
      }
    })

  },
  globalData: {
    statusBarHeight: 0
  }
})