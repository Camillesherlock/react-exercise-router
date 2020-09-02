webpackHotUpdate("main",{

/***/ "./src/exercise-1/components/App.js":
/*!******************************************!*\
  !*** ./src/exercise-1/components/App.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_freywang_twu_project_react_exercise_router_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_freywang_twu_project_react_exercise_router_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_freywang_twu_project_react_exercise_router_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_freywang_twu_project_react_exercise_router_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_freywang_twu_project_react_exercise_router_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/App.css */ "./src/exercise-1/styles/App.css");
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/About */ "./src/exercise-1/pages/About.js");
/* harmony import */ var _pages_Profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/Profile */ "./src/exercise-1/pages/Profile.js");
/* harmony import */ var _pages_Products__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/Products */ "./src/exercise-1/pages/Products.js");
/* harmony import */ var _pages_Product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/Product */ "./src/exercise-1/pages/Product.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/Home */ "./src/exercise-1/pages/Home.js");





var _jsxFileName = "/Users/freywang/twu/project/react-exercise-router/src/exercise-1/components/App.js";












var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_freywang_twu_project_react_exercise_router_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_freywang_twu_project_react_exercise_router_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_freywang_twu_project_react_exercise_router_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_freywang_twu_project_react_exercise_router_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      datas: [{
        name: '可乐',
        price: 1
      }, {
        name: '可乐',
        price: 1
      }, {
        name: '可乐',
        price: 1
      }]
    };

    _this.AddToCar = function () {
      _this.setState({
        carNum: _this.state.carNum + 1
      });
    };

    return _this;
  }

  Object(_Users_freywang_twu_project_react_exercise_router_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["BrowserRouter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "\u8D2D\u7269\u8F66"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/orders",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "\u8BA2\u5355"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "addgoods",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "+"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/addgoods",
        component: _pages_About__WEBPACK_IMPORTED_MODULE_8__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/orders",
        component: _pages_Profile__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/",
        component: _pages_Home__WEBPACK_IMPORTED_MODULE_12__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.0ec97085d0e796f25b87.hot-update.js.map