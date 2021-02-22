App({
  onLaunch: function () {
    console.log("页面创建时执行")

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