const menuButton = document.querySelector("#nav-button");
const navigation = document.querySelector("#nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }

});

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;