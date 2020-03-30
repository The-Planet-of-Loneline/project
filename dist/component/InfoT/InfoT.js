(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["component/InfoT/InfoT"],{

/***/ "./src/component/InfoT/InfoT.jsx":
/*!***************************************!*\
  !*** ./src/component/InfoT/InfoT.jsx ***!
  \***************************************/
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

__webpack_require__(/*! ./infoT.scss */ "./src/component/InfoT/infoT.scss");

var _close = __webpack_require__(/*! ../../assets/png/close.png */ "./src/assets/png/close.png");

var _close2 = _interopRequireDefault(_close);

var _fetch = __webpack_require__(/*! ../../service/fetch */ "./src/service/fetch.jsx");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoT = (_temp2 = _class = function (_BaseComponent) {
  _inherits(InfoT, _BaseComponent);

  function InfoT() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InfoT);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InfoT.__proto__ || Object.getPrototypeOf(InfoT)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["Close", "able", "name", "college", "sex", "qq", "grade", "tel", "msg", "req_id"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InfoT, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(InfoT.prototype.__proto__ || Object.getPrototypeOf(InfoT.prototype), '_constructor', this).call(this, props);

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
    key: 'changeShow',
    value: function changeShow() {
      this.props.onChangeShowD('0');
    }
  }, {
    key: 'agree',
    value: function agree() {
      //accept function
      this.props.onChangeShowD('2');
    }
  }, {
    key: 'reject',
    value: function reject() {
      var _this2 = this;

      // reject function
      var application_id = this.props.req_id;
      (0, _fetch2.default)("application/" + application_id + "/?status=3", {
        contact_way: ['无', '无'],
        content: "拒绝"
      }, 'PUT').then(function (data) {
        if (data.msg === 'success') {
          _taroQq2.default.showToast({
            title: '已拒绝'
          });
          _this2.props.onChangeCheck(2);
        } else if (data.msg === '需求已经被删除了!') {
          _taroQq2.default.showToast({
            title: '您已删除'
          });
        } else if (data.msg === '已经处理过了!') {
          _taroQq2.default.showToast({
            title: '已处理'
          });
        } else if (data.msg === 'Fail.') {
          _taroQq2.default.showToast({
            title: '服务器错误'
          });
        }
      });
      this.props.onChangeShowD('0');
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(e) {
      e.stopPropagation();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          able = _props.able,
          name = _props.name,
          college = _props.college,
          sex = _props.sex,
          qq = _props.qq,
          grade = _props.grade,
          tel = _props.tel,
          msg = _props.msg;

      Object.assign(this.__state, {
        Close: _close2.default,
        able: able,
        name: name,
        college: college,
        sex: sex,
        qq: qq,
        grade: grade,
        tel: tel,
        msg: msg
      });
      return this.__state;
    }
  }]);

  return InfoT;
}(_taroQq.Component), _class.$$events = ["handleTouchMove", "changeShow", "agree", "reject"], _class.defaultProps = {
  pass: {
    name: '这里是昵称',
    college: 'XXX学院',
    sex: '男',
    qq: '吴',
    grade: '19级',
    tel: '12345678910',
    msg: '需求(demand) 是指人们在某一特定的时期内在各种可能的价格下愿意并且能够购买某个具体商品的数量。'
  }
}, _class.$$componentPath = "component/InfoT/InfoT", _temp2);
exports.default = InfoT;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(InfoT));

/***/ }),

/***/ "./src/component/InfoT/infoT.scss":
/*!****************************************!*\
  !*** ./src/component/InfoT/infoT.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/component/InfoT/InfoT.jsx","runtime","vendors"]]]);