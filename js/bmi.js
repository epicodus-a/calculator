var bmi = function(weight, height){
  return weight / height**2;
}

var weight = prompt("Please enter your weight in kg: ");
var height = prompt("Please enter your height in meters: ");

if (parseInt(weight) && parsetInt(height))
{
  document.write(bmi(weight, height));

}else{

  document.write("Please enter a number");

}
