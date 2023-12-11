const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

const url='https://antoni1830.github.io/wdd230/chamber/rentals.json'
fetch(url)
.then(Response=>Response.json())
.then(data=>{

	let element=document.getElementById('job1')
	element.innerHTML=`<h3>${data.name1}</h3>
	<img src='${data.image1}'>
	<p>${data.Mdia1}</p>
	<a>${data.Cdia1}</a>
	
	
	`


	
	
	
	let element2=document.getElementById('job2')
	element2.innerHTML=`<h3>${data.name2}</h3>
	<img src='${data.image2}'>
	<p>${data.Mdia2}</p>
	<a>${data.Cdia2}</a>`



	let element3=document.getElementById('job3')
	element3.innerHTML=`<h3>${data.name3}</h3>
	<img src='${data.image3}'>
	<p>${data.Mdia3}</p>
	<a>${data.Cdia3}</a>`

	
	let element4=document.getElementById('job4')
	element4.innerHTML=`<h3>${data.name4}</h3>
	<img src='${data.image4}'>
	<p>${data.Mdia4}</p>
	<a>${data.Cdia4}</a>`

	let element5=document.getElementById('job5')
	element5.innerHTML=`<h3>${data.name5}</h3>
	<img src='${data.image5}'>
	<p>${data.Mdia5}</p>
	<a>${data.Cdia5}</a>`

	let element6=document.getElementById('job6')
	element6.innerHTML=`<h3>${data.name6}</h3>
	<img src='${data.image6}'>
	<p>${data.Mdia6}</p>
	<a>${data.Cdia6}</a>`

	

	console.log(data)
})
.catch(err=>console.log(err))

