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