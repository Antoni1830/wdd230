function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }

  function darkmode(){
	let main_body=document.body;
	main_body.classList.toggle("dark-mode")
  }

  if (['Monday', 'Tuesday', 'Wednesday'].includes(new Date().toLocaleDateString('en-US', {weekday: 'long'}))) {
	document.write(includeHTML());
}

function includeHTML() {
	var z, i, elmnt, file, xhttp;
	z = document.createElement('div');
	file = 'banner.html';
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {z.innerHTML = this.responseText;}
			if (this.status == 404) {z.innerHTML = 'Page not found.';}
			document.getElementById('banner').appendChild(z);
		}
	}
	xhttp.open('GET', file, true);
	xhttp.send();
	return z;
}
document.getElementById('closeBanner').addEventListener('click', function() {
	document.getElementById('banner').style.display = 'none';
});


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=8,36&lon=-62,64&appid=c99b0d89a2e18ce7aaf66704f50b5af3';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  apiFetch();
  
function capitalizeEachWord(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = capitalizeEachWord(weatherData.weather[0].description);
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }



