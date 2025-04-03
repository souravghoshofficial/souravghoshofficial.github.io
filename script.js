const hambarger = document.getElementById("hambarger");
const xmark = document.getElementById("xmark");
const sidenav = document.getElementById("sidenav");
const sidenavItem = document.querySelectorAll(".sidenav-item");


hambarger.addEventListener("click", () => {
    sidenav.style.display = "block";
    sidenav.style.animation = "sidenavReveal 0.3s linear forwards";
})

xmark.addEventListener("click", () => {
    sidenav.style.animation = "sidenavHide 0.3s linear forwards"
    xmark.style.zIndex = 100;  
})

sidenavItem.forEach(item => (item.addEventListener("click", () => {
        sidenav.style.animation = "sidenavHide 0.3s linear forwards";
    })
))

