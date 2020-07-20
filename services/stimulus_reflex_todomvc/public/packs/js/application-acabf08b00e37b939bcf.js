/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/controllers sync recursive _controller\\.js$":
/*!**********************************************************!*\
  !*** ./app/javascript/controllers sync _controller\.js$ ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./application_controller.js": "./app/javascript/controllers/application_controller.js",
	"./todos_controller.js": "./app/javascript/controllers/todos_controller.js"
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
webpackContext.id = "./app/javascript/controllers sync recursive _controller\\.js$";

/***/ }),

/***/ "./app/javascript/controllers/application_controller.js":
/*!**************************************************************!*\
  !*** ./app/javascript/controllers/application_controller.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var stimulus_reflex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus_reflex */ "./node_modules/stimulus_reflex/stimulus_reflex.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default =
/*#__PURE__*/
function (_Controller) {
  _inherits(_default, _Controller);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      stimulus_reflex__WEBPACK_IMPORTED_MODULE_1__["default"].register(this);
    }
  }, {
    key: "beforeReflex",
    value: function beforeReflex() {
      document.body.classList.add('wait');
      this.benchmark = performance.now();
    }
  }, {
    key: "afterReflex",
    value: function afterReflex(element, reflex) {
      console.debug(reflex, "".concat((performance.now() - this.benchmark).toFixed(0), "ms"));
      document.body.classList.remove('wait');
      var focusElement = this.element.querySelector('[autofocus]');

      if (focusElement) {
        focusElement.focus(); // shenanigans to ensure that the cursor is placed at the end of the existing value

        var value = focusElement.value;
        focusElement.value = '';
        focusElement.value = value;
      }
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);



/***/ }),

/***/ "./app/javascript/controllers/index.js":
/*!*********************************************!*\
  !*** ./app/javascript/controllers/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus/webpack-helpers */ "./node_modules/stimulus/webpack-helpers.js");
/* harmony import */ var stimulus_reflex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stimulus_reflex */ "./node_modules/stimulus_reflex/stimulus_reflex.js");
// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.



var application = stimulus__WEBPACK_IMPORTED_MODULE_0__["Application"].start();

var context = __webpack_require__("./app/javascript/controllers sync recursive _controller\\.js$");

application.load(Object(stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__["definitionsFromContext"])(context));
stimulus_reflex__WEBPACK_IMPORTED_MODULE_2__["default"].initialize(application);

/***/ }),

/***/ "./app/javascript/controllers/todos_controller.js":
/*!********************************************************!*\
  !*** ./app/javascript/controllers/todos_controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _application_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_controller */ "./app/javascript/controllers/application_controller.js");
/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! velocity-animate */ "./node_modules/velocity-animate/velocity.js");
/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(velocity_animate__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default =
/*#__PURE__*/
function (_ApplicationControlle) {
  _inherits(_default, _ApplicationControlle);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "cancelEdit",
    value: function cancelEdit(event) {
      if (event.type === 'keyup' && !['Escape', 'Esc'].includes(event.key)) return;
      this.stimulate('TodosReflex#cancel_edit');
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      this.highlight(this.lastListItem);
    }
  }, {
    key: "afterToggle",
    value: function afterToggle(checkbox) {
      this.highlight(checkbox.closest('li'));
    }
  }, {
    key: "afterToggleAll",
    value: function afterToggleAll() {
      var _this = this;

      this.listItems.forEach(function (li) {
        return _this.highlight(li);
      });
    }
  }, {
    key: "highlight",
    value: function highlight(element) {
      velocity_animate__WEBPACK_IMPORTED_MODULE_1___default()(element, {
        scale: 1.01,
        backgroundColor: '#ff9'
      }, 200).then(velocity_animate__WEBPACK_IMPORTED_MODULE_1___default()(element, {
        scale: 1,
        backgroundColor: '#fff'
      }, 600));
    }
  }, {
    key: "listItems",
    get: function get() {
      return this.listTarget.querySelectorAll('li');
    }
  }, {
    key: "lastListItem",
    get: function get() {
      return this.listItems[this.listItems.length - 1];
    }
  }]);

  return _default;
}(_application_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

_default.targets = ['list'];


/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var todomvc_common_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! todomvc-common/base.css */ "./node_modules/todomvc-common/base.css");
/* harmony import */ var todomvc_common_base_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(todomvc_common_base_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var todomvc_app_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! todomvc-app-css/index.css */ "./node_modules/todomvc-app-css/index.css");
/* harmony import */ var todomvc_app_css_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(todomvc_app_css_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var stylesheets_application_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stylesheets/application.scss */ "./app/javascript/stylesheets/application.scss");
/* harmony import */ var stylesheets_application_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stylesheets_application_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! controllers */ "./app/javascript/controllers/index.js");
__webpack_require__(/*! channels */ "./app/javascript/channels/index.js");






/***/ }),

/***/ "./app/javascript/stylesheets/application.scss":
/*!*****************************************************!*\
  !*** ./app/javascript/stylesheets/application.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!./application.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./app/javascript/stylesheets/application.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true,"sourceMap":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/index.js ***!
  \***************************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/application */ "./node_modules/@stimulus/core/dist/src/application.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _src_application__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony import */ var _src_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/context */ "./node_modules/@stimulus/core/dist/src/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _src_context__WEBPACK_IMPORTED_MODULE_1__["Context"]; });

/* harmony import */ var _src_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/controller */ "./node_modules/@stimulus/core/dist/src/controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _src_controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]; });

/* harmony import */ var _src_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/schema */ "./node_modules/@stimulus/core/dist/src/schema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _src_schema__WEBPACK_IMPORTED_MODULE_3__["defaultSchema"]; });






/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/action.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/action.js ***!
  \********************************************************/
/*! exports provided: Action, getDefaultEventNameForElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultEventNameForElement", function() { return getDefaultEventNameForElement; });
/* harmony import */ var _action_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action_descriptor */ "./node_modules/@stimulus/core/dist/src/action_descriptor.js");


var Action =
/** @class */
function () {
  function Action(element, index, descriptor) {
    this.element = element;
    this.index = index;
    this.eventTarget = descriptor.eventTarget || element;
    this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
    this.identifier = descriptor.identifier || error("missing identifier");
    this.methodName = descriptor.methodName || error("missing method name");
  }

  Action.forToken = function (token) {
    return new this(token.element, token.index, Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["parseDescriptorString"])(token.content));
  };

  Action.prototype.toString = function () {
    var eventNameSuffix = this.eventTargetName ? "@" + this.eventTargetName : "";
    return "" + this.eventName + eventNameSuffix + "->" + this.identifier + "#" + this.methodName;
  };

  Object.defineProperty(Action.prototype, "eventTargetName", {
    get: function get() {
      return Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["stringifyEventTarget"])(this.eventTarget);
    },
    enumerable: true,
    configurable: true
  });
  return Action;
}();


var defaultEventNames = {
  "a": function a(e) {
    return "click";
  },
  "button": function button(e) {
    return "click";
  },
  "form": function form(e) {
    return "submit";
  },
  "input": function input(e) {
    return e.getAttribute("type") == "submit" ? "click" : "change";
  },
  "select": function select(e) {
    return "change";
  },
  "textarea": function textarea(e) {
    return "change";
  }
};
function getDefaultEventNameForElement(element) {
  var tagName = element.tagName.toLowerCase();

  if (tagName in defaultEventNames) {
    return defaultEventNames[tagName](element);
  }
}

function error(message) {
  throw new Error(message);
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/action_descriptor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/action_descriptor.js ***!
  \*******************************************************************/
/*! exports provided: parseDescriptorString, stringifyEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDescriptorString", function() { return parseDescriptorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyEventTarget", function() { return stringifyEventTarget; });
// capture nos.:            12   23 4               43   1 5   56 7  76
var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#(.+))?$/;
function parseDescriptorString(descriptorString) {
  var source = descriptorString.trim();
  var matches = source.match(descriptorPattern) || [];
  return {
    eventTarget: parseEventTarget(matches[4]),
    eventName: matches[2],
    identifier: matches[5],
    methodName: matches[7]
  };
}

function parseEventTarget(eventTargetName) {
  if (eventTargetName == "window") {
    return window;
  } else if (eventTargetName == "document") {
    return document;
  }
}

function stringifyEventTarget(eventTarget) {
  if (eventTarget == window) {
    return "window";
  } else if (eventTarget == document) {
    return "document";
  }
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/application.js":
/*!*************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/application.js ***!
  \*************************************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatcher */ "./node_modules/@stimulus/core/dist/src/dispatcher.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./node_modules/@stimulus/core/dist/src/router.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ "./node_modules/@stimulus/core/dist/src/schema.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [0, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};





var Application =
/** @class */
function () {
  function Application(element, schema) {
    if (element === void 0) {
      element = document.documentElement;
    }

    if (schema === void 0) {
      schema = _schema__WEBPACK_IMPORTED_MODULE_2__["defaultSchema"];
    }

    this.element = element;
    this.schema = schema;
    this.dispatcher = new _dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"](this);
    this.router = new _router__WEBPACK_IMPORTED_MODULE_1__["Router"](this);
  }

  Application.start = function (element, schema) {
    var application = new Application(element, schema);
    application.start();
    return application;
  };

  Application.prototype.start = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , domReady()];

          case 1:
            _a.sent();

            this.router.start();
            this.dispatcher.start();
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Application.prototype.stop = function () {
    this.router.stop();
    this.dispatcher.stop();
  };

  Application.prototype.register = function (identifier, controllerConstructor) {
    this.load({
      identifier: identifier,
      controllerConstructor: controllerConstructor
    });
  };

  Application.prototype.load = function (head) {
    var _this = this;

    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }

    var definitions = Array.isArray(head) ? head : [head].concat(rest);
    definitions.forEach(function (definition) {
      return _this.router.loadDefinition(definition);
    });
  };

  Application.prototype.unload = function (head) {
    var _this = this;

    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }

    var identifiers = Array.isArray(head) ? head : [head].concat(rest);
    identifiers.forEach(function (identifier) {
      return _this.router.unloadIdentifier(identifier);
    });
  };

  Object.defineProperty(Application.prototype, "controllers", {
    // Controllers
    get: function get() {
      return this.router.contexts.map(function (context) {
        return context.controller;
      });
    },
    enumerable: true,
    configurable: true
  });

  Application.prototype.getControllerForElementAndIdentifier = function (element, identifier) {
    var context = this.router.getContextForElementAndIdentifier(element, identifier);
    return context ? context.controller : null;
  }; // Error handling


  Application.prototype.handleError = function (error, message, detail) {
    console.error("%s\n\n%o\n\n%o", message, error, detail);
  };

  return Application;
}();



function domReady() {
  return new Promise(function (resolve) {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", resolve);
    } else {
      resolve();
    }
  });
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/binding.js":
/*!*********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/binding.js ***!
  \*********************************************************/
/*! exports provided: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return Binding; });
var Binding =
/** @class */
function () {
  function Binding(context, action) {
    this.context = context;
    this.action = action;
  }

  Object.defineProperty(Binding.prototype, "index", {
    get: function get() {
      return this.action.index;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "eventTarget", {
    get: function get() {
      return this.action.eventTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "identifier", {
    get: function get() {
      return this.context.identifier;
    },
    enumerable: true,
    configurable: true
  });

  Binding.prototype.handleEvent = function (event) {
    if (this.willBeInvokedByEvent(event)) {
      this.invokeWithEvent(event);
    }
  };

  Object.defineProperty(Binding.prototype, "eventName", {
    get: function get() {
      return this.action.eventName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "method", {
    get: function get() {
      var method = this.controller[this.methodName];

      if (typeof method == "function") {
        return method;
      }

      throw new Error("Action \"" + this.action + "\" references undefined method \"" + this.methodName + "\"");
    },
    enumerable: true,
    configurable: true
  });

  Binding.prototype.invokeWithEvent = function (event) {
    try {
      this.method.call(this.controller, event);
    } catch (error) {
      var _a = this,
          identifier = _a.identifier,
          controller = _a.controller,
          element = _a.element,
          index = _a.index;

      var detail = {
        identifier: identifier,
        controller: controller,
        element: element,
        index: index,
        event: event
      };
      this.context.handleError(error, "invoking action \"" + this.action + "\"", detail);
    }
  };

  Binding.prototype.willBeInvokedByEvent = function (event) {
    var eventTarget = event.target;

    if (this.element === eventTarget) {
      return true;
    } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
      return this.scope.containsElement(eventTarget);
    } else {
      return true;
    }
  };

  Object.defineProperty(Binding.prototype, "controller", {
    get: function get() {
      return this.context.controller;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "methodName", {
    get: function get() {
      return this.action.methodName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "scope", {
    get: function get() {
      return this.context.scope;
    },
    enumerable: true,
    configurable: true
  });
  return Binding;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/binding_observer.js":
/*!******************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/binding_observer.js ***!
  \******************************************************************/
/*! exports provided: BindingObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingObserver", function() { return BindingObserver; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./node_modules/@stimulus/core/dist/src/action.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding */ "./node_modules/@stimulus/core/dist/src/binding.js");
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");




var BindingObserver =
/** @class */
function () {
  function BindingObserver(context, delegate) {
    this.context = context;
    this.delegate = delegate;
    this.bindingsByAction = new Map();
  }

  BindingObserver.prototype.start = function () {
    if (!this.valueListObserver) {
      this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__["ValueListObserver"](this.element, this.actionAttribute, this);
      this.valueListObserver.start();
    }
  };

  BindingObserver.prototype.stop = function () {
    if (this.valueListObserver) {
      this.valueListObserver.stop();
      delete this.valueListObserver;
      this.disconnectAllActions();
    }
  };

  Object.defineProperty(BindingObserver.prototype, "element", {
    get: function get() {
      return this.context.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "identifier", {
    get: function get() {
      return this.context.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "actionAttribute", {
    get: function get() {
      return this.schema.actionAttribute;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "schema", {
    get: function get() {
      return this.context.schema;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "bindings", {
    get: function get() {
      return Array.from(this.bindingsByAction.values());
    },
    enumerable: true,
    configurable: true
  });

  BindingObserver.prototype.connectAction = function (action) {
    var binding = new _binding__WEBPACK_IMPORTED_MODULE_1__["Binding"](this.context, action);
    this.bindingsByAction.set(action, binding);
    this.delegate.bindingConnected(binding);
  };

  BindingObserver.prototype.disconnectAction = function (action) {
    var binding = this.bindingsByAction.get(action);

    if (binding) {
      this.bindingsByAction["delete"](action);
      this.delegate.bindingDisconnected(binding);
    }
  };

  BindingObserver.prototype.disconnectAllActions = function () {
    var _this = this;

    this.bindings.forEach(function (binding) {
      return _this.delegate.bindingDisconnected(binding);
    });
    this.bindingsByAction.clear();
  }; // Value observer delegate


  BindingObserver.prototype.parseValueForToken = function (token) {
    var action = _action__WEBPACK_IMPORTED_MODULE_0__["Action"].forToken(token);

    if (action.identifier == this.identifier) {
      return action;
    }
  };

  BindingObserver.prototype.elementMatchedValue = function (element, action) {
    this.connectAction(action);
  };

  BindingObserver.prototype.elementUnmatchedValue = function (element, action) {
    this.disconnectAction(action);
  };

  return BindingObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/context.js":
/*!*********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/context.js ***!
  \*********************************************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _binding_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_observer */ "./node_modules/@stimulus/core/dist/src/binding_observer.js");


var Context =
/** @class */
function () {
  function Context(module, scope) {
    this.module = module;
    this.scope = scope;
    this.controller = new module.controllerConstructor(this);
    this.bindingObserver = new _binding_observer__WEBPACK_IMPORTED_MODULE_0__["BindingObserver"](this, this.dispatcher);

    try {
      this.controller.initialize();
    } catch (error) {
      this.handleError(error, "initializing controller");
    }
  }

  Context.prototype.connect = function () {
    this.bindingObserver.start();

    try {
      this.controller.connect();
    } catch (error) {
      this.handleError(error, "connecting controller");
    }
  };

  Context.prototype.disconnect = function () {
    try {
      this.controller.disconnect();
    } catch (error) {
      this.handleError(error, "disconnecting controller");
    }

    this.bindingObserver.stop();
  };

  Object.defineProperty(Context.prototype, "application", {
    get: function get() {
      return this.module.application;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "identifier", {
    get: function get() {
      return this.module.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "schema", {
    get: function get() {
      return this.application.schema;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "dispatcher", {
    get: function get() {
      return this.application.dispatcher;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "parentElement", {
    get: function get() {
      return this.element.parentElement;
    },
    enumerable: true,
    configurable: true
  }); // Error handling

  Context.prototype.handleError = function (error, message, detail) {
    if (detail === void 0) {
      detail = {};
    }

    var _a = this,
        identifier = _a.identifier,
        controller = _a.controller,
        element = _a.element;

    detail = Object.assign({
      identifier: identifier,
      controller: controller,
      element: element
    }, detail);
    this.application.handleError(error, "Error " + message, detail);
  };

  return Context;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/controller.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/controller.js ***!
  \************************************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _target_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./target_properties */ "./node_modules/@stimulus/core/dist/src/target_properties.js");


var Controller =
/** @class */
function () {
  function Controller(context) {
    this.context = context;
  }

  Controller.bless = function () {
    Object(_target_properties__WEBPACK_IMPORTED_MODULE_0__["defineTargetProperties"])(this);
  };

  Object.defineProperty(Controller.prototype, "application", {
    get: function get() {
      return this.context.application;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "scope", {
    get: function get() {
      return this.context.scope;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "targets", {
    get: function get() {
      return this.scope.targets;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "data", {
    get: function get() {
      return this.scope.data;
    },
    enumerable: true,
    configurable: true
  });

  Controller.prototype.initialize = function () {// Override in your subclass to set up initial controller state
  };

  Controller.prototype.connect = function () {// Override in your subclass to respond when the controller is connected to the DOM
  };

  Controller.prototype.disconnect = function () {// Override in your subclass to respond when the controller is disconnected from the DOM
  };

  Controller.targets = [];
  return Controller;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/data_map.js":
/*!**********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/data_map.js ***!
  \**********************************************************/
/*! exports provided: DataMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataMap", function() { return DataMap; });
var DataMap =
/** @class */
function () {
  function DataMap(scope) {
    this.scope = scope;
  }

  Object.defineProperty(DataMap.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DataMap.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: true,
    configurable: true
  });

  DataMap.prototype.get = function (key) {
    key = this.getFormattedKey(key);
    return this.element.getAttribute(key);
  };

  DataMap.prototype.set = function (key, value) {
    key = this.getFormattedKey(key);
    this.element.setAttribute(key, value);
    return this.get(key);
  };

  DataMap.prototype.has = function (key) {
    key = this.getFormattedKey(key);
    return this.element.hasAttribute(key);
  };

  DataMap.prototype["delete"] = function (key) {
    if (this.has(key)) {
      key = this.getFormattedKey(key);
      this.element.removeAttribute(key);
      return true;
    } else {
      return false;
    }
  };

  DataMap.prototype.getFormattedKey = function (key) {
    return "data-" + this.identifier + "-" + dasherize(key);
  };

  return DataMap;
}();



function dasherize(value) {
  return value.replace(/([A-Z])/g, function (_, _char) {
    return "-" + _char.toLowerCase();
  });
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/definition.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/definition.js ***!
  \************************************************************/
/*! exports provided: blessDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blessDefinition", function() { return blessDefinition; });
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/** @hidden */


function blessDefinition(definition) {
  return {
    identifier: definition.identifier,
    controllerConstructor: blessControllerConstructor(definition.controllerConstructor)
  };
}

function blessControllerConstructor(controllerConstructor) {
  var constructor = extend(controllerConstructor);
  constructor.bless();
  return constructor;
}

var extend = function () {
  function extendWithReflect(constructor) {
    function Controller() {
      var _newTarget = this && this instanceof Controller ? this.constructor : void 0;

      return Reflect.construct(constructor, arguments, _newTarget);
    }

    Controller.prototype = Object.create(constructor.prototype, {
      constructor: {
        value: Controller
      }
    });
    Reflect.setPrototypeOf(Controller, constructor);
    return Controller;
  }

  function testReflectExtension() {
    var a = function a() {
      this.a.call(this);
    };

    var b = extendWithReflect(a);

    b.prototype.a = function () {};

    return new b();
  }

  try {
    testReflectExtension();
    return extendWithReflect;
  } catch (error) {
    return function (constructor) {
      return (
        /** @class */
        function (_super) {
          __extends(Controller, _super);

          function Controller() {
            return _super !== null && _super.apply(this, arguments) || this;
          }

          return Controller;
        }(constructor)
      );
    };
  }
}();

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/dispatcher.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/dispatcher.js ***!
  \************************************************************/
/*! exports provided: Dispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher; });
/* harmony import */ var _event_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_listener */ "./node_modules/@stimulus/core/dist/src/event_listener.js");


var Dispatcher =
/** @class */
function () {
  function Dispatcher(application) {
    this.application = application;
    this.eventListenerMaps = new Map();
    this.started = false;
  }

  Dispatcher.prototype.start = function () {
    if (!this.started) {
      this.started = true;
      this.eventListeners.forEach(function (eventListener) {
        return eventListener.connect();
      });
    }
  };

  Dispatcher.prototype.stop = function () {
    if (this.started) {
      this.started = false;
      this.eventListeners.forEach(function (eventListener) {
        return eventListener.disconnect();
      });
    }
  };

  Object.defineProperty(Dispatcher.prototype, "eventListeners", {
    get: function get() {
      return Array.from(this.eventListenerMaps.values()).reduce(function (listeners, map) {
        return listeners.concat(Array.from(map.values()));
      }, []);
    },
    enumerable: true,
    configurable: true
  }); // Binding observer delegate

  /** @hidden */

  Dispatcher.prototype.bindingConnected = function (binding) {
    this.fetchEventListenerForBinding(binding).bindingConnected(binding);
  };
  /** @hidden */


  Dispatcher.prototype.bindingDisconnected = function (binding) {
    this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
  }; // Error handling


  Dispatcher.prototype.handleError = function (error, message, detail) {
    if (detail === void 0) {
      detail = {};
    }

    this.application.handleError(error, "Error " + message, detail);
  };

  Dispatcher.prototype.fetchEventListenerForBinding = function (binding) {
    var eventTarget = binding.eventTarget,
        eventName = binding.eventName;
    return this.fetchEventListener(eventTarget, eventName);
  };

  Dispatcher.prototype.fetchEventListener = function (eventTarget, eventName) {
    var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
    var eventListener = eventListenerMap.get(eventName);

    if (!eventListener) {
      eventListener = this.createEventListener(eventTarget, eventName);
      eventListenerMap.set(eventName, eventListener);
    }

    return eventListener;
  };

  Dispatcher.prototype.createEventListener = function (eventTarget, eventName) {
    var eventListener = new _event_listener__WEBPACK_IMPORTED_MODULE_0__["EventListener"](eventTarget, eventName);

    if (this.started) {
      eventListener.connect();
    }

    return eventListener;
  };

  Dispatcher.prototype.fetchEventListenerMapForEventTarget = function (eventTarget) {
    var eventListenerMap = this.eventListenerMaps.get(eventTarget);

    if (!eventListenerMap) {
      eventListenerMap = new Map();
      this.eventListenerMaps.set(eventTarget, eventListenerMap);
    }

    return eventListenerMap;
  };

  return Dispatcher;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/event_listener.js":
/*!****************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/event_listener.js ***!
  \****************************************************************/
/*! exports provided: EventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return EventListener; });
var EventListener =
/** @class */
function () {
  function EventListener(eventTarget, eventName) {
    this.eventTarget = eventTarget;
    this.eventName = eventName;
    this.unorderedBindings = new Set();
  }

  EventListener.prototype.connect = function () {
    this.eventTarget.addEventListener(this.eventName, this, false);
  };

  EventListener.prototype.disconnect = function () {
    this.eventTarget.removeEventListener(this.eventName, this, false);
  }; // Binding observer delegate

  /** @hidden */


  EventListener.prototype.bindingConnected = function (binding) {
    this.unorderedBindings.add(binding);
  };
  /** @hidden */


  EventListener.prototype.bindingDisconnected = function (binding) {
    this.unorderedBindings["delete"](binding);
  };

  EventListener.prototype.handleEvent = function (event) {
    var extendedEvent = extendEvent(event);

    for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
      var binding = _a[_i];

      if (extendedEvent.immediatePropagationStopped) {
        break;
      } else {
        binding.handleEvent(extendedEvent);
      }
    }
  };

  Object.defineProperty(EventListener.prototype, "bindings", {
    get: function get() {
      return Array.from(this.unorderedBindings).sort(function (left, right) {
        var leftIndex = left.index,
            rightIndex = right.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    },
    enumerable: true,
    configurable: true
  });
  return EventListener;
}();



function extendEvent(event) {
  if ("immediatePropagationStopped" in event) {
    return event;
  } else {
    var stopImmediatePropagation_1 = event.stopImmediatePropagation;
    return Object.assign(event, {
      immediatePropagationStopped: false,
      stopImmediatePropagation: function stopImmediatePropagation() {
        this.immediatePropagationStopped = true;
        stopImmediatePropagation_1.call(this);
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/module.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/module.js ***!
  \********************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./node_modules/@stimulus/core/dist/src/context.js");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definition */ "./node_modules/@stimulus/core/dist/src/definition.js");



var Module =
/** @class */
function () {
  function Module(application, definition) {
    this.application = application;
    this.definition = Object(_definition__WEBPACK_IMPORTED_MODULE_1__["blessDefinition"])(definition);
    this.contextsByScope = new WeakMap();
    this.connectedContexts = new Set();
  }

  Object.defineProperty(Module.prototype, "identifier", {
    get: function get() {
      return this.definition.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Module.prototype, "controllerConstructor", {
    get: function get() {
      return this.definition.controllerConstructor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Module.prototype, "contexts", {
    get: function get() {
      return Array.from(this.connectedContexts);
    },
    enumerable: true,
    configurable: true
  });

  Module.prototype.connectContextForScope = function (scope) {
    var context = this.fetchContextForScope(scope);
    this.connectedContexts.add(context);
    context.connect();
  };

  Module.prototype.disconnectContextForScope = function (scope) {
    var context = this.contextsByScope.get(scope);

    if (context) {
      this.connectedContexts["delete"](context);
      context.disconnect();
    }
  };

  Module.prototype.fetchContextForScope = function (scope) {
    var context = this.contextsByScope.get(scope);

    if (!context) {
      context = new _context__WEBPACK_IMPORTED_MODULE_0__["Context"](this, scope);
      this.contextsByScope.set(scope, context);
    }

    return context;
  };

  return Module;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/router.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/router.js ***!
  \********************************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./node_modules/@stimulus/core/dist/src/module.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "./node_modules/@stimulus/multimap/dist/index.js");
/* harmony import */ var _scope_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scope_observer */ "./node_modules/@stimulus/core/dist/src/scope_observer.js");




var Router =
/** @class */
function () {
  function Router(application) {
    this.application = application;
    this.scopeObserver = new _scope_observer__WEBPACK_IMPORTED_MODULE_2__["ScopeObserver"](this.element, this.schema, this);
    this.scopesByIdentifier = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"]();
    this.modulesByIdentifier = new Map();
  }

  Object.defineProperty(Router.prototype, "element", {
    get: function get() {
      return this.application.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "schema", {
    get: function get() {
      return this.application.schema;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "controllerAttribute", {
    get: function get() {
      return this.schema.controllerAttribute;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "modules", {
    get: function get() {
      return Array.from(this.modulesByIdentifier.values());
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "contexts", {
    get: function get() {
      return this.modules.reduce(function (contexts, module) {
        return contexts.concat(module.contexts);
      }, []);
    },
    enumerable: true,
    configurable: true
  });

  Router.prototype.start = function () {
    this.scopeObserver.start();
  };

  Router.prototype.stop = function () {
    this.scopeObserver.stop();
  };

  Router.prototype.loadDefinition = function (definition) {
    this.unloadIdentifier(definition.identifier);
    var module = new _module__WEBPACK_IMPORTED_MODULE_0__["Module"](this.application, definition);
    this.connectModule(module);
  };

  Router.prototype.unloadIdentifier = function (identifier) {
    var module = this.modulesByIdentifier.get(identifier);

    if (module) {
      this.disconnectModule(module);
    }
  };

  Router.prototype.getContextForElementAndIdentifier = function (element, identifier) {
    var module = this.modulesByIdentifier.get(identifier);

    if (module) {
      return module.contexts.find(function (context) {
        return context.element == element;
      });
    }
  }; // Error handler delegate

  /** @hidden */


  Router.prototype.handleError = function (error, message, detail) {
    this.application.handleError(error, message, detail);
  }; // Scope observer delegate

  /** @hidden */


  Router.prototype.scopeConnected = function (scope) {
    this.scopesByIdentifier.add(scope.identifier, scope);
    var module = this.modulesByIdentifier.get(scope.identifier);

    if (module) {
      module.connectContextForScope(scope);
    }
  };
  /** @hidden */


  Router.prototype.scopeDisconnected = function (scope) {
    this.scopesByIdentifier["delete"](scope.identifier, scope);
    var module = this.modulesByIdentifier.get(scope.identifier);

    if (module) {
      module.disconnectContextForScope(scope);
    }
  }; // Modules


  Router.prototype.connectModule = function (module) {
    this.modulesByIdentifier.set(module.identifier, module);
    var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
    scopes.forEach(function (scope) {
      return module.connectContextForScope(scope);
    });
  };

  Router.prototype.disconnectModule = function (module) {
    this.modulesByIdentifier["delete"](module.identifier);
    var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
    scopes.forEach(function (scope) {
      return module.disconnectContextForScope(scope);
    });
  };

  return Router;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/schema.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/schema.js ***!
  \********************************************************/
/*! exports provided: defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });
var defaultSchema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target"
};

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/scope.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/scope.js ***!
  \*******************************************************/
/*! exports provided: Scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony import */ var _data_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_map */ "./node_modules/@stimulus/core/dist/src/data_map.js");
/* harmony import */ var _target_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target_set */ "./node_modules/@stimulus/core/dist/src/target_set.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/@stimulus/core/dist/src/selectors.js");




var Scope =
/** @class */
function () {
  function Scope(schema, identifier, element) {
    this.schema = schema;
    this.identifier = identifier;
    this.element = element;
    this.targets = new _target_set__WEBPACK_IMPORTED_MODULE_1__["TargetSet"](this);
    this.data = new _data_map__WEBPACK_IMPORTED_MODULE_0__["DataMap"](this);
  }

  Scope.prototype.findElement = function (selector) {
    return this.findAllElements(selector)[0];
  };

  Scope.prototype.findAllElements = function (selector) {
    var head = this.element.matches(selector) ? [this.element] : [];
    var tail = this.filterElements(Array.from(this.element.querySelectorAll(selector)));
    return head.concat(tail);
  };

  Scope.prototype.filterElements = function (elements) {
    var _this = this;

    return elements.filter(function (element) {
      return _this.containsElement(element);
    });
  };

  Scope.prototype.containsElement = function (element) {
    return element.closest(this.controllerSelector) === this.element;
  };

  Object.defineProperty(Scope.prototype, "controllerSelector", {
    get: function get() {
      return Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["attributeValueContainsToken"])(this.schema.controllerAttribute, this.identifier);
    },
    enumerable: true,
    configurable: true
  });
  return Scope;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/scope_observer.js":
/*!****************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/scope_observer.js ***!
  \****************************************************************/
/*! exports provided: ScopeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopeObserver", function() { return ScopeObserver; });
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scope */ "./node_modules/@stimulus/core/dist/src/scope.js");
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");



var ScopeObserver =
/** @class */
function () {
  function ScopeObserver(element, schema, delegate) {
    this.element = element;
    this.schema = schema;
    this.delegate = delegate;
    this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_1__["ValueListObserver"](this.element, this.controllerAttribute, this);
    this.scopesByIdentifierByElement = new WeakMap();
    this.scopeReferenceCounts = new WeakMap();
  }

  ScopeObserver.prototype.start = function () {
    this.valueListObserver.start();
  };

  ScopeObserver.prototype.stop = function () {
    this.valueListObserver.stop();
  };

  Object.defineProperty(ScopeObserver.prototype, "controllerAttribute", {
    get: function get() {
      return this.schema.controllerAttribute;
    },
    enumerable: true,
    configurable: true
  }); // Value observer delegate

  /** @hidden */

  ScopeObserver.prototype.parseValueForToken = function (token) {
    var element = token.element,
        identifier = token.content;
    var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
    var scope = scopesByIdentifier.get(identifier);

    if (!scope) {
      scope = new _scope__WEBPACK_IMPORTED_MODULE_0__["Scope"](this.schema, identifier, element);
      scopesByIdentifier.set(identifier, scope);
    }

    return scope;
  };
  /** @hidden */


  ScopeObserver.prototype.elementMatchedValue = function (element, value) {
    var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
    this.scopeReferenceCounts.set(value, referenceCount);

    if (referenceCount == 1) {
      this.delegate.scopeConnected(value);
    }
  };
  /** @hidden */


  ScopeObserver.prototype.elementUnmatchedValue = function (element, value) {
    var referenceCount = this.scopeReferenceCounts.get(value);

    if (referenceCount) {
      this.scopeReferenceCounts.set(value, referenceCount - 1);

      if (referenceCount == 1) {
        this.delegate.scopeDisconnected(value);
      }
    }
  };

  ScopeObserver.prototype.fetchScopesByIdentifierForElement = function (element) {
    var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);

    if (!scopesByIdentifier) {
      scopesByIdentifier = new Map();
      this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
    }

    return scopesByIdentifier;
  };

  return ScopeObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/selectors.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/selectors.js ***!
  \***********************************************************/
/*! exports provided: attributeValueContainsToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeValueContainsToken", function() { return attributeValueContainsToken; });
/** @hidden */
function attributeValueContainsToken(attributeName, token) {
  return "[" + attributeName + "~=\"" + token + "\"]";
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/target_properties.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/target_properties.js ***!
  \*******************************************************************/
/*! exports provided: defineTargetProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineTargetProperties", function() { return defineTargetProperties; });
/** @hidden */
function defineTargetProperties(constructor) {
  var prototype = constructor.prototype;
  var targetNames = getTargetNamesForConstructor(constructor);
  targetNames.forEach(function (name) {
    var _a;

    return defineLinkedProperties(prototype, (_a = {}, _a[name + "Target"] = {
      get: function get() {
        var target = this.targets.find(name);

        if (target) {
          return target;
        } else {
          throw new Error("Missing target element \"" + this.identifier + "." + name + "\"");
        }
      }
    }, _a[name + "Targets"] = {
      get: function get() {
        return this.targets.findAll(name);
      }
    }, _a["has" + capitalize(name) + "Target"] = {
      get: function get() {
        return this.targets.has(name);
      }
    }, _a));
  });
}

function getTargetNamesForConstructor(constructor) {
  var ancestors = getAncestorsForConstructor(constructor);
  return Array.from(ancestors.reduce(function (targetNames, constructor) {
    getOwnTargetNamesForConstructor(constructor).forEach(function (name) {
      return targetNames.add(name);
    });
    return targetNames;
  }, new Set()));
}

function getAncestorsForConstructor(constructor) {
  var ancestors = [];

  while (constructor) {
    ancestors.push(constructor);
    constructor = Object.getPrototypeOf(constructor);
  }

  return ancestors;
}

function getOwnTargetNamesForConstructor(constructor) {
  var definition = constructor["targets"];
  return Array.isArray(definition) ? definition : [];
}

function defineLinkedProperties(object, properties) {
  Object.keys(properties).forEach(function (name) {
    if (!(name in object)) {
      var descriptor = properties[name];
      Object.defineProperty(object, name, descriptor);
    }
  });
}

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/target_set.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/target_set.js ***!
  \************************************************************/
/*! exports provided: TargetSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetSet", function() { return TargetSet; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./node_modules/@stimulus/core/dist/src/selectors.js");


var TargetSet =
/** @class */
function () {
  function TargetSet(scope) {
    this.scope = scope;
  }

  Object.defineProperty(TargetSet.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TargetSet.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TargetSet.prototype, "schema", {
    get: function get() {
      return this.scope.schema;
    },
    enumerable: true,
    configurable: true
  });

  TargetSet.prototype.has = function (targetName) {
    return this.find(targetName) != null;
  };

  TargetSet.prototype.find = function () {
    var targetNames = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      targetNames[_i] = arguments[_i];
    }

    var selector = this.getSelectorForTargetNames(targetNames);
    return this.scope.findElement(selector);
  };

  TargetSet.prototype.findAll = function () {
    var targetNames = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      targetNames[_i] = arguments[_i];
    }

    var selector = this.getSelectorForTargetNames(targetNames);
    return this.scope.findAllElements(selector);
  };

  TargetSet.prototype.getSelectorForTargetNames = function (targetNames) {
    var _this = this;

    return targetNames.map(function (targetName) {
      return _this.getSelectorForTargetName(targetName);
    }).join(", ");
  };

  TargetSet.prototype.getSelectorForTargetName = function (targetName) {
    var targetDescriptor = this.identifier + "." + targetName;
    return Object(_selectors__WEBPACK_IMPORTED_MODULE_0__["attributeValueContainsToken"])(this.schema.targetAttribute, targetDescriptor);
  };

  return TargetSet;
}();



/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/index.js ***!
  \*******************************************************/
/*! exports provided: Multimap, IndexedMultimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/multimap */ "./node_modules/@stimulus/multimap/dist/src/multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return _src_multimap__WEBPACK_IMPORTED_MODULE_0__["Multimap"]; });

/* harmony import */ var _src_indexed_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/indexed_multimap */ "./node_modules/@stimulus/multimap/dist/src/indexed_multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return _src_indexed_multimap__WEBPACK_IMPORTED_MODULE_1__["IndexedMultimap"]; });




/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/src/indexed_multimap.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/src/indexed_multimap.js ***!
  \**********************************************************************/
/*! exports provided: IndexedMultimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return IndexedMultimap; });
/* harmony import */ var _multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multimap */ "./node_modules/@stimulus/multimap/dist/src/multimap.js");
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/src/set_operations.js");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var IndexedMultimap =
/** @class */
function (_super) {
  __extends(IndexedMultimap, _super);

  function IndexedMultimap() {
    var _this = _super.call(this) || this;

    _this.keysByValue = new Map();
    return _this;
  }

  Object.defineProperty(IndexedMultimap.prototype, "values", {
    get: function get() {
      return Array.from(this.keysByValue.keys());
    },
    enumerable: true,
    configurable: true
  });

  IndexedMultimap.prototype.add = function (key, value) {
    _super.prototype.add.call(this, key, value);

    Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["add"])(this.keysByValue, value, key);
  };

  IndexedMultimap.prototype["delete"] = function (key, value) {
    _super.prototype["delete"].call(this, key, value);

    Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["del"])(this.keysByValue, value, key);
  };

  IndexedMultimap.prototype.hasValue = function (value) {
    return this.keysByValue.has(value);
  };

  IndexedMultimap.prototype.getKeysForValue = function (value) {
    var set = this.keysByValue.get(value);
    return set ? Array.from(set) : [];
  };

  return IndexedMultimap;
}(_multimap__WEBPACK_IMPORTED_MODULE_0__["Multimap"]);



/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/src/multimap.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/src/multimap.js ***!
  \**************************************************************/
/*! exports provided: Multimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return Multimap; });
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/src/set_operations.js");


var Multimap =
/** @class */
function () {
  function Multimap() {
    this.valuesByKey = new Map();
  }

  Object.defineProperty(Multimap.prototype, "values", {
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (values, set) {
        return values.concat(Array.from(set));
      }, []);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Multimap.prototype, "size", {
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (size, set) {
        return size + set.size;
      }, 0);
    },
    enumerable: true,
    configurable: true
  });

  Multimap.prototype.add = function (key, value) {
    Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["add"])(this.valuesByKey, key, value);
  };

  Multimap.prototype["delete"] = function (key, value) {
    Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["del"])(this.valuesByKey, key, value);
  };

  Multimap.prototype.has = function (key, value) {
    var values = this.valuesByKey.get(key);
    return values != null && values.has(value);
  };

  Multimap.prototype.hasKey = function (key) {
    return this.valuesByKey.has(key);
  };

  Multimap.prototype.hasValue = function (value) {
    var sets = Array.from(this.valuesByKey.values());
    return sets.some(function (set) {
      return set.has(value);
    });
  };

  Multimap.prototype.getValuesForKey = function (key) {
    var values = this.valuesByKey.get(key);
    return values ? Array.from(values) : [];
  };

  Multimap.prototype.getKeysForValue = function (value) {
    return Array.from(this.valuesByKey).filter(function (_a) {
      var key = _a[0],
          values = _a[1];
      return values.has(value);
    }).map(function (_a) {
      var key = _a[0],
          values = _a[1];
      return key;
    });
  };

  return Multimap;
}();



/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/src/set_operations.js":
/*!********************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/src/set_operations.js ***!
  \********************************************************************/
/*! exports provided: add, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return prune; });
function add(map, key, value) {
  fetch(map, key).add(value);
}
function del(map, key, value) {
  fetch(map, key)["delete"](value);
  prune(map, key);
}
function fetch(map, key) {
  var values = map.get(key);

  if (!values) {
    values = new Set();
    map.set(key, values);
  }

  return values;
}
function prune(map, key) {
  var values = map.get(key);

  if (values != null && values.size == 0) {
    map["delete"](key);
  }
}

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/index.js ***!
  \*****************************************************************/
/*! exports provided: AttributeObserver, ElementObserver, TokenListObserver, ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/attribute_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return _src_attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"]; });

/* harmony import */ var _src_element_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/element_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return _src_element_observer__WEBPACK_IMPORTED_MODULE_1__["ElementObserver"]; });

/* harmony import */ var _src_token_list_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/token_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return _src_token_list_observer__WEBPACK_IMPORTED_MODULE_2__["TokenListObserver"]; });

/* harmony import */ var _src_value_list_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/value_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return _src_value_list_observer__WEBPACK_IMPORTED_MODULE_3__["ValueListObserver"]; });






/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js ***!
  \**********************************************************************************/
/*! exports provided: AttributeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return AttributeObserver; });
/* harmony import */ var _element_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js");


var AttributeObserver =
/** @class */
function () {
  function AttributeObserver(element, attributeName, delegate) {
    this.attributeName = attributeName;
    this.delegate = delegate;
    this.elementObserver = new _element_observer__WEBPACK_IMPORTED_MODULE_0__["ElementObserver"](element, this);
  }

  Object.defineProperty(AttributeObserver.prototype, "element", {
    get: function get() {
      return this.elementObserver.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttributeObserver.prototype, "selector", {
    get: function get() {
      return "[" + this.attributeName + "]";
    },
    enumerable: true,
    configurable: true
  });

  AttributeObserver.prototype.start = function () {
    this.elementObserver.start();
  };

  AttributeObserver.prototype.stop = function () {
    this.elementObserver.stop();
  };

  AttributeObserver.prototype.refresh = function () {
    this.elementObserver.refresh();
  };

  Object.defineProperty(AttributeObserver.prototype, "started", {
    get: function get() {
      return this.elementObserver.started;
    },
    enumerable: true,
    configurable: true
  }); // Element observer delegate

  AttributeObserver.prototype.matchElement = function (element) {
    return element.hasAttribute(this.attributeName);
  };

  AttributeObserver.prototype.matchElementsInTree = function (tree) {
    var match = this.matchElement(tree) ? [tree] : [];
    var matches = Array.from(tree.querySelectorAll(this.selector));
    return match.concat(matches);
  };

  AttributeObserver.prototype.elementMatched = function (element) {
    if (this.delegate.elementMatchedAttribute) {
      this.delegate.elementMatchedAttribute(element, this.attributeName);
    }
  };

  AttributeObserver.prototype.elementUnmatched = function (element) {
    if (this.delegate.elementUnmatchedAttribute) {
      this.delegate.elementUnmatchedAttribute(element, this.attributeName);
    }
  };

  AttributeObserver.prototype.elementAttributeChanged = function (element, attributeName) {
    if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
      this.delegate.elementAttributeValueChanged(element, attributeName);
    }
  };

  return AttributeObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js ***!
  \********************************************************************************/
/*! exports provided: ElementObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return ElementObserver; });
var ElementObserver =
/** @class */
function () {
  function ElementObserver(element, delegate) {
    var _this = this;

    this.element = element;
    this.started = false;
    this.delegate = delegate;
    this.elements = new Set();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this.processMutations(mutations);
    });
  }

  ElementObserver.prototype.start = function () {
    if (!this.started) {
      this.started = true;
      this.mutationObserver.observe(this.element, {
        attributes: true,
        childList: true,
        subtree: true
      });
      this.refresh();
    }
  };

  ElementObserver.prototype.stop = function () {
    if (this.started) {
      this.mutationObserver.takeRecords();
      this.mutationObserver.disconnect();
      this.started = false;
    }
  };

  ElementObserver.prototype.refresh = function () {
    if (this.started) {
      var matches = new Set(this.matchElementsInTree());

      for (var _i = 0, _a = Array.from(this.elements); _i < _a.length; _i++) {
        var element = _a[_i];

        if (!matches.has(element)) {
          this.removeElement(element);
        }
      }

      for (var _b = 0, _c = Array.from(matches); _b < _c.length; _b++) {
        var element = _c[_b];
        this.addElement(element);
      }
    }
  }; // Mutation record processing


  ElementObserver.prototype.processMutations = function (mutations) {
    if (this.started) {
      for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
        var mutation = mutations_1[_i];
        this.processMutation(mutation);
      }
    }
  };

  ElementObserver.prototype.processMutation = function (mutation) {
    if (mutation.type == "attributes") {
      this.processAttributeChange(mutation.target, mutation.attributeName);
    } else if (mutation.type == "childList") {
      this.processRemovedNodes(mutation.removedNodes);
      this.processAddedNodes(mutation.addedNodes);
    }
  };

  ElementObserver.prototype.processAttributeChange = function (node, attributeName) {
    var element = node;

    if (this.elements.has(element)) {
      if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
        this.delegate.elementAttributeChanged(element, attributeName);
      } else {
        this.removeElement(element);
      }
    } else if (this.matchElement(element)) {
      this.addElement(element);
    }
  };

  ElementObserver.prototype.processRemovedNodes = function (nodes) {
    for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
      var node = _a[_i];
      var element = this.elementFromNode(node);

      if (element) {
        this.processTree(element, this.removeElement);
      }
    }
  };

  ElementObserver.prototype.processAddedNodes = function (nodes) {
    for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
      var node = _a[_i];
      var element = this.elementFromNode(node);

      if (element && this.elementIsActive(element)) {
        this.processTree(element, this.addElement);
      }
    }
  }; // Element matching


  ElementObserver.prototype.matchElement = function (element) {
    return this.delegate.matchElement(element);
  };

  ElementObserver.prototype.matchElementsInTree = function (tree) {
    if (tree === void 0) {
      tree = this.element;
    }

    return this.delegate.matchElementsInTree(tree);
  };

  ElementObserver.prototype.processTree = function (tree, processor) {
    for (var _i = 0, _a = this.matchElementsInTree(tree); _i < _a.length; _i++) {
      var element = _a[_i];
      processor.call(this, element);
    }
  };

  ElementObserver.prototype.elementFromNode = function (node) {
    if (node.nodeType == Node.ELEMENT_NODE) {
      return node;
    }
  };

  ElementObserver.prototype.elementIsActive = function (element) {
    if (element.isConnected != this.element.isConnected) {
      return false;
    } else {
      return this.element.contains(element);
    }
  }; // Element tracking


  ElementObserver.prototype.addElement = function (element) {
    if (!this.elements.has(element)) {
      if (this.elementIsActive(element)) {
        this.elements.add(element);

        if (this.delegate.elementMatched) {
          this.delegate.elementMatched(element);
        }
      }
    }
  };

  ElementObserver.prototype.removeElement = function (element) {
    if (this.elements.has(element)) {
      this.elements["delete"](element);

      if (this.delegate.elementUnmatched) {
        this.delegate.elementUnmatched(element);
      }
    }
  };

  return ElementObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js ***!
  \***********************************************************************************/
/*! exports provided: TokenListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return TokenListObserver; });
/* harmony import */ var _attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "./node_modules/@stimulus/multimap/dist/index.js");



var TokenListObserver =
/** @class */
function () {
  function TokenListObserver(element, attributeName, delegate) {
    this.attributeObserver = new _attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"](element, attributeName, this);
    this.delegate = delegate;
    this.tokensByElement = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"]();
  }

  Object.defineProperty(TokenListObserver.prototype, "started", {
    get: function get() {
      return this.attributeObserver.started;
    },
    enumerable: true,
    configurable: true
  });

  TokenListObserver.prototype.start = function () {
    this.attributeObserver.start();
  };

  TokenListObserver.prototype.stop = function () {
    this.attributeObserver.stop();
  };

  TokenListObserver.prototype.refresh = function () {
    this.attributeObserver.refresh();
  };

  Object.defineProperty(TokenListObserver.prototype, "element", {
    get: function get() {
      return this.attributeObserver.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TokenListObserver.prototype, "attributeName", {
    get: function get() {
      return this.attributeObserver.attributeName;
    },
    enumerable: true,
    configurable: true
  }); // Attribute observer delegate

  TokenListObserver.prototype.elementMatchedAttribute = function (element) {
    this.tokensMatched(this.readTokensForElement(element));
  };

  TokenListObserver.prototype.elementAttributeValueChanged = function (element) {
    var _a = this.refreshTokensForElement(element),
        unmatchedTokens = _a[0],
        matchedTokens = _a[1];

    this.tokensUnmatched(unmatchedTokens);
    this.tokensMatched(matchedTokens);
  };

  TokenListObserver.prototype.elementUnmatchedAttribute = function (element) {
    this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
  };

  TokenListObserver.prototype.tokensMatched = function (tokens) {
    var _this = this;

    tokens.forEach(function (token) {
      return _this.tokenMatched(token);
    });
  };

  TokenListObserver.prototype.tokensUnmatched = function (tokens) {
    var _this = this;

    tokens.forEach(function (token) {
      return _this.tokenUnmatched(token);
    });
  };

  TokenListObserver.prototype.tokenMatched = function (token) {
    this.delegate.tokenMatched(token);
    this.tokensByElement.add(token.element, token);
  };

  TokenListObserver.prototype.tokenUnmatched = function (token) {
    this.delegate.tokenUnmatched(token);
    this.tokensByElement["delete"](token.element, token);
  };

  TokenListObserver.prototype.refreshTokensForElement = function (element) {
    var previousTokens = this.tokensByElement.getValuesForKey(element);
    var currentTokens = this.readTokensForElement(element);
    var firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(function (_a) {
      var previousToken = _a[0],
          currentToken = _a[1];
      return !tokensAreEqual(previousToken, currentToken);
    });

    if (firstDifferingIndex == -1) {
      return [[], []];
    } else {
      return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
    }
  };

  TokenListObserver.prototype.readTokensForElement = function (element) {
    var attributeName = this.attributeName;
    var tokenString = element.getAttribute(attributeName) || "";
    return parseTokenString(tokenString, element, attributeName);
  };

  return TokenListObserver;
}();



function parseTokenString(tokenString, element, attributeName) {
  return tokenString.trim().split(/\s+/).filter(function (content) {
    return content.length;
  }).map(function (content, index) {
    return {
      element: element,
      attributeName: attributeName,
      content: content,
      index: index
    };
  });
}

function zip(left, right) {
  var length = Math.max(left.length, right.length);
  return Array.from({
    length: length
  }, function (_, index) {
    return [left[index], right[index]];
  });
}

function tokensAreEqual(left, right) {
  return left && right && left.index == right.index && left.content == right.content;
}

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js ***!
  \***********************************************************************************/
/*! exports provided: ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return ValueListObserver; });
/* harmony import */ var _token_list_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js");


var ValueListObserver =
/** @class */
function () {
  function ValueListObserver(element, attributeName, delegate) {
    this.tokenListObserver = new _token_list_observer__WEBPACK_IMPORTED_MODULE_0__["TokenListObserver"](element, attributeName, this);
    this.delegate = delegate;
    this.parseResultsByToken = new WeakMap();
    this.valuesByTokenByElement = new WeakMap();
  }

  Object.defineProperty(ValueListObserver.prototype, "started", {
    get: function get() {
      return this.tokenListObserver.started;
    },
    enumerable: true,
    configurable: true
  });

  ValueListObserver.prototype.start = function () {
    this.tokenListObserver.start();
  };

  ValueListObserver.prototype.stop = function () {
    this.tokenListObserver.stop();
  };

  ValueListObserver.prototype.refresh = function () {
    this.tokenListObserver.refresh();
  };

  Object.defineProperty(ValueListObserver.prototype, "element", {
    get: function get() {
      return this.tokenListObserver.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ValueListObserver.prototype, "attributeName", {
    get: function get() {
      return this.tokenListObserver.attributeName;
    },
    enumerable: true,
    configurable: true
  });

  ValueListObserver.prototype.tokenMatched = function (token) {
    var element = token.element;
    var value = this.fetchParseResultForToken(token).value;

    if (value) {
      this.fetchValuesByTokenForElement(element).set(token, value);
      this.delegate.elementMatchedValue(element, value);
    }
  };

  ValueListObserver.prototype.tokenUnmatched = function (token) {
    var element = token.element;
    var value = this.fetchParseResultForToken(token).value;

    if (value) {
      this.fetchValuesByTokenForElement(element)["delete"](token);
      this.delegate.elementUnmatchedValue(element, value);
    }
  };

  ValueListObserver.prototype.fetchParseResultForToken = function (token) {
    var parseResult = this.parseResultsByToken.get(token);

    if (!parseResult) {
      parseResult = this.parseToken(token);
      this.parseResultsByToken.set(token, parseResult);
    }

    return parseResult;
  };

  ValueListObserver.prototype.fetchValuesByTokenForElement = function (element) {
    var valuesByToken = this.valuesByTokenByElement.get(element);

    if (!valuesByToken) {
      valuesByToken = new Map();
      this.valuesByTokenByElement.set(element, valuesByToken);
    }

    return valuesByToken;
  };

  ValueListObserver.prototype.parseToken = function (token) {
    try {
      var value = this.delegate.parseValueForToken(token);
      return {
        value: value
      };
    } catch (error) {
      return {
        error: error
      };
    }
  };

  return ValueListObserver;
}();



/***/ }),

/***/ "./node_modules/@stimulus/webpack-helpers/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/webpack-helpers/dist/index.js ***!
  \**************************************************************/
/*! exports provided: definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return definitionsFromContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return identifierForContextKey; });
function definitionsFromContext(context) {
    return context.keys()
        .map(function (key) { return definitionForModuleWithContextAndKey(context, key); })
        .filter(function (value) { return value; });
}
function definitionForModuleWithContextAndKey(context, key) {
    var identifier = identifierForContextKey(key);
    if (identifier) {
        return definitionForModuleAndIdentifier(context(key), identifier);
    }
}
function definitionForModuleAndIdentifier(module, identifier) {
    var controllerConstructor = module.default;
    if (typeof controllerConstructor == "function") {
        return { identifier: identifier, controllerConstructor: controllerConstructor };
    }
}
function identifierForContextKey(key) {
    var logicalName = (key.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/) || [])[1];
    if (logicalName) {
        return logicalName.replace(/_/g, "-").replace(/\//g, "--");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxNQUFNLGlDQUFpQyxPQUEwQztJQUMvRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLEVBQUU7U0FDbEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsb0NBQW9DLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFsRCxDQUFrRCxDQUFDO1NBQzlELE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssRUFBTCxDQUFLLENBQWlCLENBQUE7QUFDM0MsQ0FBQztBQUVELDhDQUE4QyxPQUEwQyxFQUFFLEdBQVc7SUFDbkcsSUFBTSxVQUFVLEdBQUcsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDL0MsSUFBSSxVQUFVLEVBQUU7UUFDZCxPQUFPLGdDQUFnQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQTtLQUNsRTtBQUNILENBQUM7QUFFRCwwQ0FBMEMsTUFBd0IsRUFBRSxVQUFrQjtJQUNwRixJQUFNLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUE7SUFDNUMsSUFBSSxPQUFPLHFCQUFxQixJQUFJLFVBQVUsRUFBRTtRQUM5QyxPQUFPLEVBQUUsVUFBVSxZQUFBLEVBQUUscUJBQXFCLHVCQUFBLEVBQUUsQ0FBQTtLQUM3QztBQUNILENBQUM7QUFFRCxNQUFNLGtDQUFrQyxHQUFXO0lBQ2pELElBQU0sV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2xGLElBQUksV0FBVyxFQUFFO1FBQ2YsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO0tBQzNEO0FBQ0gsQ0FBQyJ9

/***/ }),

/***/ "./node_modules/actioncable/lib/assets/compiled/action_cable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/actioncable/lib/assets/compiled/action_cable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var context = this;
  (function () {
    (function () {
      var slice = [].slice;
      this.ActionCable = {
        INTERNAL: {
          "message_types": {
            "welcome": "welcome",
            "ping": "ping",
            "confirmation": "confirm_subscription",
            "rejection": "reject_subscription"
          },
          "default_mount_path": "/cable",
          "protocols": ["actioncable-v1-json", "actioncable-unsupported"]
        },
        WebSocket: window.WebSocket,
        logger: window.console,
        createConsumer: function createConsumer(url) {
          var ref;

          if (url == null) {
            url = (ref = this.getConfig("url")) != null ? ref : this.INTERNAL.default_mount_path;
          }

          return new ActionCable.Consumer(this.createWebSocketURL(url));
        },
        getConfig: function getConfig(name) {
          var element;
          element = document.head.querySelector("meta[name='action-cable-" + name + "']");
          return element != null ? element.getAttribute("content") : void 0;
        },
        createWebSocketURL: function createWebSocketURL(url) {
          var a;

          if (url && !/^wss?:/i.test(url)) {
            a = document.createElement("a");
            a.href = url;
            a.href = a.href;
            a.protocol = a.protocol.replace("http", "ws");
            return a.href;
          } else {
            return url;
          }
        },
        startDebugging: function startDebugging() {
          return this.debugging = true;
        },
        stopDebugging: function stopDebugging() {
          return this.debugging = null;
        },
        log: function log() {
          var messages, ref;
          messages = 1 <= arguments.length ? slice.call(arguments, 0) : [];

          if (this.debugging) {
            messages.push(Date.now());
            return (ref = this.logger).log.apply(ref, ["[ActionCable]"].concat(slice.call(messages)));
          }
        }
      };
    }).call(this);
  }).call(context);
  var ActionCable = context.ActionCable;
  (function () {
    (function () {
      var bind = function bind(fn, me) {
        return function () {
          return fn.apply(me, arguments);
        };
      };

      ActionCable.ConnectionMonitor = function () {
        var clamp, now, secondsSince;
        ConnectionMonitor.pollInterval = {
          min: 3,
          max: 30
        };
        ConnectionMonitor.staleThreshold = 6;

        function ConnectionMonitor(connection) {
          this.connection = connection;
          this.visibilityDidChange = bind(this.visibilityDidChange, this);
          this.reconnectAttempts = 0;
        }

        ConnectionMonitor.prototype.start = function () {
          if (!this.isRunning()) {
            this.startedAt = now();
            delete this.stoppedAt;
            this.startPolling();
            document.addEventListener("visibilitychange", this.visibilityDidChange);
            return ActionCable.log("ConnectionMonitor started. pollInterval = " + this.getPollInterval() + " ms");
          }
        };

        ConnectionMonitor.prototype.stop = function () {
          if (this.isRunning()) {
            this.stoppedAt = now();
            this.stopPolling();
            document.removeEventListener("visibilitychange", this.visibilityDidChange);
            return ActionCable.log("ConnectionMonitor stopped");
          }
        };

        ConnectionMonitor.prototype.isRunning = function () {
          return this.startedAt != null && this.stoppedAt == null;
        };

        ConnectionMonitor.prototype.recordPing = function () {
          return this.pingedAt = now();
        };

        ConnectionMonitor.prototype.recordConnect = function () {
          this.reconnectAttempts = 0;
          this.recordPing();
          delete this.disconnectedAt;
          return ActionCable.log("ConnectionMonitor recorded connect");
        };

        ConnectionMonitor.prototype.recordDisconnect = function () {
          this.disconnectedAt = now();
          return ActionCable.log("ConnectionMonitor recorded disconnect");
        };

        ConnectionMonitor.prototype.startPolling = function () {
          this.stopPolling();
          return this.poll();
        };

        ConnectionMonitor.prototype.stopPolling = function () {
          return clearTimeout(this.pollTimeout);
        };

        ConnectionMonitor.prototype.poll = function () {
          return this.pollTimeout = setTimeout(function (_this) {
            return function () {
              _this.reconnectIfStale();

              return _this.poll();
            };
          }(this), this.getPollInterval());
        };

        ConnectionMonitor.prototype.getPollInterval = function () {
          var interval, max, min, ref;
          ref = this.constructor.pollInterval, min = ref.min, max = ref.max;
          interval = 5 * Math.log(this.reconnectAttempts + 1);
          return Math.round(clamp(interval, min, max) * 1000);
        };

        ConnectionMonitor.prototype.reconnectIfStale = function () {
          if (this.connectionIsStale()) {
            ActionCable.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + this.getPollInterval() + " ms, time disconnected = " + secondsSince(this.disconnectedAt) + " s, stale threshold = " + this.constructor.staleThreshold + " s");
            this.reconnectAttempts++;

            if (this.disconnectedRecently()) {
              return ActionCable.log("ConnectionMonitor skipping reopening recent disconnect");
            } else {
              ActionCable.log("ConnectionMonitor reopening");
              return this.connection.reopen();
            }
          }
        };

        ConnectionMonitor.prototype.connectionIsStale = function () {
          var ref;
          return secondsSince((ref = this.pingedAt) != null ? ref : this.startedAt) > this.constructor.staleThreshold;
        };

        ConnectionMonitor.prototype.disconnectedRecently = function () {
          return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
        };

        ConnectionMonitor.prototype.visibilityDidChange = function () {
          if (document.visibilityState === "visible") {
            return setTimeout(function (_this) {
              return function () {
                if (_this.connectionIsStale() || !_this.connection.isOpen()) {
                  ActionCable.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState);
                  return _this.connection.reopen();
                }
              };
            }(this), 200);
          }
        };

        now = function now() {
          return new Date().getTime();
        };

        secondsSince = function secondsSince(time) {
          return (now() - time) / 1000;
        };

        clamp = function clamp(number, min, max) {
          return Math.max(min, Math.min(max, number));
        };

        return ConnectionMonitor;
      }();
    }).call(this);
    (function () {
      var i,
          message_types,
          protocols,
          ref,
          supportedProtocols,
          unsupportedProtocol,
          slice = [].slice,
          bind = function bind(fn, me) {
        return function () {
          return fn.apply(me, arguments);
        };
      },
          indexOf = [].indexOf || function (item) {
        for (var i = 0, l = this.length; i < l; i++) {
          if (i in this && this[i] === item) return i;
        }

        return -1;
      };

      ref = ActionCable.INTERNAL, message_types = ref.message_types, protocols = ref.protocols;
      supportedProtocols = 2 <= protocols.length ? slice.call(protocols, 0, i = protocols.length - 1) : (i = 0, []), unsupportedProtocol = protocols[i++];

      ActionCable.Connection = function () {
        Connection.reopenDelay = 500;

        function Connection(consumer) {
          this.consumer = consumer;
          this.open = bind(this.open, this);
          this.subscriptions = this.consumer.subscriptions;
          this.monitor = new ActionCable.ConnectionMonitor(this);
          this.disconnected = true;
        }

        Connection.prototype.send = function (data) {
          if (this.isOpen()) {
            this.webSocket.send(JSON.stringify(data));
            return true;
          } else {
            return false;
          }
        };

        Connection.prototype.open = function () {
          if (this.isActive()) {
            ActionCable.log("Attempted to open WebSocket, but existing socket is " + this.getState());
            return false;
          } else {
            ActionCable.log("Opening WebSocket, current state is " + this.getState() + ", subprotocols: " + protocols);

            if (this.webSocket != null) {
              this.uninstallEventHandlers();
            }

            this.webSocket = new ActionCable.WebSocket(this.consumer.url, protocols);
            this.installEventHandlers();
            this.monitor.start();
            return true;
          }
        };

        Connection.prototype.close = function (arg) {
          var allowReconnect, ref1;
          allowReconnect = (arg != null ? arg : {
            allowReconnect: true
          }).allowReconnect;

          if (!allowReconnect) {
            this.monitor.stop();
          }

          if (this.isActive()) {
            return (ref1 = this.webSocket) != null ? ref1.close() : void 0;
          }
        };

        Connection.prototype.reopen = function () {
          var error;
          ActionCable.log("Reopening WebSocket, current state is " + this.getState());

          if (this.isActive()) {
            try {
              return this.close();
            } catch (error1) {
              error = error1;
              return ActionCable.log("Failed to reopen WebSocket", error);
            } finally {
              ActionCable.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms");
              setTimeout(this.open, this.constructor.reopenDelay);
            }
          } else {
            return this.open();
          }
        };

        Connection.prototype.getProtocol = function () {
          var ref1;
          return (ref1 = this.webSocket) != null ? ref1.protocol : void 0;
        };

        Connection.prototype.isOpen = function () {
          return this.isState("open");
        };

        Connection.prototype.isActive = function () {
          return this.isState("open", "connecting");
        };

        Connection.prototype.isProtocolSupported = function () {
          var ref1;
          return ref1 = this.getProtocol(), indexOf.call(supportedProtocols, ref1) >= 0;
        };

        Connection.prototype.isState = function () {
          var ref1, states;
          states = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return ref1 = this.getState(), indexOf.call(states, ref1) >= 0;
        };

        Connection.prototype.getState = function () {
          var ref1, state, value;

          for (state in WebSocket) {
            value = WebSocket[state];

            if (value === ((ref1 = this.webSocket) != null ? ref1.readyState : void 0)) {
              return state.toLowerCase();
            }
          }

          return null;
        };

        Connection.prototype.installEventHandlers = function () {
          var eventName, handler;

          for (eventName in this.events) {
            handler = this.events[eventName].bind(this);
            this.webSocket["on" + eventName] = handler;
          }
        };

        Connection.prototype.uninstallEventHandlers = function () {
          var eventName;

          for (eventName in this.events) {
            this.webSocket["on" + eventName] = function () {};
          }
        };

        Connection.prototype.events = {
          message: function message(event) {
            var identifier, message, ref1, type;

            if (!this.isProtocolSupported()) {
              return;
            }

            ref1 = JSON.parse(event.data), identifier = ref1.identifier, message = ref1.message, type = ref1.type;

            switch (type) {
              case message_types.welcome:
                this.monitor.recordConnect();
                return this.subscriptions.reload();

              case message_types.ping:
                return this.monitor.recordPing();

              case message_types.confirmation:
                return this.subscriptions.notify(identifier, "connected");

              case message_types.rejection:
                return this.subscriptions.reject(identifier);

              default:
                return this.subscriptions.notify(identifier, "received", message);
            }
          },
          open: function open() {
            ActionCable.log("WebSocket onopen event, using '" + this.getProtocol() + "' subprotocol");
            this.disconnected = false;

            if (!this.isProtocolSupported()) {
              ActionCable.log("Protocol is unsupported. Stopping monitor and disconnecting.");
              return this.close({
                allowReconnect: false
              });
            }
          },
          close: function close(event) {
            ActionCable.log("WebSocket onclose event");

            if (this.disconnected) {
              return;
            }

            this.disconnected = true;
            this.monitor.recordDisconnect();
            return this.subscriptions.notifyAll("disconnected", {
              willAttemptReconnect: this.monitor.isRunning()
            });
          },
          error: function error() {
            return ActionCable.log("WebSocket onerror event");
          }
        };
        return Connection;
      }();
    }).call(this);
    (function () {
      var slice = [].slice;

      ActionCable.Subscriptions = function () {
        function Subscriptions(consumer) {
          this.consumer = consumer;
          this.subscriptions = [];
        }

        Subscriptions.prototype.create = function (channelName, mixin) {
          var channel, params, subscription;
          channel = channelName;
          params = _typeof(channel) === "object" ? channel : {
            channel: channel
          };
          subscription = new ActionCable.Subscription(this.consumer, params, mixin);
          return this.add(subscription);
        };

        Subscriptions.prototype.add = function (subscription) {
          this.subscriptions.push(subscription);
          this.consumer.ensureActiveConnection();
          this.notify(subscription, "initialized");
          this.sendCommand(subscription, "subscribe");
          return subscription;
        };

        Subscriptions.prototype.remove = function (subscription) {
          this.forget(subscription);

          if (!this.findAll(subscription.identifier).length) {
            this.sendCommand(subscription, "unsubscribe");
          }

          return subscription;
        };

        Subscriptions.prototype.reject = function (identifier) {
          var i, len, ref, results, subscription;
          ref = this.findAll(identifier);
          results = [];

          for (i = 0, len = ref.length; i < len; i++) {
            subscription = ref[i];
            this.forget(subscription);
            this.notify(subscription, "rejected");
            results.push(subscription);
          }

          return results;
        };

        Subscriptions.prototype.forget = function (subscription) {
          var s;

          this.subscriptions = function () {
            var i, len, ref, results;
            ref = this.subscriptions;
            results = [];

            for (i = 0, len = ref.length; i < len; i++) {
              s = ref[i];

              if (s !== subscription) {
                results.push(s);
              }
            }

            return results;
          }.call(this);

          return subscription;
        };

        Subscriptions.prototype.findAll = function (identifier) {
          var i, len, ref, results, s;
          ref = this.subscriptions;
          results = [];

          for (i = 0, len = ref.length; i < len; i++) {
            s = ref[i];

            if (s.identifier === identifier) {
              results.push(s);
            }
          }

          return results;
        };

        Subscriptions.prototype.reload = function () {
          var i, len, ref, results, subscription;
          ref = this.subscriptions;
          results = [];

          for (i = 0, len = ref.length; i < len; i++) {
            subscription = ref[i];
            results.push(this.sendCommand(subscription, "subscribe"));
          }

          return results;
        };

        Subscriptions.prototype.notifyAll = function () {
          var args, callbackName, i, len, ref, results, subscription;
          callbackName = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          ref = this.subscriptions;
          results = [];

          for (i = 0, len = ref.length; i < len; i++) {
            subscription = ref[i];
            results.push(this.notify.apply(this, [subscription, callbackName].concat(slice.call(args))));
          }

          return results;
        };

        Subscriptions.prototype.notify = function () {
          var args, callbackName, i, len, results, subscription, subscriptions;
          subscription = arguments[0], callbackName = arguments[1], args = 3 <= arguments.length ? slice.call(arguments, 2) : [];

          if (typeof subscription === "string") {
            subscriptions = this.findAll(subscription);
          } else {
            subscriptions = [subscription];
          }

          results = [];

          for (i = 0, len = subscriptions.length; i < len; i++) {
            subscription = subscriptions[i];
            results.push(typeof subscription[callbackName] === "function" ? subscription[callbackName].apply(subscription, args) : void 0);
          }

          return results;
        };

        Subscriptions.prototype.sendCommand = function (subscription, command) {
          var identifier;
          identifier = subscription.identifier;
          return this.consumer.send({
            command: command,
            identifier: identifier
          });
        };

        return Subscriptions;
      }();
    }).call(this);
    (function () {
      ActionCable.Subscription = function () {
        var extend;

        function Subscription(consumer, params, mixin) {
          this.consumer = consumer;

          if (params == null) {
            params = {};
          }

          this.identifier = JSON.stringify(params);
          extend(this, mixin);
        }

        Subscription.prototype.perform = function (action, data) {
          if (data == null) {
            data = {};
          }

          data.action = action;
          return this.send(data);
        };

        Subscription.prototype.send = function (data) {
          return this.consumer.send({
            command: "message",
            identifier: this.identifier,
            data: JSON.stringify(data)
          });
        };

        Subscription.prototype.unsubscribe = function () {
          return this.consumer.subscriptions.remove(this);
        };

        extend = function extend(object, properties) {
          var key, value;

          if (properties != null) {
            for (key in properties) {
              value = properties[key];
              object[key] = value;
            }
          }

          return object;
        };

        return Subscription;
      }();
    }).call(this);
    (function () {
      ActionCable.Consumer = function () {
        function Consumer(url) {
          this.url = url;
          this.subscriptions = new ActionCable.Subscriptions(this);
          this.connection = new ActionCable.Connection(this);
        }

        Consumer.prototype.send = function (data) {
          return this.connection.send(data);
        };

        Consumer.prototype.connect = function () {
          return this.connection.open();
        };

        Consumer.prototype.disconnect = function () {
          return this.connection.close({
            allowReconnect: false
          });
        };

        Consumer.prototype.ensureActiveConnection = function () {
          if (!this.connection.isActive()) {
            return this.connection.open();
          }
        };

        return Consumer;
      }();
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = ActionCable;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (ActionCable),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/cable_ready/cable_ready.js":
/*!*************************************************!*\
  !*** ./node_modules/cable_ready/cable_ready.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var morphdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morphdom */ "./node_modules/morphdom/dist/morphdom-esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var dispatch = function dispatch(element, name) {
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var init = {
    bubbles: true,
    cancelable: true
  };
  var evt = new Event(name, init);
  evt.detail = detail;
  element.dispatchEvent(evt);
};

var xpathToElement = function xpathToElement(xpath) {
  return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}; // SEE: https://github.com/patrick-steele-idem/morphdom#morphdomfromnode-tonode-options--node


var shouldMorph = function shouldMorph(permanentAttributeName) {
  return function (fromEl, toEl) {
    // Skip nodes that are equal:
    // https://github.com/patrick-steele-idem/morphdom#can-i-make-morphdom-blaze-through-the-dom-tree-even-faster-yes
    if (fromEl.isEqualNode(toEl)) return false;
    if (permanentAttributeName && fromEl.closest("[".concat(permanentAttributeName, "]"))) return false;
    return true;
  };
}; // Morphdom Callbacks ........................................................................................


var DOMOperations = {
  // DOM Events ..............................................................................................
  dispatchEvent: function dispatchEvent(config) {
    var element = config.element,
        name = config.name,
        detail = config.detail;
    dispatch(element, name, detail);
  },
  // Element Mutations .......................................................................................
  morph: function morph(detail) {
    var element = detail.element,
        html = detail.html,
        childrenOnly = detail.childrenOnly,
        focusSelector = detail.focusSelector,
        permanentAttributeName = detail.permanentAttributeName;
    var template = document.createElement('template');
    template.innerHTML = String(html).trim();
    dispatch(element, 'cable-ready:before-morph', _objectSpread({}, detail, {
      content: template.content
    }));
    Object(morphdom__WEBPACK_IMPORTED_MODULE_0__["default"])(element, template.content, {
      childrenOnly: !!childrenOnly,
      onBeforeElUpdated: shouldMorph(permanentAttributeName)
    });
    if (focusSelector) document.querySelector(focusSelector).focus();
    dispatch(element, 'cable-ready:after-morph', _objectSpread({}, detail, {
      content: template.content
    }));
  },
  innerHtml: function innerHtml(detail) {
    var element = detail.element,
        html = detail.html,
        focusSelector = detail.focusSelector;
    dispatch(element, 'cable-ready:before-inner-html', detail);
    element.innerHTML = html;
    if (focusSelector) document.querySelector(focusSelector).focus();
    dispatch(element, 'cable-ready:after-inner-html', detail);
  },
  outerHtml: function outerHtml(detail) {
    var element = detail.element,
        html = detail.html,
        focusSelector = detail.focusSelector;
    dispatch(element, 'cable-ready:before-outer-html', detail);
    element.outerHTML = html;
    if (focusSelector) document.querySelector(focusSelector).focus();
    dispatch(element, 'cable-ready:after-outer-html', detail);
  },
  textContent: function textContent(detail) {
    var element = detail.element,
        text = detail.text;
    dispatch(element, 'cable-ready:before-text-content', detail);
    element.textContent = text;
    dispatch(element, 'cable-ready:after-text-content', detail);
  },
  insertAdjacentHtml: function insertAdjacentHtml(detail) {
    var element = detail.element,
        html = detail.html,
        position = detail.position,
        focusSelector = detail.focusSelector;
    dispatch(element, 'cable-ready:before-insert-adjacent-html', detail);
    element.insertAdjacentHTML(position || 'beforeend', html);
    if (focusSelector) document.querySelector(focusSelector).focus();
    dispatch(element, 'cable-ready:after-insert-adjacent-html', detail);
  },
  insertAdjacentText: function insertAdjacentText(detail) {
    var element = detail.element,
        text = detail.text,
        position = detail.position;
    dispatch(element, 'cable-ready:before-insert-adjacent-text', detail);
    element.insertAdjacentText(position || 'beforeend', text);
    dispatch(element, 'cable-ready:after-insert-adjacent-text', detail);
  },
  remove: function remove(detail) {
    var element = detail.element,
        focusSelector = detail.focusSelector;
    dispatch(element, 'cable-ready:before-remove', detail);
    element.remove();
    if (focusSelector) document.querySelector(focusSelector).focus();
    dispatch(element, 'cable-ready:after-remove', detail);
  },
  setValue: function setValue(detail) {
    var element = detail.element,
        value = detail.value;
    dispatch(element, 'cable-ready:before-set-value', detail);
    element.value = value;
    dispatch(element, 'cable-ready:after-set-value', detail);
  },
  // Attribute Mutations .....................................................................................
  setAttribute: function setAttribute(detail) {
    var element = detail.element,
        name = detail.name,
        value = detail.value;
    dispatch(element, 'cable-ready:before-set-attribute', detail);
    element.setAttribute(name, value);
    dispatch(element, 'cable-ready:after-set-attribute', detail);
  },
  removeAttribute: function removeAttribute(detail) {
    var element = detail.element,
        name = detail.name;
    dispatch(element, 'cable-ready:before-remove-attribute', detail);
    element.removeAttribute(name);
    dispatch(element, 'cable-ready:after-remove-attribute', detail);
  },
  // CSS Class Mutations .....................................................................................
  addCssClass: function addCssClass(detail) {
    var element = detail.element,
        name = detail.name;
    dispatch(element, 'cable-ready:before-add-css-class', detail);
    element.classList.add(name);
    dispatch(element, 'cable-ready:after-add-css-class', detail);
  },
  removeCssClass: function removeCssClass(detail) {
    var element = detail.element,
        name = detail.name;
    dispatch(element, 'cable-ready:before-remove-css-class', detail);
    element.classList.remove(name);
    dispatch(element, 'cable-ready:after-remove-css-class', detail);
  },
  // Dataset Mutations .......................................................................................
  setDatasetProperty: function setDatasetProperty(detail) {
    var element = detail.element,
        name = detail.name,
        value = detail.value;
    dispatch(element, 'cable-ready:before-set-dataset-property', detail);
    element.dataset[name] = value;
    dispatch(element, 'cable-ready:after-set-dataset-property', detail);
  }
};

var perform = function perform(operations) {
  for (var name in operations) {
    if (operations.hasOwnProperty(name)) {
      var entries = operations[name];

      for (var i = 0; i < entries.length; i++) {
        try {
          var detail = entries[i];

          if (detail.selector) {
            detail.element = detail.xpath ? xpathToElement(detail.selector) : document.querySelector(detail.selector);
          } else {
            detail.element = document;
          }

          DOMOperations[name](detail);
        } catch (e) {
          console.log("CableReady detected an error in ".concat(name, "! ").concat(e.message));
        }
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  perform: perform
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./app/javascript/stylesheets/application.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./app/javascript/stylesheets/application.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "body.wait, body.wait * {\n  cursor: wait !important; }\n", "",{"version":3,"sources":["/Users/mauro/stigma/tracker/services/stimulus_reflex_todomvc/app/javascript/stylesheets/application.scss"],"names":[],"mappings":"AAAA;EACE,uBAAuB,EAAA","file":"application.scss","sourcesContent":["body.wait, body.wait * {\n  cursor: wait !important;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/todomvc-app-css/index.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/todomvc-app-css/index.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #111111;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n\n:focus {\n\toutline: 0;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -140px;\n\twidth: 100%;\n\tfont-size: 80px;\n\tfont-weight: 200;\n\ttext-align: center;\n\tcolor: #b83f45;\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.toggle-all {\n\twidth: 1px;\n\theight: 1px;\n\tborder: none; /* Mobile Safari */\n\topacity: 0;\n\tposition: absolute;\n\tright: 100%;\n\tbottom: 100%;\n}\n\n.toggle-all + label {\n\twidth: 60px;\n\theight: 34px;\n\tfont-size: 0;\n\tposition: absolute;\n\ttop: -52px;\n\tleft: -13px;\n\ttransform: rotate(90deg);\n}\n\n.toggle-all + label:before {\n\tcontent: '❯';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked + label:before {\n\tcolor: #737373;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: calc(100% - 43px);\n\tpadding: 12px 16px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n}\n\n.todo-list li .toggle {\n\topacity: 0;\n}\n\n.todo-list li .toggle + label {\n\t/*\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n\t*/\n\tbackground-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');\n\tbackground-repeat: no-repeat;\n\tbackground-position: center left;\n}\n\n.todo-list li .toggle:checked + label {\n\tbackground-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');\n}\n\n.todo-list li label {\n\tword-break: break-all;\n\tpadding: 15px 15px 15px 60px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n\tfont-weight: 400;\n\tcolor: #4d4d4d;\n}\n\n.todo-list li.completed label {\n\tcolor: #cdcdcd;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '×';\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tfont-size: 15px;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #4d4d4d;\n\tfont-size: 11px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n", "",{"version":3,"sources":["index.css"],"names":[],"mappings":"AAAA;;CAEC,SAAS;CACT,UAAU;AACX;;AAEA;CACC,SAAS;CACT,UAAU;CACV,SAAS;CACT,gBAAgB;CAChB,eAAe;CACf,wBAAwB;CACxB,oBAAoB;CACpB,oBAAoB;CACpB,cAAc;CACd,wBAAwB;CACxB,qBAAgB;MAAhB,gBAAgB;CAChB,mCAAmC;CACnC,kCAAkC;AACnC;;AAEA;CACC,yDAAyD;CACzD,kBAAkB;CAClB,mBAAmB;CACnB,cAAc;CACd,gBAAgB;CAChB,gBAAgB;CAChB,cAAc;CACd,mCAAmC;CACnC,kCAAkC;CAClC,gBAAgB;AACjB;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,gBAAgB;CAChB,sBAAsB;CACtB,kBAAkB;CAClB;6CAC4C;AAC7C;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,yBAAyB;AAC1B;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,yBAAyB;AAC1B;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,yBAAyB;AAC1B;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,WAAW;CACX,eAAe;CACf,gBAAgB;CAChB,kBAAkB;CAClB,cAAc;CACd,0CAA0C;CAC1C,uCAAuC;CACvC,kCAAkC;AACnC;;AAEA;;CAEC,kBAAkB;CAClB,SAAS;CACT,WAAW;CACX,eAAe;CACf,oBAAoB;CACpB,oBAAoB;CACpB,kBAAkB;CAClB,cAAc;CACd,YAAY;CACZ,sBAAsB;CACtB,iDAAiD;CACjD,sBAAsB;CACtB,mCAAmC;CACnC,kCAAkC;AACnC;;AAEA;CACC,4BAA4B;CAC5B,YAAY;CACZ,gCAAgC;CAChC,6CAA6C;AAC9C;;AAEA;CACC,kBAAkB;CAClB,UAAU;CACV,6BAA6B;AAC9B;;AAEA;CACC,UAAU;CACV,WAAW;CACX,YAAY,EAAE,kBAAkB;CAChC,UAAU;CACV,kBAAkB;CAClB,WAAW;CACX,YAAY;AACb;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,YAAY;CACZ,kBAAkB;CAClB,UAAU;CACV,WAAW;CAEX,wBAAwB;AACzB;;AAEA;CACC,YAAY;CACZ,eAAe;CACf,cAAc;CACd,4BAA4B;AAC7B;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,SAAS;CACT,UAAU;CACV,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,eAAe;CACf,gCAAgC;AACjC;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;CACnB,UAAU;AACX;;AAEA;CACC,cAAc;CACd,wBAAwB;CACxB,kBAAkB;CAClB,kBAAkB;AACnB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,kEAAkE;CAClE,YAAY;CACZ,kBAAkB;CAClB,MAAM;CACN,SAAS;CACT,cAAc;CACd,YAAY,EAAE,kBAAkB;CAChC,wBAAwB;CACxB,qBAAgB;MAAhB,gBAAgB;AACjB;;AAEA;CACC,UAAU;AACX;;AAEA;CACC;;;EAGC;CACD,oUAAoU;CACpU,4BAA4B;CAC5B,gCAAgC;AACjC;;AAEA;CACC,yaAAya;AAC1a;;AAEA;CACC,qBAAqB;CACrB,4BAA4B;CAC5B,cAAc;CACd,gBAAgB;CAChB,sBAAsB;CACtB,gBAAgB;CAChB,cAAc;AACf;;AAEA;CACC,cAAc;CACd,6BAA6B;AAC9B;;AAEA;CACC,aAAa;CACb,kBAAkB;CAClB,MAAM;CACN,WAAW;CACX,SAAS;CACT,WAAW;CACX,YAAY;CACZ,cAAc;CACd,eAAe;CACf,cAAc;CACd,mBAAmB;CACnB,+BAA+B;AAChC;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,kBAAkB;CAClB,eAAe;CACf,6BAA6B;AAC9B;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,QAAQ;CACR,SAAS;CACT,OAAO;CACP,YAAY;CACZ,gBAAgB;CAChB;;;;+CAI8C;AAC/C;;AAEA;CACC,WAAW;CACX,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,SAAS;CACT,UAAU;CACV,gBAAgB;CAChB,kBAAkB;CAClB,QAAQ;CACR,OAAO;AACR;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,cAAc;CACd,WAAW;CACX,gBAAgB;CAChB,qBAAqB;CACrB,6BAA6B;CAC7B,kBAAkB;AACnB;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,oCAAoC;AACrC;;AAEA;;CAEC,YAAY;CACZ,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,eAAe;AAChB;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,mBAAmB;CACnB,cAAc;CACd,eAAe;CACf,6CAA6C;CAC7C,kBAAkB;AACnB;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;CACd,qBAAqB;CACrB,gBAAgB;AACjB;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;;;CAGC;;AACD;CACC;;EAEC,gBAAgB;CACjB;;CAEA;EACC,YAAY;CACb;AACD;;AAEA;CACC;EACC,YAAY;CACb;;CAEA;EACC,YAAY;CACb;AACD","file":"index.css","sourcesContent":["html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\tappearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #111111;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n\n:focus {\n\toutline: 0;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -140px;\n\twidth: 100%;\n\tfont-size: 80px;\n\tfont-weight: 200;\n\ttext-align: center;\n\tcolor: #b83f45;\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.toggle-all {\n\twidth: 1px;\n\theight: 1px;\n\tborder: none; /* Mobile Safari */\n\topacity: 0;\n\tposition: absolute;\n\tright: 100%;\n\tbottom: 100%;\n}\n\n.toggle-all + label {\n\twidth: 60px;\n\theight: 34px;\n\tfont-size: 0;\n\tposition: absolute;\n\ttop: -52px;\n\tleft: -13px;\n\t-webkit-transform: rotate(90deg);\n\ttransform: rotate(90deg);\n}\n\n.toggle-all + label:before {\n\tcontent: '❯';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked + label:before {\n\tcolor: #737373;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: calc(100% - 43px);\n\tpadding: 12px 16px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\tappearance: none;\n}\n\n.todo-list li .toggle {\n\topacity: 0;\n}\n\n.todo-list li .toggle + label {\n\t/*\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n\t*/\n\tbackground-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');\n\tbackground-repeat: no-repeat;\n\tbackground-position: center left;\n}\n\n.todo-list li .toggle:checked + label {\n\tbackground-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');\n}\n\n.todo-list li label {\n\tword-break: break-all;\n\tpadding: 15px 15px 15px 60px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n\tfont-weight: 400;\n\tcolor: #4d4d4d;\n}\n\n.todo-list li.completed label {\n\tcolor: #cdcdcd;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '×';\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tfont-size: 15px;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #4d4d4d;\n\tfont-size: 11px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/todomvc-common/base.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/todomvc-common/base.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "hr {\n\tmargin: 20px 0;\n\tborder: 0;\n\tborder-top: 1px dashed #c5c5c5;\n\tborder-bottom: 1px dashed #f7f7f7;\n}\n\n.learn a {\n\tfont-weight: normal;\n\ttext-decoration: none;\n\tcolor: #b83f45;\n}\n\n.learn a:hover {\n\ttext-decoration: underline;\n\tcolor: #787e7e;\n}\n\n.learn h3,\n.learn h4,\n.learn h5 {\n\tmargin: 10px 0;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tcolor: #000;\n}\n\n.learn h3 {\n\tfont-size: 24px;\n}\n\n.learn h4 {\n\tfont-size: 18px;\n}\n\n.learn h5 {\n\tmargin-bottom: 0;\n\tfont-size: 14px;\n}\n\n.learn ul {\n\tpadding: 0;\n\tmargin: 0 0 30px 25px;\n}\n\n.learn li {\n\tline-height: 20px;\n}\n\n.learn p {\n\tfont-size: 15px;\n\tfont-weight: 300;\n\tline-height: 1.3;\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n\n#issue-count {\n\tdisplay: none;\n}\n\n.quote {\n\tborder: none;\n\tmargin: 20px 0 60px 0;\n}\n\n.quote p {\n\tfont-style: italic;\n}\n\n.quote p:before {\n\tcontent: '“';\n\tfont-size: 50px;\n\topacity: .15;\n\tposition: absolute;\n\ttop: -20px;\n\tleft: 3px;\n}\n\n.quote p:after {\n\tcontent: '”';\n\tfont-size: 50px;\n\topacity: .15;\n\tposition: absolute;\n\tbottom: -42px;\n\tright: 3px;\n}\n\n.quote footer {\n\tposition: absolute;\n\tbottom: -40px;\n\tright: 0;\n}\n\n.quote footer img {\n\tborder-radius: 3px;\n}\n\n.quote footer a {\n\tmargin-left: 5px;\n\tvertical-align: middle;\n}\n\n.speech-bubble {\n\tposition: relative;\n\tpadding: 10px;\n\tbackground: rgba(0, 0, 0, .04);\n\tborder-radius: 5px;\n}\n\n.speech-bubble:after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 100%;\n\tright: 30px;\n\tborder: 13px solid transparent;\n\tborder-top-color: rgba(0, 0, 0, .04);\n}\n\n.learn-bar > .learn {\n\tposition: absolute;\n\twidth: 272px;\n\ttop: 8px;\n\tleft: -300px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: rgba(255, 255, 255, .6);\n\ttransition-property: left;\n\ttransition-duration: 500ms;\n}\n\n@media (min-width: 899px) {\n\t.learn-bar {\n\t\twidth: auto;\n\t\tpadding-left: 300px;\n\t}\n\n\t.learn-bar > .learn {\n\t\tleft: 8px;\n\t}\n}\n", "",{"version":3,"sources":["base.css"],"names":[],"mappings":"AAAA;CACC,cAAc;CACd,SAAS;CACT,8BAA8B;CAC9B,iCAAiC;AAClC;;AAEA;CACC,mBAAmB;CACnB,qBAAqB;CACrB,cAAc;AACf;;AAEA;CACC,0BAA0B;CAC1B,cAAc;AACf;;AAEA;;;CAGC,cAAc;CACd,gBAAgB;CAChB,gBAAgB;CAChB,WAAW;AACZ;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,UAAU;CACV,qBAAqB;AACtB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,aAAa;CACb,gBAAgB;AACjB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,qBAAqB;AACtB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,eAAe;CACf,YAAY;CACZ,kBAAkB;CAClB,UAAU;CACV,SAAS;AACV;;AAEA;CACC,YAAY;CACZ,eAAe;CACf,YAAY;CACZ,kBAAkB;CAClB,aAAa;CACb,UAAU;AACX;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,QAAQ;AACT;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;CAChB,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,8BAA8B;CAC9B,kBAAkB;AACnB;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,SAAS;CACT,WAAW;CACX,8BAA8B;CAC9B,oCAAoC;AACrC;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,QAAQ;CACR,YAAY;CACZ,aAAa;CACb,kBAAkB;CAClB,yCAAyC;CACzC,yBAAyB;CACzB,0BAA0B;AAC3B;;AAEA;CACC;EACC,WAAW;EACX,mBAAmB;CACpB;;CAEA;EACC,SAAS;CACV;AACD","file":"base.css","sourcesContent":["hr {\n\tmargin: 20px 0;\n\tborder: 0;\n\tborder-top: 1px dashed #c5c5c5;\n\tborder-bottom: 1px dashed #f7f7f7;\n}\n\n.learn a {\n\tfont-weight: normal;\n\ttext-decoration: none;\n\tcolor: #b83f45;\n}\n\n.learn a:hover {\n\ttext-decoration: underline;\n\tcolor: #787e7e;\n}\n\n.learn h3,\n.learn h4,\n.learn h5 {\n\tmargin: 10px 0;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tcolor: #000;\n}\n\n.learn h3 {\n\tfont-size: 24px;\n}\n\n.learn h4 {\n\tfont-size: 18px;\n}\n\n.learn h5 {\n\tmargin-bottom: 0;\n\tfont-size: 14px;\n}\n\n.learn ul {\n\tpadding: 0;\n\tmargin: 0 0 30px 25px;\n}\n\n.learn li {\n\tline-height: 20px;\n}\n\n.learn p {\n\tfont-size: 15px;\n\tfont-weight: 300;\n\tline-height: 1.3;\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n\n#issue-count {\n\tdisplay: none;\n}\n\n.quote {\n\tborder: none;\n\tmargin: 20px 0 60px 0;\n}\n\n.quote p {\n\tfont-style: italic;\n}\n\n.quote p:before {\n\tcontent: '“';\n\tfont-size: 50px;\n\topacity: .15;\n\tposition: absolute;\n\ttop: -20px;\n\tleft: 3px;\n}\n\n.quote p:after {\n\tcontent: '”';\n\tfont-size: 50px;\n\topacity: .15;\n\tposition: absolute;\n\tbottom: -42px;\n\tright: 3px;\n}\n\n.quote footer {\n\tposition: absolute;\n\tbottom: -40px;\n\tright: 0;\n}\n\n.quote footer img {\n\tborder-radius: 3px;\n}\n\n.quote footer a {\n\tmargin-left: 5px;\n\tvertical-align: middle;\n}\n\n.speech-bubble {\n\tposition: relative;\n\tpadding: 10px;\n\tbackground: rgba(0, 0, 0, .04);\n\tborder-radius: 5px;\n}\n\n.speech-bubble:after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 100%;\n\tright: 30px;\n\tborder: 13px solid transparent;\n\tborder-top-color: rgba(0, 0, 0, .04);\n}\n\n.learn-bar > .learn {\n\tposition: absolute;\n\twidth: 272px;\n\ttop: 8px;\n\tleft: -300px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: rgba(255, 255, 255, .6);\n\ttransition-property: left;\n\ttransition-duration: 500ms;\n}\n\n@media (min-width: 899px) {\n\t.learn-bar {\n\t\twidth: auto;\n\t\tpadding-left: 300px;\n\t}\n\n\t.learn-bar > .learn {\n\t\tleft: 8px;\n\t}\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/inflected/dist/esm/inflected.js":
/*!******************************************************!*\
  !*** ./node_modules/inflected/dist/esm/inflected.js ***!
  \******************************************************/
/*! exports provided: pluralize, singularize, camelize, underscore, humanize, titleize, tableize, classify, dasherize, foreignKey, ordinal, ordinalize, transliterate, parameterize, capitalize, inflections, transliterations, constantify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluralize", function() { return pluralize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singularize", function() { return singularize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "underscore", function() { return underscore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanize", function() { return humanize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titleize", function() { return titleize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableize", function() { return tableize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classify", function() { return classify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dasherize", function() { return dasherize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foreignKey", function() { return foreignKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinal", function() { return ordinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinalize", function() { return ordinalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transliterate", function() { return transliterate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parameterize", function() { return parameterize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inflections", function() { return inflections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transliterations", function() { return transliterations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constantify", function() { return constantify; });
var toString = Object.prototype.toString;

function isFunc(obj) {
  return toString.call(obj) === "[object Function]";
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function icPart(str) {
  return str.split("").map(function (c) {
    return "(?:" + c.toUpperCase() + "|" + c.toLowerCase() + ")";
  }).join("");
}

function remove(arr, elem) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === elem) {
      Array.prototype.splice.call(arr, i, 1);
    }
  }
}

function hasProp(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

var instances = {};

var Inflector = function () {
  createClass(Inflector, null, [{
    key: "getInstance",
    value: function getInstance(locale) {
      instances[locale] = instances[locale] || new Inflector();
      return instances[locale];
    }
  }]);

  function Inflector() {
    classCallCheck(this, Inflector);
    this.plurals = [];
    this.singulars = [];
    this.uncountables = [];
    this.humans = [];
    this.acronyms = {};
    this.acronymRegex = /(?=a)b/;
  }

  createClass(Inflector, [{
    key: "acronym",
    value: function acronym(word) {
      this.acronyms[word.toLowerCase()] = word;
      var values = [];

      for (var key in this.acronyms) {
        if (hasProp(this.acronyms, key)) {
          values.push(this.acronyms[key]);
        }
      }

      this.acronymRegex = new RegExp(values.join("|"));
    }
  }, {
    key: "plural",
    value: function plural(rule, replacement) {
      if (typeof rule === "string") {
        remove(this.uncountables, rule);
      }

      remove(this.uncountables, replacement);
      this.plurals.unshift([rule, replacement]);
    }
  }, {
    key: "singular",
    value: function singular(rule, replacement) {
      if (typeof rule === "string") {
        remove(this.uncountables, rule);
      }

      remove(this.uncountables, replacement);
      this.singulars.unshift([rule, replacement]);
    }
  }, {
    key: "irregular",
    value: function irregular(singular, plural) {
      remove(this.uncountables, singular);
      remove(this.uncountables, plural);
      var s0 = singular[0];
      var sRest = singular.substr(1);
      var p0 = plural[0];
      var pRest = plural.substr(1);

      if (s0.toUpperCase() === p0.toUpperCase()) {
        this.plural(new RegExp("(" + s0 + ")" + sRest + "$", "i"), "$1" + pRest);
        this.plural(new RegExp("(" + p0 + ")" + pRest + "$", "i"), "$1" + pRest);
        this.singular(new RegExp("(" + s0 + ")" + sRest + "$", "i"), "$1" + sRest);
        this.singular(new RegExp("(" + p0 + ")" + pRest + "$", "i"), "$1" + sRest);
      } else {
        var sRestIC = icPart(sRest);
        var pRestIC = icPart(pRest);
        this.plural(new RegExp(s0.toUpperCase() + sRestIC + "$"), p0.toUpperCase() + pRest);
        this.plural(new RegExp(s0.toLowerCase() + sRestIC + "$"), p0.toLowerCase() + pRest);
        this.plural(new RegExp(p0.toUpperCase() + pRestIC + "$"), p0.toUpperCase() + pRest);
        this.plural(new RegExp(p0.toLowerCase() + pRestIC + "$"), p0.toLowerCase() + pRest);
        this.singular(new RegExp(s0.toUpperCase() + sRestIC + "$"), s0.toUpperCase() + sRest);
        this.singular(new RegExp(s0.toLowerCase() + sRestIC + "$"), s0.toLowerCase() + sRest);
        this.singular(new RegExp(p0.toUpperCase() + pRestIC + "$"), s0.toUpperCase() + sRest);
        this.singular(new RegExp(p0.toLowerCase() + pRestIC + "$"), s0.toLowerCase() + sRest);
      }
    }
  }, {
    key: "uncountable",
    value: function uncountable() {
      for (var _len = arguments.length, words = Array(_len), _key = 0; _key < _len; _key++) {
        words[_key] = arguments[_key];
      }

      this.uncountables = this.uncountables.concat(words);
    }
  }, {
    key: "human",
    value: function human(rule, replacement) {
      this.humans.unshift([rule, replacement]);
    }
  }, {
    key: "clear",
    value: function clear() {
      var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";

      if (scope === "all") {
        this.plurals = [];
        this.singulars = [];
        this.uncountables = [];
        this.humans = [];
      } else {
        this[scope] = [];
      }
    }
  }]);
  return Inflector;
}();

function en(inflector) {
  inflector.plural(/$/, "s");
  inflector.plural(/s$/i, "s");
  inflector.plural(/^(ax|test)is$/i, "$1es");
  inflector.plural(/(octop|vir)us$/i, "$1i");
  inflector.plural(/(octop|vir)i$/i, "$1i");
  inflector.plural(/(alias|status)$/i, "$1es");
  inflector.plural(/(bu)s$/i, "$1ses");
  inflector.plural(/(buffal|tomat)o$/i, "$1oes");
  inflector.plural(/([ti])um$/i, "$1a");
  inflector.plural(/([ti])a$/i, "$1a");
  inflector.plural(/sis$/i, "ses");
  inflector.plural(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
  inflector.plural(/(hive)$/i, "$1s");
  inflector.plural(/([^aeiouy]|qu)y$/i, "$1ies");
  inflector.plural(/(x|ch|ss|sh)$/i, "$1es");
  inflector.plural(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
  inflector.plural(/^(m|l)ouse$/i, "$1ice");
  inflector.plural(/^(m|l)ice$/i, "$1ice");
  inflector.plural(/^(ox)$/i, "$1en");
  inflector.plural(/^(oxen)$/i, "$1");
  inflector.plural(/(quiz)$/i, "$1zes");
  inflector.singular(/s$/i, "");
  inflector.singular(/(ss)$/i, "$1");
  inflector.singular(/(n)ews$/i, "$1ews");
  inflector.singular(/([ti])a$/i, "$1um");
  inflector.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i, "$1sis");
  inflector.singular(/(^analy)(sis|ses)$/i, "$1sis");
  inflector.singular(/([^f])ves$/i, "$1fe");
  inflector.singular(/(hive)s$/i, "$1");
  inflector.singular(/(tive)s$/i, "$1");
  inflector.singular(/([lr])ves$/i, "$1f");
  inflector.singular(/([^aeiouy]|qu)ies$/i, "$1y");
  inflector.singular(/(s)eries$/i, "$1eries");
  inflector.singular(/(m)ovies$/i, "$1ovie");
  inflector.singular(/(x|ch|ss|sh)es$/i, "$1");
  inflector.singular(/^(m|l)ice$/i, "$1ouse");
  inflector.singular(/(bus)(es)?$/i, "$1");
  inflector.singular(/(o)es$/i, "$1");
  inflector.singular(/(shoe)s$/i, "$1");
  inflector.singular(/(cris|test)(is|es)$/i, "$1is");
  inflector.singular(/^(a)x[ie]s$/i, "$1xis");
  inflector.singular(/(octop|vir)(us|i)$/i, "$1us");
  inflector.singular(/(alias|status)(es)?$/i, "$1");
  inflector.singular(/^(ox)en/i, "$1");
  inflector.singular(/(vert|ind)ices$/i, "$1ex");
  inflector.singular(/(matr)ices$/i, "$1ix");
  inflector.singular(/(quiz)zes$/i, "$1");
  inflector.singular(/(database)s$/i, "$1");
  inflector.irregular("person", "people");
  inflector.irregular("man", "men");
  inflector.irregular("child", "children");
  inflector.irregular("sex", "sexes");
  inflector.irregular("move", "moves");
  inflector.irregular("zombie", "zombies");
  inflector.uncountable("equipment", "information", "rice", "money", "species", "series", "fish", "sheep", "jeans", "police");
}

var defaults$1 = {
  en: en
};

function inflections(locale, fn) {
  if (isFunc(locale)) {
    fn = locale;
    locale = null;
  }

  locale = locale || "en";

  if (fn) {
    fn(Inflector.getInstance(locale));
  } else {
    return Inflector.getInstance(locale);
  }
}

for (var locale in defaults$1) {
  inflections(locale, defaults$1[locale]);
}

function applyInflections(word, rules) {
  var result = "" + word,
      rule,
      regex,
      replacement;

  if (result.length === 0) {
    return result;
  } else {
    var match = result.toLowerCase().match(/\b\w+$/);

    if (match && inflections().uncountables.indexOf(match[0]) > -1) {
      return result;
    } else {
      for (var i = 0, ii = rules.length; i < ii; i++) {
        rule = rules[i];
        regex = rule[0];
        replacement = rule[1];

        if (result.match(regex)) {
          result = result.replace(regex, replacement);
          break;
        }
      }

      return result;
    }
  }
}

function pluralize(word) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";
  return applyInflections(word, inflections(locale).plurals);
}

function singularize(word) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";
  return applyInflections(word, inflections(locale).singulars);
}

function capitalize(str) {
  var result = str === null || str === undefined ? "" : String(str);
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function camelize(term, uppercaseFirstLetter) {
  if (uppercaseFirstLetter === null || uppercaseFirstLetter === undefined) {
    uppercaseFirstLetter = true;
  }

  var result = "" + term;

  if (uppercaseFirstLetter) {
    result = result.replace(/^[a-z\d]*/, function (a) {
      return inflections().acronyms[a] || capitalize(a);
    });
  } else {
    result = result.replace(new RegExp("^(?:" + inflections().acronymRegex.source + "(?=\\b|[A-Z_])|\\w)"), function (a) {
      return a.toLowerCase();
    });
  }

  result = result.replace(/(?:_|(\/))([a-z\d]*)/gi, function (match, a, b, idx, string) {
    a || (a = "");
    return "" + a + (inflections().acronyms[b] || capitalize(b));
  });
  return result;
}

function underscore(camelCasedWord) {
  var result = "" + camelCasedWord;
  result = result.replace(new RegExp("(?:([A-Za-z\\d])|^)(" + inflections().acronymRegex.source + ")(?=\\b|[^a-z])", "g"), function (match, $1, $2) {
    return "" + ($1 || "") + ($1 ? "_" : "") + $2.toLowerCase();
  });
  result = result.replace(/([A-Z\d]+)([A-Z][a-z])/g, "$1_$2");
  result = result.replace(/([a-z\d])([A-Z])/g, "$1_$2");
  result = result.replace(/-/g, "_");
  return result.toLowerCase();
}

function humanize(lowerCaseAndUnderscoredWord, options) {
  var result = "" + lowerCaseAndUnderscoredWord;
  var humans = inflections().humans;
  var human = void 0,
      rule = void 0,
      replacement = void 0;
  options = options || {};

  if (options.capitalize === null || options.capitalize === undefined) {
    options.capitalize = true;
  }

  for (var i = 0, ii = humans.length; i < ii; i++) {
    human = humans[i];
    rule = human[0];
    replacement = human[1];

    if (rule.test && rule.test(result) || result.indexOf(rule) > -1) {
      result = result.replace(rule, replacement);
      break;
    }
  }

  result = result.replace(/_id$/, "");
  result = result.replace(/_/g, " ");
  result = result.replace(/([a-z\d]*)/gi, function (match) {
    return inflections().acronyms[match] || match.toLowerCase();
  });

  if (options.capitalize) {
    result = result.replace(/^\w/, function (match) {
      return match.toUpperCase();
    });
  }

  return result;
}

function titleize(word) {
  return humanize(underscore(word)).replace(/(^|[\s¿/]+)([a-z])/g, function (match, boundary, letter, idx, string) {
    return match.replace(letter, letter.toUpperCase());
  });
}

function tableize(className) {
  return pluralize(underscore(className));
}

function classify(tableName) {
  return camelize(singularize(tableName.replace(/.*\./g, "")));
}

function dasherize(underscoredWord) {
  return underscoredWord.replace(/_/g, "-");
}

function foreignKey(className) {
  var separateWithUnderscore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return "" + underscore(className) + (separateWithUnderscore ? "_id" : "id");
}

function ordinal(number) {
  var absNumber = Math.abs(Number(number));
  var mod100 = absNumber % 100;

  if (mod100 === 11 || mod100 === 12 || mod100 === 13) {
    return "th";
  } else {
    switch (absNumber % 10) {
      case 1:
        return "st";

      case 2:
        return "nd";

      case 3:
        return "rd";

      default:
        return "th";
    }
  }
}

function ordinalize(number) {
  return "" + number + ordinal(number);
} // prettier-ignore


var DEFAULT_APPROXIMATIONS = {
  'À': 'A',
  'Á': 'A',
  'Â': 'A',
  'Ã': 'A',
  'Ä': 'A',
  'Å': 'A',
  'Æ': 'AE',
  'Ç': 'C',
  'È': 'E',
  'É': 'E',
  'Ê': 'E',
  'Ë': 'E',
  'Ì': 'I',
  'Í': 'I',
  'Î': 'I',
  'Ï': 'I',
  'Ð': 'D',
  'Ñ': 'N',
  'Ò': 'O',
  'Ó': 'O',
  'Ô': 'O',
  'Õ': 'O',
  'Ö': 'O',
  '×': 'x',
  'Ø': 'O',
  'Ù': 'U',
  'Ú': 'U',
  'Û': 'U',
  'Ü': 'U',
  'Ý': 'Y',
  'Þ': 'Th',
  'ß': 'ss',
  'à': 'a',
  'á': 'a',
  'â': 'a',
  'ã': 'a',
  'ä': 'a',
  'å': 'a',
  'æ': 'ae',
  'ç': 'c',
  'è': 'e',
  'é': 'e',
  'ê': 'e',
  'ë': 'e',
  'ì': 'i',
  'í': 'i',
  'î': 'i',
  'ï': 'i',
  'ð': 'd',
  'ñ': 'n',
  'ò': 'o',
  'ó': 'o',
  'ô': 'o',
  'õ': 'o',
  'ö': 'o',
  'ø': 'o',
  'ù': 'u',
  'ú': 'u',
  'û': 'u',
  'ü': 'u',
  'ý': 'y',
  'þ': 'th',
  'ÿ': 'y',
  'Ā': 'A',
  'ā': 'a',
  'Ă': 'A',
  'ă': 'a',
  'Ą': 'A',
  'ą': 'a',
  'Ć': 'C',
  'ć': 'c',
  'Ĉ': 'C',
  'ĉ': 'c',
  'Ċ': 'C',
  'ċ': 'c',
  'Č': 'C',
  'č': 'c',
  'Ď': 'D',
  'ď': 'd',
  'Đ': 'D',
  'đ': 'd',
  'Ē': 'E',
  'ē': 'e',
  'Ĕ': 'E',
  'ĕ': 'e',
  'Ė': 'E',
  'ė': 'e',
  'Ę': 'E',
  'ę': 'e',
  'Ě': 'E',
  'ě': 'e',
  'Ĝ': 'G',
  'ĝ': 'g',
  'Ğ': 'G',
  'ğ': 'g',
  'Ġ': 'G',
  'ġ': 'g',
  'Ģ': 'G',
  'ģ': 'g',
  'Ĥ': 'H',
  'ĥ': 'h',
  'Ħ': 'H',
  'ħ': 'h',
  'Ĩ': 'I',
  'ĩ': 'i',
  'Ī': 'I',
  'ī': 'i',
  'Ĭ': 'I',
  'ĭ': 'i',
  'Į': 'I',
  'į': 'i',
  'İ': 'I',
  'ı': 'i',
  'Ĳ': 'IJ',
  'ĳ': 'ij',
  'Ĵ': 'J',
  'ĵ': 'j',
  'Ķ': 'K',
  'ķ': 'k',
  'ĸ': 'k',
  'Ĺ': 'L',
  'ĺ': 'l',
  'Ļ': 'L',
  'ļ': 'l',
  'Ľ': 'L',
  'ľ': 'l',
  'Ŀ': 'L',
  'ŀ': 'l',
  'Ł': 'L',
  'ł': 'l',
  'Ń': 'N',
  'ń': 'n',
  'Ņ': 'N',
  'ņ': 'n',
  'Ň': 'N',
  'ň': 'n',
  'ŉ': '\'n',
  'Ŋ': 'NG',
  'ŋ': 'ng',
  'Ō': 'O',
  'ō': 'o',
  'Ŏ': 'O',
  'ŏ': 'o',
  'Ő': 'O',
  'ő': 'o',
  'Œ': 'OE',
  'œ': 'oe',
  'Ŕ': 'R',
  'ŕ': 'r',
  'Ŗ': 'R',
  'ŗ': 'r',
  'Ř': 'R',
  'ř': 'r',
  'Ś': 'S',
  'ś': 's',
  'Ŝ': 'S',
  'ŝ': 's',
  'Ş': 'S',
  'ş': 's',
  'Š': 'S',
  'š': 's',
  'Ţ': 'T',
  'ţ': 't',
  'Ť': 'T',
  'ť': 't',
  'Ŧ': 'T',
  'ŧ': 't',
  'Ũ': 'U',
  'ũ': 'u',
  'Ū': 'U',
  'ū': 'u',
  'Ŭ': 'U',
  'ŭ': 'u',
  'Ů': 'U',
  'ů': 'u',
  'Ű': 'U',
  'ű': 'u',
  'Ų': 'U',
  'ų': 'u',
  'Ŵ': 'W',
  'ŵ': 'w',
  'Ŷ': 'Y',
  'ŷ': 'y',
  'Ÿ': 'Y',
  'Ź': 'Z',
  'ź': 'z',
  'Ż': 'Z',
  'ż': 'z',
  'Ž': 'Z',
  'ž': 'z',
  'А': 'A',
  'Б': 'B',
  'В': 'V',
  'Г': 'G',
  'Д': 'D',
  'Е': 'E',
  'Ё': 'E',
  'Ж': 'ZH',
  'З': 'Z',
  'И': 'I',
  'Й': 'J',
  'К': 'K',
  'Л': 'L',
  'М': 'M',
  'Н': 'N',
  'О': 'O',
  'П': 'P',
  'Р': 'R',
  'С': 'S',
  'Т': 'T',
  'У': 'U',
  'Ф': 'F',
  'Х': 'KH',
  'Ц': 'C',
  'Ч': 'CH',
  'Ш': 'SH',
  'Щ': 'SHCH',
  'Ъ': '',
  'Ы': 'Y',
  'Ь': '',
  'Э': 'E',
  'Ю': 'YU',
  'Я': 'YA',
  'а': 'a',
  'б': 'b',
  'в': 'v',
  'г': 'g',
  'д': 'd',
  'е': 'e',
  'ё': 'e',
  'ж': 'zh',
  'з': 'z',
  'и': 'i',
  'й': 'j',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 's',
  'т': 't',
  'у': 'u',
  'ф': 'f',
  'х': 'kh',
  'ц': 'c',
  'ч': 'ch',
  'ш': 'sh',
  'щ': 'shch',
  'ъ': '',
  'ы': 'y',
  'ь': '',
  'э': 'e',
  'ю': 'yu',
  'я': 'ya'
};
var DEFAULT_REPLACEMENT_CHAR = "?";
var instances$1 = {};

var Transliterator = function () {
  createClass(Transliterator, null, [{
    key: 'getInstance',
    value: function getInstance(locale) {
      instances$1[locale] = instances$1[locale] || new Transliterator();
      return instances$1[locale];
    }
  }]);

  function Transliterator() {
    classCallCheck(this, Transliterator);
    this.approximations = {};

    for (var _char in DEFAULT_APPROXIMATIONS) {
      this.approximate(_char, DEFAULT_APPROXIMATIONS[_char]);
    }
  }

  createClass(Transliterator, [{
    key: 'approximate',
    value: function approximate(_char2, replacement) {
      this.approximations[_char2] = replacement;
    }
  }, {
    key: 'transliterate',
    value: function transliterate(string, replacement) {
      var _this = this;

      return string.replace(/[^\u0000-\u007f]/g, function (c) {
        return _this.approximations[c] || replacement || DEFAULT_REPLACEMENT_CHAR;
      });
    }
  }]);
  return Transliterator;
}();

function transliterations(locale, fn) {
  if (isFunc(locale)) {
    fn = locale;
    locale = null;
  }

  locale = locale || "en";

  if (fn) {
    fn(Transliterator.getInstance(locale));
  } else {
    return Transliterator.getInstance(locale);
  }
}

function transliterate(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var locale = options.locale || "en";
  var replacement = options.replacement || "?";
  return transliterations(locale).transliterate(string, replacement);
}

function parameterize(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (options.separator === undefined) {
    options.separator = "-";
  }

  if (options.separator === null) {
    options.separator = "";
  } // replace accented chars with their ascii equivalents


  var result = transliterate(string, options);
  result = result.replace(/[^a-z0-9\-_]+/ig, options.separator);

  if (options.separator.length) {
    var separatorRegex = new RegExp(options.separator); // no more than one of the separator in a row

    result = result.replace(new RegExp(separatorRegex.source + "{2,}"), options.separator); // remove leading/trailing separator

    result = result.replace(new RegExp("^" + separatorRegex.source + "|" + separatorRegex.source + "$", "i"), "");
  }

  return result.toLowerCase();
}

function constantify(word) {
  return underscore(word).toUpperCase().replace(/\s+/g, "_");
}



/***/ }),

/***/ "./node_modules/morphdom/dist/morphdom-esm.js":
/*!****************************************************!*\
  !*** ./node_modules/morphdom/dist/morphdom-esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DOCUMENT_FRAGMENT_NODE = 11;

function morphAttrs(fromNode, toNode) {
  var toNodeAttrs = toNode.attributes;
  var attr;
  var attrName;
  var attrNamespaceURI;
  var attrValue;
  var fromValue; // document-fragments dont have attributes so lets not do anything

  if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
    return;
  } // update attributes on original DOM element


  for (var i = 0; i < toNodeAttrs.length; i++) {
    attr = toNodeAttrs[i];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    attrValue = attr.value;

    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);

      if (fromValue !== attrValue) {
        if (attr.prefix === 'xmlns') {
          attrName = attr.name; // It's not allowed to set an attribute with the XMLNS namespace without specifying the `xmlns` prefix
        }

        fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
      }
    } else {
      fromValue = fromNode.getAttribute(attrName);

      if (fromValue !== attrValue) {
        fromNode.setAttribute(attrName, attrValue);
      }
    }
  } // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.


  var fromNodeAttrs = fromNode.attributes;

  for (var d = 0; d < fromNodeAttrs.length; d++) {
    attr = fromNodeAttrs[d];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;

    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;

      if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
        fromNode.removeAttributeNS(attrNamespaceURI, attrName);
      }
    } else {
      if (!toNode.hasAttribute(attrName)) {
        fromNode.removeAttribute(attrName);
      }
    }
  }
}

var range; // Create a range object for efficently rendering strings to elements.

var NS_XHTML = 'http://www.w3.org/1999/xhtml';
var doc = typeof document === 'undefined' ? undefined : document;
var HAS_TEMPLATE_SUPPORT = !!doc && 'content' in doc.createElement('template');
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && 'createContextualFragment' in doc.createRange();

function createFragmentFromTemplate(str) {
  var template = doc.createElement('template');
  template.innerHTML = str;
  return template.content.childNodes[0];
}

function createFragmentFromRange(str) {
  if (!range) {
    range = doc.createRange();
    range.selectNode(doc.body);
  }

  var fragment = range.createContextualFragment(str);
  return fragment.childNodes[0];
}

function createFragmentFromWrap(str) {
  var fragment = doc.createElement('body');
  fragment.innerHTML = str;
  return fragment.childNodes[0];
}
/**
 * This is about the same
 * var html = new DOMParser().parseFromString(str, 'text/html');
 * return html.body.firstChild;
 *
 * @method toElement
 * @param {String} str
 */


function toElement(str) {
  str = str.trim();

  if (HAS_TEMPLATE_SUPPORT) {
    // avoid restrictions on content for things like `<tr><th>Hi</th></tr>` which
    // createContextualFragment doesn't support
    // <template> support not available in IE
    return createFragmentFromTemplate(str);
  } else if (HAS_RANGE_SUPPORT) {
    return createFragmentFromRange(str);
  }

  return createFragmentFromWrap(str);
}
/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */


function compareNodeNames(fromEl, toEl) {
  var fromNodeName = fromEl.nodeName;
  var toNodeName = toEl.nodeName;

  if (fromNodeName === toNodeName) {
    return true;
  }

  if (toEl.actualize && fromNodeName.charCodeAt(0) < 91 &&
  /* from tag name is upper case */
  toNodeName.charCodeAt(0) > 90
  /* target tag name is lower case */
  ) {
      // If the target element is a virtual DOM node then we may need to normalize the tag name
      // before comparing. Normal HTML elements that are in the "http://www.w3.org/1999/xhtml"
      // are converted to upper case
      return fromNodeName === toNodeName.toUpperCase();
    } else {
    return false;
  }
}
/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */


function createElementNS(name, namespaceURI) {
  return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
}
/**
 * Copies the children of one DOM element to another DOM element
 */


function moveChildren(fromEl, toEl) {
  var curChild = fromEl.firstChild;

  while (curChild) {
    var nextChild = curChild.nextSibling;
    toEl.appendChild(curChild);
    curChild = nextChild;
  }

  return toEl;
}

function syncBooleanAttrProp(fromEl, toEl, name) {
  if (fromEl[name] !== toEl[name]) {
    fromEl[name] = toEl[name];

    if (fromEl[name]) {
      fromEl.setAttribute(name, '');
    } else {
      fromEl.removeAttribute(name);
    }
  }
}

var specialElHandlers = {
  OPTION: function OPTION(fromEl, toEl) {
    var parentNode = fromEl.parentNode;

    if (parentNode) {
      var parentName = parentNode.nodeName.toUpperCase();

      if (parentName === 'OPTGROUP') {
        parentNode = parentNode.parentNode;
        parentName = parentNode && parentNode.nodeName.toUpperCase();
      }

      if (parentName === 'SELECT' && !parentNode.hasAttribute('multiple')) {
        if (fromEl.hasAttribute('selected') && !toEl.selected) {
          // Workaround for MS Edge bug where the 'selected' attribute can only be
          // removed if set to a non-empty value:
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
          fromEl.setAttribute('selected', 'selected');
          fromEl.removeAttribute('selected');
        } // We have to reset select element's selectedIndex to -1, otherwise setting
        // fromEl.selected using the syncBooleanAttrProp below has no effect.
        // The correct selectedIndex will be set in the SELECT special handler below.


        parentNode.selectedIndex = -1;
      }
    }

    syncBooleanAttrProp(fromEl, toEl, 'selected');
  },

  /**
   * The "value" attribute is special for the <input> element since it sets
   * the initial value. Changing the "value" attribute without changing the
   * "value" property will have no effect since it is only used to the set the
   * initial value.  Similar for the "checked" attribute, and "disabled".
   */
  INPUT: function INPUT(fromEl, toEl) {
    syncBooleanAttrProp(fromEl, toEl, 'checked');
    syncBooleanAttrProp(fromEl, toEl, 'disabled');

    if (fromEl.value !== toEl.value) {
      fromEl.value = toEl.value;
    }

    if (!toEl.hasAttribute('value')) {
      fromEl.removeAttribute('value');
    }
  },
  TEXTAREA: function TEXTAREA(fromEl, toEl) {
    var newValue = toEl.value;

    if (fromEl.value !== newValue) {
      fromEl.value = newValue;
    }

    var firstChild = fromEl.firstChild;

    if (firstChild) {
      // Needed for IE. Apparently IE sets the placeholder as the
      // node value and vise versa. This ignores an empty update.
      var oldValue = firstChild.nodeValue;

      if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
        return;
      }

      firstChild.nodeValue = newValue;
    }
  },
  SELECT: function SELECT(fromEl, toEl) {
    if (!toEl.hasAttribute('multiple')) {
      var selectedIndex = -1;
      var i = 0; // We have to loop through children of fromEl, not toEl since nodes can be moved
      // from toEl to fromEl directly when morphing.
      // At the time this special handler is invoked, all children have already been morphed
      // and appended to / removed from fromEl, so using fromEl here is safe and correct.

      var curChild = fromEl.firstChild;
      var optgroup;
      var nodeName;

      while (curChild) {
        nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();

        if (nodeName === 'OPTGROUP') {
          optgroup = curChild;
          curChild = optgroup.firstChild;
        } else {
          if (nodeName === 'OPTION') {
            if (curChild.hasAttribute('selected')) {
              selectedIndex = i;
              break;
            }

            i++;
          }

          curChild = curChild.nextSibling;

          if (!curChild && optgroup) {
            curChild = optgroup.nextSibling;
            optgroup = null;
          }
        }
      }

      fromEl.selectedIndex = selectedIndex;
    }
  }
};
var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE$1 = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

function noop() {}

function defaultGetNodeKey(node) {
  return node.id;
}

function morphdomFactory(morphAttrs) {
  return function morphdom(fromNode, toNode, options) {
    if (!options) {
      options = {};
    }

    if (typeof toNode === 'string') {
      if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML') {
        var toNodeHtml = toNode;
        toNode = doc.createElement('html');
        toNode.innerHTML = toNodeHtml;
      } else {
        toNode = toElement(toNode);
      }
    }

    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
    var childrenOnly = options.childrenOnly === true; // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.

    var fromNodesLookup = Object.create(null);
    var keyedRemovalList = [];

    function addKeyedRemoval(key) {
      keyedRemovalList.push(key);
    }

    function walkDiscardedChildNodes(node, skipKeyedNodes) {
      if (node.nodeType === ELEMENT_NODE) {
        var curChild = node.firstChild;

        while (curChild) {
          var key = undefined;

          if (skipKeyedNodes && (key = getNodeKey(curChild))) {
            // If we are skipping keyed nodes then we add the key
            // to a list so that it can be handled at the very end.
            addKeyedRemoval(key);
          } else {
            // Only report the node as discarded if it is not keyed. We do this because
            // at the end we loop through all keyed elements that were unmatched
            // and then discard them in one final pass.
            onNodeDiscarded(curChild);

            if (curChild.firstChild) {
              walkDiscardedChildNodes(curChild, skipKeyedNodes);
            }
          }

          curChild = curChild.nextSibling;
        }
      }
    }
    /**
     * Removes a DOM node out of the original DOM
     *
     * @param  {Node} node The node to remove
     * @param  {Node} parentNode The nodes parent
     * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
     * @return {undefined}
     */


    function removeNode(node, parentNode, skipKeyedNodes) {
      if (onBeforeNodeDiscarded(node) === false) {
        return;
      }

      if (parentNode) {
        parentNode.removeChild(node);
      }

      onNodeDiscarded(node);
      walkDiscardedChildNodes(node, skipKeyedNodes);
    } // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
    // function indexTree(root) {
    //     var treeWalker = document.createTreeWalker(
    //         root,
    //         NodeFilter.SHOW_ELEMENT);
    //
    //     var el;
    //     while((el = treeWalker.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }
    // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
    //
    // function indexTree(node) {
    //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
    //     var el;
    //     while((el = nodeIterator.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }


    function indexTree(node) {
      if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
        var curChild = node.firstChild;

        while (curChild) {
          var key = getNodeKey(curChild);

          if (key) {
            fromNodesLookup[key] = curChild;
          } // Walk recursively


          indexTree(curChild);
          curChild = curChild.nextSibling;
        }
      }
    }

    indexTree(fromNode);

    function handleNodeAdded(el) {
      onNodeAdded(el);
      var curChild = el.firstChild;

      while (curChild) {
        var nextSibling = curChild.nextSibling;
        var key = getNodeKey(curChild);

        if (key) {
          var unmatchedFromEl = fromNodesLookup[key];

          if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
            curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
            morphEl(unmatchedFromEl, curChild);
          }
        }

        handleNodeAdded(curChild);
        curChild = nextSibling;
      }
    }

    function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
      // We have processed all of the "to nodes". If curFromNodeChild is
      // non-null then we still have some from nodes left over that need
      // to be removed
      while (curFromNodeChild) {
        var fromNextSibling = curFromNodeChild.nextSibling;

        if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
          // Since the node is keyed it might be matched up later so we defer
          // the actual removal to later
          addKeyedRemoval(curFromNodeKey);
        } else {
          // NOTE: we skip nested keyed nodes from being removed since there is
          //       still a chance they will be matched up later
          removeNode(curFromNodeChild, fromEl, true
          /* skip keyed nodes */
          );
        }

        curFromNodeChild = fromNextSibling;
      }
    }

    function morphEl(fromEl, toEl, childrenOnly) {
      var toElKey = getNodeKey(toEl);

      if (toElKey) {
        // If an element with an ID is being morphed then it will be in the final
        // DOM so clear it out of the saved elements collection
        delete fromNodesLookup[toElKey];
      }

      if (!childrenOnly) {
        // optional
        if (onBeforeElUpdated(fromEl, toEl) === false) {
          return;
        } // update attributes on original DOM element first


        morphAttrs(fromEl, toEl); // optional

        onElUpdated(fromEl);

        if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
          return;
        }
      }

      if (fromEl.nodeName !== 'TEXTAREA') {
        morphChildren(fromEl, toEl);
      } else {
        specialElHandlers.TEXTAREA(fromEl, toEl);
      }
    }

    function morphChildren(fromEl, toEl) {
      var curToNodeChild = toEl.firstChild;
      var curFromNodeChild = fromEl.firstChild;
      var curToNodeKey;
      var curFromNodeKey;
      var fromNextSibling;
      var toNextSibling;
      var matchingFromEl; // walk the children

      outer: while (curToNodeChild) {
        toNextSibling = curToNodeChild.nextSibling;
        curToNodeKey = getNodeKey(curToNodeChild); // walk the fromNode children all the way through

        while (curFromNodeChild) {
          fromNextSibling = curFromNodeChild.nextSibling;

          if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          }

          curFromNodeKey = getNodeKey(curFromNodeChild);
          var curFromNodeType = curFromNodeChild.nodeType; // this means if the curFromNodeChild doesnt have a match with the curToNodeChild

          var isCompatible = undefined;

          if (curFromNodeType === curToNodeChild.nodeType) {
            if (curFromNodeType === ELEMENT_NODE) {
              // Both nodes being compared are Element nodes
              if (curToNodeKey) {
                // The target node has a key so we want to match it up with the correct element
                // in the original DOM tree
                if (curToNodeKey !== curFromNodeKey) {
                  // The current element in the original DOM tree does not have a matching key so
                  // let's check our lookup to see if there is a matching element in the original
                  // DOM tree
                  if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                    if (fromNextSibling === matchingFromEl) {
                      // Special case for single element removals. To avoid removing the original
                      // DOM node out of the tree (since that can break CSS transitions, etc.),
                      // we will instead discard the current node and wait until the next
                      // iteration to properly match up the keyed target element with its matching
                      // element in the original tree
                      isCompatible = false;
                    } else {
                      // We found a matching keyed element somewhere in the original DOM tree.
                      // Let's move the original DOM node into the current position and morph
                      // it.
                      // NOTE: We use insertBefore instead of replaceChild because we want to go through
                      // the `removeNode()` function for the node that is being discarded so that
                      // all lifecycle hooks are correctly invoked
                      fromEl.insertBefore(matchingFromEl, curFromNodeChild); // fromNextSibling = curFromNodeChild.nextSibling;

                      if (curFromNodeKey) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                      } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true
                        /* skip keyed nodes */
                        );
                      }

                      curFromNodeChild = matchingFromEl;
                    }
                  } else {
                    // The nodes are not compatible since the "to" node has a key and there
                    // is no matching keyed node in the source tree
                    isCompatible = false;
                  }
                }
              } else if (curFromNodeKey) {
                // The original has a key
                isCompatible = false;
              }

              isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);

              if (isCompatible) {
                // We found compatible DOM elements so transform
                // the current "from" node to match the current
                // target DOM node.
                // MORPH
                morphEl(curFromNodeChild, curToNodeChild);
              }
            } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
              // Both nodes being compared are Text or Comment nodes
              isCompatible = true; // Simply update nodeValue on the original node to
              // change the text value

              if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
              }
            }
          }

          if (isCompatible) {
            // Advance both the "to" child and the "from" child since we found a match
            // Nothing else to do as we already recursively called morphChildren above
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          } // No compatible match so remove the old node from the DOM and continue trying to find a
          // match in the original DOM. However, we only do this if the from node is not keyed
          // since it is possible that a keyed node might match up with a node somewhere else in the
          // target tree and we don't want to discard it just yet since it still might find a
          // home in the final DOM tree. After everything is done we will remove any keyed nodes
          // that didn't find a home


          if (curFromNodeKey) {
            // Since the node is keyed it might be matched up later so we defer
            // the actual removal to later
            addKeyedRemoval(curFromNodeKey);
          } else {
            // NOTE: we skip nested keyed nodes from being removed since there is
            //       still a chance they will be matched up later
            removeNode(curFromNodeChild, fromEl, true
            /* skip keyed nodes */
            );
          }

          curFromNodeChild = fromNextSibling;
        } // END: while(curFromNodeChild) {}
        // If we got this far then we did not find a candidate match for
        // our "to node" and we exhausted all of the children "from"
        // nodes. Therefore, we will just append the current "to" node
        // to the end


        if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
          fromEl.appendChild(matchingFromEl); // MORPH

          morphEl(matchingFromEl, curToNodeChild);
        } else {
          var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);

          if (onBeforeNodeAddedResult !== false) {
            if (onBeforeNodeAddedResult) {
              curToNodeChild = onBeforeNodeAddedResult;
            }

            if (curToNodeChild.actualize) {
              curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
            }

            fromEl.appendChild(curToNodeChild);
            handleNodeAdded(curToNodeChild);
          }
        }

        curToNodeChild = toNextSibling;
        curFromNodeChild = fromNextSibling;
      }

      cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
      var specialElHandler = specialElHandlers[fromEl.nodeName];

      if (specialElHandler) {
        specialElHandler(fromEl, toEl);
      }
    } // END: morphChildren(...)


    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;

    if (!childrenOnly) {
      // Handle the case where we are given two DOM nodes that are not
      // compatible (e.g. <div> --> <span> or <div> --> TEXT)
      if (morphedNodeType === ELEMENT_NODE) {
        if (toNodeType === ELEMENT_NODE) {
          if (!compareNodeNames(fromNode, toNode)) {
            onNodeDiscarded(fromNode);
            morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
          }
        } else {
          // Going from an element node to a text node
          morphedNode = toNode;
        }
      } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
        // Text or comment node
        if (toNodeType === morphedNodeType) {
          if (morphedNode.nodeValue !== toNode.nodeValue) {
            morphedNode.nodeValue = toNode.nodeValue;
          }

          return morphedNode;
        } else {
          // Text node to something else
          morphedNode = toNode;
        }
      }
    }

    if (morphedNode === toNode) {
      // The "to node" was not compatible with the "from node" so we had to
      // toss out the "from node" and use the "to node"
      onNodeDiscarded(fromNode);
    } else {
      if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
        return;
      }

      morphEl(morphedNode, toNode, childrenOnly); // We now need to loop over any keyed nodes that might need to be
      // removed. We only do the removal if we know that the keyed node
      // never found a match. When a keyed node is matched up we remove
      // it out of fromNodesLookup and we use fromNodesLookup to determine
      // if a keyed node has been matched up or not

      if (keyedRemovalList) {
        for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
          var elToRemove = fromNodesLookup[keyedRemovalList[i]];

          if (elToRemove) {
            removeNode(elToRemove, elToRemove.parentNode, false);
          }
        }
      }
    }

    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
      if (morphedNode.actualize) {
        morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
      } // If we had to swap out the from node with a new node because the old
      // node was not compatible with the target node then we need to
      // replace the old DOM node in the original DOM tree. This is only
      // possible if the original DOM node was part of a DOM tree which
      // we know is the case if it has a parent node.


      fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }

    return morphedNode;
  };
}

var morphdom = morphdomFactory(morphAttrs);
/* harmony default export */ __webpack_exports__["default"] = (morphdom);

/***/ }),

/***/ "./node_modules/stimulus/index.js":
/*!****************************************!*\
  !*** ./node_modules/stimulus/index.js ***!
  \****************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stimulus_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/core */ "./node_modules/@stimulus/core/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["defaultSchema"]; });



/***/ }),

/***/ "./node_modules/stimulus/webpack-helpers.js":
/*!**************************************************!*\
  !*** ./node_modules/stimulus/webpack-helpers.js ***!
  \**************************************************/
/*! exports provided: definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/webpack-helpers */ "./node_modules/@stimulus/webpack-helpers/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["definitionsFromContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["identifierForContextKey"]; });




/***/ }),

/***/ "./node_modules/stimulus_reflex/attributes.js":
/*!****************************************************!*\
  !*** ./node_modules/stimulus_reflex/attributes.js ***!
  \****************************************************/
/*! exports provided: attributeValue, attributeValues, extractElementAttributes, findElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeValue", function() { return attributeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeValues", function() { return attributeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractElementAttributes", function() { return extractElementAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findElement", function() { return findElement; });
// Returns a string value for the passed array.
//
//   attributeValue(['', 'one', null, 'two', 'three ']) // 'one two three'
//
var attributeValue = function attributeValue() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = values.filter(function (v) {
    return v && String(v).length;
  }).map(function (v) {
    return v.trim();
  }).join(' ').trim();
  return value.length ? value : null;
}; // Returns an array for the passed string value by splitting on whitespace.
//
//   attributeValues('one two three ') // ['one', 'two', 'three']
//

var attributeValues = function attributeValues(value) {
  if (!value) return [];
  if (!value.length) return [];
  return value.split(' ').filter(function (v) {
    return v.trim().length;
  });
}; // Extracts attributes from a DOM element.
//

var extractElementAttributes = function extractElementAttributes(element) {
  var attrs = Array.prototype.slice.call(element.attributes).reduce(function (memo, attr) {
    memo[attr.name] = attr.value;
    return memo;
  }, {});
  attrs.value = element.value;
  attrs.checked = !!element.checked;
  attrs.selected = !!element.selected;

  if (element.tagName.match(/select/i)) {
    if (element.multiple) {
      var checkedOptions = Array.prototype.slice.call(element.querySelectorAll('option:checked'));
      attrs.values = checkedOptions.map(function (o) {
        return o.value;
      });
    } else if (element.selectedIndex > -1) {
      attrs.value = element.options[element.selectedIndex].value;
    }
  }

  return attrs;
}; // Finds an element based on the passed represention the DOM element's attributes.
//
// NOTE: This is the same set of attributes extrated via extractElementAttributes and forwarded to the server side reflex.
// SEE: stimulute()
// SEE: StimulusReflex::Channel#broadcast_morph
// SEE: StimulusReflex::Channel#broadcast_error
//

var findElement = function findElement(attributes) {
  attributes = attributes || {};
  var elements = [];

  if (attributes.id) {
    elements = document.querySelectorAll("#".concat(attributes.id));
  } else {
    var selectors = [];

    for (var key in attributes) {
      if (key.includes('.')) continue;
      if (key === 'value') continue;
      if (key === 'checked') continue;
      if (key === 'selected') continue;
      if (!Object.prototype.hasOwnProperty.call(attributes, key)) continue;
      selectors.push("[".concat(key, "=\"").concat(attributes[key], "\"]"));
    }

    try {
      elements = document.querySelectorAll(selectors.join(''));
    } catch (error) {
      console.log('StimulusReflex encountered an error identifying the Stimulus element. Consider adding an #id to the element.', error, attributes);
    }
  }

  var element = elements.length === 1 ? elements[0] : null;
  return element;
};

/***/ }),

/***/ "./node_modules/stimulus_reflex/controllers.js":
/*!*****************************************************!*\
  !*** ./node_modules/stimulus_reflex/controllers.js ***!
  \*****************************************************/
/*! exports provided: matchingControllerName, findReflexController, localReflexControllers, allReflexControllers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchingControllerName", function() { return matchingControllerName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findReflexController", function() { return findReflexController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localReflexControllers", function() { return localReflexControllers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allReflexControllers", function() { return allReflexControllers; });
/* harmony import */ var inflected__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inflected */ "./node_modules/inflected/dist/esm/inflected.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./node_modules/stimulus_reflex/attributes.js");

 // Returns the expected matching controller name for the passed reflex.
//
//   matchingControllerName('ExampleReflex#do_stuff') // 'example'
//

var matchingControllerName = function matchingControllerName(reflex) {
  return Object(inflected__WEBPACK_IMPORTED_MODULE_0__["dasherize"])(Object(inflected__WEBPACK_IMPORTED_MODULE_0__["underscore"])(reflex.split('#')[0].replace(/Reflex$/, '')));
}; // Finds the registered StimulusReflex controller for the passed element that matches the reflex.
// Traverses DOM ancestors starting with element until a match is found.
//

var findReflexController = function findReflexController(application, element, reflex) {
  var name = matchingControllerName(reflex);
  var controller;

  while (element && !controller) {
    var controllers = Object(_attributes__WEBPACK_IMPORTED_MODULE_1__["attributeValues"])(element.dataset.controller);

    if (controllers.includes(name)) {
      var candidate = application.getControllerForElementAndIdentifier(element, name);
      if (candidate && candidate.StimulusReflex) controller = candidate;
    }

    element = element.parentElement;
  }

  return controller;
}; // Returns StimulsReflex controllers local to the passed element based on the data-controller attribute.
//

var localReflexControllers = function localReflexControllers(application, element) {
  return Object(_attributes__WEBPACK_IMPORTED_MODULE_1__["attributeValues"])(element.dataset.controller).reduce(function (memo, name) {
    var controller = application.getControllerForElementAndIdentifier(element, name);
    if (controller && controller.StimulusReflex) memo.push(controller);
    return memo;
  }, []);
}; // Returns all StimulsReflex controllers for the passed element.
// Traverses DOM ancestors starting with element.
//

var allReflexControllers = function allReflexControllers(application, element) {
  var controllers = [];

  while (element) {
    controllers = controllers.concat(localReflexControllers(application, element));
    element = element.parentElement;
  }

  return controllers;
};

/***/ }),

/***/ "./node_modules/stimulus_reflex/stimulus_reflex.js":
/*!*********************************************************!*\
  !*** ./node_modules/stimulus_reflex/stimulus_reflex.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var actioncable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! actioncable */ "./node_modules/actioncable/lib/assets/compiled/action_cable.js");
/* harmony import */ var actioncable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(actioncable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inflected__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inflected */ "./node_modules/inflected/dist/esm/inflected.js");
/* harmony import */ var cable_ready__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cable_ready */ "./node_modules/cable_ready/cable_ready.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./node_modules/stimulus_reflex/attributes.js");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers */ "./node_modules/stimulus_reflex/controllers.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






 // A reference to the Stimulus application registered with: StimulusReflex.initialize
//

var application; // Invokes a lifecycle method on a StimulusReflex controller.
//
// - before
// - success
// - error
// - after
//

var invokeLifecycleMethod = function invokeLifecycleMethod(stage, reflex, element) {
  if (!element) return; // traverse the DOM for a matching reflex controller

  var reflexController = Object(_controllers__WEBPACK_IMPORTED_MODULE_5__["findReflexController"])(application, element, reflex); // find reflex controllers wired on this element

  var controllers = new Set(Object(_controllers__WEBPACK_IMPORTED_MODULE_5__["localReflexControllers"])(application, element));
  if (reflexController) controllers.add(reflexController);
  if (controllers.length === 0) return;
  controllers.forEach(function (controller) {
    var reflexMethodName = reflex.split('#')[1];
    var specificLifecycleMethodName = ['before', 'after'].includes(stage) ? "".concat(stage).concat(Object(inflected__WEBPACK_IMPORTED_MODULE_2__["camelize"])(reflexMethodName)) : "".concat(Object(inflected__WEBPACK_IMPORTED_MODULE_2__["camelize"])(reflexMethodName, false)).concat(Object(inflected__WEBPACK_IMPORTED_MODULE_2__["camelize"])(stage));
    var specificLifecycleMethod = controller[specificLifecycleMethodName];
    var genericLifecycleMethodName = ['before', 'after'].includes(stage) ? "".concat(stage, "Reflex") : "reflex".concat(Object(inflected__WEBPACK_IMPORTED_MODULE_2__["camelize"])(stage));
    var genericLifecycleMethod = controller[genericLifecycleMethodName];

    if (typeof specificLifecycleMethod === 'function') {
      setTimeout(function () {
        return specificLifecycleMethod.call(controller, element, reflex, element.reflexError);
      }, 1);
    }

    if (typeof genericLifecycleMethod === 'function') {
      setTimeout(function () {
        return genericLifecycleMethod.call(controller, element, reflex, element.reflexError);
      }, 1);
    }
  });
}; // Subscribes a StimulusReflex controller to an ActionCable channel and room.
//
// controller - the StimulusReflex controller to subscribe
//


var createSubscription = function createSubscription(controller) {
  var _controller$StimulusR = controller.StimulusReflex,
      channel = _controller$StimulusR.channel,
      room = _controller$StimulusR.room;
  var id = "".concat(channel).concat(room);
  var subscription = app.StimulusReflex.subscriptions[id] || app.StimulusReflex.consumer.subscriptions.create({
    channel: channel,
    room: room
  }, {
    received: function received(data) {
      if (!data.cableReady) return;

      var urls = _toConsumableArray(new Set(data.operations.morph.map(function (m) {
        return m.stimulusReflex.url;
      })));

      if (urls.length !== 1 || urls[0] !== location.href) return;
      cable_ready__WEBPACK_IMPORTED_MODULE_3__["default"].perform(data.operations);
    }
  });
  app.StimulusReflex.subscriptions[id] = subscription;
  controller.StimulusReflex.subscription = subscription;
}; // Extends a regular Stimulus controller with StimulusReflex behavior.
//
// Methods added to the Stimulus controller:
// - stimulate
// - __perform
//


var extendStimulusController = function extendStimulusController(controller) {
  Object.assign(controller, {
    // Invokes a server side reflex method.
    //
    // - target - the reflex target (full name of the server side reflex) i.e. 'ReflexClassName#method'
    // - element - [optional] the triggering element, defaults to this.element
    // - *args - remaining arguments are forwarded to the server side reflex method
    //
    stimulate: function stimulate() {
      var url = location.href;
      var args = Array.from(arguments);
      var target = args.shift();
      var element = args[0] && args[0].nodeType === Node.ELEMENT_NODE ? args.shift() : this.element;
      var attrs = Object(_attributes__WEBPACK_IMPORTED_MODULE_4__["extractElementAttributes"])(element);
      var selectors = getReflexRoots(element);
      var data = {
        target: target,
        args: args,
        url: url,
        attrs: attrs,
        selectors: selectors
      };
      invokeLifecycleMethod('before', target, element);
      controller.StimulusReflex.subscription.send(data);
    },
    // Wraps the call to stimuluate for any data-reflex elements.
    // This is internal and should not be invoked directly.
    __perform: function __perform(event) {
      var _this = this;

      event.preventDefault();
      event.stopPropagation();
      var element = event.target;
      var reflex = element.dataset.reflex;

      while (element && !reflex) {
        reflex = element.dataset.reflex;
        if (!reflex || !reflex.trim().length) element = element.parentElement;
      }

      Object(_attributes__WEBPACK_IMPORTED_MODULE_4__["attributeValues"])(reflex).forEach(function (reflex) {
        return _this.stimulate(reflex.split('->')[1], element);
      });
    }
  });
}; // Registers a Stimulus controller and extends it with StimulusReflex behavior
//
// controller - the Stimulus controller
// options - [optional] configuration
//   * room - the ActionCable room to subscribe to
//


var register = function register(controller) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var channel = 'StimulusReflex::Channel';
  var room = options.room || controller.element.dataset.room || '';
  controller.StimulusReflex = _objectSpread({}, options, {
    channel: channel,
    room: room
  });
  extendStimulusController(controller);
  createSubscription(controller);
}; // Default StimulusReflexController that is implicitly wired up as data-controller for any DOM elements
// that have configured data-reflex. Note that this default can be overridden when initializing the application.
// i.e. StimulusReflex.initialize(myStimulusApplication, MyCustomDefaultController);
//


var StimulusReflexController =
/*#__PURE__*/
function (_Controller) {
  _inherits(StimulusReflexController, _Controller);

  function StimulusReflexController() {
    var _getPrototypeOf2;

    var _this2;

    _classCallCheck(this, StimulusReflexController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StimulusReflexController)).call.apply(_getPrototypeOf2, [this].concat(args)));
    register(_assertThisInitialized(_this2));
    return _this2;
  }

  return StimulusReflexController;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]); // Sets up declarative reflex behavior.
// Any elements that define data-reflex will automatcially be wired up with the default StimulusReflexController.
//


var setupDeclarativeReflexes = function setupDeclarativeReflexes() {
  document.querySelectorAll('[data-reflex]').forEach(function (element) {
    var controllers = Object(_attributes__WEBPACK_IMPORTED_MODULE_4__["attributeValues"])(element.dataset.controller);
    var reflexes = Object(_attributes__WEBPACK_IMPORTED_MODULE_4__["attributeValues"])(element.dataset.reflex);
    var actions = Object(_attributes__WEBPACK_IMPORTED_MODULE_4__["attributeValues"])(element.dataset.action);
    reflexes.forEach(function (reflex) {
      var controller = Object(_controllers__WEBPACK_IMPORTED_MODULE_5__["allReflexControllers"])(application, element)[0];
      var action;

      if (controller) {
        action = "".concat(reflex.split('->')[0], "->").concat(controller.identifier, "#__perform");
        if (!actions.includes(action)) actions.push(action);
      } else {
        action = "".concat(reflex.split('->')[0], "->stimulus-reflex#__perform");

        if (!controllers.includes('stimulus-reflex')) {
          controllers.push('stimulus-reflex');
        }

        if (!actions.includes(action)) actions.push(action);
      }
    });
    var controllerValue = Object(_attributes__WEBPACK_IMPORTED_MODULE_4__["attributeValue"])(controllers);
    var actionValue = Object(_attributes__WEBPACK_IMPORTED_MODULE_4__["attributeValue"])(actions);

    if (controllerValue) {
      element.setAttribute('data-controller', controllerValue);
    }

    if (actionValue) element.setAttribute('data-action', actionValue);
  });
}; // compute the DOM element(s) which will be the morph root
// use the data-reflex-root attribute on the reflex or the controller
// optional value is a CSS selector(s); comma-separated list
// order of preference is data-reflex, data-controller, document body (default)


var getReflexRoots = function getReflexRoots(element) {
  var list = [];

  while (list.length === 0 && element) {
    if (Object.prototype.hasOwnProperty.call(element.dataset, 'reflexRoot')) {
      var reflexRoot = element.dataset.reflexRoot;
      if (reflexRoot.length === 0 && element.id) reflexRoot = "#".concat(element.id);
      var selectors = reflexRoot.split(',').filter(function (s) {
        return s.trim().length;
      });

      if (selectors.length === 0) {
        console.error('No value found for data-reflex-root. Add an #id to the element or provide a value for data-reflex-root.', element);
      }

      list = list.concat(selectors.filter(function (s) {
        return document.querySelector(s);
      }));
    }

    element = element.parentElement ? element.parentElement.closest('[data-reflex-root]') : null;
  }

  return list;
}; // Initializes StimulusReflex by registering the default Stimulus controller with the passed Stimulus application.
//
// - application - the Stimulus application
// - controller - [optional] the default StimulusReflexController
//


var initialize = function initialize(stimulusApplication) {
  var controller = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : StimulusReflexController;
  application = stimulusApplication;
  application.register('stimulus-reflex', controller);
}; // Wire everything up
//


var app = window.App || {};
app.StimulusReflex = app.StimulusReflex || {};
app.StimulusReflex.consumer = app.StimulusReflex.consumer || actioncable__WEBPACK_IMPORTED_MODULE_1___default.a.createConsumer();
app.StimulusReflex.subscriptions = app.StimulusReflex.subscriptions || {};

if (!document.stimulusReflexInitialized) {
  document.stimulusReflexInitialized = true;
  window.addEventListener('load', function () {
    return setTimeout(setupDeclarativeReflexes, 1);
  });
  document.addEventListener('turbolinks:load', function () {
    return setTimeout(setupDeclarativeReflexes, 1);
  });
  document.addEventListener('cable-ready:after-morph', function () {
    return setTimeout(setupDeclarativeReflexes, 1);
  }); // Trigger success and after lifecycle methods from before-morph to ensure we can find a reference
  // to the source element in case it gets removed from the DOM via morph.
  // This is safe because the server side reflex completed successfully.

  document.addEventListener('cable-ready:before-morph', function (event) {
    var _ref = event.detail.stimulusReflex || {},
        target = _ref.target,
        attrs = _ref.attrs,
        last = _ref.last;

    if (!last) return;
    var element = Object(_attributes__WEBPACK_IMPORTED_MODULE_4__["findElement"])(attrs);
    invokeLifecycleMethod('success', target, element);
    invokeLifecycleMethod('after', target, element);
  });
  document.addEventListener('stimulus-reflex:500', function (event) {
    var _ref2 = event.detail.stimulusReflex || {},
        target = _ref2.target,
        attrs = _ref2.attrs,
        error = _ref2.error;

    var element = Object(_attributes__WEBPACK_IMPORTED_MODULE_4__["findElement"])(attrs);
    element.reflexError = error;
    invokeLifecycleMethod('error', target, element);
    invokeLifecycleMethod('after', target, element);
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  initialize: initialize,
  register: register
});

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./node_modules/todomvc-app-css/index.css":
/*!************************************************!*\
  !*** ./node_modules/todomvc-app-css/index.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader/dist/cjs.js??ref--6-1!../postcss-loader/src??ref--6-2!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/todomvc-app-css/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true,"sourceMap":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/todomvc-common/base.css":
/*!**********************************************!*\
  !*** ./node_modules/todomvc-common/base.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader/dist/cjs.js??ref--6-1!../postcss-loader/src??ref--6-2!./base.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/todomvc-common/base.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true,"sourceMap":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/velocity-animate/velocity.js":
/*!***************************************************!*\
  !*** ./node_modules/velocity-animate/velocity.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! VelocityJS.org (1.5.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

/*************************
 Velocity jQuery Shim
 *************************/

/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */

/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */

/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */

/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */
(function (window) {
  "use strict";
  /***************
   Setup
   ***************/

  /* If jQuery is already loaded, there's no point in loading this shim. */

  if (window.jQuery) {
    return;
  }
  /* jQuery base. */


  var $ = function $(selector, context) {
    return new $.fn.init(selector, context);
  };
  /********************
   Private Methods
   ********************/

  /* jQuery */


  $.isWindow = function (obj) {
    /* jshint eqeqeq: false */
    return obj && obj === obj.window;
  };
  /* jQuery */


  $.type = function (obj) {
    if (!obj) {
      return obj + "";
    }

    return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  };
  /* jQuery */


  $.isArray = Array.isArray || function (obj) {
    return $.type(obj) === "array";
  };
  /* jQuery */


  function isArraylike(obj) {
    var length = obj.length,
        type = $.type(obj);

    if (type === "function" || $.isWindow(obj)) {
      return false;
    }

    if (obj.nodeType === 1 && length) {
      return true;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }
  /***************
   $ Methods
   ***************/

  /* jQuery: Support removed for IE<9. */


  $.isPlainObject = function (obj) {
    var key;

    if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
      return false;
    }

    try {
      if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
        return false;
      }
    } catch (e) {
      return false;
    }

    for (key in obj) {}

    return key === undefined || hasOwn.call(obj, key);
  };
  /* jQuery */


  $.each = function (obj, callback, args) {
    var value,
        i = 0,
        length = obj.length,
        isArray = isArraylike(obj);

    if (args) {
      if (isArray) {
        for (; i < length; i++) {
          value = callback.apply(obj[i], args);

          if (value === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (!obj.hasOwnProperty(i)) {
            continue;
          }

          value = callback.apply(obj[i], args);

          if (value === false) {
            break;
          }
        }
      }
    } else {
      if (isArray) {
        for (; i < length; i++) {
          value = callback.call(obj[i], i, obj[i]);

          if (value === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (!obj.hasOwnProperty(i)) {
            continue;
          }

          value = callback.call(obj[i], i, obj[i]);

          if (value === false) {
            break;
          }
        }
      }
    }

    return obj;
  };
  /* Custom */


  $.data = function (node, key, value) {
    /* $.getData() */
    if (value === undefined) {
      var getId = node[$.expando],
          store = getId && cache[getId];

      if (key === undefined) {
        return store;
      } else if (store) {
        if (key in store) {
          return store[key];
        }
      }
      /* $.setData() */

    } else if (key !== undefined) {
      var setId = node[$.expando] || (node[$.expando] = ++$.uuid);
      cache[setId] = cache[setId] || {};
      cache[setId][key] = value;
      return value;
    }
  };
  /* Custom */


  $.removeData = function (node, keys) {
    var id = node[$.expando],
        store = id && cache[id];

    if (store) {
      // Cleanup the entire store if no keys are provided.
      if (!keys) {
        delete cache[id];
      } else {
        $.each(keys, function (_, key) {
          delete store[key];
        });
      }
    }
  };
  /* jQuery */


  $.extend = function () {
    var src,
        copyIsArray,
        copy,
        name,
        options,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;

    if (typeof target === "boolean") {
      deep = target;
      target = arguments[i] || {};
      i++;
    }

    if (_typeof(target) !== "object" && $.type(target) !== "function") {
      target = {};
    }

    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      if (options = arguments[i]) {
        for (name in options) {
          if (!options.hasOwnProperty(name)) {
            continue;
          }

          src = target[name];
          copy = options[name];

          if (target === copy) {
            continue;
          }

          if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && $.isArray(src) ? src : [];
            } else {
              clone = src && $.isPlainObject(src) ? src : {};
            }

            target[name] = $.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }

    return target;
  };
  /* jQuery 1.4.3 */


  $.queue = function (elem, type, data) {
    function $makeArray(arr, results) {
      var ret = results || [];

      if (arr) {
        if (isArraylike(Object(arr))) {
          /* $.merge */
          (function (first, second) {
            var len = +second.length,
                j = 0,
                i = first.length;

            while (j < len) {
              first[i++] = second[j++];
            }

            if (len !== len) {
              while (second[j] !== undefined) {
                first[i++] = second[j++];
              }
            }

            first.length = i;
            return first;
          })(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          [].push.call(ret, arr);
        }
      }

      return ret;
    }

    if (!elem) {
      return;
    }

    type = (type || "fx") + "queue";
    var q = $.data(elem, type);

    if (!data) {
      return q || [];
    }

    if (!q || $.isArray(data)) {
      q = $.data(elem, type, $makeArray(data));
    } else {
      q.push(data);
    }

    return q;
  };
  /* jQuery 1.4.3 */


  $.dequeue = function (elems, type) {
    /* Custom: Embed element iteration. */
    $.each(elems.nodeType ? [elems] : elems, function (i, elem) {
      type = type || "fx";
      var queue = $.queue(elem, type),
          fn = queue.shift();

      if (fn === "inprogress") {
        fn = queue.shift();
      }

      if (fn) {
        if (type === "fx") {
          queue.unshift("inprogress");
        }

        fn.call(elem, function () {
          $.dequeue(elem, type);
        });
      }
    });
  };
  /******************
   $.fn Methods
   ******************/

  /* jQuery */


  $.fn = $.prototype = {
    init: function init(selector) {
      /* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
      if (selector.nodeType) {
        this[0] = selector;
        return this;
      } else {
        throw new Error("Not a DOM node.");
      }
    },
    offset: function offset() {
      /* jQuery altered code: Dropped disconnected DOM node checking. */
      var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
        top: 0,
        left: 0
      };
      return {
        top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
        left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
      };
    },
    position: function position() {
      /* jQuery */
      function offsetParentFn(elem) {
        var offsetParent = elem.offsetParent;

        while (offsetParent && offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position.toLowerCase() === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || document;
      }
      /* Zepto */


      var elem = this[0],
          offsetParent = offsetParentFn(elem),
          offset = this.offset(),
          parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {
        top: 0,
        left: 0
      } : $(offsetParent).offset();
      offset.top -= parseFloat(elem.style.marginTop) || 0;
      offset.left -= parseFloat(elem.style.marginLeft) || 0;

      if (offsetParent.style) {
        parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
        parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
      }

      return {
        top: offset.top - parentOffset.top,
        left: offset.left - parentOffset.left
      };
    }
  };
  /**********************
   Private Variables
   **********************/

  /* For $.data() */

  var cache = {};
  $.expando = "velocity" + new Date().getTime();
  $.uuid = 0;
  /* For $.queue() */

  var class2type = {},
      hasOwn = class2type.hasOwnProperty,
      toString = class2type.toString;
  var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");

  for (var i = 0; i < types.length; i++) {
    class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
  }
  /* Makes $(node) possible, without having to call init. */


  $.fn.init.prototype = $.fn;
  /* Globalize Velocity onto the window, and assign its Utilities property. */

  window.Velocity = {
    Utilities: $
  };
})(window);
/******************
 Velocity.js
 ******************/


(function (factory) {
  "use strict";
  /* CommonJS module. */

  if (( false ? undefined : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = factory();
    /* AMD module. */
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /* Browser globals. */
  } else {}
})(function () {
  "use strict";

  return function (global, window, document, undefined) {
    /***************
     Summary
     ***************/

    /*
     - CSS: CSS stack that works independently from the rest of Velocity.
     - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
     - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
     - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
     Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
     - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
     - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
     - completeCall(): Handles the cleanup process for each Velocity call.
     */

    /*********************
     Helper Functions
     *********************/

    /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
    var IE = function () {
      if (document.documentMode) {
        return document.documentMode;
      } else {
        for (var i = 7; i > 4; i--) {
          var div = document.createElement("div");
          div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

          if (div.getElementsByTagName("span").length) {
            div = null;
            return i;
          }
        }
      }

      return undefined;
    }();
    /* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */


    var rAFShim = function () {
      var timeLast = 0;
      return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        var timeCurrent = new Date().getTime(),
            timeDelta;
        /* Dynamically set delay on a per-tick basis to match 60fps. */

        /* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */

        timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
        timeLast = timeCurrent + timeDelta;
        return setTimeout(function () {
          callback(timeCurrent + timeDelta);
        }, timeDelta);
      };
    }();

    var performance = function () {
      var perf = window.performance || {};

      if (typeof perf.now !== "function") {
        var nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : new Date().getTime();

        perf.now = function () {
          return new Date().getTime() - nowOffset;
        };
      }

      return perf;
    }();
    /* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */


    function compactSparseArray(array) {
      var index = -1,
          length = array ? array.length : 0,
          result = [];

      while (++index < length) {
        var value = array[index];

        if (value) {
          result.push(value);
        }
      }

      return result;
    }
    /**
     * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
     * on host objects like NamedNodeMap, NodeList, and HTMLCollection
     * (technically, since host objects have been implementation-dependent,
     * at least before ES2015, IE hasn't needed to work this way).
     * Also works on strings, fixes IE < 9 to allow an explicit undefined
     * for the 2nd argument (as in Firefox), and prevents errors when
     * called on other DOM objects.
     */


    var _slice = function () {
      var slice = Array.prototype.slice;

      try {
        // Can't be used with DOM elements in IE < 9
        slice.call(document.documentElement);
        return slice;
      } catch (e) {
        // Fails in IE < 9
        // This will work for genuine arrays, array-like objects, 
        // NamedNodeMap (attributes, entities, notations),
        // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
        // and will not fail on other DOM objects (as do DOM elements in IE < 9)
        return function (begin, end) {
          var len = this.length;

          if (typeof begin !== "number") {
            begin = 0;
          } // IE < 9 gets unhappy with an undefined end argument


          if (typeof end !== "number") {
            end = len;
          } // For native Array objects, we use the native slice function


          if (this.slice) {
            return slice.call(this, begin, end);
          } // For array like object we handle it ourselves.


          var i,
              cloned = [],
              // Handle negative value for "begin"
          start = begin >= 0 ? begin : Math.max(0, len + begin),
              // Handle negative value for "end"
          upTo = end < 0 ? len + end : Math.min(end, len),
              // Actual expected size of the slice
          size = upTo - start;

          if (size > 0) {
            cloned = new Array(size);

            if (this.charAt) {
              for (i = 0; i < size; i++) {
                cloned[i] = this.charAt(start + i);
              }
            } else {
              for (i = 0; i < size; i++) {
                cloned[i] = this[start + i];
              }
            }
          }

          return cloned;
        };
      }
    }();
    /* .indexOf doesn't exist in IE<9 */


    var _inArray = function _inArray() {
      if (Array.prototype.includes) {
        return function (arr, val) {
          return arr.includes(val);
        };
      }

      if (Array.prototype.indexOf) {
        return function (arr, val) {
          return arr.indexOf(val) >= 0;
        };
      }

      return function (arr, val) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === val) {
            return true;
          }
        }

        return false;
      };
    };

    function sanitizeElements(elements) {
      /* Unwrap jQuery/Zepto objects. */
      if (Type.isWrapped(elements)) {
        elements = _slice.call(elements);
        /* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
      } else if (Type.isNode(elements)) {
        elements = [elements];
      }

      return elements;
    }

    var Type = {
      isNumber: function isNumber(variable) {
        return typeof variable === "number";
      },
      isString: function isString(variable) {
        return typeof variable === "string";
      },
      isArray: Array.isArray || function (variable) {
        return Object.prototype.toString.call(variable) === "[object Array]";
      },
      isFunction: function isFunction(variable) {
        return Object.prototype.toString.call(variable) === "[object Function]";
      },
      isNode: function isNode(variable) {
        return variable && variable.nodeType;
      },

      /* Determine if variable is an array-like wrapped jQuery, Zepto or similar element, or even a NodeList etc. */

      /* NOTE: HTMLFormElements also have a length. */
      isWrapped: function isWrapped(variable) {
        return variable && variable !== window && Type.isNumber(variable.length) && !Type.isString(variable) && !Type.isFunction(variable) && !Type.isNode(variable) && (variable.length === 0 || Type.isNode(variable[0]));
      },
      isSVG: function isSVG(variable) {
        return window.SVGElement && variable instanceof window.SVGElement;
      },
      isEmptyObject: function isEmptyObject(variable) {
        for (var name in variable) {
          if (variable.hasOwnProperty(name)) {
            return false;
          }
        }

        return true;
      }
    };
    /*****************
     Dependencies
     *****************/

    var $,
        isJQuery = false;

    if (global.fn && global.fn.jquery) {
      $ = global;
      isJQuery = true;
    } else {
      $ = window.Velocity.Utilities;
    }

    if (IE <= 8 && !isJQuery) {
      throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
    } else if (IE <= 7) {
      /* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
      jQuery.fn.velocity = jQuery.fn.animate;
      /* Now that $.fn.velocity is aliased, abort this Velocity declaration. */

      return;
    }
    /*****************
     Constants
     *****************/


    var DURATION_DEFAULT = 400,
        EASING_DEFAULT = "swing";
    /*************
     State
     *************/

    var Velocity = {
      /* Container for page-wide Velocity state data. */
      State: {
        /* Detect mobile devices to determine if mobileHA should be turned on. */
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent),

        /* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
        isAndroid: /Android/i.test(window.navigator.userAgent),
        isGingerbread: /Android 2\.3\.[3-7]/i.test(window.navigator.userAgent),
        isChrome: window.chrome,
        isFirefox: /Firefox/i.test(window.navigator.userAgent),

        /* Create a cached element for re-use when checking for CSS property prefixes. */
        prefixElement: document.createElement("div"),

        /* Cache every prefix match to avoid repeating lookups. */
        prefixMatches: {},

        /* Cache the anchor used for animating window scrolling. */
        scrollAnchor: null,

        /* Cache the browser-specific property names associated with the scroll anchor. */
        scrollPropertyLeft: null,
        scrollPropertyTop: null,

        /* Keep track of whether our RAF tick is running. */
        isTicking: false,

        /* Container for every in-progress call to Velocity. */
        calls: [],
        delayedElements: {
          count: 0
        }
      },

      /* Velocity's custom CSS stack. Made global for unit testing. */
      CSS: {
        /* Defined below. */
      },

      /* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
      Utilities: $,

      /* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
      Redirects: {
        /* Manually registered by the user. */
      },
      Easings: {
        /* Defined below. */
      },

      /* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
      Promise: window.Promise,

      /* Velocity option defaults, which can be overriden by the user. */
      defaults: {
        queue: "",
        duration: DURATION_DEFAULT,
        easing: EASING_DEFAULT,
        begin: undefined,
        complete: undefined,
        progress: undefined,
        display: undefined,
        visibility: undefined,
        loop: false,
        delay: false,
        mobileHA: true,

        /* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
        _cacheValues: true,

        /* Advanced: Set to false if the promise should always resolve on empty element lists. */
        promiseRejectEmpty: true
      },

      /* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
      init: function init(element) {
        $.data(element, "velocity", {
          /* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
          isSVG: Type.isSVG(element),

          /* Keep track of whether the element is currently being animated by Velocity.
           This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
          isAnimating: false,

          /* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
          computedStyle: null,

          /* Tween data is cached for each animation on the element so that data can be passed across calls --
           in particular, end values are used as subsequent start values in consecutive Velocity calls. */
          tweensContainer: null,

          /* The full root property values of each CSS hook being animated on this element are cached so that:
           1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
           2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
          rootPropertyValueCache: {},

          /* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
          transformCache: {}
        });
      },

      /* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
      hook: null,

      /* Defined below. */

      /* Velocity-wide animation time remapping for testing purposes. */
      mock: false,
      version: {
        major: 1,
        minor: 5,
        patch: 2
      },

      /* Set to 1 or 2 (most verbose) to output debug info to console. */
      debug: false,

      /* Use rAF high resolution timestamp when available */
      timestamp: true,

      /* Pause all animations */
      pauseAll: function pauseAll(queueName) {
        var currentTime = new Date().getTime();
        $.each(Velocity.State.calls, function (i, activeCall) {
          if (activeCall) {
            /* If we have a queueName and this call is not on that queue, skip */
            if (queueName !== undefined && (activeCall[2].queue !== queueName || activeCall[2].queue === false)) {
              return true;
            }
            /* Set call to paused */


            activeCall[5] = {
              resume: false
            };
          }
        });
        /* Pause timers on any currently delayed calls */

        $.each(Velocity.State.delayedElements, function (k, element) {
          if (!element) {
            return;
          }

          pauseDelayOnElement(element, currentTime);
        });
      },

      /* Resume all animations */
      resumeAll: function resumeAll(queueName) {
        var currentTime = new Date().getTime();
        $.each(Velocity.State.calls, function (i, activeCall) {
          if (activeCall) {
            /* If we have a queueName and this call is not on that queue, skip */
            if (queueName !== undefined && (activeCall[2].queue !== queueName || activeCall[2].queue === false)) {
              return true;
            }
            /* Set call to resumed if it was paused */


            if (activeCall[5]) {
              activeCall[5].resume = true;
            }
          }
        });
        /* Resume timers on any currently delayed calls */

        $.each(Velocity.State.delayedElements, function (k, element) {
          if (!element) {
            return;
          }

          resumeDelayOnElement(element, currentTime);
        });
      }
    };
    /* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */

    if (window.pageYOffset !== undefined) {
      Velocity.State.scrollAnchor = window;
      Velocity.State.scrollPropertyLeft = "pageXOffset";
      Velocity.State.scrollPropertyTop = "pageYOffset";
    } else {
      Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
      Velocity.State.scrollPropertyLeft = "scrollLeft";
      Velocity.State.scrollPropertyTop = "scrollTop";
    }
    /* Shorthand alias for jQuery's $.data() utility. */


    function Data(element) {
      /* Hardcode a reference to the plugin name. */
      var response = $.data(element, "velocity");
      /* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */

      return response === null ? undefined : response;
    }
    /**************
     Delay Timer
     **************/


    function pauseDelayOnElement(element, currentTime) {
      /* Check for any delay timers, and pause the set timeouts (while preserving time data)
       to be resumed when the "resume" command is issued */
      var data = Data(element);

      if (data && data.delayTimer && !data.delayPaused) {
        data.delayRemaining = data.delay - currentTime + data.delayBegin;
        data.delayPaused = true;
        clearTimeout(data.delayTimer.setTimeout);
      }
    }

    function resumeDelayOnElement(element, currentTime) {
      /* Check for any paused timers and resume */
      var data = Data(element);

      if (data && data.delayTimer && data.delayPaused) {
        /* If the element was mid-delay, re initiate the timeout with the remaining delay */
        data.delayPaused = false;
        data.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);
      }
    }
    /**************
     Easing
     **************/

    /* Step easing generator. */


    function generateStep(steps) {
      return function (p) {
        return Math.round(p * steps) * (1 / steps);
      };
    }
    /* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */


    function generateBezier(mX1, mY1, mX2, mY2) {
      var NEWTON_ITERATIONS = 4,
          NEWTON_MIN_SLOPE = 0.001,
          SUBDIVISION_PRECISION = 0.0000001,
          SUBDIVISION_MAX_ITERATIONS = 10,
          kSplineTableSize = 11,
          kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
          float32ArraySupported = "Float32Array" in window;
      /* Must contain four arguments. */

      if (arguments.length !== 4) {
        return false;
      }
      /* Arguments must be numbers. */


      for (var i = 0; i < 4; ++i) {
        if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
          return false;
        }
      }
      /* X values must be in the [0, 1] range. */


      mX1 = Math.min(mX1, 1);
      mX2 = Math.min(mX2, 1);
      mX1 = Math.max(mX1, 0);
      mX2 = Math.max(mX2, 0);
      var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

      function A(aA1, aA2) {
        return 1.0 - 3.0 * aA2 + 3.0 * aA1;
      }

      function B(aA1, aA2) {
        return 3.0 * aA2 - 6.0 * aA1;
      }

      function C(aA1) {
        return 3.0 * aA1;
      }

      function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
      }

      function getSlope(aT, aA1, aA2) {
        return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
      }

      function newtonRaphsonIterate(aX, aGuessT) {
        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
          var currentSlope = getSlope(aGuessT, mX1, mX2);

          if (currentSlope === 0.0) {
            return aGuessT;
          }

          var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
          aGuessT -= currentX / currentSlope;
        }

        return aGuessT;
      }

      function calcSampleValues() {
        for (var i = 0; i < kSplineTableSize; ++i) {
          mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
      }

      function binarySubdivide(aX, aA, aB) {
        var currentX,
            currentT,
            i = 0;

        do {
          currentT = aA + (aB - aA) / 2.0;
          currentX = calcBezier(currentT, mX1, mX2) - aX;

          if (currentX > 0.0) {
            aB = currentT;
          } else {
            aA = currentT;
          }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

        return currentT;
      }

      function getTForX(aX) {
        var intervalStart = 0.0,
            currentSample = 1,
            lastSample = kSplineTableSize - 1;

        for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }

        --currentSample;
        var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
            guessForT = intervalStart + dist * kSampleStepSize,
            initialSlope = getSlope(guessForT, mX1, mX2);

        if (initialSlope >= NEWTON_MIN_SLOPE) {
          return newtonRaphsonIterate(aX, guessForT);
        } else if (initialSlope === 0.0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
        }
      }

      var _precomputed = false;

      function precompute() {
        _precomputed = true;

        if (mX1 !== mY1 || mX2 !== mY2) {
          calcSampleValues();
        }
      }

      var f = function f(aX) {
        if (!_precomputed) {
          precompute();
        }

        if (mX1 === mY1 && mX2 === mY2) {
          return aX;
        }

        if (aX === 0) {
          return 0;
        }

        if (aX === 1) {
          return 1;
        }

        return calcBezier(getTForX(aX), mY1, mY2);
      };

      f.getControlPoints = function () {
        return [{
          x: mX1,
          y: mY1
        }, {
          x: mX2,
          y: mY2
        }];
      };

      var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";

      f.toString = function () {
        return str;
      };

      return f;
    }
    /* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */

    /* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
     then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */


    var generateSpringRK4 = function () {
      function springAccelerationForState(state) {
        return -state.tension * state.x - state.friction * state.v;
      }

      function springEvaluateStateWithDerivative(initialState, dt, derivative) {
        var state = {
          x: initialState.x + derivative.dx * dt,
          v: initialState.v + derivative.dv * dt,
          tension: initialState.tension,
          friction: initialState.friction
        };
        return {
          dx: state.v,
          dv: springAccelerationForState(state)
        };
      }

      function springIntegrateState(state, dt) {
        var a = {
          dx: state.v,
          dv: springAccelerationForState(state)
        },
            b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
            c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
            d = springEvaluateStateWithDerivative(state, dt, c),
            dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
            dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);
        state.x = state.x + dxdt * dt;
        state.v = state.v + dvdt * dt;
        return state;
      }

      return function springRK4Factory(tension, friction, duration) {
        var initState = {
          x: -1,
          v: 0,
          tension: null,
          friction: null
        },
            path = [0],
            time_lapsed = 0,
            tolerance = 1 / 10000,
            DT = 16 / 1000,
            have_duration,
            dt,
            last_state;
        tension = parseFloat(tension) || 500;
        friction = parseFloat(friction) || 20;
        duration = duration || null;
        initState.tension = tension;
        initState.friction = friction;
        have_duration = duration !== null;
        /* Calculate the actual time it takes for this animation to complete with the provided conditions. */

        if (have_duration) {
          /* Run the simulation without a duration. */
          time_lapsed = springRK4Factory(tension, friction);
          /* Compute the adjusted time delta. */

          dt = time_lapsed / duration * DT;
        } else {
          dt = DT;
        }

        while (true) {
          /* Next/step function .*/
          last_state = springIntegrateState(last_state || initState, dt);
          /* Store the position. */

          path.push(1 + last_state.x);
          time_lapsed += 16;
          /* If the change threshold is reached, break. */

          if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
            break;
          }
        }
        /* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
         computed path and returns a snapshot of the position according to a given percentComplete. */


        return !have_duration ? time_lapsed : function (percentComplete) {
          return path[percentComplete * (path.length - 1) | 0];
        };
      };
    }();
    /* jQuery easings. */


    Velocity.Easings = {
      linear: function linear(p) {
        return p;
      },
      swing: function swing(p) {
        return 0.5 - Math.cos(p * Math.PI) / 2;
      },

      /* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
      spring: function spring(p) {
        return 1 - Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6);
      }
    };
    /* CSS3 and Robert Penner easings. */

    $.each([["ease", [0.25, 0.1, 0.25, 1.0]], ["ease-in", [0.42, 0.0, 1.00, 1.0]], ["ease-out", [0.00, 0.0, 0.58, 1.0]], ["ease-in-out", [0.42, 0.0, 0.58, 1.0]], ["easeInSine", [0.47, 0, 0.745, 0.715]], ["easeOutSine", [0.39, 0.575, 0.565, 1]], ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]], ["easeInQuad", [0.55, 0.085, 0.68, 0.53]], ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]], ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]], ["easeInCubic", [0.55, 0.055, 0.675, 0.19]], ["easeOutCubic", [0.215, 0.61, 0.355, 1]], ["easeInOutCubic", [0.645, 0.045, 0.355, 1]], ["easeInQuart", [0.895, 0.03, 0.685, 0.22]], ["easeOutQuart", [0.165, 0.84, 0.44, 1]], ["easeInOutQuart", [0.77, 0, 0.175, 1]], ["easeInQuint", [0.755, 0.05, 0.855, 0.06]], ["easeOutQuint", [0.23, 1, 0.32, 1]], ["easeInOutQuint", [0.86, 0, 0.07, 1]], ["easeInExpo", [0.95, 0.05, 0.795, 0.035]], ["easeOutExpo", [0.19, 1, 0.22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [0.6, 0.04, 0.98, 0.335]], ["easeOutCirc", [0.075, 0.82, 0.165, 1]], ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]], function (i, easingArray) {
      Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
    });
    /* Determine the appropriate easing type given an easing input. */

    function getEasing(value, duration) {
      var easing = value;
      /* The easing option can either be a string that references a pre-registered easing,
       or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */

      if (Type.isString(value)) {
        /* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
        if (!Velocity.Easings[value]) {
          easing = false;
        }
      } else if (Type.isArray(value) && value.length === 1) {
        easing = generateStep.apply(null, value);
      } else if (Type.isArray(value) && value.length === 2) {
        /* springRK4 must be passed the animation's duration. */

        /* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
         function generated with default tension and friction values. */
        easing = generateSpringRK4.apply(null, value.concat([duration]));
      } else if (Type.isArray(value) && value.length === 4) {
        /* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
        easing = generateBezier.apply(null, value);
      } else {
        easing = false;
      }
      /* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
       if the Velocity-wide default has been incorrectly modified. */


      if (easing === false) {
        if (Velocity.Easings[Velocity.defaults.easing]) {
          easing = Velocity.defaults.easing;
        } else {
          easing = EASING_DEFAULT;
        }
      }

      return easing;
    }
    /*****************
     CSS Stack
     *****************/

    /* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
     It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */

    /* Note: A "CSS" shorthand is aliased so that our code is easier to read. */


    var CSS = Velocity.CSS = {
      /*************
       RegEx
       *************/
      RegEx: {
        isHex: /^#([A-f\d]{3}){1,2}$/i,

        /* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
        valueUnwrap: /^[A-z]+\((.*)\)$/i,
        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,

        /* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
      },

      /************
       Lists
       ************/
      Lists: {
        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
        units: ["%", // relative
        "em", "ex", "ch", "rem", // font relative
        "vw", "vh", "vmin", "vmax", // viewport relative
        "cm", "mm", "Q", "in", "pc", "pt", "px", // absolute lengths
        "deg", "grad", "rad", "turn", // angles
        "s", "ms" // time
        ],
        colorNames: {
          "aliceblue": "240,248,255",
          "antiquewhite": "250,235,215",
          "aquamarine": "127,255,212",
          "aqua": "0,255,255",
          "azure": "240,255,255",
          "beige": "245,245,220",
          "bisque": "255,228,196",
          "black": "0,0,0",
          "blanchedalmond": "255,235,205",
          "blueviolet": "138,43,226",
          "blue": "0,0,255",
          "brown": "165,42,42",
          "burlywood": "222,184,135",
          "cadetblue": "95,158,160",
          "chartreuse": "127,255,0",
          "chocolate": "210,105,30",
          "coral": "255,127,80",
          "cornflowerblue": "100,149,237",
          "cornsilk": "255,248,220",
          "crimson": "220,20,60",
          "cyan": "0,255,255",
          "darkblue": "0,0,139",
          "darkcyan": "0,139,139",
          "darkgoldenrod": "184,134,11",
          "darkgray": "169,169,169",
          "darkgrey": "169,169,169",
          "darkgreen": "0,100,0",
          "darkkhaki": "189,183,107",
          "darkmagenta": "139,0,139",
          "darkolivegreen": "85,107,47",
          "darkorange": "255,140,0",
          "darkorchid": "153,50,204",
          "darkred": "139,0,0",
          "darksalmon": "233,150,122",
          "darkseagreen": "143,188,143",
          "darkslateblue": "72,61,139",
          "darkslategray": "47,79,79",
          "darkturquoise": "0,206,209",
          "darkviolet": "148,0,211",
          "deeppink": "255,20,147",
          "deepskyblue": "0,191,255",
          "dimgray": "105,105,105",
          "dimgrey": "105,105,105",
          "dodgerblue": "30,144,255",
          "firebrick": "178,34,34",
          "floralwhite": "255,250,240",
          "forestgreen": "34,139,34",
          "fuchsia": "255,0,255",
          "gainsboro": "220,220,220",
          "ghostwhite": "248,248,255",
          "gold": "255,215,0",
          "goldenrod": "218,165,32",
          "gray": "128,128,128",
          "grey": "128,128,128",
          "greenyellow": "173,255,47",
          "green": "0,128,0",
          "honeydew": "240,255,240",
          "hotpink": "255,105,180",
          "indianred": "205,92,92",
          "indigo": "75,0,130",
          "ivory": "255,255,240",
          "khaki": "240,230,140",
          "lavenderblush": "255,240,245",
          "lavender": "230,230,250",
          "lawngreen": "124,252,0",
          "lemonchiffon": "255,250,205",
          "lightblue": "173,216,230",
          "lightcoral": "240,128,128",
          "lightcyan": "224,255,255",
          "lightgoldenrodyellow": "250,250,210",
          "lightgray": "211,211,211",
          "lightgrey": "211,211,211",
          "lightgreen": "144,238,144",
          "lightpink": "255,182,193",
          "lightsalmon": "255,160,122",
          "lightseagreen": "32,178,170",
          "lightskyblue": "135,206,250",
          "lightslategray": "119,136,153",
          "lightsteelblue": "176,196,222",
          "lightyellow": "255,255,224",
          "limegreen": "50,205,50",
          "lime": "0,255,0",
          "linen": "250,240,230",
          "magenta": "255,0,255",
          "maroon": "128,0,0",
          "mediumaquamarine": "102,205,170",
          "mediumblue": "0,0,205",
          "mediumorchid": "186,85,211",
          "mediumpurple": "147,112,219",
          "mediumseagreen": "60,179,113",
          "mediumslateblue": "123,104,238",
          "mediumspringgreen": "0,250,154",
          "mediumturquoise": "72,209,204",
          "mediumvioletred": "199,21,133",
          "midnightblue": "25,25,112",
          "mintcream": "245,255,250",
          "mistyrose": "255,228,225",
          "moccasin": "255,228,181",
          "navajowhite": "255,222,173",
          "navy": "0,0,128",
          "oldlace": "253,245,230",
          "olivedrab": "107,142,35",
          "olive": "128,128,0",
          "orangered": "255,69,0",
          "orange": "255,165,0",
          "orchid": "218,112,214",
          "palegoldenrod": "238,232,170",
          "palegreen": "152,251,152",
          "paleturquoise": "175,238,238",
          "palevioletred": "219,112,147",
          "papayawhip": "255,239,213",
          "peachpuff": "255,218,185",
          "peru": "205,133,63",
          "pink": "255,192,203",
          "plum": "221,160,221",
          "powderblue": "176,224,230",
          "purple": "128,0,128",
          "red": "255,0,0",
          "rosybrown": "188,143,143",
          "royalblue": "65,105,225",
          "saddlebrown": "139,69,19",
          "salmon": "250,128,114",
          "sandybrown": "244,164,96",
          "seagreen": "46,139,87",
          "seashell": "255,245,238",
          "sienna": "160,82,45",
          "silver": "192,192,192",
          "skyblue": "135,206,235",
          "slateblue": "106,90,205",
          "slategray": "112,128,144",
          "snow": "255,250,250",
          "springgreen": "0,255,127",
          "steelblue": "70,130,180",
          "tan": "210,180,140",
          "teal": "0,128,128",
          "thistle": "216,191,216",
          "tomato": "255,99,71",
          "turquoise": "64,224,208",
          "violet": "238,130,238",
          "wheat": "245,222,179",
          "whitesmoke": "245,245,245",
          "white": "255,255,255",
          "yellowgreen": "154,205,50",
          "yellow": "255,255,0"
        }
      },

      /************
       Hooks
       ************/

      /* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
       (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */

      /* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
       tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
      Hooks: {
        /********************
         Registration
         ********************/

        /* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */

        /* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
        templates: {
          "textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
          "boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
          "clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
          "backgroundPosition": ["X Y", "0% 0%"],
          "transformOrigin": ["X Y Z", "50% 50% 0px"],
          "perspectiveOrigin": ["X Y", "50% 50%"]
        },

        /* A "registered" hook is one that has been converted from its template form into a live,
         tweenable property. It contains data to associate it with its root property. */
        registered: {
          /* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
           which consists of the subproperty's name, the associated root property's name,
           and the subproperty's position in the root's value. */
        },

        /* Convert the templates into individual hooks then append them to the registered object above. */
        register: function register() {
          /* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
           currently set to "transparent" default to their respective template below when color-animated,
           and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
           which is almost always set closer to black than white. */
          for (var i = 0; i < CSS.Lists.colors.length; i++) {
            var rgbComponents = CSS.Lists.colors[i] === "color" ? "0 0 0 1" : "255 255 255 1";
            CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
          }

          var rootProperty, hookTemplate, hookNames;
          /* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
           Thus, we re-arrange the templates accordingly. */

          if (IE) {
            for (rootProperty in CSS.Hooks.templates) {
              if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
                continue;
              }

              hookTemplate = CSS.Hooks.templates[rootProperty];
              hookNames = hookTemplate[0].split(" ");
              var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);

              if (hookNames[0] === "Color") {
                /* Reposition both the hook's name and its default value to the end of their respective strings. */
                hookNames.push(hookNames.shift());
                defaultValues.push(defaultValues.shift());
                /* Replace the existing template for the hook's root property. */

                CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
              }
            }
          }
          /* Hook registration. */


          for (rootProperty in CSS.Hooks.templates) {
            if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
              continue;
            }

            hookTemplate = CSS.Hooks.templates[rootProperty];
            hookNames = hookTemplate[0].split(" ");

            for (var j in hookNames) {
              if (!hookNames.hasOwnProperty(j)) {
                continue;
              }

              var fullHookName = rootProperty + hookNames[j],
                  hookPosition = j;
              /* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
               and the hook's position in its template's default value string. */

              CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
            }
          }
        },

        /*****************************
         Injection and Extraction
         *****************************/

        /* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */

        /* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
        getRoot: function getRoot(property) {
          var hookData = CSS.Hooks.registered[property];

          if (hookData) {
            return hookData[0];
          } else {
            /* If there was no hook match, return the property name untouched. */
            return property;
          }
        },
        getUnit: function getUnit(str, start) {
          var unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || "";

          if (unit && _inArray(CSS.Lists.units, unit)) {
            return unit;
          }

          return "";
        },
        fixColors: function fixColors(str) {
          return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function ($0, $1, $2) {
            if (CSS.Lists.colorNames.hasOwnProperty($2)) {
              return ($1 ? $1 : "rgba(") + CSS.Lists.colorNames[$2] + ($1 ? "" : ",1)");
            }

            return $1 + $2;
          });
        },

        /* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
         the targeted hook can be injected or extracted at its standard position. */
        cleanRootPropertyValue: function cleanRootPropertyValue(rootProperty, rootPropertyValue) {
          /* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
          if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
            rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
          }
          /* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
           default to the root's default value as defined in CSS.Hooks.templates. */

          /* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
           zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */


          if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
            rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
          }

          return rootPropertyValue;
        },

        /* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
        extractValue: function extractValue(fullHookName, rootPropertyValue) {
          var hookData = CSS.Hooks.registered[fullHookName];

          if (hookData) {
            var hookRoot = hookData[0],
                hookPosition = hookData[1];
            rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
            /* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */

            return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
          } else {
            /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
            return rootPropertyValue;
          }
        },

        /* Inject the hook's value into its root property's value. This is used to piece back together the root property
         once Velocity has updated one of its individually hooked values through tweening. */
        injectValue: function injectValue(fullHookName, hookValue, rootPropertyValue) {
          var hookData = CSS.Hooks.registered[fullHookName];

          if (hookData) {
            var hookRoot = hookData[0],
                hookPosition = hookData[1],
                rootPropertyValueParts,
                rootPropertyValueUpdated;
            rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
            /* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
             then reconstruct the rootPropertyValue string. */

            rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
            rootPropertyValueParts[hookPosition] = hookValue;
            rootPropertyValueUpdated = rootPropertyValueParts.join(" ");
            return rootPropertyValueUpdated;
          } else {
            /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
            return rootPropertyValue;
          }
        }
      },

      /*******************
       Normalizations
       *******************/

      /* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
       and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
      Normalizations: {
        /* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
         the targeted element (which may need to be queried), and the targeted property value. */
        registered: {
          clip: function clip(type, element, propertyValue) {
            switch (type) {
              case "name":
                return "clip";

              /* Clip needs to be unwrapped and stripped of its commas during extraction. */

              case "extract":
                var extracted;
                /* If Velocity also extracted this value, skip extraction. */

                if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
                  extracted = propertyValue;
                } else {
                  /* Remove the "rect()" wrapper. */
                  extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);
                  /* Strip off commas. */

                  extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
                }

                return extracted;

              /* Clip needs to be re-wrapped during injection. */

              case "inject":
                return "rect(" + propertyValue + ")";
            }
          },
          blur: function blur(type, element, propertyValue) {
            switch (type) {
              case "name":
                return Velocity.State.isFirefox ? "filter" : "-webkit-filter";

              case "extract":
                var extracted = parseFloat(propertyValue);
                /* If extracted is NaN, meaning the value isn't already extracted. */

                if (!(extracted || extracted === 0)) {
                  var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                  /* If the filter string had a blur component, return just the blur value and unit type. */

                  if (blurComponent) {
                    extracted = blurComponent[1];
                    /* If the component doesn't exist, default blur to 0. */
                  } else {
                    extracted = 0;
                  }
                }

                return extracted;

              /* Blur needs to be re-wrapped during injection. */

              case "inject":
                /* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
                if (!parseFloat(propertyValue)) {
                  return "none";
                } else {
                  return "blur(" + propertyValue + ")";
                }

            }
          },

          /* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
          opacity: function opacity(type, element, propertyValue) {
            if (IE <= 8) {
              switch (type) {
                case "name":
                  return "filter";

                case "extract":
                  /* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
                   Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
                  var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);

                  if (extracted) {
                    /* Convert to decimal value. */
                    propertyValue = extracted[1] / 100;
                  } else {
                    /* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
                    propertyValue = 1;
                  }

                  return propertyValue;

                case "inject":
                  /* Opacified elements are required to have their zoom property set to a non-zero value. */
                  element.style.zoom = 1;
                  /* Setting the filter property on elements with certain font property combinations can result in a
                   highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
                   value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */

                  if (parseFloat(propertyValue) >= 1) {
                    return "";
                  } else {
                    /* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
                    return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
                  }

              }
              /* With all other browsers, normalization is not required; return the same values that were passed in. */

            } else {
              switch (type) {
                case "name":
                  return "opacity";

                case "extract":
                  return propertyValue;

                case "inject":
                  return propertyValue;
              }
            }
          }
        },

        /*****************************
         Batched Registrations
         *****************************/

        /* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
        register: function register() {
          /*****************
           Transforms
           *****************/

          /* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
           so that they can be referenced in a properties map by their individual names. */

          /* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
           setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
           Transform setting is batched in this way to improve performance: the transform style only needs to be updated
           once when multiple transform subproperties are being animated simultaneously. */

          /* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
           transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
           from being normalized for these browsers so that tweening skips these properties altogether
           (since it will ignore them as being unsupported by the browser.) */
          if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
            /* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
             share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
            CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
          }

          for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
            /* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
             paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
            (function () {
              var transformName = CSS.Lists.transformsBase[i];

              CSS.Normalizations.registered[transformName] = function (type, element, propertyValue) {
                switch (type) {
                  /* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
                  case "name":
                    return "transform";

                  /* Transform values are cached onto a per-element transformCache object. */

                  case "extract":
                    /* If this transform has yet to be assigned a value, return its null value. */
                    if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
                      /* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
                      return /^scale/i.test(transformName) ? 1 : 0;
                      /* When transform values are set, they are wrapped in parentheses as per the CSS spec.
                       Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
                    }

                    return Data(element).transformCache[transformName].replace(/[()]/g, "");

                  case "inject":
                    var invalid = false;
                    /* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
                     Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */

                    /* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */

                    switch (transformName.substr(0, transformName.length - 1)) {
                      /* Whitelist unit types for each transform. */
                      case "translate":
                        invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
                        break;

                      /* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */

                      case "scal":
                      case "scale":
                        /* Chrome on Android has a bug in which scaled elements blur if their initial scale
                         value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
                         and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
                        if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
                          propertyValue = 1;
                        }

                        invalid = !/(\d)$/i.test(propertyValue);
                        break;

                      case "skew":
                        invalid = !/(deg|\d)$/i.test(propertyValue);
                        break;

                      case "rotate":
                        invalid = !/(deg|\d)$/i.test(propertyValue);
                        break;
                    }

                    if (!invalid) {
                      /* As per the CSS spec, wrap the value in parentheses. */
                      Data(element).transformCache[transformName] = "(" + propertyValue + ")";
                    }
                    /* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */


                    return Data(element).transformCache[transformName];
                }
              };
            })();
          }
          /*************
           Colors
           *************/

          /* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
           Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */


          for (var j = 0; j < CSS.Lists.colors.length; j++) {
            /* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
             (Otherwise, all functions would take the final for loop's colorName.) */
            (function () {
              var colorName = CSS.Lists.colors[j];
              /* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */

              CSS.Normalizations.registered[colorName] = function (type, element, propertyValue) {
                switch (type) {
                  case "name":
                    return colorName;

                  /* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */

                  case "extract":
                    var extracted;
                    /* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */

                    if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
                      extracted = propertyValue;
                    } else {
                      var converted,
                          colorNames = {
                        black: "rgb(0, 0, 0)",
                        blue: "rgb(0, 0, 255)",
                        gray: "rgb(128, 128, 128)",
                        green: "rgb(0, 128, 0)",
                        red: "rgb(255, 0, 0)",
                        white: "rgb(255, 255, 255)"
                      };
                      /* Convert color names to rgb. */

                      if (/^[A-z]+$/i.test(propertyValue)) {
                        if (colorNames[propertyValue] !== undefined) {
                          converted = colorNames[propertyValue];
                        } else {
                          /* If an unmatched color name is provided, default to black. */
                          converted = colorNames.black;
                        }
                        /* Convert hex values to rgb. */

                      } else if (CSS.RegEx.isHex.test(propertyValue)) {
                        converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
                        /* If the provided color doesn't match any of the accepted color formats, default to black. */
                      } else if (!/^rgba?\(/i.test(propertyValue)) {
                        converted = colorNames.black;
                      }
                      /* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
                       repeated spaces (in case the value included spaces to begin with). */


                      extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                    }
                    /* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */


                    if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
                      extracted += " 1";
                    }

                    return extracted;

                  case "inject":
                    /* If we have a pattern then it might already have the right values */
                    if (/^rgb/.test(propertyValue)) {
                      return propertyValue;
                    }
                    /* If this is IE<=8 and an alpha component exists, strip it off. */


                    if (IE <= 8) {
                      if (propertyValue.split(" ").length === 4) {
                        propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
                      }
                      /* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */

                    } else if (propertyValue.split(" ").length === 3) {
                      propertyValue += " 1";
                    }
                    /* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
                     on all values but the fourth (R, G, and B only accept whole numbers). */


                    return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                }
              };
            })();
          }
          /**************
           Dimensions
           **************/


          function augmentDimension(name, element, wantInner) {
            var isBorderBox = CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";

            if (isBorderBox === (wantInner || false)) {
              /* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */
              var i,
                  value,
                  augment = 0,
                  sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
                  fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];

              for (i = 0; i < fields.length; i++) {
                value = parseFloat(CSS.getPropertyValue(element, fields[i]));

                if (!isNaN(value)) {
                  augment += value;
                }
              }

              return wantInner ? -augment : augment;
            }

            return 0;
          }

          function getDimension(name, wantInner) {
            return function (type, element, propertyValue) {
              switch (type) {
                case "name":
                  return name;

                case "extract":
                  return parseFloat(propertyValue) + augmentDimension(name, element, wantInner);

                case "inject":
                  return parseFloat(propertyValue) - augmentDimension(name, element, wantInner) + "px";
              }
            };
          }

          CSS.Normalizations.registered.innerWidth = getDimension("width", true);
          CSS.Normalizations.registered.innerHeight = getDimension("height", true);
          CSS.Normalizations.registered.outerWidth = getDimension("width");
          CSS.Normalizations.registered.outerHeight = getDimension("height");
        }
      },

      /************************
       CSS Property Names
       ************************/
      Names: {
        /* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
         Camelcasing is used to normalize property names between and across calls. */
        camelCase: function camelCase(property) {
          return property.replace(/-(\w)/g, function (match, subMatch) {
            return subMatch.toUpperCase();
          });
        },

        /* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
        SVGAttribute: function SVGAttribute(property) {
          var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
          /* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */

          if (IE || Velocity.State.isAndroid && !Velocity.State.isChrome) {
            SVGAttributes += "|transform";
          }

          return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
        },

        /* Determine whether a property should be set with a vendor prefix. */

        /* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
         If the property is not at all supported by the browser, return a false flag. */
        prefixCheck: function prefixCheck(property) {
          /* If this property has already been checked, return the cached value. */
          if (Velocity.State.prefixMatches[property]) {
            return [Velocity.State.prefixMatches[property], true];
          } else {
            var vendors = ["", "Webkit", "Moz", "ms", "O"];

            for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
              var propertyPrefixed;

              if (i === 0) {
                propertyPrefixed = property;
              } else {
                /* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
                propertyPrefixed = vendors[i] + property.replace(/^\w/, function (match) {
                  return match.toUpperCase();
                });
              }
              /* Check if the browser supports this property as prefixed. */


              if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
                /* Cache the match. */
                Velocity.State.prefixMatches[property] = propertyPrefixed;
                return [propertyPrefixed, true];
              }
            }
            /* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */


            return [property, false];
          }
        }
      },

      /************************
       CSS Property Values
       ************************/
      Values: {
        /* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
        hexToRgb: function hexToRgb(hex) {
          var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
              rgbParts;
          hex = hex.replace(shortformRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
          });
          rgbParts = longformRegex.exec(hex);
          return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
        },
        isCSSNullValue: function isCSSNullValue(value) {
          /* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
           Thus, we check for both falsiness and these special strings. */

          /* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
           templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */

          /* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
          return !value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value);
        },

        /* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
        getUnitType: function getUnitType(property) {
          if (/^(rotate|skew)/i.test(property)) {
            return "deg";
          } else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
            /* The above properties are unitless. */
            return "";
          } else {
            /* Default to px for all other properties. */
            return "px";
          }
        },

        /* HTML elements default to an associated display type when they're not set to display:none. */

        /* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
        getDisplayType: function getDisplayType(element) {
          var tagName = element && element.tagName.toString().toLowerCase();

          if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
            return "inline";
          } else if (/^(li)$/i.test(tagName)) {
            return "list-item";
          } else if (/^(tr)$/i.test(tagName)) {
            return "table-row";
          } else if (/^(table)$/i.test(tagName)) {
            return "table";
          } else if (/^(tbody)$/i.test(tagName)) {
            return "table-row-group";
            /* Default to "block" when no match is found. */
          } else {
            return "block";
          }
        },

        /* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
        addClass: function addClass(element, className) {
          if (element) {
            if (element.classList) {
              element.classList.add(className);
            } else if (Type.isString(element.className)) {
              // Element.className is around 15% faster then set/getAttribute
              element.className += (element.className.length ? " " : "") + className;
            } else {
              // Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
              var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";
              element.setAttribute("class", currentClass + (currentClass ? " " : "") + className);
            }
          }
        },
        removeClass: function removeClass(element, className) {
          if (element) {
            if (element.classList) {
              element.classList.remove(className);
            } else if (Type.isString(element.className)) {
              // Element.className is around 15% faster then set/getAttribute
              // TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
              element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
            } else {
              // Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
              var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";
              element.setAttribute("class", currentClass.replace(new RegExp("(^|\s)" + className.split(" ").join("|") + "(\s|$)", "gi"), " "));
            }
          }
        }
      },

      /****************************
       Style Getting & Setting
       ****************************/

      /* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
      getPropertyValue: function getPropertyValue(element, property, rootPropertyValue, forceStyleLookup) {
        /* Get an element's computed property value. */

        /* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
         style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
         *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
        function computePropertyValue(element, property) {
          /* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
           element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
           offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
           We subtract border and padding to get the sum of interior + scrollbar. */
          var computedValue = 0;
          /* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
           of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
           codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
           Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */

          if (IE <= 8) {
            computedValue = $.css(element, property);
            /* GET */

            /* All other browsers support getComputedStyle. The returned live object reference is cached onto its
             associated element so that it does not need to be refetched upon every GET. */
          } else {
            /* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
             toggle display to the element type's default value. */
            var toggleDisplay = false;

            if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
              toggleDisplay = true;
              CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
            }

            var revertDisplay = function revertDisplay() {
              if (toggleDisplay) {
                CSS.setPropertyValue(element, "display", "none");
              }
            };

            if (!forceStyleLookup) {
              if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
                var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
                revertDisplay();
                return contentBoxHeight;
              } else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
                var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
                revertDisplay();
                return contentBoxWidth;
              }
            }

            var computedStyle;
            /* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
             of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */

            if (Data(element) === undefined) {
              computedStyle = window.getComputedStyle(element, null);
              /* GET */

              /* If the computedStyle object has yet to be cached, do so now. */
            } else if (!Data(element).computedStyle) {
              computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null);
              /* GET */

              /* If computedStyle is cached, use it. */
            } else {
              computedStyle = Data(element).computedStyle;
            }
            /* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
             Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
             So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */


            if (property === "borderColor") {
              property = "borderTopColor";
            }
            /* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
             instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */


            if (IE === 9 && property === "filter") {
              computedValue = computedStyle.getPropertyValue(property);
              /* GET */
            } else {
              computedValue = computedStyle[property];
            }
            /* Fall back to the property's style value (if defined) when computedValue returns nothing,
             which can happen when the element hasn't been painted. */


            if (computedValue === "" || computedValue === null) {
              computedValue = element.style[property];
            }

            revertDisplay();
          }
          /* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
           defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
           effect as being set to 0, so no conversion is necessary.) */

          /* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
           property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
           to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */


          if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
            var position = computePropertyValue(element, "position");
            /* GET */

            /* For absolute positioning, jQuery's $.position() only returns values for top and left;
             right and bottom will have their "auto" value reverted to 0. */

            /* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
             Not a big deal since we're currently in a GET batch anyway. */

            if (position === "fixed" || position === "absolute" && /top|left/i.test(property)) {
              /* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
              computedValue = $(element).position()[property] + "px";
              /* GET */
            }
          }

          return computedValue;
        }

        var propertyValue;
        /* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
         extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */

        if (CSS.Hooks.registered[property]) {
          var hook = property,
              hookRoot = CSS.Hooks.getRoot(hook);
          /* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
           query the DOM for the root property's value. */

          if (rootPropertyValue === undefined) {
            /* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
            rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]);
            /* GET */
          }
          /* If this root has a normalization registered, peform the associated normalization extraction. */


          if (CSS.Normalizations.registered[hookRoot]) {
            rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
          }
          /* Extract the hook's value. */


          propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);
          /* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
           normalize the property's name and value, and handle the special case of transforms. */

          /* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
           numerical and therefore do not require normalization extraction. */
        } else if (CSS.Normalizations.registered[property]) {
          var normalizedPropertyName, normalizedPropertyValue;
          normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);
          /* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
           At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
           This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
           thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */

          if (normalizedPropertyName !== "transform") {
            normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]);
            /* GET */

            /* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */

            if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
              normalizedPropertyValue = CSS.Hooks.templates[property][1];
            }
          }

          propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
        }
        /* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */


        if (!/^[\d-]/.test(propertyValue)) {
          /* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
           their HTML attribute values instead of their CSS style values. */
          var data = Data(element);

          if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
            /* Since the height/width attribute values must be set manually, they don't reflect computed values.
             Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
            if (/^(height|width)$/i.test(property)) {
              /* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
              try {
                propertyValue = element.getBBox()[property];
              } catch (error) {
                propertyValue = 0;
              }
              /* Otherwise, access the attribute value directly. */

            } else {
              propertyValue = element.getAttribute(property);
            }
          } else {
            propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]);
            /* GET */
          }
        }
        /* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
         convert CSS null-values to an integer of value 0. */


        if (CSS.Values.isCSSNullValue(propertyValue)) {
          propertyValue = 0;
        }

        if (Velocity.debug >= 2) {
          console.log("Get " + property + ": " + propertyValue);
        }

        return propertyValue;
      },

      /* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
      setPropertyValue: function setPropertyValue(element, property, propertyValue, rootPropertyValue, scrollData) {
        var propertyName = property;
        /* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */

        if (property === "scroll") {
          /* If a container option is present, scroll the container instead of the browser window. */
          if (scrollData.container) {
            scrollData.container["scroll" + scrollData.direction] = propertyValue;
            /* Otherwise, Velocity defaults to scrolling the browser window. */
          } else {
            if (scrollData.direction === "Left") {
              window.scrollTo(propertyValue, scrollData.alternateValue);
            } else {
              window.scrollTo(scrollData.alternateValue, propertyValue);
            }
          }
        } else {
          /* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
           Thus, for now, we merely cache transforms being SET. */
          if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
            /* Perform a normalization injection. */

            /* Note: The normalization logic handles the transformCache updating. */
            CSS.Normalizations.registered[property]("inject", element, propertyValue);
            propertyName = "transform";
            propertyValue = Data(element).transformCache[property];
          } else {
            /* Inject hooks. */
            if (CSS.Hooks.registered[property]) {
              var hookName = property,
                  hookRoot = CSS.Hooks.getRoot(property);
              /* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */

              rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot);
              /* GET */

              propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
              property = hookRoot;
            }
            /* Normalize names and values. */


            if (CSS.Normalizations.registered[property]) {
              propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
              property = CSS.Normalizations.registered[property]("name", element);
            }
            /* Assign the appropriate vendor prefix before performing an official style update. */


            propertyName = CSS.Names.prefixCheck(property)[0];
            /* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
             Try/catch is avoided for other browsers since it incurs a performance overhead. */

            if (IE <= 8) {
              try {
                element.style[propertyName] = propertyValue;
              } catch (error) {
                if (Velocity.debug) {
                  console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
                }
              }
              /* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */

              /* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */

            } else {
              var data = Data(element);

              if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
                /* Note: For SVG attributes, vendor-prefixed property names are never used. */

                /* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
                element.setAttribute(property, propertyValue);
              } else {
                element.style[propertyName] = propertyValue;
              }
            }

            if (Velocity.debug >= 2) {
              console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
            }
          }
        }
        /* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */


        return [propertyName, propertyValue];
      },

      /* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */

      /* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
      flushTransformCache: function flushTransformCache(element) {
        var transformString = "",
            data = Data(element);
        /* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
         (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */

        if ((IE || Velocity.State.isAndroid && !Velocity.State.isChrome) && data && data.isSVG) {
          /* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
           Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
          var getTransformFloat = function getTransformFloat(transformProperty) {
            return parseFloat(CSS.getPropertyValue(element, transformProperty));
          };
          /* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
           we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */


          var SVGTransforms = {
            translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
            skewX: [getTransformFloat("skewX")],
            skewY: [getTransformFloat("skewY")],

            /* If the scale property is set (non-1), use that value for the scaleX and scaleY values
             (this behavior mimics the result of animating all these properties at once on HTML elements). */
            scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],

            /* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
             defining the rotation's origin point. We ignore the origin values (default them to 0). */
            rotate: [getTransformFloat("rotateZ"), 0, 0]
          };
          /* Iterate through the transform properties in the user-defined property map order.
           (This mimics the behavior of non-SVG transform animation.) */

          $.each(Data(element).transformCache, function (transformName) {
            /* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
             properties so that they match up with SVG's accepted transform properties. */
            if (/^translate/i.test(transformName)) {
              transformName = "translate";
            } else if (/^scale/i.test(transformName)) {
              transformName = "scale";
            } else if (/^rotate/i.test(transformName)) {
              transformName = "rotate";
            }
            /* Check that we haven't yet deleted the property from the SVGTransforms container. */


            if (SVGTransforms[transformName]) {
              /* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
              transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";
              /* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
               re-insert the same master property if we encounter another one of its axis-specific properties. */

              delete SVGTransforms[transformName];
            }
          });
        } else {
          var transformValue, perspective;
          /* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */

          $.each(Data(element).transformCache, function (transformName) {
            transformValue = Data(element).transformCache[transformName];
            /* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */

            if (transformName === "transformPerspective") {
              perspective = transformValue;
              return true;
            }
            /* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */


            if (IE === 9 && transformName === "rotateZ") {
              transformName = "rotate";
            }

            transformString += transformName + transformValue + " ";
          });
          /* If present, set the perspective subproperty first. */

          if (perspective) {
            transformString = "perspective" + perspective + " " + transformString;
          }
        }

        CSS.setPropertyValue(element, "transform", transformString);
      }
    };
    /* Register hooks and normalizations. */

    CSS.Hooks.register();
    CSS.Normalizations.register();
    /* Allow hook setting in the same fashion as jQuery's $.css(). */

    Velocity.hook = function (elements, arg2, arg3) {
      var value;
      elements = sanitizeElements(elements);
      $.each(elements, function (i, element) {
        /* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
        if (Data(element) === undefined) {
          Velocity.init(element);
        }
        /* Get property value. If an element set was passed in, only return the value for the first element. */


        if (arg3 === undefined) {
          if (value === undefined) {
            value = CSS.getPropertyValue(element, arg2);
          }
          /* Set property value. */

        } else {
          /* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
          var adjustedSet = CSS.setPropertyValue(element, arg2, arg3);
          /* Transform properties don't automatically set. They have to be flushed to the DOM. */

          if (adjustedSet[0] === "transform") {
            Velocity.CSS.flushTransformCache(element);
          }

          value = adjustedSet;
        }
      });
      return value;
    };
    /*****************
     Animation
     *****************/


    var animate = function animate() {
      var opts;
      /******************
       Call Chain
       ******************/

      /* Logic for determining what to return to the call stack when exiting out of Velocity. */

      function getChain() {
        /* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
         default to null instead of returning the targeted elements so that utility function's return value is standardized. */
        if (isUtility) {
          return promiseData.promise || null;
          /* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
        } else {
          return elementsWrapped;
        }
      }
      /*************************
       Arguments Assignment
       *************************/

      /* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
       objects are defined on a container object that's passed in as Velocity's sole argument. */

      /* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */


      var syntacticSugar = arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || Type.isString(arguments[0].properties)),

      /* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
      isUtility,

      /* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
       passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
      elementsWrapped,
          argumentIndex;
      var elements, propertiesMap, options;
      /* Detect jQuery/Zepto elements being animated via the $.fn method. */

      if (Type.isWrapped(this)) {
        isUtility = false;
        argumentIndex = 0;
        elements = this;
        elementsWrapped = this;
        /* Otherwise, raw elements are being animated via the utility function. */
      } else {
        isUtility = true;
        argumentIndex = 1;
        elements = syntacticSugar ? arguments[0].elements || arguments[0].e : arguments[0];
      }
      /***************
       Promises
       ***************/


      var promiseData = {
        promise: null,
        resolver: null,
        rejecter: null
      };
      /* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
       promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
       method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
       call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */

      /* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
       triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
       grouped together for the purposes of resolving and rejecting a promise. */

      if (isUtility && Velocity.Promise) {
        promiseData.promise = new Velocity.Promise(function (resolve, reject) {
          promiseData.resolver = resolve;
          promiseData.rejecter = reject;
        });
      }

      if (syntacticSugar) {
        propertiesMap = arguments[0].properties || arguments[0].p;
        options = arguments[0].options || arguments[0].o;
      } else {
        propertiesMap = arguments[argumentIndex];
        options = arguments[argumentIndex + 1];
      }

      elements = sanitizeElements(elements);

      if (!elements) {
        if (promiseData.promise) {
          if (!propertiesMap || !options || options.promiseRejectEmpty !== false) {
            promiseData.rejecter();
          } else {
            promiseData.resolver();
          }
        }

        return;
      }
      /* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
       single raw DOM element is passed in (which doesn't contain a length property). */


      var elementsLength = elements.length,
          elementsIndex = 0;
      /***************************
       Argument Overloading
       ***************************/

      /* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
       Overloading is detected by checking for the absence of an object being passed into options. */

      /* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */

      if (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
        /* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
        var startingArgumentPosition = argumentIndex + 1;
        options = {};
        /* Iterate through all options arguments */

        for (var i = startingArgumentPosition; i < arguments.length; i++) {
          /* Treat a number as a duration. Parse it out. */

          /* Note: The following RegEx will return true if passed an array with a number as its first item.
           Thus, arrays are skipped from this check. */
          if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
            options.duration = arguments[i];
            /* Treat strings and arrays as easings. */
          } else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
            options.easing = arguments[i];
            /* Treat a function as a complete callback. */
          } else if (Type.isFunction(arguments[i])) {
            options.complete = arguments[i];
          }
        }
      }
      /*********************
       Action Detection
       *********************/

      /* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
       or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's
       first argument, the associated action is "start". Alternatively, "scroll", "reverse", "pause", "resume" or "stop" can be passed in 
       instead of a properties map. */


      var action;

      switch (propertiesMap) {
        case "scroll":
          action = "scroll";
          break;

        case "reverse":
          action = "reverse";
          break;

        case "pause":
          /*******************
           Action: Pause
           *******************/
          var currentTime = new Date().getTime();
          /* Handle delay timers */

          $.each(elements, function (i, element) {
            pauseDelayOnElement(element, currentTime);
          });
          /* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a 
           single element will cause any calls that containt tweens for that element to be paused/resumed
           as well. */

          /* Iterate through all calls and pause any that contain any of our elements */

          $.each(Velocity.State.calls, function (i, activeCall) {
            var found = false;
            /* Inactive calls are set to false by the logic inside completeCall(). Skip them. */

            if (activeCall) {
              /* Iterate through the active call's targeted elements. */
              $.each(activeCall[1], function (k, activeElement) {
                var queueName = options === undefined ? "" : options;

                if (queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)) {
                  return true;
                }
                /* Iterate through the calls targeted by the stop command. */


                $.each(elements, function (l, element) {
                  /* Check that this call was applied to the target element. */
                  if (element === activeElement) {
                    /* Set call to paused */
                    activeCall[5] = {
                      resume: false
                    };
                    /* Once we match an element, we can bounce out to the next call entirely */

                    found = true;
                    return false;
                  }
                });
                /* Proceed to check next call if we have already matched */

                if (found) {
                  return false;
                }
              });
            }
          });
          /* Since pause creates no new tweens, exit out of Velocity. */

          return getChain();

        case "resume":
          /*******************
           Action: Resume
           *******************/

          /* Handle delay timers */
          $.each(elements, function (i, element) {
            resumeDelayOnElement(element, currentTime);
          });
          /* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a 
           single element will cause any calls that containt tweens for that element to be paused/resumed
           as well. */

          /* Iterate through all calls and pause any that contain any of our elements */

          $.each(Velocity.State.calls, function (i, activeCall) {
            var found = false;
            /* Inactive calls are set to false by the logic inside completeCall(). Skip them. */

            if (activeCall) {
              /* Iterate through the active call's targeted elements. */
              $.each(activeCall[1], function (k, activeElement) {
                var queueName = options === undefined ? "" : options;

                if (queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)) {
                  return true;
                }
                /* Skip any calls that have never been paused */


                if (!activeCall[5]) {
                  return true;
                }
                /* Iterate through the calls targeted by the stop command. */


                $.each(elements, function (l, element) {
                  /* Check that this call was applied to the target element. */
                  if (element === activeElement) {
                    /* Flag a pause object to be resumed, which will occur during the next tick. In
                     addition, the pause object will at that time be deleted */
                    activeCall[5].resume = true;
                    /* Once we match an element, we can bounce out to the next call entirely */

                    found = true;
                    return false;
                  }
                });
                /* Proceed to check next call if we have already matched */

                if (found) {
                  return false;
                }
              });
            }
          });
          /* Since resume creates no new tweens, exit out of Velocity. */

          return getChain();

        case "finish":
        case "finishAll":
        case "stop":
          /*******************
           Action: Stop
           *******************/

          /* Clear the currently-active delay on each targeted element. */
          $.each(elements, function (i, element) {
            if (Data(element) && Data(element).delayTimer) {
              /* Stop the timer from triggering its cached next() function. */
              clearTimeout(Data(element).delayTimer.setTimeout);
              /* Manually call the next() function so that the subsequent queue items can progress. */

              if (Data(element).delayTimer.next) {
                Data(element).delayTimer.next();
              }

              delete Data(element).delayTimer;
            }
            /* If we want to finish everything in the queue, we have to iterate through it
             and call each function. This will make them active calls below, which will
             cause them to be applied via the duration setting. */


            if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
              /* Iterate through the items in the element's queue. */
              $.each($.queue(element, Type.isString(options) ? options : ""), function (_, item) {
                /* The queue array can contain an "inprogress" string, which we skip. */
                if (Type.isFunction(item)) {
                  item();
                }
              });
              /* Clearing the $.queue() array is achieved by resetting it to []. */

              $.queue(element, Type.isString(options) ? options : "", []);
            }
          });
          var callsToStop = [];
          /* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
           been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
           is stopped, the next item in its animation queue is immediately triggered. */

          /* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
           or a custom queue string can be passed in. */

          /* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
           regardless of the element's current queue state. */

          /* Iterate through every active call. */

          $.each(Velocity.State.calls, function (i, activeCall) {
            /* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
            if (activeCall) {
              /* Iterate through the active call's targeted elements. */
              $.each(activeCall[1], function (k, activeElement) {
                /* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
                 clear calls associated with the relevant queue. */

                /* Call stopping logic works as follows:
                 - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
                 - options === undefined --> stop current queue:"" call and all queue:false calls.
                 - options === false --> stop only queue:false calls.
                 - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
                var queueName = options === undefined ? "" : options;

                if (queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)) {
                  return true;
                }
                /* Iterate through the calls targeted by the stop command. */


                $.each(elements, function (l, element) {
                  /* Check that this call was applied to the target element. */
                  if (element === activeElement) {
                    /* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
                     due to the queue-clearing above. */
                    if (options === true || Type.isString(options)) {
                      /* Iterate through the items in the element's queue. */
                      $.each($.queue(element, Type.isString(options) ? options : ""), function (_, item) {
                        /* The queue array can contain an "inprogress" string, which we skip. */
                        if (Type.isFunction(item)) {
                          /* Pass the item's callback a flag indicating that we want to abort from the queue call.
                           (Specifically, the queue will resolve the call's associated promise then abort.)  */
                          item(null, true);
                        }
                      });
                      /* Clearing the $.queue() array is achieved by resetting it to []. */

                      $.queue(element, Type.isString(options) ? options : "", []);
                    }

                    if (propertiesMap === "stop") {
                      /* Since "reverse" uses cached start values (the previous call's endValues), these values must be
                       changed to reflect the final value that the elements were actually tweened to. */

                      /* Note: If only queue:false/queue:"custom" animations are currently running on an element, it won't have a tweensContainer
                       object. Also, queue:false/queue:"custom" animations can't be reversed. */
                      var data = Data(element);

                      if (data && data.tweensContainer && (queueName === true || queueName === "")) {
                        $.each(data.tweensContainer, function (m, activeTween) {
                          activeTween.endValue = activeTween.currentValue;
                        });
                      }

                      callsToStop.push(i);
                    } else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
                      /* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
                       they finish upon the next rAf tick then proceed with normal call completion logic. */
                      activeCall[2].duration = 1;
                    }
                  }
                });
              });
            }
          });
          /* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
           that the complete callback and display:none setting should be skipped since we're completing prematurely. */

          if (propertiesMap === "stop") {
            $.each(callsToStop, function (i, j) {
              completeCall(j, true);
            });

            if (promiseData.promise) {
              /* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
              promiseData.resolver(elements);
            }
          }
          /* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */


          return getChain();

        default:
          /* Treat a non-empty plain object as a literal properties map. */
          if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
            action = "start";
            /****************
             Redirects
             ****************/

            /* Check if a string matches a registered redirect (see Redirects above). */
          } else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
            opts = $.extend({}, options);
            var durationOriginal = opts.duration,
                delayOriginal = opts.delay || 0;
            /* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */

            if (opts.backwards === true) {
              elements = $.extend(true, [], elements).reverse();
            }
            /* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */


            $.each(elements, function (elementIndex, element) {
              /* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
              if (parseFloat(opts.stagger)) {
                opts.delay = delayOriginal + parseFloat(opts.stagger) * elementIndex;
              } else if (Type.isFunction(opts.stagger)) {
                opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
              }
              /* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
               the duration of each element's animation, using floors to prevent producing very short durations. */


              if (opts.drag) {
                /* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
                opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);
                /* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
                 B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
                 The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */

                opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
              }
              /* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
               reduce the opts checking logic required inside the redirect. */


              Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
            });
            /* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
             (The performance overhead up to this point is virtually non-existant.) */

            /* Note: The jQuery call chain is kept intact by returning the complete element set. */

            return getChain();
          } else {
            var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";

            if (promiseData.promise) {
              promiseData.rejecter(new Error(abortError));
            } else if (window.console) {
              console.log(abortError);
            }

            return getChain();
          }

      }
      /**************************
       Call-Wide Variables
       **************************/

      /* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
       being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
       avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
       conversion metrics across Velocity animations that are not immediately consecutively chained. */


      var callUnitConversionData = {
        lastParent: null,
        lastPosition: null,
        lastFontSize: null,
        lastPercentToPxWidth: null,
        lastPercentToPxHeight: null,
        lastEmToPx: null,
        remToPx: null,
        vwToPx: null,
        vhToPx: null
      };
      /* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
       Velocity.State.calls array that is processed during animation ticking. */

      var call = [];
      /************************
       Element Processing
       ************************/

      /* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
       1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
       2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
       3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
       `elementArrayIndex` allows passing index of the element in the original array to value functions.
       If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
       */

      function processElement(element, elementArrayIndex) {
        /*************************
         Part I: Pre-Queueing
         *************************/

        /***************************
         Element-Wide Variables
         ***************************/
        var
        /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
        opts = $.extend({}, Velocity.defaults, options),

        /* A container for the processed data associated with each property in the propertyMap.
         (Each property in the map produces its own "tween".) */
        tweensContainer = {},
            elementUnitConversionData;
        /******************
         Element Init
         ******************/

        if (Data(element) === undefined) {
          Velocity.init(element);
        }
        /******************
         Option: Delay
         ******************/

        /* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */

        /* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
         (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */


        if (parseFloat(opts.delay) && opts.queue !== false) {
          $.queue(element, opts.queue, function (next, clearQueue) {
            if (clearQueue === true) {
              /* Do not continue with animation queueing. */
              return true;
            }
            /* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */


            Velocity.velocityQueueEntryFlag = true;
            /* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
             The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command, and
             delayBegin/delayTime is used to ensure we can "pause" and "resume" a tween that is still mid-delay. */

            /* Temporarily store delayed elements to facilite access for global pause/resume */

            var callIndex = Velocity.State.delayedElements.count++;
            Velocity.State.delayedElements[callIndex] = element;

            var delayComplete = function (index) {
              return function () {
                /* Clear the temporary element */
                Velocity.State.delayedElements[index] = false;
                /* Finally, issue the call */

                next();
              };
            }(callIndex);

            Data(element).delayBegin = new Date().getTime();
            Data(element).delay = parseFloat(opts.delay);
            Data(element).delayTimer = {
              setTimeout: setTimeout(next, parseFloat(opts.delay)),
              next: delayComplete
            };
          });
        }
        /*********************
         Option: Duration
         *********************/

        /* Support for jQuery's named durations. */


        switch (opts.duration.toString().toLowerCase()) {
          case "fast":
            opts.duration = 200;
            break;

          case "normal":
            opts.duration = DURATION_DEFAULT;
            break;

          case "slow":
            opts.duration = 600;
            break;

          default:
            /* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
            opts.duration = parseFloat(opts.duration) || 1;
        }
        /************************
         Global Option: Mock
         ************************/


        if (Velocity.mock !== false) {
          /* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
           Alternatively, a multiplier can be passed in to time remap all delays and durations. */
          if (Velocity.mock === true) {
            opts.duration = opts.delay = 1;
          } else {
            opts.duration *= parseFloat(Velocity.mock) || 1;
            opts.delay *= parseFloat(Velocity.mock) || 1;
          }
        }
        /*******************
         Option: Easing
         *******************/


        opts.easing = getEasing(opts.easing, opts.duration);
        /**********************
         Option: Callbacks
         **********************/

        /* Callbacks must functions. Otherwise, default to null. */

        if (opts.begin && !Type.isFunction(opts.begin)) {
          opts.begin = null;
        }

        if (opts.progress && !Type.isFunction(opts.progress)) {
          opts.progress = null;
        }

        if (opts.complete && !Type.isFunction(opts.complete)) {
          opts.complete = null;
        }
        /*********************************
         Option: Display & Visibility
         *********************************/

        /* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */

        /* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */


        if (opts.display !== undefined && opts.display !== null) {
          opts.display = opts.display.toString().toLowerCase();
          /* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */

          if (opts.display === "auto") {
            opts.display = Velocity.CSS.Values.getDisplayType(element);
          }
        }

        if (opts.visibility !== undefined && opts.visibility !== null) {
          opts.visibility = opts.visibility.toString().toLowerCase();
        }
        /**********************
         Option: mobileHA
         **********************/

        /* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
         on animating elements. HA is removed from the element at the completion of its animation. */

        /* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */

        /* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */


        opts.mobileHA = opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread;
        /***********************
         Part II: Queueing
         ***********************/

        /* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
         In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */

        /* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
         the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */

        function buildQueue(next) {
          var data, lastTweensContainer;
          /*******************
           Option: Begin
           *******************/

          /* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */

          if (opts.begin && elementsIndex === 0) {
            /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
            try {
              opts.begin.call(elements, elements);
            } catch (error) {
              setTimeout(function () {
                throw error;
              }, 1);
            }
          }
          /*****************************************
           Tween Data Construction (for Scroll)
           *****************************************/

          /* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */


          if (action === "scroll") {
            /* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
            var scrollDirection = /^x$/i.test(opts.axis) ? "Left" : "Top",
                scrollOffset = parseFloat(opts.offset) || 0,
                scrollPositionCurrent,
                scrollPositionCurrentAlternate,
                scrollPositionEnd;
            /* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
             as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */

            if (opts.container) {
              /* Ensure that either a jQuery object or a raw DOM element was passed in. */
              if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
                /* Extract the raw DOM element from the jQuery wrapper. */
                opts.container = opts.container[0] || opts.container;
                /* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
                 (due to the user's natural interaction with the page). */

                scrollPositionCurrent = opts.container["scroll" + scrollDirection];
                /* GET */

                /* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
                 -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
                 the scroll container's current scroll position. */

                scrollPositionEnd = scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()] + scrollOffset;
                /* GET */

                /* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
              } else {
                opts.container = null;
              }
            } else {
              /* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
               the appropriate cached property names (which differ based on browser type). */
              scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]];
              /* GET */

              /* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */

              scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]];
              /* GET */

              /* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
               and therefore end values do not need to be compounded onto current values. */

              scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset;
              /* GET */
            }
            /* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */


            tweensContainer = {
              scroll: {
                rootPropertyValue: false,
                startValue: scrollPositionCurrent,
                currentValue: scrollPositionCurrent,
                endValue: scrollPositionEnd,
                unitType: "",
                easing: opts.easing,
                scrollData: {
                  container: opts.container,
                  direction: scrollDirection,
                  alternateValue: scrollPositionCurrentAlternate
                }
              },
              element: element
            };

            if (Velocity.debug) {
              console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
            }
            /******************************************
             Tween Data Construction (for Reverse)
             ******************************************/

            /* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
             that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
             the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */

            /* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */

            /* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
             there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
             as reverting to the element's values as they were prior to the previous *Velocity* call. */

          } else if (action === "reverse") {
            data = Data(element);
            /* Abort if there is no prior animation data to reverse to. */

            if (!data) {
              return;
            }

            if (!data.tweensContainer) {
              /* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
              $.dequeue(element, opts.queue);
              return;
            } else {
              /*********************
               Options Parsing
               *********************/

              /* If the element was hidden via the display option in the previous call,
               revert display to "auto" prior to reversal so that the element is visible again. */
              if (data.opts.display === "none") {
                data.opts.display = "auto";
              }

              if (data.opts.visibility === "hidden") {
                data.opts.visibility = "visible";
              }
              /* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
               Further, remove the previous call's callback options; typically, users do not want these to be refired. */


              data.opts.loop = false;
              data.opts.begin = null;
              data.opts.complete = null;
              /* Since we're extending an opts object that has already been extended with the defaults options object,
               we remove non-explicitly-defined properties that are auto-assigned values. */

              if (!options.easing) {
                delete opts.easing;
              }

              if (!options.duration) {
                delete opts.duration;
              }
              /* The opts object used for reversal is an extension of the options object optionally passed into this
               reverse call plus the options used in the previous Velocity call. */


              opts = $.extend({}, data.opts, opts);
              /*************************************
               Tweens Container Reconstruction
               *************************************/

              /* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */

              lastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);
              /* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */

              for (var lastTween in lastTweensContainer) {
                /* In addition to tween data, tweensContainers contain an element property that we ignore here. */
                if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
                  var lastStartValue = lastTweensContainer[lastTween].startValue;
                  lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
                  lastTweensContainer[lastTween].endValue = lastStartValue;
                  /* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
                   Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
                   The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */

                  if (!Type.isEmptyObject(options)) {
                    lastTweensContainer[lastTween].easing = opts.easing;
                  }

                  if (Velocity.debug) {
                    console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
                  }
                }
              }

              tweensContainer = lastTweensContainer;
            }
            /*****************************************
             Tween Data Construction (for Start)
             *****************************************/

          } else if (action === "start") {
            /*************************
             Value Transferring
             *************************/

            /* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
             while the element was in the process of being animated by Velocity, then this current call is safe to use
             the end values from the prior call as its start values. Velocity attempts to perform this value transfer
             process whenever possible in order to avoid requerying the DOM. */

            /* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
             then the DOM is queried for the element's current values as a last resort. */

            /* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */
            data = Data(element);
            /* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
             to transfer over end values to use as start values. If it's set to true and there is a previous
             Velocity call to pull values from, do so. */

            if (data && data.tweensContainer && data.isAnimating === true) {
              lastTweensContainer = data.tweensContainer;
            }
            /***************************
             Tween Data Calculation
             ***************************/

            /* This function parses property data and defaults endValue, easing, and startValue as appropriate. */

            /* Property map values can either take the form of 1) a single value representing the end value,
             or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
             The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
             the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */


            var parsePropertyValue = function parsePropertyValue(valueData, skipResolvingEasing) {
              var endValue, easing, startValue;
              /* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */

              if (Type.isFunction(valueData)) {
                valueData = valueData.call(element, elementArrayIndex, elementsLength);
              }
              /* Handle the array format, which can be structured as one of three potential overloads:
               A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */


              if (Type.isArray(valueData)) {
                /* endValue is always the first item in the array. Don't bother validating endValue's value now
                 since the ensuing property cycling logic does that. */
                endValue = valueData[0];
                /* Two-item array format: If the second item is a number, function, or hex string, treat it as a
                 start value since easings can only be non-hex strings or arrays. */

                if (!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1]) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
                  startValue = valueData[1];
                  /* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */
                } else if (Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]] || Type.isArray(valueData[1])) {
                  easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);
                  /* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */

                  startValue = valueData[2];
                } else {
                  startValue = valueData[1] || valueData[2];
                }
                /* Handle the single-value format. */

              } else {
                endValue = valueData;
              }
              /* Default to the call's easing if a per-property easing type was not defined. */


              if (!skipResolvingEasing) {
                easing = easing || opts.easing;
              }
              /* If functions were passed in as values, pass the function the current element as its context,
               plus the element's index and the element set's size as arguments. Then, assign the returned value. */


              if (Type.isFunction(endValue)) {
                endValue = endValue.call(element, elementArrayIndex, elementsLength);
              }

              if (Type.isFunction(startValue)) {
                startValue = startValue.call(element, elementArrayIndex, elementsLength);
              }
              /* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */


              return [endValue || 0, easing, startValue];
            };

            var fixPropertyValue = function fixPropertyValue(property, valueData) {
              /* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
              var rootProperty = CSS.Hooks.getRoot(property),
                  rootPropertyValue = false,

              /* Parse out endValue, easing, and startValue from the property's data. */
              endValue = valueData[0],
                  easing = valueData[1],
                  startValue = valueData[2],
                  pattern;
              /**************************
               Start Value Sourcing
               **************************/

              /* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
               inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
               Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */

              /* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
               there is no way to check for their explicit browser support, and so we skip skip this check for them. */

              if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
                if (Velocity.debug) {
                  console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
                }

                return;
              }
              /* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
               animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
               a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */


              if ((opts.display !== undefined && opts.display !== null && opts.display !== "none" || opts.visibility !== undefined && opts.visibility !== "hidden") && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
                startValue = 0;
              }
              /* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
               for all of the current call's properties that were *also* animated in the previous call. */

              /* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */


              if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
                if (startValue === undefined) {
                  startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
                }
                /* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
                 instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
                 attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */


                rootPropertyValue = data.rootPropertyValueCache[rootProperty];
                /* If values were not transferred from a previous Velocity call, query the DOM as needed. */
              } else {
                /* Handle hooked properties. */
                if (CSS.Hooks.registered[property]) {
                  if (startValue === undefined) {
                    rootPropertyValue = CSS.getPropertyValue(element, rootProperty);
                    /* GET */

                    /* Note: The following getPropertyValue() call does not actually trigger a DOM query;
                     getPropertyValue() will extract the hook from rootPropertyValue. */

                    startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
                    /* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
                     just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
                     root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
                     to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
                  } else {
                    /* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
                    rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
                  }
                  /* Handle non-hooked properties that haven't already been defined via forcefeeding. */

                } else if (startValue === undefined) {
                  startValue = CSS.getPropertyValue(element, property);
                  /* GET */
                }
              }
              /**************************
               Value Data Extraction
               **************************/


              var separatedValue,
                  endValueUnitType,
                  startValueUnitType,
                  operator = false;
              /* Separates a property value into its numeric value and its unit type. */

              var separateValue = function separateValue(property, value) {
                var unitType, numericValue;
                numericValue = (value || "0").toString().toLowerCase()
                /* Match the unit type at the end of the value. */
                .replace(/[%A-z]+$/, function (match) {
                  /* Grab the unit type. */
                  unitType = match;
                  /* Strip the unit type off of value. */

                  return "";
                });
                /* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */

                if (!unitType) {
                  unitType = CSS.Values.getUnitType(property);
                }

                return [numericValue, unitType];
              };

              if (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {
                pattern = "";
                var iStart = 0,
                    // index in startValue
                iEnd = 0,
                    // index in endValue
                aStart = [],
                    // array of startValue numbers
                aEnd = [],
                    // array of endValue numbers
                inCalc = 0,
                    // Keep track of being inside a "calc()" so we don't duplicate it
                inRGB = 0,
                    // Keep track of being inside an RGB as we can't use fractional values
                inRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel

                startValue = CSS.Hooks.fixColors(startValue);
                endValue = CSS.Hooks.fixColors(endValue);

                while (iStart < startValue.length && iEnd < endValue.length) {
                  var cStart = startValue[iStart],
                      cEnd = endValue[iEnd];

                  if (/[\d\.-]/.test(cStart) && /[\d\.-]/.test(cEnd)) {
                    var tStart = cStart,
                        // temporary character buffer
                    tEnd = cEnd,
                        // temporary character buffer
                    dotStart = ".",
                        // Make sure we can only ever match a single dot in a decimal
                    dotEnd = "."; // Make sure we can only ever match a single dot in a decimal

                    while (++iStart < startValue.length) {
                      cStart = startValue[iStart];

                      if (cStart === dotStart) {
                        dotStart = ".."; // Can never match two characters
                      } else if (!/\d/.test(cStart)) {
                        break;
                      }

                      tStart += cStart;
                    }

                    while (++iEnd < endValue.length) {
                      cEnd = endValue[iEnd];

                      if (cEnd === dotEnd) {
                        dotEnd = ".."; // Can never match two characters
                      } else if (!/\d/.test(cEnd)) {
                        break;
                      }

                      tEnd += cEnd;
                    }

                    var uStart = CSS.Hooks.getUnit(startValue, iStart),
                        // temporary unit type
                    uEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type

                    iStart += uStart.length;
                    iEnd += uEnd.length;

                    if (uStart === uEnd) {
                      // Same units
                      if (tStart === tEnd) {
                        // Same numbers, so just copy over
                        pattern += tStart + uStart;
                      } else {
                        // Different numbers, so store them
                        pattern += "{" + aStart.length + (inRGB ? "!" : "") + "}" + uStart;
                        aStart.push(parseFloat(tStart));
                        aEnd.push(parseFloat(tEnd));
                      }
                    } else {
                      // Different units, so put into a "calc(from + to)" and animate each side to/from zero
                      var nStart = parseFloat(tStart),
                          nEnd = parseFloat(tEnd);
                      pattern += (inCalc < 5 ? "calc" : "") + "(" + (nStart ? "{" + aStart.length + (inRGB ? "!" : "") + "}" : "0") + uStart + " + " + (nEnd ? "{" + (aStart.length + (nStart ? 1 : 0)) + (inRGB ? "!" : "") + "}" : "0") + uEnd + ")";

                      if (nStart) {
                        aStart.push(nStart);
                        aEnd.push(0);
                      }

                      if (nEnd) {
                        aStart.push(0);
                        aEnd.push(nEnd);
                      }
                    }
                  } else if (cStart === cEnd) {
                    pattern += cStart;
                    iStart++;
                    iEnd++; // Keep track of being inside a calc()

                    if (inCalc === 0 && cStart === "c" || inCalc === 1 && cStart === "a" || inCalc === 2 && cStart === "l" || inCalc === 3 && cStart === "c" || inCalc >= 4 && cStart === "(") {
                      inCalc++;
                    } else if (inCalc && inCalc < 5 || inCalc >= 4 && cStart === ")" && --inCalc < 5) {
                      inCalc = 0;
                    } // Keep track of being inside an rgb() / rgba()


                    if (inRGB === 0 && cStart === "r" || inRGB === 1 && cStart === "g" || inRGB === 2 && cStart === "b" || inRGB === 3 && cStart === "a" || inRGB >= 3 && cStart === "(") {
                      if (inRGB === 3 && cStart === "a") {
                        inRGBA = 1;
                      }

                      inRGB++;
                    } else if (inRGBA && cStart === ",") {
                      if (++inRGBA > 3) {
                        inRGB = inRGBA = 0;
                      }
                    } else if (inRGBA && inRGB < (inRGBA ? 5 : 4) || inRGB >= (inRGBA ? 4 : 3) && cStart === ")" && --inRGB < (inRGBA ? 5 : 4)) {
                      inRGB = inRGBA = 0;
                    }
                  } else {
                    inCalc = 0; // TODO: changing units, fixing colours

                    break;
                  }
                }

                if (iStart !== startValue.length || iEnd !== endValue.length) {
                  if (Velocity.debug) {
                    console.error("Trying to pattern match mis-matched strings [\"" + endValue + "\", \"" + startValue + "\"]");
                  }

                  pattern = undefined;
                }

                if (pattern) {
                  if (aStart.length) {
                    if (Velocity.debug) {
                      console.log("Pattern found \"" + pattern + "\" -> ", aStart, aEnd, "[" + startValue + "," + endValue + "]");
                    }

                    startValue = aStart;
                    endValue = aEnd;
                    endValueUnitType = startValueUnitType = "";
                  } else {
                    pattern = undefined;
                  }
                }
              }

              if (!pattern) {
                /* Separate startValue. */
                separatedValue = separateValue(property, startValue);
                startValue = separatedValue[0];
                startValueUnitType = separatedValue[1];
                /* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */

                separatedValue = separateValue(property, endValue);
                endValue = separatedValue[0].replace(/^([+-\/*])=/, function (match, subMatch) {
                  operator = subMatch;
                  /* Strip the operator off of the value. */

                  return "";
                });
                endValueUnitType = separatedValue[1];
                /* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */

                startValue = parseFloat(startValue) || 0;
                endValue = parseFloat(endValue) || 0;
                /***************************************
                 Property-Specific Value Conversion
                 ***************************************/

                /* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */

                if (endValueUnitType === "%") {
                  /* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
                   which is identical to the em unit's behavior, so we piggyback off of that. */
                  if (/^(fontSize|lineHeight)$/.test(property)) {
                    /* Convert % into an em decimal value. */
                    endValue = endValue / 100;
                    endValueUnitType = "em";
                    /* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
                  } else if (/^scale/.test(property)) {
                    endValue = endValue / 100;
                    endValueUnitType = "";
                    /* For RGB components, take the defined percentage of 255 and strip off the unit type. */
                  } else if (/(Red|Green|Blue)$/i.test(property)) {
                    endValue = endValue / 100 * 255;
                    endValueUnitType = "";
                  }
                }
              }
              /***************************
               Unit Ratio Calculation
               ***************************/

              /* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
               %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
               for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
               from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
               1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
               2) Converting startValue into the same unit of measurement as endValue based on these ratios. */

              /* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
               setting values with the target unit type then comparing the returned pixel value. */

              /* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
               of batching the SETs and GETs together upfront outweights the potential overhead
               of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */

              /* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */


              var calculateUnitRatios = function calculateUnitRatios() {
                /************************
                 Same Ratio Checks
                 ************************/

                /* The properties below are used to determine whether the element differs sufficiently from this call's
                 previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
                 of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
                 this is done to minimize DOM querying. */
                var sameRatioIndicators = {
                  myParent: element.parentNode || document.body,

                  /* GET */
                  position: CSS.getPropertyValue(element, "position"),

                  /* GET */
                  fontSize: CSS.getPropertyValue(element, "fontSize")
                  /* GET */

                },

                /* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
                samePercentRatio = sameRatioIndicators.position === callUnitConversionData.lastPosition && sameRatioIndicators.myParent === callUnitConversionData.lastParent,

                /* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
                sameEmRatio = sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize;
                /* Store these ratio indicators call-wide for the next element to compare against. */

                callUnitConversionData.lastParent = sameRatioIndicators.myParent;
                callUnitConversionData.lastPosition = sameRatioIndicators.position;
                callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;
                /***************************
                 Element-Specific Units
                 ***************************/

                /* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
                 of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */

                var measurement = 100,
                    unitRatios = {};

                if (!sameEmRatio || !samePercentRatio) {
                  var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");
                  Velocity.init(dummy);
                  sameRatioIndicators.myParent.appendChild(dummy);
                  /* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
                   Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */

                  /* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */

                  $.each(["overflow", "overflowX", "overflowY"], function (i, property) {
                    Velocity.CSS.setPropertyValue(dummy, property, "hidden");
                  });
                  Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
                  Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
                  Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");
                  /* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */

                  $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (i, property) {
                    Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
                  });
                  /* paddingLeft arbitrarily acts as our proxy property for the em ratio. */

                  Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");
                  /* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */

                  unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement;
                  /* GET */

                  unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement;
                  /* GET */

                  unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement;
                  /* GET */

                  sameRatioIndicators.myParent.removeChild(dummy);
                } else {
                  unitRatios.emToPx = callUnitConversionData.lastEmToPx;
                  unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
                  unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
                }
                /***************************
                 Element-Agnostic Units
                 ***************************/

                /* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
                 once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
                 that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
                 so we calculate it now. */


                if (callUnitConversionData.remToPx === null) {
                  /* Default to browsers' default fontSize of 16px in the case of 0. */
                  callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16;
                  /* GET */
                }
                /* Similarly, viewport units are %-relative to the window's inner dimensions. */


                if (callUnitConversionData.vwToPx === null) {
                  callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100;
                  /* GET */

                  callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100;
                  /* GET */
                }

                unitRatios.remToPx = callUnitConversionData.remToPx;
                unitRatios.vwToPx = callUnitConversionData.vwToPx;
                unitRatios.vhToPx = callUnitConversionData.vhToPx;

                if (Velocity.debug >= 1) {
                  console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
                }

                return unitRatios;
              };
              /********************
               Unit Conversion
               ********************/

              /* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */


              if (/[\/*]/.test(operator)) {
                endValueUnitType = startValueUnitType;
                /* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
                 is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
                 on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
                 would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */

                /* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
              } else if (startValueUnitType !== endValueUnitType && startValue !== 0) {
                /* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */

                /* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
                 match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
                 which remains past the point of the animation's completion. */
                if (endValue === 0) {
                  endValueUnitType = startValueUnitType;
                } else {
                  /* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
                   If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
                  elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();
                  /* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */

                  /* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */

                  var axis = /margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x" ? "x" : "y";
                  /* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
                   1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */

                  switch (startValueUnitType) {
                    case "%":
                      /* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
                       Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
                       to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
                      startValue *= axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight;
                      break;

                    case "px":
                      /* px acts as our midpoint in the unit conversion process; do nothing. */
                      break;

                    default:
                      startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
                  }
                  /* Invert the px ratios to convert into to the target unit. */


                  switch (endValueUnitType) {
                    case "%":
                      startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
                      break;

                    case "px":
                      /* startValue is already in px, do nothing; we're done. */
                      break;

                    default:
                      startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
                  }
                }
              }
              /*********************
               Relative Values
               *********************/

              /* Operator logic must be performed last since it requires unit-normalized start and end values. */

              /* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
               to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
               50 points is added on top of the current % value. */


              switch (operator) {
                case "+":
                  endValue = startValue + endValue;
                  break;

                case "-":
                  endValue = startValue - endValue;
                  break;

                case "*":
                  endValue = startValue * endValue;
                  break;

                case "/":
                  endValue = startValue / endValue;
                  break;
              }
              /**************************
               tweensContainer Push
               **************************/

              /* Construct the per-property tween object, and push it to the element's tweensContainer. */


              tweensContainer[property] = {
                rootPropertyValue: rootPropertyValue,
                startValue: startValue,
                currentValue: startValue,
                endValue: endValue,
                unitType: endValueUnitType,
                easing: easing
              };

              if (pattern) {
                tweensContainer[property].pattern = pattern;
              }

              if (Velocity.debug) {
                console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
              }
            };
            /* Create a tween out of each property, and append its associated data to tweensContainer. */


            for (var property in propertiesMap) {
              if (!propertiesMap.hasOwnProperty(property)) {
                continue;
              }
              /* The original property name's format must be used for the parsePropertyValue() lookup,
               but we then use its camelCase styling to normalize it for manipulation. */


              var propertyName = CSS.Names.camelCase(property),
                  valueData = parsePropertyValue(propertiesMap[property]);
              /* Find shorthand color properties that have been passed a hex string. */

              /* Would be quicker to use CSS.Lists.colors.includes() if possible */

              if (_inArray(CSS.Lists.colors, propertyName)) {
                /* Parse the value data for each shorthand. */
                var endValue = valueData[0],
                    easing = valueData[1],
                    startValue = valueData[2];

                if (CSS.RegEx.isHex.test(endValue)) {
                  /* Convert the hex strings into their RGB component arrays. */
                  var colorComponents = ["Red", "Green", "Blue"],
                      endValueRGB = CSS.Values.hexToRgb(endValue),
                      startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;
                  /* Inject the RGB component tweens into propertiesMap. */

                  for (var i = 0; i < colorComponents.length; i++) {
                    var dataArray = [endValueRGB[i]];

                    if (easing) {
                      dataArray.push(easing);
                    }

                    if (startValueRGB !== undefined) {
                      dataArray.push(startValueRGB[i]);
                    }

                    fixPropertyValue(propertyName + colorComponents[i], dataArray);
                  }
                  /* If we have replaced a shortcut color value then don't update the standard property name */


                  continue;
                }
              }

              fixPropertyValue(propertyName, valueData);
            }
            /* Along with its property data, store a reference to the element itself onto tweensContainer. */


            tweensContainer.element = element;
          }
          /*****************
           Call Push
           *****************/

          /* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
           being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */


          if (tweensContainer.element) {
            /* Apply the "velocity-animating" indicator class. */
            CSS.Values.addClass(element, "velocity-animating");
            /* The call array houses the tweensContainers for each element being animated in the current call. */

            call.push(tweensContainer);
            data = Data(element);

            if (data) {
              /* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
              if (opts.queue === "") {
                data.tweensContainer = tweensContainer;
                data.opts = opts;
              }
              /* Switch on the element's animating flag. */


              data.isAnimating = true;
            }
            /* Once the final element in this call's element set has been processed, push the call array onto
             Velocity.State.calls for the animation tick to immediately begin processing. */


            if (elementsIndex === elementsLength - 1) {
              /* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
               Anything on this call container is subjected to tick() processing. */
              Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);
              /* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */

              if (Velocity.State.isTicking === false) {
                Velocity.State.isTicking = true;
                /* Start the tick loop. */

                tick();
              }
            } else {
              elementsIndex++;
            }
          }
        }
        /* When the queue option is set to false, the call skips the element's queue and fires immediately. */


        if (opts.queue === false) {
          /* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
           we manually inject the delay property here with an explicit setTimeout. */
          if (opts.delay) {
            /* Temporarily store delayed elements to facilitate access for global pause/resume */
            var callIndex = Velocity.State.delayedElements.count++;
            Velocity.State.delayedElements[callIndex] = element;

            var delayComplete = function (index) {
              return function () {
                /* Clear the temporary element */
                Velocity.State.delayedElements[index] = false;
                /* Finally, issue the call */

                buildQueue();
              };
            }(callIndex);

            Data(element).delayBegin = new Date().getTime();
            Data(element).delay = parseFloat(opts.delay);
            Data(element).delayTimer = {
              setTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),
              next: delayComplete
            };
          } else {
            buildQueue();
          }
          /* Otherwise, the call undergoes element queueing as normal. */

          /* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */

        } else {
          $.queue(element, opts.queue, function (next, clearQueue) {
            /* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
             so it's fine if this is repeatedly triggered for each element in the associated call.) */
            if (clearQueue === true) {
              if (promiseData.promise) {
                promiseData.resolver(elements);
              }
              /* Do not continue with animation queueing. */


              return true;
            }
            /* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
             See completeCall() for further details. */


            Velocity.velocityQueueEntryFlag = true;
            buildQueue(next);
          });
        }
        /*********************
         Auto-Dequeuing
         *********************/

        /* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
         must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
         for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
         queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
         first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */

        /* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
         each one of the elements in the set has reached the end of its individually pre-existing queue chain. */

        /* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
         Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */


        if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
          $.dequeue(element);
        }
      }
      /**************************
       Element Set Iteration
       **************************/

      /* If the "nodeType" property exists on the elements variable, we're animating a single element.
       Place it in an array so that $.each() can iterate over it. */


      $.each(elements, function (i, element) {
        /* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
        if (Type.isNode(element)) {
          processElement(element, i);
        }
      });
      /******************
       Option: Loop
       ******************/

      /* The loop option accepts an integer indicating how many times the element should loop between the values in the
       current call's properties map and the element's property values prior to this call. */

      /* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
       to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
       which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */

      opts = $.extend({}, Velocity.defaults, options);
      opts.loop = parseInt(opts.loop, 10);
      var reverseCallsCount = opts.loop * 2 - 1;

      if (opts.loop) {
        /* Double the loop count to convert it into its appropriate number of "reverse" calls.
         Subtract 1 from the resulting value since the current call is included in the total alternation count. */
        for (var x = 0; x < reverseCallsCount; x++) {
          /* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
           isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
           call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
          var reverseOptions = {
            delay: opts.delay,
            progress: opts.progress
          };
          /* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
           so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */

          if (x === reverseCallsCount - 1) {
            reverseOptions.display = opts.display;
            reverseOptions.visibility = opts.visibility;
            reverseOptions.complete = opts.complete;
          }

          animate(elements, "reverse", reverseOptions);
        }
      }
      /***************
       Chaining
       ***************/

      /* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */


      return getChain();
    };
    /* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */


    Velocity = $.extend(animate, Velocity);
    /* For legacy support, also expose the literal animate method. */

    Velocity.animate = animate;
    /**************
     Timing
     **************/

    /* Ticker function. */

    var ticker = window.requestAnimationFrame || rAFShim;
    /* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
     To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
     devices to avoid wasting battery power on inactive tabs. */

    /* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */

    if (!Velocity.State.isMobile && document.hidden !== undefined) {
      var updateTicker = function updateTicker() {
        /* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
        if (document.hidden) {
          ticker = function ticker(callback) {
            /* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
            return setTimeout(function () {
              callback(true);
            }, 16);
          };
          /* The rAF loop has been paused by the browser, so we manually restart the tick. */


          tick();
        } else {
          ticker = window.requestAnimationFrame || rAFShim;
        }
      };
      /* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */


      updateTicker();
      /* And then run check again every time visibility changes */

      document.addEventListener("visibilitychange", updateTicker);
    }
    /************
     Tick
     ************/

    /* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */


    function tick(timestamp) {
      /* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
       We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
       the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
       calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
       the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
       by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
      if (timestamp) {
        /* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is
         under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.
         We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */
        var timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();
        /********************
         Call Iteration
         ********************/

        var callsLength = Velocity.State.calls.length;
        /* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
         when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
         has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */

        if (callsLength > 10000) {
          Velocity.State.calls = compactSparseArray(Velocity.State.calls);
          callsLength = Velocity.State.calls.length;
        }
        /* Iterate through each active call. */


        for (var i = 0; i < callsLength; i++) {
          /* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
          if (!Velocity.State.calls[i]) {
            continue;
          }
          /************************
           Call-Wide Variables
           ************************/


          var callContainer = Velocity.State.calls[i],
              call = callContainer[0],
              opts = callContainer[2],
              timeStart = callContainer[3],
              firstTick = !timeStart,
              tweenDummyValue = null,
              pauseObject = callContainer[5],
              millisecondsEllapsed = callContainer[6];
          /* If timeStart is undefined, then this is the first time that this call has been processed by tick().
           We assign timeStart now so that its value is as close to the real animation start time as possible.
           (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
           between that time and now would cause the first few frames of the tween to be skipped since
           percentComplete is calculated relative to timeStart.) */

          /* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
           first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
           same style value as the element's current value. */

          if (!timeStart) {
            timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
          }
          /* If a pause object is present, skip processing unless it has been set to resume */


          if (pauseObject) {
            if (pauseObject.resume === true) {
              /* Update the time start to accomodate the paused completion amount */
              timeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);
              /* Remove pause object after processing */

              callContainer[5] = null;
            } else {
              continue;
            }
          }

          millisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;
          /* The tween's completion percentage is relative to the tween's start time, not the tween's start value
           (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
           Accordingly, we ensure that percentComplete does not exceed 1. */

          var percentComplete = Math.min(millisecondsEllapsed / opts.duration, 1);
          /**********************
           Element Iteration
           **********************/

          /* For every call, iterate through each of the elements in its set. */

          for (var j = 0, callLength = call.length; j < callLength; j++) {
            var tweensContainer = call[j],
                element = tweensContainer.element;
            /* Check to see if this element has been deleted midway through the animation by checking for the
             continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */

            if (!Data(element)) {
              continue;
            }

            var transformPropertyExists = false;
            /**********************************
             Display & Visibility Toggling
             **********************************/

            /* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
             (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */

            if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
              if (opts.display === "flex") {
                var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                $.each(flexValues, function (i, flexValue) {
                  CSS.setPropertyValue(element, "display", flexValue);
                });
              }

              CSS.setPropertyValue(element, "display", opts.display);
            }
            /* Same goes with the visibility option, but its "none" equivalent is "hidden". */


            if (opts.visibility !== undefined && opts.visibility !== "hidden") {
              CSS.setPropertyValue(element, "visibility", opts.visibility);
            }
            /************************
             Property Iteration
             ************************/

            /* For every element, iterate through each property. */


            for (var property in tweensContainer) {
              /* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
              if (tweensContainer.hasOwnProperty(property) && property !== "element") {
                var tween = tweensContainer[property],
                    currentValue,

                /* Easing can either be a pre-genereated function or a string that references a pre-registered easing
                 on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
                easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;
                /******************************
                 Current Value Calculation
                 ******************************/

                if (Type.isString(tween.pattern)) {
                  var patternReplace = percentComplete === 1 ? function ($0, index, round) {
                    var result = tween.endValue[index];
                    return round ? Math.round(result) : result;
                  } : function ($0, index, round) {
                    var startValue = tween.startValue[index],
                        tweenDelta = tween.endValue[index] - startValue,
                        result = startValue + tweenDelta * easing(percentComplete, opts, tweenDelta);
                    return round ? Math.round(result) : result;
                  };
                  currentValue = tween.pattern.replace(/{(\d+)(!)?}/g, patternReplace);
                } else if (percentComplete === 1) {
                  /* If this is the last tick pass (if we've reached 100% completion for this tween),
                   ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
                  currentValue = tween.endValue;
                } else {
                  /* Otherwise, calculate currentValue based on the current delta from startValue. */
                  var tweenDelta = tween.endValue - tween.startValue;
                  currentValue = tween.startValue + tweenDelta * easing(percentComplete, opts, tweenDelta);
                  /* If no value change is occurring, don't proceed with DOM updating. */
                }

                if (!firstTick && currentValue === tween.currentValue) {
                  continue;
                }

                tween.currentValue = currentValue;
                /* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
                 it can be passed into the progress callback. */

                if (property === "tween") {
                  tweenDummyValue = currentValue;
                } else {
                  /******************
                   Hooks: Part I
                   ******************/
                  var hookRoot;
                  /* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
                   for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
                   rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
                   updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
                   subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */

                  if (CSS.Hooks.registered[property]) {
                    hookRoot = CSS.Hooks.getRoot(property);
                    var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];

                    if (rootPropertyValueCache) {
                      tween.rootPropertyValue = rootPropertyValueCache;
                    }
                  }
                  /*****************
                   DOM Update
                   *****************/

                  /* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */

                  /* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */


                  var adjustedSetData = CSS.setPropertyValue(element,
                  /* SET */
                  property, tween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? "" : tween.unitType), tween.rootPropertyValue, tween.scrollData);
                  /*******************
                   Hooks: Part II
                   *******************/

                  /* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */

                  if (CSS.Hooks.registered[property]) {
                    /* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
                    if (CSS.Normalizations.registered[hookRoot]) {
                      Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
                    } else {
                      Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
                    }
                  }
                  /***************
                   Transforms
                   ***************/

                  /* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */


                  if (adjustedSetData[0] === "transform") {
                    transformPropertyExists = true;
                  }
                }
              }
            }
            /****************
             mobileHA
             ****************/

            /* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
             It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */


            if (opts.mobileHA) {
              /* Don't set the null transform hack if we've already done so. */
              if (Data(element).transformCache.translate3d === undefined) {
                /* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
                Data(element).transformCache.translate3d = "(0px, 0px, 0px)";
                transformPropertyExists = true;
              }
            }

            if (transformPropertyExists) {
              CSS.flushTransformCache(element);
            }
          }
          /* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
           Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */


          if (opts.display !== undefined && opts.display !== "none") {
            Velocity.State.calls[i][2].display = false;
          }

          if (opts.visibility !== undefined && opts.visibility !== "hidden") {
            Velocity.State.calls[i][2].visibility = false;
          }
          /* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */


          if (opts.progress) {
            opts.progress.call(callContainer[1], callContainer[1], percentComplete, Math.max(0, timeStart + opts.duration - timeCurrent), timeStart, tweenDummyValue);
          }
          /* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */


          if (percentComplete === 1) {
            completeCall(i);
          }
        }
      }
      /* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */


      if (Velocity.State.isTicking) {
        ticker(tick);
      }
    }
    /**********************
     Call Completion
     **********************/

    /* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */


    function completeCall(callIndex, isStopped) {
      /* Ensure the call exists. */
      if (!Velocity.State.calls[callIndex]) {
        return false;
      }
      /* Pull the metadata from the call. */


      var call = Velocity.State.calls[callIndex][0],
          elements = Velocity.State.calls[callIndex][1],
          opts = Velocity.State.calls[callIndex][2],
          resolver = Velocity.State.calls[callIndex][4];
      var remainingCallsExist = false;
      /*************************
       Element Finalization
       *************************/

      for (var i = 0, callLength = call.length; i < callLength; i++) {
        var element = call[i].element;
        /* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */

        /* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */

        /* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */

        if (!isStopped && !opts.loop) {
          if (opts.display === "none") {
            CSS.setPropertyValue(element, "display", opts.display);
          }

          if (opts.visibility === "hidden") {
            CSS.setPropertyValue(element, "visibility", opts.visibility);
          }
        }
        /* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
         a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
         an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
         we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
         is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */


        var data = Data(element);

        if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
          /* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
          if (data) {
            data.isAnimating = false;
            /* Clear the element's rootPropertyValueCache, which will become stale. */

            data.rootPropertyValueCache = {};
            var transformHAPropertyExists = false;
            /* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */

            $.each(CSS.Lists.transforms3D, function (i, transformName) {
              var defaultValue = /^scale/.test(transformName) ? 1 : 0,
                  currentValue = data.transformCache[transformName];

              if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
                transformHAPropertyExists = true;
                delete data.transformCache[transformName];
              }
            });
            /* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */

            if (opts.mobileHA) {
              transformHAPropertyExists = true;
              delete data.transformCache.translate3d;
            }
            /* Flush the subproperty removals to the DOM. */


            if (transformHAPropertyExists) {
              CSS.flushTransformCache(element);
            }
            /* Remove the "velocity-animating" indicator class. */


            CSS.Values.removeClass(element, "velocity-animating");
          }
        }
        /*********************
         Option: Complete
         *********************/

        /* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */

        /* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */


        if (!isStopped && opts.complete && !opts.loop && i === callLength - 1) {
          /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
          try {
            opts.complete.call(elements, elements);
          } catch (error) {
            setTimeout(function () {
              throw error;
            }, 1);
          }
        }
        /**********************
         Promise Resolving
         **********************/

        /* Note: Infinite loops don't return promises. */


        if (resolver && opts.loop !== true) {
          resolver(elements);
        }
        /****************************
         Option: Loop (Infinite)
         ****************************/


        if (data && opts.loop === true && !isStopped) {
          /* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
           continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
          $.each(data.tweensContainer, function (propertyName, tweenContainer) {
            if (/^rotate/.test(propertyName) && (parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0) {
              var oldStartValue = tweenContainer.startValue;
              tweenContainer.startValue = tweenContainer.endValue;
              tweenContainer.endValue = oldStartValue;
            }

            if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
              tweenContainer.endValue = 0;
              tweenContainer.startValue = 100;
            }
          });
          Velocity(element, "reverse", {
            loop: true,
            delay: opts.delay
          });
        }
        /***************
         Dequeueing
         ***************/

        /* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
         which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
         $.dequeue() must still be called in order to completely clear jQuery's animation queue. */


        if (opts.queue !== false) {
          $.dequeue(element, opts.queue);
        }
      }
      /************************
       Calls Array Cleanup
       ************************/

      /* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
       (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */


      Velocity.State.calls[callIndex] = false;
      /* Iterate through the calls array to determine if this was the final in-progress animation.
       If so, set a flag to end ticking and clear the calls array. */

      for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
        if (Velocity.State.calls[j] !== false) {
          remainingCallsExist = true;
          break;
        }
      }

      if (remainingCallsExist === false) {
        /* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
        Velocity.State.isTicking = false;
        /* Clear the calls array so that its length is reset. */

        delete Velocity.State.calls;
        Velocity.State.calls = [];
      }
    }
    /******************
     Frameworks
     ******************/

    /* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
     If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
     also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
     accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
     (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */


    global.Velocity = Velocity;

    if (global !== window) {
      /* Assign the element function to Velocity's core animate() method. */
      global.fn.velocity = animate;
      /* Assign the object function's defaults to Velocity's global defaults object. */

      global.fn.velocity.defaults = Velocity.defaults;
    }
    /***********************
     Packaged Redirects
     ***********************/

    /* slideUp, slideDown */


    $.each(["Down", "Up"], function (i, direction) {
      Velocity.Redirects["slide" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
        var opts = $.extend({}, options),
            begin = opts.begin,
            complete = opts.complete,
            inlineValues = {},
            computedValues = {
          height: "",
          marginTop: "",
          marginBottom: "",
          paddingTop: "",
          paddingBottom: ""
        };

        if (opts.display === undefined) {
          /* Show the element before slideDown begins and hide the element after slideUp completes. */

          /* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
          opts.display = direction === "Down" ? Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block" : "none";
        }

        opts.begin = function () {
          /* If the user passed in a begin callback, fire it now. */
          if (elementsIndex === 0 && begin) {
            begin.call(elements, elements);
          }
          /* Cache the elements' original vertical dimensional property values so that we can animate back to them. */


          for (var property in computedValues) {
            if (!computedValues.hasOwnProperty(property)) {
              continue;
            }

            inlineValues[property] = element.style[property];
            /* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
             use forcefeeding to start from computed values and animate down to 0. */

            var propertyValue = CSS.getPropertyValue(element, property);
            computedValues[property] = direction === "Down" ? [propertyValue, 0] : [0, propertyValue];
          }
          /* Force vertical overflow content to clip so that sliding works as expected. */


          inlineValues.overflow = element.style.overflow;
          element.style.overflow = "hidden";
        };

        opts.complete = function () {
          /* Reset element to its pre-slide inline values once its slide animation is complete. */
          for (var property in inlineValues) {
            if (inlineValues.hasOwnProperty(property)) {
              element.style[property] = inlineValues[property];
            }
          }
          /* If the user passed in a complete callback, fire it now. */


          if (elementsIndex === elementsSize - 1) {
            if (complete) {
              complete.call(elements, elements);
            }

            if (promiseData) {
              promiseData.resolver(elements);
            }
          }
        };

        Velocity(element, computedValues, opts);
      };
    });
    /* fadeIn, fadeOut */

    $.each(["In", "Out"], function (i, direction) {
      Velocity.Redirects["fade" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
        var opts = $.extend({}, options),
            complete = opts.complete,
            propertiesMap = {
          opacity: direction === "In" ? 1 : 0
        };
        /* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
         callbacks by firing them only when the final element has been reached. */

        if (elementsIndex !== 0) {
          opts.begin = null;
        }

        if (elementsIndex !== elementsSize - 1) {
          opts.complete = null;
        } else {
          opts.complete = function () {
            if (complete) {
              complete.call(elements, elements);
            }

            if (promiseData) {
              promiseData.resolver(elements);
            }
          };
        }
        /* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */

        /* Note: We allow users to pass in "null" to skip display setting altogether. */


        if (opts.display === undefined) {
          opts.display = direction === "In" ? "auto" : "none";
        }

        Velocity(this, propertiesMap, opts);
      };
    });
    return Velocity;
  }(window.jQuery || window.Zepto || window, window, window ? window.document : undefined);
});
/******************
 Known Issues
 ******************/

/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
 Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
 will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=application-acabf08b00e37b939bcf.js.map