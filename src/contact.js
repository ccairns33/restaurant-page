import navBarColorChange from "./menu"

let loadContact = () => {
    const content = document.querySelector(".content");
    const contactItems = content.querySelector("#content-items");

    if(contactItems.classList.contains("loaded")){
        return;
    }
    contactItems.className = "";
    contactItems.classList.add("contact-items","loaded");
    contactItems.appendChild(addContactItems());
    navBarColorChange("contact");
}
let addContactItems = () => {
    const contactContent = document.createElement("div");
    contactContent.classList.add("contact-content", "blue");

    const location= document.createElement("div");
    location.classList.add("location");
    const road = document.createElement("div");
    road.textContent="3 rue Neuve Popincourt";
    const zipcode = document.createElement("div");
    zipcode.textContent="75011 Paris";

    location.appendChild(road);
    location.appendChild(zipcode);

    contactContent.appendChild(location);




    return contactContent;
}


export default loadContact;