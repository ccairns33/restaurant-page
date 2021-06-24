let navBarColorChange = (btnLabel) => {
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button)=> {
        if(button.id !== btnLabel){
            button.classList.remove("blue");
            button.classList.add("grey");
        }
    });
}
export default navBarColorChange;