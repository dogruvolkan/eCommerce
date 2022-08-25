// showing menu

const menuOpenBtn = document.querySelector("#bar");
const menuCloseBtn = document.querySelector("#close");

const navbarDom = document.querySelector("#navbar");

menuOpenBtn.addEventListener("click" , menuOpen);
menuCloseBtn.addEventListener("click" , menuClose);

function menuOpen(){
    navbarDom.style.right="0px"
}

function menuClose(){
    navbarDom.style.right="-300px"
}