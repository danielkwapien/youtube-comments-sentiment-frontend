"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/AreaChart.jsx":
/*!**********************************!*\
  !*** ./components/AreaChart.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_AreaChart_tremor_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=AreaChart!=!@tremor/react */ \"(app-pages-browser)/__barrel_optimize__?names=AreaChart!=!./node_modules/@tremor/react/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/page */ \"(app-pages-browser)/./app/page.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst dataFormatter = (number)=>\"$\".concat(Intl.NumberFormat(\"us\").format(number).toString());\nfunction AreaChartHero() {\n    _s();\n    const { timeline } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_app_page__WEBPACK_IMPORTED_MODULE_3__.VideoContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AreaChart_tremor_react__WEBPACK_IMPORTED_MODULE_1__.AreaChart, {\n        className: \"h-80\",\n        data: timeline,\n        index: \"date\",\n        categories: [\n            \"SemiAnalysis\",\n            \"The Pragmatic Engineer\"\n        ],\n        colors: [\n            \"indigo\",\n            \"rose\"\n        ],\n        valueFormatter: dataFormatter,\n        yAxisWidth: 60,\n        onValueChange: (v)=>console.log(v)\n    }, void 0, false, {\n        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/components/AreaChart.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(AreaChartHero, \"Vpcdwq6DngnsZiJ3x1z8mGjpza0=\");\n_c = AreaChartHero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AreaChartHero);\nvar _c;\n$RefreshReg$(_c, \"AreaChartHero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQXJlYUNoYXJ0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQztBQUNQO0FBQ087QUFFMUMsTUFBTUcsZ0JBQWdCLENBQUNDLFNBQ3JCLElBQXNELE9BQWxEQyxLQUFLQyxZQUFZLENBQUMsTUFBTUMsTUFBTSxDQUFDSCxRQUFRSSxRQUFRO0FBRXJELFNBQVNDOztJQUVQLE1BQU0sRUFBQ0MsUUFBUSxFQUFDLEdBQUdULGlEQUFVQSxDQUFDQyxtREFBWUE7SUFDMUMscUJBQ0UsOERBQUNGLG9GQUFTQTtRQUNSVyxXQUFVO1FBQ1ZDLE1BQU1GO1FBQ05HLE9BQU07UUFDTkMsWUFBWTtZQUFDO1lBQWdCO1NBQXlCO1FBQ3REQyxRQUFRO1lBQUM7WUFBVTtTQUFPO1FBQzFCQyxnQkFBZ0JiO1FBQ2hCYyxZQUFZO1FBQ1pDLGVBQWUsQ0FBQ0MsSUFBTUMsUUFBUUMsR0FBRyxDQUFDRjs7Ozs7O0FBR3hDO0dBZlNWO0tBQUFBO0FBaUJULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJlYUNoYXJ0LmpzeD84NWY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFyZWFDaGFydCB9IGZyb20gJ0B0cmVtb3IvcmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZGVvQ29udGV4dCB9IGZyb20gJ0AvYXBwL3BhZ2UnO1xuXG5jb25zdCBkYXRhRm9ybWF0dGVyID0gKG51bWJlcikgPT5cbiAgYCQke0ludGwuTnVtYmVyRm9ybWF0KCd1cycpLmZvcm1hdChudW1iZXIpLnRvU3RyaW5nKCl9YDtcblxuZnVuY3Rpb24gQXJlYUNoYXJ0SGVybygpIHtcblxuICBjb25zdCB7dGltZWxpbmV9ID0gdXNlQ29udGV4dChWaWRlb0NvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxBcmVhQ2hhcnRcbiAgICAgIGNsYXNzTmFtZT1cImgtODBcIlxuICAgICAgZGF0YT17dGltZWxpbmV9XG4gICAgICBpbmRleD1cImRhdGVcIlxuICAgICAgY2F0ZWdvcmllcz17WydTZW1pQW5hbHlzaXMnLCAnVGhlIFByYWdtYXRpYyBFbmdpbmVlciddfVxuICAgICAgY29sb3JzPXtbJ2luZGlnbycsICdyb3NlJ119XG4gICAgICB2YWx1ZUZvcm1hdHRlcj17ZGF0YUZvcm1hdHRlcn1cbiAgICAgIHlBeGlzV2lkdGg9ezYwfVxuICAgICAgb25WYWx1ZUNoYW5nZT17KHYpID0+IGNvbnNvbGUubG9nKHYpfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFyZWFDaGFydEhlcm87Il0sIm5hbWVzIjpbIkFyZWFDaGFydCIsInVzZUNvbnRleHQiLCJWaWRlb0NvbnRleHQiLCJkYXRhRm9ybWF0dGVyIiwibnVtYmVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsInRvU3RyaW5nIiwiQXJlYUNoYXJ0SGVybyIsInRpbWVsaW5lIiwiY2xhc3NOYW1lIiwiZGF0YSIsImluZGV4IiwiY2F0ZWdvcmllcyIsImNvbG9ycyIsInZhbHVlRm9ybWF0dGVyIiwieUF4aXNXaWR0aCIsIm9uVmFsdWVDaGFuZ2UiLCJ2IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AreaChart.jsx\n"));

/***/ })

});