//calc logic functions

function add(x,y) {
    return x+y
}

function subtract(x,y) {
    return x-y
}

function multiply(x,y) {
    return x*y
}

function divide(x,y) {
    return x/y
}


// these are three variables used to update the display later
// const x
// const operator
// const y

function operate (operator,x,y) {
    if (operator === "add"){
        return add(x,y);
    }
    if (operator === "subtract"){
        return subtract(x,y);
    }
    if (operator === "multiply"){
        return multiply(x,y);
    }
    if (operator === "divide"){
        return divide(x,y);
    }
}

// DOM maniplation and events below

const buttons = document.querySelectorAll('.btn');

const clear = document.querySelector('.clrBtn');

const display = document.querySelector('.display')

let storage = []

//
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
        display.textContent = button.textContent;
        let x = display.textContent;
        storage.push(x)

    });
});



clear.addEventListener('click', () => {
    console.log(clear.textContent);
    console.log(clear.textContent);

});

// NUMBER buttons effects

buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = "lightgray";
    });
});

buttons.forEach((button) => {
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = "";
    });
});

buttons.forEach((button) => {
    button.addEventListener('mousedown', () => {
        button.style.backgroundColor = "gray";
    });
});

buttons.forEach((button) => {
    button.addEventListener('mouseup', () => {
        button.style.backgroundColor = "";
    });
});

// CLEAR button effects


clear.addEventListener('mouseenter', () => {
    clear.style.backgroundColor = "lightpink";
});

clear.addEventListener('mouseleave', () => {
    clear.style.backgroundColor = "";
});

clear.addEventListener('mousedown', () => {
    clear.style.backgroundColor = "salmon";
});

clear.addEventListener('mouseup', () => {
    clear.style.backgroundColor = "";
});

//