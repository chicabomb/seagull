webpackHotUpdate("static/development/pages/flights.js",{

/***/ "./components/Suggestions.js":
/*!***********************************!*\
  !*** ./components/Suggestions.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contexts/Context */ "./contexts/Context.js");
/* harmony import */ var _SuggestionCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuggestionCard */ "./components/SuggestionCard.js");
var _jsxFileName = "/Users/t.escher/Documents/code/seagull/components/Suggestions.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(contexts_Context__WEBPACK_IMPORTED_MODULE_1__["default"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, function (_ref) {
    var suggestions = _ref.suggestions;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "suggestions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, suggestions.map(function (_ref2) {
      var image = _ref2.image,
          title = _ref2.title,
          description = _ref2.description;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SuggestionCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: Math.random() * 16,
        image: image,
        title: title,
        description: description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      });
    }));
  });
});

/***/ })

})
//# sourceMappingURL=flights.js.6e88f8e85786717314a7.hot-update.js.map