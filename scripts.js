menu = document.getElementById("menu");
nav = document.getElementById("nav");
menu.addEventListener("click",myfunction);
function myfunction() {
if(nav.style.display == "none") {
  return nav.style.display = "block";
}else {
  return nav.style.display = "none";
}

};

