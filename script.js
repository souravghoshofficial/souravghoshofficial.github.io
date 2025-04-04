const hambarger = document.getElementById("hambarger");
const sidenav = document.getElementById("sidenav");
const sidenavItem = document.querySelectorAll(".sidenav-item");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");


hambarger.addEventListener("click", () => {
    if(hambarger.classList.contains("x") ){
        sidenav.style.animation = "sidenavHide 0.3s linear forwards"
        line1.style.animation = "xToHamLine1 0.2s linear forwards"
        line2.style.animation = "xToHamLine2 0.2s linear forwards"
        // line2.style.marginTop = "7px";
        // line1.style.rotate = "0deg";
        // line2.style.rotate = "0deg"
        hambarger.classList.remove("x")
    }
    else{
        sidenav.style.display = "block";
        sidenav.style.animation = "sidenavReveal 0.3s linear forwards";
        // line2.style.marginTop = "-2px";
        // line1.style.rotate = "45deg";
        // line2.style.rotate = "-45deg"
        line1.style.animation = "hamToXLine1 0.2s linear forwards"
        line2.style.animation = "hamToXLine2 0.2s linear forwards"
        hambarger.classList.add("x")
    }


})

sidenavItem.forEach(item => (item.addEventListener("click", () => {
        sidenav.style.animation = "sidenavHide 0.3s linear forwards";
        line1.style.animation = "xToHamLine1 0.2s linear forwards"
        line2.style.animation = "xToHamLine2 0.2s linear forwards"
        hambarger.classList.remove("x")
    })
))