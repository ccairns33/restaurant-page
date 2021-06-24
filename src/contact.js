import navBarColorChange from "./menu"

let loadContact = () => {
    const content = document.querySelector(".content");
    const contactItems = content.querySelector("#content-items");

    if(contactItems.classList.contains("loaded")){
        return;
    }
    // navBarColorChange("contact");
    //not working w import

    contactItems.className = "";
    contactItems.classList.add("contact-items","loaded");
    contactItems.appendChild(addContactItems());
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


export default loadContact;