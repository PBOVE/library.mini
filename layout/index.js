const app = getApp()


Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  options: {
    multipleSlots: true
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  /**
   * 组件生命周期函数-在组件实例进入页面节点树时执行
   */
  attached() {
    this.setData({
      statusBarHeight: app.globalData.statusBarHeight
    })
  }
})