const container = document.querySelector("#members");

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
container.classList.add("grid");

function displayMembers(members) {
    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = ` 
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        container.appendChild(card);
    });

}

async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    
    displayMembers(data);
}

getMembers();

gridButton.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list")
});

listButton.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
});

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

