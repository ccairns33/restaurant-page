
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

let initWebsite = () =>{
    const content = document.querySelector(".content");
    content.appendChild(createHeader());
}


export default initWebsite;