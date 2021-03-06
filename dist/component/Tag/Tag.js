(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["component/Tag/Tag"],{

/***/ "./src/component/Tag/Tag.jsx":
/*!***********************************!*\
  !*** ./src/component/Tag/Tag.jsx ***!
  \***********************************/
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

__webpack_require__(/*! ./tag.scss */ "./src/component/Tag/tag.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tag = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Tag, _BaseComponent);

  function Tag() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tag.__proto__ || Object.getPrototypeOf(Tag)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "tagName", "part", "indexId", "litDate", "type"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tag, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Tag.prototype.__proto__ || Object.getPrototypeOf(Tag.prototype), "_constructor", this).call(this, props);

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
  }, {
    key: "changeDate",
    value: function changeDate() {
      var part = this.props.part;
      var indexId = this.props.indexId;
      this.props.onChangeDate(part, indexId);
    }
  }, {
    key: "wLit",
    value: function wLit() {
      var part = this.props.part;
      var indexId = this.props.indexId;
      var litDate = this.props.litDate;
      switch (part) {
        case 'time':
          return litDate[indexId];
        case 'type':
          return litDate === indexId;
        case 'detail':
        case 'place':
          return litDate === indexId;
      }
    }
  }, {
    key: "testforBlank",
    value: function testforBlank() {
      var tagName = this.props.tagName;
      if (tagName === ' ') {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "explain",
    value: function explain() {
      var type = this.props.type;
      var part = this.props.part;
      if (part === 'place' && type === 2) {
        return 'long-blank';
      }
      return 'blank';
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var tagName = this.__props.tagName;
      var anonymousState__temp = this.testforBlank() ? this.wLit() ? 'lit-tag lit' : 'lit-tag unlit' : null;
      var anonymousState__temp2 = this.explain();
      var anonymousState__temp3 = this.testforBlank();
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        tagName: tagName
      });
      return this.__state;
    }
  }]);

  return Tag;
}(_taroQq.Component), _class.$$events = ["changeDate"], _class.defaultProps = {
  indexId: 0,
  part: 'time',
  tagName: 'null',
  litDate: 0,
  type: 0
}, _class.$$componentPath = "component/Tag/Tag", _temp2);
exports.default = Tag;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(Tag));

/***/ }),

/***/ "./src/component/Tag/tag.scss":
/*!************************************!*\
  !*** ./src/component/Tag/tag.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/component/Tag/Tag.jsx","runtime","vendors"]]]);