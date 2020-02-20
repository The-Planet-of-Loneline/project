(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/my/my"],{

/***/ "./src/pages/my/icon.png":
/*!*******************************!*\
  !*** ./src/pages/my/icon.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABHElEQVRYhe2XwW3DMAxFNYJH8AjeoB4hI2SEbNLeJPpij5ANmg2+2gm6QXoT7R7UQ2QggJGEkpkCBUxAN0rvkQeJMmaLP4yIvmLv3tkTbid80OslqWDBvd2HE9hTZDi/SAiwNXs6s6dYugLoJIFH9NUiieGO6ZAhwNbCrj4MEdwYY+YqtMBZ8GcITOgaMVxbIMHPYrimwDU8gAbxRg2BYriGwCr4WgEpPKKvfj67lwldoyaQU3mAbW9eWCUCI2iX03ZVgQC7v7qCH8KfIEBfl8PsPkNatQPtCNpJ89UFSmIT2AQ2gU2AQYc0JS3H93kqHr3rRSNUZqTq08Nl20XChK5h0Peaf4Hw7zDcs6wZ7jg/NMrgE4MO2p39//EL2FQYaDmfE4wAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/pages/my/my.jsx":
/*!*****************************!*\
  !*** ./src/pages/my/my.jsx ***!
  \*****************************/
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

var _userImage = __webpack_require__(/*! ./userImage.png */ "./src/pages/my/userImage.png");

var _userImage2 = _interopRequireDefault(_userImage);

var _icon = __webpack_require__(/*! ./icon.png */ "./src/pages/my/icon.png");

var _icon2 = _interopRequireDefault(_icon);

__webpack_require__(/*! ./my.scss */ "./src/pages/my/my.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var My = (_temp2 = _class = function (_BaseComponent) {
  _inherits(My, _BaseComponent);

  function My() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, My);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = My.__proto__ || Object.getPrototypeOf(My)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__76", "draw", "UserImage", "Icon", "anonymousState__temp7", "user", "list"], _this.state = {
      user: {
        userName: '这里是昵称',
        stuNumber: '2019213XXX'
      },
      draw: {
        big: false,
        show: false,
        small: '0'
      },
      list: {
        history: [1, 2, 3],
        apply: [1, 2, 3],
        respone: [1, 2, 3]
      }
    }, _this.customComponents = ["ListItem", "Footer"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(My, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(My.prototype.__proto__ || Object.getPrototypeOf(My.prototype), '_constructor', this).call(this, props);

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
    key: 'handleLeft',
    value: function handleLeft() {
      this.setState({
        draw: {
          big: false,
          show: false,
          small: '0'
        }
      });
    }
  }, {
    key: 'handleRight',
    value: function handleRight() {
      var draw = this.state.draw;

      var small = draw.small;
      if (draw.show) {
        this.setState({ draw: { big: true, show: false, small: small } });
      } else {
        this.setState({ draw: { big: true, show: true, small: small } });
      }
    }
  }, {
    key: 'handleSmall',
    value: function handleSmall(index) {
      this.setState({ draw: { big: true, show: false, small: index } });
    }
  }, {
    key: '_createExplainListData',
    value: function _createExplainListData(_$uid) {
      var _this2 = this;

      return function () {
        var loopArray49 = void 0;
        var loopArray48 = void 0;
        var loopArray47 = void 0;

        var _state = _this2.state,
            draw = _state.draw,
            list = _state.list;


        if (draw.small === '0') {
          loopArray47 = list.history.map(function (index, _anonIdx) {
            index = {
              $original: (0, _taroQq.internal_get_original)(index)
            };
            var $loopState__temp2 = index.$original + 1;

            var _genCompid = (0, _taroQq.genCompid)(_$uid + 'fjzzzzzzzz' + _anonIdx, true),
                _genCompid2 = _slicedToArray(_genCompid, 2),
                $prevCompid__73 = _genCompid2[0],
                $compid__73 = _genCompid2[1];

            _taroQq.propsManager.set({
              "mode": "1"
            }, $compid__73, $prevCompid__73);
            return {
              $loopState__temp2: $loopState__temp2,
              $compid__73: $compid__73,
              $original: index.$original
            };
          });
        } else if (draw.small === '1') {
          loopArray48 = list.respone.map(function (index, _anonIdx3) {
            index = {
              $original: (0, _taroQq.internal_get_original)(index)
            };
            var $loopState__temp4 = index.$original + 1;

            var _genCompid3 = (0, _taroQq.genCompid)(_$uid + 'gazzzzzzzz' + _anonIdx3, true),
                _genCompid4 = _slicedToArray(_genCompid3, 2),
                $prevCompid__74 = _genCompid4[0],
                $compid__74 = _genCompid4[1];

            _taroQq.propsManager.set({
              "mode": "3"
            }, $compid__74, $prevCompid__74);
            return {
              $loopState__temp4: $loopState__temp4,
              $compid__74: $compid__74,
              $original: index.$original
            };
          });
        } else if (draw.small === '2') {
          loopArray49 = list.apply.map(function (index, _anonIdx5) {
            index = {
              $original: (0, _taroQq.internal_get_original)(index)
            };
            var $loopState__temp6 = index.$original + 1;

            var _genCompid5 = (0, _taroQq.genCompid)(_$uid + 'gbzzzzzzzz' + _anonIdx5, true),
                _genCompid6 = _slicedToArray(_genCompid5, 2),
                $prevCompid__75 = _genCompid6[0],
                $compid__75 = _genCompid6[1];

            _taroQq.propsManager.set({
              "mode": "2"
            }, $compid__75, $prevCompid__75);
            return {
              $loopState__temp6: $loopState__temp6,
              $compid__75: $compid__75,
              $original: index.$original
            };
          });
        }

        return {
          list: list,
          loopArray47: loopArray47,
          loopArray48: loopArray48,
          loopArray49: loopArray49,
          draw: draw
        };
      };
    }
  }, {
    key: 'toEdit',
    value: function toEdit() {
      _taroQq2.default.navigate({
        url: ''
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

      var _genCompid7 = (0, _taroQq.genCompid)(__prefix + "$compid__76"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__76 = _genCompid8[0],
          $compid__76 = _genCompid8[1];

      var user = this.__state.user;
      var draw = this.__state.draw;


      var anonymousState__temp7 = this._createExplainListData(__prefix + "fizzzzzzzz")();

      _taroQq.propsManager.set({
        "mode": "my"
      }, $compid__76, $prevCompid__76);
      Object.assign(this.__state, {
        $compid__76: $compid__76,
        UserImage: _userImage2.default,
        Icon: _icon2.default,
        anonymousState__temp7: anonymousState__temp7
      });
      return this.__state;
    }
  }]);

  return My;
}(_taroQq.Component), _class.$$events = ["toEdit", "handleLeft", "handleRight", "handleSmall"], _class.$$componentPath = "pages/my/my", _temp2);
exports.default = My;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(My, true));

/***/ }),

/***/ "./src/pages/my/my.scss":
/*!******************************!*\
  !*** ./src/pages/my/my.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/my/userImage.png":
/*!************************************!*\
  !*** ./src/pages/my/userImage.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

},[["./src/pages/my/my.jsx","runtime","vendors"]]]);