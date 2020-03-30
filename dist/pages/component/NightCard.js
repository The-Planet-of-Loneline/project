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

var _img = __webpack_require__(/*! ../../assets/user_img/img0.png */ "./src/assets/user_img/img0.png");

var _img2 = _interopRequireDefault(_img);

var _img3 = __webpack_require__(/*! ../../assets/user_img/img1.png */ "./src/assets/user_img/img1.png");

var _img4 = _interopRequireDefault(_img3);

var _img5 = __webpack_require__(/*! ../../assets/user_img/img2.png */ "./src/assets/user_img/img2.png");

var _img6 = _interopRequireDefault(_img5);

var _img7 = __webpack_require__(/*! ../../assets/user_img/img3.png */ "./src/assets/user_img/img3.png");

var _img8 = _interopRequireDefault(_img7);

var _img9 = __webpack_require__(/*! ../../assets/user_img/img4.png */ "./src/assets/user_img/img4.png");

var _img10 = _interopRequireDefault(_img9);

var _img11 = __webpack_require__(/*! ../../assets/user_img/img5.png */ "./src/assets/user_img/img5.png");

var _img12 = _interopRequireDefault(_img11);

var _img13 = __webpack_require__(/*! ../../assets/user_img/img6.png */ "./src/assets/user_img/img6.png");

var _img14 = _interopRequireDefault(_img13);

var _img15 = __webpack_require__(/*! ../../assets/user_img/img7.png */ "./src/assets/user_img/img7.png");

var _img16 = _interopRequireDefault(_img15);

var _img17 = __webpack_require__(/*! ../../assets/user_img/img8.png */ "./src/assets/user_img/img8.png");

var _img18 = _interopRequireDefault(_img17);

var _img19 = __webpack_require__(/*! ../../assets/user_img/img9.png */ "./src/assets/user_img/img9.png");

var _img20 = _interopRequireDefault(_img19);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NightCard.__proto__ || Object.getPrototypeOf(NightCard)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "name", "textValue", "color", "Debunkid", "number", "sendTime"], _this.state = {
      name: ''
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
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
        url: "/pages/commentNight/comment?text=" + this.props.textValue + "&&color=" + this.props.color + "&&Debunkid=" + this.props.Debunkid
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

      var number = this.__props.number;

      var backgroundColorOne = {
        background: this.__props.color
      };

      switch (number) {
        case 0:
          this.setState({ name: _img2.default });
          break;
        case 1:
          this.setState({ name: _img4.default });
          break;
        case 2:
          this.setState({ name: _img6.default });
          break;
        case 3:
          this.setState({ name: _img8.default });
          break;
        case 4:
          this.setState({ name: _img10.default });
          break;
        case 5:
          this.setState({ name: _img12.default });
          break;
        case 6:
          this.setState({ name: _img14.default });
          break;
        case 7:
          this.setState({ name: _img16.default });
          break;
        case 8:
          this.setState({ name: _img18.default });
          break;
        case 9:
          this.setState({ name: _img20.default });
          break;
      }
      var anonymousState__temp = (0, _taroQq.internal_inline_style)(backgroundColorOne);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return NightCard;
}(_taroQq.Component), _class.$$events = ["toComment"], _class.defaultProps = {
  textValue: '',
  number: 0,
  color: '',
  sendTime: '',
  Debunkid: 0
}, _class.$$componentPath = "pages/component/NightCard", _temp2);
exports.default = NightCard;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(NightCard));

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