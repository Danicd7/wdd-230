
// select HTML elements in the document
function titleCase(string) {
	// lower case all the characters
	string = string.toLowerCase();
	// split the string into arrays of words
	string = string.split(" ");
	// map the array replacing the first letter of each word by upper case
	string = string.map(function(word) {
		return word.replace(word[0], word[0].toUpperCase());
	});
	// join the words of the array
	return string.join(" ");
};

function displayResults(Data) {
    currentTemp.innerHTML = `${Data.main.temp.toFixed(0)}&deg;F`;
 

  const iconsrc = `https://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png`;
  const desc = Data.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}



//select all of the HTML elements that will need to be manipulated and assign them to const variables.
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//Api url
const url = "https://api.openweathermap.org/data/2.5/weather?q=Trier&units=imperial&appid=5035ef919de6f87a33615d89533eb17d";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
         // this is for testing the call
        // displayResults(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();


