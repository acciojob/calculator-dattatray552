//your code here

const display = document.querySelector("#display");

// Add a number or operator to the display
function appendValue(value) {
    display.value += value;
}

// Clear the entire display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        if (display.value === "") {
            return;
        }

        // Evaluate the mathematical expression
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}