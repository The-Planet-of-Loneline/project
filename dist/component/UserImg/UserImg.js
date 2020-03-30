(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["component/UserImg/UserImg"],{

/***/ "./src/assets/user_img sync recursive ^\\.\\/img.*\\.png$":
/*!***************************************************!*\
  !*** ./src/assets/user_img sync ^\.\/img.*\.png$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./img0.png": "./src/assets/user_img/img0.png",
	"./img1.png": "./src/assets/user_img/img1.png",
	"./img2.png": "./src/assets/user_img/img2.png",
	"./img3.png": "./src/assets/user_img/img3.png",
	"./img4.png": "./src/assets/user_img/img4.png",
	"./img5.png": "./src/assets/user_img/img5.png",
	"./img6.png": "./src/assets/user_img/img6.png",
	"./img7.png": "./src/assets/user_img/img7.png",
	"./img8.png": "./src/assets/user_img/img8.png",
	"./img9.png": "./src/assets/user_img/img9.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/user_img sync recursive ^\\.\\/img.*\\.png$";

/***/ }),

/***/ "./src/component/UserImg/UserImg.jsx":
/*!*******************************************!*\
  !*** ./src/component/UserImg/UserImg.jsx ***!
  \*******************************************/
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

__webpack_require__(/*! ./userimg.scss */ "./src/component/UserImg/userimg.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserImg = (_temp2 = _class = function (_BaseComponent) {
  _inherits(UserImg, _BaseComponent);

  function UserImg() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserImg);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserImg.__proto__ || Object.getPrototypeOf(UserImg)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "size", "userimg"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserImg, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(UserImg.prototype.__proto__ || Object.getPrototypeOf(UserImg.prototype), "_constructor", this).call(this, props);

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
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var num = this.__props.userimg;
      var size = this.__props.size;

      var anonymousState__temp = __webpack_require__("./src/assets/user_img sync recursive ^\\.\\/img.*\\.png$")("./img" + num + ".png");

      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        size: size
      });
      return this.__state;
    }
  }]);

  return UserImg;
}(_taroQq.Component), _class.$$events = [], _class.defaultProps = {
  userimg: '0',
  size: 'size-my'
}, _class.$$componentPath = "component/UserImg/UserImg", _temp2);
exports.default = UserImg;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(UserImg));

/***/ }),

/***/ "./src/component/UserImg/userimg.scss":
/*!********************************************!*\
  !*** ./src/component/UserImg/userimg.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/component/UserImg/UserImg.jsx","runtime","vendors"]]]);