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
/*! exports provided: getHouse, addHouse, queryHouseDetail */
/*! exports used: getHouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHouse; });
/* unused harmony export addHouse */
/* unused harmony export queryHouseDetail */
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/http */ "./src/utils/http.ts");
/* harmony import */ var _constants_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/status */ "./src/constants/status.js");


var getHouse = function getHouse(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/house/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/list"), params);
};
var addHouse = function addHouse(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/house/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/add"), params);
};
var queryHouseDetail = function queryHouseDetail(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/house/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/detail"), params);
};

/***/ }),

/***/ "./src/api/my.ts":
/*!***********************!*\
  !*** ./src/api/my.ts ***!
  \***********************/
/*! exports provided: userInfo */
/*! exports used: userInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userInfo; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/http */ "./src/utils/http.ts");
/* harmony import */ var _constants_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/status */ "./src/constants/status.js");


var userInfo = function userInfo(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/info"), params);
};

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

/***/ "./src/pages/house/redux.ts":
/*!**********************************!*\
  !*** ./src/pages/house/redux.ts ***!
  \**********************************/
/*! exports provided: default, houseUpdate, getHouseList */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "houseUpdate", function() { return houseUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHouseList", function() { return getHouseList; });
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _api_house__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/house */ "./src/api/house.ts");





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
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state), action.payload);
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
    var _ref = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee(dispatch) {
      var _yield$getHouse, data;
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_house__WEBPACK_IMPORTED_MODULE_3__[/* getHouse */ "a"])({});
            case 2:
              _yield$getHouse = _context.sent;
              data = _yield$getHouse.data;
              dispatch(houseUpdate({
                list: data.data.length > 0 ? data.data : [{
                  emptyRoomCount: 6,
                  houseId: 6,
                  name: "红木林南1号楼",
                  roomCount: 10
                }]
              }));
            case 5:
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

/***/ "./src/pages/in/redux.ts":
/*!*******************************!*\
  !*** ./src/pages/in/redux.ts ***!
  \*******************************/
/*! exports provided: default, globalUpdate, codeForOpenId, getUserInfo, submitUserInfo */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalUpdate", function() { return globalUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeForOpenId", function() { return codeForOpenId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitUserInfo", function() { return submitUserInfo; });
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/home */ "./src/api/home.ts");
/* harmony import */ var _api_my__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/my */ "./src/api/my.ts");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/tools */ "./src/utils/tools.ts");








// Actions
var UPDATE = 'GLOBAL_UPDATE';

// Reducer
var initState = {
  init: false,
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
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state), action.payload);
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
    var _ref = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee2(dispatch) {
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.login({
                success: function () {
                  var _success = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee(res) {
                    var _ref2, data;
                    return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!res.code) {
                              _context.next = 19;
                              break;
                            }
                            _context.prev = 1;
                            _context.next = 4;
                            return Object(_api_home__WEBPACK_IMPORTED_MODULE_4__[/* userLogin */ "a"])({
                              jsCode: res.code
                            });
                          case 4:
                            _context.t0 = _context.sent;
                            if (_context.t0) {
                              _context.next = 7;
                              break;
                            }
                            _context.t0 = {};
                          case 7:
                            _ref2 = _context.t0;
                            data = _ref2.data;
                            dispatch(globalUpdate({
                              token: data.peaceToken
                            }));
                            _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.setStorageSync('Peace-X-Token', data.peaceToken);
                            _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.redirectTo({
                              url: '/pages/home/index'
                            });
                            _context.next = 17;
                            break;
                          case 14:
                            _context.prev = 14;
                            _context.t1 = _context["catch"](1);
                            console.log("\u8BF7\u6C42\u63A5\u53E3userLogin\u5931\u8D25\uFF1A".concat(_context.t1));
                          case 17:
                            _context.next = 20;
                            break;
                          case 19:
                            console.log('登录失败！' + res.errMsg);
                          case 20:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[1, 14]]);
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
    var _ref3 = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee3(dispatch) {
      var _ref4, headImageUrl, nickName;
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_api_my__WEBPACK_IMPORTED_MODULE_5__[/* userInfo */ "a"])({});
            case 2:
              _context3.t0 = _context3.sent;
              if (_context3.t0) {
                _context3.next = 5;
                break;
              }
              _context3.t0 = {};
            case 5:
              _ref4 = _context3.t0;
              headImageUrl = _ref4.headImageUrl;
              nickName = _ref4.nickName;
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
var submitUserInfo = function submitUserInfo(params) {
  return /*#__PURE__*/function () {
    var _ref5 = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().mark(function _callee4(dispatch) {
      var _ref6, headImageUrl, _ref6$nickName, nickName, phone, obj;
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(_api_my__WEBPACK_IMPORTED_MODULE_5__[/* userInfo */ "a"])(params);
            case 2:
              _context4.t0 = _context4.sent;
              if (_context4.t0) {
                _context4.next = 5;
                break;
              }
              _context4.t0 = {};
            case 5:
              _ref6 = _context4.t0;
              headImageUrl = _ref6.headImageUrl;
              _ref6$nickName = _ref6.nickName;
              nickName = _ref6$nickName === void 0 ? 'zhoufei' : _ref6$nickName;
              phone = _ref6.phone;
              obj = {};
              headImageUrl && (obj['headImageUrl'] = headImageUrl);
              nickName && (obj['nickName'] = nickName);
              phone && (obj['phone'] = phone);
              if (!_utils_tools__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].isNullOrEmpty(obj)) {
                dispatch(globalUpdate(obj));
              }
            case 15:
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
    baseUrl: 'http://129.211.51.16:8080'
  },
  production: {
    baseUrl: 'http://129.211.51.16:8080'
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
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
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
  if (Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(info) === 'object') {
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
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var Tools = /*#__PURE__*/function () {
  function Tools() {
    Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Tools);
  }
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Tools, null, [{
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
  }]);
  return Tools;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ })

}]);
//# sourceMappingURL=common.js.map