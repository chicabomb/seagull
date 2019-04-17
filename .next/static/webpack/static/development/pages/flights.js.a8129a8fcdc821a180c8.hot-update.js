webpackHotUpdate("static/development/pages/flights.js",{

/***/ "./pages/flights.js":
/*!**************************!*\
  !*** ./pages/flights.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contexts/Context */ "./contexts/Context.js");
/* harmony import */ var contexts_BundleResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contexts/BundleResponse */ "./contexts/BundleResponse.json");
var contexts_BundleResponse__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! contexts/BundleResponse */ "./contexts/BundleResponse.json", 1);
/* harmony import */ var data_FlightData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! data/FlightData */ "./data/FlightData.js");
/* harmony import */ var data_helpers_FlightPayload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! data/helpers/FlightPayload */ "./data/helpers/FlightPayload.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var scss_common_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! scss/common.scss */ "./scss/common.scss");
/* harmony import */ var scss_common_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(scss_common_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_Description__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Description */ "./components/Description.js");
/* harmony import */ var components_Gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Gallery */ "./components/Gallery.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Layout */ "./components/Layout.js");
/* harmony import */ var components_Map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Map */ "./components/Map.js");
/* harmony import */ var components_OfferList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/OfferList */ "./components/OfferList.js");
/* harmony import */ var components_Suggestions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Suggestions */ "./components/Suggestions.js");
/* harmony import */ var components_Tags__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Tags */ "./components/Tags.js");


var _jsxFileName = "/Users/t.escher/Documents/code/seagull/pages/flights.js";















var Flights = function Flights(_ref) {
  var query = _ref.query,
      data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(contexts_Context__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: contexts_BundleResponse__WEBPACK_IMPORTED_MODULE_4__.flight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Description__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "container flex responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Map__WEBPACK_IMPORTED_MODULE_12__["default"], {
    location: contexts_BundleResponse__WEBPACK_IMPORTED_MODULE_4__.flight.destination.geo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_OfferList__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Tags__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Gallery__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Suggestions__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })));
};

Flights.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            return _context.abrupt("return", {
              query: query
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Flights);

/***/ })

})
//# sourceMappingURL=flights.js.a8129a8fcdc821a180c8.hot-update.js.map