class calculator {
    add = (number1, number2) => {
        if(typeof(number1) === 'number' && typeof(number2) === 'number' && number1 && number2){
            return number1 + number2;
        } else {
            throw new Error ('Enter a valid number');
        }
    }

    subtract = (number1, number2) => {
        if(typeof(number1) === 'number' && typeof(number2) === 'number' && number1 && number2){
            return number1 - number2;
        } else {
            throw new Error ('Enter a valid number');
        }
    }
}