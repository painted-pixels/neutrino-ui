module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/next/dist/pages/_error.js":
/*!*************************************************!*\
  !*** ../node_modules/next/dist/pages/_error.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps(_ref) {
  var {
    res,
    err
  } = _ref;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    var {
      statusCode
    } = this.props;
    var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi next/dist/pages/_error ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next/dist/pages/_error */"../node_modules/next/dist/pages/_error.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9oZWFkIiwic3RhdHVzQ29kZXMiLCJfZ2V0SW5pdGlhbFByb3BzIiwiX3JlZiIsInJlcyIsImVyciIsInN0YXR1c0NvZGUiLCJFcnJvciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzdHlsZXMiLCJlcnJvciIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaDEiLCJkZXNjIiwiaDIiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJjb2xvciIsImJhY2tncm91bmQiLCJmb250RmFtaWx5IiwiaGVpZ2h0IiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImJvcmRlclJpZ2h0IiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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RUFBQyxNQUFsRTtBQUF5RU8saUJBQWEsRUFBQztBQUF2RixHQUF4UztBQUF5WWhCLElBQUUsRUFBQztBQUFDVyxXQUFPLEVBQUMsY0FBVDtBQUF3Qk0sZUFBVyxFQUFDLDRCQUFwQztBQUFpRUMsVUFBTSxFQUFDLENBQXhFO0FBQTBFQyxlQUFXLEVBQUMsTUFBdEY7QUFBNkZDLFdBQU8sRUFBQyxrQkFBckc7QUFBd0hDLFlBQVEsRUFBQyxNQUFqSTtBQUF3SUMsY0FBVSxFQUFDLEdBQW5KO0FBQXVKTixpQkFBYSxFQUFDO0FBQXJLLEdBQTVZO0FBQXdqQmQsSUFBRSxFQUFDO0FBQUNtQixZQUFRLEVBQUMsTUFBVjtBQUFpQkMsY0FBVSxFQUFDLFFBQTVCO0FBQXFDUCxjQUFVLEVBQUMsU0FBaEQ7QUFBMERHLFVBQU0sRUFBQyxDQUFqRTtBQUFtRUUsV0FBTyxFQUFDO0FBQTNFO0FBQTNqQixDQUFYLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjM1QixrQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvX2Vycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgc3RhdHVzQ29kZXM9ezQwMDonQmFkIFJlcXVlc3QnLDQwNDonVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCcsNDA1OidNZXRob2QgTm90IEFsbG93ZWQnLDUwMDonSW50ZXJuYWwgU2VydmVyIEVycm9yJ307ZnVuY3Rpb24gX2dldEluaXRpYWxQcm9wcyhfcmVmKXt2YXJ7cmVzLGVycn09X3JlZjt2YXIgc3RhdHVzQ29kZT1yZXMmJnJlcy5zdGF0dXNDb2RlP3Jlcy5zdGF0dXNDb2RlOmVycj9lcnIuc3RhdHVzQ29kZTo0MDQ7cmV0dXJue3N0YXR1c0NvZGV9O30vKipcbiAqIGBFcnJvcmAgY29tcG9uZW50IHVzZWQgZm9yIGhhbmRsaW5nIGVycm9ycy5cbiAqL2NsYXNzIEVycm9yIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50e3JlbmRlcigpe3ZhcntzdGF0dXNDb2RlfT10aGlzLnByb3BzO3ZhciB0aXRsZT10aGlzLnByb3BzLnRpdGxlfHxzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXXx8J0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzdHlsZXMuZXJyb3J9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsbnVsbCxzdGF0dXNDb2RlLFwiOiBcIix0aXRsZSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6J2JvZHkgeyBtYXJnaW46IDAgfSd9fSksc3RhdHVzQ29kZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIse3N0eWxlOnN0eWxlcy5oMX0sc3RhdHVzQ29kZSk6bnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzdHlsZXMuZGVzY30sLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLHtzdHlsZTpzdHlsZXMuaDJ9LHRpdGxlLFwiLlwiKSkpKTt9fWV4cG9ydHMuZGVmYXVsdD1FcnJvcjtFcnJvci5kaXNwbGF5TmFtZT0nRXJyb3JQYWdlJztFcnJvci5nZXRJbml0aWFsUHJvcHM9X2dldEluaXRpYWxQcm9wcztFcnJvci5vcmlnR2V0SW5pdGlhbFByb3BzPV9nZXRJbml0aWFsUHJvcHM7dmFyIHN0eWxlcz17ZXJyb3I6e2NvbG9yOicjMDAwJyxiYWNrZ3JvdW5kOicjZmZmJyxmb250RmFtaWx5OictYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLGhlaWdodDonMTAwdmgnLHRleHRBbGlnbjonY2VudGVyJyxkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidjb2x1bW4nLGFsaWduSXRlbXM6J2NlbnRlcicsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcid9LGRlc2M6e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsdGV4dEFsaWduOidsZWZ0JyxsaW5lSGVpZ2h0Oic0OXB4JyxoZWlnaHQ6JzQ5cHgnLHZlcnRpY2FsQWxpZ246J21pZGRsZSd9LGgxOntkaXNwbGF5OidpbmxpbmUtYmxvY2snLGJvcmRlclJpZ2h0OicxcHggc29saWQgcmdiYSgwLCAwLCAwLC4zKScsbWFyZ2luOjAsbWFyZ2luUmlnaHQ6JzIwcHgnLHBhZGRpbmc6JzEwcHggMjNweCAxMHB4IDAnLGZvbnRTaXplOicyNHB4Jyxmb250V2VpZ2h0OjUwMCx2ZXJ0aWNhbEFsaWduOid0b3AnfSxoMjp7Zm9udFNpemU6JzE0cHgnLGZvbnRXZWlnaHQ6J25vcm1hbCcsbGluZUhlaWdodDonaW5oZXJpdCcsbWFyZ2luOjAscGFkZGluZzowfX07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==