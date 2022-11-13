"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my/index"],{

/***/ "./node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/my/index.tsx":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/my/index.tsx ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "webpack/container/remote/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "webpack/container/remote/redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _in_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../in/redux */ "./src/pages/in/redux.ts");
/* harmony import */ var _home_images_fb_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/images/fb.png */ "./src/pages/home/images/fb.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);





var _dec, _class;











var My = (_dec = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(function (state) {
  return {
    headImageUrl: state.in.headImageUrl,
    nickName: state.in.nickName
  };
}, function (dispatch) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_4__.bindActionCreators)({
    getUserInfo: _in_redux__WEBPACK_IMPORTED_MODULE_5__.getUserInfo
  }, dispatch);
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__["default"])(My, _React$Component);
  var _super = (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__["default"])(My);
  function My(props) {
    var _this;
    (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, My);
    _this = _super.call(this, props);
    _this.subscribeMessage = _this.subscribeMessage.bind((0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this));
    return _this;
  }
  (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__["default"])(My, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 获取用户的信息
      this.props.getUserInfo();
    }
  }, {
    key: "jumpUrl",
    value: function jumpUrl(url) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
        url: url
      });
    }
  }, {
    key: "subscribeMessage",
    value: function subscribeMessage() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getSetting({
        withSubscriptions: true,
        success: function success(res) {
          // console.log(res.authSetting)
          // userInfo 是否授权用户信息，对应接口 wx.getUserInfo
          // userLocation 是否授权地理位置，对应接口 wx.getLocation, wx.chooseLocation
          // address 是否授权通讯地址，已取消此项授权，会默认返回true
          // invoiceTitle 是否授权发票抬头，已取消此项授权，会默认返回true
          // invoice 是否授权获取发票，已取消此项授权，会默认返回true
          // werun 是否授权微信运动步数，对应接口 wx.getWeRunData
          // record 是否授权录音功能，对应接口 wx.startRecord
          // writePhotosAlbum 是否授权保存到相册 wx.saveImageToPhotosAlbum, wx.saveVideoToPhotosAlbum
          // camera 是否授权摄像头，对应[camera]((camera)) 组件
          // bluetooth 是否授权蓝牙，对应接口 wx.openBluetoothAdapter、wx.createBLEPeripheralServer
          // addPhoneContact 是否添加通讯录联系人，对应接口 wx.addPhoneContact
          // addPhoneCalendar 是否授权系统日历，对应接口 wx.addPhoneRepeatCalendar、wx.addPhoneCalendar
          console.log(res.subscriptionsSetting);
          // if (!res.subscriptionsSetting?.mainSwitch) {
          //   Taro.requestSubscribeMessage({
          //     tmplIds: ['9u4ItXlg8fTCfF8i8hmtygLmW94yH46I8nrBCihcnJE'],
          //     success(res) {
          //       console.log(res, 'res')
          //     },
          //     complete(res) { console.log(res, 'complete') }
          //   })
          // } else {
          //   Taro.atMessage({
          //     message: '已经获取过了',
          //     type: 'info',
          //   })
          // }
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().requestSubscribeMessage({
            tmplIds: ['9u4ItXlg8fTCfF8i8hmtygLmW94yH46I8nrBCihcnJE'],
            success: function success(res) {
              console.log(res, 'res');
            },
            complete: function complete(res) {
              console.log(res, 'complete');
            }
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props,
        _this$props2,
        _this2 = this;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        className: "my_container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtModal, {
          isOpened: true,
          title: "\u6807\u9898",
          cancelText: "\u53D6\u6D88",
          confirmText: "\u786E\u8BA4",
          content: "\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4\\n\\r\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "heade-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "head",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "head-image",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Image, {
                className: "logo",
                src: ((_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.headImageUrl) || _home_images_fb_png__WEBPACK_IMPORTED_MODULE_6__
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "name",
              children: ((_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.nickName) || '***'
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
          className: "content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "list",
            onClick: function onClick() {
              return _this2.jumpUrl('/pages/moduleA/pages/commonManager/index');
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "item-msg",
              children: "\u6DFB\u52A0\u5171\u540C\u7BA1\u7406\u4EBA"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtIcon, {
              value: "chevron-right",
              color: "#ccc"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "list",
            onClick: function onClick() {
              return _this2.jumpUrl('/pages/moduleA/pages/tanantRules/index');
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "item-msg",
              children: "\u79DF\u6237\u987B\u77E5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtIcon, {
              value: "chevron-right",
              color: "#ccc"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "list",
            onClick: function onClick() {
              return _this2.jumpUrl('/pages/moduleA/pages/share/index');
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "item-msg",
              children: "\u63A8\u8350\u7ED9\u597D\u53CB"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtIcon, {
              value: "chevron-right",
              color: "#ccc"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "list",
            onClick: function onClick() {
              return _this2.jumpUrl('/pages/moduleA/pages/about/index');
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "item-msg",
              children: "\u5173\u4E8E\u6211\u4EEC"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtIcon, {
              value: "chevron-right",
              color: "#ccc"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
            className: "list",
            onClick: this.subscribeMessage,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
              className: "item-msg",
              children: "\u83B7\u53D6\u6D88\u606F\u63A8\u9001\u6743\u9650"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtIcon, {
              value: "chevron-right",
              color: "#ccc"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtMessage, {})]
        })]
      });
    }
  }]);
  return My;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component))) || _class);
/* harmony default export */ __webpack_exports__["default"] = (My);

/***/ }),

/***/ "./src/pages/my/index.tsx":
/*!********************************!*\
  !*** ./src/pages/my/index.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_webpack5_runner_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/my/index.tsx");


var config = {"navigationBarTitleText":"安心租-我的"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_webpack5_runner_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/my/index', {root:{cn:[]}}, config || {}))




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/my/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map