(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/home/index.jsx":
/*!******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/home/index.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _in_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../in/redux */ "./src/pages/in/redux.ts");
/* harmony import */ var _components_phoneModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/phoneModal */ "./src/pages/home/components/phoneModal.jsx");
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
/* harmony import */ var _assets_images_shequ_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../assets/images/shequ.png */ "./src/assets/images/shequ.png");
/* harmony import */ var _assets_images_shequ_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_images_shequ_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _images_fb_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/fb.png */ "./src/pages/home/images/fb.png");
/* harmony import */ var _images_fb_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_images_fb_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _images_zz_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/zz.png */ "./src/pages/home/images/zz.png");
/* harmony import */ var _images_zz_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_images_zz_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _images_gb_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/gb.png */ "./src/pages/home/images/gb.png");
/* harmony import */ var _images_gb_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_images_gb_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__);







var _dec, _class;






















var Home = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__[/* connect */ "b"])(function (state) {
  return {
    headImageUrl: state.in.headImageUrl,
    nickName: state.in.nickName,
    phone: state.in.phone
  };
}, function (dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_11__[/* bindActionCreators */ "b"])({
    submitUserInfo: _in_redux__WEBPACK_IMPORTED_MODULE_12__["submitUserInfo"]
  }, dispatch);
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Home, _React$Component);
  var _super = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Home);
  function Home(props) {
    var _this;
    Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Home);
    _this = _super.call(this, props);
    _this.state = {
      isOpened: false
    };
    _this.getUserInfo = _this.getUserInfo.bind(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.handleClose = _this.handleClose.bind(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Home, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var that = this;
      if (!this.props.nickName) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getUserProfile({
          desc: '用于完善资料',
          // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: function () {
            var _success = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee(res) {
              return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return that.props.submitUserInfo(res.userInfo);
                    case 2:
                      that.props.phone && that.setState({
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
      if (!this.props.phone) {
        console.log(2222);
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
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
        url: url
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
          className: "container",
          onClick: this.getUserInfo,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "container-bg",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
              className: "msg",
              src: _images_bg_msg_png__WEBPACK_IMPORTED_MODULE_15___default.a
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              className: "msg-tips",
              children: "\u667A\u6167\u516C\u5BD3\u79DF\u623F\u7BA1\u7406\u670D\u52A1\u5DE5\u5177"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "content",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              className: "content-list",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "item",
                onClick: function onClick() {
                  return _this2.jumpUrl('/pages/house/index');
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                  className: "item-bg",
                  src: _images_fwgl_png__WEBPACK_IMPORTED_MODULE_16___default.a
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item-msg-box",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-title",
                    children: "\u623F\u5C4B\u7BA1\u7406"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-dsc",
                    children: "\u7BA1\u7406\u6240\u6709\u7684\u623F\u95F4"
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "item",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                  className: "item-bg",
                  src: _images_zkgl_png__WEBPACK_IMPORTED_MODULE_17___default.a
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item-msg-box",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-title",
                    children: "\u79DF\u5BA2\u7BA1\u7406"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-dsc",
                    children: "\u7BA1\u7406\u6240\u6709\u7684\u79DF\u5BA2"
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "item",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                  className: "item-bg",
                  src: _images_sdcb_png__WEBPACK_IMPORTED_MODULE_18___default.a
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item-msg-box",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-title",
                    children: "\u6C34\u7535\u6284\u8868"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-dsc",
                    children: "\u96C6\u4E2D\u6284\u8868 \u4E00\u952E\u53D1\u9001"
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "item",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                  className: "item-bg",
                  src: _images_qftz_png__WEBPACK_IMPORTED_MODULE_19___default.a
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item-msg-box",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-title",
                    children: "\u7FA4\u53D1\u901A\u77E5"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "item-dsc",
                    children: "\u7FA4\u53D1\u901A\u77E5 \u65B9\u4FBF\u7701\u5FC3"
                  })]
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              className: "notice-box",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                  className: "notice-img",
                  src: _images_notice_png__WEBPACK_IMPORTED_MODULE_20___default.a
                }), "\u7CFB\u7EDF\u901A\u77E5\u7CFB\u7EDF\u901A\u77E5\u7CFB\u7EDF\u901A\u77E5\u7CFB\u7EDF\u901A\u77E5\u7CFB\u7EDF\u2026", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "notice-link",
                  children: "\u8BE6\u60C5"
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              className: "banner-box",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                src: _images_banner_png__WEBPACK_IMPORTED_MODULE_21___default.a,
                className: "banner"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              className: "reminders",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "title",
                children: "\u63D0\u9192\u4E8B\u9879"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "box",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "bg",
                    src: _assets_images_shequ_png__WEBPACK_IMPORTED_MODULE_22___default.a
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "tips",
                    children: "\u5230\u671F\u8D26\u5355"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "bg",
                    src: _assets_images_shequ_png__WEBPACK_IMPORTED_MODULE_22___default.a
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "tips",
                    children: "\u903E\u671F\u8D26\u5355"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "bg",
                    src: _assets_images_shequ_png__WEBPACK_IMPORTED_MODULE_22___default.a
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "tips",
                    children: "\u7A7A\u623F\u6C47\u603B"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "bg",
                    src: _assets_images_shequ_png__WEBPACK_IMPORTED_MODULE_22___default.a
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "tips",
                    children: "\u5F85\u6284\u6C34\u7535"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "bg",
                    src: _assets_images_shequ_png__WEBPACK_IMPORTED_MODULE_22___default.a
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "tips",
                    children: "\u79DF\u671F\u5230\u671F"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "bg",
                    src: _assets_images_shequ_png__WEBPACK_IMPORTED_MODULE_22___default.a
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "tips",
                    children: "\u5F85\u786E\u8BA4\u6536\u6B3E"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "item",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "bg",
                    src: _assets_images_shequ_png__WEBPACK_IMPORTED_MODULE_22___default.a
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                    className: "tips",
                    children: "\u79DF\u5BA2\u62A5\u4FEE"
                  })]
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              className: "reminders tools",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "title",
                children: "\u62DB\u79DF\u5DE5\u5177"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "tools-box",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "tools-item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "tools-img",
                    src: _images_fb_png__WEBPACK_IMPORTED_MODULE_23___default.a
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "tools-item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "tools-img",
                    src: _images_zz_png__WEBPACK_IMPORTED_MODULE_24___default.a
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                  className: "tools-item",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
                    className: "tools-img",
                    src: _images_gb_png__WEBPACK_IMPORTED_MODULE_25___default.a
                  })
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
              className: "reminders todo",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "title",
                children: "\u5F85\u529E\u4E8B\u9879"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
                className: "todo-box"
              })]
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_components_phoneModal__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
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

/***/ "./src/assets/images/shequ.png":
/*!*************************************!*\
  !*** ./src/assets/images/shequ.png ***!
  \*************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/home/components/phoneModal.jsx":
/*!**************************************************!*\
  !*** ./src/pages/home/components/phoneModal.jsx ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _in_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../in/redux */ "./src/pages/in/redux.ts");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var taro_ui_dist_style_components_modal_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! taro-ui/dist/style/components/modal.scss */ "./node_modules/taro-ui/dist/style/components/modal.scss");
/* harmony import */ var taro_ui_dist_style_components_modal_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_modal_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);







var _dec, _class;









var PModal = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__[/* connect */ "b"])(function (state) {
  return {};
}, function (dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_11__[/* bindActionCreators */ "b"])({
    submitUserInfo: _in_redux__WEBPACK_IMPORTED_MODULE_12__["submitUserInfo"]
  }, dispatch);
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(PModal, _React$Component);
  var _super = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(PModal);
  function PModal(props) {
    var _this;
    Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, PModal);
    _this = _super.call(this, props);
    _this.getPhoneNumber = _this.getPhoneNumber.bind(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(PModal, [{
    key: "getPhoneNumber",
    value: function () {
      var _getPhoneNumber = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee(e) {
        return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.submitUserInfo({
                  phone: e.detail.encryptedData
                });
              case 2:
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
      console.log(this.props.isOpened, 'this.props.isOpened');
      return this.props.isOpened && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtActionSheet */ "a"], {
        isOpened: true,
        cancelText: "\u53D6\u6D88",
        title: "\u7533\u8BF7\u83B7\u53D6\u60A8\u7684\u624B\u673A\u53F7"
        // onCancel={this.handleCancel}
        ,
        onClose: this.props.handleClose,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtButton */ "b"], {
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
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component)) || _class);
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
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "./src/pages/home/images/sdcb.png":
/*!****************************************!*\
  !*** ./src/pages/home/images/sdcb.png ***!
  \****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAACMAgMAAAAYUBp6AAAAAXNSR0IArs4c6QAAAAxQTFRFw+jw2vH45fb77/n6kCIwwQAAAFtJREFUaN7tzLENQBEUAMC3pBE1RtTQ/fKTCCG5G+CibBRyuVwul8vlcvnbeftUuVwul8vlcrlcfjbPaUwul8vlcrlcLn80jx9yuVwul8vlcrlcLr8snyGXyxd1NnRy2jbCQHYAAAAASUVORK5CYII="

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

/***/ "./src/pages/home/images/zz.png":
/*!**************************************!*\
  !*** ./src/pages/home/images/zz.png ***!
  \**************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/zz.png";

/***/ }),

/***/ "./src/pages/home/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.jsx ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/home/index.jsx");


var config = {"navigationBarTitleText":"安心租-首页"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/home/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/home/index.less":
/*!***********************************!*\
  !*** ./src/pages/home/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/home/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map