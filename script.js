// showing menu

const menuOpenBtn = document.querySelector("#bar");
const menuCloseBtn = document.querySelector("#close");

const navbarDom = document.querySelector("#navbar");

menuOpenBtn.addEventListener("click", menuOpen);
menuCloseBtn.addEventListener("click", menuClose);

function menuOpen() {
  navbarDom.style.right = "0px";
}

function menuClose() {
  navbarDom.style.right = "-300px";
}

const MainImgDom = document.querySelector("#MainImg");
const smallImgDom = document.getElementsByClassName("smallImg");

smallImgDom[0].onmouseover=function(){
  MainImgDom.src = smallImgDom[0].src; 
}
smallImgDom[1].onmouseover=function(){
  MainImgDom.src = smallImgDom[1].src; 
}
smallImgDom[2].onmouseover=function(){
  MainImgDom.src = smallImgDom[2].src; 
}
smallImgDom[3].onmouseover=function(){
  MainImgDom.src = smallImgDom[3].src; 
}
      





