// Function to add more subjects
document
  .querySelector(".js-add-more-subjects")
  .addEventListener("click", () => {
    const container = document.querySelector(".container"); // Target the container element

    const newInputs = document.createElement("div"); // Create a new div for inputs
    newInputs.classList.add("inputs-removeBTN"); // Add the appropriate class

    // Set the inner HTML of the new div with the correct class names
    newInputs.innerHTML = `
    <input type="text" placeholder="Grade" class="grade-input js-grade" />
    <input type="text" placeholder="Unit" class="unit-input js-unit" />
    <button class="remove js-remove-button">Remove</button>
  `;

    const resultElement = document.querySelector(".result");
    container.insertBefore(newInputs, resultElement); // Append the new inputs before the result
  });

// Function to remove subject input sets
document.querySelector(".container").addEventListener("click", (event) => {
  if (event.target.classList.contains("remove")) {
    event.target.parentElement.remove(); // Remove the parent div of the clicked button
  }
});

// Function to calculate the General Weighted Average (GWA)
document.querySelector(".js-calculate").addEventListener("click", () => {
  const finalGrades = document.querySelectorAll(".js-grade");
  const totalUnits = document.querySelectorAll(".js-unit");

  let weightedSum = 0;
  let totalUnitSum = 0;

  // Loop through all input fields to calculate the GWA
  finalGrades.forEach((grade, index) => {
    const gradeValue = parseFloat(grade.value);
    const unitValue = parseFloat(totalUnits[index].value);

    if (!isNaN(gradeValue) && !isNaN(unitValue)) {
      weightedSum += gradeValue * unitValue;
      totalUnitSum += unitValue;
    }
  });

  const result = totalUnitSum ? (weightedSum / totalUnitSum).toFixed(2) : 0;

  document.querySelector(".result").innerHTML = `Result: ${result}`;
});
