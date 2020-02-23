(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/component/NightCard"],{

/***/ "./src/pages/component/NightCard.jsx":
/*!*******************************************!*\
  !*** ./src/pages/component/NightCard.jsx ***!
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

__webpack_require__(/*! ../nighthome/NightCard.scss */ "./src/pages/nighthome/NightCard.scss");

var _avatar = __webpack_require__(/*! ../img/avatar.png */ "./src/pages/img/avatar.png");

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NightCard = (_temp2 = _class = function (_BaseComponent) {
  _inherits(NightCard, _BaseComponent);

  function NightCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NightCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NightCard.__proto__ || Object.getPrototypeOf(NightCard)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["avatar", "textValue"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NightCard, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(NightCard.prototype.__proto__ || Object.getPrototypeOf(NightCard.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroQq2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'toComment',
    value: function toComment() {
      _taroQq2.default.navigateTo({
        url: "/pages/commentNight/comment?text=" + this.props.textValue
      });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {
        avatar: _avatar2.default
      });
      return this.__state;
    }
  }]);

  return NightCard;
}(_taroQq.Component), _class.$$events = ["toComment"], _class.defaultProps = {
  textValue: '你好呀'
}, _class.$$componentPath = "pages/component/NightCard", _temp2);
exports.default = NightCard;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(NightCard));

/***/ }),

/***/ "./src/pages/img/avatar.png":
/*!**********************************!*\
  !*** ./src/pages/img/avatar.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/avatar.png";

/***/ }),

/***/ "./src/pages/nighthome/NightCard.scss":
/*!********************************************!*\
  !*** ./src/pages/nighthome/NightCard.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/component/NightCard.jsx","runtime","vendors"]]]);