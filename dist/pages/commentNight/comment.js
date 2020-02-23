(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/commentNight/comment"],{

/***/ "./src/pages/commentNight/comment.jsx":
/*!********************************************!*\
  !*** ./src/pages/commentNight/comment.jsx ***!
  \********************************************/
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

__webpack_require__(/*! ../index/index.scss */ "./src/pages/index/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Comment, _BaseComponent);

  function Comment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Comment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comment.__proto__ || Object.getPrototypeOf(Comment)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__27", "$compid__28", "$compid__29"], _this.config = {
      navigationBarTitleText: '孤独星球'
    }, _this.customComponents = ["Head", "SecretCard", "Footer"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Comment, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Comment.prototype.__proto__ || Object.getPrototypeOf(Comment.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroQq2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log(JSON.stringify(this.$router.params.text));
    }
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

      var _genCompid = (0, _taroQq.genCompid)(__prefix + "$compid__27"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__27 = _genCompid2[0],
          $compid__27 = _genCompid2[1];

      var _genCompid3 = (0, _taroQq.genCompid)(__prefix + "$compid__28"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__28 = _genCompid4[0],
          $compid__28 = _genCompid4[1];

      var _genCompid5 = (0, _taroQq.genCompid)(__prefix + "$compid__29"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__29 = _genCompid6[0],
          $compid__29 = _genCompid6[1];

      _taroQq.propsManager.set({
        "colorTA": "rgba(242, 245, 251, 1)",
        "onToWrite": this.toWrite.bind(this)
      }, $compid__27, $prevCompid__27);
      _taroQq.propsManager.set({
        "textValue": this.$router.params.text
      }, $compid__28, $prevCompid__28);
      _taroQq.propsManager.set({
        "onToMine": this.toMine.bind(this)
      }, $compid__29, $prevCompid__29);
      Object.assign(this.__state, {
        $compid__27: $compid__27,
        $compid__28: $compid__28,
        $compid__29: $compid__29
      });
      return this.__state;
    }
  }]);

  return Comment;
}(_taroQq.Component), _class.$$events = [], _class.defaultProps = {
  textValue: '你好呀'
}, _class.$$componentPath = "pages/commentNight/comment", _temp2);
exports.default = Comment;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(Comment, true));

/***/ })

},[["./src/pages/commentNight/comment.jsx","runtime","vendors"]]]);