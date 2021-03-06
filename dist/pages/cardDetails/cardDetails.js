(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/cardDetails/cardDetails"],{

/***/ "./src/pages/cardDetails/cardDetails.jsx":
/*!***********************************************!*\
  !*** ./src/pages/cardDetails/cardDetails.jsx ***!
  \***********************************************/
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

__webpack_require__(/*! ./cardDetails.scss */ "./src/pages/cardDetails/cardDetails.scss");

var _fetch = __webpack_require__(/*! ../../service/fetch */ "./src/service/fetch.jsx");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardDetails = (_temp2 = _class = function (_BaseComponent) {
  _inherits(CardDetails, _BaseComponent);

  function CardDetails() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CardDetails);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CardDetails.__proto__ || Object.getPrototypeOf(CardDetails)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__21", "$compid__22", "$compid__23", "content", "able", "show"], _this.state = {
      show: false,
      content: {
        content: '',
        date: '',
        place: '',
        post_time: '',
        sender_nick_name: '',
        sender_portrait: 4,
        tag: '',
        time_end: 0,
        time_from: 0,
        title: '',
        type: ''
      }
    }, _this.changeShow = function () {
      var show = _this.state.show;

      if (show) {
        _this.setState({ show: false });
      } else {
        _this.setState({ show: true });
      }
    }, _this.toComfirm = function () {
      console.log('passed successfully');
    }, _this.customComponents = ["UserImg", "Info", "Footer"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CardDetails, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(CardDetails.prototype.__proto__ || Object.getPrototypeOf(CardDetails.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroQq2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var requirement_id = parseInt(this.$router.params.req_id);
      (0, _fetch2.default)("requirement/view/" + requirement_id + "/", {}, 'GET').then(function (data) {
        if (data.msg === 'success') {
          _this2.setState({ content: data.content });
        } else if (data.msg === '不见啦') {
          _this2.setState({
            show: false,
            content: {
              content: '该需求已被删除',
              date: '周八',
              place: '极乐净土',
              post_time: '2020.4.31',
              sender_nick_name: 'NOT FOUND',
              sender_portrait: 0,
              tag: '修仙',
              time_end: -24,
              time_from: -1,
              title: 'DELETED',
              type: '修仙'
            }
          });
        } else if (data.msg === 'Fail.') {
          _taroQq2.default.showToast({
            title: '服务器错误'
          });
          _taroQq2.default.navigateBack({
            delta: 1
          });
        }
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
    key: 'changeColor',
    value: function changeColor() {
      var id = this.$router.params.indexId;
      switch (id) {
        case '0':
          return 'card-a';
        case '1':
          return 'card-b';
        case '2':
          return 'card-c';
        case '3':
          return 'card-d';
        case '4':
          return 'card-e';
        case '5':
          return 'card-f';
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

      var _genCompid = (0, _taroQq.genCompid)(__prefix + "$compid__21"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__21 = _genCompid2[0],
          $compid__21 = _genCompid2[1];

      var _genCompid3 = (0, _taroQq.genCompid)(__prefix + "$compid__22"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__22 = _genCompid4[0],
          $compid__22 = _genCompid4[1];

      var _genCompid5 = (0, _taroQq.genCompid)(__prefix + "$compid__23"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__23 = _genCompid6[0],
          $compid__23 = _genCompid6[1];

      var _state = this.__state,
          show = _state.show,
          content = _state.content;

      var able = this.$router.params.able;
      var passed_id = this.$router.params.req_id;
      var anonymousState__temp = 'body-container ' + this.changeColor();
      _taroQq.propsManager.set({
        "userimg": content.sender_portrait,
        "size": "size-detail"
      }, $compid__21, $prevCompid__21);
      show && _taroQq.propsManager.set({
        "onChangeShowCli": this.changeShow,
        "onChangeShowSub": this.changeShow,
        "passed_id": passed_id,
        "from": "applicant"
      }, $compid__22, $prevCompid__22);
      _taroQq.propsManager.set({
        "mode": able === 'able' ? 'need' : 'my'
      }, $compid__23, $prevCompid__23);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__21: $compid__21,
        $compid__22: $compid__22,
        $compid__23: $compid__23,
        able: able
      });
      return this.__state;
    }
  }]);

  return CardDetails;
}(_taroQq.Component), _class.$$events = ["changeShow"], _class.defaultProps = {}, _class.$$componentPath = "pages/cardDetails/cardDetails", _temp2);
exports.default = CardDetails;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(CardDetails, true));

/***/ }),

/***/ "./src/pages/cardDetails/cardDetails.scss":
/*!************************************************!*\
  !*** ./src/pages/cardDetails/cardDetails.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/cardDetails/cardDetails.jsx","runtime","vendors"]]]);