
document.getElementById("bmiForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  
  var bmi = calculateBMI(weight, height);
  displayResult(bmi);
});

function calculateBMI(weight, height) {
  return weight / (height * height);
}

function displayResult(bmi) {
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  
  var bmiCategory;
  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiCategory = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obese";
  }

  resultDiv.innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>";
  resultDiv.innerHTML += "Category: " + bmiCategory;
}
