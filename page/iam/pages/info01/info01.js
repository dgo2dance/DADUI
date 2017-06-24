var api = require('../../../../utils/api.js');
Page({
  data: {
    items: [
      {name: 'yes', value: '是', checked: 'false'}
    ],
    array: ['郑州', '洛阳'],
    incomeArray:['5-8k','9-12k'],
    index: 0,
    date: '2016-09-01',
    allValue:''
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  formSubmit: function(e) {
  	var that =this;
  	console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })

    if(e.detail.value.height.length==0){
	      wx.showToast({
	        title: '身高不得为空!',
	        icon: 'loading',
	        duration: 1500
	      })
	      setTimeout(function(){
	          wx.hideToast()
	        },2000)
    }else{
    	requestData(that,e.detail.value);
    }

    var id = e.currentTarget.id;

  }
})


/**
 * 请求数据  更新用户信息
 * @param that Page的对象，用其进行数据的更新
 * @param targetPage 请求的目标页码
 */
function requestData(that,value) {
   var sessionId= wx.getStorageSync('JSESSIONID');
    wx.request({
        url: api.userEditFirst(),
        header: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Cookie':'SESSION='+sessionId
        },
        data:value,
        method:'POST',
        success: function (res) {
            if (res == null ||
                res.data == null) {
                console.error(Constant.ERROR_DATA_IS_NULL);
                return;
            }
            var targetUrl = "../info02/info02";
		    wx.navigateTo({
		      url: targetUrl
		    });
        }
    });
}