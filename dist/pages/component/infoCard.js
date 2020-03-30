(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/component/infoCard"],{

/***/ "./src/pages/Info/infoCard.scss":
/*!**************************************!*\
  !*** ./src/pages/Info/infoCard.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/component/infoCard.jsx":
/*!******************************************!*\
  !*** ./src/pages/component/infoCard.jsx ***!
  \******************************************/
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

__webpack_require__(/*! ../Info/infoCard.scss */ "./src/pages/Info/infoCard.scss");

var _arrow_right = __webpack_require__(/*! ../img/arrow_right.png */ "./src/pages/img/arrow_right.png");

var _arrow_right2 = _interopRequireDefault(_arrow_right);

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

var _fetch = __webpack_require__(/*! ../../service/fetch */ "./src/service/fetch.jsx");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoCard = (_temp2 = _class = function (_BaseComponent) {
  _inherits(InfoCard, _BaseComponent);

  function InfoCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InfoCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InfoCard.__proto__ || Object.getPrototypeOf(InfoCard)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["arrow", "name", "history", "sid", "number", "time", "text"], _this.state = {
      name: '',
      history: []
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InfoCard, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(InfoCard.prototype.__proto__ || Object.getPrototypeOf(InfoCard.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroQq2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      (0, _fetch2.default)("secret/view/:secret_id/?secretId=" + this.props.sid, {}, 'GET').then(function (res) {
        _this2.setState({ history: res.secret });
      });
    }
  }, {
    key: 'Info',
    value: function Info() {
      _taroQq2.default.navigateTo({
        url: "/pages/infoalert/infoalert?Debunkid=" + this.props.sid + "&&Text=" + this.state.history.Content + "&&color=" + this.state.history.Colour
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

      switch (this.__props.number) {
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
          break;}
      Object.assign(this.__state, {
        arrow: _arrow_right2.default
      });
      return this.__state;
    }
  }]);

  return InfoCard;
}(_taroQq.Component), _class.$$events = ["Info"], _class.defaultProps = {
  time: '',
  text: '',
  sid: '',
  number: 0
}, _class.$$componentPath = "pages/component/infoCard", _temp2);
exports.default = InfoCard;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(InfoCard));

/***/ }),

/***/ "./src/pages/img/arrow_right.png":
/*!***************************************!*\
  !*** ./src/pages/img/arrow_right.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

},[["./src/pages/component/infoCard.jsx","runtime","vendors"]]]);