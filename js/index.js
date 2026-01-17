const display = document.querySelector('#display-content');

function addInDisplay(value) {
    if((
        display.value == '' || getLastValueDisplay(display.value) == '*' || getLastValueDisplay(display.value) == '/' || getLastValueDisplay(display.value) == '+' || getLastValueDisplay(display.value) == '-') 
        && 
        (value == '*' || value == '/' || value == '+' || value == '.' || (value == "-" && getLastValueDisplay(display.value) == "-"))) 
        {
        display.value = display.value;
    } else {
        display.value += value;
    }
}

function showResult() {
    if(display.value == '' || getLastValueDisplay(display.value) == '*' || getLastValueDisplay(display.value) == '/' || getLastValueDisplay(display.value) == '+' || getLastValueDisplay(display.value) == '-' || getLastValueDisplay(display.value) == '.') {
        display.value = display.value;
    } else {
        display.value = eval(display.value);
        console.log(eval(display.value))
    }
}

function cleanDisplay() {
    display.value = '';
}

const getLastValueDisplay = (displayValue) => {
    var string = displayValue;
    var lastValue = string.charAt(string.length-1); 
    return lastValue;
}