"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"13e90b3352e4\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZDY2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjEzZTkwYjMzNTJlNFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/ListOfCategories.tsx":
/*!*********************************************!*\
  !*** ./src/components/ListOfCategories.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListOfCategories: function() { return /* binding */ ListOfCategories; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.1_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.1_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ ListOfCategories auto */ \nvar _s = $RefreshSig$();\n\nfunction CategoryItem(param) {\n    let { category, hasSubCategories } = param;\n    _s();\n    const [expanded1, setExpanded1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"ml-4\",\n        children: [\n            hasSubCategories ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: handleClick,\n                children: expanded1 ? \"-\" : \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this) : null,\n            category.name,\n            expanded1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListOfCategories, {\n                categories: categories,\n                parentCategory: category.id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                lineNumber: 23,\n                columnNumber: 19\n            }, this) : null\n        ]\n    }, category.id, true, {\n        fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(CategoryItem, \"DuL5jiiQQFgbn7gBKAyxwS/H4Ek=\");\n_c = CategoryItem;\nfunction ListOfCategories(param) {\n    let { categories: categories1, parentCategory = null } = param;\n    const categoriesToRender = categories1.filter((param)=>{\n        let { parentId } = param;\n        return parentCategory === parentId;\n    });\n    const hasSubCategories = categoriesToRender.length > 0;\n    const handleClick1 = ()=>setExpanded((value)=>!value);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: categoriesToRender.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"ml-4\",\n                children: [\n                    hasSubCategories ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: handleClick1,\n                        children: expanded ? \"-\" : \"+\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this) : null,\n                    category.name,\n                    expanded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListOfCategories, {\n                        categories: categories1,\n                        parentCategory: category.id\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this) : null\n                ]\n            }, category.id, true, {\n                fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_c1 = ListOfCategories;\nvar _c, _c1;\n$RefreshReg$(_c, \"CategoryItem\");\n$RefreshReg$(_c1, \"ListOfCategories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xpc3RPZkNhdGVnb3JpZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUcrQjtBQUUvQixTQUFTQyxhQUFhLEtBTXJCO1FBTnFCLEVBQ3BCQyxRQUFRLEVBQ1JDLGdCQUFnQixFQUlqQixHQU5xQjs7SUFPcEIsTUFBTSxDQUFDQyxXQUFVQyxhQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXpDLHFCQUNFLDhEQUFDTTtRQUFxQkMsV0FBVTs7WUFDN0JKLGlDQUNDLDhEQUFDSztnQkFBT0MsTUFBSztnQkFBU0MsU0FBU0M7MEJBQzVCUCxZQUFXLE1BQU07Ozs7O3VCQUVsQjtZQUNIRixTQUFTVSxJQUFJO1lBQ2JSLDBCQUFXLDhEQUFDUztnQkFBaUJDLFlBQVlBO2dCQUFZQyxnQkFBZ0JiLFNBQVNjLEVBQUU7Ozs7O3VCQUFPOztPQVBqRmQsU0FBU2MsRUFBRTs7Ozs7QUFVeEI7R0FwQlNmO0tBQUFBO0FBc0JGLFNBQVNZLGlCQUFpQixLQU1oQztRQU5nQyxFQUMvQkMsWUFBQUEsV0FBVSxFQUNWQyxpQkFBaUIsSUFBSSxFQUl0QixHQU5nQztJQU8vQixNQUFNRSxxQkFBcUJILFlBQVdJLE1BQU0sQ0FBQztZQUFDLEVBQUNDLFFBQVEsRUFBQztRQUN0RCxPQUFPSixtQkFBbUJJO0lBQzVCO0lBQ0EsTUFBTWhCLG1CQUFtQmMsbUJBQW1CRyxNQUFNLEdBQUc7SUFFckQsTUFBTVQsZUFBYyxJQUFNTixZQUFZLENBQUNnQixRQUFVLENBQUNBO0lBRWxELHFCQUNFLDhEQUFDQztrQkFDRUwsbUJBQW1CTSxHQUFHLENBQUMsQ0FBQ3JCLHlCQUN2Qiw4REFBQ0k7Z0JBQXFCQyxXQUFVOztvQkFDN0JKLGlDQUNDLDhEQUFDSzt3QkFBT0MsTUFBSzt3QkFBU0MsU0FBU0M7a0NBQzVCUCxXQUFXLE1BQU07Ozs7OytCQUVsQjtvQkFDSEYsU0FBU1UsSUFBSTtvQkFDYlIseUJBQ0MsOERBQUNTO3dCQUFpQkMsWUFBWUE7d0JBQVlDLGdCQUFnQmIsU0FBU2MsRUFBRTs7Ozs7K0JBQ25FOztlQVRHZCxTQUFTYyxFQUFFOzs7Ozs7Ozs7O0FBYzVCO01BL0JnQkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGlzdE9mQ2F0ZWdvcmllcy50c3g/MjIwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHR5cGUge0NhdGVnb3J5fSBmcm9tIFwiQC90eXBlc1wiO1xyXG5cclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBDYXRlZ29yeUl0ZW0oe1xyXG4gIGNhdGVnb3J5LFxyXG4gIGhhc1N1YkNhdGVnb3JpZXMsXHJcbn06IHtcclxuICBjYXRlZ29yeTogQ2F0ZWdvcnk7XHJcbiAgaGFzU3ViQ2F0ZWdvcmllczogYm9vbGVhbjtcclxufSkge1xyXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9IGNsYXNzTmFtZT1cIm1sLTRcIj5cclxuICAgICAge2hhc1N1YkNhdGVnb3JpZXMgPyAoXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAge2V4cGFuZGVkID8gXCItXCIgOiBcIitcIn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIHtjYXRlZ29yeS5uYW1lfVxyXG4gICAgICB7ZXhwYW5kZWQgPyA8TGlzdE9mQ2F0ZWdvcmllcyBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSBwYXJlbnRDYXRlZ29yeT17Y2F0ZWdvcnkuaWR9IC8+IDogbnVsbH1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpc3RPZkNhdGVnb3JpZXMoe1xyXG4gIGNhdGVnb3JpZXMsXHJcbiAgcGFyZW50Q2F0ZWdvcnkgPSBudWxsLFxyXG59OiB7XHJcbiAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcclxuICBwYXJlbnRDYXRlZ29yeT86IHN0cmluZyB8IG51bGw7XHJcbn0pIHtcclxuICBjb25zdCBjYXRlZ29yaWVzVG9SZW5kZXIgPSBjYXRlZ29yaWVzLmZpbHRlcigoe3BhcmVudElkfSkgPT4ge1xyXG4gICAgcmV0dXJuIHBhcmVudENhdGVnb3J5ID09PSBwYXJlbnRJZDtcclxuICB9KTtcclxuICBjb25zdCBoYXNTdWJDYXRlZ29yaWVzID0gY2F0ZWdvcmllc1RvUmVuZGVyLmxlbmd0aCA+IDA7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4gc2V0RXhwYW5kZWQoKHZhbHVlKSA9PiAhdmFsdWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsPlxyXG4gICAgICB7Y2F0ZWdvcmllc1RvUmVuZGVyLm1hcCgoY2F0ZWdvcnkpID0+IChcclxuICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0gY2xhc3NOYW1lPVwibWwtNFwiPlxyXG4gICAgICAgICAge2hhc1N1YkNhdGVnb3JpZXMgPyAoXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICB7ZXhwYW5kZWQgPyBcIi1cIiA6IFwiK1wifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XHJcbiAgICAgICAgICB7ZXhwYW5kZWQgPyAoXHJcbiAgICAgICAgICAgIDxMaXN0T2ZDYXRlZ29yaWVzIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IHBhcmVudENhdGVnb3J5PXtjYXRlZ29yeS5pZH0gLz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNhdGVnb3J5SXRlbSIsImNhdGVnb3J5IiwiaGFzU3ViQ2F0ZWdvcmllcyIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJsaSIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiaGFuZGxlQ2xpY2siLCJuYW1lIiwiTGlzdE9mQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJwYXJlbnRDYXRlZ29yeSIsImlkIiwiY2F0ZWdvcmllc1RvUmVuZGVyIiwiZmlsdGVyIiwicGFyZW50SWQiLCJsZW5ndGgiLCJ2YWx1ZSIsInVsIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ListOfCategories.tsx\n"));

/***/ })

});