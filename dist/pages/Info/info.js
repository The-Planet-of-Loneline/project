(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/Info/info"],{

/***/ "./src/pages/Info/info.jsx":
/*!*********************************!*\
  !*** ./src/pages/Info/info.jsx ***!
  \*********************************/
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

__webpack_require__(/*! ./info.scss */ "./src/pages/Info/info.scss");

var _fetch = __webpack_require__(/*! ../../service/fetch */ "./src/service/fetch.jsx");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardHistory = (_temp2 = _class = function (_BaseComponent) {
  _inherits(CardHistory, _BaseComponent);

  function CardHistory() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CardHistory);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CardHistory.__proto__ || Object.getPrototypeOf(CardHistory)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray14", "$compid__52"], _this.state = {
      comment: [{}]
    }, _this.config = {
      navigationBarTitleText: '孤独星球'
    }, _this.customComponents = ["InofoCard", "Footer"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CardHistory, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(CardHistory.prototype.__proto__ || Object.getPrototypeOf(CardHistory.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroQq2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      (0, _fetch2.default)('remind/night/remindbox/view/', {}, 'GET').then(function (res) {
        _this2.setState({
          comment: res.commentdata
        });
      });
    }
  }, {
    key: 'toSecret',
    value: function toSecret() {
      _taroQq2.default.reLaunch({
        url: '/pages/nighthome/nighthome'
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

      var _genCompid = (0, _taroQq.genCompid)(__prefix + "$compid__52"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__52 = _genCompid2[0],
          $compid__52 = _genCompid2[1];

      var loopArray14 = this.__state.comment.map(function (comment, index) {
        comment = {
          $original: (0, _taroQq.internal_get_original)(comment)
        };

        var _genCompid3 = (0, _taroQq.genCompid)(__prefix + 'bfzzzzzzzz' + index, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__51 = _genCompid4[0],
            $compid__51 = _genCompid4[1];

        _taroQq.propsManager.set({
          "time": comment.$original.CommentTime,
          "text": comment.$original.Comment,
          "sid": comment.$original.SecretId,
          "number": comment.$original.Num
        }, $compid__51, $prevCompid__51);
        return {
          $compid__51: $compid__51,
          $original: comment.$original
        };
      });

      _taroQq.propsManager.set({
        "colorMine": "rgba(80, 195, 243, 1)",
        "colorSecret": "rgba(194, 198, 206, 1)",
        "showImg": false,
        "onToSecret": this.toSecret.bind(this)
      }, $compid__52, $prevCompid__52);
      Object.assign(this.__state, {
        loopArray14: loopArray14,
        $compid__52: $compid__52
      });
      return this.__state;
    }
  }]);

  return CardHistory;
}(_taroQq.Component), _class.$$events = [], _class.$$componentPath = "pages/Info/info", _temp2);
exports.default = CardHistory;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(CardHistory, true));

/***/ }),

/***/ "./src/pages/Info/info.scss":
/*!**********************************!*\
  !*** ./src/pages/Info/info.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/Info/info.jsx","runtime","vendors"]]]);