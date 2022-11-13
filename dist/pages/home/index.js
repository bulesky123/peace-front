"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "./node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/home/index.tsx":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/home/index.tsx ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/container/remote/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "webpack/container/remote/redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _in_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../in/redux */ "./src/pages/in/redux.ts");
/* harmony import */ var _components_phoneModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/phoneModal */ "./src/pages/home/components/phoneModal.tsx");
/* harmony import */ var _images_bg_msg_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/bg_msg.png */ "./src/pages/home/images/bg_msg.png");
/* harmony import */ var _images_fwgl_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/fwgl.png */ "./src/pages/home/images/fwgl.png");
/* harmony import */ var _images_zkgl_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/zkgl.png */ "./src/pages/home/images/zkgl.png");
/* harmony import */ var _images_sdcb_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/sdcb.png */ "./src/pages/home/images/sdcb.png");
/* harmony import */ var _images_qftz_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/qftz.png */ "./src/pages/home/images/qftz.png");
/* harmony import */ var _images_notice_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/notice.png */ "./src/pages/home/images/notice.png");
/* harmony import */ var _images_banner_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/banner.png */ "./src/pages/home/images/banner.png");
/* harmony import */ var _images_fb_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/fb.png */ "./src/pages/home/images/fb.png");
/* harmony import */ var _images_zz_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/zz.png */ "./src/pages/home/images/zz.png");
/* harmony import */ var _images_gb_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/gb.png */ "./src/pages/home/images/gb.png");
/* harmony import */ var _images_yuqi_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/yuqi.png */ "./src/pages/home/images/yuqi.png");
/* harmony import */ var _images_dq_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/dq.png */ "./src/pages/home/images/dq.png");
/* harmony import */ var _images_kf_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/kf.png */ "./src/pages/home/images/kf.png");
/* harmony import */ var _images_daichao_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/daichao.png */ "./src/pages/home/images/daichao.png");
/* harmony import */ var _images_queren_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/queren.png */ "./src/pages/home/images/queren.png");
/* harmony import */ var _images_zukebaoxiu_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/zukebaoxiu.png */ "./src/pages/home/images/zukebaoxiu.png");
/* harmony import */ var _images_daoqi_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/daoqi.png */ "./src/pages/home/images/daoqi.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__);







var _dec, _class;



























var Home = (_dec = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(function (state) {
  return {
    headImageUrl: state.in.headImageUrl,
    nicknameFlag: state.in.nicknameFlag,
    mobileFlag: state.in.mobileFlag
  };
}, function (dispatch) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_3__.bindActionCreators)({
    addName: _in_redux__WEBPACK_IMPORTED_MODULE_4__.addName
  }, dispatch);
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_24__["default"])(Home, _React$Component);
  var _super = (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_25__["default"])(Home);
  function Home(props) {
    var _this;
    (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_26__["default"])(this, Home);
    _this = _super.call(this, props);
    _this.state = {
      isOpened: false
    };
    _this.getUserInfo = _this.getUserInfo.bind((0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_27__["default"])(_this));
    _this.handleClose = _this.handleClose.bind((0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_27__["default"])(_this));
    return _this;
  }
  (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_28__["default"])(Home, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var that = this;
      if (!this.props.nicknameFlag) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getUserProfile({
          desc: '用于完善资料',
          // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: function () {
            var _success = (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_29__["default"])( /*#__PURE__*/(0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_30__["default"])().mark(function _callee(res) {
              return (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_30__["default"])().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return that.props.addName({
                        headImageUrl: res.userInfo.avatarUrl,
                        nickName: res.userInfo.nickName
                      });
                    case 2:
                      !that.props.mobileFlag && that.setState({
                        isOpened: true
                      });
                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
            function success(_x) {
              return _success.apply(this, arguments);
            }
            return success;
          }(),
          fail: function fail(res) {
            console.log(res, '-----');
          }
        });
        return;
      }
      if (!this.props.mobileFlag) {
        that.setState({
          isOpened: true
        });
      }
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        isOpened: false
      });
    }
  }, {
    key: "jumpUrl",
    value: function jumpUrl(url) {
      if (this.props.mobileFlag && this.props.nicknameFlag) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
          url: url
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
          className: "container",
          onClick: this.getUserInfo,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
            className: "container-bg",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
              className: "msg",
              src: _images_bg_msg_png__WEBPACK_IMPORTED_MODULE_6__
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
              className: "msg-tips",
              children: "\u667A\u6167\u516C\u5BD3\u79DF\u623F\u7BA1\u7406\u670D\u52A1\u5DE5\u5177"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
            className: "content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
              className: "content-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                className: "item",
                onClick: function onClick() {
                  return _this2.jumpUrl('/pages/moduleA/pages/house/index');
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                  className: "item-bg",
                  src: _images_fwgl_png__WEBPACK_IMPORTED_MODULE_7__
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                  className: "item-msg-box",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                    className: "item-title",
                    children: "\u623F\u5C4B\u7BA1\u7406"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                    className: "item-dsc",
                    children: "\u7BA1\u7406\u6240\u6709\u7684\u623F\u95F4"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                className: "item",
                onClick: function onClick() {
                  return _this2.jumpUrl('/pages/moduleA/pages/tenant/index');
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                  className: "item-bg",
                  src: _images_zkgl_png__WEBPACK_IMPORTED_MODULE_8__
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                  className: "item-msg-box",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                    className: "item-title",
                    children: "\u79DF\u5BA2\u7BA1\u7406"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                    className: "item-dsc",
                    children: "\u7BA1\u7406\u6240\u6709\u7684\u79DF\u5BA2"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                className: "item",
                onClick: function onClick() {
                  return _this2.jumpUrl('/pages/moduleA/pages/meterReading/index');
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                  className: "item-bg",
                  src: _images_sdcb_png__WEBPACK_IMPORTED_MODULE_9__
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                  className: "item-msg-box",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                    className: "item-title",
                    children: "\u6C34\u7535\u6284\u8868"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                    className: "item-dsc",
                    children: "\u96C6\u4E2D\u6284\u8868 \u4E00\u952E\u53D1\u9001"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                className: "item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                  className: "item-bg",
                  src: _images_qftz_png__WEBPACK_IMPORTED_MODULE_10__
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                  className: "item-msg-box",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                    className: "item-title",
                    children: "\u7FA4\u53D1\u901A\u77E5"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                    className: "item-dsc",
                    children: "\u7FA4\u53D1\u901A\u77E5 \u65B9\u4FBF\u7701\u5FC3"
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
              className: "notice-box",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                  className: "notice-img",
                  src: _images_notice_png__WEBPACK_IMPORTED_MODULE_11__
                }), "\u7CFB\u7EDF\u901A\u77E5\u2026", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                  className: "notice-link",
                  children: "\u8BE6\u60C5"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
              className: "banner-box",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                src: _images_banner_png__WEBPACK_IMPORTED_MODULE_12__,
                className: "banner"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
              className: "reminders",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                className: "title",
                children: "\u63D0\u9192\u4E8B\u9879"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                className: "box",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                  className: "item",
                  onClick: function onClick() {
                    return _this2.jumpUrl('/pages/moduleA/pages/bill/index');
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                    className: "bg",
                    src: _images_daoqi_png__WEBPACK_IMPORTED_MODULE_22__
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                    className: "tips",
                    children: "\u5230\u671F\u8D26\u5355"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                  className: "item",
                  onClick: function onClick() {
                    return _this2.jumpUrl('/pages/moduleA/pages/bill/index');
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                    className: "bg",
                    src: _images_yuqi_png__WEBPACK_IMPORTED_MODULE_16__
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                    className: "tips",
                    children: "\u903E\u671F\u8D26\u5355"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                  className: "item",
                  onClick: function onClick() {
                    return _this2.jumpUrl('/pages/moduleA/pages/vacantRoom/index');
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                    className: "bg",
                    src: _images_kf_png__WEBPACK_IMPORTED_MODULE_18__
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                    className: "tips",
                    children: "\u7A7A\u623F\u6C47\u603B"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                  className: "item",
                  onClick: function onClick() {
                    return _this2.jumpUrl('/pages/moduleA/pages/waitElectric/index');
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                    className: "bg",
                    src: _images_daichao_png__WEBPACK_IMPORTED_MODULE_19__
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                    className: "tips",
                    children: "\u5F85\u6284\u6C34\u7535"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                  className: "item",
                  onClick: function onClick() {
                    return _this2.jumpUrl('/pages/moduleA/pages/houseExpires/index');
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                    className: "bg",
                    src: _images_dq_png__WEBPACK_IMPORTED_MODULE_17__
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                    className: "tips",
                    children: "\u79DF\u671F\u5230\u671F"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                  className: "item",
                  onClick: function onClick() {
                    return _this2.jumpUrl('/pages/moduleA/pages/confirmReceipt/index');
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                    className: "bg",
                    src: _images_queren_png__WEBPACK_IMPORTED_MODULE_20__
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                    className: "tips",
                    children: "\u5F85\u786E\u8BA4\u6536\u6B3E"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                  className: "item",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                    className: "bg",
                    src: _images_zukebaoxiu_png__WEBPACK_IMPORTED_MODULE_21__
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                    className: "tips",
                    children: "\u79DF\u5BA2\u62A5\u4FEE"
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
              className: "reminders tools",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                className: "title",
                children: "\u62DB\u79DF\u5DE5\u5177"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                className: "tools-box",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                  className: "tools-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                    className: "tools-img",
                    src: _images_fb_png__WEBPACK_IMPORTED_MODULE_13__
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                  className: "tools-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                    className: "tools-img",
                    src: _images_zz_png__WEBPACK_IMPORTED_MODULE_14__
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                  className: "tools-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.Image, {
                    className: "tools-img",
                    src: _images_gb_png__WEBPACK_IMPORTED_MODULE_15__
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
              className: "reminders todo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                className: "title",
                children: "\u5F85\u529E\u4E8B\u9879"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_31__.View, {
                className: "todo-box"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_phoneModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
          isOpened: this.state.isOpened,
          handleClose: this.handleClose
        })]
      });
    }
  }]);
  return Home;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component))) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/home/components/phoneModal.tsx":
/*!**************************************************!*\
  !*** ./src/pages/home/components/phoneModal.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/container/remote/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "webpack/container/remote/redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _in_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../in/redux */ "./src/pages/in/redux.ts");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var taro_ui_dist_style_components_modal_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! taro-ui/dist/style/components/modal.scss */ "./node_modules/taro-ui/dist/style/components/modal.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







var _dec, _class;







var PModal = (_dec = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {};
}, function (dispatch) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_2__.bindActionCreators)({
    addPhone: _in_redux__WEBPACK_IMPORTED_MODULE_3__.addPhone
  }, dispatch);
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_7__["default"])(PModal, _React$Component);
  var _super = (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_8__["default"])(PModal);
  function PModal(props) {
    var _this;
    (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this, PModal);
    _this = _super.call(this, props);
    _this.getPhoneNumber = _this.getPhoneNumber.bind((0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    return _this;
  }
  (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__["default"])(PModal, [{
    key: "getPhoneNumber",
    value: function () {
      var _getPhoneNumber = (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])( /*#__PURE__*/(0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_13__["default"])().mark(function _callee(e) {
        return (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_13__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(e);
                _context.next = 3;
                return this.props.addPhone({
                  code: e.detail.code,
                  encryptedData: e.detail.encryptedData
                });
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function getPhoneNumber(_x) {
        return _getPhoneNumber.apply(this, arguments);
      }
      return getPhoneNumber;
    }()
  }, {
    key: "render",
    value: function render() {
      return this.props.isOpened && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_4__.AtActionSheet, {
        isOpened: true,
        cancelText: "\u53D6\u6D88",
        title: "\u7533\u8BF7\u83B7\u53D6\u60A8\u7684\u624B\u673A\u53F7"
        // onCancel={this.handleCancel}
        ,
        onClose: this.props.handleClose,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_4__.AtButton, {
          customStyle: {
            border: 'none'
          },
          onClick: this.props.handleClose,
          openType: "getPhoneNumber",
          onGetPhoneNumber: this.getPhoneNumber,
          children: "\u786E\u5B9A"
        })
      });
    }
  }]);
  return PModal;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component))) || _class);
/* harmony default export */ __webpack_exports__["default"] = (PModal);

/***/ }),

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_webpack5_runner_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/home/index.tsx");


var config = {"navigationBarTitleText":"安心租-首页"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_webpack5_runner_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/home/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/modal.scss":
/*!***************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/modal.scss ***!
  \***************************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/home/images/banner.png":
/*!******************************************!*\
  !*** ./src/pages/home/images/banner.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/banner.png";

/***/ }),

/***/ "./src/pages/home/images/bg_msg.png":
/*!******************************************!*\
  !*** ./src/pages/home/images/bg_msg.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/bg_msg.png";

/***/ }),

/***/ "./src/pages/home/images/daichao.png":
/*!*******************************************!*\
  !*** ./src/pages/home/images/daichao.png ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/daichao.png";

/***/ }),

/***/ "./src/pages/home/images/daoqi.png":
/*!*****************************************!*\
  !*** ./src/pages/home/images/daoqi.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/daoqi.png";

/***/ }),

/***/ "./src/pages/home/images/dq.png":
/*!**************************************!*\
  !*** ./src/pages/home/images/dq.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/dq.png";

/***/ }),

/***/ "./src/pages/home/images/fwgl.png":
/*!****************************************!*\
  !*** ./src/pages/home/images/fwgl.png ***!
  \****************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAACKCAMAAACEueHGAAAAAXNSR0IArs4c6QAAAD9QTFRFAAAAAP//AL//AP//AOr/AOv/AO7/AO//APD/APP/AOz/AOX/AOb/AOj/AOn/AOr/AOr/AOv/M73TQrDF6/L0y6dK/wAAABR0Uk5TAAMEBQwNDxARFRseHyEjJCUmRmEZQvZsAAABTElEQVR42u3YOQ6DUAxFUWb4JECm/a81qanS8KA4dwlHlmW5qvbVfZmX9fHUIe21xxuTHHhTNiJB8Al3Ery900iCd8Y7Cj44S6LgA4koeGe+o+Ct/Z0Fd59kwScMUfDGQsmCFwpR8NqAZ8FHCFlw/9gseM0gC94zyIK7UcLgM4Ms+MIgC74yyIJ7zIbBEQAHLuDABRz49fr8HXDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDP7vXpQIOHDhw4MCBAwcOHDhw4MCBAwcOHDhw4MCBAwcOHDhw4MCBAwcOHDhw4MCBAwcO/FzwdzDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDB67jAg4cuIADF3Dg+vUFsyFqP+JJJrAAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/pages/home/images/gb.png":
/*!**************************************!*\
  !*** ./src/pages/home/images/gb.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/gb.png";

/***/ }),

/***/ "./src/pages/home/images/kf.png":
/*!**************************************!*\
  !*** ./src/pages/home/images/kf.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/kf.png";

/***/ }),

/***/ "./src/pages/home/images/notice.png":
/*!******************************************!*\
  !*** ./src/pages/home/images/notice.png ***!
  \******************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAAAXNSR0IArs4c6QAAA2VJREFUSEutlkFoXFUUhv9z7psmM7boIkIFKzY7F+rGbsskk41QpGBSbNUWRUPBCqY0ESuG7ho3BVdC3YjboAvBhU3LxBbMQnBXdFHUtgu1NV0YqbHz7vnl3vdeZqZ5mUlHZ3Nn3nv3f//9zzfnXsE2P/W5u48nUtWLH8qN7UyR7TxUn7l3TBWnoUjp7KPmwvD5fvO2JTw201oS5ROZMH5rLuxoDC58hjq26g+K2iQU+6AwJEijuNp3qODL5tWhr7AovuwlpY73v8G9lSQ9T5Wn4JDCmadDKhq+02fXYizXvOL9yx9Uf75ffJPwxDSfNtoXSLATSp/n6iWI5cIWXuIsu6dYE+hMc37oaqd4l3B9miOa2hUkGIEyuMrcqeVj5piOXpy0mF33cLL6T6X15rezu24V4l3C46/5T6CYLJZaOM6X7SVkLPQh60xUw0sLA5eb71bnNwlPvM5Rkt9TSDimcbIgiyDP2Ry9xjhivp4aIkGWv0PqTKYvvjf8UxDfcNw4xnkKT0XRsLyiUHHcHEV8LuInMZ4gbGKffzP30MddwuNH7VLEqp2pDzmHibFQHcXbiCLjOrrO719rzlaPdzs+yhtUewTBQcgvCWNGRRFF5DhknEeR39vAD4r15mz1QIcwpfEq1+hg+RJ9e+zBcUFLkbOaX3d3Dq6c3PN3zHhqim51mGttGrodh0JtxXHmPi+ymmet9uLyW/JXiXBRvAfhOI+rXNgKxx2ZtTOOrntwHIoY2JYtHYeCDcixlQnfqfJPasBmcI4DTT0y3ugNA3B8n/DEFB+2Yf6auf0vHJtPW/bKldO7bkcqGi9zksrPMtziX3VgjlHhueY7O7+WiSMcpWCJysf+D47h5A8B5mT8MH8Q5WhWuNxxbEKDcRz/MGo3pfESr8Nhd9602809Np0H51izHv27NA7zGQgO0JlQYZLAKDBNYCZGSWjxeiX7rQozhWmFZg4mAoYeIw4WRor34txK7+3/DLV+CzXgNnbUHmXnnnbh+uI6Fg+V7tBdbbNsC68f55NS8ctl/dg8jiyfHfpxq/NF3wPL2NutJXGyN+4iea+g482RZ4deWDxUfqbo6zg8UD9x7zlJ8CkcKuFcQeW6qj9x6WxtpddpqK/jMHn/ybt7nCTPwxmovLC8UP2l3xHrX0heANIvA83AAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/pages/home/images/qftz.png":
/*!****************************************!*\
  !*** ./src/pages/home/images/qftz.png ***!
  \****************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAACMAgMAAAAcpcpHAAAAAXNSR0IArs4c6QAAAAxQTFRFqc7/ttX/yeD/zuP/Js2YmAAAAGNJREFUaN7t2rENgDAMAEGP6CZLZjpqmqRLGShAAut+gJvgY7zYEXQ6nU6n0+l0emH97Cs6nU6n0+l0Op3+Mb1dl3Q6nU6n0+l0ekU9YxOdTqfT6XQ6nU6n03+p38jRRac/pk9RsYzlYB8BcgAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/pages/home/images/queren.png":
/*!******************************************!*\
  !*** ./src/pages/home/images/queren.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/queren.png";

/***/ }),

/***/ "./src/pages/home/images/sdcb.png":
/*!****************************************!*\
  !*** ./src/pages/home/images/sdcb.png ***!
  \****************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAACMAgMAAAAYUBp6AAAAAXNSR0IArs4c6QAAAAxQTFRFw+jw2vH45fb77/n6kCIwwQAAAFtJREFUaN7tzLENQBEUAMC3pBE1RtTQ/fKTCCG5G+CibBRyuVwul8vlcvnbeftUuVwul8vlcrlcfjbPaUwul8vlcrlcLn80jx9yuVwul8vlcrlcLr8snyGXyxd1NnRy2jbCQHYAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/pages/home/images/yuqi.png":
/*!****************************************!*\
  !*** ./src/pages/home/images/yuqi.png ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/yuqi.png";

/***/ }),

/***/ "./src/pages/home/images/zkgl.png":
/*!****************************************!*\
  !*** ./src/pages/home/images/zkgl.png ***!
  \****************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAACMCAMAAABWFdLmAAAAAXNSR0IArs4c6QAAAGBQTFRFAAAAzMz/4/H/3Oj/4Ov/3Or/1ur/2en/2ej/2un/2+r/2un/2+n/2ur/2en/2uj/2ef/2ej/2ej/2ej/2ej/2ej/2ej/2ej/2ej/2un/w9LwxNPx0+H12OX32ej/7/T717RSEgAAABp0Uk5TAAUSFhkkJVBXZmt1jY+2yM7b6/Hz9Pj8/v60zef/AAABUUlEQVR42u3X2Q3CUAxFQfadQICEHfrvkgL4iZDeFYg5JYwsy+49VKh2V1fr2bD3FpqynTaLAfJ0zWqEPN1h2UeebjtGnm4/RZ7uOEee7jxHHp/zKfL4Pp8gj98tfeTplsjjP9EIeboV8nTNAHm6BfJ0G+TpTkPk6WbI062Rp6uQp6uRp9shT9cij4ccOXIhRy7kZXp2Djly5MiRIxdy5MiRI0eOHDlyIUeOHDly5MiRI0eOHLmQI0eOHDly5MiRCzly5MiRf2/3D7oVCzly5MiRI0eOHDly5MiRI0eOHDly5MiRI0eOHDly5MiRI0eOHDly5MiRI0eOHDny3yW/vnUpFnLkyJEjR44cOXLkyLuSlws5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cnUJOXLkQo5cyJELOfI/7AWBDFpcbzRBdwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/pages/home/images/zukebaoxiu.png":
/*!**********************************************!*\
  !*** ./src/pages/home/images/zukebaoxiu.png ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/zukebaoxiu.png";

/***/ }),

/***/ "./src/pages/home/images/zz.png":
/*!**************************************!*\
  !*** ./src/pages/home/images/zz.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/zz.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/home/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map