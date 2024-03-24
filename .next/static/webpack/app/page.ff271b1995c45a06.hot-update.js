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

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var _components_Chart_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Chart.jsx */ \"(app-pages-browser)/./components/Chart.jsx\");\n/* harmony import */ var _components_Header_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header.jsx */ \"(app-pages-browser)/./components/Header.jsx\");\n/* harmony import */ var _components_Thumbnail_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Thumbnail.jsx */ \"(app-pages-browser)/./components/Thumbnail.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_5__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_5__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_5__.Legend);\nfunction Home() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading...\");\n    const [thumbnail, setThumbnail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [timeline, setTimeline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [emotions, setEmotions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:5000/api/sNMtjs_wQiE\").then((response)=>response.json()).then((data)=>{\n            setTitle(data.title[\"0\"].title);\n            setThumbnail(data.thumbnail[\"0\"]);\n            setTimeline(data.time);\n            setEmotions(data.proportion);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative isolate pt-14 dark:bg-black\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-12 sm:py-20 lg:pb-40\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-7xl px-6 lg:px-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto max-w-2xl text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl font-bold tracking-tight sm:text-6xl\",\n                                children: \"Analyze youtube comments\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            thumbnail && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Thumbnail_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                src: thumbnail,\n                alt: title\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                lineNumber: 43,\n                columnNumber: 21\n            }, this),\n            emotions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chart_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                fetchedData: emotions\n            }, void 0, false, {\n                fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n                lineNumber: 44,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danik/Universidad/PersonalProjects/Sentiment Analysis/website/client/app/page.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"IhJPTCHURN4q0tFC1t/7FcxTKrE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMkQ7QUFDYztBQUNyQjtBQUNOO0FBQ007QUFFcERLLDJDQUFPQSxDQUFDTyxRQUFRLENBQUNOLGdEQUFVQSxFQUFFQyw2Q0FBT0EsRUFBRUMsNENBQU1BO0FBRTdCLFNBQVNLOztJQUV0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDYyxXQUFXQyxhQUFhLEdBQUdmLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2dCLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFDO0lBRXpDRCxnREFBU0EsQ0FBQztRQUNScUIsTUFBTSx5Q0FBeUNDLElBQUksQ0FDakQsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUMzQkYsSUFBSSxDQUNKLENBQUNHO1lBQ0NYLFNBQVNXLEtBQUtaLEtBQUssQ0FBQyxJQUFJLENBQUNBLEtBQUs7WUFDOUJHLGFBQWFTLEtBQUtWLFNBQVMsQ0FBQyxJQUFJO1lBQ2hDRyxZQUFZTyxLQUFLQyxJQUFJO1lBQ3JCTixZQUFZSyxLQUFLRSxVQUFVO1FBQzFCO0lBRVAsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDcEIsOERBQU1BOzs7OzswQkFDUCw4REFBQ3FCO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDRTtnQ0FBR0YsV0FBVTswQ0FBZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT3JFZCwyQkFBYSw4REFBQ0wsaUVBQVNBO2dCQUFDc0IsS0FBS2pCO2dCQUFXa0IsS0FBS3BCOzs7Ozs7WUFDN0NNLDBCQUFZLDhEQUFDWCw2REFBY0E7Z0JBQUMwQixhQUFhZjs7Ozs7Ozs7Ozs7O0FBR2hEO0dBckN3QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGFydCBhcyBDaGFydEpTLCBBcmNFbGVtZW50LCBUb29sdGlwLCBMZWdlbmQgfSBmcm9tIFwiY2hhcnQuanNcIjtcbmltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJ0LmpzeCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanN4JztcbmltcG9ydCBUaHVtYm5haWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGh1bWJuYWlsLmpzeFwiO1xuXG5DaGFydEpTLnJlZ2lzdGVyKEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkxvYWRpbmcuLi5cIik7XG4gIGNvbnN0IFt0aHVtYm5haWwsIHNldFRodW1ibmFpbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3RpbWVsaW5lLCBzZXRUaW1lbGluZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vtb3Rpb25zLCBzZXRFbW90aW9uc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9zTk10anNfd1FpRVwiKS50aGVuKFxuICAgICAgKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKClcbiAgICApLnRoZW4oXG4gICAgICAoZGF0YSkgPT4geyBcbiAgICAgICAgc2V0VGl0bGUoZGF0YS50aXRsZVsnMCddLnRpdGxlKTsgXG4gICAgICAgIHNldFRodW1ibmFpbChkYXRhLnRodW1ibmFpbFsnMCddKTtcbiAgICAgICAgc2V0VGltZWxpbmUoZGF0YS50aW1lKTtcbiAgICAgICAgc2V0RW1vdGlvbnMoZGF0YS5wcm9wb3J0aW9uKTtcbiAgICAgICAgIH1cbiAgICApXG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaXNvbGF0ZSBwdC0xNCBkYXJrOmJnLWJsYWNrXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTIgc206cHktMjAgbGc6cGItNDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTJ4bCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHNtOnRleHQtNnhsXCI+XG4gICAgICAgICAgICAgICAgQW5hbHl6ZSB5b3V0dWJlIGNvbW1lbnRzXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHt0aHVtYm5haWwgJiYgPFRodW1ibmFpbCBzcmM9e3RodW1ibmFpbH0gYWx0PXt0aXRsZX0gLz59XG4gICAgICB7ZW1vdGlvbnMgJiYgPENoYXJ0Q29tcG9uZW50IGZldGNoZWREYXRhPXtlbW90aW9uc30gLz59XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJDaGFydCIsIkNoYXJ0SlMiLCJBcmNFbGVtZW50IiwiVG9vbHRpcCIsIkxlZ2VuZCIsIkNoYXJ0Q29tcG9uZW50IiwiSGVhZGVyIiwiVGh1bWJuYWlsIiwicmVnaXN0ZXIiLCJIb21lIiwidGl0bGUiLCJzZXRUaXRsZSIsInRodW1ibmFpbCIsInNldFRodW1ibmFpbCIsInRpbWVsaW5lIiwic2V0VGltZWxpbmUiLCJlbW90aW9ucyIsInNldEVtb3Rpb25zIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInRpbWUiLCJwcm9wb3J0aW9uIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwic3JjIiwiYWx0IiwiZmV0Y2hlZERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});