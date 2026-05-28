const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {

  navMenu.classList.toggle("open");

  if (navMenu.classList.contains("open")) {
    menuBtn.textContent = "✖";
  } else {
    menuBtn.textContent = "☰";
  }

});