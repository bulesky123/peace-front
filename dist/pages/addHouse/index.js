(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/addHouse/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/addHouse/index.jsx":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/addHouse/index.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components */ "./src/components/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.less */ "./src/pages/addHouse/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);














var AddHouse = /*#__PURE__*/function (_React$Component) {
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AddHouse, _React$Component);
  var _super = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AddHouse);
  function AddHouse(props) {
    var _this;
    Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, AddHouse);
    _this = _super.call(this, props);
    _this.onSubmit = _this.onSubmit.bind(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    _this.state = {
      name: '',
      // 房屋名称
      address: '',
      // 地址
      area: '',
      // 所在区
      contactMobile: '',
      // 看房联系人手机号
      contactName: '',
      // 看房人联系人姓名
      contactSex: '',
      // 性别
      floorNum: '',
      // 楼层数
      heatingType: '',
      // 供暖类型
      hotWaterFlag: '',
      // 热水开关
      houseType: '',
      //
      ielevatorStatus: '',
      // 电梯状态：是/否
      layerList: '',
      roomNamePrefix: '',
      // 房间名称前缀
      roomNum: '' // 房间数
    };

    return _this;
  }
  Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(AddHouse, [{
    key: "handleChange",
    value: function handleChange(key, value) {
      console.log(key, value);
      this.setState(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, key, value));
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      console.log(this.state);
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
      var _this2 = this;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
          className: "add-house-container",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "input-item",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "input-label",
              children: "\u623F\u5C4B\u540D\u79F0"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "d"], {
              value: this.state.name,
              onInput: function onInput(e) {
                return _this2.handleChange('name', e.detail.value);
              },
              className: "input-test",
              type: "text",
              placeholder: "\u8BF7\u8F93\u5165\uFF08\u5FC5\u586B\uFF09"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "input-item",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "input-label",
              children: "\u770B\u623F\u8054\u7CFB\u4EBA"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "d"], {
              value: this.state.contactName,
              className: "input-test",
              type: "text",
              placeholder: "\u8BF7\u8F93\u5165\uFF08\u5FC5\u586B\uFF09",
              onInput: function onInput(e) {
                return _this2.handleChange('contactName', e.detail.value);
              }
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "input-item",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "input-label",
              children: "\u8054\u7CFB\u7535\u8BDD"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "d"], {
              value: this.state.contactMobile,
              className: "input-test",
              type: "text",
              placeholder: "\u8BF7\u8F93\u5165\uFF08\u5FC5\u586B\uFF09",
              onInput: function onInput(e) {
                return _this2.handleChange('contactMobile', e.detail.value);
              }
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_10__[/* FormPicker */ "a"], {
            lable: "\u6027\u522B",
            placeholder: "\u8BF7\u8F93\u5165\uFF08\u5FC5\u586B\uFF09",
            range: ['男士', '女士'],
            onChange: function onChange(val) {
              return _this2.handleChange('contactSex', val);
            },
            state: this.state.contactSex
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_10__[/* FormPicker */ "a"], {
            lable: "\u6240\u5C5E\u5730\u533A",
            placeholder: "\u8BF7\u8F93\u5165\uFF08\u5FC5\u586B\uFF09",
            range: ['男', '女'],
            onChange: function onChange(val) {
              return _this2.handleChange('area', val);
            },
            state: this.state.area
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_10__[/* FormPicker */ "a"], {
            lable: "\u4F4D\u7F6E(\u62DB\u79DF\u7528)",
            placeholder: "\u8BF7\u8F93\u5165\uFF08\u5FC5\u586B\uFF09",
            range: ['男', '女'],
            onChange: function onChange(val) {
              return _this2.handleChange('address', val);
            },
            state: this.state.address
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_10__[/* FormPicker */ "a"], {
            lable: "\u623F\u5C4B\u7C7B\u578B",
            placeholder: "\u8BF7\u8F93\u5165\uFF08\u5FC5\u586B\uFF09",
            range: ['村屋/自建公寓', '市区/独栋品质社区', '小区/公寓', '其他类型'],
            onChange: function onChange(val) {
              return _this2.handleChange('houseType', val);
            },
            state: this.state.houseType
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_10__[/* FormPicker */ "a"], {
            lable: "\u7535\u68AF",
            placeholder: "\u8BF7\u8F93\u5165\uFF08\u5FC5\u586B\uFF09",
            range: ['有', '无'],
            onChange: function onChange(val) {
              return _this2.handleChange('ielevatorStatus', val);
            },
            state: this.state.ielevatorStatus
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_10__[/* FormPicker */ "a"], {
            lable: "\u4F9B\u6696",
            placeholder: "\u8BF7\u8F93\u5165\uFF08\u5FC5\u586B\uFF09",
            range: ['自产暖', '集中供暖', '无暖气'],
            onChange: function onChange(val) {
              return _this2.handleChange('heatingType', val);
            },
            state: this.state.heatingType
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "input-item",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "input-label",
              children: "\u603B\u697C\u5C42"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "d"], {
              value: this.state.floorNum,
              className: "input-test",
              type: "number",
              placeholder: "\u8BF7\u8F93\u5165\uFF08\u5FC5\u586B\uFF09",
              onInput: function onInput(e) {
                return _this2.handleChange('floorNum', e.detail.value);
              }
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "input-item",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "input-label",
              children: "\u6BCF\u5C42\u623F\u95F4\u6570"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "d"], {
              value: this.state.roomNum,
              className: "input-test",
              type: "number",
              placeholder: "\u8BF7\u8F93\u5165\uFF08\u5FC5\u586B\uFF09",
              onInput: function onInput(e) {
                return _this2.handleChange('roomNum', e.detail.value);
              }
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "input-item",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "input-label",
              children: "\u623F\u53F7\u524D\u7F00"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Input */ "d"], {
              value: this.state.roomNamePrefix,
              className: "input-test",
              type: "text",
              placeholder: "\u9009\u586B\uFF0C\u5982\u586B1\u53F7\u697C\uFF0C\u5219\u623F\u53F7\u4E3A1\u53F7\u697C101",
              onInput: function onInput(e) {
                return _this2.handleChange('roomNamePrefix', e.detail.value);
              }
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "input-item",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "input-label",
              children: "\u623F\u5C4B\u70ED\u6C34\u8BA1\u91CF\u6536\u8D39"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Switch */ "n"], {
              value: this.state.hotWaterFlag,
              className: "input-test",
              checked: true,
              onChange: function onChange(val) {
                return _this2.handleChange('hotWaterFlag', e.detail.value);
              }
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
          className: "house-list",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
            className: "house-head",
            children: ["\u623F\u5C4B\u5217\u8868", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "tips",
              children: "(\u53EF\u4EE5\u81EA\u4E3B\u9009\u62E9\u623F\u95F4\u53F7)"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
            className: "house-num",
            children: "\u5DF2\u900916\u95F4"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
          className: "house-container",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "fold-title",
            children: "1\u5C42"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "fold-container",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "flod-item",
              children: "101"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "flod-item",
              children: "101"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "flod-item",
              children: "101"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "flod-item",
              children: "101"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "flod-item",
              children: "101"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "flod-item",
              children: "101"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "flod-item add",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_9__[/* AtIcon */ "c"], {
                value: "add",
                size: 20,
                color: "#1846C1"
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "fold-title",
            children: "2\u5C42"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "fold-container",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "flod-item",
              children: "101"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "flod-item",
              children: "101"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "flod-item",
              children: "101"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "flod-item",
              children: "101"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "flod-item",
              children: "101"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "flod-item",
              children: "101"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "o"], {
              className: "flod-item add",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_9__[/* AtIcon */ "c"], {
                value: "add",
                size: 20,
                color: "#1846C1"
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "q"], {
            className: "add-house-btn",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_9__[/* AtButton */ "b"], {
              onClick: this.onSubmit,
              type: "default",
              size: "small",
              children: "\u4FDD\u5B58"
            })
          })]
        })]
      });
    }
  }]);
  return AddHouse;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
/* harmony default export */ __webpack_exports__["a"] = (AddHouse);

/***/ }),

/***/ "./src/components/form-picker/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/form-picker/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
    _useState2 = Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
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
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Picker */ "i"], Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(E_zufang_peace_front_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
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
/*! exports provided: FormPicker */
/*! exports used: FormPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _form_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-picker */ "./src/components/form-picker/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _form_picker__WEBPACK_IMPORTED_MODULE_0__["a"]; });




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



/***/ }),

/***/ "./src/pages/addHouse/index.less":
/*!***************************************!*\
  !*** ./src/pages/addHouse/index.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/addHouse/index.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map