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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\nlet loadContact = () => {\n    const content = document.querySelector(\".content\");\n    const contactItems = content.querySelector(\"#content-items\");\n\n    if(contactItems.classList.contains(\"loaded\")){\n        return;\n    }\n    // navBarColorChange(\"contact\");\n    //not working w import\n\n    contactItems.className = \"\";\n    contactItems.classList.add(\"contact-items\",\"loaded\");\n    contactItems.appendChild(addContactItems());\n}\nlet addContactItems = () => {\n    const contactContent = document.createElement(\"div\");\n    contactContent.classList.add(\"contact-content\", \"blue\");\n\n    const location= document.createElement(\"div\");\n    location.classList.add(\"location\");\n    const road = document.createElement(\"div\");\n    road.textContent=\"3 rue Neuve Popincourt\";\n    const zipcode = document.createElement(\"div\");\n    zipcode.textContent=\"75011 Paris\";\n\n    location.appendChild(road);\n    location.appendChild(zipcode);\n\n    contactContent.appendChild(location);\n\n    const divider1 = document.createElement(\"div\");\n    divider1.classList.add(\"divider\");\n    contactContent.appendChild(divider1);\n\n    const info=document.createElement(\"div\");\n    info.classList.add(\"info\");\n\n    const hours = document.createElement(\"div\");\n    hours.textContent=\"Tous les jours de 8h30 à 17h30\";\n    info.appendChild(hours);\n\n    const email = document.createElement(\"div\");\n    email.textContent=\"contact@cafeoberkampf.com\";\n    info.appendChild(email);\n\n    const phone = document.createElement(\"div\");\n    phone.textContent=\"+33 1 43 55 60 10\";\n    info.appendChild(phone);\n\n    contactContent.appendChild(info);\n\n    const divider2 = document.createElement(\"div\");\n    divider2.classList.add(\"divider\");\n    contactContent.appendChild(divider2);\n\n    const reserv = document.createElement(\"div\");\n    reserv.textContent=\"PAS DE RÉSERVATIONS!\";\n    contactContent.appendChild(reserv);\n\n    const map = document.createElement(\"img\");\n    map.src=\"location.png\";\n    map.alt=\"map\";\n\n    contactContent.appendChild(map);\n\n\n    return contactContent;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n\n(0,_website_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet loadMenu = () => {\n    const content = document.querySelector(\".content\");\n    const menuItems = content.querySelector(\"#content-items\");\n    \n    //preventing from loading more than once\n    if(menuItems.classList.contains(\"loaded\")){\n        return;\n    }\n    //remove all class names\n    menuItems.className = '';\n\n    //add menu class\n    menuItems.classList.add(\"menu-items\", \"loaded\");\n    menuItems.appendChild(addMenuItems());\n    navBarColorChange(\"menu\");\n\n}\nlet navBarColorChange = (btnLabel) => {\n    let buttons = document.querySelectorAll(\"button\");\n    buttons.forEach((button)=> {\n        if(button.id !== btnLabel){\n            button.classList.remove(\"blue\");\n            button.classList.add(\"grey\");\n        }\n    });\n}\nlet addMenuItems = () =>{\n    const menuContent =document.createElement(\"div\");\n    menuContent.classList.add(\"menu-content\", \"blue\");\n\n    menuContent.appendChild(menuItem(\"TARTINE AU BEURRE : pain au levain bio\", \"- 3€\", true)); \n    //item addition header\n    const itemAddHeader = document.createElement(\"div\");\n    itemAddHeader.classList.add(\"item-addition-header\");\n    itemAddHeader.textContent = \"avec: \";\n    menuContent.appendChild(menuItem(\"- Beurre de cacahuète, Beurre d’amandes, confiture \",\"+ 3€\",false))\n    menuContent.appendChild(menuItem(\"- Fromage Comté \",\"+ 3€\",false))\n    menuContent.appendChild(menuItem(\"- Option pain sans gluten 5 Grains (Chambelland)\",\"+ 1.5€\",false))\n\n    //the rest of the standalone menu items\n    menuContent.appendChild(menuItem(\"GRANOLA SUCRÉ : avoine et riz soufflé toastés au Tahini et miel, noisettes torréfiées, fromage blanc, poudre de coco et fruits de saison\", \" - 8,5€  option vegan possible + 1€\", true)); \n    menuContent.appendChild(menuItem(\"GRANOLA SALÉ : avoine, noisettes, cacahuètes, noix de cajou, amandes, mélange de graines, piment d'Espelette, origan, labné, chips de kale et carottes rôties au four\", \" - 10,5€\", true)); \n    menuContent.appendChild(menuItem(\"TARTINE AVOCAT : avocat, gingembre, agave, pickles d'oignons, mix d’herbes et dukkah\", \"- 8€ avec oeuf mollet / with poached egg + 2€ , opt. GF + 1,5€\", true)); \n    menuContent.appendChild(menuItem(\"TARTINE HALLOUMI : halloumi grillé, houmous de betterave et pois chiche, tomates rôties et mix d’herbes\", \"- 8,5€ opt. GF + 1,5€\", true)); \n    menuContent.appendChild(menuItem(\"THE LOST IN CHEESELAND : sandwich grillé aux 3 fromages, pickles de concombre et confiture de piment\", \"- 8€ opt. GF + 1,5€\", true)); \n    menuContent.appendChild(menuItem(\"BURRATA BUN : bun brioché maison, burrata des pouilles, pesto de roquette, tomates séchées et pousses d’épinards\", \"- 11,5€\", true)); \n    menuContent.appendChild(menuItem(\"DEVIL’S EGGS : deux oeufs mollet sur une sauce épicée à base de poivrons et tomates, labné et dukkah\", \"- 11,5€\", true)); \n\n    return menuContent;\n}\nlet addText = (menuItem, text, price) => {\n    menuItem.classList.add(\"d-flex\", \"space-btwn\");\n    menuItem.textContent=`${text}`;\n\n    let span = document.createElement(\"span\");\n    menuItem.appendChild(span);\n    span.classList.add(\"item-price\");\n    span.innerHTML=`${price}`;\n\n    return menuItem;\n}\nlet menuItem = (text, price, bool) =>{\n    const menuItem = document.createElement(\"div\");\n\n    //if passed true, is a stand alone menu item, otherwise an addition\n    if (bool){\n        const menuItemContainer = document.createElement(\"div\");\n        menuItemContainer.classList.add(\"menu-item-container\");\n        menuItem.classList.add(\"menu-item\");\n        addText(menuItem, text, price);\n        menuItemContainer.appendChild(menuItem);\n        \n        return menuItemContainer;\n\n    }\n    else {\n        menuItem.classList.add(\"item-addition\");\n        addText(menuItem, text, price);\n        \n        return menuItem;\n    }\n    \n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n// add imports for loading home, contact, and menu\n\n\n\n\n\nlet createContentItems = () => {\n    const contentItems = document.createElement(\"div\");\n    contentItems.classList.add(\"content-items\");\n    contentItems.setAttribute(\"id\", \"content-items\")\n\n    return contentItems;\n}\n\nlet createHeader = () =>{\n    const header = document.createElement(\"header\");\n    header.classList.add(\"d-flex\", \"center\");\n\n    const logo= document.createElement(\"div\");\n    logo.classList.add(\"logo\");\n    logo.textContent = \"Il Caffé Carissimi\";\n    header.appendChild(logo);\n\n    return header;\n\n}\nlet createNav = () =>{\n    const navBar = document.createElement(\"nav\");\n\n    // adding tabs to nav-bar\n    const tabDiv = document.createElement(\"div\");\n    tabDiv.classList.add(\"tabs\" ,\"d-flex\",\"center\");\n    \n    const welcomeBtn = document.createElement(\"button\");\n    welcomeBtn.textContent=\"Benvenuto!\";\n    welcomeBtn.classList.add(\"nav-btn\");\n    welcomeBtn.id=\"home\";\n    tabDiv.appendChild(welcomeBtn);\n\n    const menuBtn = document.createElement(\"button\");\n    menuBtn.textContent=\"Menu\";\n    menuBtn.id=\"menu\";\n    menuBtn.classList.add(\"nav-btn\");\n    tabDiv.appendChild(menuBtn);\n\n    const contactBtn = document.createElement(\"button\");\n    contactBtn.textContent=\"Contact\";\n    contactBtn.id=\"contact\";\n    contactBtn.classList.add(\"nav-btn\", \"blue\");\n    tabDiv.appendChild(contactBtn);\n\n    navBar.appendChild(tabDiv);\n\n    // adding event-listeners\n    welcomeBtn.addEventListener(\"click\", (e) => {\n        \n        addActive(welcomeBtn);\n        loadHome();\n    })\n    menuBtn.addEventListener(\"click\",(e)=>{\n        addActive(menuBtn);\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n    })\n    contactBtn.addEventListener(\"click\", (e) => {\n        \n        addActive(contactBtn);\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n    })\n    \n    \n\n    return navBar;\n}\nlet addActive = (btn) => {\n    const buttons = document.querySelectorAll(\"button\");\n    buttons.forEach((button)=> {\n        if(button !== btn){\n            button.classList.remove(\"active\");\n        }\n        else {\n            button.classList.add(\"active\");\n        }\n    })\n}\nlet createFooter = () => {\n    const footer = document.createElement(\"footer\");\n    footer.classList.add(\"d-flex\")\n\n    const insta = document.createElement(\"i\");\n    insta.classList.add(\"fab\", \"fa-instagram\");\n    footer.appendChild(insta);\n\n    const mail = document.createElement(\"i\");\n    mail.classList.add(\"fas\", \"fa-envelope\");\n    footer.appendChild(mail);\n\n    const github = document.createElement(\"i\");\n    github.classList.add(\"fab\", \"fa-github-square\");\n    footer.appendChild(github);\n\n    return footer;\n}\nlet initWebsite = () =>{\n    const content = document.querySelector(\".content\");\n    content.appendChild(createContentItems());\n\n    const contentItems = document.querySelector(\".content-items\");\n    \n    contentItems.appendChild(createHeader());\n    contentItems.appendChild(createNav());\n    contentItems.appendChild(createFooter());\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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