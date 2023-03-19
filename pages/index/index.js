
Page({
  data: {
    //轮播图数组
    swiperList:[],
    //导航数组
    catesList:[],
    //楼层数据
    floorList:[]

  },
  //页面加载就触发
  onLoad: function(options) {
    // 1发送异步请求获取轮播图数据
  //wx.request({
   // url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',

    //success: (result) => {
     // this.setData({
     //   swiperList:result.data.message
     // })
    //}
  //})
    this.getSwiperList(); 
    this.getCatesList();
    this.getFloorList();

  },

  //获取轮播图数据
  getSwiperList(){
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
  
      success: (result) => {
        this.setData({
          swiperList:result.data.message
        })
      }
    })
  },

  
 //获取 分类导航器
getCatesList(){
  wx.request({
    url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',

    success: (result) => {
      this.setData({
        catesList:result.data.message
      })
    }
  })
},


getFloorList(){
  wx.request({
    url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',

    success: (result) => {
      this.setData({
        floorList:result.data.message
      })
    }
  })
},


});