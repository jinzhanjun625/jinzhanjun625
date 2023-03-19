// pages/goods_list/index.js
import{ request } from "../../request/index.js";
Page({   
    data: {
        tabs:[
         {
           id:0,
           value:"综合",
           isActive:true
         },  


         {
            id:1,
            value:"销量",
            isActive:false
          },  

          {
            id:2,
            value:"价格",
            isActive:false
          },  
      ],
         
   
    },
           
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {     
    },

   
    //标题点击事件 
    handleTabsItemChange(e){
       const  {index} =e.detail;
       let {tabs}=this.data;
       tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
       this.setData({
          tabs
       })
    
    }
})