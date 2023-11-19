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

const url='https://antoni1830.github.io/wdd230/data/links%20copy.json'
fetch(url)
.then(Response=>Response.json())
.then(data=>{

	let element=document.getElementById('job1')
	element.innerHTML=`<h3>${data.name1}</h3>
	<img src='${data.image_or_icon_file_names5}'>
	<p>${data.addresses1}</p>
	<a>${data.phone_numbers1}</a>
	
	
	`


	
	
	
	let element2=document.getElementById('job2')
	element2.innerHTML=`<h3>${data.name2}</h3>
	<img src='${data.image_or_icon_file_names2}'>
	<p>${data.addresses2}</p>
	<a>${data.phone_numbers2}</a>`



	let element3=document.getElementById('job3')
	element3.innerHTML=`<h3>${data.name3}</h3>
	<img src='${data.image_or_icon_file_names3}'>
	<p>${data.addresses3}</p>
	<a>${data.phone_numbers3}</a>`

	
	let element4=document.getElementById('job4')
	element4.innerHTML=`<h3>${data.name4}</h3>
	<img src='${data.image_or_icon_file_names4}'>
	<p>${data.addresses4}</p>
	<a>${data.phone_numbers4}</a>`

	let element5=document.getElementById('job5')
	element5.innerHTML=`<h3>${data.name5}</h3>
	<img src='${data.image_or_icon_file_names5}'>
	<p>${data.addresses5}</p>
	<a>${data.phone_numbers5}</a>`

	let element6=document.getElementById('job6')
	element6.innerHTML=`<h3>${data.name6}</h3>
	<img src='${data.image_or_icon_file_names6}'>
	<p>${data.addresses6}</p>
	<a>${data.phone_numbers6}</a>`

	let element7=document.getElementById('job7')
	element7.innerHTML=`<h3>${data.name7}</h3>
	<img src='${data.image_or_icon_file_names7}'>
	<p>${data.addresses7}</p>
	<a>${data.phone_numbers7}</a>`

	console.log(data)
})
.catch(err=>console.log(err))


