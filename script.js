// Wait for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function() {
  // Select the form element
  var form = document.getElementById("bmiForm");

  // Add event listener for form submission
  form.addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the weight and height values from the form
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    // Calculate BMI
    var bmi = calculateBMI(weight, height);

    // Display the result
    displayResult(bmi);
  });

  // Function to calculate BMI
  function calculateBMI(weight, height) {
    return weight / (height * height);
  }

  // Function to display the result
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
});
