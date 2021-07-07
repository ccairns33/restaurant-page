// add imports for loading home, contact, and menu
import {loadMenu} from "./menu.js";
import {loadContact} from "./contact.js";
import {loadHome} from "./home.js";






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
        loadHome();
    })
    menuBtn.addEventListener("click",(e)=>{
        clear();
        addActive(menuBtn);
        loadMenu();
    })
    contactBtn.addEventListener("click", (e) => {
        clear();
        addActive(contactBtn);
        loadContact();
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

export { initWebsite, createHeader, createNav,createMainSection, createFooter,navBarColorChange  };
