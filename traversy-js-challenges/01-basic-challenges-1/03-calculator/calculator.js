function calculator(a,b,x) {
    switch (x){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return a/b; 
        default:
            return("invlid operator")
    }


}

module.exports = calculator;
