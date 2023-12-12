
let screen = document.getElementById("displayId");
let initialVal = "";
let isCalculated = false; // Added a flag

function writeOnDisplay(input) {
  if (isCalculated) {
    // If a calculation has been performed, reset the input.
    initialVal = "";
    isCalculated = false;
  }

  if (input === '.') {
    if (!initialVal.includes('.')) {
      initialVal += input;
    }
  } else {
    if (initialVal.length < 6) {
      initialVal += input;
    }
  }
  screen.value = initialVal;
}

console.log("screen");

function clearDisplay() {
  initialVal = "";
  screen.value = initialVal;
  isCalculated = false; // Resetting the flag
}

function calculateFun() {
  try {
    calculateVal = eval(initialVal);
    if (calculateVal.toString().length <= 6) {
      screen.value = calculateVal;
    } else {
      screen.value = "";
    }
    isCalculated = true; // Setting the flag to true
  } catch (error) {
    calculateVal = "Error";
    screen.value = calculateVal;
    isCalculated = true; // Setting the flag to true
  }
}

function backSpaceFun() {
  if (initialVal === "Error" || initialVal === "") {
    clearDisplay();
  } else {
    if (isCalculated) {
      // If a calculation has been performed, reset the input.
      isCalculated = false;
    } else {
      initialVal = initialVal.slice(0, -1);
    }
    screen.value = initialVal;
  }
}