Page({
  data: {
    products: []
  },
  onLoad: function(options) {
    var that = this;
    that.setData({
      id: options.id
    });
    wx.request({
      url: 'http://193.112.148.68/api/products/' + that.data.id + "/", // 本地接口地址
      method: 'GET', // 请求方式
      dataType: 'json', // 数据类型
      header: {
        'content-type': 'application/json' // 请求头
      },
      success: function(res) {
        console.log('请求成功');
        that.setData({
          products: res.data // 更新列表数据
        });
      },
      fail: function(res) {
        console.log('请求失败');
      }
    });
  }
});