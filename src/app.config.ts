export default {
  pages: [
    "pages/moduleA/pages/addTanant/index",
    "pages/in/index",
    "pages/home/index",
    "pages/analysis/index",
    "pages/community/index",
    "pages/shop/index",
    "pages/my/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#2154F4",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "white",
  },
  requiredBackgroundModes: ["audio"],
  tabBar: {
    color: '#2B2E33',
    selectedColor: '#2154F4',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: './assets/images/home.png',
        selectedIconPath: './assets/images/home_active.png',
      },
      {
        pagePath: 'pages/analysis/index',
        text: '统计',
        iconPath: './assets/images/tongji.png',
        selectedIconPath: './assets/images/tongji_active.png',
      },
      {
        pagePath: 'pages/community/index',
        text: '社区',
        iconPath: './assets/images/shequ.png',
        selectedIconPath: './assets/images/shequ_active.png',
      },
      {
        pagePath: 'pages/shop/index',
        text: '店铺',
        iconPath: './assets/images/dianpu.png',
        selectedIconPath: './assets/images/dianpu_active.png',
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: './assets/images/my.png',
        selectedIconPath: './assets/images/my_active.png',
      }
    ],
  },
  // "subpackages": [
  //   {
  //     "root": "pages/moduleA",
  //     "pages": [
  //       "pages/house/index",
  //       "pages/addHouse/index",
  //       "pages/addRoom/index",
  //       "pages/floorDetail/index",
  //       "pages/houseDetail/index",
  //       "pages/meterReading/index",
  //       "pages/meterReadingDetails/index",
  //       "pages/tenant/index",
  //       "pages/waitElectric/index",
  //       "pages/about/index",
  //       "pages/share/index",
  //       "pages/bill/index",
  //       "pages/commonManager/index",
  //       "pages/confirmReceipt/index",
  //       "pages/houseExpires/index",
  //       "pages/tanantRules/index",
  //       "pages/vacantRoom/index",
  //       "pages/reserveRoom/index",
  //       "pages/addTanant/index",
  //       "pages/batchSetting/index",
  //     ]
  //   }
  // ]
};
