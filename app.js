//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
      wx.showModal({
  title: '0'
});
    var that = this
    if(this.globalData.userInfo){  
       wx.showModal({
  title: '1'
});
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口

       wx.showModal({
  title: '2'
});

      wx.login({
        success: function (loginCode) {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
            }
          });

          //调用微信api获取
          var appid = 'wx225f75e64eddaddd'; //填写微信小程序appid  
          var secret = '8dd43dd52ddf6eb0f52386cc222f85df';
            console.log(loginCode);
            wx.request({  
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx225f75e64eddaddd&secret=8dd43dd52ddf6eb0f52386cc222f85df&grant_type=authorization_code&js_code='+loginCode.code,  
            header: {  
                'content-type': 'application/json'  
            },  
            success: function(res) {  
              console.log("openid")
              console.log(res);             
              console.log(res.data.openid) //获取openid  
              that.globalData.openid = res.data.openid;
              typeof cb == "function" && cb(that.globalData.userInfo,that.globalData.openid)
            }  
          });
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    openid:null
  }
})