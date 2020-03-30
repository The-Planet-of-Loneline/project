(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/edit/edit"],{

/***/ "./src/pages/edit/edit.jsx":
/*!*********************************!*\
  !*** ./src/pages/edit/edit.jsx ***!
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

__webpack_require__(/*! ./edit.scss */ "./src/pages/edit/edit.scss");

var _edit = __webpack_require__(/*! ../img/edit.png */ "./src/pages/img/edit.png");

var _edit2 = _interopRequireDefault(_edit);

var _fetch = __webpack_require__(/*! ../../service/fetch */ "./src/service/fetch.jsx");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var edit = (_temp2 = _class = function (_BaseComponent) {
  _inherits(edit, _BaseComponent);

  function edit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, edit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = edit.__proto__ || Object.getPrototypeOf(edit)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__38", "inputValue", "Edit", "info"], _this.state = {
      inputValue: '',
      info: {
        stuid: '',
        sex: '',
        college: '',
        grade: ''
      }
    }, _this.customComponents = ["Footer"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(edit, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(edit.prototype.__proto__ || Object.getPrototypeOf(edit.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroQq2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _$router$params = this.$router.params,
          stuid = _$router$params.stuid,
          sex = _$router$params.sex,
          college = _$router$params.college,
          grade = _$router$params.grade;

      var nickname = _taroQq2.default.getStorageSync('Nickname');
      this.setState({
        inputValue: nickname,
        info: {
          stuid: stuid,
          sex: sex,
          college: college,
          grade: grade
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var verify_info = this.state.inputValue;
      var nickname = _taroQq2.default.getStorageSync('Nickname');
      if (verify_info !== nickname) {
        (0, _fetch2.default)('user/change_info/', {
          verify_info: verify_info,
          verify_item: 'Nickname'
        }, 'POST');
        _taroQq2.default.setStorage({
          key: 'Nickname',
          data: verify_info
        });
      }
    }
  }, {
    key: 'onhandleInputChange',
    value: function onhandleInputChange(e) {
      this.setState({
        inputValue: e.target.value
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

      var _genCompid = (0, _taroQq.genCompid)(__prefix + "$compid__38"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__38 = _genCompid2[0],
          $compid__38 = _genCompid2[1];

      var inputValue = this.__state.inputValue;
      var info = this.__state.info;

      _taroQq.propsManager.set({
        "mode": "my"
      }, $compid__38, $prevCompid__38);
      Object.assign(this.__state, {
        $compid__38: $compid__38,
        Edit: _edit2.default
      });
      return this.__state;
    }
  }]);

  return edit;
}(_taroQq.Component), _class.$$events = ["onhandleInputChange"], _class.$$componentPath = "pages/edit/edit", _temp2);
exports.default = edit;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(edit, true));

/***/ }),

/***/ "./src/pages/edit/edit.scss":
/*!**********************************!*\
  !*** ./src/pages/edit/edit.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/img/edit.png":
/*!********************************!*\
  !*** ./src/pages/img/edit.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

},[["./src/pages/edit/edit.jsx","runtime","vendors"]]]);