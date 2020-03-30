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

var _icon = __webpack_require__(/*! ./icon.png */ "./src/pages/my/icon.png");

var _icon2 = _interopRequireDefault(_icon);

var _fetch = __webpack_require__(/*! ../../service/fetch */ "./src/service/fetch.jsx");

var _fetch2 = _interopRequireDefault(_fetch);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = My.__proto__ || Object.getPrototypeOf(My)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp3", "loopArray4", "$compid__8", "$compid__9", "draw", "Icon", "$anonymousCallee__0", "bottom", "userName", "user", "blank_msg", "history", "apply", "respone", "page"], _this.state = {
      userName: '这里是昵称',
      user: {
        userimg: 0,
        stuNumber: '2019213XXX',
        sex: '秀吉',
        college: '计算机学院',
        grade: '19'
      },
      draw: {
        big: false,
        show: false,
        small: '0'
      },
      history: [],
      apply: [],
      respone: [],
      blank_msg: ['快去发布需求吧！', '看来没人鸟你呢~', '没人关注你呢！'],
      // history_bottom apply_ bottom reply_bottom
      bottom: [false, false, false],
      page: [1, 1, 1]
    }, _this.config = {
      onReachBottomDistance: 130
    }, _this.customComponents = ["UserImg", "ListItem", "Footer"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(My, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(My.prototype.__proto__ || Object.getPrototypeOf(My.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroQq2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var bottom = [false, false, false];
      _taroQq2.default.setStorage({
        key: 'delete_if',
        data: false
      });
      (0, _fetch2.default)('user/info/', {}, 'GET').then(function (data) {
        _this2.setState({
          userName: data.nickname,
          user: {
            userimg: data.portrait,
            stuNumber: data.sid,
            sex: data.gender,
            college: data.college,
            grade: data.grade
          }
        });
        _taroQq2.default.setStorage({
          key: 'Nickname',
          data: data.nickname
        });
      });
      // 历史发布
      (0, _fetch2.default)('requirement/history/?limit=6&page=0', {}, 'GET').then(function (data) {
        if (data.msg === 'success') {
          if (data.num) {
            _this2.setState({ history: data.history });
          }
          if (data.num < 3 && data.num) {
            bottom[0] = true;
          }
        } else if (data.msg === 'Fail.') {
          _taroQq2.default.showToast({
            title: '服务器错误',
            icon: 'none'
          });
        }
      });
      // 申请提醒
      (0, _fetch2.default)('application/todo/?limit=6&page=0', {}, 'GET').then(function (data) {
        if (data.msg === 'success') {
          if (data.num) {
            _this2.setState({ apply: data.applications });
          }
          if (data.num < 6 && data.num) {
            bottom[1] = true;
          }
        } else if (data.msg === 'Fail.') {
          _taroQq2.default.showToast({
            title: '服务器错误',
            icon: 'none'
          });
        }
      });
      // 回复提醒
      (0, _fetch2.default)('remind/day/remindbox/?limit=6&page=0', {}, 'GET').then(function (data) {
        if (data.msg === 'success') {
          if (data.num) {
            _this2.setState({ respone: data.content });
          }
          if (data.num < 6 && data.num) {
            bottom[2] = true;
          }
        } else if (data.msg === 'Fail.') {
          _taroQq2.default.showToast({
            title: '服务器错误',
            icon: 'none'
          });
        }
      });
      this.setState({ bottom: bottom });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {
      var _this3 = this;

      var userName = _taroQq2.default.getStorageSync('Nickname');
      var delete_if = _taroQq2.default.getStorageSync('delete_if');
      var bottom = this.state.bottom;

      this.setState({ userName: userName });
      if (delete_if) {
        bottom[0] = false;
        bottom[1] = false;
        // 重新申请历史记录
        (0, _fetch2.default)('requirement/history/?limit=6&page=0', {}, 'GET').then(function (data) {
          if (data.msg === 'success') {
            if (data.num) {
              _this3.setState({ history: data.history });
            }
            if (data.num < 3 && data.num) {
              bottom[0] = true;
            }
          } else if (data.msg === 'Fail.') {
            _taroQq2.default.showToast({
              title: '服务器错误',
              icon: 'none'
            });
          }
        });
        // 重新申请   申请提醒
        (0, _fetch2.default)('application/todo/?limit=6&page=0', {}, 'GET').then(function (data) {
          if (data.msg === 'success') {
            if (data.num) {
              _this3.setState({ apply: data.applications });
            }
            if (data.num < 6 && data.num) {
              bottom[1] = true;
            }
          } else if (data.msg === 'Fail.') {
            _taroQq2.default.showToast({
              title: '服务器错误',
              icon: 'none'
            });
          }
        });
      }
    }
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      var _state = this.state,
          bottom = _state.bottom,
          draw = _state.draw;


      switch (draw.small) {
        case '0':
          if (!bottom[0]) {
            this.pullList('requirement/history/', '0');
          }
          break;
        case '1':
          if (!bottom[1]) {
            this.pullList('application/todo/', '1');
          }
          break;
        case '2':
          if (!bottom[2]) {
            this.pullList('remind/day/remindbox/', '2');
          }
          break;
      }
    }
  }, {
    key: 'pullList',
    value: function pullList(url, index) {
      var _this4 = this;

      var _state2 = this.state,
          history = _state2.history,
          apply = _state2.apply,
          respone = _state2.respone;
      var _state3 = this.state,
          page = _state3.page,
          bottom = _state3.bottom;

      (0, _fetch2.default)(url + "?limit=6&page=" + page[index], {}, 'GET').then(function (data) {
        if (data.msg === 'success') {
          if (data.num === 3) {
            page[index]++;
          } else {
            bottom[index] = true;
            _this4.setState({ bottom: bottom });
          }
          if (data.num) {
            switch (index) {
              case '0':
                _this4.setState({ history: history.concat(data.history), page: page });
                break;
              case '1':
                _this4.setState({ apply: apply.concat(data.applications), page: page });
                break;
              case '2':
                _this4.setState({ respone: respone.concat(data.content), page: page });
                break;
            }
          }
        } else if (data.msg === 'Fail.') {
          _taroQq2.default.showToast({
            title: '服务器错误',
            icon: 'none'
          });
        }
      });
    }
  }, {
    key: 'explainList',
    value: function explainList(mode) {
      var _state4 = this.state,
          history = _state4.history,
          respone = _state4.respone,
          apply = _state4.apply;

      switch (mode) {
        case '0':
          {
            return history;
          }
        case '1':
          {
            return apply;
          }
        case '2':
          {
            return respone;
          }
      }
    }
  }, {
    key: 'decideLength',
    value: function decideLength(mode) {
      var _state5 = this.state,
          history = _state5.history,
          respone = _state5.respone,
          apply = _state5.apply;

      var length = 0;
      switch (mode) {
        case '0':
          length = history.length;
          break;
        case '1':
          length = apply.length;
          break;
        case '2':
          length = respone.length;
          break;
      }
      return length;
    }
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
      var big = draw.big;
      var show = draw.show;
      if (small === '0') {
        big = !big;
      } else {
        big = true;
      }
      if (show) {
        this.setState({ draw: { big: big, show: false, small: small } });
      } else {
        this.setState({ draw: { big: big, show: true, small: small } });
      }
    }
  }, {
    key: 'handleSmall',
    value: function handleSmall(index) {
      this.setState({ draw: { big: true, show: false, small: index } });
    }
  }, {
    key: 'toEdit',
    value: function toEdit() {
      var user = this.state.user;

      _taroQq2.default.navigateTo({
        url: "../edit/edit?stuid=" + user.stuNumber + "&sex=" + user.sex + "&college=" + user.college + "&grade=" + user.grade
      });
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(e) {
      e.stopPropagation();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this5 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroQq.genCompid)(__prefix + "$compid__8"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__8 = _genCompid2[0],
          $compid__8 = _genCompid2[1];

      var _genCompid3 = (0, _taroQq.genCompid)(__prefix + "$compid__9"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__9 = _genCompid4[0],
          $compid__9 = _genCompid4[1];

      var _state6 = this.__state,
          userName = _state6.userName,
          user = _state6.user,
          draw = _state6.draw,
          blank_msg = _state6.blank_msg,
          bottom = _state6.bottom;

      var $anonymousCallee__0 = this.decideLength(draw.small) ? this.explainList(draw.small) : [];
      var anonymousState__temp3 = this.decideLength(draw.small);
      var loopArray4 = anonymousState__temp3 ? this.explainList(draw.small).map(function (info, index) {
        info = {
          $original: (0, _taroQq.internal_get_original)(info)
        };
        var $loopState__temp2 = _this5.decideLength(draw.small) ? index + 1 : null;

        var _genCompid5 = (0, _taroQq.genCompid)(__prefix + 'fzzzzzzzzz' + index, true),
            _genCompid6 = _slicedToArray(_genCompid5, 2),
            $prevCompid__7 = _genCompid6[0],
            $compid__7 = _genCompid6[1];

        _taroQq.propsManager.set({
          "mode": draw.small,
          "info": info.$original
        }, $compid__7, $prevCompid__7);
        return {
          $loopState__temp2: $loopState__temp2,
          $compid__7: $compid__7,
          $original: info.$original
        };
      }) : [];
      _taroQq.propsManager.set({
        "userimg": user.userimg,
        "size": "size-my"
      }, $compid__8, $prevCompid__8);
      _taroQq.propsManager.set({
        "mode": "my"
      }, $compid__9, $prevCompid__9);
      Object.assign(this.__state, {
        anonymousState__temp3: anonymousState__temp3,
        loopArray4: loopArray4,
        $compid__8: $compid__8,
        $compid__9: $compid__9,
        Icon: _icon2.default,
        $anonymousCallee__0: $anonymousCallee__0
      });
      return this.__state;
    }
  }]);

  return My;
}(_taroQq.Component), _class.$$events = ["handleTouchMove", "toEdit", "handleLeft", "handleRight", "handleSmall"], _class.$$componentPath = "pages/my/my", _temp2);
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

/***/ })

},[["./src/pages/my/my.jsx","runtime","vendors"]]]);