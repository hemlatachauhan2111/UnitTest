describe('Unit Test',function(){

it('Test Addition of two numbers- positive case',function(){
    expect(add(2,2)).toBe(4);
})

it('Test addition of number with NaN',function(){
    expect(add(2,'hello')).toBe("Mathematical addition only allows numbers");
})

it('Test Subtract of two numbers- positive case',function(){
    expect(sub(2,2)).toBe(0);
})

it('Test Subtract of number with NaN',function(){
    expect(sub('hello',2)).toBe("subtraction only allows numbers");
})

it('Test Multiply of two numbers -positive case',function(){
    expect(multiply(3,2)).toBe(6);
})

it('Test Multiplication of number with NaN',function(){
    expect(multiply('test',2)).toBe("multiplication only allows numbers");
})

it('Test Division of two numbers -positive case',function(){
    expect(div(12,2)).toBe(6);
})

it('Test Division of number with NaN',function(){
    expect(div('test',2)).toBe("division only allows numbers");
})

it('Test to verify if any number divide by zero',function(){
    expect(div(12,0)).toBe("Divide by zero");
})

it('Test to verify if string is used as first parameter instead of number',function(){
    expect(validateNumbers(12)).toEqual(true);
})

it('Test to verify if string is used as second parameter instead of number',function(){
    expect(validateNumbers('hello')).toEqual(false);
})


it('Test to verify negative number passed as parameter',function(){
    expect(negativeNum(-4,2)).toBe(false);
})


})