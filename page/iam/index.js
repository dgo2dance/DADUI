//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    list: [ {
        id: 'storage',
        name: '个人信息',
        url: 'info/info'
      },
    {
        id: 'myChat',
        name: '我加微信的人',
        url: 'myChat/myChat'
      },
    {
        id: 'chatMe',
        name: '加我微信的人',
        url: 'chatMe/chatMe'
      },
       {
        id: 'sugar',
        name: 'sugar',
        url: 'sugar/sugar'
      }, 
       {
        id: 'myOrg',
        name: '我的圈子',
        url: 'myOrg/myOrg'
      }

    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      });
    });
    var list = this.data.list;
     that.setData({
      list: list
    });

  },

    kindToggle: function (e) {
    this.setData({
      list: list
    });
  }


})
