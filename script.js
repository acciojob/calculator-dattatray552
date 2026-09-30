let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        // Handle division by zero
        if (expression.includes("/")) {
            let parts = expression.split("/");

            if (parts.length === 2) {
                let firstNumber = Number(parts[0]);
                let secondNumber = Number(parts[1]);

                if (secondNumber === 0) {
                    if (firstNumber === 0) {
                        display.value = "NaN";
                    } else {
                        display.value = "Infinity";
                    }

                    return;
                }
            }
        }

        display.value = eval(expression);

    } catch (error) {
        display.value = "Error";
    }
}