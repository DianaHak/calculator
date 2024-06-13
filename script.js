// Append value to the input field
function dis(val) {
    const inputField = document.getElementById("inputNumber");
    inputField.value += val;
}

// Event listener for keyboard input
document.addEventListener("keydown", function(event) {
    const inputField = document.getElementById("inputNumber");
    const key = event.key;

    // Handle Enter key for evaluation
    if (key === 'Enter') {
        solve();
        event.preventDefault();  // Prevent default form submission or other actions
    } 
    // Handle Backspace key for deleting the last character
    else if (key === 'Backspace') {
        inputField.value = inputField.value.slice(0, -1);
        event.preventDefault();  // Prevent default behavior
    } 
    // Handle number keys and operator keys
    else if (/[\d.+\-*/]/.test(key)) {
        dis(key);
        event.preventDefault();  // Prevent default behavior
    }
});

// Evaluate the input expression
function solve() {
    const inputField = document.getElementById("inputNumber");
    try {
        inputField.value = eval(inputField.value);
    } catch (error) {
        inputField.value = "Error";
    }
}

// Clear the input field
function clr() {
    document.getElementById("inputNumber").value = "";
}
