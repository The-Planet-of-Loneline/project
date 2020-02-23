(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/nighthome/nighthome"],{

/***/ "./src/pages/nighthome/nighthome.jsx":
/*!*******************************************!*\
  !*** ./src/pages/nighthome/nighthome.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroQq = __webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js");

var _taroQq2 = _interopRequireDefault(_taroQq);

__webpack_require__(/*! ./nighthome.scss */ "./src/pages/nighthome/nighthome.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__22", "$compid__23", "$compid__24"], _this.config = {
      navigationBarTitleText: '孤独星球'
    }, _this.customComponents = ["Head", "NightCard", "Footer"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroQq2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "toWrite",
    value: function toWrite() {
      _taroQq2.default.redirectTo({
        url: '/pages/writeSecret/writeSecret'
      });
    }
  }, {
    key: "toMine",
    value: function toMine() {
      _taroQq2.default.redirectTo({
        url: '/pages/Mine/Mine'
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

      var _genCompid = (0, _taroQq.genCompid)(__prefix + "$compid__22"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__22 = _genCompid2[0],
          $compid__22 = _genCompid2[1];

      var _genCompid3 = (0, _taroQq.genCompid)(__prefix + "$compid__23"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__23 = _genCompid4[0],
          $compid__23 = _genCompid4[1];

      var _genCompid5 = (0, _taroQq.genCompid)(__prefix + "$compid__24"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__24 = _genCompid6[0],
          $compid__24 = _genCompid6[1];

      var text = this.$router.params.text;

      _taroQq.propsManager.set({
        "colorTA": "rgba(242, 245, 251, 1)",
        "colorWrite": "rgba(185, 189, 203, 1)",
        "onToWrite": this.toWrite.bind(this)
      }, $compid__22, $prevCompid__22);
      _taroQq.propsManager.set({
        "textValue": text
      }, $compid__23, $prevCompid__23);
      _taroQq.propsManager.set({
        "onToMine": this.toMine.bind(this)
      }, $compid__24, $prevCompid__24);
      Object.assign(this.__state, {
        $compid__22: $compid__22,
        $compid__23: $compid__23,
        $compid__24: $compid__24
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroQq.Component), _class.$$events = [], _class.$$componentPath = "pages/nighthome/nighthome", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./src/pages/nighthome/nighthome.scss":
/*!********************************************!*\
  !*** ./src/pages/nighthome/nighthome.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/nighthome/nighthome.jsx","runtime","vendors"]]]);