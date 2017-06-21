Page({
    data: {
      items: [{
        image: "111.png",
        title: '漂亮的人',
        subTitle: 'ddd',
        actor: '通过@will',
        num: '100人在频道中',
        score: '10',
        action: 'rr'
      }, {
        image: "111.png",
        title: '漂亮的人',
        subTitle: '相遇的人终会遇到',
        actor: '通过@will',
        num: '100人在频道中',
        score: '10',
        action: 'rr'
        }, {
          image: "111.png",
          title: '漂亮的人',
          subTitle: '相遇的人终会遇到',
          actor: '通过@will',
          num: '100人在频道中',
          score: '10',
          action: 'rr'
      }, {
        image: "111.png",
        title: '漂亮的人',
        subTitle: '相遇的人终会遇到',
        actor: '通过@will',
        num: '100人在频道中',
        score: '10',
        action: 'rr'
        }, {
          image: "111.png",
          title: '漂亮的人',
          subTitle: '相遇的人终会遇到',
          actor: '通过@will',
          num: '100人在频道中',
          score: '10',
          action: 'rr'
      }, {
        image: "111.png",
        title: '漂亮的人',
        subTitle: '相遇的人终会遇到',
        actor: '通过@will',
        num: '100人在频道中',
        score: '10',
        action: 'rr'
        }, {
          image: "111.png",
          title: '漂亮的人',
          subTitle: '相遇的人终会遇到',
          actor: '通过@will',
          num: '100人在频道中',
          score: '10',
          action: 'rr'
        }],
        hidden: false
    },
    onLoad: function (options) {
        var that = this;
        console.log('id'+options.id);

        requestData(options.id);

    },



    toWrite: function (e){
    var id = e.currentTarget.id;
    var targetUrl = "../write/write";

    wx.navigateTo({
      url: targetUrl
    });
  },


    onPostClick: function (event) {
        console.log("onPostClick");
       
    }
});

var mTitles = [];
var mSrcs = [];
var mTimes = [];
var mCurrentPage = -1;

/**
 * 请求数据
 * @param that Page的对象，用其进行数据的更新
 * @param targetPage 请求的目标页码
 */
function requestData(that, targetPage) {
    wx.request({
        url: 'sss',
        header: {
            "Content-Type": "application/json"
        },
        success: function (res) {
            if (res == null ||
                res.data == null ||
                res.data.results == null ||
                res.data.results.length <= 0) {

          
                return;
            }

            var i = 0;
            for (; i < res.data.results.length; i++)
                bindData(res.data.results[i]);

            //将获得的各种数据写入itemList，用于setData
            var itemList = [];
            for (var i = 0; i < mTitles.length; i++)
                itemList.push({title: mTitles[i], src: mSrcs[i], time: mTimes[i]});

            that.setData({
      //          items: itemList,
                hidden: true
            });

            mCurrentPage = targetPage;
        }
    });
}




