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
/*! exports provided: getHouse, addHouse, delHouse, queryHouseDetail */
/*! exports used: addHouse, delHouse, getHouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getHouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addHouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return delHouse; });
/* unused harmony export queryHouseDetail */
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

/***/ }),

/***/ "./src/api/my.ts":
/*!***********************!*\
  !*** ./src/api/my.ts ***!
  \***********************/
/*! exports provided: userInfo, addManager */
/*! exports used: addManager, userInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return userInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addManager; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/http */ "./src/utils/http.ts");
/* harmony import */ var _constants_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/status */ "./src/constants/status.js");


var userInfo = function userInfo(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/info"), params);
};
var addManager = function addManager(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/user/".concat(_constants_status__WEBPACK_IMPORTED_MODULE_1__[/* HTTP_VERSION */ "b"], "/info"), params);
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
    className: "input-item",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "o"], {
      className: "input-label",
      children: lable
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Picker */ "i"], Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      className: "input-test"
    }, props), {}, {
      placeholder: placeholder,
      mode: "selector",
      range: range,
      onChange: handlChange,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
        className: "picker",
        children: [stateValue, " ", hasIcon && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtIcon */ "c"], {
          value: "chevron-right",
          size: "20"
        })]
      })
    }))]
  });
});

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
              return Object(_api_my__WEBPACK_IMPORTED_MODULE_5__[/* userInfo */ "b"])({});
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
      var _ref2, data, _ref3, list;
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_my__WEBPACK_IMPORTED_MODULE_3__[/* userInfo */ "b"])({});
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
              _ref3 = data.data || {}, list = _ref3.list;
              dispatch(globalUpdate({
                list: list || [1, 2]
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
      var _yield$getHouse, data;
      return Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_house__WEBPACK_IMPORTED_MODULE_3__[/* getHouse */ "c"])({});
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

/***/ })

}]);
//# sourceMappingURL=common.js.map