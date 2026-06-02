console.log("join.js conectado");

const modalLinks = document.querySelectorAll(".membership-card a");

modalLinks.forEach(link => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    const modalId = link.getAttribute("href");

    const modal = document.querySelector(modalId);

    modal.showModal();

  });

});

const timestamp = document.querySelector("#timestamp");

timestamp.value = new Date().toISOString();