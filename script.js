function add(a, b) {
    return a + b; // Return the sum of a and b
}

function subtract(a, b) {
    return a - b; // Return the difference of a and b
}

function multiply(a, b) {
    return a * b; // Return the product of a and b
}

function divide(a, b) {
    if (b === 0) { // Check for division by zero
        throw new Error('Division by zero'); // Throw an error if true
    }
    return a / b; // Return the quotient of a and b
}

function operate(operator, a, b) {
    switch (operator) { // Determine the operation based on the operator
        case '+':
            return add(a, b); // Call add function
        case '-':
            return subtract(a, b); // Call subtract function
        case '*':
            return multiply(a, b); // Call multiply function
        case '/':
            return divide(a, b); // Call divide function
        default:
            throw new Error('Invalid operator'); // Throw an error for invalid operator
    }
}

function appendToDisplay(value) {
    document.getElementById('display').value += value; // Append value to the display
}

function clearDisplay() {
    document.getElementById('display').value = ''; // Clear the display
}

function calculateResult() {
    const display = document.getElementById('display').value; // Get the current display value
    let numbers = []; // Array to hold numbers
    let operators = []; // Array to hold operators
    let currentNumber = ''; // String to build the current number

    // Parse the input string manually
    for (let char of display) {
        // Check if the character is a digit or decimal
        if (char >= '0' && char <= '9' || char === '.') {
            currentNumber += char; // Build the current number
        } else if (char === '+' || char === '-' || char === '*' || char === '/') {
            // When an operator is found
            if (currentNumber) {
                numbers.push(parseFloat(currentNumber)); // Push the current number to the numbers array
                currentNumber = ''; // Reset current number
            }
            operators.push(char); // Push the operator to the operators array
        }
    }

    // Push the last number if it exists
    if (currentNumber) {
        numbers.push(parseFloat(currentNumber)); // Push the final number
    }

    // Perform calculations
    let result = numbers[0]; // Start with the first number
    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i]; // Get the operator
        const nextNumber = numbers[i + 1]; // Get the next number

        try {
            result = operate(operator, result, nextNumber); // Calculate the result using operate
        } catch (error) {
            document.getElementById('display').value = 'Error'; // Display error message
            return; // Exit the function on error
        }
    }

    document.getElementById('display').value = result; // Update the display with the result
}