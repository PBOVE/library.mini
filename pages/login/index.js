import configs from '../../configs/index'

import Service from '../../api/security'

import Toast from '@vant/weapp/toast/toast';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 配置
    configs,
    // 手机
    mobile: "",
    // 密码
    password: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 返回上一页
  onBack: () => wx.navigateBack(),

  //  处理小程序登录
  async handleLogin() {
    const mobile = this.data.mobile
    const password = this.data.password
    if (!mobile || !password) return

    try {
      const res = await Service.loginApi({
        mobile,
        password
      })
      console.log(res)
    } catch (err) {
      console.log(err)
      Toast.fail('登录失败');
    }
  },

  // 处理电话改变
  handleMobileChange(e) {
    this.setData({
      mobile: e.detail.value,
    })
  },

  // 处理电话改变
  handlePasswordChange(e) {
    this.setData({
      password: e.detail.value,
    })
  },
})