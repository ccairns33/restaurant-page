

createHeader = () =>{
    const header = document.createElement("header");
    header.classList.add("d-flex center");

    const logo= document.createElement("div");
    logo.classList.add("logo");
    logo.textContent = "Il Caffé Carissimi";
    header.appendChild(logo);

    document.querySelector(".content").appendChild(header);

}

export default createHeader;