/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ "./src/website.js");


let loadContact = () => {
    const content = document.querySelector(".content");
    const contactItems = content.querySelector("#main-content");

    contactItems.className = '';

    (0,_website_js__WEBPACK_IMPORTED_MODULE_0__.navBarColorChange)("contact");
    contactItems.appendChild(addContactItems());
}
let addContactItems = () => {
    const contactContent = document.createElement("div");
    contactContent.classList.add("contact", "blue");

    const location= document.createElement("div");
    location.classList.add("location");
    const road = document.createElement("div");
    road.textContent="3 rue Neuve Popincourt";
    const zipcode = document.createElement("div");
    zipcode.textContent="75011 Paris";

    location.appendChild(road);
    location.appendChild(zipcode);

    contactContent.appendChild(location);

    const divider1 = document.createElement("div");
    divider1.classList.add("divider");
    contactContent.appendChild(divider1);

    const info=document.createElement("div");
    info.classList.add("info");

    const hours = document.createElement("div");
    hours.textContent="Tous les jours de 8h30 à 17h30";
    info.appendChild(hours);

    const email = document.createElement("div");
    email.textContent="contact@cafeoberkampf.com";
    info.appendChild(email);

    const phone = document.createElement("div");
    phone.textContent="+33 1 43 55 60 10";
    info.appendChild(phone);

    contactContent.appendChild(info);

    const divider2 = document.createElement("div");
    divider2.classList.add("divider");
    contactContent.appendChild(divider2);

    const reserv = document.createElement("div");
    reserv.textContent="PAS DE RÉSERVATIONS!";
    contactContent.appendChild(reserv);

    const map = document.createElement("img");
    map.src="location.png";
    map.alt="map";

    contactContent.appendChild(map);


    return contactContent;
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ "./src/website.js");

let loadHome = () => {
    const homeContent = document.querySelector("#main-content");

   homeContent.className = '';
    (0,_website_js__WEBPACK_IMPORTED_MODULE_0__.navBarColorChange)("home");

    homeContent.appendChild(addHome());
}
let addHome = () => {
    const homeContent = document.createElement("div");
    homeContent.classList.add("home");
    


    return homeContent;

}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");

let loadMenu = () => {
    const content = document.querySelector(".content");
    const menuItems = content.querySelector("#main-content");
    
    
    //remove all class names
    menuItems.className = '';
    menuItems.appendChild(addMenuItems());
    (0,_website__WEBPACK_IMPORTED_MODULE_0__.navBarColorChange)("menu");

}

let addMenuItems = () =>{
    const menuContent =document.createElement("div");
    menuContent.classList.add("menu-content", "blue");

    menuContent.appendChild(menuItem("TARTINE AU BEURRE : pain au levain bio", "- 3€", true)); 
    //item addition header
    const itemAddHeader = document.createElement("div");
    itemAddHeader.classList.add("item-addition-header");
    itemAddHeader.textContent = "avec: ";
    menuContent.appendChild(menuItem("- Beurre de cacahuète, Beurre d’amandes, confiture ","+ 3€",false))
    menuContent.appendChild(menuItem("- Fromage Comté ","+ 3€",false))
    menuContent.appendChild(menuItem("- Option pain sans gluten 5 Grains (Chambelland)","+ 1.5€",false))

    //the rest of the standalone menu items
    menuContent.appendChild(menuItem("GRANOLA SUCRÉ : avoine et riz soufflé toastés au Tahini et miel, noisettes torréfiées, fromage blanc, poudre de coco et fruits de saison", " - 8,5€  option vegan possible + 1€", true)); 
    menuContent.appendChild(menuItem("GRANOLA SALÉ : avoine, noisettes, cacahuètes, noix de cajou, amandes, mélange de graines, piment d'Espelette, origan, labné, chips de kale et carottes rôties au four", " - 10,5€", true)); 
    menuContent.appendChild(menuItem("TARTINE AVOCAT : avocat, gingembre, agave, pickles d'oignons, mix d’herbes et dukkah", "- 8€ avec oeuf mollet / with poached egg + 2€ , opt. GF + 1,5€", true)); 
    menuContent.appendChild(menuItem("TARTINE HALLOUMI : halloumi grillé, houmous de betterave et pois chiche, tomates rôties et mix d’herbes", "- 8,5€ opt. GF + 1,5€", true)); 
    menuContent.appendChild(menuItem("THE LOST IN CHEESELAND : sandwich grillé aux 3 fromages, pickles de concombre et confiture de piment", "- 8€ opt. GF + 1,5€", true)); 
    menuContent.appendChild(menuItem("BURRATA BUN : bun brioché maison, burrata des pouilles, pesto de roquette, tomates séchées et pousses d’épinards", "- 11,5€", true)); 
    menuContent.appendChild(menuItem("DEVIL’S EGGS : deux oeufs mollet sur une sauce épicée à base de poivrons et tomates, labné et dukkah", "- 11,5€", true)); 

    return menuContent;
}
let addText = (menuItem, text, price) => {
    menuItem.classList.add("d-flex", "space-btwn");
    menuItem.textContent=`${text}`;

    let span = document.createElement("span");
    menuItem.appendChild(span);
    span.classList.add("item-price");
    span.innerHTML=`${price}`;

    return menuItem;
}
let menuItem = (text, price, bool) =>{
    const menuItem = document.createElement("div");

    //if passed true, is a stand alone menu item, otherwise an addition
    if (bool){
        const menuItemContainer = document.createElement("div");
        menuItemContainer.classList.add("menu-item-container");
        menuItem.classList.add("menu-item");
        addText(menuItem, text, price);
        menuItemContainer.appendChild(menuItem);
        
        return menuItemContainer;

    }
    else {
        menuItem.classList.add("item-addition");
        addText(menuItem, text, price);
        
        return menuItem;
    }
    
}

 

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initWebsite": () => (/* binding */ initWebsite),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createNav": () => (/* binding */ createNav),
/* harmony export */   "createMainSection": () => (/* binding */ createMainSection),
/* harmony export */   "createFooter": () => (/* binding */ createFooter),
/* harmony export */   "navBarColorChange": () => (/* binding */ navBarColorChange)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
// add imports for loading home, contact, and menu









let createHeader = () =>{
    const header = document.createElement("header");
    header.classList.add("d-flex", "center");

    const logo= document.createElement("div");
    logo.classList.add("logo");
    logo.textContent = "Il Caffé Carissimi";
    header.appendChild(logo);

    return header;

}
let createNav = () =>{
    const navBar = document.createElement("nav");

    // adding tabs to nav-bar
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tabs" ,"d-flex","center");
    
    const welcomeBtn = document.createElement("button");
    welcomeBtn.textContent="Benvenuto!";
    welcomeBtn.classList.add("active"); //default page
    welcomeBtn.setAttribute("id","home");
    welcomeBtn.classList.add("gold", "nav-btn");

    tabDiv.appendChild(welcomeBtn);

    const menuBtn = document.createElement("button");
    menuBtn.textContent="Menu";
    menuBtn.setAttribute("id","menu");
    menuBtn.classList.add("gold", "nav-btn");

    tabDiv.appendChild(menuBtn);

    const contactBtn = document.createElement("button");
    contactBtn.textContent="Contact";
    contactBtn.setAttribute("id","contact");

    contactBtn.classList.add("blue", "nav-btn");
    tabDiv.appendChild(contactBtn);

    // adding event-listeners
    welcomeBtn.addEventListener("click", (e) => {
        clear();
        addActive(welcomeBtn);
        (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.loadHome)();
    })
    menuBtn.addEventListener("click",(e)=>{
        clear();
        addActive(menuBtn);
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.loadMenu)();
    })
    contactBtn.addEventListener("click", (e) => {
        clear();
        addActive(contactBtn);
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.loadContact)();
    })
    
    
    navBar.appendChild(tabDiv);

    return navBar;
}
let clear = () =>{
    let main = document.querySelector("#main-content");
    main.innerHTML="";
}
let addActive = (btn) => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button)=> {
        if(button !== btn){
            button.classList.remove("active");
        }
        else {
            button.classList.add("active");
        }
    })
}
let createMainSection = () => {
    const main = document.createElement("div");
    main.classList.add("home");
    main.setAttribute("id", "content-items");
    main.setAttribute("id", "main-content");



    return main;
}
let createFooter = () => {
    const footer = document.createElement("footer");
    footer.classList.add("d-flex")

    const insta = document.createElement("i");
    insta.classList.add("fab", "fa-instagram");
    footer.appendChild(insta);

    const mail = document.createElement("i");
    mail.classList.add("fas", "fa-envelope");
    footer.appendChild(mail);

    const github = document.createElement("i");
    github.classList.add("fab", "fa-github-square");
    footer.appendChild(github);

    return footer;
}
let navBarColorChange = (btnLabel) => {
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button)=> {
        if(button.id !== btnLabel){
            button.classList.remove("blue");
            button.classList.remove("gold");
            button.classList.add("grey");
        }
        else{
            button.classList.add("gold");
        }
    });
}
let initWebsite = () =>{
    const content = document.querySelector(".content");
    

    
    content.appendChild(createHeader());
    content.appendChild(createNav());
    content.appendChild(createMainSection());
    content.appendChild(createFooter());

    
    
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ "./src/website.js");

(0,_website_js__WEBPACK_IMPORTED_MODULE_0__.initWebsite)();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map