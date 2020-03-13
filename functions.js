// named Function
function greet(message){
    return message
}
console.log(greet('Hello'));

// Anonymous Function
let output = function(num1,num2){
    let res = num1+num2
    return res
}
console.log(output(5,6));

// IIFE(Immediate Invoked Function Expression)
(function(a,b){
console.log(a+b);
})('Learning','Functions')

// Arrow Function Introduced in ES6

function addNums(a,b)
{
    return a+b
}
console.log(addNums(5,6))

let arrow1=(a,b)=>{
    console.log('Multiple Lines')
    a+b
}
console.log(arrow1(2,3))

// Arrow Function with one parameter
let arrow2 = a=>a+5
console.log(arrow2(10))

let arrow3=()=>console.log('No Parameters')
console.log(arrow3())