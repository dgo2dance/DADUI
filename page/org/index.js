Page({
  data: {
    list: [{
        id: '003',
        name: '哈哈朋友圈',
        img:'001'
      }, {
        id: '004',
        name: 'YUTONG协会',
        img:'001'
      },{
        id: '005',
        name: '郑州大学',
        img:'001'
      }
      ],
      items:[{
      image:"111.png",
      title:'郑州大学',
      subTitle:'ddd',
      actor:'通过@will',
      num:'100人在频道中',
      score:'10',
      action:'rr'
      },{
          image: "111.png",
          title: '宇通协会',
          subTitle: '相遇的人终会遇到',
          actor: '通过@will',
          num: '100人在频道中',
          score: '10',
          action: 'rr'
      }]
  },
  onLoad: function (options) {
    var that = this;
  //  requestData();
   
  },

  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    var targetUrl = "pages/org/org";
      
        wx.navigateTo({
            url: targetUrl
        });

  },

  //获取当前圈子
  getOrg:function(){

  this.setData({
      list: list
    })


  }

});



/**
 * 请求数据
 * @param that Page的对象，用其进行数据的更新
 * @param targetPage 请求的目标页码
 */
function requestData(that, targetPage) {
  wx.request({
    url: 'http://localhost:8080/login?openid=11111&nickname=2222',
    data:{},
    method:'POST',
    header: {
      "Content-Type": "application/json"
    },
    success: function (res) {
        console.log('onRequest');
        console.log(res);
        console.log(res.data.data.userId);
    },
    fail:function(){
      console.log('fail');
    },
  });
}

