function calculate()
{
   	 	
		if(document.action.male.checked == true)
		{
			var weight = parseInt(document.getElementById("weight").value);
			var height = parseInt(document.getElementById("height").value);
			var age = parseInt(document.getElementById("age").value);
			var bmr = 88.362 + (13.397 * weight)+(4.799*height)-(5.677*age);
			document.getElementById("ans").innerHTML = "Since you are a male your BMR is  "+ bmr;
			
		  
		}
		else if(document.action.female.checked == true)
		{
		
			var weight = parseInt(document.getElementById("weight").value);
			var height = parseInt(document.getElementById("height").value);
			var age = parseInt(document.getElementById("age").value);
			var bmr = 447.593 + (9.247 * weight)+(3.098*height)-(4.330*age);
			document.getElementById("ans").innerHTML = "Since you are a female your BMR is  "+ bmr;
		}
}