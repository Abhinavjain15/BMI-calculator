function clearTab(){
	tabcontent = document.getElementsByClassName("tabcontent");
	tabcontent[1].style.display = "none";
}

function calculate(){
	tablinks = document.getElementsByClassName("tablinks");
	if(tablinks[0].className=="btn btn-secondary tablinks active"){
		weight = document.getElementById("weight_m").value;
		height = document.getElementById("height").value;
		if(weight==""||height==""){
			document.getElementById("result").innerHTML = "<div class='alert alert-primary' role='alert'>Please enter values!</div>";
			return;
		}
	} 
	else{
		pounds = document.getElementById("weight_u").value;
		feet = document.getElementById("feet").value;
		inches = document.getElementById("inches").value;
		if(pounds==""||feet==""){
			document.getElementById("result").innerHTML = "<div class='alert alert-primary' role='alert'>Please enter values!</div>";
			return;
		}
		height= feet * 30.48 + inches * 2.54;
		alert(height);
		weight=pounds*0.45359237;
	}
	result = 1.3 *(weight / (height/100)**2.5);
	rounded=Math.round(result*100)/100;

	if(rounded>=18.5&&rounded<=24.9){
		document.getElementById("result").innerHTML = "<div class='alert alert-success' role='alert'>Your BMI is <strong>" +rounded+"</strong></div>";	
		document.getElementById("interpretation").innerHTML="<div id='normal' class='ui message'><p>Your BMI is NORMAL</p></div><div id='font' class='container'>Since,your BMI is normal, you can work to stay metabolically healthy throughout life:<ul id='bullet'><li>Know your weight and monitor changes over time. Depending upon your goals, that may mean weighing  yourself every week or every month. If you see it creeping up, take steps to stop the slow gain that can really add up over time.</li><li>Measure your waist and monitor that over time too. If you notice your belt getting tighter, work on being more active every day.</li><li>Find ways to be physically active.Doing moderate aerobic activities, plus some resistance training and balance exercises will keep you fit.</li><li>Keep a track of what you are eating and pay attention to portion sizes to keep your weight stable.</li><li>Please DO NOT drink sugar calories.Sugary drinks are among the most fattening items you can put into your body.</ul></div>";

	}
	else if(rounded<18.5){
		document.getElementById("result").innerHTML = "<div class='alert alert-secondary' role='alert'>Your BMI is <strong>" +rounded+"</strong></div>";
		document.getElementById("interpretation").innerHTML="<div id='underweight' class='ui message'><p>You are UNDERWEIGHT</p></div><div id='font' class='container'>There are certain health risks associated with being underweight or having poor nutrition.<br>These risks include:<ul id='bullet'><li>malnutrition, vitamin deficiencies, or anemia</li><li>osteoporosis from too little vitamin D and calcium</li><li>decreased immune function</li><li>increased risk for complications from surgery</li><li>fertility issues caused by irregular menstrual cycles</li><li>growth and development issues, especially in children and teenagers</li></ul>By making a few tweaks to your diet and lifestyle, you can gain healthy weight.<ul id='bullet'><li>Try eating smaller, more frequent meals. Add more snacks into your routine as well.</li><li>Stick with foods that are rich in nutrients, like whole grains, fruits, vegetables, dairy products, nuts and seeds, and lean proteins.</li><li>If drinks decrease your appetite, consider saving them for 30 minutes after you eat a meal.</li><li>Get more calories in your meals by adding things like cheese, nuts, and seeds as toppings to main dishes.</li><li>Start exercising. You can gain weight by adding muscle to your body. Working out may also help to stimulate your appetite.</li></ul></div>";
	}
	else if(rounded>=25&&rounded<=29.9){
		document.getElementById("result").innerHTML = "<div class='alert alert-warning' role='alert'>Your BMI is <strong>" +rounded+"</strong></div>";
		document.getElementById("interpretation").innerHTML="<div id='overweight' class='ui message'><p>You are OVERWEIGHT</p></div><div id='font' class='container'>There are certain health risks associated with being overweight and obesity.<br>These risks include:<ul id='bullet'><li>Type 2 diabetes</li><li>Heart disease and strokes</li><li>High blood pressure</li><li>certain types of Cancer</li><li>Sleep apnea</li><li>Osteoarthritis</li><li>Fatty liver disease</li><li>Gallbladder disease</li><li>Pregnancy complications</li></ul>A combination of diet and exercise can help you lose the weight slowly over time. There’s no need to make drastic changes to your lifestyle. The key is to be consistent and to continue making healthy choices.<br>A few ways to eat healthier include:<ul id='bullet'><li>Fill half your plate with vegetables.</li><li>Replace unrefined grains, like white bread, pasta, and rice with whole grains like whole wheat bread, brown rice, and oatmeal.</li><li>Eat lean sources of protein, such as lean chicken, seafood, beans, and soy.</li><li>Cut out fried foods, fast foods, and sugary snacks.</li><li>Avoid sugary drinks, like sodas and juice.</li><li>Avoid alcohol.</li></ul></div>";
	}
	else if(rounded>=30){
		document.getElementById("result").innerHTML = "<div class='alert alert-danger' role='alert'>Your BMI is <strong>" +rounded+"</strong></div>";
		document.getElementById("interpretation").innerHTML="<div id='obese' class='ui message'><p>You are OBESE</p></div><div id='font' class='container'>There are certain health risks associated with being overweight and obesity.<br>These risks include:<ul id='bullet'><li>Type 2 diabetes</li><li>Heart disease and strokes</li><li>High blood pressure</li><li>certain types of Cancer</li><li>Sleep apnea</li><li>Osteoarthritis</li><li>Fatty liver disease</li><li>Gallbladder disease</li><li>Pregnancy complications</li></ul>A combination of diet and exercise can help you lose the weight slowly over time. There’s no need to make drastic changes to your lifestyle. The key is to be consistent and to continue making healthy choices.<br>A few ways to eat healthier include:<ul id='bullet'><li>Fill half your plate with vegetables.</li><li>Replace unrefined grains, like white bread, pasta, and rice with whole grains like whole wheat bread, brown rice, and oatmeal.</li><li>Eat lean sources of protein, such as lean chicken, seafood, beans, and soy.</li><li>Cut out fried foods, fast foods, and sugary snacks.</li><li>Avoid sugary drinks, like sodas and juice.</li><li>Avoid alcohol.</li></ul></div>";	
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

