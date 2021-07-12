// Functions 

// Function to check if parameters passed is number or non-number
function validateNumbers(num){
    if(isNaN(num)){
        return false
    }
    return true
}

// Addition of two numbers
// check for parameters passed is number or non-number
function add(a,b){
if(validateNumbers(a)&&validateNumbers(b))
    return a+b;
    else
    return "Mathematical addition only allows numbers"
}

// Subtraction of two numbers
// check for parameters passed is number or non-number
function sub(a,b){
    if(validateNumbers(a)&&validateNumbers(b))
    return a-b;
    else
    return "subtraction only allows numbers"
}

// Multiplication of two numbers
// check for parameters passed is number or non-number
function multiply(a,b){
    if(validateNumbers(a)&&validateNumbers(b))
    return a*b;
    else
    return "multiplication only allows numbers"
}

// Division of two numbers
// check for parameters passed is number or non-number
// check if number is divide by zero or infinity
function div(a,b){
    if(validateNumbers(a)&&validateNumbers(b)){
    
    if(b==0)
    return 'Divide by zero';
    
    else
    return a/b
    }
    else
    return "division only allows numbers"
   
}

// Check for negative number
function negativeNum(a,b){
    if(a<0 || b<0)
    return false
    else
     return true
}