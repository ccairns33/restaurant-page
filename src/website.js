
let createHeader = () =>{
    const header = document.createElement("header");
    header.classList.add("d-flex", "center");

    const logo= document.createElement("div");
    logo.classList.add("logo");
    logo.textContent = "Il Caffé Carissimi";
    header.appendChild(logo);
    console.log("hi");

    return header;

}
let createNav = () =>{
    const navBar = document.createElement("nav");

    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tabs" ,"d-flex","center");
    
    const welcomeBtn = document.createElement("button");
    welcomeBtn.textContent="Benvenuto!";
    welcomeBtn.classList.add("nav-btn");
    tabDiv.appendChild(welcomeBtn);

    const menu = document.createElement("button");
    menu.textContent="Menu";
    menu.classList.add("nav-btn");
    tabDiv.appendChild(menu);

    const contact = document.createElement("button");
    contact.textContent="Contact";
    contact.classList.add("nav-btn", "blue");
    tabDiv.appendChild(contact);

    navBar.appendChild(tabDiv);

    return navBar;
}
let initWebsite = () =>{
    const content = document.querySelector(".content");
    content.appendChild(createHeader());
    content.appendChild(createNav());
}


export default initWebsite;