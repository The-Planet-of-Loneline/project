(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./src/pages/index/delete.png":
/*!************************************!*\
  !*** ./src/pages/index/delete.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAABBklEQVRYhe3YXQ2DMBSG4VfCJCABB6uESUACEupgc7A5mATqAAnDAThgF4TsZKEpa/lLdr7kuzqkfSD0pqA5dk7AOaGnLbEF0AJ9QlvgshU4FTu23gJrxIYOsBFtxBqrx4jNbOQaDgUPsDtQfbUWm70m5nMqz8DU/Apkv2AL0g9Ualsgn4PNDoCV6GDKA0BlTQhsD4CUtSFwwXCKHdDthGyEoQiBZdzEYk7MrWfDMcYzN+KZqK+qYAUrWMEKVrCCFaxgBStYwQr+D3DP5zK68szHe1/fCz0DL7Q4eO1Ggx87gctYsNkJnMWCYfuvfEvBjilZ/9qqI+FX8CVn+E2W7qx7YM3aeQNeRH8bFDmH+gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
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

var _delete = __webpack_require__(/*! ./delete.png */ "./src/pages/index/delete.png");

var _delete2 = _interopRequireDefault(_delete);

__webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__38", "show", "Delete", "anonymousState__temp", "title", "time", "content", "tags"], _this.state = {
      show: false,
      title: '标题',
      time: '2020.2020',
      content: '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十',
      tags: ['学习', '看书', '教学楼', '佑铭体育馆']
    }, _this.config = {
      navigationBarTitleView: '孤独星球'
    }, _this.customComponents = ["Footer"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);

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
    value: function changeShow(choice) {
      this.setState({ show: choice });
    }
  }, {
    key: 'sure',
    value: function sure() {
      // delete code
      _taroQq2.default.navigateBack({
        delta: 1
      });
    }
  }, {
    key: '_createTagsExtendsData',
    value: function _createTagsExtendsData(_$uid) {
      var _this2 = this;

      return function () {
        var tags = _this2.state.tags;

        return {
          tags: tags
        };
      };
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

      var _state = this.__state,
          show = _state.show,
          title = _state.title,
          time = _state.time,
          content = _state.content;


      var anonymousState__temp = this._createTagsExtendsData(__prefix + "ddzzzzzzzz")();

      _taroQq.propsManager.set({
        "mode": "need"
      }, $compid__38, $prevCompid__38);
      Object.assign(this.__state, {
        $compid__38: $compid__38,
        Delete: _delete2.default,
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroQq.Component), _class.$$events = ["changeShow"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index/index.jsx","runtime","vendors"]]]);