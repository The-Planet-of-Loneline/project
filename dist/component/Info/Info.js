(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["component/Info/Info"],{

/***/ "./src/component/Info/Info.jsx":
/*!*************************************!*\
  !*** ./src/component/Info/Info.jsx ***!
  \*************************************/
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

__webpack_require__(/*! ./info.scss */ "./src/component/Info/info.scss");

var _close = __webpack_require__(/*! ../../assets/png/close.png */ "./src/assets/png/close.png");

var _close2 = _interopRequireDefault(_close);

var _fetch = __webpack_require__(/*! ../../service/fetch */ "./src/service/fetch.jsx");

var _fetch2 = _interopRequireDefault(_fetch);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Info.__proto__ || Object.getPrototypeOf(Info)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "Close", "checked", "placeHolder", "qq", "tel", "msg", "loading", "passed_id", "from"], _this.state = {
      checked: [0, 0],
      qq: '',
      tel: '',
      msg: '',
      placeHolder: ['请输入QQ', '请输入手机号'],
      loading: false
    }, _this.getInfo = function (kind, event) {
      var _this$state = _this.state,
          qq = _this$state.qq,
          tel = _this$state.tel;

      var info = event.target.value;
      if (!/\D/.test(info) || info === '') {
        if (kind === 'qq') {
          _this.setState({ qq: info });
        } else {
          _this.setState({ tel: info });
        }
      } else {
        if (kind === 'qq') {
          return qq;
        }
        return tel;
      }
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
    key: 'changeShowCli',
    value: function changeShowCli() {
      this.props.onChangeShowCli();
    }
  }, {
    key: 'proinfo',
    value: function proinfo() {
      var _state = this.state,
          checked = _state.checked,
          qq = _state.qq,
          tel = _state.tel,
          msg = _state.msg;

      var info = {
        contact_way: [checked[0] ? qq : '无', checked[1] ? tel : '无'],
        content: msg
      };
      return info;
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var _this2 = this;

      // submit content
      var passed_id = this.props.passed_id;
      var from = this.props.from;
      var loading = this.state.loading;

      var info = this.proinfo();
      this.setState({ loading: true });
      if (from === 'puter' && !loading) {
        (0, _fetch2.default)("application/" + passed_id + "/?status=2", info, 'PUT').then(function (data) {
          if (data.msg === 'success') {
            _taroQq2.default.showToast({
              title: '已接受'
            });
            // 更新 red point
            (0, _fetch2.default)("application/done/" + passed_id + "/", {}, 'POST');
            _this2.setState({ loading: false });
            _this2.props.onChangeCheck(1);
          } else if (data.msg === '需求已经被删除了!') {
            _taroQq2.default.showToast({
              title: '您已删除'
            });
            _this2.setState({ loading: false });
          } else if (data.msg === '已经处理过了!') {
            _taroQq2.default.showToast({
              title: '已处理'
            });
            _this2.setState({ loading: false });
          } else if (data.msg === 'Fail.') {
            _taroQq2.default.showToast({
              title: '服务器错误'
            });
          }_this2.setState({ loading: false });
        });
      } else if (from === 'applicant' && !loading) {
        (0, _fetch2.default)("requirement/application/" + passed_id + "/", info, 'POST').then(function (data) {
          if (data.msg === 'success') {
            _taroQq2.default.showToast({
              title: '发送成功'
            });
            _this2.setState({ loading: false });
          } else if (data.msg === '不能申请自己的需求') {
            _taroQq2.default.showToast({
              title: '我与我'
            });
            _this2.setState({ loading: false });
          } else if (data.msg === '已经申请过了!') {
            _taroQq2.default.showToast({
              title: '已处理'
            });
            _this2.setState({ loading: false });
          } else if (data.msg === 'Fail.') {
            _taroQq2.default.showToast({
              title: '服务器错误'
            });
          }_this2.setState({ loading: false });
        });
      }
      this.props.onChangeShowSub();
    }
  }, {
    key: 'enableSubmit',
    value: function enableSubmit() {
      var _state2 = this.state,
          qq = _state2.qq,
          tel = _state2.tel,
          msg = _state2.msg,
          checked = _state2.checked;

      var flag_qq = false;
      var flag_tel = false;
      if (checked[0]) {
        if (qq !== '' && !/\D/.test(qq)) {
          flag_qq = true;
        } else {
          return false;
        }
      }
      if (checked[1]) {
        if (tel !== '' && !/\D/.test(tel)) {
          flag_tel = true;
        } else {
          return false;
        }
      }
      if (flag_qq || flag_tel || msg !== '') {
        return true;
      }
      return false;
    }
  }, {
    key: 'changeCheck',
    value: function changeCheck(index) {
      var checked = this.state.checked;

      if (checked[index]) {
        checked[index] = 0;
      } else {
        checked[index] = 1;
      }
      this.setState({ checked: checked });
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      this.setState({
        msg: e.target.value
      });
    }
  }, {
    key: 'errorDate',
    value: function errorDate() {
      _taroQq2.default.showToast({
        title: '信息输入有误',
        icon: 'none'
      });
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(e) {
      e.stopPropagation();
    }
  }, {
    key: 'changeHolder',
    value: function changeHolder(touch, which) {
      var placeHolder = this.state.placeHolder;

      if (touch) {
        if (which) {
          placeHolder[1] = ' ';
        } else {
          placeHolder[1] = '请输入手机号';
        }
      } else {
        if (which) {
          placeHolder[0] = ' ';
        } else {
          placeHolder[0] = '请输入QQ';
        }
      }
      this.setState({ placeHolder: placeHolder });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state3 = this.__state,
          checked = _state3.checked,
          qq = _state3.qq,
          tel = _state3.tel,
          msg = _state3.msg,
          placeHolder = _state3.placeHolder,
          loading = _state3.loading;

      var anonymousState__temp = this.enableSubmit() ? 'sub-button able' : 'sub-button disable';
      this.anonymousFunc0 = this.enableSubmit() && !loading ? this.handleSubmit : this.errorDate;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        Close: _close2.default
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return Info;
}(_taroQq.Component), _class.$$events = ["handleTouchMove", "changeShowCli", "changeCheck", "getInfo", "changeHolder", "handleInputChange", "anonymousFunc0"], _class.defaultProps = {
  from: 'puter',
  passed_id: 0
}, _class.$$componentPath = "component/Info/Info", _temp2);
exports.default = Info;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(Info));

/***/ }),

/***/ "./src/component/Info/info.scss":
/*!**************************************!*\
  !*** ./src/component/Info/info.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/component/Info/Info.jsx","runtime","vendors"]]]);