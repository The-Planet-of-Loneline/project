(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/component/deleteCard"],{

/***/ "./src/pages/component/deleteCard.jsx":
/*!********************************************!*\
  !*** ./src/pages/component/deleteCard.jsx ***!
  \********************************************/
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

__webpack_require__(/*! ./deleteCard.scss */ "./src/pages/component/deleteCard.scss");

var _fetch = __webpack_require__(/*! ../../service/fetch */ "./src/service/fetch.jsx");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeleteCard = (_temp2 = _class = function (_BaseComponent) {
  _inherits(DeleteCard, _BaseComponent);

  function DeleteCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DeleteCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeleteCard.__proto__ || Object.getPrototypeOf(DeleteCard)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["Debunkid"], _this.customComponents = ["Dialog"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DeleteCard, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(DeleteCard.prototype.__proto__ || Object.getPrototypeOf(DeleteCard.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroQq2.default.RefsArray();
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.props.onCloseDelete();
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete() {
      var _this2 = this;

      (0, _fetch2.default)("secret/delete/:secret_id/?secretId=" + this.props.Debunkid, {}, 'DELETE').then(function (res) {
        _taroQq2.default.showToast({
          title: '删除成功',
          icon: 'none'
        });
        _this2.props.onCloseDelete();
        _taroQq2.default.reLaunch({
          url: "/pages/Mine/Mine"
        });
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
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return DeleteCard;
}(_taroQq.Component), _class.$$events = ["cancel", "handleDelete"], _class.defaultProps = {
  Debunkid: 0
}, _class.$$componentPath = "pages/component/deleteCard", _temp2);
exports.default = DeleteCard;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(DeleteCard));

/***/ }),

/***/ "./src/pages/component/deleteCard.scss":
/*!*********************************************!*\
  !*** ./src/pages/component/deleteCard.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/component/deleteCard.jsx","runtime","vendors"]]]);