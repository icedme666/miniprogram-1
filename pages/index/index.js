// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    theme: {
      image: "/images/theme.jpg",
      title: "冥想"
    },
    list: []
  },
  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/list/list?id=${id}`
    });
  },
  onLoad: function() {
    var that = this;
    wx.request({
      url: 'http://193.112.148.68/api/categories/', // 本地接口地址
      method: 'GET', // 请求方式
      dataType: 'json', // 数据类型
      header: {
        'content-type': 'application/json' // 请求头
      },
      success: function(res) {
        console.log('请求成功');
        that.setData({
          list: res.data // 更新列表数据
        });
      },
      fail: function(res) {
        console.log('请求失败');
      }
    });
  }
});