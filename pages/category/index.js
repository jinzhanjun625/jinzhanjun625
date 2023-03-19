import{ request } from "../../request/index.js";

Page({

   
    data: {
           //左侧菜单数据
           leftMenuList:[],
           //右侧商品数据
           rightContent:[],
           //被点击的左侧商品
           currentIndex:0,
           //右侧内容滚动条距离顶部距离
           scrollTop:0
     
    },
 
    //接口返回数据
    Cates:[],

    onLoad: function(options) {
      /*
      1 先判断一下本地存储中有没有旧数据
          {time:Date.mow(),data:[...]}
      2 没有旧数据 直接发送请求
      3 有旧数据且无过期 就使用本地的旧数据
      */
      const Cates = wx.getStorageSync( "Cates" );
        

      if(!Cates){
        this.getCates();
      }
      else{
        //有旧数据 定义过期时间 
        if(Date.now() - Cates.time>1000 * 10){
          this.getCates();          
        }

        else{
        this.Cates = Cates.data;
        let leftMenuList = this.Cates.map(v=>v.cat_name);
        let rightContent = this.Cates[0].children;
        }
      }
             
    },
  //获取分类数据
  getCates(){
     wx.request({
       url:"https://api-hmugo-web.itheima.net/api/public/v1/categories",
       
      success:(res) =>{
        this.Cates = res.data.message;

        //接口数据存入到本地存储中
        wx.setStorageSync("cates",{time:Date.now(),data:this.Cates})
      
        //构造左侧大菜单数据
        let  leftMenuList=this.Cates.map(v=>v.cat_name);
       
       //构造右侧的商品数据
        let  rightContent=this.Cates[0].children;

        this.setData({
          leftMenuList,
          rightContent
        })
      }
    }) 

    },
    //左侧菜单的点击事件
    handleItemTap(e){
      const { index }=e.currentTarget.dataset;

      let  rightContent = this.Cates[index].children;
      this.setData({
        currentIndex : index,
        rightContent,
        scrollTop:0
      })      
    }
})
