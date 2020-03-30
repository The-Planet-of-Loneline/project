(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/day/Screening/Screening"],{

/***/ "./src/pages/day/Screening/Screening.jsx":
/*!***********************************************!*\
  !*** ./src/pages/day/Screening/Screening.jsx ***!
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

__webpack_require__(/*! ./screening.scss */ "./src/pages/day/Screening/screening.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screening = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Screening, _BaseComponent);

  function Screening() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Screening);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Screening.__proto__ || Object.getPrototypeOf(Screening)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["chosen", "anonymousState__temp11", "content", "tStyle", "oStyle", "placeHolder"], _this.state = {
      content: {
        time: ['周一', '周二', '周三', '周四', '周五', '周六', '周日', ' '],
        choices: [{
          details: ['自习', '看书', '上课', '其他'],
          place: ['教学楼', '图书馆', '其他', ' ']
        }, {
          details: ['跑步', '篮球', '足球', '羽毛球', '乒乓球', '网球', '其他', ' '],
          place: ['佑铭体育馆', '高职体育场', '乒羽中心', '西区篮球场', '高职篮球场', '学子篮球场', '学子网球场', '其他']
        }, {
          details: ['游戏', '吃饭', '电影', '其他'],
          place: ['校内', '校外', '其他', ' ']
        }, {
          details: [],
          place: ['校内', '校外', '其他', ' ']
        }]
      },
      chosen: {
        type: 1,
        which: 0,
        time: [0, 0, 0, 0, 0, 0, 0],
        during: ['', ''],
        choices: [0, 0]
      },
      tStyle: 'container t-out',
      oStyle: 'container o-out',
      placeHolder: ['起始时间', '结束时间']
    }, _this.changeDate = function (part, index) {
      var chosen = _this.state.chosen;

      switch (part) {
        case 'type':
          chosen.type = index;
          chosen.which ? _this.flyin() : null;
          _this.passScr('type');
          setTimeout(function () {
            chosen.choices = [0, 0];
            chosen.which = 0;
            chosen.time = [0, 0, 0, 0, 0, 0, 0];
            chosen.during = ['', ''];
          }, 300);
          break;
        case 'which':
          if (chosen.which !== index) {
            _this.flyout();
            chosen.which = index;
          } else {
            _this.flyin();
            _this.passScr();
            setTimeout(function () {
              chosen.choices = [0, 0];
              chosen.which = 0;
            }, 300);
          }
          break;
        case 'time':
          chosen.time.splice(index, 1, !chosen.time[index]);
          break;
        case 'detail':
          chosen.choices[0] = index;
          break;
        case 'place':
          chosen.choices[1] = index;
          break;
      }
      setTimeout(function () {
        _this.setState({ chosen: chosen });
      }, 300);
    }, _this.customComponents = ["Tag"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Screening, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Screening.prototype.__proto__ || Object.getPrototypeOf(Screening.prototype), "_constructor", this).call(this, props);

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

    // 向外传递 转换好的 chosen

  }, {
    key: "passScr",
    value: function passScr() {
      var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'else';
      var chosen = this.state.chosen;

      var query = '';
      query += "type=" + chosen.type;
      if (from !== 'type') {
        if (chosen.choices[0]) {
          query += "&tag=" + chosen.choices[0];
        }
        if (chosen.choices[1]) {
          query += "&place=" + chosen.choices[1];
        }
        // during 处理
        if (chosen.during[0]) {
          query += "&time_from=" + chosen.during[0];
        }
        if (chosen.during[1]) {
          query += "&time_end=" + chosen.during[1];
        }
        // 星期处理
        var date = '';
        for (var i = 6; i >= 0; i--) {
          if (chosen.time[i]) {
            date = date + '1';
          } else {
            date = date + '0';
          }
        }
        date = '1' + date;
        if (date !== '10000000') {
          query += "&date=" + date;
        }
      }
      console.log(query);
      this.props.onScrInfo(query);
    }

    // 动画函数

  }, {
    key: "flyin",
    value: function flyin() {
      this.setState({
        oStyle: 'container o-in',
        tStyle: 'container t-in'
      });
    }
  }, {
    key: "flyout",
    value: function flyout() {
      this.setState({
        oStyle: 'container o-out',
        tStyle: 'container t-out'
      });
    }
  }, {
    key: "onDuring",


    // 数据处理函数
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
    key: "ifNum",
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
    key: "reset",
    value: function reset(detail) {
      var chosen = this.state.chosen;

      switch (detail) {
        case 'type':
          chosen.choices[0] = 0;
          break;
        case 'time':
          chosen.time = [0, 0, 0, 0, 0, 0, 0];
          chosen.during = ['', ''];
          break;
        case 'place':
          chosen.choices[1] = 0;
          break;
      }
      this.setState({ chosen: chosen });
    }
  }, {
    key: "changeHolder",
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
    key: "closeScr",
    value: function closeScr() {
      var _this2 = this;

      var chosen = this.state.chosen;

      this.flyin();
      this.passScr();
      setTimeout(function () {
        chosen.which = 0;
        _this2.setState({ chosen: chosen });
      }, 300);
    }
  }, {
    key: "_createShowScreenData",
    value: function _createShowScreenData(_$uid) {
      var _this3 = this;

      return function () {
        var loopArray3 = void 0;
        var loopArray2 = void 0;
        var loopArray1 = void 0;

        var _state = _this3.state,
            chosen = _state.chosen,
            tStyle = _state.tStyle,
            oStyle = _state.oStyle,
            content = _state.content,
            placeHolder = _state.placeHolder;
        var choices = content.choices;


        if (chosen.which === 0) {
          return null;
        } else if (chosen.which === 1) {
          loopArray1 = choices[chosen.type ? chosen.type - 1 : 0].details.map(function (details, index) {
            details = {
              $original: (0, _taroQq.internal_get_original)(details)
            };
            var $loopState__temp2 = index + 1;
            var $loopState__temp4 = index + 1;

            var _genCompid = (0, _taroQq.genCompid)(_$uid + "czzzzzzzzz" + index, true),
                _genCompid2 = _slicedToArray(_genCompid, 2),
                $prevCompid__4 = _genCompid2[0],
                $compid__4 = _genCompid2[1];

            _taroQq.propsManager.set({
              "indexId": $loopState__temp4,
              "part": "detail",
              "tagName": details.$original,
              "litDate": chosen.choices[0],
              "onChangeDate": _this3.changeDate
            }, $compid__4, $prevCompid__4);
            return {
              $loopState__temp2: $loopState__temp2,
              $loopState__temp4: $loopState__temp4,
              $compid__4: $compid__4,
              $original: details.$original
            };
          });
        } else if (chosen.which === 2) {
          loopArray2 = content.time.map(function (time, index) {
            time = {
              $original: (0, _taroQq.internal_get_original)(time)
            };
            var $loopState__temp6 = index + 1;

            var _genCompid3 = (0, _taroQq.genCompid)(_$uid + "dzzzzzzzzz" + index, true),
                _genCompid4 = _slicedToArray(_genCompid3, 2),
                $prevCompid__5 = _genCompid4[0],
                $compid__5 = _genCompid4[1];

            _taroQq.propsManager.set({
              "indexId": index,
              "part": "time",
              "tagName": time.$original,
              "litDate": chosen.time,
              "onChangeDate": _this3.changeDate
            }, $compid__5, $prevCompid__5);
            return {
              $loopState__temp6: $loopState__temp6,
              $compid__5: $compid__5,
              $original: time.$original
            };
          });
        } else if (chosen.which === 3) {
          loopArray3 = choices[chosen.type ? chosen.type - 1 : 0].place.map(function (place, index) {
            place = {
              $original: (0, _taroQq.internal_get_original)(place)
            };
            var $loopState__temp8 = index + 1;
            var $loopState__temp10 = index + 1;

            var _genCompid5 = (0, _taroQq.genCompid)(_$uid + "ezzzzzzzzz" + index, true),
                _genCompid6 = _slicedToArray(_genCompid5, 2),
                $prevCompid__6 = _genCompid6[0],
                $compid__6 = _genCompid6[1];

            _taroQq.propsManager.set({
              "indexId": $loopState__temp10,
              "part": "place",
              "tagName": place.$original,
              "litDate": chosen.choices[1],
              "onChangeDate": _this3.changeDate
            }, $compid__6, $prevCompid__6);
            return {
              $loopState__temp8: $loopState__temp8,
              $loopState__temp10: $loopState__temp10,
              $compid__6: $compid__6,
              $original: place.$original
            };
          });
        }

        return {
          choices: choices,
          content: content,
          loopArray1: loopArray1,
          loopArray2: loopArray2,
          loopArray3: loopArray3,
          chosen: chosen,
          oStyle: oStyle,
          tStyle: tStyle,
          placeHolder: placeHolder
        };
      };
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      e.stopPropagation();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var chosen = this.__state.chosen;


      var anonymousState__temp11 = this._createShowScreenData(__prefix + "bzzzzzzzzz")();

      Object.assign(this.__state, {
        anonymousState__temp11: anonymousState__temp11
      });
      return this.__state;
    }
  }]);

  return Screening;
}(_taroQq.Component), _class.$$events = ["reset", "ifNum", "onDuring", "changeHolder", "handleTouchMove", "changeDate", "closeScr"], _class.$$componentPath = "pages/day/Screening/Screening", _temp2);
exports.default = Screening;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(Screening));

/***/ }),

/***/ "./src/pages/day/Screening/screening.scss":
/*!************************************************!*\
  !*** ./src/pages/day/Screening/screening.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/day/Screening/Screening.jsx","runtime","vendors"]]]);