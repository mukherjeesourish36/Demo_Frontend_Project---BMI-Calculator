// Select the form by its ID (from HTML)
const form = document.getElementById('bmiForm');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent page reload

  // Get values from inputs
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const results = document.getElementById('results');

  // Validate inputs
  if (!height || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height.`;
  } else if (!weight || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight.`;
  } else {
    // Calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Show BMI number
    let message = `Your BMI is <strong>${bmi}</strong><br>`;

    // Add category
    if (bmi < 18.6) {
      message += "Category: Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message += "Category: Normal";
    } else {
      message += "Category: Overweight";
    }

    results.innerHTML = message;
  }
});
