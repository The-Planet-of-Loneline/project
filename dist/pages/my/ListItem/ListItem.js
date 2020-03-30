(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/my/ListItem/ListItem"],{

/***/ "./src/pages/my/ListItem/ListItem.jsx":
/*!********************************************!*\
  !*** ./src/pages/my/ListItem/ListItem.jsx ***!
  \********************************************/
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

var _eye = __webpack_require__(/*! ./imgs/eye.png */ "./src/pages/my/ListItem/imgs/eye.png");

var _eye2 = _interopRequireDefault(_eye);

var _accept = __webpack_require__(/*! ./imgs/accept.png */ "./src/pages/my/ListItem/imgs/accept.png");

var _accept2 = _interopRequireDefault(_accept);

var _refuse = __webpack_require__(/*! ./imgs/refuse.png */ "./src/pages/my/ListItem/imgs/refuse.png");

var _refuse2 = _interopRequireDefault(_refuse);

var _fetch = __webpack_require__(/*! ../../../service/fetch */ "./src/service/fetch.jsx");

var _fetch2 = _interopRequireDefault(_fetch);

__webpack_require__(/*! ./listItem.scss */ "./src/pages/my/ListItem/listItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = (_temp2 = _class = function (_BaseComponent) {
  _inherits(ListItem, _BaseComponent);

  function ListItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__10", "$compid__11", "$compid__12", "$compid__13", "mode", "Eye", "info", "Accept", "checked", "Refuse", "showD", "accepts"], _this.state = {
      // checked 0/1 accept/2 refuse
      checked: 0,
      showD: '0'
    }, _this.changeShowD = function (index) {
      _this.setState({ showD: index });
    }, _this.changeCheck = function (check) {
      _this.setState({ checked: check });
    }, _this.customComponents = ["UserImg", "InfoT", "Info"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListItem, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), '_constructor', this).call(this, props);

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
    key: 'toMyDetail',
    value: function toMyDetail() {
      var requirement_id = this.props.info.requirement_id;
      _taroQq2.default.navigateTo({
        url: "../myDetail/myDetail?req_id=" + requirement_id
      });
    }
  }, {
    key: 'toDetail',
    value: function toDetail() {
      var requirement_id = this.props.info.requirement_id;

      this.redPointChange();
      _taroQq2.default.navigateTo({
        url: "../cardDetails/cardDetails?indexId=3&able=disable&req_id=" + requirement_id
      });
    }
  }, {
    key: 'redPointChange',
    value: function redPointChange() {
      var _this2 = this;

      var _props$info = this.props.info,
          red_point = _props$info.red_point,
          application_id = _props$info.application_id;
      var mode = this.props.mode;
      var checked = this.state.checked;

      if (mode === '2' && red_point && !checked) {
        (0, _fetch2.default)("remind/day/remindbox/done/" + application_id + "/", {}, 'POST').then(function (data) {
          if (data.msg === 'success') {
            _this2.setState({ checked: 1 });
          } else {
            console.log('bad request');
          }
        });
      }
    }
  }, {
    key: 'eyeCli',
    value: function eyeCli(e) {
      this.changeShowD('1');
      this.redPointChange();
      e.stopPropagation();
    }
  }, {
    key: 'handleRedPoint',
    value: function handleRedPoint(e) {
      var info = this.props.info;

      if (info.status - 2) {
        this.redPointChange();
      }
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

      var _genCompid = (0, _taroQq.genCompid)(__prefix + "$compid__10"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__10 = _genCompid2[0],
          $compid__10 = _genCompid2[1];

      var _genCompid3 = (0, _taroQq.genCompid)(__prefix + "$compid__11"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__11 = _genCompid4[0],
          $compid__11 = _genCompid4[1];

      var _genCompid5 = (0, _taroQq.genCompid)(__prefix + "$compid__12"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__12 = _genCompid6[0],
          $compid__12 = _genCompid6[1];

      var _genCompid7 = (0, _taroQq.genCompid)(__prefix + "$compid__13"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__13 = _genCompid8[0],
          $compid__13 = _genCompid8[1];

      var _props = this.__props,
          mode = _props.mode,
          info = _props.info;
      var _state = this.__state,
          checked = _state.checked,
          showD = _state.showD;

      var accepts = ['接受了你的申请', '拒绝了你的申请'];

      mode === '1' && _taroQq.propsManager.set({
        "size": "size-apply",
        "userimg": info.portrait
      }, $compid__10, $prevCompid__10);
      mode === '2' && showD === '1' && _taroQq.propsManager.set({
        "onChangeShowD": this.changeShowD.bind(this),
        "able": false,
        "name": info.nick_name,
        "college": info.college,
        "sex": info.gender,
        "qq": info.contact_way[0],
        "grade": info.grade,
        "tel": info.contact_way[1],
        "msg": info.content
      }, $compid__11, $prevCompid__11);
      mode === '1' && showD === '1' && _taroQq.propsManager.set({
        "onChangeShowD": this.changeShowD.bind(this),
        "onChangeCheck": this.changeCheck.bind(this),
        "req_id": info.application_id,
        "able": info.red_point && !checked,
        "name": info.sender_nickname,
        "college": info.college,
        "sex": info.gender,
        "qq": info.contact_way[0],
        "grade": info.grade,
        "tel": info.contact_way[1],
        "msg": info.content
      }, $compid__12, $prevCompid__12);
      mode === '1' && showD === '2' && _taroQq.propsManager.set({
        "onChangeShowCli": this.changeShowD.bind(this, '1'),
        "onChangeShowSub": this.changeShowD.bind(this, '0'),
        "onChangeCheck": this.changeCheck,
        "passed_id": info.application_id,
        "from": "puter"
      }, $compid__13, $prevCompid__13);
      Object.assign(this.__state, {
        $compid__10: $compid__10,
        $compid__11: $compid__11,
        $compid__12: $compid__12,
        $compid__13: $compid__13,
        mode: mode,
        Eye: _eye2.default,
        info: info,
        Accept: _accept2.default,
        Refuse: _refuse2.default,
        accepts: accepts
      });
      return this.__state;
    }
  }]);

  return ListItem;
}(_taroQq.Component), _class.$$events = ["toMyDetail", "toDetail", "eyeCli", "handleRedPoint"], _class.$$componentPath = "pages/my/ListItem/ListItem", _temp2);
exports.default = ListItem;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(ListItem));

/***/ }),

/***/ "./src/pages/my/ListItem/imgs/accept.png":
/*!***********************************************!*\
  !*** ./src/pages/my/ListItem/imgs/accept.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAABPElEQVRYhe3W0Y0CIRAG4Hlh5nVLsARL+KnAFrYD7UA78EqyA+1AnxkS7EBf7i56xr1dXGA34U94hQ8CwxDV1NTU1NTU1LwPAi3gZA01eyhvredVadPbwJsWysGq3B4HHB/hzLK07ynwpv0LfUbLGYGa0k4i+h/7i1bZlLb2xn6Pw5ywN6tymRO23AlHYsvc4VisdXyaFTZ7SatYIiLreQXlLdTs4WQ9xs6SYOHMEo6Pr6+SA7xpp4UN1MDJubOcRKCTXQMo73rVwAHopA/Mqhz6TtgHnbwaWJXLkIm70FlK15AT7kJnq7NQ2cQs9IjO+ikgUGMdn2LRRX6wT9DZsdnRY/YGydEpGplk6JRd1+joHC3iaOic/ezH6CLNdyy6BDYaXRI7GD0F7E8QqIE3X1b5+orlK5R3k8FOJXdWFAbApIoxKwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/pages/my/ListItem/imgs/eye.png":
/*!********************************************!*\
  !*** ./src/pages/my/ListItem/imgs/eye.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABVElEQVRYhe1WwZGDMAxMCZSQEiiBUtJB0kn4IfEhHUAnayoIHcDPCh/fg/ggGWwIgXvcsDOa8UN415ZW5nDYsWPHBzDIAinpLIpzUXQXxaYLuoviXEo6G2TBRsR87Qm9UUvJ19WEaCSRKK5nkr8I0Uiib8lPC4hfQiM5rU6uwbcWaWhzW6ShBt9WE+EkBzdD4ne0SEMBN1+JaJGGrpNYco3k2Duhc4BGcpz7vRMGWeBsOFA8IB/Lqa0ITzlqrzsEVEyp9+UIqJi6BVGcf3z1otj0IsdrbAfSb55nr9FSrCFAg6vFAv6sBM+cURhkgfOEwyYcywE3U02owdXkiJ5tQ1ChwZUGV916BRtaeKZgPTmIHDZebxoqNg9F2fsofijK3M25wXswNxaTD0REfu+7up2br59ji84dFM8SAm4EFG/3ZwS+WAcM7SWgQsCXTYh37PjX+AHBVKk93QNY/AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/pages/my/ListItem/imgs/refuse.png":
/*!***********************************************!*\
  !*** ./src/pages/my/ListItem/imgs/refuse.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAACwElEQVRYhdXZvU8UURAA8FeCvjdjFDuKK+52hkBladQgQmJhR7QkJiR+tMYYvwqNEgv/CAutLOwMCRj8C4jBWJkYFQI6swurEIVYcBYHJyALt7tvj7uXbHcz88u8eW83OWO2rMWyAWF4qATjyvBNCWNhnNTAjS0HrssUtJbZHVOCx8IwoYSxMiwowWsN8Ha123TuGhSWD50QAlHG6m6PMETC7qRvrAbulDBEyXXxc1SxPduClnpsnxL+SAqqBxP+joLD53xhowAHhWB1v7rKuLTUY/vqgUL4qYGgDTSs+kCnwG52+osxxpiQ8WqjQVufPOgowMEsNUPGK0YJp7IEC8FqRHYgNZbsQJrObnsIxo0yLGQKrqHXQrb9jWJDtv1CsJa1nhLOGiWYz5wgBVoqOJQLWwPPGWV8mysJ738QleB83hrKWBXGSaOE97wkS5hpX9haDXfLrJTtcWH8VQTaJ1YJZ7XX2I3EeNFbYsZqyLZfKjikDH/8YGFdK/bMjq1zo/62LuO1lQh2o7uf5ABGlGDda7GcnZUARva+floF3Qi2ZdBpsAeOzoI9MHQebNPRPrBNQ/vEFo4uAlsYukhs24HbaiTa6tC11bXWVi+Otno1t9XHz4Fj06BbBtsIuuWwe6GF7bDnIveF4YFPdMjugjHGmLhkjijjiq/kwu5mvRGET/2hMdZeY00YuBseu3tn56gpwSNvzSC8boRhwlPCu0mHWQM35mf38JURhg8+xyDxBvIzHtNGCd8VjfWInjZK+DJHgv9mdr+VZ6aF4IURwmu+Z7Y4tLtcS8DwsVnYrGghfF8PjrmjJAzfm4VNjSaYXyx3dm8LjrmjJIQzyYcLImE77Av7D42XhGFxj87OxNxRSkwQkj0rBM+VcE4JYyF8o4Eb+9kNR31jN9dy4LqU3RMlnNr4u/irMjzTwJ3e+du/Uu0U+4XbzjQAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/pages/my/ListItem/listItem.scss":
/*!*********************************************!*\
  !*** ./src/pages/my/ListItem/listItem.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/my/ListItem/ListItem.jsx","runtime","vendors"]]]);