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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"413829aaeecb\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZDY2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjQxMzgyOWFhZWVjYlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/ListOfCategories.tsx":
/*!*********************************************!*\
  !*** ./src/components/ListOfCategories.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListOfCategories: function() { return /* binding */ ListOfCategories; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.1_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.1_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ ListOfCategories auto */ \nvar _s = $RefreshSig$();\n\nfunction CategoryItem(param) {\n    let { category, hasSubCategories } = param;\n    _s();\n    const [expanded1, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"ml-4\",\n        children: [\n            hasSubCategories ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: handleClick,\n                children: expanded1 ? \"-\" : \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this) : null,\n            category.name,\n            expanded1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListOfCategories, {\n                categories: categories,\n                parentCategory: category.id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                lineNumber: 23,\n                columnNumber: 19\n            }, this) : null\n        ]\n    }, category.id, true, {\n        fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(CategoryItem, \"DuL5jiiQQFgbn7gBKAyxwS/H4Ek=\");\n_c = CategoryItem;\nfunction ListOfCategories(param) {\n    let { categories: categories1, parentCategory = null } = param;\n    const categoriesToRender = categories1.filter((param)=>{\n        let { parentId } = param;\n        return parentCategory === parentId;\n    });\n    const hasSubCategories = categoriesToRender.length > 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: categoriesToRender.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"ml-4\",\n                children: [\n                    hasSubCategories ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: handleClick,\n                        children: expanded ? \"-\" : \"+\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this) : null,\n                    category.name,\n                    expanded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListOfCategories, {\n                        categories: categories1,\n                        parentCategory: category.id\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this) : null\n                ]\n            }, category.id, true, {\n                fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_c1 = ListOfCategories;\nvar _c, _c1;\n$RefreshReg$(_c, \"CategoryItem\");\n$RefreshReg$(_c1, \"ListOfCategories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xpc3RPZkNhdGVnb3JpZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUcrQjtBQUUvQixTQUFTQyxhQUFhLEtBTXJCO1FBTnFCLEVBQ3BCQyxRQUFRLEVBQ1JDLGdCQUFnQixFQUlqQixHQU5xQjs7SUFPcEIsTUFBTSxDQUFDQyxXQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXpDLHFCQUNFLDhEQUFDTTtRQUFxQkMsV0FBVTs7WUFDN0JKLGlDQUNDLDhEQUFDSztnQkFBT0MsTUFBSztnQkFBU0MsU0FBU0M7MEJBQzVCUCxZQUFXLE1BQU07Ozs7O3VCQUVsQjtZQUNIRixTQUFTVSxJQUFJO1lBQ2JSLDBCQUFXLDhEQUFDUztnQkFBaUJDLFlBQVlBO2dCQUFZQyxnQkFBZ0JiLFNBQVNjLEVBQUU7Ozs7O3VCQUFPOztPQVBqRmQsU0FBU2MsRUFBRTs7Ozs7QUFVeEI7R0FwQlNmO0tBQUFBO0FBc0JGLFNBQVNZLGlCQUFpQixLQU1oQztRQU5nQyxFQUMvQkMsWUFBQUEsV0FBVSxFQUNWQyxpQkFBaUIsSUFBSSxFQUl0QixHQU5nQztJQU8vQixNQUFNRSxxQkFBcUJILFlBQVdJLE1BQU0sQ0FBQztZQUFDLEVBQUNDLFFBQVEsRUFBQztRQUN0RCxPQUFPSixtQkFBbUJJO0lBQzVCO0lBQ0EsTUFBTWhCLG1CQUFtQmMsbUJBQW1CRyxNQUFNLEdBQUc7SUFHckQscUJBQ0UsOERBQUNDO2tCQUNFSixtQkFBbUJLLEdBQUcsQ0FBQyxDQUFDcEIseUJBQ3ZCLDhEQUFDSTtnQkFBcUJDLFdBQVU7O29CQUM3QkosaUNBQ0MsOERBQUNLO3dCQUFPQyxNQUFLO3dCQUFTQyxTQUFTQztrQ0FDNUJQLFdBQVcsTUFBTTs7Ozs7K0JBRWxCO29CQUNIRixTQUFTVSxJQUFJO29CQUNiUix5QkFDQyw4REFBQ1M7d0JBQWlCQyxZQUFZQTt3QkFBWUMsZ0JBQWdCYixTQUFTYyxFQUFFOzs7OzsrQkFDbkU7O2VBVEdkLFNBQVNjLEVBQUU7Ozs7Ozs7Ozs7QUFjNUI7TUE5QmdCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MaXN0T2ZDYXRlZ29yaWVzLnRzeD8yMjBlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgdHlwZSB7Q2F0ZWdvcnl9IGZyb20gXCJAL3R5cGVzXCI7XHJcblxyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIENhdGVnb3J5SXRlbSh7XHJcbiAgY2F0ZWdvcnksXHJcbiAgaGFzU3ViQ2F0ZWdvcmllcyxcclxufToge1xyXG4gIGNhdGVnb3J5OiBDYXRlZ29yeTtcclxuICBoYXNTdWJDYXRlZ29yaWVzOiBib29sZWFuO1xyXG59KSB7XHJcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0gY2xhc3NOYW1lPVwibWwtNFwiPlxyXG4gICAgICB7aGFzU3ViQ2F0ZWdvcmllcyA/IChcclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICB7ZXhwYW5kZWQgPyBcIi1cIiA6IFwiK1wifVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAge2NhdGVnb3J5Lm5hbWV9XHJcbiAgICAgIHtleHBhbmRlZCA/IDxMaXN0T2ZDYXRlZ29yaWVzIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IHBhcmVudENhdGVnb3J5PXtjYXRlZ29yeS5pZH0gLz4gOiBudWxsfVxyXG4gICAgPC9saT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGlzdE9mQ2F0ZWdvcmllcyh7XHJcbiAgY2F0ZWdvcmllcyxcclxuICBwYXJlbnRDYXRlZ29yeSA9IG51bGwsXHJcbn06IHtcclxuICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdO1xyXG4gIHBhcmVudENhdGVnb3J5Pzogc3RyaW5nIHwgbnVsbDtcclxufSkge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXNUb1JlbmRlciA9IGNhdGVnb3JpZXMuZmlsdGVyKCh7cGFyZW50SWR9KSA9PiB7XHJcbiAgICByZXR1cm4gcGFyZW50Q2F0ZWdvcnkgPT09IHBhcmVudElkO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGhhc1N1YkNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzVG9SZW5kZXIubGVuZ3RoID4gMDtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWw+XHJcbiAgICAgIHtjYXRlZ29yaWVzVG9SZW5kZXIubWFwKChjYXRlZ29yeSkgPT4gKFxyXG4gICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfSBjbGFzc05hbWU9XCJtbC00XCI+XHJcbiAgICAgICAgICB7aGFzU3ViQ2F0ZWdvcmllcyA/IChcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIHtleHBhbmRlZCA/IFwiLVwiIDogXCIrXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cclxuICAgICAgICAgIHtleHBhbmRlZCA/IChcclxuICAgICAgICAgICAgPExpc3RPZkNhdGVnb3JpZXMgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gcGFyZW50Q2F0ZWdvcnk9e2NhdGVnb3J5LmlkfSAvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2F0ZWdvcnlJdGVtIiwiY2F0ZWdvcnkiLCJoYXNTdWJDYXRlZ29yaWVzIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImxpIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJoYW5kbGVDbGljayIsIm5hbWUiLCJMaXN0T2ZDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsInBhcmVudENhdGVnb3J5IiwiaWQiLCJjYXRlZ29yaWVzVG9SZW5kZXIiLCJmaWx0ZXIiLCJwYXJlbnRJZCIsImxlbmd0aCIsInVsIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ListOfCategories.tsx\n"));

/***/ })

});