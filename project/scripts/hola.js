let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
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

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }







  const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20,51&lon=-86,94&appid=c99b0d89a2e18ce7aaf66704f50b5af3';

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
    currentTemp.innerHTML = `${weatherData.main.temp_max}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = capitalizeEachWord(weatherData.weather[0].description);
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }













