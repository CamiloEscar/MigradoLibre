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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"5aa20e5609cb\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZDY2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjVhYTIwZTU2MDljYlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/ListOfCategories.tsx":
/*!*********************************************!*\
  !*** ./src/components/ListOfCategories.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListOfCategories: function() { return /* binding */ ListOfCategories; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.1_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.1_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ ListOfCategories auto */ \nvar _s = $RefreshSig$();\n\nfunction CategoryItem() {}\n_c = CategoryItem;\nfunction ListOfCategories(param) {\n    let { categories, parentCategory = null } = param;\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const categoriesToRender = categories.filter((param)=>{\n        let { parentId } = param;\n        return parentCategory === parentId;\n    });\n    const hasSubCategories = categoriesToRender.length > 0;\n    const handleClick = ()=>setExpanded((value)=>!value);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: categoriesToRender.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"ml-4\",\n                children: [\n                    hasSubCategories ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: handleClick,\n                        children: expanded ? \"-\" : \"+\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this) : null,\n                    category.name,\n                    expanded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListOfCategories, {\n                        categories: categories,\n                        parentCategory: category.id\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this) : null\n                ]\n            }, category.id, true, {\n                fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\camil\\\\Proyectos\\\\PruebaTecnica\\\\MigradoLibre\\\\interview-challenges\\\\proyectos-live\\\\migrado-libre\\\\src\\\\components\\\\ListOfCategories.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(ListOfCategories, \"DuL5jiiQQFgbn7gBKAyxwS/H4Ek=\");\n_c1 = ListOfCategories;\nvar _c, _c1;\n$RefreshReg$(_c, \"CategoryItem\");\n$RefreshReg$(_c1, \"ListOfCategories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xpc3RPZkNhdGVnb3JpZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUcrQjtBQUUvQixTQUFTQyxnQkFHVDtLQUhTQTtBQUtGLFNBQVNDLGlCQUFpQixLQU1oQztRQU5nQyxFQUMvQkMsVUFBVSxFQUNWQyxpQkFBaUIsSUFBSSxFQUl0QixHQU5nQzs7SUFPL0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1PLHFCQUFxQkosV0FBV0ssTUFBTSxDQUFDO1lBQUMsRUFBQ0MsUUFBUSxFQUFDO1FBQ3RELE9BQU9MLG1CQUFtQks7SUFDNUI7SUFDQSxNQUFNQyxtQkFBbUJILG1CQUFtQkksTUFBTSxHQUFHO0lBRXJELE1BQU1DLGNBQWMsSUFBTU4sWUFBWSxDQUFDTyxRQUFVLENBQUNBO0lBRWxELHFCQUNFLDhEQUFDQztrQkFDRVAsbUJBQW1CUSxHQUFHLENBQUMsQ0FBQ0MseUJBQ3ZCLDhEQUFDQztnQkFBcUJDLFdBQVU7O29CQUM3QlIsaUNBQ0MsOERBQUNTO3dCQUFPQyxNQUFLO3dCQUFTQyxTQUFTVDtrQ0FDNUJQLFdBQVcsTUFBTTs7Ozs7K0JBRWxCO29CQUNIVyxTQUFTTSxJQUFJO29CQUNiakIseUJBQ0MsOERBQUNIO3dCQUFpQkMsWUFBWUE7d0JBQVlDLGdCQUFnQlksU0FBU08sRUFBRTs7Ozs7K0JBQ25FOztlQVRHUCxTQUFTTyxFQUFFOzs7Ozs7Ozs7O0FBYzVCO0dBakNnQnJCO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xpc3RPZkNhdGVnb3JpZXMudHN4PzIyMGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB0eXBlIHtDYXRlZ29yeX0gZnJvbSBcIkAvdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQ2F0ZWdvcnlJdGVtICgpIHtcclxuICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaXN0T2ZDYXRlZ29yaWVzKHtcclxuICBjYXRlZ29yaWVzLFxyXG4gIHBhcmVudENhdGVnb3J5ID0gbnVsbCxcclxufToge1xyXG4gIGNhdGVnb3JpZXM6IENhdGVnb3J5W107XHJcbiAgcGFyZW50Q2F0ZWdvcnk/OiBzdHJpbmcgfCBudWxsO1xyXG59KSB7XHJcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNhdGVnb3JpZXNUb1JlbmRlciA9IGNhdGVnb3JpZXMuZmlsdGVyKCh7cGFyZW50SWR9KSA9PiB7XHJcbiAgICByZXR1cm4gcGFyZW50Q2F0ZWdvcnkgPT09IHBhcmVudElkO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGhhc1N1YkNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzVG9SZW5kZXIubGVuZ3RoID4gMDtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiBzZXRFeHBhbmRlZCgodmFsdWUpID0+ICF2YWx1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWw+XHJcbiAgICAgIHtjYXRlZ29yaWVzVG9SZW5kZXIubWFwKChjYXRlZ29yeSkgPT4gKFxyXG4gICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfSBjbGFzc05hbWU9XCJtbC00XCI+XHJcbiAgICAgICAgICB7aGFzU3ViQ2F0ZWdvcmllcyA/IChcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIHtleHBhbmRlZCA/IFwiLVwiIDogXCIrXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cclxuICAgICAgICAgIHtleHBhbmRlZCA/IChcclxuICAgICAgICAgICAgPExpc3RPZkNhdGVnb3JpZXMgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gcGFyZW50Q2F0ZWdvcnk9e2NhdGVnb3J5LmlkfSAvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2F0ZWdvcnlJdGVtIiwiTGlzdE9mQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJwYXJlbnRDYXRlZ29yeSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJjYXRlZ29yaWVzVG9SZW5kZXIiLCJmaWx0ZXIiLCJwYXJlbnRJZCIsImhhc1N1YkNhdGVnb3JpZXMiLCJsZW5ndGgiLCJoYW5kbGVDbGljayIsInZhbHVlIiwidWwiLCJtYXAiLCJjYXRlZ29yeSIsImxpIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ListOfCategories.tsx\n"));

/***/ })

});