(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/component/secretCard"],{

/***/ "./src/pages/commentNight/secretCard.scss":
/*!************************************************!*\
  !*** ./src/pages/commentNight/secretCard.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/component/secretCard.jsx":
/*!********************************************!*\
  !*** ./src/pages/component/secretCard.jsx ***!
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

__webpack_require__(/*! ../commentNight/secretCard.scss */ "./src/pages/commentNight/secretCard.scss");

var _comment = __webpack_require__(/*! ../img/comment.png */ "./src/pages/img/comment.png");

var _comment2 = _interopRequireDefault(_comment);

var _fetch = __webpack_require__(/*! ../../service/fetch */ "./src/service/fetch.jsx");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SecretCard = (_temp2 = _class = function (_BaseComponent) {
  _inherits(SecretCard, _BaseComponent);

  function SecretCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SecretCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SecretCard.__proto__ || Object.getPrototypeOf(SecretCard)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray12", "$compid__45", "commentimg", "showInput", "page", "Debunkid", "color", "textValue", "showComment"], _this.state = {
      showInput: false,
      comment: [],
      page: 1
    }, _this.config = {
      navigationBarTitleText: '孤独星球'
    }, _this.customComponents = ["ReplyCard", "Comment"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SecretCard, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(SecretCard.prototype.__proto__ || Object.getPrototypeOf(SecretCard.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroQq2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      (0, _fetch2.default)("comment/history/:secret_id?secretId=" + this.props.Debunkid + "&&page=" + this.state.page, {}, 'GET').then(function (res) {
        _this2.setState({
          comment: res.history
        });
      });
    }
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
    key: 'onShowInput',
    value: function onShowInput() {
      this.setState({
        showInput: true
      });
    }
  }, {
    key: 'onCloseInput',
    value: function onCloseInput() {
      this.setState({
        showInput: false
      });
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      var _this3 = this;

      (0, _fetch2.default)("comment/history/:secret_id?secretId=" + this.props.Debunkid + "&&page=" + 1, {}, 'GET').then(function (res) {
        _this3.setState({
          comment: res.history
        });
      });
    }
  }, {
    key: 'ReachBottom',
    value: function ReachBottom() {
      var _this4 = this;

      var page = this.state.page;

      if (this.state.comment.length % 5 == 0) {
        this.setState({
          page: page + 1
        }, function () {
          (0, _fetch2.default)("comment/history/:secret_id?secretId=" + _this4.props.Debunkid + "&&page=" + _this4.state.page, {}, 'GET').then(function (res) {
            _this4.setState({
              comment: _this4.state.comment.concat(res.history)
            });
          });
        });
      }
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroQq.genCompid)(__prefix + "$compid__45"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__45 = _genCompid2[0],
          $compid__45 = _genCompid2[1];

      var color = this.__props.color;

      var backgroundColor = {
        background: color
      };
      var anonymousState__temp = (0, _taroQq.internal_inline_style)(backgroundColor);
      var loopArray12 = this.__state.comment ? this.__state.comment.map(function (comment, _anonIdx) {
        comment = {
          $original: (0, _taroQq.internal_get_original)(comment)
        };

        var _genCompid3 = (0, _taroQq.genCompid)(__prefix + 'bdzzzzzzzz' + _anonIdx, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__44 = _genCompid4[0],
            $compid__44 = _genCompid4[1];

        _taroQq.propsManager.set({
          "time": comment.$original.CommentTime,
          "text": comment.$original.Comment,
          "num": comment.$original.Num
        }, $compid__44, $prevCompid__44);
        return {
          $compid__44: $compid__44,
          $original: comment.$original
        };
      }) : [];
      this.__state.showInput && _taroQq.propsManager.set({
        "onCloseInput": this.onCloseInput.bind(this),
        "Debunkid": this.__props.Debunkid
      }, $compid__45, $prevCompid__45);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray12: loopArray12,
        $compid__45: $compid__45,
        commentimg: _comment2.default
      });
      return this.__state;
    }
  }]);

  return SecretCard;
}(_taroQq.Component), _class.$$events = ["onShowInput", "ReachBottom"], _class.defaultProps = {
  textValue: '你好呀',
  num: '0',
  time: '',
  color: '',
  showComment: true,
  Debunkid: 0
}, _class.$$componentPath = "pages/component/secretCard", _temp2);
exports.default = SecretCard;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(SecretCard));

/***/ }),

/***/ "./src/pages/img/comment.png":
/*!***********************************!*\
  !*** ./src/pages/img/comment.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

},[["./src/pages/component/secretCard.jsx","runtime","vendors"]]]);