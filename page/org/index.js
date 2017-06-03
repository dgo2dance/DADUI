
var api = require('../../utils/api.js');
var app = getApp();
Page({
  data: {
    list: []
  },

  onLoad: function (options) {

    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log("userInfo");
      console.log(userInfo);
      that.setData({
        userInfo:userInfo
      });
      //向服务端发起请求
      requestData(that,userInfo);

    });

    
   
  },

  //跳转到频道详细页
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    var targetUrl = "pages/org/org";
        wx.navigateTo({
            url: targetUrl
        });
  },

});


/**
 * 请求数据
 * @param that Page的对象，用其进行数据的更新
 * @param targetPage 请求的目标页码
 */
function requestData(that,userInfo) {
  console.log("11userInfo");
  console.log(userInfo);
  wx.request({
    url: api.getLogin(),
    data:{
      "openid":userInfo.openid,
      "nickName":userInfo.nickName,
      "gender":userInfo.gender,
      "avatatUrl":userInfo.avatatUrl,
      "city":userInfo.city,
      "provience":userInfo.provience,
      "country":userInfo.country
    },
    method:'POST',
    header: {
      "Content-Type": "application/json"
    },
    success: function (res) {
          console.log('onRequest');
          console.log(res);
          console.log(res.data.data.userId);
           that.setData({
      //     list: res.data.data.org;
      })
    },
    fail:function(){
      console.log('fail');
    },
  });
}

