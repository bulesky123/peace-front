(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/in/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/in/index.jsx":
/*!****************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/in/index.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./redux */ "./src/pages/in/redux.ts");




var _dec, _class;




var AuthComponent = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[/* connect */ "b"])(function (state) {
  return {};
}, function (dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_6__[/* bindActionCreators */ "b"])({
    codeForOpenId: _redux__WEBPACK_IMPORTED_MODULE_7__["codeForOpenId"]
  }, dispatch);
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AuthComponent, _React$Component);
  var _super = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AuthComponent);
  function AuthComponent() {
    Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AuthComponent);
    return _super.apply(this, arguments);
  }
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AuthComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 获取用户的token
      this.props.codeForOpenId();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return AuthComponent;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component)) || _class);
/* harmony default export */ __webpack_exports__["a"] = (AuthComponent);

/***/ }),

/***/ "./src/pages/in/index.jsx":
/*!********************************!*\
  !*** ./src/pages/in/index.jsx ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/in/index.jsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/in/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/in/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map