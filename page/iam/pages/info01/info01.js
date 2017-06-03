
Page({
  data: {
    items: [
      {name: 'yes', value: '是', checked: 'false'}
    ],

    array: ['郑州', '洛阳'],
    incomeArray:['5-8k','9-12k'],
    index: 0,
    date: '2016-09-01'
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
  submit: function(e) {


    var id = e.currentTarget.id;
    var targetUrl = "../info02/info02";

    wx.navigateTo({
      url: targetUrl
    });
  }
})