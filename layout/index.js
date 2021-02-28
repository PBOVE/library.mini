const app = getApp()


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    headerClass: {
      type: String,
      value: ''
    }
  },

  options: {
    multipleSlots: true,
    styleIsolation: 'apply-shared'
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
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      

      this.setData({
        statusBarHeight: app.globalData.statusBarHeight
      })
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    }
  }
})