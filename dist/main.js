/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n\n(0,_website_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet createContentItems = () => {\n    const contentItems = document.createElement(\"div\");\n    contentItems.classList.add(\"content-items\",\"padding-btm\");\n\n    return contentItems;\n}\n\nlet createHeader = () =>{\n    const header = document.createElement(\"header\");\n    header.classList.add(\"d-flex\", \"center\");\n\n    const logo= document.createElement(\"div\");\n    logo.classList.add(\"logo\");\n    logo.textContent = \"Il Caffé Carissimi\";\n    header.appendChild(logo);\n\n    return header;\n\n}\nlet createNav = () =>{\n    const navBar = document.createElement(\"nav\");\n\n    const tabDiv = document.createElement(\"div\");\n    tabDiv.classList.add(\"tabs\" ,\"d-flex\",\"center\");\n    \n    const welcomeBtn = document.createElement(\"button\");\n    welcomeBtn.textContent=\"Benvenuto!\";\n    welcomeBtn.classList.add(\"nav-btn\");\n    tabDiv.appendChild(welcomeBtn);\n\n    const menu = document.createElement(\"button\");\n    menu.textContent=\"Menu\";\n    menu.classList.add(\"nav-btn\");\n    tabDiv.appendChild(menu);\n\n    const contact = document.createElement(\"button\");\n    contact.textContent=\"Contact\";\n    contact.classList.add(\"nav-btn\", \"blue\");\n    tabDiv.appendChild(contact);\n\n    navBar.appendChild(tabDiv);\n\n    return navBar;\n}\nlet createFooter = () => {\n    const footer = document.createElement(\"footer\");\n    footer.classList.add(\"d-flex\")\n\n    const insta = document.createElement(\"i\");\n    insta.classList.add(\"fab\", \"fa-instagram\");\n    footer.appendChild(insta);\n\n    const mail = document.createElement(\"i\");\n    mail.classList.add(\"fas\", \"fa-envelope\");\n    footer.appendChild(mail);\n\n    const github = document.createElement(\"i\");\n    github.classList.add(\"fab\", \"fa-github-square\");\n    footer.appendChild(github);\n\n    return footer;\n}\nlet initWebsite = () =>{\n    const content = document.querySelector(\".content\");\n    content.appendChild(createContentItems());\n\n    const contentItems = document.querySelector(\".content-items\");\n    \n    contentItems.appendChild(createHeader());\n    contentItems.appendChild(createNav());\n    contentItems.appendChild(createFooter());\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;