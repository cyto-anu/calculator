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


//these are three variables used to update the display later
const x
const operator
const y

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
