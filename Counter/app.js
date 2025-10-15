let count = 0;

const value = document.querySelector("#value");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");

// Increment button
incrementBtn.addEventListener("click", function () {
    count++;
    updateDisplay();
});

// Decrement button
decrementBtn.addEventListener("click", function () {
    count--;
    updateDisplay();
});

// Reset button
resetBtn.addEventListener("click", function () {
    count = 0;
    updateDisplay();
});

function updateDisplay() {
    // Update the counter display
    value.textContent = count;

    // Change color based on the count
    if (count > 0) {
        value.style.color = "green";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "black";
    }
}
