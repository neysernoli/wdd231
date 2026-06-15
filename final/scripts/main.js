import { places } from '../data/places.mjs';

// Navegación hamburguesa
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuBtn.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

// Año footer
document.querySelector("#year").textContent = new Date().getFullYear();

// Cards destacadas
async function loadFeaturedPlaces() {
    try {
        const grid = document.querySelector('#featured-grid');
        
        places.slice(0, 4).forEach(place => {
          const card = document.createElement('article');
          card.innerHTML = `
            <img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
            <h3>${place.name}</h3>
            <p class="category">${place.category}</p>
            <p>${place.description}</p>
          `;
          grid.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading places:', error);
    }
}

loadFeaturedPlaces();