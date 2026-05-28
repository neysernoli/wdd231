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
        <img 
          src="${member.image}" 
          alt="${member.name}"
          width="300"
          height="180"
        >
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


