(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/component/comment"],{

/***/ "./src/pages/component/comment.jsx":
/*!*****************************************!*\
  !*** ./src/pages/component/comment.jsx ***!
  \*****************************************/
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

__webpack_require__(/*! ./comment.scss */ "./src/pages/component/comment.scss");

var _fetch = __webpack_require__(/*! ../../service/fetch */ "./src/service/fetch.jsx");

var _fetch2 = _interopRequireDefault(_fetch);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comment.__proto__ || Object.getPrototypeOf(Comment)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["inpuValue", "Debunkid"], _this.state = {
      inpuValue: '说点什么吧...'
    }, _this.customComponents = ["Dialog"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Comment, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Comment.prototype.__proto__ || Object.getPrototypeOf(Comment.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroQq2.default.RefsArray();
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      this.setState({
        inpuValue: e.target.value
      });
    }
  }, {
    key: 'handleInput',
    value: function handleInput() {
      this.setState({
        inpuValue: ''
      });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      var _this2 = this;

      if (this.state.inpuValue != '' && this.state.inpuValue != '说点什么吧...') {
        this.props.onCloseInput();
        (0, _fetch2.default)("comment/create/?secretId=" + this.props.Debunkid, {
          comment: this.state.inpuValue
        }, 'POST').then(function (res) {
          (0, _fetch2.default)("secret/view/:secret_id?secretId=" + _this2.props.Debunkid, {}, 'GET').then(function (data) {
            _taroQq2.default.redirectTo({
              url: "/pages/commentNight/comment?text=" + data.secret.Content + "&&color=" + data.secret.Colour + "&&Debunkid=" + data.secret.Debunkid
            });
          });
        });
      }
    }
  }, {
    key: 'handleCloseComment',
    value: function handleCloseComment() {
      if (this.state.inpuValue == '' || this.state.inpuValue == '说点什么吧...') {
        this.props.onCloseInput();
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
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Comment;
}(_taroQq.Component), _class.$$events = ["handleInput", "handleInputChange", "handleCloseComment", "handleClose"], _class.defaultProps = {
  Debunkid: 0
}, _class.$$componentPath = "pages/component/comment", _temp2);
exports.default = Comment;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(Comment));

/***/ }),

/***/ "./src/pages/component/comment.scss":
/*!******************************************!*\
  !*** ./src/pages/component/comment.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/component/comment.jsx","runtime","vendors"]]]);