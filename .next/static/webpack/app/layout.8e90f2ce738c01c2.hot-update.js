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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c2e341e0e4ba\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZDY2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImMyZTM0MWUwZTRiYVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/ListOfCategories.tsx":
/*!*********************************************!*\
  !*** ./src/components/ListOfCategories.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListOfCategories: function() { return /* binding */ ListOfCategories; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.1_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.1_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ ListOfCategories auto */ \nvar _s = $RefreshSig$();\n\nfunction CategoryItem(param) {\n    let { category, categories } = param;\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>setExpanded((value)=>!value);\n    const hasSubCategories = categories.filter((param)=>{\n        let { parentId } = param;\n        return category.id === parentId;\n    }).length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"ml-4\",\n        children: [\n            hasSubCategories ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-white\",\n                type: \"button\",\n                onClick: handleClick,\n                children: expanded ? \"-\" : \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this) : null,\n            category.name,\n            expanded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListOfCategories, {\n                categories: categories,\n                parentCategory: category.id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                lineNumber: 28,\n                columnNumber: 19\n            }, this) : null\n        ]\n    }, category.id, true, {\n        fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(CategoryItem, \"DuL5jiiQQFgbn7gBKAyxwS/H4Ek=\");\n_c = CategoryItem;\nfunction ListOfCategories(param) {\n    let { categories, parentCategory = null } = param;\n    const categoriesToRender = categories.filter((param)=>{\n        let { parentId } = param;\n        return parentCategory === parentId;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: categoriesToRender.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CategoryItem, {\n                categories: categories,\n                category: category\n            }, category.id, false, {\n                fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_c1 = ListOfCategories;\nvar _c, _c1;\n$RefreshReg$(_c, \"CategoryItem\");\n$RefreshReg$(_c1, \"ListOfCategories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xpc3RPZkNhdGVnb3JpZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUcrQjtBQUUvQixTQUFTQyxhQUFhLEtBUXJCO1FBUnFCLEVBQ3BCQyxRQUFRLEVBQ1JDLFVBQVUsRUFNWCxHQVJxQjs7SUFTcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1NLGNBQWMsSUFBTUQsWUFBWSxDQUFDRSxRQUFVLENBQUNBO0lBRWxELE1BQU1DLG1CQUFtQkwsV0FBV00sTUFBTSxDQUFDO1lBQUMsRUFBQ0MsUUFBUSxFQUFDO2VBQUtSLFNBQVNTLEVBQUUsS0FBS0Q7SUFBTyxHQUFHRSxNQUFNO0lBQzNGLHFCQUNFLDhEQUFDQztRQUFxQkMsV0FBVTs7WUFDN0JOLGlDQUNDLDhEQUFDTztnQkFBT0QsV0FBVTtnQkFBYUUsTUFBSztnQkFBU0MsU0FBU1g7MEJBQ25ERixXQUFXLE1BQU07Ozs7O3VCQUVsQjtZQUVIRixTQUFTZ0IsSUFBSTtZQUNiZCx5QkFBVyw4REFBQ2U7Z0JBQWlCaEIsWUFBWUE7Z0JBQVlpQixnQkFBZ0JsQixTQUFTUyxFQUFFOzs7Ozt1QkFBTzs7T0FSakZULFNBQVNTLEVBQUU7Ozs7O0FBV3hCO0dBekJTVjtLQUFBQTtBQTJCRixTQUFTa0IsaUJBQWlCLEtBTWhDO1FBTmdDLEVBQy9CaEIsVUFBVSxFQUNWaUIsaUJBQWlCLElBQUksRUFJdEIsR0FOZ0M7SUFPL0IsTUFBTUMscUJBQXFCbEIsV0FBV00sTUFBTSxDQUFDO1lBQUMsRUFBQ0MsUUFBUSxFQUFDO1FBQ3RELE9BQU9VLG1CQUFtQlY7SUFDNUI7SUFHQSxxQkFDRSw4REFBQ1k7a0JBQ0VELG1CQUFtQkUsR0FBRyxDQUFDLENBQUNyQix5QkFDdkIsOERBQUNEO2dCQUVDRSxZQUFZQTtnQkFDWkQsVUFBVUE7ZUFGTEEsU0FBU1MsRUFBRTs7Ozs7Ozs7OztBQU8xQjtNQXZCZ0JRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xpc3RPZkNhdGVnb3JpZXMudHN4PzIyMGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB0eXBlIHtDYXRlZ29yeX0gZnJvbSBcIkAvdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQ2F0ZWdvcnlJdGVtKHtcclxuICBjYXRlZ29yeSxcclxuICBjYXRlZ29yaWVzLFxyXG5cclxufToge1xyXG4gIGNhdGVnb3J5OiBDYXRlZ29yeTtcclxuICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdO1xyXG5cclxufSkge1xyXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4gc2V0RXhwYW5kZWQoKHZhbHVlKSA9PiAhdmFsdWUpO1xyXG5cclxuICBjb25zdCBoYXNTdWJDYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoKHtwYXJlbnRJZH0pID0+IGNhdGVnb3J5LmlkID09PSBwYXJlbnRJZCkubGVuZ3RoXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfSBjbGFzc05hbWU9XCJtbC00XCI+XHJcbiAgICAgIHtoYXNTdWJDYXRlZ29yaWVzID8gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICB7ZXhwYW5kZWQgPyBcIi1cIiA6IFwiK1wifVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgXHJcbiAgICAgIHtjYXRlZ29yeS5uYW1lfVxyXG4gICAgICB7ZXhwYW5kZWQgPyA8TGlzdE9mQ2F0ZWdvcmllcyBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSBwYXJlbnRDYXRlZ29yeT17Y2F0ZWdvcnkuaWR9IC8+IDogbnVsbH1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpc3RPZkNhdGVnb3JpZXMoe1xyXG4gIGNhdGVnb3JpZXMsXHJcbiAgcGFyZW50Q2F0ZWdvcnkgPSBudWxsLFxyXG59OiB7XHJcbiAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcclxuICBwYXJlbnRDYXRlZ29yeT86IHN0cmluZyB8IG51bGw7XHJcbn0pIHtcclxuICBjb25zdCBjYXRlZ29yaWVzVG9SZW5kZXIgPSBjYXRlZ29yaWVzLmZpbHRlcigoe3BhcmVudElkfSkgPT4ge1xyXG4gICAgcmV0dXJuIHBhcmVudENhdGVnb3J5ID09PSBwYXJlbnRJZDtcclxuICB9KTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWw+XHJcbiAgICAgIHtjYXRlZ29yaWVzVG9SZW5kZXIubWFwKChjYXRlZ29yeSkgPT4gKFxyXG4gICAgICAgIDxDYXRlZ29yeUl0ZW1cclxuICAgICAgICAgIGtleT17Y2F0ZWdvcnkuaWR9XHJcbiAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxyXG4gICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNhdGVnb3J5SXRlbSIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJoYW5kbGVDbGljayIsInZhbHVlIiwiaGFzU3ViQ2F0ZWdvcmllcyIsImZpbHRlciIsInBhcmVudElkIiwiaWQiLCJsZW5ndGgiLCJsaSIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwibmFtZSIsIkxpc3RPZkNhdGVnb3JpZXMiLCJwYXJlbnRDYXRlZ29yeSIsImNhdGVnb3JpZXNUb1JlbmRlciIsInVsIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ListOfCategories.tsx\n"));

/***/ })

});