(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/myDetail/myDetail"],{

/***/ "./src/pages/myDetail/delete.png":
/*!***************************************!*\
  !*** ./src/pages/myDetail/delete.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAABBklEQVRYhe3YXQ2DMBSG4VfCJCABB6uESUACEupgc7A5mATqAAnDAThgF4TsZKEpa/lLdr7kuzqkfSD0pqA5dk7AOaGnLbEF0AJ9QlvgshU4FTu23gJrxIYOsBFtxBqrx4jNbOQaDgUPsDtQfbUWm70m5nMqz8DU/Apkv2AL0g9Ualsgn4PNDoCV6GDKA0BlTQhsD4CUtSFwwXCKHdDthGyEoQiBZdzEYk7MrWfDMcYzN+KZqK+qYAUrWMEKVrCCFaxgBStYwQr+D3DP5zK68szHe1/fCz0DL7Q4eO1Ggx87gctYsNkJnMWCYfuvfEvBjilZ/9qqI+FX8CVn+E2W7qx7YM3aeQNeRH8bFDmH+gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/pages/myDetail/myDetail.jsx":
/*!*****************************************!*\
  !*** ./src/pages/myDetail/myDetail.jsx ***!
  \*****************************************/
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

var _delete = __webpack_require__(/*! ./delete.png */ "./src/pages/myDetail/delete.png");

var _delete2 = _interopRequireDefault(_delete);

__webpack_require__(/*! ./mydetail.scss */ "./src/pages/myDetail/mydetail.scss");

var _fetch = __webpack_require__(/*! ../../service/fetch */ "./src/service/fetch.jsx");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var myDetail = (_temp2 = _class = function (_BaseComponent) {
  _inherits(myDetail, _BaseComponent);

  function myDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, myDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = myDetail.__proto__ || Object.getPrototypeOf(myDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__20", "show", "loading", "Delete", "content"], _this.state = {
      show: false,
      loading: false,
      content: {
        content: '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十',
        date: '周一 周三 周日',
        place: '教学楼',
        post_time: '2020.02.29',
        sender_nick_name: 'shi-zhong',
        sender_portrait: 4,
        tag: '看书',
        time_end: 0,
        time_from: 0,
        title: '标题',
        type: '学习'
      }
    }, _this.customComponents = ["Footer"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(myDetail, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(myDetail.prototype.__proto__ || Object.getPrototypeOf(myDetail.prototype), '_constructor', this).call(this, props);

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
            content: {
              content: '该需求已被删除, 历史列表未刷新',
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
    key: 'changeShow',
    value: function changeShow(choice) {
      this.setState({ show: choice });
    }
  }, {
    key: 'sure',
    value: function sure() {
      var _this3 = this;

      // delete code
      var requirement_id = this.$router.params.req_id;
      var loading = this.state.loading;

      if (!loading) {
        this.setState({ loading: true });
        (0, _fetch2.default)("requirement/" + requirement_id + "/", {}, 'DELETE').then(function (data) {
          if (data.msg === 'success') {
            _this3.setState({ show: false });
            _taroQq2.default.showToast({
              title: '删除成功'
            });
            _taroQq2.default.setStorage({
              key: 'delete_if',
              data: true
            });
            _taroQq2.default.navigateBack({
              delta: 1
            });
          } else if (data.msg === 'Fail.') {
            _this3.setState({ show: false });
            _taroQq2.default.showToast({
              title: '服务器错误'
            });
          }
        });
      }
      this.setState({ show: false });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroQq.genCompid)(__prefix + "$compid__20"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__20 = _genCompid2[0],
          $compid__20 = _genCompid2[1];

      var _state = this.__state,
          show = _state.show,
          content = _state.content,
          loading = _state.loading;

      _taroQq.propsManager.set({
        "mode": "my"
      }, $compid__20, $prevCompid__20);
      Object.assign(this.__state, {
        $compid__20: $compid__20,
        Delete: _delete2.default
      });
      return this.__state;
    }
  }]);

  return myDetail;
}(_taroQq.Component), _class.$$events = ["changeShow", "sure"], _class.$$componentPath = "pages/myDetail/myDetail", _temp2);
exports.default = myDetail;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(myDetail, true));

/***/ }),

/***/ "./src/pages/myDetail/mydetail.scss":
/*!******************************************!*\
  !*** ./src/pages/myDetail/mydetail.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/myDetail/myDetail.jsx","runtime","vendors"]]]);