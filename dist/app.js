require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-QEXWSVTS_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_taro-ui_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-JTM4LKUI_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-4MRLETOA_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_react-redux_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_react_jsx-runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-YYBYWJJX_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-framework-react_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_redux-logger_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_redux_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-EBFZ3RGQ_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-platform-weapp_dist_runtime_js.js");
require("./prebundle/remoteEntry.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_redux-thunk_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react-dom_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_taro_js.js");

require("./common");
require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.tsx":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.tsx ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "webpack/container/remote/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/store/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




var store = (0,_store__WEBPACK_IMPORTED_MODULE_1__["default"])();
var App = function App(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {
    store: store,
    children: children
  });
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "webpack/container/remote/@tarojs/plugin-platform-weapp/dist/runtime");
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "webpack/container/remote/@tarojs/plugin-framework-react/dist/runtime");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_tarojs_webpack5_runner_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./app.tsx */ "./node_modules/@tarojs/webpack5-runner/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "webpack/container/remote/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);











var config = {"pages":["pages/moduleA/pages/house/index","pages/in/index","pages/home/index","pages/analysis/index","pages/community/index","pages/shop/index","pages/my/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#2154F4","navigationBarTitleText":"WeChat","navigationBarTextStyle":"white"},"requiredBackgroundModes":["audio"],"tabBar":{"color":"#2B2E33","selectedColor":"#2154F4","list":[{"pagePath":"pages/home/index","text":"首页","iconPath":"./assets/images/home.png","selectedIconPath":"./assets/images/home_active.png"},{"pagePath":"pages/analysis/index","text":"统计","iconPath":"./assets/images/tongji.png","selectedIconPath":"./assets/images/tongji_active.png"},{"pagePath":"pages/community/index","text":"社区","iconPath":"./assets/images/shequ.png","selectedIconPath":"./assets/images/shequ_active.png"},{"pagePath":"pages/shop/index","text":"店铺","iconPath":"./assets/images/dianpu.png","selectedIconPath":"./assets/images/dianpu_active.png"},{"pagePath":"pages/my/index","text":"我的","iconPath":"./assets/images/my.png","selectedIconPath":"./assets/images/my_active.png"}]}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__.createReactApp)(_node_modules_tarojs_webpack5_runner_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"], react__WEBPACK_IMPORTED_MODULE_5__, (react_dom__WEBPACK_IMPORTED_MODULE_6___default()), config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__.initPxTransform)({
  designWidth: 414,
  deviceRatio: {"414":2,"640":1.17,"750":1,"828":0.905}
})


/***/ }),

/***/ "./src/pages/home/redux.ts":
/*!*********************************!*\
  !*** ./src/pages/home/redux.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeUpdate": function() { return /* binding */ homeUpdate; }
/* harmony export */ });
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");

// Actions
var UPDATE = 'HOME_UPDATE';

// Reducer
var initState = {
  init: false
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case UPDATE:
      return (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state), action.payload);
    default:
      return state;
  }
});

// Action Creators
var homeUpdate = function homeUpdate(params) {
  return {
    payload: params,
    type: UPDATE
  };
};

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ configStore; }
/* harmony export */ });
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "webpack/container/remote/redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "webpack/container/remote/redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader */ "./src/store/loader.ts");
/* provided dependency */ var window = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["window"];





var composeEnhancers = (typeof window === "undefined" ? "undefined" : (0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : redux__WEBPACK_IMPORTED_MODULE_0__.compose;
var middlewares = [(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())];
if (true) {
  middlewares.push((__webpack_require__(/*! redux-logger */ "webpack/container/remote/redux-logger").createLogger)());
}
var enhancer = composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware.apply(void 0, middlewares)
// other store enhancers if any
);

function configStore() {
  var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)((0,_Users_liminghua_Desktop_zf_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, _loader__WEBPACK_IMPORTED_MODULE_2__["default"])), enhancer);
  return store;
}

/***/ }),

/***/ "./src/store/loader.ts":
/*!*****************************!*\
  !*** ./src/store/loader.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 加载所有的reducer
 * 默认命名为该文件夹名字，中横线转驼峰命名
 * 注意：各模块文件夹不能重名
 */
var files = __webpack_require__("./src/pages sync recursive redux\\.ts$");
var modules = {};
// 中横线转驼峰
var toHump = function toHump(name) {
  return name.replace(/-(\w)/g, function (letter) {
    return letter.toUpperCase();
  });
};
files.keys().forEach(function (key) {
  var nameArr = key.split('/');
  var moduleName = toHump(nameArr[nameArr.length - 2]);
  if (files(key).default) {
    modules[moduleName] = files(key).default;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (modules);

/***/ }),

/***/ "./src/pages sync recursive redux\\.ts$":
/*!************************************!*\
  !*** ./src/pages/ sync redux\.ts$ ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./home/redux.ts": "./src/pages/home/redux.ts",
	"./in/redux.ts": "./src/pages/in/redux.ts",
	"./moduleA/pages/house/redux.ts": "./src/pages/moduleA/pages/house/redux.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/pages sync recursive redux\\.ts$";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","common"], function() { return __webpack_exec__("./src/app.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;;
//# sourceMappingURL=app.js.map