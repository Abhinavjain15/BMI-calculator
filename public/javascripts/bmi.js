function clearTab(){
	tabcontent = document.getElementsByClassName("tabcontent");
	tabcontent[1].style.display = "none";
}

function calculate(){
	tablinks = document.getElementsByClassName("tablinks");
	if(tablinks[0].className=="btn btn-secondary tablinks active"){
		weight = document.getElementById("weight_m").value;
		height = document.getElementById("height").value;
	} 
	else{
		pounds = document.getElementById("weight_u").value;
		feet = document.getElementById("feet").value;
		inches = document.getElementById("inches").value;
		height= feet * 30.48 + inches * 2.54;
		weight=pounds*0.45359237;
	}
	result = 1.3 *(weight / (height/100)**2.5);
	rounded=Math.round(result*100)/100;

	if(rounded>=18.5&&rounded<=24.9){
		document.getElementById("result").innerHTML = "<div class='alert alert-success' role='alert'>Your BMI is <strong>" +rounded+"</strong></div>";	
		document.getElementById("interpretation").innerHTML="you are normal";

	}
	else if(rounded<18.5){
		document.getElementById("result").innerHTML = "<div class='alert alert-secondary' role='alert'>Your BMI is <strong>" +rounded+"</strong></div>";
		document.getElementById("interpretation").innerHTML="you are underweight";
	}
	else if(rounded>=25&&rounded<=29.9){
		document.getElementById("result").innerHTML = "<div class='alert alert-warning' role='alert'>Your BMI is <strong>" +rounded+"</strong></div>";
		document.getElementById("interpretation").innerHTML="you are overweight";
	}
	else if(rounded>=30){
		document.getElementById("result").innerHTML = "<div class='alert alert-danger' role='alert'>Your BMI is <strong>" +rounded+"</strong></div>";
		document.getElementById("interpretation").innerHTML="you are obese";	
	}
	else{
		document.getElementById("result").innerHTML = "<div class='alert alert-primary' role='alert'>Please enter values!</div>";
	}

}

function clickHandle(evt, animalName) {
	let i, tabcontent, tablinks;

  // This is to clear the previous clicked content.
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
  	tabcontent[i].style.display = "none";
  }

  // Set the tab to be "active".
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
  	tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Display the clicked tab and set it to active.
  document.getElementById(animalName).style.display = "block";
  evt.currentTarget.className += " active";
}

