(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/share/Sidebar/Sidebar"],{

/***/ "./src/pages/share/Sidebar/Sidebar.jsx":
/*!*********************************************!*\
  !*** ./src/pages/share/Sidebar/Sidebar.jsx ***!
  \*********************************************/
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

__webpack_require__(/*! ./sidebar.scss */ "./src/pages/share/Sidebar/sidebar.scss");

var _close = __webpack_require__(/*! ../../../assets/png/close.png */ "./src/assets/png/close.png");

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Sidebar, _BaseComponent);

  function Sidebar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Sidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp15", "content", "choices", "loopArray5", "loopArray6", "loopArray7", "loopArray8", "style", "Close", "chosen", "placeHolder", "choose"], _this.changeDate = function (part, index) {
      var chosen = _this.state.chosen;

      switch (part) {
        case 'time':
          chosen.time.splice(index, 1, !chosen.time[index]);
          break;
        case 'type':
          chosen.type = index;
          chosen.choices = [0, 0];
          break;
        case 'detail':
          chosen.choices[0] = index;
          break;
        case 'place':
          chosen.choices[1] = index;
          break;
      }
      _this.setState({ chosen: chosen });
    }, _this.customComponents = ["Tag"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Sidebar, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Sidebar.prototype.__proto__ || Object.getPrototypeOf(Sidebar.prototype), '_constructor', this).call(this, props);
      this.state = {
        content: {
          time: ['周一', '周二', '周三', '周四', '周五', '周六', '周日', ' '],
          type: ['学习', '运动', '娱乐', '其他'],
          choices: [{
            details: ['自习', '看书', '上课', '其他'],
            place: ['教学楼', '图书馆', '其他', ' ']
          }, {
            details: ['跑步', '篮球', '足球', '羽毛球', '乒乓球', '网球', '其他', ' '],
            place: ['佑铭体育馆', '高职体育场', '乒 羽 中 心', '西区篮球场', '高职篮球场', '学子篮球场', '学子网球场', '其 他', ' ']
          }, {
            details: ['游戏', '吃饭', '电影', '其他'],
            place: ['校内', '校外', '其他', ' ']
          }, {
            details: [],
            place: ['校内', '校外', '其他', ' ']
          }]
        },
        placeHolder: ['起始时间', '结束时间'],
        style: 'body-container out',
        chosen: this.props.choose
      };
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
    key: 'reset',
    value: function reset() {
      this.props.onChosen(false);
      this.setState({
        chosen: {
          time: [0, 0, 0, 0, 0, 0, 0],
          during: ['', ''],
          type: 0,
          choices: [0, 0]
        }
      });
    }
  }, {
    key: 'onDuring',
    value: function onDuring(index) {
      var chosen = this.state.chosen;

      if (index === 1 && chosen.during[0] !== '' && parseInt(chosen.during[0]) >= parseInt(chosen.during[1])) {
        chosen.during[index] = '';
        this.setState({ chosen: chosen });
      }
      if (index === 0 && chosen.during[1] !== '' && parseInt(chosen.during[0]) >= parseInt(chosen.during[1])) {
        chosen.during[index] = '';
        this.setState({ chosen: chosen });
      }
    }
  }, {
    key: 'ifNum',
    value: function ifNum(index, e) {
      var inpuValue = e.target.value;
      var chosen = this.state.chosen;

      if (!/\D/.test(inpuValue) && (parseInt(inpuValue) > 0 && parseInt(inpuValue) <= 24 || inpuValue === '')) {
        // 判断是否为1-24
        chosen.during[index] = inpuValue;
        this.setState({ chosen: chosen });
      } else {
        return chosen.during[index];
      }
    }
  }, {
    key: 'changeShow',
    value: function changeShow() {
      var _this2 = this;

      this.flyin();
      this.chosenPass();
      setTimeout(function () {
        _this2.props.onChangeShow();
      }, 400);
    }
  }, {
    key: 'chosenPass',
    value: function chosenPass() {
      var chosen = this.state.chosen;

      this.props.onChosenPass(chosen);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      if (this.enableThis()) {
        this.props.onChosen(true);
        this.changeShow();
      }
    }
  }, {
    key: 'sumDay',
    value: function sumDay() {
      var chosen = this.state.chosen;

      var sum = 0;
      chosen.time.map(function (single) {
        sum += single;
      });
      return sum;
    }
  }, {
    key: 'enableThis',
    value: function enableThis() {
      var chosen = this.state.chosen;


      if (this.sumDay() !== 0 && chosen.type !== 0 && chosen.type !== 4 && chosen.choices[0] !== 0 && chosen.choices[1] !== 0) {
        return true;
      }
      if (this.sumDay() !== 0 && chosen.type === 4 && chosen.choices[1] !== 0) {
        return true;
      }
      return false;
    }
  }, {
    key: 'changeHolder',
    value: function changeHolder(touch, which) {
      var placeHolder = this.state.placeHolder;

      if (touch) {
        if (which) {
          placeHolder[1] = ' ';
        } else {
          placeHolder[1] = '结束时间';
        }
      } else {
        if (which) {
          placeHolder[0] = ' ';
        } else {
          placeHolder[0] = '起始时间';
        }
      }
      this.setState({ placeHolder: placeHolder });
    }
  }, {
    key: 'flyin',
    value: function flyin() {
      this.setState({ style: 'body-container in' });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var content = this.__state.content;
      var choices = this.__state.content.choices;
      var chosen = this.__state.chosen;
      var placeHolder = this.__state.placeHolder;
      var style = this.__state.style;

      var anonymousState__temp15 = this.enableThis() ? 'press submit-info' : 'press disable';
      var loopArray5 = content.time.map(function (time, index) {
        time = {
          $original: (0, _taroQq.internal_get_original)(time)
        };
        var $loopState__temp2 = index + 1;

        var _genCompid = (0, _taroQq.genCompid)(__prefix + 'gzzzzzzzzz' + index, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__16 = _genCompid2[0],
            $compid__16 = _genCompid2[1];

        _taroQq.propsManager.set({
          "indexId": index,
          "part": "time",
          "tagName": time.$original,
          "litDate": chosen.time,
          "onChangeDate": _this3.changeDate
        }, $compid__16, $prevCompid__16);
        return {
          $loopState__temp2: $loopState__temp2,
          $compid__16: $compid__16,
          $original: time.$original
        };
      });
      var loopArray6 = content.type.map(function (type, index) {
        type = {
          $original: (0, _taroQq.internal_get_original)(type)
        };
        var $loopState__temp4 = index + 1;
        var $loopState__temp6 = index + 1;

        var _genCompid3 = (0, _taroQq.genCompid)(__prefix + 'hzzzzzzzzz' + index, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__17 = _genCompid4[0],
            $compid__17 = _genCompid4[1];

        _taroQq.propsManager.set({
          "indexId": $loopState__temp6,
          "part": "type",
          "tagName": type.$original,
          "litDate": chosen.type,
          "onChangeDate": _this3.changeDate
        }, $compid__17, $prevCompid__17);
        return {
          $loopState__temp4: $loopState__temp4,
          $loopState__temp6: $loopState__temp6,
          $compid__17: $compid__17,
          $original: type.$original
        };
      });
      var loopArray7 = chosen.type !== 4 ? choices[chosen.type ? chosen.type - 1 : 0].details.map(function (details, index) {
        details = {
          $original: (0, _taroQq.internal_get_original)(details)
        };
        var $loopState__temp8 = chosen.type !== 4 ? index + 1 : null;
        var $loopState__temp10 = chosen.type !== 4 ? index + 1 : null;

        var _genCompid5 = (0, _taroQq.genCompid)(__prefix + 'izzzzzzzzz' + index, true),
            _genCompid6 = _slicedToArray(_genCompid5, 2),
            $prevCompid__18 = _genCompid6[0],
            $compid__18 = _genCompid6[1];

        chosen.type !== 4 && _taroQq.propsManager.set({
          "indexId": $loopState__temp10,
          "part": "detail",
          "tagName": details.$original,
          "litDate": chosen.choices[0],
          "onChangeDate": _this3.changeDate
        }, $compid__18, $prevCompid__18);
        return {
          $loopState__temp8: $loopState__temp8,
          $loopState__temp10: $loopState__temp10,
          $compid__18: $compid__18,
          $original: details.$original
        };
      }) : [];
      var loopArray8 = choices[chosen.type ? chosen.type - 1 : 0].place.map(function (place, index) {
        place = {
          $original: (0, _taroQq.internal_get_original)(place)
        };
        var $loopState__temp12 = index + 1;
        var $loopState__temp14 = index + 1;

        var _genCompid7 = (0, _taroQq.genCompid)(__prefix + 'jzzzzzzzzz' + index, true),
            _genCompid8 = _slicedToArray(_genCompid7, 2),
            $prevCompid__19 = _genCompid8[0],
            $compid__19 = _genCompid8[1];

        _taroQq.propsManager.set({
          "indexId": $loopState__temp14,
          "part": "place",
          "type": chosen.type,
          "tagName": place.$original,
          "litDate": chosen.choices[1],
          "onChangeDate": _this3.changeDate
        }, $compid__19, $prevCompid__19);
        return {
          $loopState__temp12: $loopState__temp12,
          $loopState__temp14: $loopState__temp14,
          $compid__19: $compid__19,
          $original: place.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp15: anonymousState__temp15,
        choices: choices,
        loopArray5: loopArray5,
        loopArray6: loopArray6,
        loopArray7: loopArray7,
        loopArray8: loopArray8,
        Close: _close2.default
      });
      return this.__state;
    }
  }]);

  return Sidebar;
}(_taroQq.Component), _class.$$events = ["changeShow", "ifNum", "changeHolder", "onDuring", "handleSubmit", "reset"], _class.defaultProps = {
  choose: {
    time: [0, 0, 0, 0, 0, 0, 0],
    during: ['', ''],
    type: 0,
    choices: [0, 0]
  }
}, _class.$$componentPath = "pages/share/Sidebar/Sidebar", _temp2);
exports.default = Sidebar;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(Sidebar));

/***/ }),

/***/ "./src/pages/share/Sidebar/sidebar.scss":
/*!**********************************************!*\
  !*** ./src/pages/share/Sidebar/sidebar.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/share/Sidebar/Sidebar.jsx","runtime","vendors"]]]);