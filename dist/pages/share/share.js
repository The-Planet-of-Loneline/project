(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/share/share"],{

/***/ "./src/pages/share/back.png":
/*!**********************************!*\
  !*** ./src/pages/share/back.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAwCAYAAAALiLqjAAACiklEQVRYhe2Wu2tUURCHf3fO7pnZNe/s7r0zS2yCpbGwDQFRwU5Bm5RqKq20sdPGB9E/QBARBAu1CCimCaJFfCCIrYQEbGIhaWKCMZhkY5GHd297DtjswG2/79w5c2YG6EQn/nckpUp91Hn7SGILkPQEgCQavSQ6RmxzTmzbiW07timgtz8OvaxHSWxxHy627VinAatFgDeOkOi3PJxYf7pKOh4Ox9Bw4u09sbb24WKrKNtlAKUwdldWT0Q/E+vWP7iuoWoT4XAMNhOxd+1psXV4uw7AB8K7awnbC2LdyME3wdldoNYdCEc54exlO1y3IHobQDWQXet2kj0tVMsmsT4EBnoC4VZ1rPcd23p7rdsUUNNAOEBs94htrQ0uOgNk9VA2k7cbhRe65cRmgcFmKNyTt2vEulLI+xf4xkgoHM7bOLEtt6fFFoD6oWA2fHqaWDdzp24R2zyQHg4+OSo2SmLf29IitghunARAwXzi5lVi+5MXoGznAbhgOAA4r2dJdCkvSMS+AnYwigCARzW7RKK/8u0gYXsVU1JGOb1AuZdLrBsJ2xsAlXgS0VtUaA+JZK+Bvr5Ijv5esE3mh4pj3XCSPQJ6BiJJ0gMl0Tv5sejY1p3Xx5EEOxISe5KfA7sj8gHi3YkNObFnxTFJojeBelcsSc2xThea3yqxXokkAICeASc26/IXv/NdRPg2sRu+MeLEPhT+ZAViEwjfKvaiMVwSncsJWiS2BGdnIgl2JMQ237bZsf1GKTuGGJ0XQIJSepzEFgrt/QdYTyHS+k6o2ChVsuXc+2iR2POILQWA1MdIbInY9tI1A6SNeALAwTfPOdG3TvQTvI0jWtnmJahnqAw2AZRjwzvRCeAvVpHOCW0p2yQAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/pages/share/share.jsx":
/*!***********************************!*\
  !*** ./src/pages/share/share.jsx ***!
  \***********************************/
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

__webpack_require__(/*! ./share.scss */ "./src/pages/share/share.scss");

var _back = __webpack_require__(/*! ./back.png */ "./src/pages/share/back.png");

var _back2 = _interopRequireDefault(_back);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Share = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Share, _BaseComponent);

  function Share() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Share);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Share.__proto__ || Object.getPrototypeOf(Share)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__13", "$compid__14", "Back", "title", "show", "content", "tagChosen"], _this.state = {
      show: false,
      title: '',
      content: '',
      tagChosen: false
    }, _this.changeShow = function () {
      var show = _this.state.show;

      if (show) {
        _this.setState({ show: false });
      } else {
        _this.setState({ show: true });
      }
    }, _this.getInfo = function (name, event) {
      _this.setState(_defineProperty({}, name, event.target.value));
    }, _this.onChosen = function () {
      _this.setState({ tagChosen: true });
    }, _this.customComponents = ["Sidebar", "Footer"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Share, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Share.prototype.__proto__ || Object.getPrototypeOf(Share.prototype), '_constructor', this).call(this, props);

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
    key: 'backToDay',
    value: function backToDay() {
      _taroQq2.default.redirectTo({
        url: '../day/day'
      });
    }
  }, {
    key: 'enableShare',
    value: function enableShare() {
      var _state = this.state,
          title = _state.title,
          content = _state.content,
          tagChosen = _state.tagChosen;

      if (title !== '' && content !== '' && tagChosen) {
        return true;
      }
      return false;
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroQq.genCompid)(__prefix + "$compid__13"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__13 = _genCompid2[0],
          $compid__13 = _genCompid2[1];

      var _genCompid3 = (0, _taroQq.genCompid)(__prefix + "$compid__14"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__14 = _genCompid4[0],
          $compid__14 = _genCompid4[1];

      var _state2 = this.__state,
          show = _state2.show,
          title = _state2.title,
          content = _state2.content;

      var anonymousState__temp = this.enableShare() ? 'share-button able' : 'share-button disable';
      this.anonymousFunc0 = this.enableShare() ? null : this.getInfo.bind(this, 'content');
      show && _taroQq.propsManager.set({
        "onChangeShow": this.changeShow,
        "onChosen": this.onChosen,
        "passed": "true"
      }, $compid__13, $prevCompid__13);
      _taroQq.propsManager.set({
        "mode": "need"
      }, $compid__14, $prevCompid__14);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__13: $compid__13,
        $compid__14: $compid__14,
        Back: _back2.default
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return Share;
}(_taroQq.Component), _class.$$events = ["backToDay", "anonymousFunc0", "getInfo", "changeShow"], _class.defaultProps = {}, _class.$$componentPath = "pages/share/share", _temp2);
exports.default = Share;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(Share, true));

/***/ }),

/***/ "./src/pages/share/share.scss":
/*!************************************!*\
  !*** ./src/pages/share/share.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/share/share.jsx","runtime","vendors"]]]);