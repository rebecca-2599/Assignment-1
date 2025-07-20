// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
  // click event to the Convert button
  document.getElementById("convert-button").addEventListener("click", markToGrade);
});

// Takes input mark, validates it, and displays corresponding grade
function MarkToGrade() {
  const input = document.getElementById("mark-input-box").value.trim();
  const messageEl = document.getElementById("validation-message");
  const gradeEl = document.getElementById("grade-output");
  // converts the input to a number
  var mark = parseInt(input);

  // Reset output fields before showing new messages
  messageEl.textContent = "";
  gradeEl.textContent = "";

  // Validation checks
  if (input === "") {
    messageEl.textContent = "Please enter a mark.";
  } else if (isNaN(mark)) {
    messageEl.textContent = "That's not a number. Try again.";
  } else if (mark < 0) {
    messageEl.textContent = "Marks can't be negative.";
  } else if (mark > 100) {
    messageEl.textContent = "Mark must be 100 or less.";
  } 
  // Valid input: determine grade
  else {
    var grade;
    if (mark >= 90) grade = "A";
    else if (mark >= 80) grade = "B";
    else if (mark >= 70) grade = "C";
    else if (mark >= 60) grade = "D";
    else if (mark >= 50) grade = "E";
    else grade = "F";
    gradeEl.textContent = `Grade: ${grade}`;
  }
}

// display current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
