const button = document.querySelector(".button");
const div = document.querySelector(".smallBox")

const key = "57f636a8d430caa0e7926da39fc7e087";

function dataOnScreen(data) {
    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em " + data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".moisture").innerHTML = data.main.humidity + "% de umidade";
    document.querySelector(".cloud").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

    div.removeAttribute("style");
  }

async function searchCity(city) {
  const data =
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric
    `).then(response => response.json());

    dataOnScreen(data) 
}

function clickButton() {
  const city = document.querySelector(".inputCity").value;

  searchCity(city);
}

button.addEventListener("click", (event) => {
  clickButton(); 
});

