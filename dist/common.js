(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/api/home.ts":
/*!*************************!*\
  !*** ./src/api/home.ts ***!
  \*************************/
/*! exports provided: userLogin */
/*! exports used: userLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userLogin; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/http */ "./src/utils/http.ts");
/* harmony import */ var _constants_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/status */ "./src/constants/status.js");


var userLogin = function userLogin(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/wechat/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/userLogin"), params);
};

/***/ }),

/***/ "./src/api/house.ts":
/*!**************************!*\
  !*** ./src/api/house.ts ***!
  \**************************/
/*! exports provided: getHouse, addHouse, delHouse, queryHouseDetail, queryHouseList, queryRoomList, setHouseCost, addRoom, delRoom */
/*! exports used: addHouse, addRoom, delHouse, delRoom, getHouse, queryHouseDetail, queryRoomList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getHouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addHouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return delHouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return queryHouseDetail; });
/* unused harmony export queryHouseList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return queryRoomList; });
/* unused harmony export setHouseCost */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return delRoom; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/http */ "./src/utils/http.ts");
/* harmony import */ var _constants_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/status */ "./src/constants/status.js");


var getHouse = function getHouse(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/house/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/list"), params);
};
var addHouse = function addHouse(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/house/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/add"), params);
};
var delHouse = function delHouse(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/house/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/del"), params);
};
var queryHouseDetail = function queryHouseDetail(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/house/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/detail"), params);
};
var queryHouseList = function queryHouseList(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/house/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/list"), params);
};
var queryRoomList = function queryRoomList(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/room/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/list"), params);
};
var setHouseCost = function setHouseCost(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/house/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/setHouseCost"), params);
};
var addRoom = function addRoom(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/room/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/add"), params);
};
var delRoom = function delRoom(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/room/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/del"), params);
};

/***/ }),

/***/ "./src/api/my.ts":
/*!***********************!*\
  !*** ./src/api/my.ts ***!
  \***********************/
/*! exports provided: userInfo, addManager, delManager, updateManager, queryManager */
/*! exports used: addManager, delManager, queryManager, updateManager, userInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return userInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return delManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return queryManager; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/http */ "./src/utils/http.ts");
/* harmony import */ var _constants_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/status */ "./src/constants/status.js");


var userInfo = function userInfo(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/info"), params);
};
var addManager = function addManager(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/commonManager/add"), params);
};
var delManager = function delManager(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/commonManager/del"), params);
};
var updateManager = function updateManager(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/commonManager/update"), params);
};
var queryManager = function queryManager(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/commonManager/list"), params);
};

/***/ }),

/***/ "./src/api/tenant.ts":
/*!***************************!*\
  !*** ./src/api/tenant.ts ***!
  \***************************/
/*! exports provided: querySelHoldTenantPage, querySelHousePage, queryTarDetail */
/*! exports used: querySelHoldTenantPage, querySelHousePage, queryTarDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return querySelHoldTenantPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return querySelHousePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return queryTarDetail; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/http */ "./src/utils/http.ts");
/* harmony import */ var _constants_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/status */ "./src/constants/status.js");


var querySelHoldTenantPage = function querySelHoldTenantPage(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/tenant/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/selHoldTenantPage"), params);
};
var querySelHousePage = function querySelHousePage(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/tenant/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/selHousePage"), params);
};
var queryTarDetail = function queryTarDetail(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/tarDetail"), params);
};

/***/ }),

/***/ "./src/api/weixin.ts":
/*!***************************!*\
  !*** ./src/api/weixin.ts ***!
  \***************************/
/*! exports provided: addNickName, addMobile */
/*! exports used: addMobile, addNickName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addNickName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addMobile; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/http */ "./src/utils/http.ts");
/* harmony import */ var _constants_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/status */ "./src/constants/status.js");


var addNickName = function addNickName(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/wechat/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/addNickName"), params);
};
var addMobile = function addMobile(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/wechat/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/bindMobile"), params);
};

/***/ }),

/***/ "./src/components/form-picker/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/form-picker/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "./src/components/form-picker/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
    _useState2 = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
    stateValue = _useState2[0],
    setState = _useState2[1];
  var _props$lable = props.lable,
    lable = _props$lable === void 0 ? 'lable' : _props$lable,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? '请输入（必填）' : _props$placeholder,
    _props$range = props.range,
    range = _props$range === void 0 ? [] : _props$range,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {
      return null;
    } : _props$onChange,
    _props$hasIcon = props.hasIcon,
    hasIcon = _props$hasIcon === void 0 ? true : _props$hasIcon,
    state = props.state;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setState(state);
  }, [state]);
  var handlChange = function handlChange(e) {
    var value = range[e.detail.value];
    setState(value);
    onChange(value);
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
    className: "input-item",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "o"], {
      className: "input-label",
      children: lable
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Picker */ "i"], Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      className: "input-test"
    }, props), {}, {
      placeholder: placeholder,
      mode: "selector",
      range: range,
      onChange: handlChange,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
        className: "picker",
        children: [stateValue, " ", hasIcon && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtIcon */ "c"], {
          value: "chevron-right",
          size: "20"
        })]
      })
    }))]
  });
});

/***/ }),

/***/ "./src/components/form-picker/index.less":
/*!***********************************************!*\
  !*** ./src/components/form-picker/index.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: FormPicker, Menu */
/*! exports used: FormPicker, Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _form_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-picker */ "./src/components/form-picker/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _form_picker__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/components/menu/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _menu__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),

/***/ "./src/components/menu/index.jsx":
/*!***************************************!*\
  !*** ./src/components/menu/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./src/components/menu/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _props$data = props.data,
    data = _props$data === void 0 ? [1, 2] : _props$data,
    style = props.style;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "q"], {
    className: "menu-list",
    style: style,
    onClick: props.onClick,
    children: data.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "q"], {
        className: "menu-item",
        onClick: item.onClick,
        children: item.label
      }, index);
    })
  });
});

/***/ }),

/***/ "./src/components/menu/index.less":
/*!****************************************!*\
  !*** ./src/components/menu/index.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/constants/status.js":
/*!*********************************!*\
  !*** ./src/constants/status.js ***!
  \*********************************/
/*! exports provided: HTTP_STATUS, REFRESH_STATUS, HTTP_VERSION */
/*! exports used: HTTP_STATUS, HTTP_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP_STATUS; });
/* unused harmony export REFRESH_STATUS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HTTP_VERSION; });
var HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 301,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
};
var REFRESH_STATUS = {
  NORMAL: 0,
  REFRESHING: 1,
  NO_MORE_DATA: 2
};
var HTTP_VERSION = 'v1';

/***/ }),

/***/ "./src/pages/home/images/fb.png":
/*!**************************************!*\
  !*** ./src/pages/home/images/fb.png ***!
  \**************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/home/images/fb.png";

/***/ }),

/***/ "./src/pages/in/redux.ts":
/*!*******************************!*\
  !*** ./src/pages/in/redux.ts ***!
  \*******************************/
/*! exports provided: default, globalUpdate, codeForOpenId, getUserInfo, addName, addPhone */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalUpdate", function() { return globalUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeForOpenId", function() { return codeForOpenId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addName", function() { return addName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPhone", function() { return addPhone; });
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/home */ "./src/api/home.ts");
/* harmony import */ var _api_my__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/my */ "./src/api/my.ts");
/* harmony import */ var _api_weixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/weixin */ "./src/api/weixin.ts");







// Actions
var UPDATE = 'GLOBAL_UPDATE';

// Reducer
var initState = {
  init: false,
  nicknameFlag: false,
  mobileFlag: false,
  userInfo: {
    token: '',
    headImageUrl: '',
    nickName: '',
    phone: ''
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case UPDATE:
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state), action.payload);
    default:
      return state;
  }
});

// Action Creators
var globalUpdate = function globalUpdate(params) {
  return {
    payload: params,
    type: UPDATE
  };
};
var codeForOpenId = function codeForOpenId() {
  return /*#__PURE__*/function () {
    var _ref = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2(dispatch) {
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.login({
                success: function () {
                  var _success = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee(res) {
                    var _ref2, data, json;
                    return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!res.code) {
                              _context.next = 21;
                              break;
                            }
                            //发起网络请求
                            _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.switchTab({
                              url: '/pages/home/index'
                            });
                            _context.prev = 2;
                            _context.next = 5;
                            return Object(_api_home__WEBPACK_IMPORTED_MODULE_4__[/* userLogin */ "a"])({
                              jsCode: res.code
                            });
                          case 5:
                            _context.t0 = _context.sent;
                            if (_context.t0) {
                              _context.next = 8;
                              break;
                            }
                            _context.t0 = {};
                          case 8:
                            _ref2 = _context.t0;
                            data = _ref2.data;
                            json = data.data || {};
                            dispatch(globalUpdate({
                              token: json.peaceToken,
                              nicknameFlag: json.nicknameFlag,
                              mobileFlag: json.mobileFlag
                            }));
                            _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.setStorageSync('Peace-X-Token', json.peaceToken);
                            _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.switchTab({
                              url: '/pages/home/index'
                            });
                            _context.next = 19;
                            break;
                          case 16:
                            _context.prev = 16;
                            _context.t1 = _context["catch"](2);
                            console.log("\u8BF7\u6C42\u63A5\u53E3userLogin\u5931\u8D25\uFF1A".concat(_context.t1));
                          case 19:
                            _context.next = 22;
                            break;
                          case 21:
                            console.log('登录失败！' + res.errMsg);
                          case 22:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[2, 16]]);
                  }));
                  function success(_x2) {
                    return _success.apply(this, arguments);
                  }
                  return success;
                }()
              });
            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getUserInfo = function getUserInfo() {
  return /*#__PURE__*/function () {
    var _ref3 = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3(dispatch) {
      var _ref4, data, _data$data, headImageUrl, nickName;
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_api_my__WEBPACK_IMPORTED_MODULE_5__[/* userInfo */ "e"])({});
            case 2:
              _context3.t0 = _context3.sent;
              if (_context3.t0) {
                _context3.next = 5;
                break;
              }
              _context3.t0 = {};
            case 5:
              _ref4 = _context3.t0;
              data = _ref4.data;
              _data$data = data.data, headImageUrl = _data$data.headImageUrl, nickName = _data$data.nickName;
              dispatch(globalUpdate({
                headImageUrl: headImageUrl,
                nickName: nickName
              }));
            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var addName = function addName(params) {
  return /*#__PURE__*/function () {
    var _ref5 = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee4(dispatch) {
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(_api_weixin__WEBPACK_IMPORTED_MODULE_6__[/* addNickName */ "b"])(params);
            case 2:
              _context4.t0 = _context4.sent;
              if (_context4.t0) {
                _context4.next = 5;
                break;
              }
              ({});
            case 5:
              dispatch(globalUpdate(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, params), {}, {
                nicknameFlag: true
              })));
            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var addPhone = function addPhone(params) {
  return /*#__PURE__*/function () {
    var _ref6 = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee5(dispatch) {
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return Object(_api_weixin__WEBPACK_IMPORTED_MODULE_6__[/* addMobile */ "a"])(params);
            case 2:
              _context5.t0 = _context5.sent;
              if (_context5.t0) {
                _context5.next = 5;
                break;
              }
              ({});
            case 5:
              dispatch(globalUpdate({
                mobileFlag: true
              }));
            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref6.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/pages/moduleA/pages/commonManager/redux.ts":
/*!********************************************************!*\
  !*** ./src/pages/moduleA/pages/commonManager/redux.ts ***!
  \********************************************************/
/*! exports provided: default, globalUpdate, getList */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalUpdate", function() { return globalUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _api_my__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/my */ "./src/api/my.ts");




// Actions
var UPDATE = 'LIST_UPDATE';

// Reducer
var initState = {
  init: false,
  list: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case UPDATE:
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state), action.payload);
    default:
      return state;
  }
});

// Action Creators
var globalUpdate = function globalUpdate(params) {
  return {
    payload: params,
    type: UPDATE
  };
};
var getList = function getList() {
  return /*#__PURE__*/function () {
    var _ref = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee(dispatch) {
      var _ref2, data, list;
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_my__WEBPACK_IMPORTED_MODULE_3__[/* queryManager */ "c"])({});
            case 2:
              _context.t0 = _context.sent;
              if (_context.t0) {
                _context.next = 5;
                break;
              }
              _context.t0 = {};
            case 5:
              _ref2 = _context.t0;
              data = _ref2.data;
              list = data.data;
              dispatch(globalUpdate({
                list: list
              }));
            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/pages/moduleA/pages/floorDetail/images/more.png":
/*!*************************************************************!*\
  !*** ./src/pages/moduleA/pages/floorDetail/images/more.png ***!
  \*************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAICAYAAACYhf2vAAAAAXNSR0IArs4c6QAAAQNJREFUOE/F078rRXEYBvDPlSg/yuLXcEfFIIuUhVHJYjYy3D9A4o9QIrPFYlH8B1JGikGJzSJCzC69dW59O33PNd5Tp07P+7zP9/m+73NqOvzUkvPjewqjeMcdmm38DRX8bjzg5Z+7TGIcH4X2T/BTA6uYSUTucVIhOowN9Bb1EDvCcwV/BbNJ7RHHqYE+bGWad/GdwZcwX8JvcJbh9mAbXaXafky6NYEBbGaa9/CZwZcxV8JvcZrhxpR2MvghXtMVNDCWECMHB/jNNE9grYSf47piBeuoJ7UvxOWaqYFBLGAEQbjAW5tgTSPeCOETrirMhkQ/FouAx0ovW6FNDXTkh/wDOlMsCW3yCSgAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/pages/moduleA/pages/floorDetail/redux.ts":
/*!******************************************************!*\
  !*** ./src/pages/moduleA/pages/floorDetail/redux.ts ***!
  \******************************************************/
/*! exports provided: default, globalUpdate, getDetail, getList */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalUpdate", function() { return globalUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetail", function() { return getDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _api_house__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/house */ "./src/api/house.ts");




// Actions
var UPDATE = 'LIST_UPDATE';

// Reducer
var initState = {
  init: false,
  emptyRoomCount: 0,
  liveRoomCount: 0,
  name: '',
  roomCount: 0,
  tenantCount: 0,
  total: 0,
  list: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case UPDATE:
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state), action.payload);
    default:
      return state;
  }
});

// Action Creators
var globalUpdate = function globalUpdate(params) {
  return {
    payload: params,
    type: UPDATE
  };
};
var getDetail = function getDetail(houseId) {
  return /*#__PURE__*/function () {
    var _ref = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee(dispatch) {
      var _ref2, data, json;
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_house__WEBPACK_IMPORTED_MODULE_3__[/* queryHouseDetail */ "f"])({
                houseId: houseId
              });
            case 2:
              _context.t0 = _context.sent;
              if (_context.t0) {
                _context.next = 5;
                break;
              }
              _context.t0 = {};
            case 5:
              _ref2 = _context.t0;
              data = _ref2.data;
              json = data.data || {};
              dispatch(globalUpdate({
                emptyRoomCount: json.emptyRoomCount,
                houseId: json.houseId,
                liveRoomCount: json.liveRoomCount,
                name: json.name,
                roomCount: json.roomCount,
                tenantCount: json.tenantCount
              }));
            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getList = function getList(houseId) {
  return /*#__PURE__*/function () {
    var _ref3 = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2(dispatch) {
      var _ref4, data, arr;
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_api_house__WEBPACK_IMPORTED_MODULE_3__[/* queryRoomList */ "g"])({
                houseId: houseId,
                pageIndex: 1,
                pageSize: 10000
              });
            case 2:
              _context2.t0 = _context2.sent;
              if (_context2.t0) {
                _context2.next = 5;
                break;
              }
              _context2.t0 = {};
            case 5:
              _ref4 = _context2.t0;
              data = _ref4.data;
              arr = data.data || {};
              console.log(arr, '----');
              dispatch(globalUpdate({
                list: arr
                // list: arr.data,
                // total: arr.total,
              }));
            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/pages/moduleA/pages/house/components/tips.jsx":
/*!***********************************************************!*\
  !*** ./src/pages/moduleA/pages/house/components/tips.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components */ "./src/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










var Tips = /*#__PURE__*/function (_React$Component) {
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Tips, _React$Component);
  var _super = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Tips);
  function Tips(props) {
    var _this;
    Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Tips);
    _this = _super.call(this, props);
    _this.state = {
      visiable: false
    };
    _this.setVisibable = _this.setVisibable.bind(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this));
    return _this;
  }
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Tips, [{
    key: "setVisibable",
    value: function setVisibable(falg) {
      console.log(falg, '-');
      this.setState({
        visiable: falg
      });
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        position: 'absolute',
        width: 'max-content',
        right: 0,
        top: 26
      };
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
        className: "tips",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
          onClick: this.setVisibable.bind(this, true),
          children: this.props.children
        }), this.state.visiable && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_7__[/* Menu */ "b"], {
          style: style,
          data: this.props.data || [],
          onClick: this.setVisibable.bind(this, false)
        })]
      });
    }
  }]);
  return Tips;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
/* harmony default export */ __webpack_exports__["a"] = (Tips);

/***/ }),

/***/ "./src/pages/moduleA/pages/house/redux.ts":
/*!************************************************!*\
  !*** ./src/pages/moduleA/pages/house/redux.ts ***!
  \************************************************/
/*! exports provided: default, houseUpdate, getHouseList */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "houseUpdate", function() { return houseUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHouseList", function() { return getHouseList; });
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _api_house__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/house */ "./src/api/house.ts");





// Actions
var UPDATE = 'HOUSE_UPDATE';

// Reducer
var initState = {
  list: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case UPDATE:
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state), action.payload);
    default:
      return state;
  }
});

// Action Creators
var houseUpdate = function houseUpdate(params) {
  return {
    payload: params,
    type: UPDATE
  };
};

// "emptyRoomCount": 0,
//  "houseId": 0,
//  "name": "string",
//  "roomCount": 0
var getHouseList = function getHouseList() {
  return /*#__PURE__*/function () {
    var _ref = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee(dispatch) {
      var _yield$getHouse, data, json;
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_house__WEBPACK_IMPORTED_MODULE_3__[/* getHouse */ "e"])({});
            case 2:
              _yield$getHouse = _context.sent;
              data = _yield$getHouse.data;
              json = data.data || {};
              dispatch(houseUpdate({
                list: json.data || []
              }));
            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/pages/moduleA/pages/tenant/redux.ts":
/*!*************************************************!*\
  !*** ./src/pages/moduleA/pages/tenant/redux.ts ***!
  \*************************************************/
/*! exports provided: default, globalUpdate, getTabNum, getList */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalUpdate", function() { return globalUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabNum", function() { return getTabNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _api_tenant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/tenant */ "./src/api/tenant.ts");





// Actions
var UPDATE = 'LIST_UPDATE';

// Reducer
var initState = {
  init: false,
  currentList: [],
  roomTenantList: [],
  historyList: [],
  historyTenantNum: 0,
  holdTenantNum: 0,
  houseNum: 0,
  tabs: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case UPDATE:
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, state), action.payload);
    default:
      return state;
  }
});

// Action Creators
var globalUpdate = function globalUpdate(params) {
  return {
    payload: params,
    type: UPDATE
  };
};
var getTabNum = function getTabNum() {
  return /*#__PURE__*/function () {
    var _ref = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().mark(function _callee(dispatch) {
      var _yield$queryTarDetail, data, _ref2, historyTenantNum, holdTenantNum, houseNum;
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_tenant__WEBPACK_IMPORTED_MODULE_4__[/* queryTarDetail */ "c"])();
            case 2:
              _yield$queryTarDetail = _context.sent;
              data = _yield$queryTarDetail.data;
              console.log(data, '---data---');
              _ref2 = data || {}, historyTenantNum = _ref2.historyTenantNum, holdTenantNum = _ref2.holdTenantNum, houseNum = _ref2.houseNum;
              dispatch(globalUpdate({
                historyTenantNum: historyTenantNum,
                holdTenantNum: holdTenantNum,
                houseNum: houseNum,
                tabs: [{
                  key: 'currentList',
                  lable: "\u73B0\u6709\u79DF\u5BA2(".concat(holdTenantNum, ")")
                }, {
                  key: 'roomTenantList',
                  lable: "\u6309\u623F\u5C4B(".concat(houseNum, ")")
                }, {
                  key: 'historyList',
                  lable: "\u5386\u53F2\u79DF\u5BA2(".concat(historyTenantNum, ")")
                }]
              }));
            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getList = function getList(type, params) {
  return /*#__PURE__*/function () {
    var _ref3 = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().mark(function _callee5(dispatch) {
      var mapApi, _yield$mapApi$type, data, json;
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              mapApi = {
                currentList: function () {
                  var _currentList = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().mark(function _callee2() {
                    return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return Object(_api_tenant__WEBPACK_IMPORTED_MODULE_4__[/* querySelHoldTenantPage */ "a"])(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, params), {}, {
                              pageIndex: 1,
                              pageSize: 10000
                            }));
                          case 2:
                            return _context2.abrupt("return", _context2.sent);
                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));
                  function currentList() {
                    return _currentList.apply(this, arguments);
                  }
                  return currentList;
                }(),
                roomTenantList: function () {
                  var _roomTenantList = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().mark(function _callee3() {
                    return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return Object(_api_tenant__WEBPACK_IMPORTED_MODULE_4__[/* querySelHousePage */ "b"])(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, params), {}, {
                              pageIndex: 1,
                              pageSize: 10000
                            }));
                          case 2:
                            return _context3.abrupt("return", _context3.sent);
                          case 3:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));
                  function roomTenantList() {
                    return _roomTenantList.apply(this, arguments);
                  }
                  return roomTenantList;
                }(),
                historyList: function () {
                  var _historyList = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().mark(function _callee4() {
                    return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])().wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            return _context4.abrupt("return", []);
                          case 1:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));
                  function historyList() {
                    return _historyList.apply(this, arguments);
                  }
                  return historyList;
                }()
              };
              _context5.next = 3;
              return mapApi[type]();
            case 3:
              _yield$mapApi$type = _context5.sent;
              data = _yield$mapApi$type.data;
              json = data === null || data === void 0 ? void 0 : data.data;
              dispatch(globalUpdate(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, type, (json === null || json === void 0 ? void 0 : json.data) || [{
                name: '红木林南区-1号楼102',
                tenantName: '张悦'
              }])));
            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/utils/common.ts":
/*!*****************************!*\
  !*** ./src/utils/common.ts ***!
  \*****************************/
/*! exports provided: formatNumber, formatTime, formatTimeStampToTime */
/*! exports used: formatTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export formatNumber */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatTime; });
/* unused harmony export formatTimeStampToTime */
var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
};
var formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

// 格式化时间戳为日期
var formatTimeStampToTime = function formatTimeStampToTime(timestamp) {
  var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var year = date.getFullYear();
  var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  var day = date.getDate() < 10 ? "0".concat(date.getDate()) : date.getDate();
  // const hour = date.getHours() + ':';
  // const minutes = date.getMinutes() + ':';
  // const second = date.getSeconds();
  return "".concat(year, "-").concat(month, "-").concat(day);
};

/***/ }),

/***/ "./src/utils/env.ts":
/*!**************************!*\
  !*** ./src/utils/env.ts ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
  development: {
    baseUrl: 'https://zfeasy.com'
  },
  production: {
    baseUrl: 'https://zfeasy.com'
  }
};
var env = config["development"];
/* harmony default export */ __webpack_exports__["a"] = (env);

/***/ }),

/***/ "./src/utils/error.ts":
/*!****************************!*\
  !*** ./src/utils/error.ts ***!
  \****************************/
/*! exports provided: logError */
/*! exports used: logError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logError; });
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/utils/common.ts");


/**
 *
 * @param {string} name 错误名字
 * @param {string} action 错误动作描述
 * @param {string} info 错误信息，通常是 fail 返回的
 */
// eslint-disable-next-line
var logError = function logError(name, action, info) {
  if (!info) {
    info = 'empty';
  }
  var time = Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* formatTime */ "a"])(new Date());
  console.error(time, name, action, info);
  if (Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(info) === 'object') {
    info = JSON.stringify(info);
  }
};

/***/ }),

/***/ "./src/utils/http.ts":
/*!***************************!*\
  !*** ./src/utils/http.ts ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/status */ "./src/constants/status.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env */ "./src/utils/env.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./src/utils/error.ts");




var baseUrl = _env__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].baseUrl;
/* harmony default export */ __webpack_exports__["a"] = ({
  baseOptions: function baseOptions(params) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    var url = params.url,
      data = params.data;
    var contentType = 'application/json';
    contentType = params.contentType || contentType;
    var option = {
      url: url.indexOf('http') !== -1 ? url : baseUrl + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType,
        'Peace-X-Token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getStorageSync('Peace-X-Token') || 'AAAA'
      },
      // mode: 'cors',
      xhrFields: {
        withCredentials: true
      },
      success: function success(res) {
        if (res.statusCode === _constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].NOT_FOUND) {
          return Object(_error__WEBPACK_IMPORTED_MODULE_3__[/* logError */ "a"])('api', '请求资源不存在');
        } else if (res.statusCode === _constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].BAD_GATEWAY) {
          return Object(_error__WEBPACK_IMPORTED_MODULE_3__[/* logError */ "a"])('api', '服务端出现了问题');
        } else if (res.statusCode === _constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].FORBIDDEN) {
          return Object(_error__WEBPACK_IMPORTED_MODULE_3__[/* logError */ "a"])('api', '没有权限访问');
        } else if (res.statusCode === _constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].AUTHENTICATE) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.clearStorage();
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.navigateTo({
            url: '/pages/packageA/pages/login/index'
          });
          return Object(_error__WEBPACK_IMPORTED_MODULE_3__[/* logError */ "a"])('api', '请先登录');
        } else if (res.statusCode === _constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_STATUS */ "a"].SUCCESS) {
          return res.data;
        }
      },
      error: function error(e) {
        Object(_error__WEBPACK_IMPORTED_MODULE_3__[/* logError */ "a"])('api', '请求接口出现问题', e);
      }
    };
    // eslint-disable-next-line
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.request(option);
  },
  get: function get(url, data) {
    var option = {
      url: url,
      data: data
    };
    return this.baseOptions(option);
  },
  post: function post(url, data, contentType) {
    var params = {
      url: url,
      data: data,
      contentType: contentType
    };
    return this.baseOptions(params, 'POST');
  },
  put: function put(url, data) {
    var option = {
      url: url,
      data: data
    };
    return this.baseOptions(option, 'PUT');
  },
  delete: function _delete(url, data) {
    var option = {
      url: url,
      data: data
    };
    return this.baseOptions(option, 'DELETE');
  }
});

/***/ }),

/***/ "./src/utils/tools.ts":
/*!****************************!*\
  !*** ./src/utils/tools.ts ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tools; });
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


// @ts-nocheck
var Tools = /*#__PURE__*/function () {
  function Tools() {
    Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Tools);
  }
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Tools, null, [{
    key: "debounce",
    value: function debounce(fn) {
      var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;
      var Timer = null;
      return function () {
        var _arguments = arguments,
          _this = this;
        clearTimeout(Timer);
        Timer = setTimeout(function () {
          fn.apply(_this, _arguments);
        }, interval);
      };
    }
    // 获取内部链接参数
  }, {
    key: "getInUrlPrams",
    value: function getInUrlPrams(obj, type) {
      if (type) {
        return obj.match.params[type];
      }
      return obj.match.params;
    }

    // 获取外部链接参数
  }, {
    key: "getOutUrlPrams",
    value: function getOutUrlPrams(name) {
      var oldUrlParams = window.location.href.split('?')[1] || '';
      var urlParams = oldUrlParams.split('#')[0] || '';
      var urlParamsObj = {};
      var urlParamsArray = urlParams.split('&');
      for (var i = 0; i < urlParamsArray.length; i++) {
        var currParam = urlParamsArray[i].split('=');
        urlParamsObj[currParam[0]] = currParam[1];
      }
      if (name) {
        return urlParamsObj[name];
      }
      return urlParamsObj;
    }
  }, {
    key: "getParameterByName",
    value: function getParameterByName(name) {
      var location = window.location;
      var values = decodeURIComponent((location.search.match(RegExp("[?|&|/]" + name + '=([^\&|?&]+)')) || [, null])[1]); // eslint-disable-line
      if (this.isNullOrEmpty(values)) {
        values = decodeURIComponent((location.hash.match(RegExp("[?|&|/]" + name + '=([^\&|?&]+)')) || [, null])[1]); // eslint-disable-line
      }

      return this.isNullOrEmpty(values) || values === 'null' ? '' : values;
    }
  }, {
    key: "isNullOrEmpty",
    value: function isNullOrEmpty(obj) {
      var result = obj == null || obj === 'null' || obj === undefined || obj === 'undefined' || typeof obj === 'undefined' || obj === '' || JSON.stringify(obj) === '{}' || JSON.stringify(obj) === '[]';
      if (result && (obj !== 0 || obj !== '0')) {
        return result;
      }
      return false;
    }
  }, {
    key: "getZero",
    value: function getZero(num, index) {
      if (parseInt(num) != 0 && (typeof num == "undefind" || num == null || num == "" || isNaN(num))) return num;
      var _num = parseInt(num);
      if (!index) index = 2;
      if (_num != 0) {
        if (_num < 0) {
          _num = -_num;
          for (var i = 1; i < parseInt(index); i++) {
            if (parseInt(_num) < Math.pow(10, i)) {
              _num = "0" + _num;
            }
          }
          _num = "-" + _num;
          return _num;
        }
        for (var i = 1; i < parseInt(index); i++) {
          if (parseInt(_num) < Math.pow(10, i)) {
            _num = "0" + _num;
          }
        }
      }
      return _num;
    }
  }, {
    key: "getPlace",
    value: function getPlace() {
      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var l = 0;
      while (i >= 1) {
        i = i / 10;
        l++;
      }
      if (l = 1) {
        return 2;
      }
      return l;
    }
  }]);
  return Tools;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ })

}]);
//# sourceMappingURL=common.js.map