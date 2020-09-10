function Calculator(a,b) {
    const add = function() {
        notify();
       return a + b;
    }
    const subtract = function() {
        notify();
        return a - b;
    }
    const divide = function(){
        notify();
        if(b !== 0){
            return a / b;
        }else{
            throw new Error('No possible division')
        }
    }
    const multiply = function(){
        notify();
        return a * b;
    }

    const notify = function() {
        if(typeof(a) !== "number" || typeof(b) !== "number"){
            throw new Error('Input numbers only');
        }
    }

    return {add, subtract, divide, multiply}
}

module.exports = Calculator;