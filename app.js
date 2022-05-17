const form = document.querySelector("#my-form");
const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");
const operator = document.querySelector("#operator");

form.addEventListener("submit", (e) => {
    if (firstInput.value === "" || secondInput.value === "") {
        showError("Please enter a number");
    } else {
        calculate();

        // Clear Fields
        clearFields();
    }

    e.preventDefault();
});

function calculate() {
    let answer;
    const first = parseInt(firstInput.value);
    const second = parseInt(secondInput.value);

    if (operator.value === "+") {
        answer = first + second;
    } else if (operator.value === "-") {
        answer = first - second;
    } else if (operator.value === "*") {
        answer = first * second;
    } else if (operator.value === "/") {
        answer = first / second;
    } else {
        answer = first % second;
    }  
    
    document.querySelector('.output').textContent = `Answer: ${answer}`;
}

function clearFields() {
    firstInput.value = "";
    secondInput.value = "";
}

function showError(message) {
    const div = document.createElement("div");
    div.className = "error";
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".calculator-container");
    container.insertBefore(div, form);

    // Clear error message after 3 secs
    setTimeout(() => {
        document.querySelector(".error").remove();
    }, 3000);
}


