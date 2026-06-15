// Navegación
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuBtn.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

// Año footer
document.querySelector("#year").textContent = new Date().getFullYear();

// Timestamp formulario
document.querySelector("#timestamp").value = new Date().toLocaleDateString();