let createContentItems = () => {
    const contentItems = document.createElement("div");
    contentItems.classList.add("content-items");

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