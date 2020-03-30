(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/daySwitch/daySwitch"],{

/***/ "./src/pages/daySwitch/daySwitch.jsx":
/*!*******************************************!*\
  !*** ./src/pages/daySwitch/daySwitch.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroQq = __webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js");

var _taroQq2 = _interopRequireDefault(_taroQq);

__webpack_require__(/*! ./daySwitch.scss */ "./src/pages/daySwitch/daySwitch.scss");

var _daySwitch = __webpack_require__(/*! ../img/daySwitch.png */ "./src/pages/img/daySwitch.png");

var _daySwitch2 = _interopRequireDefault(_daySwitch);

var _nightSwitch = __webpack_require__(/*! ../img/nightSwitch.png */ "./src/pages/img/nightSwitch.png");

var _nightSwitch2 = _interopRequireDefault(_nightSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Footer, _BaseComponent);

  function Footer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["to", "day", "night"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Footer, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Footer.prototype.__proto__ || Object.getPrototypeOf(Footer.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroQq2.default.RefsArray();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var to = this.$router.params.to;
      setTimeout(function () {
        _taroQq2.default.reLaunch({
          url: "/pages/" + to + "/" + to
        });
      }, 1500);
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var to = this.$router.params.to;
      Object.assign(this.__state, {
        to: to,
        day: _daySwitch2.default,
        night: _nightSwitch2.default
      });
      return this.__state;
    }
  }]);

  return Footer;
}(_taroQq.Component), _class.$$events = [], _class.$$componentPath = "pages/daySwitch/daySwitch", _temp2);
exports.default = Footer;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(Footer, true));

/***/ }),

/***/ "./src/pages/daySwitch/daySwitch.scss":
/*!********************************************!*\
  !*** ./src/pages/daySwitch/daySwitch.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/img/daySwitch.png":
/*!*************************************!*\
  !*** ./src/pages/img/daySwitch.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/daySwitch.png";

/***/ }),

/***/ "./src/pages/img/nightSwitch.png":
/*!***************************************!*\
  !*** ./src/pages/img/nightSwitch.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/nightSwitch.png";

/***/ })

},[["./src/pages/daySwitch/daySwitch.jsx","runtime","vendors"]]]);