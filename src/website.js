// add imports for loading home, contact, and menu
import loadMenu from "./menu.js";
import loadContact from "./contact.js";



let createContentItems = () => {
    const contentItems = document.createElement("div");
    contentItems.classList.add("content-items");
    contentItems.setAttribute("id", "content-items")

    return contentItems;
}

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
    welcomeBtn.classList.add("nav-btn");
    welcomeBtn.id="home";
    tabDiv.appendChild(welcomeBtn);

    const menuBtn = document.createElement("button");
    menuBtn.textContent="Menu";
    menuBtn.id="menu";
    menuBtn.classList.add("nav-btn");
    tabDiv.appendChild(menuBtn);

    const contactBtn = document.createElement("button");
    contactBtn.textContent="Contact";
    contactBtn.id="contact";
    contactBtn.classList.add("nav-btn", "blue");
    tabDiv.appendChild(contactBtn);

    navBar.appendChild(tabDiv);

    // adding event-listeners
    welcomeBtn.addEventListener("click", (e) => {
        
        addActive(welcomeBtn);
        loadHome();
    })
    menuBtn.addEventListener("click",(e)=>{
        addActive(menuBtn);
        loadMenu();
    })
    contactBtn.addEventListener("click", (e) => {
        
        addActive(contactBtn);
        loadContact();
    })
    
    

    return navBar;
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
let initWebsite = () =>{
    const content = document.querySelector(".content");
    content.appendChild(createContentItems());

    const contentItems = document.querySelector(".content-items");
    
    contentItems.appendChild(createHeader());
    contentItems.appendChild(createNav());
    contentItems.appendChild(createFooter());

}


export default initWebsite;