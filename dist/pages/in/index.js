"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/in/index"],{

/***/ "./node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/in/index.tsx":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/in/index.tsx ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/container/remote/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "webpack/container/remote/redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux */ "./src/pages/in/redux.ts");




var _dec, _class;




var AuthComponent = (_dec = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {};
}, function (dispatch) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_2__.bindActionCreators)({
    codeForOpenId: _redux__WEBPACK_IMPORTED_MODULE_3__.codeForOpenId
  }, dispatch);
}), _dec(_class = /*#__PURE__*/function (_React$Component) {
  (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(AuthComponent, _React$Component);
  var _super = (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(AuthComponent);
  function AuthComponent() {
    (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AuthComponent);
    return _super.apply(this, arguments);
  }
  (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__["default"])(AuthComponent, [{
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
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component))) || _class);
/* harmony default export */ __webpack_exports__["default"] = (AuthComponent);

/***/ }),

/***/ "./src/pages/in/index.tsx":
/*!********************************!*\
  !*** ./src/pages/in/index.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_webpack5_runner_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/in/index.tsx");


var config = {"navigationBarTitleText":"安心租-首页"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_webpack5_runner_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/in/index', {root:{cn:[]}}, config || {}))




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","common"], function() { return __webpack_exec__("./src/pages/in/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map