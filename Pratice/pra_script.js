const adaEl = document.getElementById("ada");
const menuEl = document.getElementById("menubar");
const closeEl = document.getElementById("btn-close");
const spanEl = document.getElementById("spanEl");


function openMenu() {
    menuEl.style.opacity = 1;
    menuEl.style.visibility = "visible";
}

function closeMenu() {
    menuEl.style.opacity = 0;
    menuEl.style.visibility = "hidden";
}

adaEl.addEventListener("click", openMenu);
closeEl.addEventListener("click", closeMenu);

menuEl.addEventListener("mousedown", closeMenu);