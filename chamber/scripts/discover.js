import { places } from '../data/places.mjs';

const grid = document.querySelector('#places-grid');

places.forEach(place => {
    const card = document.createElement('article');
    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}" alt="${place.alt}" loading="lazy" width="300" height="200">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
    `;
    grid.appendChild(card);

    const modal = document.createElement('dialog');
    modal.innerHTML = `
        <h2>${place.name}</h2>
        <p>${place.description}</p>
        <button class="close-modal">Close</button>`;
    
    document.body.appendChild(modal);

    card.querySelector('button').addEventListener('click', () => {
        modal.showModal ();
    });

    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.close();
    });
        
});

const lastVisit = localStorage.getItem('lastVisit');
const container = document.querySelector('#visitor-message');
let message = '';

if(!lastVisit) {
    message = 'Welcome! Let us know if you have any questions.';
} else {
    const days = Math.floor((Date.now() - lastVisit) / (1000 * 60 * 60 * 24));
    if (days < 1) {
        message = 'Back so soon! Awesome!';
    } else if (days ===1) {
        message = 'You last visited 1 day ago.';
    } else {
        message = `You last visited  ${days}' days ago.`;
    }
}

container.textContent = message;
localStorage.setItem('lastVisit', Date.now());