import { places } from '../data/places.mjs';

const grid = document.querySelector('#places-grid');
const modal = document.querySelector('#place-modal');
const closeModal = document.querySelector('#close-modal');

// Año footer
document.querySelector('#year').textContent = new Date().getFullYear();

// Navegación hamburguesa
const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuBtn.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
});

// Mostrar cards
function displayPlaces(list) {
  grid.innerHTML = '';
  list.forEach(place => {
    const card = document.createElement('article');
    card.innerHTML = `
      <img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
      <h3>${place.name}</h3>
      <p class="category">${place.category}</p>
      <address>${place.address}</address>
      <p class="rating">${'★'.repeat(place.rating)}${'☆'.repeat(5 - place.rating)}</p>
      <button class="learn-more" data-id="${place.id}">Learn More</button>
      <button class="add-tour" data-id="${place.id}">+ Add to Tour</button>
    `;
    grid.appendChild(card);

    card.querySelector('.add-tour').addEventListener('click', () => {
    const saved = JSON.parse(localStorage.getItem('selectedPlaces') || '[]');
    const exists = saved.find(p => p.id === place.id);
  
    if (!exists) {
     saved.push({ id: place.id, name: place.name });
      localStorage.setItem('selectedPlaces', JSON.stringify(saved));
      card.querySelector('.add-tour').textContent = '✅ Added';
    } else {
      const updated = saved.filter(p => p.id !== place.id);
      localStorage.setItem('selectedPlaces', JSON.stringify(updated));
      card.querySelector('.add-tour').textContent = '+ Add to Tour';
     }
  });
});

  // botones learn more
  document.querySelectorAll('.learn-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const place = places.find(p => p.id === parseInt(btn.dataset.id));
      document.querySelector('#modal-name').textContent = place.name;
      document.querySelector('#modal-category').textContent = place.category;
      document.querySelector('#modal-address').textContent = place.address;
      document.querySelector('#modal-description').textContent = place.description;
      document.querySelector('#modal-rating').textContent = '★'.repeat(place.rating) + '☆'.repeat(5 - place.rating);
      modal.showModal();
    });
  });
}

// Filtros
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    if (filter === 'all') {
      displayPlaces(places);
    } else {
      displayPlaces(places.filter(p => p.category === filter));
    }
  });
});

// Cerrar modal
closeModal.addEventListener('click', () => modal.close());

// Cargar todos al inicio
displayPlaces(places);

// View Tour modal
const tourModal = document.querySelector('#tour-modal');
const tourList = document.querySelector('#tour-list');

document.querySelector('#view-tour-btn').addEventListener('click', () => {
const saved = JSON.parse(localStorage.getItem('selectedPlaces') || '[]');
tourList.innerHTML = '';
  
  if (saved.length === 0) {
    tourList.innerHTML = '<p>No places added yet.</p>';
  } else {
    saved.forEach(place => {
      const p = document.createElement('p');
      p.textContent = `✅ ${place.name}`;
      tourList.appendChild(p);
    });
  }
  tourModal.showModal();
});

document.querySelector('#clear-tour').addEventListener('click', () => {
  localStorage.removeItem('selectedPlaces');
  tourList.innerHTML = '<p>Tour cleared!</p>';
  document.querySelectorAll('.add-tour').forEach(btn => {
    btn.textContent = '+ Add to Tour';
  });
});

document.querySelector('#close-tour-modal').addEventListener('click', () => {
  tourModal.close();
});