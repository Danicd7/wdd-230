const date = new Date();
const year = date.getFullYear();
document.querySelector("#currentyear").textContent = year;


document.querySelector(
	"#lastModified"
).textContent = `Last Update: ${document.lastModified}`;

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

const myTown = document.querySelector("#town");
const myDescription = document.querySelector("#description");
const myTemperature = document.querySelector("#temperature");
const myGraphic = document.querySelector("#graphic")

const myKey = "5035ef919de6f87a33615d89533eb17d"
const myLatt = "40.41170158511539"
const myLong = "-3.686418872614568"

const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLatt}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
    try {
      const response = await fetch(myUrl);
      if (response.ok) {
        const data = await response.json();
         // this is for testing the call
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayResults(data) {
  	console.log("hello")
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute("src", iconsrc)
    myGraphic.setAttribute("alt", data.weather[0].description)
}
  
  apiFetch();

