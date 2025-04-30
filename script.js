const hambarger = document.getElementById("hambarger");
const sidenav = document.getElementById("sidenav");
const sidenavItem = document.querySelectorAll(".sidenav-item");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const currentYearSpan = document.getElementById("current-year");
const main = document.getElementById("main");
const overlay = document.getElementById("overlay");

let currentYear = new Date().getFullYear();
currentYearSpan.innerText = currentYear;

hambarger.addEventListener("click", () => {
  if (hambarger.classList.contains("x")) {
    sidenav.style.animation = "sidenavHide 0.3s linear forwards";
    line1.style.animation = "xToHamLine1 0.2s linear forwards";
    line2.style.animation = "xToHamLine2 0.2s linear forwards";
    hambarger.classList.remove("x");
    main.style.overflowY = "scroll";
    overlay.style.display = "none";
  } else {
    sidenav.style.display = "block";
    sidenav.style.animation = "sidenavReveal 0.3s linear forwards";
    line1.style.animation = "hamToXLine1 0.2s linear forwards";
    line2.style.animation = "hamToXLine2 0.2s linear forwards";
    hambarger.classList.add("x");
    main.style.overflowY = "hidden";
    overlay.style.display = "block";
  }
});

sidenavItem.forEach((item) =>
  item.addEventListener("click", () => {
    sidenav.style.animation = "sidenavHide 0.3s linear forwards";
    line1.style.animation = "xToHamLine1 0.2s linear forwards";
    line2.style.animation = "xToHamLine2 0.2s linear forwards";
    hambarger.classList.remove("x");
    main.style.overflowY = "scroll";
    overlay.style.display = "none";
  })
);
