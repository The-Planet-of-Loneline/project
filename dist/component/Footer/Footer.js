(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["component/Footer/Footer"],{

/***/ "./src/component/Footer/Footer.jsx":
/*!*****************************************!*\
  !*** ./src/component/Footer/Footer.jsx ***!
  \*****************************************/
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

__webpack_require__(/*! ./footer.scss */ "./src/component/Footer/footer.scss");

var _switch = __webpack_require__(/*! ./imgs/switch.png */ "./src/component/Footer/imgs/switch.png");

var _switch2 = _interopRequireDefault(_switch);

var _myOn = __webpack_require__(/*! ./imgs/my-on.png */ "./src/component/Footer/imgs/my-on.png");

var _myOn2 = _interopRequireDefault(_myOn);

var _myOff = __webpack_require__(/*! ./imgs/my-off.png */ "./src/component/Footer/imgs/my-off.png");

var _myOff2 = _interopRequireDefault(_myOff);

var _sqrOn = __webpack_require__(/*! ./imgs/sqr-on.png */ "./src/component/Footer/imgs/sqr-on.png");

var _sqrOn2 = _interopRequireDefault(_sqrOn);

var _sqrOff = __webpack_require__(/*! ./imgs/sqr-off.png */ "./src/component/Footer/imgs/sqr-off.png");

var _sqrOff2 = _interopRequireDefault(_sqrOff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Footer, _BaseComponent);

  function Footer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "modeNeed", "Switch", "modeMy", "mode"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Footer, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Footer.prototype.__proto__ || Object.getPrototypeOf(Footer.prototype), '_constructor', this).call(this, props);

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
    key: 'toNight',
    value: function toNight() {
      _taroQq2.default.redirectTo({
        url: ''
      });
    }
  }, {
    key: 'toMy',
    value: function toMy() {
      if (this.props.mode === 'my') {
        return undefined;
      }
      _taroQq2.default.redirectTo({
        url: '../my/my'
      });
    }
  }, {
    key: 'toNeed',
    value: function toNeed() {
      if (this.props.mode === 'need') {
        return undefined;
      }
      _taroQq2.default.redirectTo({
        url: '../day/day'
      });
    }
  }, {
    key: 'changeMode',
    value: function changeMode() {
      if (this.props.mode === 'my') {
        this.setState({
          modeNeed: 'need-off word',
          modeMy: 'my-on word'
        });
        return 1;
      } else {
        this.setState({
          modeNeed: 'need-on word',
          modeMy: 'my-off word'
        });
        return 0;
      }
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          modeNeed = _state.modeNeed,
          modeMy = _state.modeMy;

      var anonymousState__temp = this.changeMode() ? _sqrOff2.default : _sqrOn2.default;
      var anonymousState__temp2 = this.changeMode() ? _myOn2.default : _myOff2.default;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        modeNeed: modeNeed,
        Switch: _switch2.default,
        modeMy: modeMy
      });
      return this.__state;
    }
  }]);

  return Footer;
}(_taroQq.Component), _class.$$events = ["toNeed", "toNight", "toMy"], _class.defaultProps = {
  mode: 'need'
  // my 选中我的
  // need 选中需求广场（默认）
}, _class.$$componentPath = "component/Footer/Footer", _temp2);
exports.default = Footer;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(Footer));

/***/ }),

/***/ "./src/component/Footer/footer.scss":
/*!******************************************!*\
  !*** ./src/component/Footer/footer.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/component/Footer/imgs/my-off.png":
/*!**********************************************!*\
  !*** ./src/component/Footer/imgs/my-off.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABKElEQVQ4jbXUv0rEQBDH8QgWNopgYSGojYVY+AjXW1rZ2vsCMc2QZec3iYFrbfICFlbiE4jPoIXVocUJVmflZdcmgRBy+bPJLXzLfJjshHhey2HmCYBPABmAJTN/BEFw0PZcGzoFYKuJiNFaXzmhRLRTh5bwpbV2ozcM4L0Jzrtxgecd4CcXeNYGi8hdb1gpddGCmjRNt3vD+dRvDfiDE1rCXwCYEpgx8/0gtDhRFJ0CCEXkNkmSo0EYM18D+BYRU3e/AGZKqcvOIBEdM/Nvh0/Niohh5i+t9X4jGobhed2EHcp839+rRUXkrLKk3ngcxyfV19/N/16uaNEfEW2WF/U6Alr0WEx76HivqzJEtOUBGHPaomdv4MJW9eOtAbUAFmuFF2PHzPN/mHoMcnysu78AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/component/Footer/imgs/my-on.png":
/*!*********************************************!*\
  !*** ./src/component/Footer/imgs/my-on.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAD2ElEQVRYhe3ZX2hbVRwH8JO22hUURSadiCAyKShM33yQwZhMpA8iSlCH2Ioyumz3/H53gz2Jxr/IFMQ9C/qgIAURfQjYprnnd5ZFhCFYHCIOK8IwDLbpmnbn/M5Njg9py6o1a9K7e1vYge9zPvz45t5fToRI4PjpA7c5wr1xVZ5gjWdZo2WNTSaYZ4KaU3jEVsIH/Zn8zUl83oaPq4a7WQdfMGGDNbQsob86rKHFGpussG5Jvr44M3F3Zlgf7RmICfZbBXOWIF4LvDrQYoJFo6Dio4l7M0GbSD7hKPyzM/S/YQ0tJjjlz4R3pApuRIUdRsGU1djsFm0JPRMYq+ANXwoGU0PHWj7HhI1ewCtV0fiTLcOuVMC+FAxawtlrd/iaaXIFZCpoUz04whrdBsHLNfk8HbQ6tC+BKbejoJYKOqbg6UTAhJ4JZ1NBOwWJTZoppUmbCowwwYY7vfS8TqfTc5+Mb7OEswlMuskqpaeHEELECp9ngoXeawItS/AzV4KHUkM3osIOprDMPb8R0TiNb6b6RvTFYp+pyFGr4VwvaKNx2s+EmWx7Oa4EL7KC85awub4tDw0TzPoyDGcBXjlOBbstwdes8cL/7dOWILaEc07DcZ/lPr18vBC5RhmGFyuHH3VVOG4J/+Cl/ZoVGEvye9byFVuGXeejwi1Ze4UXIuej4oCvhUNeB3fyd4ceiUmOWcK3jQo/chS+GhM86yN8+NJX47f7aHybn8z3Z4P1ImdOhvdxJMcs4ftMqBytXY+lPjeZsO4ISu4kvGUV5Bc03pUemOT9ToevMUHNEiywXs+X8Op+Y5Mp/IsJp4wCeTk6uv36YWv5IY4OTzDhpST2juU4gnpcPTLqTx+4KTnsZL7fVGCEtfyMCU1ia+nqR+Hfrhq846lwjxcitzFwKRi0BPtZw4+9/h7sojaOSeorM7jXF4t9PaP5FI4zQb29K1wf8L/xrOG3WONTXU/cl4LBOJJjSfe3i/zqtHysWBTrm7iP9gywki8x4WJG4HY0/m5Ijvr1wB0Fj7OGs8l/4boNtJjgB1s+2PmawZ8+up0VTlvCjMErabLGT3312K1rgyfz/azkCaZkrgcSzOWY4OU1axITPMka5jcBcnU0tpiwPl8OHlgFbpRh2JHUmQM7xBB87KPiQLsWxWKfjeAFJriQNaxz4JxRsE8IIcTF9i3+N2m9QDYQxwQf+lo4JHytsNMSXNwEqI5Z+kfhFxMVdgom+GALTHm5Ik1bgWeE7bi8b66whpZT+K7o9e4iqziCL0XWiO4jv91yaCacuoG+ge6EZsKprRQThe/9A0V1tfAgUhE9AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/component/Footer/imgs/sqr-off.png":
/*!***********************************************!*\
  !*** ./src/component/Footer/imgs/sqr-off.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAABrUlEQVRYhe3Zv4oTURTH8aPImsXKJQ+gheIuKsKCoOA7KGqxhb5BisAqpJHLzJzf74SMt0hpbRWwsTKiT2ArbOUfkC0UFhZEFMRoIRPGIbqokDvFOfCtTvOpbnGuAPhSj+QbAJdE5FDihGRpZrN6JKdC8nuj3aIoLpO8bmbbKSJ5M4RwxMzuN30Anv4WDeAJyW8pAvCs3++v/jWa5HTBblk9d7Sj/wN9PMa4VpZltyzLboxxbTKZrLQBHUJYGY1Gx+qFEDoiIlIUxUWSJYBxFcm3CdGvAOQA7tW6C+CMVAPgFsmP/PXpmSVEz0h+bfQBwNU52sxuk/yUEHlgZrZH8pqjHe1oRzu6nTna0Y5uQY52tKNbkKMd7egW5Ohk6CzLzpG8Q3LQ6HMKIIAdVYWqZlUkB8PhcF1ERFT1fD0Ap6vLJID9ROhHIYROjHEVwEbdl+f5SeHPw+M8AC8AbKRGj8fjo6p6AcDrhvHxoqP6S1U92wY0yU2S7xu7hT8Bjk6Bfkdyf9kBeNjr9f4ZfYPk1rLLsuxKCOHwn9DTemb2gOQJacHkeX4KwKTuU1X7AQPccaPs7+H0AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/component/Footer/imgs/sqr-on.png":
/*!**********************************************!*\
  !*** ./src/component/Footer/imgs/sqr-on.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAA4klEQVQ4je3UMU7DQBCF4Wkocgo60kQ0iINQ+AqRogjPWBG3oKOAXAZ71pCKA0BJE0V0KCu0b6NkKOxQpYlXaZBH+ovXfMUWS1DZQmUblB9tkQ1sUXRrPj6Dk/foeAcVT1AxqFgo+QkqP/t9bKHke6h8tPuEsL3yddPsPBW2Fx6a40sr8xEREaGSNSpZQ3nXFYaKjxWvYsUr2l8CdrAe7uEe/rfwZxsSwO+gsgwqywatOUPNmdXTCyi/dYU37vYuPk+uGi+/+XuGTcmzZLgu5u32J4U9mk86p8SLrniAig/KX799S00kc9HTigAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/component/Footer/imgs/switch.png":
/*!**********************************************!*\
  !*** ./src/component/Footer/imgs/switch.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

},[["./src/component/Footer/Footer.jsx","runtime","vendors"]]]);