(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/home/index.tsx":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/home/index.tsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _in_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../in/redux */ "./src/pages/in/redux.ts");
/* harmony import */ var _components_phoneModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/phoneModal */ "./src/pages/home/components/phoneModal.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index.less */ "./src/pages/home/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_bg_msg_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/bg_msg.png */ "./src/pages/home/images/bg_msg.png");
/* harmony import */ var _images_bg_msg_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_bg_msg_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _images_fwgl_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/fwgl.png */ "./src/pages/home/images/fwgl.png");
/* harmony import */ var _images_fwgl_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_images_fwgl_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _images_zkgl_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/zkgl.png */ "./src/pages/home/images/zkgl.png");
/* harmony import */ var _images_zkgl_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_images_zkgl_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _images_sdcb_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/sdcb.png */ "./src/pages/home/images/sdcb.png");
/* harmony import */ var _images_sdcb_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_images_sdcb_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _images_qftz_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/qftz.png */ "./src/pages/home/images/qftz.png");
/* harmony import */ var _images_qftz_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_images_qftz_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _images_notice_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/notice.png */ "./src/pages/home/images/notice.png");
/* harmony import */ var _images_notice_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_images_notice_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _images_banner_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/banner.png */ "./src/pages/home/images/banner.png");
/* harmony import */ var _images_banner_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_images_banner_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _images_fb_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/fb.png */ "./src/pages/home/images/fb.png");
/* harmony import */ var _images_fb_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_images_fb_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _images_zz_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/zz.png */ "./src/pages/home/images/zz.png");
/* harmony import */ var _images_zz_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_images_zz_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _images_gb_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/gb.png */ "./src/pages/home/images/gb.png");
/* harmony import */ var _images_gb_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_images_gb_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _images_yuqi_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/yuqi.png */ "./src/pages/home/images/yuqi.png");
/* harmony import */ var _images_yuqi_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_images_yuqi_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _images_dq_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./images/dq.png */ "./src/pages/home/images/dq.png");
/* harmony import */ var _images_dq_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_images_dq_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _images_kf_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./images/kf.png */ "./src/pages/home/images/kf.png");
/* harmony import */ var _images_kf_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_images_kf_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _images_daichao_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./images/daichao.png */ "./src/pages/home/images/daichao.png");
/* harmony import */ var _images_daichao_png__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_images_daichao_png__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _images_queren_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./images/queren.png */ "./src/pages/home/images/queren.png");
/* harmony import */ var _images_queren_png__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_images_queren_png__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _images_zukebaoxiu_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./images/zukebaoxiu.png */ "./src/pages/home/images/zukebaoxiu.png");
/* harmony import */ var _images_zukebaoxiu_png__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_images_zukebaoxiu_png__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _images_daoqi_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./images/daoqi.png */ "./src/pages/home/images/daoqi.png");
/* harmony import */ var _images_daoqi_png__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_images_daoqi_png__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__);







var _dec, _class;



























var Home = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__[/* connect */ "b"])(function (state) {
  return {
    headImageUrl: state.in.headImageUrl,
    nicknameFlag: state.in.nicknameFlag,
    mobileFlag: state.in.mobileFlag
  };
}, function (dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_11__[/* bindActionCreators */ "b"])({
    addName: _in_redux__WEBPACK_IMPORTED_MODULE_12__["addName"]
  }, dispatch);
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Home, _React$Component);
  var _super = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Home);
  function Home(props) {
    var _this;
    Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Home);
    _this = _super.call(this, props);
    _this.state = {
      isOpened: false
    };
    _this.getUserInfo = _this.getUserInfo.bind(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.handleClose = _this.handleClose.bind(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Home, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var that = this;
      if (!this.props.nicknameFlag) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getUserProfile({
          desc: '用于完善资料',
          // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: function () {
            var _success = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee(res) {
              return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
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
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
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
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
          className: "container",
          onClick: this.getUserInfo,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "container-bg",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
              className: "msg",
              src: _images_bg_msg_png__WEBPACK_IMPORTED_MODULE_15___default.a
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              className: "msg-tips",
              children: "\u667A\u6167\u516C\u5BD3\u79DF\u623F\u7BA1\u7406\u670D\u52A1\u5DE5\u5177"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "content",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              className: "content-list",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "item",
                onClick: function onClick() {
                  return _this2.jumpUrl('/pages/moduleA/pages/house/index');
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                  className: "item-bg",
                  src: _images_fwgl_png__WEBPACK_IMPORTED_MODULE_16___default.a
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item-msg-box",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-title",
                    children: "\u623F\u5C4B\u7BA1\u7406"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-dsc",
                    children: "\u7BA1\u7406\u6240\u6709\u7684\u623F\u95F4"
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "item",
                onClick: function onClick() {
                  return _this2.jumpUrl('/pages/moduleA/pages/tenant/index');
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                  className: "item-bg",
                  src: _images_zkgl_png__WEBPACK_IMPORTED_MODULE_17___default.a
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item-msg-box",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-title",
                    children: "\u79DF\u5BA2\u7BA1\u7406"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-dsc",
                    children: "\u7BA1\u7406\u6240\u6709\u7684\u79DF\u5BA2"
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "item",
                onClick: function onClick() {
                  return _this2.jumpUrl('/pages/moduleA/pages/meterReading/index');
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                  className: "item-bg",
                  src: _images_sdcb_png__WEBPACK_IMPORTED_MODULE_18___default.a
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item-msg-box",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-title",
                    children: "\u6C34\u7535\u6284\u8868"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-dsc",
                    children: "\u96C6\u4E2D\u6284\u8868 \u4E00\u952E\u53D1\u9001"
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "item",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                  className: "item-bg",
                  src: _images_qftz_png__WEBPACK_IMPORTED_MODULE_19___default.a
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item-msg-box",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-title",
                    children: "\u7FA4\u53D1\u901A\u77E5"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-dsc",
                    children: "\u7FA4\u53D1\u901A\u77E5 \u65B9\u4FBF\u7701\u5FC3"
                  })]
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              className: "notice-box",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                  className: "notice-img",
                  src: _images_notice_png__WEBPACK_IMPORTED_MODULE_20___default.a
                }), "\u7CFB\u7EDF\u901A\u77E5\u2026", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "notice-link",
                  children: "\u8BE6\u60C5"
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              className: "banner-box",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                src: _images_banner_png__WEBPACK_IMPORTED_MODULE_21___default.a,
                className: "banner"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              className: "reminders",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "title",
                children: "\u63D0\u9192\u4E8B\u9879"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "box",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item",
                  onClick: function onClick() {
                    return _this2.jumpUrl('/pages/moduleA/pages/bill/index');
                  },
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "bg",
                    src: _images_daoqi_png__WEBPACK_IMPORTED_MODULE_31___default.a
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "tips",
                    children: "\u5230\u671F\u8D26\u5355"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item",
                  onClick: function onClick() {
                    return _this2.jumpUrl('/pages/moduleA/pages/bill/index');
                  },
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "bg",
                    src: _images_yuqi_png__WEBPACK_IMPORTED_MODULE_25___default.a
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "tips",
                    children: "\u903E\u671F\u8D26\u5355"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item",
                  onClick: function onClick() {
                    return _this2.jumpUrl('/pages/moduleA/pages/vacantRoom/index');
                  },
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "bg",
                    src: _images_kf_png__WEBPACK_IMPORTED_MODULE_27___default.a
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "tips",
                    children: "\u7A7A\u623F\u6C47\u603B"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item",
                  onClick: function onClick() {
                    return _this2.jumpUrl('/pages/moduleA/pages/waitElectric/index');
                  },
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "bg",
                    src: _images_daichao_png__WEBPACK_IMPORTED_MODULE_28___default.a
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "tips",
                    children: "\u5F85\u6284\u6C34\u7535"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item",
                  onClick: function onClick() {
                    return _this2.jumpUrl('/pages/moduleA/pages/houseExpires/index');
                  },
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "bg",
                    src: _images_dq_png__WEBPACK_IMPORTED_MODULE_26___default.a
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "tips",
                    children: "\u79DF\u671F\u5230\u671F"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item",
                  onClick: function onClick() {
                    return _this2.jumpUrl('/pages/moduleA/pages/confirmReceipt/index');
                  },
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "bg",
                    src: _images_queren_png__WEBPACK_IMPORTED_MODULE_29___default.a
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "tips",
                    children: "\u5F85\u786E\u8BA4\u6536\u6B3E"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "bg",
                    src: _images_zukebaoxiu_png__WEBPACK_IMPORTED_MODULE_30___default.a
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "tips",
                    children: "\u79DF\u5BA2\u62A5\u4FEE"
                  })]
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              className: "reminders tools",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "title",
                children: "\u62DB\u79DF\u5DE5\u5177"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "tools-box",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "tools-item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "tools-img",
                    src: _images_fb_png__WEBPACK_IMPORTED_MODULE_22___default.a
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "tools-item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "tools-img",
                    src: _images_zz_png__WEBPACK_IMPORTED_MODULE_23___default.a
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "tools-item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "tools-img",
                    src: _images_gb_png__WEBPACK_IMPORTED_MODULE_24___default.a
                  })
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              className: "reminders todo",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "title",
                children: "\u5F85\u529E\u4E8B\u9879"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "todo-box"
              })]
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__["jsx"])(_components_phoneModal__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
          isOpened: this.state.isOpened,
          handleClose: this.handleClose
        })]
      });
    }
  }]);
  return Home;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component)) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/modal.scss":
/*!***************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/modal.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/home/components/phoneModal.tsx":
/*!**************************************************!*\
  !*** ./src/pages/home/components/phoneModal.tsx ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _in_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../in/redux */ "./src/pages/in/redux.ts");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var taro_ui_dist_style_components_modal_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! taro-ui/dist/style/components/modal.scss */ "./node_modules/taro-ui/dist/style/components/modal.scss");
/* harmony import */ var taro_ui_dist_style_components_modal_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_modal_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);







var _dec, _class;







var PModal = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[/* connect */ "b"])(function (state) {
  return {};
}, function (dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_9__[/* bindActionCreators */ "b"])({
    addPhone: _in_redux__WEBPACK_IMPORTED_MODULE_10__["addPhone"]
  }, dispatch);
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(PModal, _React$Component);
  var _super = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(PModal);
  function PModal(props) {
    var _this;
    Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, PModal);
    _this = _super.call(this, props);
    _this.getPhoneNumber = _this.getPhoneNumber.bind(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(PModal, [{
    key: "getPhoneNumber",
    value: function () {
      var _getPhoneNumber = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee(e) {
        return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
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
      return this.props.isOpened && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_11__[/* AtActionSheet */ "a"], {
        isOpened: true,
        cancelText: "\u53D6\u6D88",
        title: "\u7533\u8BF7\u83B7\u53D6\u60A8\u7684\u624B\u673A\u53F7"
        // onCancel={this.handleCancel}
        ,
        onClose: this.props.handleClose,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_11__[/* AtButton */ "b"], {
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
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component)) || _class);
/* harmony default export */ __webpack_exports__["a"] = (PModal);

/***/ }),

/***/ "./src/pages/home/images/banner.png":
/*!******************************************!*\
  !*** ./src/pages/home/images/banner.png ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/banner.png";

/***/ }),

/***/ "./src/pages/home/images/bg_msg.png":
/*!******************************************!*\
  !*** ./src/pages/home/images/bg_msg.png ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/bg_msg.png";

/***/ }),

/***/ "./src/pages/home/images/daichao.png":
/*!*******************************************!*\
  !*** ./src/pages/home/images/daichao.png ***!
  \*******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/daichao.png";

/***/ }),

/***/ "./src/pages/home/images/daoqi.png":
/*!*****************************************!*\
  !*** ./src/pages/home/images/daoqi.png ***!
  \*****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/daoqi.png";

/***/ }),

/***/ "./src/pages/home/images/dq.png":
/*!**************************************!*\
  !*** ./src/pages/home/images/dq.png ***!
  \**************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/dq.png";

/***/ }),

/***/ "./src/pages/home/images/fwgl.png":
/*!****************************************!*\
  !*** ./src/pages/home/images/fwgl.png ***!
  \****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAACKCAMAAACEueHGAAAAAXNSR0IArs4c6QAAAD9QTFRFAAAAAP//AL//AP//AOr/AOv/AO7/AO//APD/APP/AOz/AOX/AOb/AOj/AOn/AOr/AOr/AOv/M73TQrDF6/L0y6dK/wAAABR0Uk5TAAMEBQwNDxARFRseHyEjJCUmRmEZQvZsAAABTElEQVR42u3YOQ6DUAxFUWb4JECm/a81qanS8KA4dwlHlmW5qvbVfZmX9fHUIe21xxuTHHhTNiJB8Al3Ery900iCd8Y7Cj44S6LgA4koeGe+o+Ct/Z0Fd59kwScMUfDGQsmCFwpR8NqAZ8FHCFlw/9gseM0gC94zyIK7UcLgM4Ms+MIgC74yyIJ7zIbBEQAHLuDABRz49fr8HXDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDP7vXpQIOHDhw4MCBAwcOHDhw4MCBAwcOHDhw4MCBAwcOHDhw4MCBAwcOHDhw4MCBAwcO/FzwdzDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDBw4cOHDgwIEDB67jAg4cuIADF3Dg+vUFsyFqP+JJJrAAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/pages/home/images/gb.png":
/*!**************************************!*\
  !*** ./src/pages/home/images/gb.png ***!
  \**************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/gb.png";

/***/ }),

/***/ "./src/pages/home/images/kf.png":
/*!**************************************!*\
  !*** ./src/pages/home/images/kf.png ***!
  \**************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/kf.png";

/***/ }),

/***/ "./src/pages/home/images/notice.png":
/*!******************************************!*\
  !*** ./src/pages/home/images/notice.png ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAAAXNSR0IArs4c6QAAA2VJREFUSEutlkFoXFUUhv9z7psmM7boIkIFKzY7F+rGbsskk41QpGBSbNUWRUPBCqY0ESuG7ho3BVdC3YjboAvBhU3LxBbMQnBXdFHUtgu1NV0YqbHz7vnl3vdeZqZ5mUlHZ3Nn3nv3f//9zzfnXsE2P/W5u48nUtWLH8qN7UyR7TxUn7l3TBWnoUjp7KPmwvD5fvO2JTw201oS5ROZMH5rLuxoDC58hjq26g+K2iQU+6AwJEijuNp3qODL5tWhr7AovuwlpY73v8G9lSQ9T5Wn4JDCmadDKhq+02fXYizXvOL9yx9Uf75ffJPwxDSfNtoXSLATSp/n6iWI5cIWXuIsu6dYE+hMc37oaqd4l3B9miOa2hUkGIEyuMrcqeVj5piOXpy0mF33cLL6T6X15rezu24V4l3C46/5T6CYLJZaOM6X7SVkLPQh60xUw0sLA5eb71bnNwlPvM5Rkt9TSDimcbIgiyDP2Ry9xjhivp4aIkGWv0PqTKYvvjf8UxDfcNw4xnkKT0XRsLyiUHHcHEV8LuInMZ4gbGKffzP30MddwuNH7VLEqp2pDzmHibFQHcXbiCLjOrrO719rzlaPdzs+yhtUewTBQcgvCWNGRRFF5DhknEeR39vAD4r15mz1QIcwpfEq1+hg+RJ9e+zBcUFLkbOaX3d3Dq6c3PN3zHhqim51mGttGrodh0JtxXHmPi+ymmet9uLyW/JXiXBRvAfhOI+rXNgKxx2ZtTOOrntwHIoY2JYtHYeCDcixlQnfqfJPasBmcI4DTT0y3ugNA3B8n/DEFB+2Yf6auf0vHJtPW/bKldO7bkcqGi9zksrPMtziX3VgjlHhueY7O7+WiSMcpWCJysf+D47h5A8B5mT8MH8Q5WhWuNxxbEKDcRz/MGo3pfESr8Nhd9602809Np0H51izHv27NA7zGQgO0JlQYZLAKDBNYCZGSWjxeiX7rQozhWmFZg4mAoYeIw4WRor34txK7+3/DLV+CzXgNnbUHmXnnnbh+uI6Fg+V7tBdbbNsC68f55NS8ctl/dg8jiyfHfpxq/NF3wPL2NutJXGyN+4iea+g482RZ4deWDxUfqbo6zg8UD9x7zlJ8CkcKuFcQeW6qj9x6WxtpddpqK/jMHn/ybt7nCTPwxmovLC8UP2l3xHrX0heANIvA83AAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/pages/home/images/qftz.png":
/*!****************************************!*\
  !*** ./src/pages/home/images/qftz.png ***!
  \****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAACMAgMAAAAcpcpHAAAAAXNSR0IArs4c6QAAAAxQTFRFqc7/ttX/yeD/zuP/Js2YmAAAAGNJREFUaN7t2rENgDAMAEGP6CZLZjpqmqRLGShAAut+gJvgY7zYEXQ6nU6n0+l0emH97Cs6nU6n0+l0Op3+Mb1dl3Q6nU6n0+l0ekU9YxOdTqfT6XQ6nU6n03+p38jRRac/pk9RsYzlYB8BcgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/pages/home/images/queren.png":
/*!******************************************!*\
  !*** ./src/pages/home/images/queren.png ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/queren.png";

/***/ }),

/***/ "./src/pages/home/images/sdcb.png":
/*!****************************************!*\
  !*** ./src/pages/home/images/sdcb.png ***!
  \****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAACMAgMAAAAYUBp6AAAAAXNSR0IArs4c6QAAAAxQTFRFw+jw2vH45fb77/n6kCIwwQAAAFtJREFUaN7tzLENQBEUAMC3pBE1RtTQ/fKTCCG5G+CibBRyuVwul8vlcvnbeftUuVwul8vlcrlcfjbPaUwul8vlcrlcLn80jx9yuVwul8vlcrlcLr8snyGXyxd1NnRy2jbCQHYAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/pages/home/images/yuqi.png":
/*!****************************************!*\
  !*** ./src/pages/home/images/yuqi.png ***!
  \****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/yuqi.png";

/***/ }),

/***/ "./src/pages/home/images/zkgl.png":
/*!****************************************!*\
  !*** ./src/pages/home/images/zkgl.png ***!
  \****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAACMCAMAAABWFdLmAAAAAXNSR0IArs4c6QAAAGBQTFRFAAAAzMz/4/H/3Oj/4Ov/3Or/1ur/2en/2ej/2un/2+r/2un/2+n/2ur/2en/2uj/2ef/2ej/2ej/2ej/2ej/2ej/2ej/2ej/2ej/2un/w9LwxNPx0+H12OX32ej/7/T717RSEgAAABp0Uk5TAAUSFhkkJVBXZmt1jY+2yM7b6/Hz9Pj8/v60zef/AAABUUlEQVR42u3X2Q3CUAxFQfadQICEHfrvkgL4iZDeFYg5JYwsy+49VKh2V1fr2bD3FpqynTaLAfJ0zWqEPN1h2UeebjtGnm4/RZ7uOEee7jxHHp/zKfL4Pp8gj98tfeTplsjjP9EIeboV8nTNAHm6BfJ0G+TpTkPk6WbI062Rp6uQp6uRp9shT9cij4ccOXIhRy7kZXp2Djly5MiRIxdy5MiRI0eOHDlyIUeOHDly5MiRI0eOHLmQI0eOHDly5MiRCzly5MiRf2/3D7oVCzly5MiRI0eOHDly5MiRI0eOHDly5MiRI0eOHDly5MiRI0eOHDly5MiRI0eOHDny3yW/vnUpFnLkyJEjR44cOXLkyLuSlws5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cnUJOXLkQo5cyJELOfI/7AWBDFpcbzRBdwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/pages/home/images/zukebaoxiu.png":
/*!**********************************************!*\
  !*** ./src/pages/home/images/zukebaoxiu.png ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/zukebaoxiu.png";

/***/ }),

/***/ "./src/pages/home/images/zz.png":
/*!**************************************!*\
  !*** ./src/pages/home/images/zz.png ***!
  \**************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/zz.png";

/***/ }),

/***/ "./src/pages/home/index.less":
/*!***********************************!*\
  !*** ./src/pages/home/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/home/index.tsx");


var config = {"navigationBarTitleText":"安心租-首页"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/home/index', {root:{cn:[]}}, config || {}))




/***/ })

},[["./src/pages/home/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map