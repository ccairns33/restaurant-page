import {navBarColorChange} from "./website.js"
let loadHome = () => {
    const homeContent = document.querySelector("#main-content");

   homeContent.className = '';
    navBarColorChange("home");

    homeContent.appendChild(addHome());
}
let addHome = () => {
    const homeContent = document.createElement("div");
    homeContent.classList.add("home");
    


    return homeContent;

}
export { loadHome };