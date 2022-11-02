(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/my/index.jsx":
/*!****************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/my/index.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _in_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../in/redux */ "./src/pages/in/redux.ts");
/* harmony import */ var _images_bg_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/bg.png */ "./src/pages/my/images/bg.png");
/* harmony import */ var _images_bg_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_bg_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.less */ "./src/pages/my/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _home_images_fb_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../home/images/fb.png */ "./src/pages/home/images/fb.png");
/* harmony import */ var _home_images_fb_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_home_images_fb_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);




var _dec, _class;












var My = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[/* connect */ "b"])(function (state) {
  return {
    headImageUrl: state.in.headImageUrl,
    nickName: state.in.nickName
  };
}, function (dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_9__[/* bindActionCreators */ "b"])({
    getUserInfo: _in_redux__WEBPACK_IMPORTED_MODULE_10__["getUserInfo"]
  }, dispatch);
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(My, _React$Component);
  var _super = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(My);
  function My() {
    Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, My);
    return _super.apply(this, arguments);
  }
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(My, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 获取用户的信息
      this.props.getUserInfo();
    }
  }, {
    key: "jumpUrl",
    value: function jumpUrl(url) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.navigateTo({
        url: url
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props,
        _this$props2,
        _this = this;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
        className: "my_container",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
          className: "heade-container",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
            className: "head",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
              className: "head-image",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Image */ "c"], {
                className: "logo",
                src: ((_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.headImageUrl) || _home_images_fb_png__WEBPACK_IMPORTED_MODULE_13___default.a
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
              className: "name",
              children: ((_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.nickName) || '***'
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
          className: "content",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
            className: "list",
            onClick: function onClick() {
              return _this.jumpUrl('/pages/moduleA/pages/commonManager/index');
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
              className: "item-msg",
              children: "\u6DFB\u52A0\u5171\u540C\u7BA1\u7406\u4EBA"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtIcon */ "c"], {
              value: "chevron-right",
              color: "#ccc"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
            className: "list",
            onClick: function onClick() {
              return _this.jumpUrl('/pages/moduleA/pages/tanantRules/index');
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
              className: "item-msg",
              children: "\u79DF\u6237\u987B\u77E5"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtIcon */ "c"], {
              value: "chevron-right",
              color: "#ccc"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
            className: "list",
            onClick: function onClick() {
              return _this.jumpUrl('/pages/moduleA/pages/share/index');
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
              className: "item-msg",
              children: "\u63A8\u8350\u7ED9\u597D\u53CB"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtIcon */ "c"], {
              value: "chevron-right",
              color: "#ccc"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
            className: "list",
            onClick: function onClick() {
              return _this.jumpUrl('/pages/moduleA/pages/about/index');
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
              className: "item-msg",
              children: "\u5173\u4E8E\u6211\u4EEC"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtIcon */ "c"], {
              value: "chevron-right",
              color: "#ccc"
            })]
          })]
        })]
      });
    }
  }]);
  return My;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component)) || _class);
/* harmony default export */ __webpack_exports__["a"] = (My);

/***/ }),

/***/ "./src/pages/my/images/bg.png":
/*!************************************!*\
  !*** ./src/pages/my/images/bg.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/my/index.jsx":
/*!********************************!*\
  !*** ./src/pages/my/index.jsx ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/my/index.jsx");


var config = {"navigationBarTitleText":"安心租-我的"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/my/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/my/index.less":
/*!*********************************!*\
  !*** ./src/pages/my/index.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/my/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map