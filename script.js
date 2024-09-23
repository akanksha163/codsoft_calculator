// Get the display element
let display = document.getElementById('display');

// Append values to the display
function appendToDisplay(value) {
    if (value === '+/-') {
        // Negate the value if +/− is pressed
        display.value = (display.value * -1).toString();
    } else {
        // Append the pressed button value
        display.value += value;
    }
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Calculate the result based on the expression in the display
function calculateResult() {
    try {
        // Evaluate the expression in the display
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch (error) {
        display.value = 'Error'; // Show 'Error' if the expression is invalid
    }
}
