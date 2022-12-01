//index.js
var common = require('../../utils/common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 幻灯片素材
    // swiperImg:[
    //   { src:'http://www.ahnu.edu.cn/__local/F/72/F2/B24C3AF40EC7554DFC52F5F2113_B103F450_2014E.jpg'},
    //   { src:'http://www.ahnu.edu.cn/__local/D/E4/67/DAE4773F2786E1ED1EAD86BD385_2A00C4D4_7C44C.png'},
    //   { src:'http://www.ahnu.edu.cn/__local/4/EF/46/4598EE7BA7F576B4FE1215F96B9_1C119379_AAC9.jpg'}
    // ]

    list: [
      //第1组列表
      [{
          text: 'desk01'
        },
        {
          text: '无人'
        },
        {
          text: '无预约'
        },
        {
          isSelect: false
        }
      ],
      //第2组列表
      [{
          text: 'desk02'
        },
        {
          text: '无人'
        },
        {
          text: '无预约'
        },
        {
          isSelect: false
        }
      ],
      //第3组列表
      [{
          text: 'desk03'
        },
        {
          text: '无人'
        },
        {
          text: '无预约'
        },
        {
          isSelect: false
        }
      ],
      //第4组列表  
      [{
          text: 'desk04'
        },
        {
          text: '无人'
        },
        {
          text: '无预约'
        },
        {
          isSelect: false
        }
      ],
    ],
    recordData:[],


  },

  /**
   * 自定义函数--上传数据点
   */

  postInfo: function (e) {
    let index = Number(e.currentTarget.dataset.index)
    let that = this
    let f = 'list[' + index + '].[' + 3 + '].isSelect'
    if(!that.data.list[index][3].isSelect){
      let list=[]
      list=that.data.recordData.concat([e.currentTarget.dataset.list])
      console.log(list)
      that.setData({
        recordData:list
      })
      wx.setStorage({
          key: 'list',
          data: JSON.stringify(list)
      })

      // let list=[]
      // wx.getStorage({
      //   key: 'list',
      //   success: function(res) {
      //     list=JSON.parse(res.data)
      //   }
      // })
      // console.log(list)
      // list.push(that.data.list[index])
      
    }
    


    this.setData({
      [f]: that.data.list[index][3].isSelect ? false : true
    })
    wx.setStorage({
      key: 'setData',
      data: JSON.stringify(that.data.list)
    })
    return false
    wx.request({
      url: 'https://api.heclouds.com/devices/1010854455/datapoints',
      //url: 'https://api.heclouds.com/mqtt?topic=num',
      method: 'POST',
      header: {
        "conent_type": "application/json",
        "api-key": "Akd4lAlsMsiBfDOHlyNWlhTQAHA="
        //"api-key":"DOLKBjEyDgbIquKFL7tTYdWXNv8="
      },
      //data:66,
      data: {
        "datastreams": [{
          "id": "desk01",
          "datapoints": [{
            "value": 1
          }]
        }],

      },
      success: (result) => {
        console.log(result);
        console.log("上传成功");
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    wx.getStorage({
      key: 'setData',
      success: function(res) {
        that.setData({
          list: JSON.parse(res.data)
        })
      },
      fail: function(res) {
        that.setData({
          // number: res.data
        })
      }

    })

    wx.getStorage({
      key: 'recordData',
      success: function(res) {
        that.setData({
          recordData: JSON.parse(res.data)
        })
      },
    })
    console.log( that.data.recordData)
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})