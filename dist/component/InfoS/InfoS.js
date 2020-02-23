(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["component/InfoS/InfoS"],{

/***/ "./src/component/InfoS/InfoS.jsx":
/*!***************************************!*\
  !*** ./src/component/InfoS/InfoS.jsx ***!
  \***************************************/
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

__webpack_require__(/*! ./infoS.scss */ "./src/component/InfoS/infoS.scss");

var _close = __webpack_require__(/*! ./imgs/close.png */ "./src/component/InfoS/imgs/close.png");

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Info = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Info, _BaseComponent);

  function Info() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Info);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Info.__proto__ || Object.getPrototypeOf(Info)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["Close", "name", "college", "sex", "qq", "grade", "tel", "msg"], _this.state = {
      name: '这里是昵称',
      college: 'XXX学院',
      sex: '男',
      qq: '吴',
      grade: '19级',
      tel: '12345678910',
      msg: '需求(demand) 是指人们在某一特定的时期内在各种可能的价格下愿意并且能够购买某个具体商品的数量。'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Info, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Info.prototype.__proto__ || Object.getPrototypeOf(Info.prototype), '_constructor', this).call(this, props);

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
    key: 'changeShow',
    value: function changeShow() {
      this.props.onChangeShow();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          name = _state.name,
          college = _state.college,
          sex = _state.sex,
          qq = _state.qq,
          grade = _state.grade,
          tel = _state.tel,
          msg = _state.msg;

      Object.assign(this.__state, {
        Close: _close2.default
      });
      return this.__state;
    }
  }]);

  return Info;
}(_taroQq.Component), _class.$$events = ["changeShow"], _class.defaultProps = {}, _class.$$componentPath = "component/InfoS/InfoS", _temp2);
exports.default = Info;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(Info));

/***/ }),

/***/ "./src/component/InfoS/imgs/close.png":
/*!********************************************!*\
  !*** ./src/component/InfoS/imgs/close.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/component/InfoS/infoS.scss":
/*!****************************************!*\
  !*** ./src/component/InfoS/infoS.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/component/InfoS/InfoS.jsx","runtime","vendors"]]]);