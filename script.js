//calc logic functions

function add(x,y) {
    return Number(x)+Number(y)
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

//function to limit one operation at a time

function maxStorage () {
    if (storage.length > 3) {
        storage.pop();
    }
}

// these are three variables used to update the display later
// const x
// const operator
// const y

function operate (x,operator,y) {
    if (operator === "+"){
        return add(x,y);
    }
    if (operator === "-"){
        return subtract(x,y);
    }
    if (operator === "x"){
        return multiply(x,y);
    }
    if (operator === "/"){
        return divide(x,y);
    }
}

let storage = []
let result = []

// DOM maniplation and events below

const buttons = document.querySelectorAll('.btn');

const clear = document.querySelector('.clrBtn');

const display = document.querySelector('.display')

const equals = document.querySelector('.equals')



//
buttons.forEach((button) => {
    button.addEventListener('click', () => {
       
        storage.push(button.textContent);
        maxStorage();
        display.textContent = storage;
        


    });
});


//equals logic

equals.addEventListener('click', () => {
    const firstAns = operate(storage[0],storage[1],storage[2]);
    result.push(firstAns);
    display.textContent = operate(storage[0],storage[1],storage[2]);

    //making result = storage

    storage = result;
    result = [];
})

//clear logic

clear.addEventListener('click', () => {
    storage = [];
    result = [];
    display.textContent = storage;

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