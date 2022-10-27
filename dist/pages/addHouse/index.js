(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/addHouse/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/addHouse/index.jsx":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/addHouse/index.jsx ***!
  \**********************************************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









var AddHouse = /*#__PURE__*/function (_React$Component) {
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AddHouse, _React$Component);
  var _super = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AddHouse);
  function AddHouse(props) {
    var _this;
    Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AddHouse);
    _this = _super.call(this, props);
    _this.state = {
      value: ''
    };
    return _this;
  }
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AddHouse, [{
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      console.log(this.state.value);
    }
  }, {
    key: "onReset",
    value: function onReset(event) {
      this.setState({
        value: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtForm */ "c"], {
        onSubmit: this.onSubmit.bind(this),
        onReset: this.onReset.bind(this),
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtInput */ "e"], {
          name: "value",
          title: "\u6587\u672C",
          type: "text",
          placeholder: "\u5355\u884C\u6587\u672C",
          value: this.state.value,
          onChange: this.handleChange.bind(this, 'value')
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtButton */ "b"], {
          formType: "submit",
          children: "\u63D0\u4EA4"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtButton */ "b"], {
          formType: "reset",
          children: "\u91CD\u7F6E"
        })]
      });
    }
  }]);
  return AddHouse;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
/* harmony default export */ __webpack_exports__["a"] = (AddHouse);

/***/ }),

/***/ "./src/pages/addHouse/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/addHouse/index.jsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/addHouse/index.jsx");


var config = {"navigationBarTitleText":"添加房屋"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/addHouse/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/addHouse/index.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map