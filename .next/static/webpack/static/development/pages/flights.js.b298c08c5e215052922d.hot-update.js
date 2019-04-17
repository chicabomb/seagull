webpackHotUpdate("static/development/pages/flights.js",{

/***/ "./components/Cards.js":
/*!*****************************!*\
  !*** ./components/Cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
var _jsxFileName = "/Users/t.escher/Documents/code/seagull/components/Cards.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var cards = _ref.cards;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "suggestions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, cards.map(function (_ref2) {
    var image = _ref2.image,
        title = _ref2.title,
        description = _ref2.description;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: Math.random() * 16,
      image: image,
      title: title,
      description: description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }));
});

/***/ })

})
//# sourceMappingURL=flights.js.b298c08c5e215052922d.hot-update.js.map