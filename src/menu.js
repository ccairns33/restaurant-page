let loadMenu = () => {
    const content = document.querySelector(".content");
    const menuItems = content.querySelector("#content-items");
    
    //preventing from loading more than once
    if(menuItems.classList.contains("loaded")){
        return;
    }
    //remove all class names
    menuItems.className = '';

    //add menu class
    menuItems.classList.add("menu-items", "loaded");
    menuItems.appendChild(addMenuItems());
    navBarColorChange("menu");

}
let navBarColorChange = (btnLabel) => {
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button)=> {
        if(button.id !== btnLabel){
            button.classList.remove("blue");
            button.classList.add("grey");
        }
    });
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
export default loadMenu;