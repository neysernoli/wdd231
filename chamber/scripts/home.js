const currentTemp = document.querySelector("#current-temp");

const weatherDesc = document.querySelector("#weather-desc");

const weatherIcon = document.querySelector("#weather-icon");

const humidity = document.querySelector("#humidity");

const highTemp = document.querySelector("#high-temp");

const lowTemp = document.querySelector("#low-temp");

const spotlightContainer = document.querySelector(".spotlights-container");

const forecastContainer = document.querySelector("#forecast-container");

const membersURL = "data/members.json";

const  weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=-6.77&lon=-79.84&units=metric&appid=df8c80ca775d35317c2dc81afa809085";

const  forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=-6.77&lon=-79.84&units=metric&appid=df8c80ca775d35317c2dc81afa809085";

async function apiFetch() {
  const response = await fetch(weatherUrl);
  const data = await response.json();

  currentTemp.textContent = data.main.temp;

  weatherDesc.textContent = data.weather[0].description;  

  humidity.textContent = data.main.humidity;

  highTemp.textContent = data.main.temp_max;

  lowTemp.textContent = data.main.temp_min;

  const icon = data.weather[0].icon;

  const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  weatherIcon.setAttribute("src", iconSrc);
}
apiFetch();

async function getMembers() {

  const response = await fetch("data/members.json");

  const data = await response.json();

  displaySpotlights(data);

}
function displaySpotlights(members) {
  const filteredMembers = members.filter(member =>
    member.membership === 2 ||
    member.membership === 3
  );

  filteredMembers.sort(() => 0.5 - Math.random());
  const randomMembers = filteredMembers.slice(0, 3);

  randomMembers.forEach(member => {

    const card = document.createElement("section");

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.phone}</p>
      <p>${member.address}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    spotlightContainer.appendChild(card);

  });

}

getMembers();

async function getForecast() {

  const response = await fetch(forecastUrl);

  const data = await response.json();

  const dailyData = data.list.filter(item =>
  item.dt_txt.includes("12:00:00")
  );

  displayForecast(dailyData.slice(0, 3));

}
function displayForecast(list) {

  forecastContainer.innerHTML = "";

  list.forEach(item => {

    const date = new Date(item.dt_txt);
  const day = date.toLocaleDateString("en-US", { weekday: "long" });

    const card = document.createElement("div");

    card.innerHTML = `
      <p>${day}: ${Math.round(item.main.temp)}°C</p>
    `;

    forecastContainer.appendChild(card);

  });

}

getForecast();