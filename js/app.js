function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function percent(a, b){
    return a * b / 100
}

function operate(operator, a, b){
    switch(operator){
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
        case "%": return percent(a, b);
    }
}

function math(){
    return operate(operation, first_number, second_number);
};


var first_number;
var second_number;

var operation;
var displayValue;
var displayValueElement = document.getElementById("display-number");

var one_btn = document.getElementById("one");
var two_btn = document.getElementById("two");
var three_btn = document.getElementById("three");
var four_btn = document.getElementById("four");
var five_btn = document.getElementById("five");
var six_btn = document.getElementById("six");
var seven_btn = document.getElementById("seven");
var eight_btn = document.getElementById("eight");
var nine_btn = document.getElementById("nine");
var zero_btn = document.getElementById("zero");

var dot_btn = document.getElementById("dot");

var clear_btn = document.getElementById("clr");
var delete_btn = document.getElementById("delete");

var add_btn = document.getElementById("add");
var subtract_btn = document.getElementById("subtract");
var multiply_btn = document.getElementById("multiply");
var divide_btn = document.getElementById("divide");
var percent_btn = document.getElementById("percent");

var sum_btn = document.getElementById("sum");

// ------------------- Operators (click) ------------------- //

add_btn.addEventListener("click", e => {
    removeClick();
    add_btn.classList.add("active");
    getFirst();

    operation = "+";
});

subtract_btn.addEventListener("click", e => {
    removeClick();
    subtract_btn.classList.add("active");
    getFirst();

    operation = "-";
});

multiply_btn.addEventListener("click", e => {
    removeClick();
    multiply_btn.classList.add("active");
    getFirst();

    operation = "*";
});

divide_btn.addEventListener("click", e => {
    removeClick();
    divide_btn.classList.add("active");
    getFirst();

    operation = "/";
});

percent_btn.addEventListener("click", e => {
    removeClick();
    percent_btn.classList.add("active");
    getFirst();

    operation = "%";
});

// ------------------- Operators (hover) ------------------- //

add_btn.addEventListener("mouseenter", e => {
    add_btn.classList.add("hover");
});
add_btn.addEventListener("mouseleave", e => {
    add_btn.classList.remove("hover");
});


subtract_btn.addEventListener("mouseenter", e => subtract_btn.classList.add("hover"));
subtract_btn.addEventListener("mouseleave", e => subtract_btn.classList.remove("hover"));

multiply_btn.addEventListener("mouseenter", e => multiply_btn.classList.add("hover"));
multiply_btn.addEventListener("mouseleave", e => multiply_btn.classList.remove("hover"));

divide_btn.addEventListener("mouseenter", e => divide_btn.classList.add("hover"));
divide_btn.addEventListener("mouseleave", e => divide_btn.classList.remove("hover"));

percent_btn.addEventListener("mouseenter", e => percent_btn.classList.add("hover"));
percent_btn.addEventListener("mouseleave", e => percent_btn.classList.remove("hover"));

// ------------------- Numbers (click) ------------------- //

one_btn.addEventListener("click", e  => updateValue(1));
two_btn.addEventListener("click", e  => updateValue(2));
three_btn.addEventListener("click", e  => updateValue(3));
four_btn.addEventListener("click", e  => updateValue(4));
five_btn.addEventListener("click", e  => updateValue(5));
six_btn.addEventListener("click", e  => updateValue(6));
seven_btn.addEventListener("click", e  => updateValue(7));
eight_btn.addEventListener("click", e  => updateValue(8));
nine_btn.addEventListener("click", e  => updateValue(9));
zero_btn.addEventListener("click", e  => updateValue(0));

dot_btn.addEventListener("click", e  => {
    updateValue(".");
});

clear_btn.addEventListener("click", e => {
    removeClick();
    clear();
    first_number = 0;
    second_number = 0;
});

delete_btn.addEventListener("click", e => numberDelete());

sum_btn.addEventListener("click", e => {
    removeClick();
    getSecond();
    displayResult(Math.round(math() * 10000) / 10000);
    first_number = 0;
    second_number = 0;
});


function updateValue(value){
    if (isOperatorActive() || getScreenValue() == "NaN" || getScreenValue() == undefined){
        clear();
        removeClick();
        if (displayValueElement.innerText.length <= 18){
            displayValueElement.innerText += value;
        }
        else {
            displayValueElement.innerText = "Error";
        }
    }
    else {
        if (displayValueElement.innerText.length <= 18){
            displayValueElement.innerText += value;
        }
        else {
            displayValueElement.innerText = "Error";
        }
    }
}

function getScreenValue(){
    displayValue = parseFloat(displayValueElement.innerText);
    return displayValue;
}

function clear(){
    displayValue = 0;
    displayValueElement.innerText = "";
};

function numberDelete(){
    let temp = displayValueElement.innerText.slice(0, -1);
    displayValueElement.innerText = temp;
}

function removeClick(){
    add_btn.classList.remove("active");
    subtract_btn.classList.remove("active");
    multiply_btn.classList.remove("active");
    divide_btn.classList.remove("active");
    percent_btn.classList.remove("active");
}

function isOperatorActive(){
    if(add_btn.classList.contains("active") || subtract_btn.classList.contains("active") || multiply_btn.classList.contains("active") || divide_btn.classList.contains("active") || percent_btn.classList.contains("active")){
        return true;
    }
    else {
        return false;
    }
}

function getFirst() {
    first_number = getScreenValue();
}

function getSecond() {
    second_number = getScreenValue();
}

function displayResult(value){
    displayValueElement.innerText = value;
}
