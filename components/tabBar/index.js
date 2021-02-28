// components/tabBar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    active: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 标签栏列表
    tabList: [{
        title: '首页',
        icon: "home-o",
        url: '/pages/index/index'
      },
      {
        title: '分类',
        icon: "apps-o",
        url: '/pages/classify/index'
      },
      {
        title: '消息',
        icon: "chat-o",
        url: '/pages/message/index'
      },
      {
        title: '我的',
        icon: "contact",
        url: '/pages/oneself/index'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event) {
      const active = event.currentTarget.dataset['index']
      wx.switchTab({
        url: this.data.tabList[active].url,
      })
    }
  }
})