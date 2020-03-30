(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["vendors"],{

/***/ "./node_modules/@tarojs/taro-qq/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@tarojs/taro-qq/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

var taro = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/* eslint-disable */
var objectIs = Object.is || function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

function shallowEqual(obj1, obj2) {
  if (_typeof(obj1) !== 'object' && _typeof(obj2) !== 'object') {
    return obj1 === obj2;
  }

  if (obj1 === null && obj2 === null) {
    return true;
  }

  if (obj1 === null || obj2 === null) {
    return false;
  }

  if (objectIs(obj1, obj2)) {
    return true;
  }

  var obj1Keys = obj1 ? Object.keys(obj1) : [];
  var obj2Keys = obj2 ? Object.keys(obj2) : [];

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (var i = 0; i < obj1Keys.length; i++) {
    var obj1KeyItem = obj1Keys[i];

    if (!obj2.hasOwnProperty(obj1KeyItem) || !objectIs(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false;
    }
  }

  return true;
}

var SimpleMap =
/*#__PURE__*/
function () {
  function SimpleMap() {
    _classCallCheck(this, SimpleMap);

    this.cache = [];
    this.size = 0;
  }

  _createClass(SimpleMap, [{
    key: "set",
    value: function set(k, v) {
      var len = this.cache.length;

      if (!len) {
        this.cache.push({
          k: k,
          v: v
        });
        this.size += 1;
        return;
      }

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          item.v = v;
          return;
        }
      }

      this.cache.push({
        k: k,
        v: v
      });
      this.size += 1;
    }
  }, {
    key: "get",
    value: function get(k) {
      var len = this.cache.length;

      if (!len) {
        return;
      }

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          return item.v;
        }
      }
    }
  }, {
    key: "has",
    value: function has(k) {
      var len = this.cache.length;

      if (!len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "delete",
    value: function _delete(k) {
      var len = this.cache.length;

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          this.cache.splice(i, 1);
          this.size -= 1;
          return true;
        }
      }

      return false;
    }
  }, {
    key: "clear",
    value: function clear() {
      var len = this.cache.length;
      this.size = 0;

      if (!len) {
        return;
      }

      while (len) {
        this.cache.pop();
        len--;
      }
    }
  }]);

  return SimpleMap;
}();

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}

function getCurrentPageUrl() {
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1];
  return addLeadingSlash(currentPage.route || currentPage.__route__);
}

var nextTick = function nextTick(fn) {
  var _fn;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  fn = typeof fn === 'function' ? (_fn = fn).bind.apply(_fn, [null].concat(args)) : fn;
  var timerFunc = qq.nextTick ? qq.nextTick : setTimeout;
  timerFunc(fn);
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var b = "function" === typeof Symbol && Symbol.for,
      c = b ? Symbol.for("react.element") : 60103,
      d = b ? Symbol.for("react.portal") : 60106,
      e = b ? Symbol.for("react.fragment") : 60107,
      f = b ? Symbol.for("react.strict_mode") : 60108,
      g = b ? Symbol.for("react.profiler") : 60114,
      h = b ? Symbol.for("react.provider") : 60109,
      k = b ? Symbol.for("react.context") : 60110,
      l = b ? Symbol.for("react.async_mode") : 60111,
      m = b ? Symbol.for("react.concurrent_mode") : 60111,
      n = b ? Symbol.for("react.forward_ref") : 60112,
      p = b ? Symbol.for("react.suspense") : 60113,
      q = b ? Symbol.for("react.suspense_list") : 60120,
      r = b ? Symbol.for("react.memo") : 60115,
      t = b ? Symbol.for("react.lazy") : 60116,
      v = b ? Symbol.for("react.fundamental") : 60117,
      w = b ? Symbol.for("react.responder") : 60118,
      x = b ? Symbol.for("react.scope") : 60119;

  function y(a) {
    if ("object" === _typeof(a) && null !== a) {
      var u = a.$$typeof;

      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;

            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case h:
                  return a;

                default:
                  return u;
              }

          }

        case t:
        case r:
        case d:
          return u;
      }
    }
  }

  function z(a) {
    return y(a) === m;
  }

  exports.typeOf = y;
  exports.AsyncMode = l;
  exports.ConcurrentMode = m;
  exports.ContextConsumer = k;
  exports.ContextProvider = h;
  exports.Element = c;
  exports.ForwardRef = n;
  exports.Fragment = e;
  exports.Lazy = t;
  exports.Memo = r;
  exports.Portal = d;
  exports.Profiler = g;
  exports.StrictMode = f;
  exports.Suspense = p;

  exports.isValidElementType = function (a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === v || a.$$typeof === w || a.$$typeof === x);
  };

  exports.isAsyncMode = function (a) {
    return z(a) || y(a) === l;
  };

  exports.isConcurrentMode = z;

  exports.isContextConsumer = function (a) {
    return y(a) === k;
  };

  exports.isContextProvider = function (a) {
    return y(a) === h;
  };

  exports.isElement = function (a) {
    return "object" === _typeof(a) && null !== a && a.$$typeof === c;
  };

  exports.isForwardRef = function (a) {
    return y(a) === n;
  };

  exports.isFragment = function (a) {
    return y(a) === e;
  };

  exports.isLazy = function (a) {
    return y(a) === t;
  };

  exports.isMemo = function (a) {
    return y(a) === r;
  };

  exports.isPortal = function (a) {
    return y(a) === d;
  };

  exports.isProfiler = function (a) {
    return y(a) === g;
  };

  exports.isStrictMode = function (a) {
    return y(a) === f;
  };

  exports.isSuspense = function (a) {
    return y(a) === p;
  };
});
unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {

  if (true) {
    (function () {

      Object.defineProperty(exports, '__esModule', {
        value: true
      }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.

      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
      }
      /**
       * Forked from fbjs/warning:
       * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
       *
       * Only change is we use console.warn instead of console.error,
       * and do nothing when 'console' is not supported.
       * This really simplifies the code.
       * ---
       * Similar to invariant but only logs a warning if the condition is not met.
       * This can be used to log issues in development environments in critical
       * paths. Removing the logging code for production environments will keep the
       * same logic and follow the same code paths.
       */

      var lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack() {};

      {
        var printWarning = function printWarning(format) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });

          if (typeof console !== 'undefined') {
            console.warn(message);
          }

          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
          } catch (x) {}
        };

        lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack(condition, format) {
          if (format === undefined) {
            throw new Error("`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning message argument");
          }

          if (!condition) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }

            printWarning.apply(undefined, [format].concat(args));
          }
        };
      }
      var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

      function typeOf(object) {
        if (_typeof(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_LAZY_TYPE:
            case REACT_MEMO_TYPE:
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode


      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            lowPriorityWarningWithoutStack$1(false, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.typeOf = typeOf;
      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isValidElementType = isValidElementType;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
    })();
  }
});
unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

  if (false) {} else {
    module.exports = reactIs_development;
  }
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */

function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */

checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function printWarning() {};

if (true) {
  printWarning$1 = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */

  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning$1("You are manually calling a React.PropTypes validation function for the `" + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning$1("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = objectAssign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function factoryWithThrowingShims() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  if (true) {
    var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod

    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  } else {}
});

/** Detect free variable `global` from Node.js. */

var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal || freeSelf || Function('return this')();
var _root = root;

/** Built-in value references. */

var _Symbol2 = _root.Symbol;
var _Symbol = _Symbol2;

/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/** Built-in value references. */

var getPrototype = _overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */

var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = _getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty$2.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

function isEmptyObject(obj) {
  if (!obj || !isPlainObject_1(obj)) {
    return false;
  }

  for (var n in obj) {
    if (obj.hasOwnProperty(n)) {
      return false;
    }
  }

  return true;
}
function isUndefined(o) {
  return o === undefined;
}
function isFunction(arg) {
  return typeof arg === 'function';
}
function isArray(arg) {
  return Array.isArray(arg);
}
function shakeFnFromObject(obj) {
  var newObj;

  if (isArray(obj)) {
    newObj = [];
    var len = obj.length;

    for (var i = 0; i < len; i++) {
      newObj.push(shakeFnFromObject(obj[i]));
    }
  } else if (isPlainObject_1(obj)) {
    newObj = {};

    for (var key in obj) {
      if (isFunction(obj[key])) {
        continue;
      }

      var ret = shakeFnFromObject(obj[key]);
      newObj[key] = ret;
    }
  } else {
    return obj;
  }

  return newObj;
}
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function diffArrToPath(to, from) {
  var res = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var keyPrev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var len = to.length;

  var _loop = function _loop(i) {
    var toItem = to[i];
    var fromItem = from[i];
    var targetKey = "".concat(keyPrev, "[").concat(i, "]");

    if (toItem === fromItem) {
      return "continue";
    } else if (_typeof(toItem) !== _typeof(fromItem)) {
      res[targetKey] = toItem;
    } else {
      if (_typeof(toItem) !== 'object') {
        res[targetKey] = toItem;
      } else {
        var arrTo = isArray(toItem);
        var arrFrom = isArray(fromItem);

        if (arrTo !== arrFrom) {
          res[targetKey] = toItem;
        } else if (arrTo && arrFrom) {
          if (toItem.length === fromItem.length) {
            diffArrToPath(toItem, fromItem, res, "".concat(targetKey));
          } else {
            res[targetKey] = toItem;
          }
        } else {
          if (!toItem || !fromItem || keyList(toItem).length < keyList(fromItem).length) {
            res[targetKey] = toItem;
          } else {
            // 对象
            var shouldDiffObject = isPlainObject_1(toItem);
            shouldDiffObject && Object.keys(fromItem).some(function (key) {
              if (typeof toItem[key] === 'undefined' && typeof fromItem[key] !== 'undefined') {
                shouldDiffObject = false;
                return true;
              }
            });

            if (shouldDiffObject) {
              diffObjToPath(toItem, fromItem, res, "".concat(targetKey, "."));
            } else {
              res[targetKey] = toItem;
            }
          }
        }
      }
    }
  };

  for (var i = 0; i < len; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }

  return res;
} // 比较的对象均为plainObject，且函数已被过滤


function diffObjToPath(to, from) {
  var res = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var keyPrev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var keys = keyList(to);
  var len = keys.length;

  var _loop2 = function _loop2(i) {
    var key = keys[i];
    var toItem = to[key];
    var fromItem = from[key];
    var targetKey = "".concat(keyPrev).concat(key);

    if (/^\$compid__/.test(key)) {
      res[targetKey] = toItem;
    } else if (toItem === fromItem) {
      return "continue";
    } else if (!hasProp.call(from, key)) {
      res[targetKey] = toItem;
    } else if (_typeof(toItem) !== _typeof(fromItem)) {
      res[targetKey] = toItem;
    } else {
      if (_typeof(toItem) !== 'object') {
        res[targetKey] = toItem;
      } else {
        var arrTo = isArray(toItem);
        var arrFrom = isArray(fromItem);

        if (arrTo !== arrFrom) {
          res[targetKey] = toItem;
        } else if (arrTo && arrFrom) {
          if (toItem.length === fromItem.length) {
            diffArrToPath(toItem, fromItem, res, "".concat(targetKey));
          } else {
            res[targetKey] = toItem;
          }
        } else {
          // null
          if (!toItem || !fromItem) {
            res[targetKey] = toItem;
          } else {
            // 对象
            var shouldDiffObject = isPlainObject_1(toItem);
            shouldDiffObject && Object.keys(fromItem).some(function (key) {
              if (typeof toItem[key] === 'undefined' && typeof fromItem[key] !== 'undefined') {
                shouldDiffObject = false;
                return true;
              }
            });

            if (shouldDiffObject) {
              diffObjToPath(toItem, fromItem, res, "".concat(targetKey, "."));
            } else {
              res[targetKey] = toItem;
            }
          }
        }
      }
    }
  };

  for (var i = 0; i < len; i++) {
    var _ret2 = _loop2(i);

    if (_ret2 === "continue") continue;
  }

  return res;
}
function queryToJson(str) {
  var dec = decodeURIComponent;
  var qp = str.split('&');
  var ret = {};
  var name;
  var val;

  for (var i = 0, l = qp.length, item; i < l; ++i) {
    item = qp[i];

    if (item.length) {
      var s = item.indexOf('=');

      if (s < 0) {
        name = dec(item);
        val = '';
      } else {
        name = dec(item.slice(0, s));
        val = dec(item.slice(s + 1));
      }

      if (typeof ret[name] === 'string') {
        // inline'd type check
        ret[name] = [ret[name]];
      }

      if (isArray(ret[name])) {
        ret[name].push(val);
      } else {
        ret[name] = val;
      }
    }
  }

  return ret; // Object
}

var _loadTime = new Date().getTime().toString();

var _i = 1;
function getUniqueKey() {
  return _loadTime + _i++;
}
function getElementById(component, id, type) {
  if (!component) return null;
  var res;

  if (type === 'component') {
    res = component.selectComponent(id);
    res = res ? res.$component || res : null;
  } else {
    var query = qq.createSelectorQuery().in(component);
    res = query.select(id);
  }

  if (res) return res;
  return null;
}
var id$1 = 0;

function genId() {
  return String(id$1++);
}

var compIdsMapper;

try {
  compIdsMapper = new Map();
} catch (error) {
  compIdsMapper = new SimpleMap();
}

function genCompid(key, isNeedCreate) {
  if (!taro.Current || !taro.Current.current || !taro.Current.current.$scope) return [];
  var prevId = compIdsMapper.get(key);

  if (isNeedCreate) {
    var _id = genId();

    compIdsMapper.set(key, _id);
    return [prevId, _id];
  } else {
    var _id2 = prevId || genId();

    !prevId && compIdsMapper.set(key, _id2);
    return [null, _id2];
  }
}
var prefix = 0;
function genCompPrefix() {
  return String(prefix++);
}

var data = {};
function cacheDataSet(key, val) {
  data[key] = val;
}
function cacheDataGet(key, delelteAfterGet) {
  var temp = data[key];
  delelteAfterGet && delete data[key];
  return temp;
}
function cacheDataHas(key) {
  return key in data;
}

var Manager =
/*#__PURE__*/
function () {
  function Manager() {
    _classCallCheck(this, Manager);

    _defineProperty(this, "map", {});

    _defineProperty(this, "observers", {});
  }

  _createClass(Manager, [{
    key: "set",
    value: function set() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var compid = arguments.length > 1 ? arguments[1] : undefined;
      var previd = arguments.length > 2 ? arguments[2] : undefined;
      if (!compid) return;

      if (previd) {
        this.delete(previd);
      }

      var observers = this.observers;

      if (!this.map[compid]) {
        Object.defineProperty(this.map, compid, {
          configurable: true,
          get: function get() {
            return this["__".concat(compid)];
          },
          set: function set(props) {
            this["__".concat(compid)] = props;
            var component = observers[compid] && observers[compid].component;
            var ComponentClass = observers[compid] && observers[compid].ComponentClass;
            if (!component || !ComponentClass || !component.__isReady) return;
            var nextProps = filterProps(ComponentClass.defaultProps, props, component.props);
            component.props = nextProps;
            nextTick(function () {
              component._unsafeCallUpdate = true;
              updateComponent(component);
              component._unsafeCallUpdate = false;
            });
          }
        });
      }

      this.map[compid] = props;
    }
  }, {
    key: "delete",
    value: function _delete(compid) {
      delete this.map[compid];
      delete this.map["__".concat(compid)];
      delete this.observers[compid];
    }
  }]);

  return Manager;
}();

var propsManager = new Manager();

var anonymousFnNamePreffix = 'funPrivate';
var routerParamsPrivateKey = '__key_';
var preloadPrivateKey = '__preload_';
var PRELOAD_DATA_KEY = 'preload';
var preloadInitedComponent = '$preloadComponent';
var pageExtraFns = ['onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap', 'onResize'];

function bindProperties(weappComponentConf, ComponentClass, isPage) {
  weappComponentConf.properties = {};

  if (isPage) {
    weappComponentConf.properties[routerParamsPrivateKey] = {
      type: null,
      value: null
    };
    weappComponentConf.properties[preloadPrivateKey] = {
      type: null,
      value: null
    };
    var defaultParams = ComponentClass.defaultParams || {};

    for (var key in defaultParams) {
      if (defaultParams.hasOwnProperty(key)) {
        weappComponentConf.properties[key] = {
          type: null,
          value: null
        };
      }
    }
  }

  weappComponentConf.properties.compid = {
    type: null,
    value: null,
    observer: function observer(newVal, oldVal) {
      var _this = this;

      initComponent.apply(this, [ComponentClass, isPage]);

      if (oldVal && oldVal !== newVal) {
        var extraProps = this.data.extraProps;
        var component = this.$component;
        propsManager.observers[newVal] = {
          component: component,
          ComponentClass: component.constructor
        };
        var nextProps = filterProps(component.constructor.defaultProps, propsManager.map[newVal], component.props, extraProps || null);
        this.$component.props = nextProps;
        nextTick(function () {
          _this.$component._unsafeCallUpdate = true;
          updateComponent(_this.$component);
          _this.$component._unsafeCallUpdate = false;
        });
      }
    }
  };
}

function bindBehaviors(weappComponentConf, ComponentClass) {
  if (ComponentClass.behaviors) {
    weappComponentConf.behaviors = ComponentClass.behaviors;
  }
}

function bindStaticOptions(weappComponentConf, ComponentClass) {
  if (ComponentClass.options) {
    weappComponentConf.options = ComponentClass.options;
  }
}

function bindMultipleSlots(weappComponentConf, ComponentClass) {
  var multipleSlots = ComponentClass.multipleSlots;

  if (!multipleSlots) {
    return;
  }

  weappComponentConf.options = _objectSpread({}, weappComponentConf.options, {
    multipleSlots: multipleSlots
  });
}

function bindStaticFns(weappComponentConf, ComponentClass) {
  for (var key in ComponentClass) {
    typeof ComponentClass[key] === 'function' && (weappComponentConf[key] = ComponentClass[key]);
  } // 低版本 IOS 下部分属性不能直接访问


  Object.getOwnPropertyNames(ComponentClass).forEach(function (key) {
    var excludes = ['arguments', 'caller', 'length', 'name', 'prototype'];

    if (excludes.indexOf(key) < 0) {
      typeof ComponentClass[key] === 'function' && (weappComponentConf[key] = ComponentClass[key]);
    }
  });
}

function processEvent(eventHandlerName, obj) {
  if (obj[eventHandlerName]) return;

  obj[eventHandlerName] = function (event) {
    if (event) {
      event.preventDefault = function () {};

      event.stopPropagation = function () {};

      event.currentTarget = event.currentTarget || event.target || {};

      if (event.target) {
        Object.assign(event.target, event.detail);
      }

      Object.assign(event.currentTarget, event.detail);
    }

    var scope = this.$component;
    var callScope = scope;
    var isAnonymousFn = eventHandlerName.indexOf(anonymousFnNamePreffix) > -1;
    var realArgs = [];
    var detailArgs = [];
    var datasetArgs = [];
    var isScopeBinded = false; // 解析从dataset中传过来的参数

    var dataset = event.currentTarget.dataset || {};
    var bindArgs = {};
    var eventType = event.type.toLocaleLowerCase();
    Object.keys(dataset).forEach(function (key) {
      var keyLower = key.toLocaleLowerCase();

      if (/^e/.test(keyLower)) {
        // 小程序属性里中划线后跟一个下划线会解析成不同的结果
        keyLower = keyLower.replace(/^e/, '');

        if (keyLower.indexOf(eventType) >= 0) {
          var argName = keyLower.replace(eventType, '');

          if (/^(a[a-z]|so)$/.test(argName)) {
            bindArgs[argName] = dataset[key];
          }
        }
      }
    }); // 如果是通过triggerEvent触发,并且带有参数

    if (event.detail && event.detail.__arguments && event.detail.__arguments.length > 0) {
      detailArgs = event.detail.__arguments;
    } // 普通的事件（非匿名函数），会直接call


    if (!isAnonymousFn) {
      if ('so' in bindArgs) {
        if (bindArgs['so'] !== 'this') {
          callScope = bindArgs['so'];
        }

        isScopeBinded = true;
        delete bindArgs['so'];
      }

      if (detailArgs.length > 0) {
        !isScopeBinded && detailArgs[0] && (callScope = detailArgs[0]);
        detailArgs.shift();
      }

      if (!isEmptyObject(bindArgs)) {
        datasetArgs = Object.keys(bindArgs).sort().map(function (key) {
          return bindArgs[key];
        });
      }

      realArgs = _toConsumableArray(datasetArgs).concat(_toConsumableArray(detailArgs), [event]);
    } else {
      // 匿名函数，会将scope作为第一个参数
      var _scope = null;

      if ('so' in bindArgs) {
        if (bindArgs['so'] !== 'this') {
          _scope = bindArgs['so'];
        }

        isScopeBinded = true;
        delete bindArgs['so'];
      }

      if (detailArgs.length > 0) {
        !isScopeBinded && detailArgs[0] && (callScope = detailArgs[0]);
        detailArgs.shift();
      }

      if (!isEmptyObject(bindArgs)) {
        datasetArgs = Object.keys(bindArgs).sort().map(function (key) {
          return bindArgs[key];
        });
      }

      realArgs = [_scope].concat(_toConsumableArray(datasetArgs), _toConsumableArray(detailArgs), [event]);
    }

    return scope[eventHandlerName].apply(callScope, realArgs);
  };
}

function bindEvents(weappComponentConf, events, isPage) {
  weappComponentConf.methods = weappComponentConf.methods || {};
  var target = weappComponentConf.methods;
  events.forEach(function (name) {
    processEvent(name, target);
  });
}

function filterProps() {
  var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var propsFromPropsManager = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var curAllProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var newProps = Object.assign({}, curAllProps, propsFromPropsManager);

  if (!isEmptyObject(defaultProps)) {
    for (var propName in defaultProps) {
      if (newProps[propName] === undefined) {
        newProps[propName] = defaultProps[propName];
      }
    }
  }

  return newProps;
}

function filterParams(data) {
  var defaultParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var res = {};

  for (var paramName in defaultParams) {
    res[paramName] = paramName in data ? data[paramName] : defaultParams[paramName];
  }

  return res;
}

function componentTrigger(component, key, args) {
  var _component$key;

  args = args || [];

  if (key === 'componentDidMount') {
    if (component['$$refs'] && component['$$refs'].length > 0) {
      var refs = {};
      component['$$refs'].forEach(function (ref) {
        var target;

        if (ref.type === 'component') {
          target = component.$scope.selectComponent("#".concat(ref.id));
          target = target ? target.$component || target : null;
        } else {
          var query = qq.createSelectorQuery().in(component.$scope);
          target = query.select("#".concat(ref.id));
        }

        taro.commitAttachRef(ref, target, component, refs, true);
        ref.target = target;
      });
      component.refs = Object.assign({}, component.refs || {}, refs);
    }

    if (component['$$hasLoopRef']) {
      taro.Current.current = component;
      taro.Current.index = 0;
      component._disableEffect = true;

      component._createData(component.state, component.props, true);

      component._disableEffect = false;
      taro.Current.current = null;
    }
  }

  if (key === 'componentWillUnmount') {
    var compid = component.$scope.data.compid;
    if (compid) propsManager.delete(compid);
  }

  component[key] && typeof component[key] === 'function' && (_component$key = component[key]).call.apply(_component$key, [component].concat(_toConsumableArray(args)));

  if (key === 'componentWillMount') {
    component._dirty = false;
    component._disable = false;
    component.state = component.getState();
  }

  if (key === 'componentWillUnmount') {
    component._dirty = true;
    component._disable = true;
    component.$router = {
      params: {},
      path: ''
    };
    component._pendingStates = [];
    component._pendingCallbacks = []; // refs

    taro.detachAllRef(component);
  }
}

function initComponent(ComponentClass, isPage) {
  if (this.$component.__isReady) return; // ready之后才可以setData,
  // ready之前，小程序组件初始化时仍然会触发observer，__isReady为否的时候放弃处理observer

  this.$component.__isReady = true; // 页面Ready的时候setData更新，此时并未didMount,触发observer但不会触发子组件更新
  // 小程序组件ready，但是数据并没有ready，需要通过updateComponent来初始化数据，setData完成之后才是真正意义上的组件ready
  // 动态组件执行改造函数副本的时,在初始化数据前计算好props

  if (!isPage) {
    var compid = this.data.compid;

    if (compid) {
      propsManager.observers[compid] = {
        component: this.$component,
        ComponentClass: ComponentClass
      };
    }

    var nextProps = filterProps(ComponentClass.defaultProps, propsManager.map[compid], this.$component.props);
    this.$component.props = nextProps;
  } else {
    this.$component.$router.path = getCurrentPageUrl();
  }

  mountComponent(this.$component);
}

function createComponent(ComponentClass, isPage) {
  var initData = {};
  var componentProps = filterProps(ComponentClass.defaultProps);
  var componentInstance = new ComponentClass(componentProps);
  componentInstance._constructor && componentInstance._constructor(componentProps);

  try {
    taro.Current.current = componentInstance;
    taro.Current.index = 0;
    componentInstance.state = componentInstance._createData() || componentInstance.state;
  } catch (err) {
    if (isPage) {
      console.warn('[Taro warn] \u8BF7\u7ED9\u9875\u9762\u63D0\u4F9B\u521D\u59CB `state` \u4EE5\u63D0\u9AD8\u521D\u6B21\u6E32\u67D3\u6027\u80FD\uFF01');
    } else {
      console.warn('[Taro warn] \u8BF7\u7ED9\u7EC4\u4EF6\u63D0\u4F9B\u4E00\u4E2A `defaultProps` \u4EE5\u63D0\u9AD8\u521D\u6B21\u6E32\u67D3\u6027\u80FD\uFF01');
    }

    console.warn(err);
  }

  initData = Object.assign({}, initData, componentInstance.props, componentInstance.state);
  var weappComponentConf = {
    data: initData,
    created: function created() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isPage && cacheDataHas(preloadInitedComponent)) {
        this.$component = cacheDataGet(preloadInitedComponent, true);
        this.$component.$componentType = 'PAGE';
      } else {
        this.$component = new ComponentClass({}, isPage);
      }

      this.$component._init(this);

      this.$component.render = this.$component._createData;
      this.$component.__propTypes = ComponentClass.propTypes;
      Object.assign(this.$component.$router.params, options);
    },
    attached: function attached() {
      var hasParamsCache;

      if (isPage) {
        // params
        var params = {};
        hasParamsCache = cacheDataHas(this.data[routerParamsPrivateKey]);

        if (hasParamsCache) {
          params = Object.assign({}, ComponentClass.defaultParams, cacheDataGet(this.data[routerParamsPrivateKey], true));
        } else {
          // 直接启动，非内部跳转
          params = filterParams(this.data, ComponentClass.defaultParams);
        }

        if (cacheDataHas(PRELOAD_DATA_KEY)) {
          var data = cacheDataGet(PRELOAD_DATA_KEY, true);
          this.$component.$router.preload = data;
        }

        Object.assign(this.$component.$router.params, params); // preload

        if (cacheDataHas(this.data[preloadPrivateKey])) {
          this.$component.$preloadData = cacheDataGet(this.data[preloadPrivateKey], true);
        } else {
          this.$component.$preloadData = null;
        }
      }

      if (hasParamsCache || !isPage) {
        initComponent.apply(this, [ComponentClass, isPage]);
      }
    },
    ready: function ready() {
      if (!isPage && !this.$component.__mounted) {
        this.$component.__mounted = true;
        componentTrigger(this.$component, 'componentDidMount');
      }
    },
    detached: function detached() {
      var component = this.$component;
      componentTrigger(component, 'componentWillUnmount');
      component.hooks.forEach(function (hook) {
        if (isFunction(hook.cleanup)) {
          hook.cleanup();
        }
      });
      var events = component.$$renderPropsEvents;

      if (isArray(events)) {
        events.forEach(function (e) {
          return taro.eventCenter.off(e);
        });
      }
    }
  };

  if (isPage) {
    weappComponentConf.methods = weappComponentConf.methods || {};

    weappComponentConf.methods['onLoad'] = function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (this.$component.__isReady) return;
      Object.assign(this.$component.$router.params, options);
      initComponent.apply(this, [ComponentClass, isPage]);
    };

    weappComponentConf.methods['onReady'] = function () {
      this.$component.__mounted = true;
      componentTrigger(this.$component, 'componentDidMount');
    };

    weappComponentConf.methods['onShow'] = function () {
      componentTrigger(this.$component, 'componentDidShow');
    };

    weappComponentConf.methods['onHide'] = function () {
      componentTrigger(this.$component, 'componentDidHide');
    };

    pageExtraFns.forEach(function (fn) {
      if (componentInstance[fn] && typeof componentInstance[fn] === 'function') {
        weappComponentConf.methods[fn] = function () {
          var component = this.$component;

          if (component && component[fn] && typeof component[fn] === 'function') {
            var _component$fn;

            return (_component$fn = component[fn]).call.apply(_component$fn, [component].concat(Array.prototype.slice.call(arguments)));
          }
        };
      }
    });
    __wxRoute && cacheDataSet(__wxRoute, ComponentClass);
  } else {
    weappComponentConf.pageLifetimes = weappComponentConf.pageLifetimes || {};

    weappComponentConf.pageLifetimes['show'] = function () {
      componentTrigger(this.$component, 'componentDidShow');
    };

    weappComponentConf.pageLifetimes['hide'] = function () {
      componentTrigger(this.$component, 'componentDidHide');
    };

    weappComponentConf.pageLifetimes['resize'] = function () {
      componentTrigger(this.$component, 'onResize');
    };
  }

  bindProperties(weappComponentConf, ComponentClass, isPage);
  bindBehaviors(weappComponentConf, ComponentClass);
  bindStaticFns(weappComponentConf, ComponentClass);
  bindStaticOptions(weappComponentConf, ComponentClass);
  bindMultipleSlots(weappComponentConf, ComponentClass);
  ComponentClass['$$events'] && bindEvents(weappComponentConf, ComponentClass['$$events'], isPage);

  if (ComponentClass['externalClasses'] && ComponentClass['externalClasses'].length) {
    weappComponentConf['externalClasses'] = ComponentClass['externalClasses'];
  }

  return weappComponentConf;
}

var isDEV = typeof process === 'undefined' || !process.env || "development" !== 'production';

function hasNewLifecycle(component) {
  var getDerivedStateFromProps = component.constructor.getDerivedStateFromProps,
      getSnapshotBeforeUpdate = component.getSnapshotBeforeUpdate;
  return isFunction(getDerivedStateFromProps) || isFunction(getSnapshotBeforeUpdate);
}

function callGetDerivedStateFromProps(component, props, state) {
  var getDerivedStateFromProps = component.constructor.getDerivedStateFromProps;
  var newState;

  if (isFunction(getDerivedStateFromProps)) {
    var partialState = getDerivedStateFromProps(props, state);

    if (!isUndefined(partialState)) {
      newState = Object.assign({}, state, partialState);
    } else {
      console.warn('getDerivedStateFromProps 没有返回任何内容，这个生命周期必须返回 null 或一个新对象。');
    }
  }

  return newState;
}

function callGetSnapshotBeforeUpdate(component, props, state) {
  var getSnapshotBeforeUpdate = component.getSnapshotBeforeUpdate;
  var snapshot;

  if (isFunction(getSnapshotBeforeUpdate)) {
    snapshot = getSnapshotBeforeUpdate.call(component, props, state);
  }

  return snapshot;
}

function updateComponent(component) {
  var props = component.props,
      __propTypes = component.__propTypes;

  if (isDEV && __propTypes) {
    var componentName = component.constructor.name;

    if (isUndefined(componentName)) {
      var names = component.constructor.toString().match(/^function\s*([^\s(]+)/);
      componentName = isArray(names) ? names[0] : 'Component';
    }

    propTypes.checkPropTypes(__propTypes, props, 'prop', componentName);
  }

  var prevProps = component.prevProps || props;
  component.props = prevProps;

  if (component.__mounted && component._unsafeCallUpdate === true && !hasNewLifecycle(component) && component.componentWillReceiveProps) {
    component._disable = true;
    component.componentWillReceiveProps(props);
    component._disable = false;
  }

  var state = component.getState();
  var prevState = component.prevState || state;
  var stateFromProps = callGetDerivedStateFromProps(component, props, state);

  if (!isUndefined(stateFromProps)) {
    state = stateFromProps;
  }

  var skip = false;

  if (component.__mounted) {
    if (typeof component.shouldComponentUpdate === 'function' && !component._isForceUpdate && component.shouldComponentUpdate(props, state) === false) {
      skip = true;
    } else if (!hasNewLifecycle(component) && isFunction(component.componentWillUpdate)) {
      component.componentWillUpdate(props, state);
    }
  }

  component.props = props;
  component.state = state;
  component._dirty = false;
  component._isForceUpdate = false;

  if (!skip) {
    doUpdate(component, prevProps, prevState);
  }

  component.prevProps = component.props;
  component.prevState = component.state;
}

function injectContextType(component) {
  var ctxType = component.constructor.contextType;

  if (ctxType) {
    var context = ctxType.context;
    var emitter = context.emitter;

    if (emitter === null) {
      component.context = context._defaultValue;
      return;
    }

    if (!component._hasContext) {
      component._hasContext = true;
      emitter.on(function (_) {
        return enqueueRender(component);
      });
    }

    component.context = emitter.value;
  }
}

function mountComponent(component) {
  var props = component.props; // 在willMount前执行构造函数的副本

  if (!component.__componentWillMountTriggered) {
    component._constructor && component._constructor(props);
  }

  var newState = callGetDerivedStateFromProps(component, props, component.state);

  if (!isUndefined(newState)) {
    component.state = newState;
  }

  component._dirty = false;
  component._disable = false;
  component._isForceUpdate = false;

  if (!component.__componentWillMountTriggered) {
    component.__componentWillMountTriggered = true;

    if (!hasNewLifecycle(component)) {
      componentTrigger(component, 'componentWillMount');
    }
  }

  doUpdate(component, props, component.state);
  component.prevProps = component.props;
  component.prevState = component.state;
}

function doUpdate(component, prevProps, prevState) {
  var state = component.state,
      _component$props = component.props,
      props = _component$props === undefined ? {} : _component$props;
  var data = state || {};

  if (component._createData) {
    if (component.__isReady) {
      injectContextType(component);
      taro.Current.current = component;
      taro.Current.index = 0;
      taro.invokeEffects(component, true);
    }

    data = component._createData(state, props) || data;

    if (component.__isReady) {
      taro.Current.current = null;
    }
  }

  data = Object.assign({}, props, data);

  if (component.$usedState && component.$usedState.length) {
    var _data = {};
    component.$usedState.forEach(function (key) {
      var val = taro.internal_safe_get(data, key);

      if (typeof val === 'undefined') {
        return;
      }

      if (_typeof(val) === 'object') {
        if (isEmptyObject(val)) return taro.internal_safe_set(_data, key, val);
        val = shakeFnFromObject(val); // 避免筛选完 Fn 后产生了空对象还去渲染

        if (!isEmptyObject(val)) taro.internal_safe_set(_data, key, val);
      } else {
        taro.internal_safe_set(_data, key, val);
      }
    });
    data = _data;
  }

  data['$taroCompReady'] = true;
  var dataDiff = diffObjToPath(data, component.$scope.data);
  var __mounted = component.__mounted;
  var snapshot;

  if (__mounted) {
    snapshot = callGetSnapshotBeforeUpdate(component, prevProps, prevState);
  } // 每次 setData 都独立生成一个 callback 数组


  var cbs = [];

  if (component._pendingCallbacks && component._pendingCallbacks.length) {
    cbs = component._pendingCallbacks;
    component._pendingCallbacks = [];
  }

  var cb = function cb() {
    if (__mounted) {
      taro.invokeEffects(component);

      if (component['$$refs'] && component['$$refs'].length > 0) {
        component['$$refs'].forEach(function (ref) {
          // 只有 component 类型能做判断。因为 querySelector 每次调用都一定返回 nodeRefs，无法得知 dom 类型的挂载状态。
          if (ref.type !== 'component') return;
          var target = component.$scope.selectComponent("#".concat(ref.id));
          target = target ? target.$component || target : null;
          var prevRef = ref.target;

          if (target !== prevRef) {
            taro.commitAttachRef(ref, target, component, component.refs);
            ref.target = target;
          }
        });
      }

      if (component['$$hasLoopRef']) {
        taro.Current.current = component;
        taro.Current.index = 0;
        component._disableEffect = true;

        component._createData(component.state, component.props, true);

        component._disableEffect = false;
        taro.Current.current = null;
      }

      if (typeof component.componentDidUpdate === 'function') {
        component.componentDidUpdate(prevProps, prevState, snapshot);
      }
    }

    if (cbs.length) {
      var i = cbs.length;

      while (--i >= 0) {
        typeof cbs[i] === 'function' && cbs[i].call(component);
      }
    }
  };

  if (Object.keys(dataDiff).length === 0) {
    cb();
  } else {
    component.$scope.setData(dataDiff, cb);
  }
}

var items = [];
function enqueueRender(component) {
  var isForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // tslint:disable-next-line:no-conditional-assignment
  component._isForceUpdate = isForceUpdate;

  if (!component._dirty && (component._dirty = true) && items.push(component) === 1) {
    nextTick(function () {
      rerender();
    });
  }
}
function rerender() {
  var p;
  var list = items;
  items = []; // tslint:disable-next-line:no-conditional-assignment

  while (p = list.pop()) {
    if (p._dirty) {
      updateComponent(p, true);
    }
  }
}

// #私有的__componentProps更新用于触发子组件中对应obsever，生命周期componentWillReceiveProps,componentShouldUpdate在这里处理
// #父组件传过来的props放到data.__props中供模板使用，这么做的目的是模拟receiveProps生命周期
// 执行顺序：组件setState -> 组件_createData() -> 对应的小程序组件setData（组件更新）-> 子组件的__componentProps.observer执行
//          -> 触发子组件componentWillReceiveProps，更新子组件props,componentShouldUpdate -> 子组件_createData -> 子组件setData

var PRELOAD_DATA_KEY$1 = 'preload';

var BaseComponent =
/*#__PURE__*/
function () {
  // _createData的时候生成，小程序中通过data.__createData访问
  // this.props,小程序中通过data.__props访问
  // 会在componentDidMount后置为true
  function BaseComponent() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isPage = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, BaseComponent);

    _defineProperty(this, "__computed", {});

    _defineProperty(this, "__props", {});

    _defineProperty(this, "__isReady", false);

    _defineProperty(this, "__mounted", false);

    _defineProperty(this, "nextProps", {});

    _defineProperty(this, "_dirty", true);

    _defineProperty(this, "_disable", true);

    _defineProperty(this, "_isForceUpdate", false);

    _defineProperty(this, "_pendingStates", []);

    _defineProperty(this, "_pendingCallbacks", []);

    _defineProperty(this, "$componentType", '');

    _defineProperty(this, "$router", {
      params: {},
      path: ''
    });

    _defineProperty(this, "_afterScheduleEffect", false);

    _defineProperty(this, "_disableEffect", false);

    _defineProperty(this, "hooks", []);

    _defineProperty(this, "effects", []);

    _defineProperty(this, "layoutEffects", []);

    this.state = {};
    this.props = props;
    this.$componentType = isPage ? 'PAGE' : 'COMPONENT';
    this.$prefix = genCompPrefix();
    this.isTaroComponent = this.$componentType && this.$router && this._pendingStates;
  }

  _createClass(BaseComponent, [{
    key: "_constructor",
    value: function _constructor(props) {
      this.props = props || {};
    }
  }, {
    key: "_init",
    value: function _init(scope) {
      this.$scope = scope;
    }
  }, {
    key: "setState",
    value: function setState(state, callback) {
      if (state) {
        (this._pendingStates = this._pendingStates || []).push(state);
      }

      if (isFunction(callback)) {
        (this._pendingCallbacks = this._pendingCallbacks || []).push(callback);
      }

      if (!this._disable) {
        enqueueRender(this, callback === taro.internal_force_update);
      }
    }
  }, {
    key: "getState",
    value: function getState() {
      var _this = this;

      var _pendingStates = this._pendingStates,
          state = this.state,
          props = this.props;
      var stateClone = Object.assign({}, state);
      delete stateClone.__data;

      if (!_pendingStates.length) {
        return stateClone;
      }

      var queue = _pendingStates.concat();

      this._pendingStates.length = 0;
      queue.forEach(function (nextState) {
        if (isFunction(nextState)) {
          nextState = nextState.call(_this, stateClone, props);
        }

        Object.assign(stateClone, nextState);
      });
      return stateClone;
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(callback) {
      if (isFunction(callback)) {
        (this._pendingCallbacks = this._pendingCallbacks || []).push(callback);
      }

      this._isForceUpdate = true;
      updateComponent(this);
    }
  }, {
    key: "$preload",
    value: function $preload(key, value) {
      var preloadData = cacheDataGet(PRELOAD_DATA_KEY$1) || {};

      if (_typeof(key) === 'object') {
        for (var k in key) {
          preloadData[k] = key[k];
        }
      } else {
        preloadData[key] = value;
      }

      cacheDataSet(PRELOAD_DATA_KEY$1, preloadData);
    } // 会被匿名函数调用

  }, {
    key: "__triggerPropsFn",
    value: function __triggerPropsFn(key, args) {
      var keyChain = key.split('.');
      var reduxFnPrefix = '__event_';
      var reduxFnName = reduxFnPrefix + keyChain.shift(); // redux标识过的方法，直接调用

      if (reduxFnName in this) {
        var scope = args.shift();
        var fn;

        if (keyChain.length > 0) {
          fn = taro.internal_safe_get(this[reduxFnName], keyChain.join('.'));
        } else {
          fn = this[reduxFnName];
        }

        fn.apply(scope, args);
      } else {
        // 普通的
        var keyLower = key.toLocaleLowerCase();
        var detail = {
          __isCustomEvt: true,
          __arguments: args
        };

        if (args.length > 0) {
          detail.value = args.slice(1);
        }

        this.$scope.triggerEvent(keyLower, detail);
      }
    }
  }]);

  return BaseComponent;
}();

var PureComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(PureComponent, _Component);

  function PureComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PureComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PureComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isPureComponent", true);

    return _this;
  }

  _createClass(PureComponent, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }
  }]);

  return PureComponent;
}(BaseComponent);

function createApp(AppClass) {
  var app = new AppClass();
  var weappAppConf = {
    onLaunch: function onLaunch(options) {
      app.$app = this;
      app.$app.$router = app.$router = {
        params: options
      };

      if (app.componentWillMount) {
        app.componentWillMount();
      }

      if (app.componentDidMount) {
        app.componentDidMount();
      }
    },
    onShow: function onShow(options) {
      Object.assign(app.$router.params, options);

      if (app.componentDidShow) {
        app.componentDidShow();
      }
    },
    onHide: function onHide() {
      if (app.componentDidHide) {
        app.componentDidHide();
      }
    },
    onError: function onError(err) {
      if (app.componentDidCatchError) {
        app.componentDidCatchError(err);
      }
    },
    onPageNotFound: function onPageNotFound(obj) {
      if (app.componentDidNotFound) {
        app.componentDidNotFound(obj);
      }
    }
  };
  return Object.assign(weappAppConf, app);
}

var RequestQueue = {
  MAX_REQUEST: 10,
  queue: [],
  pendingQueue: [],
  request: function request(options) {
    this.queue.push(options);
    return this.run();
  },
  run: function run() {
    var _this = this;

    if (!this.queue.length) return;

    var _loop = function _loop() {
      var options = _this.queue.shift();

      var successFn = options.success;
      var failFn = options.fail;

      options.success = function () {
        _this.pendingQueue = _this.pendingQueue.filter(function (item) {
          return item !== options;
        });

        _this.run();

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        successFn && successFn.apply(options, args);
      };

      options.fail = function () {
        _this.pendingQueue = _this.pendingQueue.filter(function (item) {
          return item !== options;
        });

        _this.run();

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        failFn && failFn.apply(options, args);
      };

      _this.pendingQueue.push(options);

      return {
        v: qq.request(options)
      };
    };

    while (this.pendingQueue.length < this.MAX_REQUEST) {
      var _ret = _loop();

      if (_typeof(_ret) === "object") return _ret.v;
    }
  }
};

function taroInterceptor(chain) {
  return request(chain.requestParams);
}

var link = new taro.Link(taroInterceptor);

function request(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      url: options
    };
  }

  var originSuccess = options['success'];
  var originFail = options['fail'];
  var originComplete = options['complete'];
  var requestTask;
  var p = new Promise(function (resolve, reject) {
    options['success'] = function (res) {
      originSuccess && originSuccess(res);
      resolve(res);
    };

    options['fail'] = function (res) {
      originFail && originFail(res);
      reject(res);
    };

    options['complete'] = function (res) {
      originComplete && originComplete(res);
    };

    requestTask = RequestQueue.request(options);
  });

  p.abort = function (cb) {
    cb && cb();

    if (requestTask) {
      requestTask.abort();
    }

    return p;
  };

  return p;
}

function processApis(taro$$1) {
  var weApis = Object.assign({}, taro.onAndSyncApis, taro.noPromiseApis, taro.otherApis);
  var useDataCacheApis = {
    'navigateTo': true,
    'redirectTo': true,
    'reLaunch': true
  };
  var routerParamsPrivateKey = '__key_';
  var preloadPrivateKey = '__preload_';
  var preloadInitedComponent = '$preloadComponent';
  Object.keys(weApis).forEach(function (key) {
    if (!(key in qq)) {
      taro$$1[key] = function () {
        console.warn('QQ\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 '.concat(key));
      };

      return;
    }

    if (!taro.onAndSyncApis[key] && !taro.noPromiseApis[key]) {
      taro$$1[key] = function (options) {
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        options = options || {};
        var task = null;
        var obj = Object.assign({}, options);

        if (typeof options === 'string') {
          if (args.length) {
            var _qq;

            return (_qq = qq)[key].apply(_qq, [options].concat(args));
          }

          return qq[key](options);
        }

        if (key === 'navigateTo' || key === 'redirectTo') {
          var url = obj['url'] ? obj['url'].replace(/^\//, '') : '';
          if (url.indexOf('?') > -1) url = url.split('?')[0];
          var Component = cacheDataGet(url);

          if (Component) {
            var component = new Component();

            if (component.componentWillPreload) {
              var cacheKey = getUniqueKey();
              var MarkIndex = obj.url.indexOf('?');
              var hasMark = MarkIndex > -1;
              var urlQueryStr = hasMark ? obj.url.substring(MarkIndex + 1, obj.url.length) : '';
              var params = queryToJson(urlQueryStr);
              obj.url += (hasMark ? '&' : '?') + "".concat(preloadPrivateKey, "=").concat(cacheKey);
              cacheDataSet(cacheKey, component.componentWillPreload(params));
              cacheDataSet(preloadInitedComponent, component);
            }
          }
        }

        if (useDataCacheApis[key]) {
          var _url = obj['url'] = obj['url'] || '';

          var _MarkIndex = _url.indexOf('?');

          var _hasMark = _MarkIndex > -1;

          var _urlQueryStr = _hasMark ? _url.substring(_MarkIndex + 1, _url.length) : '';

          var _params = queryToJson(_urlQueryStr);

          var _cacheKey = getUniqueKey();

          obj.url += (_hasMark ? '&' : '?') + "".concat(routerParamsPrivateKey, "=").concat(_cacheKey);
          cacheDataSet(_cacheKey, _params);
        }

        var p = new Promise(function (resolve, reject) {
          ['fail', 'success', 'complete'].forEach(function (k) {
            obj[k] = function (res) {
              options[k] && options[k](res);

              if (k === 'success') {
                if (key === 'connectSocket') {
                  resolve(Promise.resolve().then(function () {
                    return Object.assign(task, res);
                  }));
                } else {
                  resolve(res);
                }
              } else if (k === 'fail') {
                reject(res);
              }
            };
          });

          if (args.length) {
            var _qq2;

            task = (_qq2 = qq)[key].apply(_qq2, [obj].concat(args));
          } else {
            task = qq[key](obj);
          }
        });

        if (key === 'uploadFile' || key === 'downloadFile') {
          p.progress = function (cb) {
            if (task) {
              task.onProgressUpdate(cb);
            }

            return p;
          };

          p.abort = function (cb) {
            cb && cb();

            if (task) {
              task.abort();
            }

            return p;
          };
        }

        return p;
      };
    } else {
      taro$$1[key] = function () {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        var argsLen = args.length;
        var newArgs = args.concat();
        var lastArg = newArgs[argsLen - 1];

        if (lastArg && lastArg.isTaroComponent && lastArg.$scope) {
          newArgs.splice(argsLen - 1, 1, lastArg.$scope);
        }

        return qq[key].apply(qq, newArgs);
      };
    }
  });
}

function pxTransform(size) {
  var _ref = this.config || {},
      _ref$designWidth = _ref.designWidth,
      designWidth = _ref$designWidth === undefined ? 750 : _ref$designWidth,
      _ref$deviceRatio = _ref.deviceRatio,
      deviceRatio = _ref$deviceRatio === undefined ? {
    '640': 1.17,
    '750': 1,
    '828': 0.905
  } : _ref$deviceRatio;

  if (!(designWidth in deviceRatio)) {
    throw new Error('deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 '.concat(designWidth, ' \u7684\u8BBE\u7F6E\uFF01'));
  }

  return parseInt(size, 10) / deviceRatio[designWidth] + 'rpx';
}

function canIUseWebp() {
  var _qq$getSystemInfoSync = qq.getSystemInfoSync(),
      platform = _qq$getSystemInfoSync.platform;

  var platformLower = platform.toLowerCase();

  if (platformLower === 'android' || platformLower === 'devtools') {
    return true;
  }

  return false;
}

function qqCloud(taro$$1) {
  var qqC = qq.cloud || {};
  var qqcloud = {};
  var apiList = ['init', 'database', 'uploadFile', 'downloadFile', 'getTempFileURL', 'deleteFile', 'callFunction'];
  apiList.forEach(function (v) {
    qqcloud[v] = qqC[v];
  });
  taro$$1.cloud = qqcloud;
}

function initNativeApi(taro$$1) {
  processApis(taro$$1);
  taro$$1.request = link.request.bind(link);
  taro$$1.addInterceptor = link.addInterceptor.bind(link);
  taro$$1.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro$$1.getCurrentPages = getCurrentPages;
  taro$$1.getApp = getApp;
  taro$$1.requirePlugin = requirePlugin;
  taro$$1.initPxTransform = taro.initPxTransform.bind(taro$$1);
  taro$$1.pxTransform = pxTransform.bind(taro$$1);
  taro$$1.canIUseWebp = canIUseWebp;
  qqCloud(taro$$1);
}

/* eslint-disable camelcase */
var Taro = {
  Component: BaseComponent,
  PureComponent: PureComponent,
  createApp: createApp,
  initNativeApi: initNativeApi,
  Events: taro.Events,
  eventCenter: taro.eventCenter,
  getEnv: taro.getEnv,
  render: taro.render,
  ENV_TYPE: taro.ENV_TYPE,
  createRef: taro.createRef,
  internal_safe_get: taro.internal_safe_get,
  internal_safe_set: taro.internal_safe_set,
  internal_inline_style: taro.internal_inline_style,
  createComponent: createComponent,
  internal_get_original: taro.internal_get_original,
  handleLoopRef: taro.handleLoopRef(getElementById),
  propsManager: propsManager,
  interceptors: taro.interceptors,
  RefsArray: taro.RefsArray,
  genCompid: genCompid,
  // eslint-disable-next-line object-property-newline
  useEffect: taro.useEffect,
  useLayoutEffect: taro.useLayoutEffect,
  useReducer: taro.useReducer,
  useState: taro.useState,
  useRef: taro.useRef,
  useCallback: taro.useCallback,
  useMemo: taro.useMemo,
  useDidShow: taro.useDidShow,
  useDidHide: taro.useDidHide,
  usePullDownRefresh: taro.usePullDownRefresh,
  useReachBottom: taro.useReachBottom,
  usePageScroll: taro.usePageScroll,
  useResize: taro.useResize,
  useShareAppMessage: taro.useShareAppMessage,
  useTabItemTap: taro.useTabItemTap,
  useRouter: taro.useRouter,
  useScope: taro.useScope,
  useImperativeHandle: taro.useImperativeHandle,
  useContext: taro.useContext,
  createContext: taro.createContext,
  memo: taro.memo,
  shallowEqual: shallowEqual
};
initNativeApi(Taro);

exports.Taro = Taro;
exports.default = Taro;
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@tarojs/taro-qq/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@tarojs/taro-qq/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./dist/index */ "./node_modules/@tarojs/taro-qq/dist/index.js").default;
module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@tarojs/taro/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@tarojs/taro/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.assign = function (target) {
    // .length of function is 2
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
}

if (typeof Object.defineProperties !== 'function') {
  Object.defineProperties = function (obj, properties) {
    function convertToDescriptor(desc) {
      function hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

      function isCallable(v) {
        // NB: modify as necessary if other values than functions are callable.
        return typeof v === 'function';
      }

      if (_typeof(desc) !== 'object' || desc === null) {
        throw new TypeError('bad desc');
      }

      var d = {};
      if (hasProperty(desc, 'enumerable')) d.enumerable = !!desc.enumerable;

      if (hasProperty(desc, 'configurable')) {
        d.configurable = !!desc.configurable;
      }

      if (hasProperty(desc, 'value')) d.value = desc.value;
      if (hasProperty(desc, 'writable')) d.writable = !!desc.writable;

      if (hasProperty(desc, 'get')) {
        var g = desc.get;

        if (!isCallable(g) && typeof g !== 'undefined') {
          throw new TypeError('bad get');
        }

        d.get = g;
      }

      if (hasProperty(desc, 'set')) {
        var s = desc.set;

        if (!isCallable(s) && typeof s !== 'undefined') {
          throw new TypeError('bad set');
        }

        d.set = s;
      }

      if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
        throw new TypeError('identity-confused descriptor');
      }

      return d;
    }

    if (_typeof(obj) !== 'object' || obj === null) throw new TypeError('bad obj');
    properties = Object(properties);
    var keys = Object.keys(properties);
    var descs = [];

    for (var i = 0; i < keys.length; i++) {
      descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
    }

    for (var i = 0; i < descs.length; i++) {
      Object.defineProperty(obj, descs[i][0], descs[i][1]);
    }

    return obj;
  };
}

var Component = function Component(props) {
  _classCallCheck(this, Component);

  this.state = {};
  this.props = props || {};
};

/* eslint-disable */

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used as references for various `Number` constants. */

var INFINITY = Infinity;
/** `Object#toString` result references. */

var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';
/** Used to match property names within property paths. */

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Detect free variable `global` from Node.js. */

var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */

function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;

  if (value != null && typeof value.toString !== 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }

  return result;
}
/** Used for built-in method references. */

var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var _Symbol = root.Symbol,
    splice = arrayProto.splice;
/* Built-in method references that are verified to be native. */

var Map$1 = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */

function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear() {
  this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */

function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */

function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (Map$1 || ListCache)(),
    string: new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */

function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */

function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === 'string') {
    return value;
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -Infinity ? '-0' : result;
}
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */

function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */

function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key === 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */

function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */

function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = memoize(function (string) {
  string = toString(string);
  var result = [];

  if (reLeadingDot.test(string)) {
    result.push('');
  }

  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value === 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -Infinity ? '-0' : result;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func !== 'function' || resolver && typeof resolver !== 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Assign cache to `_.memoize`.


memoize.Cache = MapCache;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray = Array.isArray;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject(value) {
  var type = _typeof(value);

  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike(value) {
  return !!value && _typeof(value) === 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return _typeof(value) === 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */

function toString(value) {
  return value == null ? '' : baseToString(value);
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function baseAssignValue(object, key, value) {
  if (key == '__proto__') {
    Object.defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/** Used to check objects for own properties. */

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
/**
 * The base implementation of `set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */

function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = castPath(path, object);
  var length = path.length;
  var lastIndex = length - 1;
  var index = -1;
  var nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]);
    var newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */

function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @see has, hasIn, get, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * set(object, 'a[0].b.c', 4)
 * console.log(object.a[0].b.c)
 * // => 4
 *
 * set(object, ['x', '0', 'y', 'z'], 5)
 * console.log(object.x[0].y.z)
 * // => 5
 */

function set$1(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

var upperCasePattern = /([A-Z])/g;

function dashify(str) {
  return str.replace(upperCasePattern, dashLower);
}

function dashLower(c) {
  return '-' + c.toLowerCase();
}

function isObject$1(val) {
  return val != null && _typeof(val) === 'object' && Array.isArray(val) === false;
}

function inlineStyle(obj) {
  if (obj == null) {
    return '';
  }

  if (typeof obj === 'string') {
    return obj;
  }

  if (obj === null || obj === undefined) {
    return '';
  }

  if (!isObject$1(obj)) {
    throw new TypeError('style 只能是一个对象或字符串。');
  }

  return Object.keys(obj).map(function (key) {
    return dashify(key).concat(':').concat(obj[key]);
  }).join(';');
}

var ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  QUICKAPP: 'QUICKAPP',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD'
};
var _env = null; // 一个taro项目肯定运行同样的环境

function getEnv() {
  if (_env) return _env;

  if (typeof jd !== 'undefined' && jd.getSystemInfo) {
    _env = ENV_TYPE.JD;
    return ENV_TYPE.JD;
  }

  if (typeof qq !== 'undefined' && qq.getSystemInfo) {
    _env = ENV_TYPE.QQ;
    return ENV_TYPE.QQ;
  }

  if (typeof tt !== 'undefined' && tt.getSystemInfo) {
    _env = ENV_TYPE.TT;
    return ENV_TYPE.TT;
  }

  if (typeof wx !== 'undefined' && wx.getSystemInfo) {
    _env = ENV_TYPE.WEAPP;
    return ENV_TYPE.WEAPP;
  }

  if (typeof qa !== 'undefined' && qa.getSystemInfo) {
    _env = ENV_TYPE.QUICKAPP;
    return ENV_TYPE.QUICKAPP;
  }

  if (typeof swan !== 'undefined' && swan.getSystemInfo) {
    _env = ENV_TYPE.SWAN;
    return ENV_TYPE.SWAN;
  }

  if (typeof my !== 'undefined' && my.getSystemInfo) {
    _env = ENV_TYPE.ALIPAY;
    return ENV_TYPE.ALIPAY;
  }

  if (typeof global !== 'undefined' && global.__fbGenNativeModule) {
    _env = ENV_TYPE.RN;
    return ENV_TYPE.RN;
  }

  if (typeof window !== 'undefined') {
    _env = ENV_TYPE.WEB;
    return ENV_TYPE.WEB;
  }

  return 'Unknown environment';
}

function isObject$2(arg) {
  return arg === Object(arg) && typeof arg !== 'function';
}

var env = null;
function getOriginal(item) {
  if (env === null) {
    env = getEnv();
  }

  if (isObject$2(item)) {
    return item[env === ENV_TYPE.SWAN ? 'privateOriginal' : '$original'] || item;
  }

  return item;
}

var Events =
/*#__PURE__*/
function () {
  function Events(opts) {
    _classCallCheck(this, Events);

    if (typeof opts !== 'undefined' && opts.callbacks) {
      this.callbacks = opts.callbacks;
    } else {
      this.callbacks = {};
    }
  }

  _createClass(Events, [{
    key: "on",
    value: function on(events, callback, context) {
      var calls, event, node, tail, list;

      if (!callback) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      calls = this.callbacks;

      while (event = events.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
      }

      return this;
    }
  }, {
    key: "once",
    value: function once(events, callback, context) {
      var _this = this;

      var wrapper = function wrapper() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        callback.apply(_this, args);

        _this.off(events, wrapper, context);
      };

      this.on(events, wrapper, context);
      return this;
    }
  }, {
    key: "off",
    value: function off(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      if (!(calls = this.callbacks)) {
        return this;
      }

      if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
      }

      events = events ? events.split(Events.eventSplitter) : Object.keys(calls);

      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];

        if (!node || !(callback || context)) {
          continue;
        }

        tail = node.tail;

        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;

          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      var event, node, calls, tail, rest;

      if (!(calls = this.callbacks)) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      rest = [].slice.call(arguments, 1);

      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
      }

      return this;
    }
  }]);

  return Events;
}();

Events.eventSplitter = /\s+/;

function render() {}

function createRef() {
  return {
    current: null
  };
}
/**
 * 赋值 ref
 * @param {Object} ref ref 对象/ref 函数/ref 字符串
 * @param {Object} target dom/component
 * @param {Object} component 组件实例
 * @param {Object} refs 字符串 ref 搜集器
 */

function commitAttachRef(ref, target, component, refs) {
  var isInit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isInit && !target) return;

  if ('refName' in ref && ref['refName']) {
    refs[ref.refName] = target;
  } else if ('fn' in ref && typeof ref['fn'] === 'function') {
    ref['fn'].call(component, target);
  } else if (ref['fn'] && _typeof(ref['fn']) === 'object' && 'current' in ref['fn']) {
    ref['fn'].current = target;
  }
}
function detachAllRef(component) {
  if (component['$$refs'] && component['$$refs'].length > 0) {
    component['$$refs'].forEach(function (ref) {
      if (typeof ref['fn'] === 'function') {
        ref['fn'].call(component, null);
      } else if (ref['fn'] && _typeof(ref['fn']) === 'object' && 'current' in ref['fn']) {
        ref['fn'].current = null;
      }

      if ('target' in ref) delete ref['target'];
    });
    component.refs = {};
  }
}
var RefsArray =
/*#__PURE__*/
function (_Array) {
  _inherits(RefsArray, _Array);

  /**
   * @param {Array} initList
   */
  function RefsArray() {
    var _getPrototypeOf2;

    var _this;

    var initList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, RefsArray);

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RefsArray)).call.apply(_getPrototypeOf2, [this].concat(_toConsumableArray(initList))));
    _this.inited = false;
    return _this;
  }

  _createClass(RefsArray, [{
    key: "pushRefs",
    value: function pushRefs($$refs) {
      var _this2 = this;

      if (this.inited) return;
      $$refs.forEach(function (ref) {
        return _this2.pushRef(ref);
      });
      this.inited = true;
    }
  }, {
    key: "pushRef",
    value: function pushRef(ref) {
      var isExist = this.find(function (item) {
        return item.id === ref.id;
      });
      !isExist && this.push(ref);
    }
  }]);

  return RefsArray;
}(_wrapNativeSuper(Array));
function handleLoopRef(getElementById) {
  return function (component, id, type, handler) {
    if (!component) return null;
    var dom = getElementById(component, id, type);

    var handlerType = _typeof(handler);

    if (handlerType !== 'function' && handlerType !== 'object') {
      return console.warn('\u5FAA\u73AF Ref \u53EA\u652F\u6301\u51FD\u6570\u6216 createRef()\uFF0C\u5F53\u524D\u7C7B\u578B\u4E3A\uFF1A'.concat(handlerType));
    }

    if (handlerType === 'object') {
      handler.current = dom;
    } else if (handlerType === 'function') {
      handler.call(component.$component, dom);
    }
  };
}

var Chain =
/*#__PURE__*/
function () {
  function Chain(requestParams) {
    var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Chain);

    this.index = index;
    this.requestParams = requestParams;
    this.interceptors = interceptors;
  }

  _createClass(Chain, [{
    key: "proceed",
    value: function proceed(requestParams) {
      this.requestParams = requestParams;

      if (this.index >= this.interceptors.length) {
        throw new Error('chain 参数错误, 请勿直接修改 request.chain');
      }

      var nextInterceptor = this._getNextInterceptor();

      var nextChain = this._getNextChain();

      var p = nextInterceptor(nextChain);
      var res = p.catch(function (err) {
        return Promise.reject(err);
      });
      if (typeof p.abort === 'function') res.abort = p.abort;
      return res;
    }
  }, {
    key: "_getNextInterceptor",
    value: function _getNextInterceptor() {
      return this.interceptors[this.index];
    }
  }, {
    key: "_getNextChain",
    value: function _getNextChain() {
      return new Chain(this.requestParams, this.interceptors, this.index + 1);
    }
  }]);

  return Chain;
}();

var Link =
/*#__PURE__*/
function () {
  function Link(interceptor) {
    _classCallCheck(this, Link);

    this.taroInterceptor = interceptor;
    this.chain = new Chain();
  }

  _createClass(Link, [{
    key: "request",
    value: function request(requestParams) {
      var _this = this;

      this.chain.interceptors = this.chain.interceptors.filter(function (interceptor) {
        return interceptor !== _this.taroInterceptor;
      });
      this.chain.interceptors.push(this.taroInterceptor);
      return this.chain.proceed(_objectSpread({}, requestParams));
    }
  }, {
    key: "addInterceptor",
    value: function addInterceptor(interceptor) {
      this.chain.interceptors.push(interceptor);
    }
  }, {
    key: "cleanInterceptors",
    value: function cleanInterceptors() {
      this.chain = new Chain();
    }
  }]);

  return Link;
}();

function timeoutInterceptor(chain) {
  var requestParams = chain.requestParams;
  var p;
  var res = new Promise(function (resolve, reject) {
    var timeout = setTimeout(function () {
      timeout = null;
      reject(new Error('网络链接超时,请稍后再试！'));
    }, requestParams && requestParams.timeout || 60000);
    p = chain.proceed(requestParams);
    p.then(function (res) {
      if (!timeout) return;
      clearTimeout(timeout);
      resolve(res);
    }).catch(function (err) {
      timeout && clearTimeout(timeout);
      reject(err);
    });
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}
function logInterceptor(chain) {
  var requestParams = chain.requestParams;
  var method = requestParams.method,
      data = requestParams.data,
      url = requestParams.url;
  console.log("http ".concat(method || 'GET', " --> ").concat(url, " data: "), data);
  var p = chain.proceed(requestParams);
  var res = p.then(function (res) {
    console.log("http <-- ".concat(url, " result:"), res);
    return res;
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}

var interceptors = /*#__PURE__*/Object.freeze({
  timeoutInterceptor: timeoutInterceptor,
  logInterceptor: logInterceptor
});

var onAndSyncApis = {
  onSocketOpen: true,
  onSocketError: true,
  onSocketMessage: true,
  onSocketClose: true,
  onBackgroundAudioPlay: true,
  onBackgroundAudioPause: true,
  onBackgroundAudioStop: true,
  onNetworkStatusChange: true,
  onAccelerometerChange: true,
  onCompassChange: true,
  onBluetoothAdapterStateChange: true,
  onBluetoothDeviceFound: true,
  onBLEConnectionStateChange: true,
  onBLECharacteristicValueChange: true,
  onBeaconUpdate: true,
  onBeaconServiceChange: true,
  onUserCaptureScreen: true,
  onHCEMessage: true,
  onGetWifiList: true,
  onWifiConnected: true,
  offWifiConnected: true,
  offGetWifiList: true,
  onDeviceMotionChange: true,
  setStorageSync: true,
  getStorageSync: true,
  getStorageInfoSync: true,
  removeStorageSync: true,
  clearStorageSync: true,
  getSystemInfoSync: true,
  getExtConfigSync: true,
  getLogManager: true,
  onMemoryWarning: true,
  reportMonitor: true,
  reportAnalytics: true,
  navigateToSmartGameProgram: true,
  // 文件
  getFileSystemManager: true,
  getLaunchOptionsSync: true,
  onPageNotFound: true,
  onError: true,
  onAppShow: true,
  onAppHide: true,
  offPageNotFound: true,
  offError: true,
  offAppShow: true,
  offAppHide: true,
  onAudioInterruptionEnd: true,
  onAudioInterruptionBegin: true,
  onLocationChange: true,
  offLocationChange: true
};
var noPromiseApis = {
  // 媒体
  stopRecord: true,
  getRecorderManager: true,
  pauseVoice: true,
  stopVoice: true,
  pauseBackgroundAudio: true,
  stopBackgroundAudio: true,
  getBackgroundAudioManager: true,
  createAudioContext: true,
  createInnerAudioContext: true,
  createVideoContext: true,
  createCameraContext: true,
  createLivePlayerContext: true,
  createLivePusherContext: true,
  // 位置
  createMapContext: true,
  // 设备
  canIUse: true,
  startAccelerometer: true,
  stopAccelerometer: true,
  startCompass: true,
  stopCompass: true,
  // 界面
  hideToast: true,
  hideLoading: true,
  showNavigationBarLoading: true,
  hideNavigationBarLoading: true,
  createAnimation: true,
  createSelectorQuery: true,
  createOffscreenCanvas: true,
  createCanvasContext: true,
  // createContext: true,
  drawCanvas: true,
  hideKeyboard: true,
  stopPullDownRefresh: true,
  createIntersectionObserver: true,
  nextTick: true,
  // 菜单
  getMenuButtonBoundingClientRect: true,
  onWindowResize: true,
  offWindowResize: true,
  // 拓展接口
  arrayBufferToBase64: true,
  base64ToArrayBuffer: true,
  getAccountInfoSync: true,
  getUpdateManager: true,
  createWorker: true,
  // 广告
  createRewardedVideoAd: true,
  createInterstitialAd: true,
  // 调试
  getRealtimeLogManager: true
};
var otherApis = {
  // 网络
  uploadFile: true,
  downloadFile: true,
  connectSocket: true,
  sendSocketMessage: true,
  closeSocket: true,
  // 媒体
  chooseImage: true,
  chooseMessageFile: true,
  previewImage: true,
  getImageInfo: true,
  compressImage: true,
  saveImageToPhotosAlbum: true,
  startRecord: true,
  playVoice: true,
  setInnerAudioOption: true,
  getAvailableAudioSources: true,
  getBackgroundAudioPlayerState: true,
  playBackgroundAudio: true,
  seekBackgroundAudio: true,
  chooseVideo: true,
  saveVideoToPhotosAlbum: true,
  loadFontFace: true,
  // 文件
  saveFile: true,
  getFileInfo: true,
  getSavedFileList: true,
  getSavedFileInfo: true,
  removeSavedFile: true,
  openDocument: true,
  // 数据缓存
  setStorage: true,
  getStorage: true,
  getStorageInfo: true,
  removeStorage: true,
  clearStorage: true,
  // 导航
  navigateBack: true,
  navigateTo: true,
  redirectTo: true,
  switchTab: true,
  reLaunch: true,
  // 位置
  startLocationUpdate: true,
  startLocationUpdateBackground: true,
  stopLocationUpdate: true,
  getLocation: true,
  chooseLocation: true,
  openLocation: true,
  // 设备
  getSystemInfo: true,
  getNetworkType: true,
  makePhoneCall: true,
  scanCode: true,
  setClipboardData: true,
  getClipboardData: true,
  openBluetoothAdapter: true,
  closeBluetoothAdapter: true,
  getBluetoothAdapterState: true,
  startBluetoothDevicesDiscovery: true,
  stopBluetoothDevicesDiscovery: true,
  getBluetoothDevices: true,
  getConnectedBluetoothDevices: true,
  createBLEConnection: true,
  closeBLEConnection: true,
  getBLEDeviceServices: true,
  getBLEDeviceCharacteristics: true,
  readBLECharacteristicValue: true,
  writeBLECharacteristicValue: true,
  notifyBLECharacteristicValueChange: true,
  startBeaconDiscovery: true,
  stopBeaconDiscovery: true,
  getBeacons: true,
  setScreenBrightness: true,
  getScreenBrightness: true,
  setKeepScreenOn: true,
  vibrateLong: true,
  vibrateShort: true,
  addPhoneContact: true,
  getHCEState: true,
  startHCE: true,
  stopHCE: true,
  sendHCEMessage: true,
  startWifi: true,
  stopWifi: true,
  connectWifi: true,
  getWifiList: true,
  setWifiList: true,
  getConnectedWifi: true,
  startDeviceMotionListening: true,
  stopDeviceMotionListening: true,
  // 界面
  pageScrollTo: true,
  showToast: true,
  showLoading: true,
  showModal: true,
  showActionSheet: true,
  setNavigationBarTitle: true,
  setNavigationBarColor: true,
  setTabBarBadge: true,
  removeTabBarBadge: true,
  showTabBarRedDot: true,
  hideTabBarRedDot: true,
  setTabBarStyle: true,
  setTabBarItem: true,
  showTabBar: true,
  hideTabBar: true,
  setTopBarText: true,
  startPullDownRefresh: true,
  canvasToTempFilePath: true,
  canvasGetImageData: true,
  canvasPutImageData: true,
  setBackgroundColor: true,
  setBackgroundTextStyle: true,
  getSelectedTextRange: true,
  hideHomeButton: true,
  // 第三方平台
  getExtConfig: true,
  // 开放接口
  login: true,
  checkSession: true,
  authorize: true,
  getUserInfo: true,
  checkIsSupportFacialRecognition: true,
  startFacialRecognitionVerify: true,
  startFacialRecognitionVerifyAndUploadVideo: true,
  faceVerifyForPay: true,
  requestPayment: true,
  showShareMenu: true,
  hideShareMenu: true,
  updateShareMenu: true,
  getShareInfo: true,
  chooseAddress: true,
  addCard: true,
  openCard: true,
  openSetting: true,
  getSetting: true,
  getWeRunData: true,
  navigateToMiniProgram: true,
  navigateBackMiniProgram: true,
  chooseInvoice: true,
  chooseInvoiceTitle: true,
  checkIsSupportSoterAuthentication: true,
  startSoterAuthentication: true,
  checkIsSoterEnrolledInDevice: true,
  // 订阅消息
  requestSubscribeMessage: true,
  setEnableDebug: true,
  // 支付宝小程序API
  getOpenUserInfo: true,
  // 百度小程序专有 API
  // 百度小程序 AI 相关
  ocrIdCard: true,
  ocrBankCard: true,
  ocrDrivingLicense: true,
  ocrVehicleLicense: true,
  textReview: true,
  textToAudio: true,
  imageAudit: true,
  advancedGeneralIdentify: true,
  objectDetectIdentify: true,
  carClassify: true,
  dishClassify: true,
  logoClassify: true,
  animalClassify: true,
  plantClassify: true,
  setPageInfo: true,
  // 用户信息
  getSwanId: true,
  // 百度收银台支付
  requestPolymerPayment: true,
  // 打开小程序
  navigateToSmartProgram: true,
  navigateBackSmartProgram: true,
  preloadSubPackage: true
};

function initPxTransform(config) {
  var _config$designWidth = config.designWidth,
      designWidth = _config$designWidth === undefined ? 700 : _config$designWidth,
      _config$deviceRatio = config.deviceRatio,
      deviceRatio = _config$deviceRatio === undefined ? {
    '640': 1.17,
    '750': 1,
    '828': 0.905
  } : _config$deviceRatio;
  this.config = this.config || {};
  this.config.designWidth = designWidth;
  this.config.deviceRatio = deviceRatio;
}

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is

function objectIs(x, y) {
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } // eslint-disable-next-line no-self-compare


  return x !== x && y !== y;
}
function isFunction$1(arg) {
  return typeof arg === 'function';
}
var defer = typeof Promise === 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
function isUndefined(o) {
  return o === undefined;
}
function isArray$1(arg) {
  return Array.isArray(arg);
}
function isNullOrUndef(o) {
  return isUndefined(o) || o === null;
}
var isUsingDiff = true;
function getIsUsingDiff() {
  return isUsingDiff;
}
function setIsUsingDiff(flag) {
  isUsingDiff = Boolean(flag);
}

{
  exports.Current = {
    current: null,
    index: 0
  };
}

function forceUpdateCallback() {//
}

function getHooks(index) {
  if (exports.Current.current === null) {
    throw new Error("invalid hooks call: hooks can only be called in a stateless component.");
  }

  var hooks = exports.Current.current.hooks;

  if (index >= hooks.length) {
    hooks.push({});
  }

  return hooks[index];
}

function useState(initialState) {
  if (isFunction$1(initialState)) {
    initialState = initialState();
  }

  var hook = getHooks(exports.Current.index++);

  if (!hook.state) {
    hook.component = exports.Current.current;
    hook.state = [initialState, function (action) {
      var nextState = isFunction$1(action) ? action(hook.state[0]) : action;
      if (hook.state[0] === nextState) return;
      hook.state[0] = nextState;
      hook.component._disable = false;
      hook.component.setState({}, forceUpdateCallback);
    }];
  }

  return hook.state;
}

function usePageLifecycle(callback, lifecycle) {
  var hook = getHooks(exports.Current.index++);

  if (!hook.marked) {
    hook.marked = true;
    hook.component = exports.Current.current;
    hook.callback = callback;
    var component = hook.component;
    var originalLifecycle = component[lifecycle];

    hook.component[lifecycle] = function () {
      var callback = hook.callback;
      originalLifecycle && originalLifecycle.call.apply(originalLifecycle, [component].concat(Array.prototype.slice.call(arguments)));
      return callback && callback.call.apply(callback, [component].concat(Array.prototype.slice.call(arguments)));
    };
  } else {
    hook.callback = callback;
  }
}

function useDidShow(callback) {
  usePageLifecycle(callback, 'componentDidShow');
}
function useDidHide(callback) {
  usePageLifecycle(callback, 'componentDidHide');
}
function usePullDownRefresh(callback) {
  usePageLifecycle(callback, 'onPullDownRefresh');
}
function useReachBottom(callback) {
  usePageLifecycle(callback, 'onReachBottom');
}
function usePageScroll(callback) {
  usePageLifecycle(callback, 'onPageScroll');
}
function useResize(callback) {
  usePageLifecycle(callback, 'onResize');
}
function useShareAppMessage(callback) {
  usePageLifecycle(callback, 'onShareAppMessage');
}
function useTabItemTap(callback) {
  usePageLifecycle(callback, 'onTabItemTap');
}
function useRouter() {
  var hook = getHooks(exports.Current.index++);

  if (!hook.router) {
    hook.component = exports.Current.current;
    hook.router = hook.component.$router;
  }

  return hook.router;
}
function useScope() {
  var hook = getHooks(exports.Current.index++);

  if (!hook.scope) {
    hook.component = exports.Current.current;
    hook.scope = hook.component.$scope;
  }

  return hook.scope;
}
function useReducer(reducer, initialState, initializer) {
  if (isFunction$1(initialState)) {
    initialState = initialState();
  }

  var hook = getHooks(exports.Current.index++);

  if (!hook.state) {
    hook.component = exports.Current.current;
    hook.state = [isUndefined(initializer) ? initialState : initializer(initialState), function (action) {
      hook.state[0] = reducer(hook.state[0], action);
      hook.component._disable = false;
      hook.component.setState({}, forceUpdateCallback);
    }];
  }

  return hook.state;
}

function areDepsChanged(prevDeps, deps) {
  if (isNullOrUndef(prevDeps) || isNullOrUndef(deps)) {
    return true;
  }

  return deps.some(function (d, i) {
    return !objectIs(d, prevDeps[i]);
  });
}

function invokeEffects(component, delay) {
  var effects = delay ? component.effects : component.layoutEffects;
  effects.forEach(function (hook) {
    if (isFunction$1(hook.cleanup)) {
      hook.cleanup();
    }

    var result = hook.effect();

    if (isFunction$1(result)) {
      hook.cleanup = result;
    }
  });

  if (delay) {
    component.effects = [];
  } else {
    component.layoutEffects = [];
  }
}
var scheduleEffectComponents = [];

function invokeScheduleEffects(component) {
  if (!component._afterScheduleEffect) {
    component._afterScheduleEffect = true;
    scheduleEffectComponents.push(component);

    if (scheduleEffectComponents.length === 1) {
      defer(function () {
        setTimeout(function () {
          scheduleEffectComponents.forEach(function (c) {
            c._afterScheduleEffect = false;
            invokeEffects(c, true);
          });
          scheduleEffectComponents = [];
        }, 0);
      });
    }
  }
}

function useEffectImpl(effect, deps, delay) {
  var hook = getHooks(exports.Current.index++);

  if (exports.Current.current._disableEffect || !exports.Current.current.__isReady) {
    return;
  }

  if (areDepsChanged(hook.deps, deps)) {
    hook.effect = effect;
    hook.deps = deps;

    if (delay) {
      exports.Current.current.effects = exports.Current.current.effects.concat(hook);
      invokeScheduleEffects(exports.Current.current);
    } else {
      exports.Current.current.layoutEffects = exports.Current.current.layoutEffects.concat(hook);
    }
  }
}

function useEffect(effect, deps) {
  useEffectImpl(effect, deps, true);
}
function useLayoutEffect(effect, deps) {
  useEffectImpl(effect, deps);
}
function useRef(initialValue) {
  var hook = getHooks(exports.Current.index++);

  if (!hook.ref) {
    hook.ref = {
      current: initialValue
    };
  }

  return hook.ref;
}
function useMemo(factory, deps) {
  var hook = getHooks(exports.Current.index++);

  if (areDepsChanged(hook.deps, deps)) {
    hook.deps = deps;
    hook.callback = factory;
    hook.value = factory();
  }

  return hook.value;
}
function useCallback(callback, deps) {
  return useMemo(function () {
    return callback;
  }, deps);
}
function useImperativeHandle(ref, init, deps) {
  useLayoutEffect(function () {
    if (isFunction$1(ref)) {
      ref(init());
      return function () {
        return ref(null);
      };
    } else if (!isUndefined(ref)) {
      ref.current = init();
      return function () {
        delete ref.current;
      };
    }
  }, isArray$1(deps) ? deps.concat([ref]) : undefined);
}
function useContext(_ref) {
  var context = _ref.context;
  var emitter = context.emitter;

  if (emitter === null) {
    return context._defaultValue;
  }

  var hook = getHooks(exports.Current.index++);

  if (isUndefined(hook.context)) {
    hook.context = true;
    hook.component = exports.Current.current;
    emitter.on(function (_) {
      if (hook.component) {
        hook.component._disable = false;
        hook.component.setState({});
      }
    });
  }

  return emitter.value;
}

var Emitter =
/*#__PURE__*/
function () {
  function Emitter() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Emitter);

    this.value = value;
    this.handlers = [];
  }

  _createClass(Emitter, [{
    key: "on",
    value: function on(handler) {
      this.handlers.push(handler);
    }
  }, {
    key: "off",
    value: function off(handler) {
      this.handlers = this.handlers.filter(function (h) {
        return h !== handler;
      });
    }
  }, {
    key: "set",
    value: function set(value) {
      var _this = this;

      if (objectIs(value, this.value)) {
        return;
      }

      this.value = value;
      this.handlers.forEach(function (h) {
        return h(_this.value);
      });
    }
  }]);

  return Emitter;
}();

var contextUid = 0;
function createContext(defaultValue) {
  var contextId = '__context_' + contextUid++ + '__';
  var context = {
    emitter: null,
    _id: contextId,
    _defaultValue: defaultValue
  };

  function Provider(newValue) {
    var emitter = context.emitter;

    if (!emitter) {
      context.emitter = new Emitter(defaultValue);
    } else {
      emitter.set(newValue);
    }
  }

  return {
    Provider: Provider,
    context: context
  };
}

/* eslint-disable */
var objectIs$1 = Object.is || function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

function shallowEqual(obj1, obj2) {
  if (_typeof(obj1) !== 'object' && _typeof(obj2) !== 'object') {
    return obj1 === obj2;
  }

  if (obj1 === null && obj2 === null) {
    return true;
  }

  if (obj1 === null || obj2 === null) {
    return false;
  }

  if (objectIs$1(obj1, obj2)) {
    return true;
  }

  var obj1Keys = obj1 ? Object.keys(obj1) : [];
  var obj2Keys = obj2 ? Object.keys(obj2) : [];

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (var i = 0; i < obj1Keys.length; i++) {
    var obj1KeyItem = obj1Keys[i];

    if (!obj2.hasOwnProperty(obj1KeyItem) || !objectIs$1(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false;
    }
  }

  return true;
}

function memo(component, propsAreEqual) {
  component.prototype.shouldComponentUpdate = function (nextProps) {
    return isFunction$1(propsAreEqual) ? !propsAreEqual(this.props, nextProps) : !shallowEqual(this.props, nextProps);
  };

  return component;
}

/* eslint-disable camelcase */

{
  exports.eventCenter = new Events();
}
var index = {
  Component: Component,
  Events: Events,
  eventCenter: exports.eventCenter,
  getEnv: getEnv,
  ENV_TYPE: ENV_TYPE,
  render: render,
  internal_safe_get: get,
  internal_safe_set: set$1,
  internal_inline_style: inlineStyle,
  internal_get_original: getOriginal,
  internal_force_update: forceUpdateCallback,
  noPromiseApis: noPromiseApis,
  onAndSyncApis: onAndSyncApis,
  otherApis: otherApis,
  initPxTransform: initPxTransform,
  createRef: createRef,
  commitAttachRef: commitAttachRef,
  detachAllRef: detachAllRef,
  Link: Link,
  interceptors: interceptors,
  RefsArray: RefsArray,
  handleLoopRef: handleLoopRef,
  Current: exports.Current,
  useEffect: useEffect,
  useLayoutEffect: useLayoutEffect,
  useReducer: useReducer,
  useState: useState,
  useDidShow: useDidShow,
  useDidHide: useDidHide,
  usePullDownRefresh: usePullDownRefresh,
  useReachBottom: useReachBottom,
  usePageScroll: usePageScroll,
  useResize: useResize,
  useShareAppMessage: useShareAppMessage,
  useTabItemTap: useTabItemTap,
  useRouter: useRouter,
  useScope: useScope,
  useRef: useRef,
  useCallback: useCallback,
  useMemo: useMemo,
  useImperativeHandle: useImperativeHandle,
  invokeEffects: invokeEffects,
  useContext: useContext,
  createContext: createContext,
  memo: memo,
  getIsUsingDiff: getIsUsingDiff,
  setIsUsingDiff: setIsUsingDiff
};

exports.Component = Component;
exports.Events = Events;
exports.getEnv = getEnv;
exports.ENV_TYPE = ENV_TYPE;
exports.render = render;
exports.internal_safe_get = get;
exports.internal_safe_set = set$1;
exports.internal_inline_style = inlineStyle;
exports.internal_get_original = getOriginal;
exports.internal_force_update = forceUpdateCallback;
exports.noPromiseApis = noPromiseApis;
exports.onAndSyncApis = onAndSyncApis;
exports.otherApis = otherApis;
exports.initPxTransform = initPxTransform;
exports.createRef = createRef;
exports.commitAttachRef = commitAttachRef;
exports.detachAllRef = detachAllRef;
exports.Link = Link;
exports.interceptors = interceptors;
exports.RefsArray = RefsArray;
exports.handleLoopRef = handleLoopRef;
exports.useEffect = useEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useReducer = useReducer;
exports.useState = useState;
exports.useDidShow = useDidShow;
exports.useDidHide = useDidHide;
exports.usePullDownRefresh = usePullDownRefresh;
exports.useReachBottom = useReachBottom;
exports.usePageScroll = usePageScroll;
exports.useResize = useResize;
exports.useShareAppMessage = useShareAppMessage;
exports.useTabItemTap = useTabItemTap;
exports.useRouter = useRouter;
exports.useScope = useScope;
exports.useRef = useRef;
exports.useCallback = useCallback;
exports.useMemo = useMemo;
exports.useImperativeHandle = useImperativeHandle;
exports.invokeEffects = invokeEffects;
exports.useContext = useContext;
exports.createContext = createContext;
exports.memo = memo;
exports.getIsUsingDiff = getIsUsingDiff;
exports.setIsUsingDiff = setIsUsingDiff;
exports.default = index;
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@tarojs/taro/index.js":
/*!********************************************!*\
  !*** ./node_modules/@tarojs/taro/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./dist/index */ "./node_modules/@tarojs/taro/dist/index.js").default;
module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;

  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};

// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./src/assets/png/close.png":
/*!**********************************!*\
  !*** ./src/assets/png/close.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/user_img/img0.png":
/*!**************************************!*\
  !*** ./src/assets/user_img/img0.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/user_img/img1.png":
/*!**************************************!*\
  !*** ./src/assets/user_img/img1.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/user_img/img2.png":
/*!**************************************!*\
  !*** ./src/assets/user_img/img2.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/user_img/img3.png":
/*!**************************************!*\
  !*** ./src/assets/user_img/img3.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABrCAYAAABwv3wMAAAACXBIWXMAAAsSAAALEgHS3X78AAAQu0lEQVR4nO2dCWwc53XH35x7cXktl4epiKJC3ZJ1uLFVV6odu4ESK2nj1kmDuC7apEkMBI1R9ETQ1jLSBkUPtwnaIAiMIkgEwXbio2pVC44vRHIjJ7ZjyqJomzQP8T6We3J35y7eLIdeknt8Mzszu0vpByzI3Z2Zb2b+89733vu+maU0TYN6RJnf+zEAKgwUdRSAai5/CFoMNO0SgLbAtF/9ST0ec82Lpczv7QSg7gKK/rhG0/uAorcDRROIUwZNjYGmjlCqOgCaeh5Ae4lpvzrr8OFURE2KpVsNxTyg0fRRoNkdrjWsSpOUqr0MmvLDWrS+mhFLmdtzUGPYbwDNHrfFcioFLU+VL1CK/DdMx2B/1fenFsRSFvaf0mjm865akFlUeYhSlTNM+Mqpau5GVcTS+yGKflBjuIdqwopI0dQYpUjfAk39bjX6N9fF0i2J5f8KgPK42rCtaAIli//gtqW5JpYyv+/zGsv/R11ZUjnQ0mTxq0z7wBk3mnNcLD1wYPn/BJo94mhD1USV36Rk8QtOByKOiqUs7P+2xvJfrm+XR4ruGr/HhK98zakWHBELAwiN4c5tamsqBlqZIp10IgCh7d4gJrQa6xksJZQoq/prU0KzR/D4c+Uwe7HVsnKRnufhUsvMJ2SYioj6/60NLPSE+c0pGp5cWXjEzojRNrHkxQNngeE/VW65X46m17zf1e0FP2+7gdcOivjfbNvbv2nH/thyluTFm18hEUpvkKbWvGc3sU46DP8p/fzYQMWnKicUdwfp8ltC3Kpg4SYW+E2vFgrG3WGHYBW5QbNCXe8oonDB03Hl162eBsuX9Q2hzEMx/PGJ/t5fWl3fkli5YOKGUGahGQo8Pu+hycu9P7W0vtkVMDwnDSZusJHmVh+kM9rxqf5t/2729Jjqs/SEl/M9f0ODylicS0EiLkBjAD7TuX/sx6QbIxZLLyFhZWIzVc2rhCwpMDa8BAxDpYMBak/n/rFrJHtC7Ab1Wt8NoWyB5RgIBD2gKJo/I8CLpNskEgur59dlUdZBGpu8+sYFQe2budL7Q5KWyoq1Mh715Zo96jolEOSBZnKnP5FSPxd/v+8j5Y6krFgawz5erfEoWdUgmVXWvDZTtb6xKXdaNVVjl2Jy2dHmkgGGMr/vaxrn/Za9u1gaFAMr86mMChmxsDBYrmr2M9AaZCDoZdzcPVtZToowMxlf3WSomf3b8N6RbxRro6RY8tLhqFtBBVrRVESCpZRsar0GLw2dLVzdijbyXgRUJXdRYnS447bxQLFli7pBPahwSahYWoaBiaxpoZBUVoXhGQEml0RH9s1pfH5utQWMDksFGwXFyuVU7gQVkZQMo3MiqGpl42oLcRnGF+pPsHyxkOWM9rnc/P6NFLYsiv66G0EFCnXNxhOMlllvgq0XS5ZUdn4+80+FlmULfagx3AMO7dsqaVG1VSgDFIznKOhq5shWKAP2pfG0or8UJWf9OAbX4KMh1FDw9JnC42X1EN7ot5DUsvrbALBBgw2WpRdqXeirRucEx7Y9G5X0i6FScBvvTmX1iyq+rOj9I76WVjzCO1NZW9rxeNaKjn3X3MD2f1u/3Aax9JsEHAbdnyg7O7nUmJRjFczpUKhS+4mpxdCMUHHu5ykQyWYE9b71n60RC6sVbtzNgVe+06AFWL3q0fWRumgMjCrtJ7FWuJ5sVu2eu7Lt9vyP14il3x/lMBimO21VBlZSAQT7JzP7iBcGWqJVsN8qhErR38z/eK0bxBvZHAYPzC2wn7EqllkqOa71M74MUillTb1wVazcraHOBxYZwT2x0DpkC/mbEfWZIZWx37Iw0Fh678Orcw5Xl6JTsTuASVpukJTXX19yvI18PsQ0QkezuRD72lAC5uPmXGh7Ewu7A43WdhLPfzZV8PP0Iv3J1p1wFvLFolT5k6Ba8/FmSMTT9m2MAEXggZLM5VyKIOjD7mbYFfYDJVWQjiiFz70s0qtz5nNucLgd3d9B6y3VLhevpuDiYApG5gQQJDL3tr3D/Pz77R2VFXx83sLFJFFSt63os9pnHaqopRpmMSlD/1gGnnszAT94JQIvXk5Cskz/srvbC0EfeRX/plYO2horr2YUY2JGuBvyxLrTsZbWYeYk2A0GHFh1ePxiVBewFPccaQSeLRyl5YPL3HOkydH9VhQ4AdUQy8krkBQUDV0jWlmp/bz3tmZoCxbfX7So378zBB6uvKiVQFFwFPICjG2OtpZHdyvnaF3QDGhlyN03BwuuhYL97rEWvb+bXpJgIZELAsKNLPR2ePRjsQtBLDFir2r6kIkhVo9bJwg774uDbrVWHhQs6KPh1h1FB2j14KHSAKIcpcbzZFkLg+4Gh9tdc4Gw0mfdZOMVaQe/GE6XDTqqzdyllt+qys1Rpa7iavHzIXfzv3wUgiqLKKn6nWymwvbFRC4UxtdiwloSjb6+12G3YhZ0h6R5mN2IJforA5qibsE+i6geiMJg9IR5Sz7o0jB0NRsR3X0gCE8k5JpyP6Pzgp5juQ2JZUmy1kbkBvGEPvNabINQCEZJz74WM31VorikuYxbWPUUlSIIZOeOSCz056XGd3JVAvM+38hlqpko57NQLbEIB0mJxDLykVLgdDIr6LnMr7XUXB/mJraKRUIhF0mK4RI/fVtzzYX1ToP9lUQ4Km1b7ccOV4ZRIrpF7CNH5kSYWpIgmVYquhDMEK5CKSxjYoSZaO/wasdAohR2ll5Q+IPbfPrLACNREndcCdWoW2Yy5GIRucHjexpKfo8R3a07/MSNWqE75Lx7tPOCIyVtwrKIxMIr7hNFwmy0Ajciut52j6NhPnoPt6NS7KtIgwtYcYMxkgWxkNl9J7+S6ecaaPQz+kkslBBjzoLLHitjlaRgG+gWsY7nBNUogaVMzKLiWGoRxXqLdAXjhJUDhcIkGnMzTJaLDUGYBU8opgh2Bxx4TNVwgYkkuViqpr3hSCE3kflgkqTdVQEU3k53iIOLH+lz36rMukCeo+XcnY/D7bZXMNEF9o9m9NzJ7pHUfMutBBTKif0jIRKVIRIjn0a+82NJyhBrzM0BSDvAXOx/30hYdolYsMX+tBpCIaMTWfJkmKUWtn800W4kFnUnFkZuOOSOFoy1S9LqPUZ92PdVo48ywL6KVCiEoSn94ciGWPjgwrp5ypnq2bP6f9/OrdC32w9jU2MwOjUGyeUkzCzMrH7PczyEmkPQ1hyCXT09EG7ITZJR1WWgJaKn8KwBL4rByVxyfnCb35JlRk3245oGlyBPLOKI0C1QEI1p01+GOCq/u2jrW3bnXuUoVG6mxXcA1DTQ0jhQyiJQ0nhRIZ95Lb5qxRiZonWbActLZgIL0G+2o9aIZcszXK2icltB43pA5fes/L/V3fZXLgLVu/aJR5R0TReNFgeBFgZBzC6scbdW+stFC/emdYX5p2FVrL75GAy397s1hdqwFhRHwRNEO1uqsgpeNAq+/Mf0LaDV8dwfgbgyp91sxQOTYDOFW8iF7GO6PusKuc86KRYKpHhvAcV/3HXLsQs8hntOPgoDA8/oW9y/6yjI3jFgsm/oQpZjIWLeqliWOm/8/8ETZobbceKM5ee3FmIzCEQKukwmfQGYzAWg1I0lMbN5lUFrE3us7dboq7DhcUA25VuGQOv7gOsFJn1RFw37OVipVoxPCaYfzGLkV6vv132PrvAhK+dUo/2g+I6D0nBCt6jrGezj8IWukU0+A7OjFyw9QcfL02secbvesnDO+6hpkQInQA6cqNlAoZrEI6OwOP0WMOJVoIWrABr5XBW/j9m/5VhswHi/8alow+1ECfINkcojZBMwPfozUI27GjWRWDQPT7/dc0f85vzPCo1jf7+UWDdEIkNVJFiYfOsDoRCKB8VzCBR+b060bPFaBMdSG56OVvh5g0UCDQwapMb7b4hEwOy112E5MVdyQUpLAZ35+YZqCU1Ti313J8Lrly82QwSta/V3sLCqIDf9XslyjxlEcRmGhn4CMzOXgecD0NV1M+zYYftvg1WN6Px7ZYVCNKoBFP9doCmzegQJau6O/YCPfqLQ8sUsC+e/j2m0v0kO3qu7PbtAoc6d+wtYWhpZs8XOzgNw8uQ/1o8iRUhGJ2B+6rKldRnhLeCk/vSHt3q7japFPoVHivvmY2mt50y29ZStQiGXLn13g1DI7Ozb8Oabp21ty20qEQrB/swfOvpsIaGg1OymWenkI3Mzoxp2lHYyNPRC0a2hW6xXKhUK4ai41HXw+fuLfV9UrO17T815mMT5XOjp/FPM6hk7hEJafAt/X+r7khNmunb+6z00JYoomCyVfhQBKQ0N7UWX9HjsmbbmJnYJFeDmIuH9zz1Sapmys5tamrgHJSkDE8M/1ZO8Sjl69MGiW9i379MVb99NIjNXbRGKoQStxR/9eLnliH7lZ/qdh16PJtRbaIaFts69EGz5UEU7NzDwrB5MYGQIK9aGIvb0/GpF23UL7Bbmp/qJwnMSWj3vninVVxkQiZVNn2+eHjo3kxFAv4ezOdQLoa69Fe9kLs9qgFBoe8Xbcgv0LliZELL2PEEO3d+2w08SVb6Jfz8rPvXNu6Znpl5Q1dyTDD3eIIS3HAKP1/pj2+oNvSg7c9W2vebotOrPPnXTlmMxIhMlnpHb1P31l0ItgX8x3uOVNTl8Qc/WNzsYXGGQZadQWMht4ifvJxUKrPz07fS7f/J/0bi8pnNBKwt17QNfIGRqW7UO9k1oTUvzQ7bvaTM//Fj3oee+ZGYdS79TPH75S+OprHfDOH2gsQPauvYBy5W/eaHWwZA8ujAEkmhPypJPkB39xdYj/3Or2fUsiYUBx/z4y9eSyXTB20OCLVugtX1nXYrmpEhIAzf7fs/hH/VZWdfyL4CjYFNDz01kBbVoJouiNYV66yIIcVokpMGXme458Fi31fUr+rn2kaunOjQpOlxKMFjp01C0QGMn0Ezt3I2PYXgqOgmJ2MTaQUIHqFQoqFQsIHCJ68F+LRDsqJpwKFB2OaJbkl25UjkqcX35VCwWrAg2N/xUf6GgoxS+QKseQXoDIcciSQy7M6lFyKSXdJGcdHOFsBpMFMIWsQxmh//81chS9naypTeC7pLl/Xofx3sbdcvjeD9RoJJZjuh/xWxCD7nxvaD/X51H/GAe1eKPnL7pwI9t+3krW8VCZt/744ejCfVho9JxPYKVieZA5ivte848Zufh2y4WrJSmIosz54xa4vVEgI9HA57sbeE9T9qeSTsilsH04Fdejaf9t1fNFbkITataIzfxX90Hz97rVKuOioVERr76O/EkfXozWxlak48aPdlx8MLPnGzHcbEM5oYfejKepO+TJHnT9GUck5Fb/IlHw3ue/Es32nNNLFgJ8RdHnngxmfUfrucAhGMVrckbealj7xO/4Wa7roplsDD42R2CEng8LTUfridL4xhFafJFXungX76v2HQxJ6mKWAZoabFrT59OS8ETmYxY/d+9KIKPS6a9bOppO3MmK1RVrHxi7//hHySzvoczoqenFqwNrcjLzL0d9El/17Lr7FPV3h+oJbHyWRz5078WsskHMqJ3uyBqrlmch1nOernUIM+x37E7obWDmhQrn+j4n/2KsDz7RRkajomi1itrfr8dloeWw1LpZZ6nhj3M8gtC5PlHzQyxV4OaF6sQ2NfFr53Wb6eVZG71BywRQYJeiuJ5GrJplqUnVr9QMyLHs+c1KbHceeDsP1f/KEwCAP8PgbIgFApGdTwAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/user_img/img4.png":
/*!**************************************!*\
  !*** ./src/assets/user_img/img4.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/user_img/img5.png":
/*!**************************************!*\
  !*** ./src/assets/user_img/img5.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/user_img/img6.png":
/*!**************************************!*\
  !*** ./src/assets/user_img/img6.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/user_img/img7.png":
/*!**************************************!*\
  !*** ./src/assets/user_img/img7.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/user_img/img8.png":
/*!**************************************!*\
  !*** ./src/assets/user_img/img8.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/user_img/img9.png":
/*!**************************************!*\
  !*** ./src/assets/user_img/img9.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/service/fetch.jsx":
/*!*******************************!*\
  !*** ./src/service/fetch.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taroQq = __webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js");

var _taroQq2 = _interopRequireDefault(_taroQq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Fetch(url, data).then((res) => { console.log(res) })
var preHttp = 'http://47.97.74.180:9090/lonely_planet/v1/';
var Fetch = function Fetch(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';

  var header = {
    'content-type': 'application/json',
    token: _taroQq2.default.getStorageSync('token')
  };
  return _taroQq2.default.request({
    url: preHttp + url,
    data: data,
    method: method,
    header: header
  }).then(function (res) {
    switch (res.statusCode) {
      case 200:
        if (res.data) {
          return res.data;
        } else {
          return res.code;
        }
      case 400:
        throw new Error('没有权限访问');
      case 401:
        var id = _taroQq2.default.getStorageSync('sid');
        var password = _taroQq2.default.getStorageSync('pwd');
        if (id && password) {
          _taroQq2.default.request({
            url: 'http://47.97.74.180:9090/lonely_planet/v1/login/',
            data: {
              sid: id,
              pwd: password
            },
            method: 'POST',
            header: { 'content-type': 'application/json' }
          }).then(function (back) {
            _taroQq2.default.setStorage({
              key: 'token',
              data: back.data.token
            });
          });
        }
        if (res.data) {
          return res.data;
        } else {
          return res.code;
        }
      case 404:
        throw new Error('not found');
      case 500:
        if (res.data) {
          return res.data;
        } else {
          return res.code;
        }
      // throw new Error('服务器错误');
    }
  });
};

exports.default = Fetch;

/***/ })

}]);