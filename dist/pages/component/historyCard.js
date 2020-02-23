(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/component/historyCard"],{

/***/ "./src/pages/Mine/card.scss":
/*!**********************************!*\
  !*** ./src/pages/Mine/card.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/component/historyCard.jsx":
/*!*********************************************!*\
  !*** ./src/pages/component/historyCard.jsx ***!
  \*********************************************/
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

__webpack_require__(/*! ../Mine/card.scss */ "./src/pages/Mine/card.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HistoryCard = (_temp2 = _class = function (_BaseComponent) {
  _inherits(HistoryCard, _BaseComponent);

  function HistoryCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HistoryCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HistoryCard.__proto__ || Object.getPrototypeOf(HistoryCard)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = [], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HistoryCard, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(HistoryCard.prototype.__proto__ || Object.getPrototypeOf(HistoryCard.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroQq2.default.RefsArray();
    }
  }, {
    key: "toCard",
    value: function toCard() {
      _taroQq2.default.navigateTo({
        url: '/pages/cardHistory/cardHistory'
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return HistoryCard;
}(_taroQq.Component), _class.$$events = ["toCard"], _class.$$componentPath = "pages/component/historyCard", _temp2);
exports.default = HistoryCard;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(HistoryCard));

/***/ })

},[["./src/pages/component/historyCard.jsx","runtime","vendors"]]]);