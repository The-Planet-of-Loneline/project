(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/component/Head"],{

/***/ "./src/pages/component/Head.jsx":
/*!**************************************!*\
  !*** ./src/pages/component/Head.jsx ***!
  \**************************************/
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

__webpack_require__(/*! ../nighthome/Night.scss */ "./src/pages/nighthome/Night.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Head = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Head, _BaseComponent);

  function Head() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Head);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Head.__proto__ || Object.getPrototypeOf(Head)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "showUnderline", "colorTA", "colorWrite"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Head, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Head.prototype.__proto__ || Object.getPrototypeOf(Head.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroQq2.default.RefsArray();
    }
  }, {
    key: "toSecret",
    value: function toSecret() {
      this.props.onToSecret();
    }
  }, {
    key: "toWrite",
    value: function toWrite() {
      this.props.onToWrite();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          colorTA = _props.colorTA,
          colorWrite = _props.colorWrite,
          showUnderline = _props.showUnderline;

      var styleTA = {
        color: colorTA
      };
      var styleWrite = {
        color: colorWrite
      };

      var anonymousState__temp = (0, _taroQq.internal_inline_style)(styleTA);
      var anonymousState__temp2 = (0, _taroQq.internal_inline_style)(styleWrite);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        showUnderline: showUnderline
      });
      return this.__state;
    }
  }]);

  return Head;
}(_taroQq.Component), _class.$$events = ["toSecret", "toWrite"], _class.defaultProps = {
  colorTA: 'rgba(185, 189, 203, 1)',
  colorWrite: 'rgba(185, 189, 203, 1)',
  showUnderline: true
}, _class.$$componentPath = "pages/component/Head", _temp2);
exports.default = Head;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(Head));

/***/ }),

/***/ "./src/pages/nighthome/Night.scss":
/*!****************************************!*\
  !*** ./src/pages/nighthome/Night.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/component/Head.jsx","runtime","vendors"]]]);