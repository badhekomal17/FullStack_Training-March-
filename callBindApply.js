//'use strict'

var let =10
var x=10
console.log(let)


//
var stud={
    rollNo:200,
    fname:'komal',
    lname:'Badhe',
    getStudName : function(){
        return this.fname + ' '+this.lname
    }
}

var logName= function(lang1,lang2){
    console.log(`Logged : ${this.getStudName()}`)
}
//logName()       //error

// 1 st Implementation of Bind Method
let logStudName = logName.bind(stud)
console.log(logStudName())

// 2 nd Implementation Of Bind Method
let logName1 = function(lang1,lang2){
    console.log(`Logged : ${this.getStudName()}`)
     console.log(`Arguments : ${lang1} and ${lang2}`)
}.bind(stud)
logName1('en','de')

//Call to execute the function
console.log('------Call to execute the function-------')
logName1.call(stud,'es','en-gb')
logName1.apply(stud,['de','es'])



// Function borrowing
console.log('--------Function borrowing----------')
var stud2={
    rollNo:201,
    fname:'Pooja',
    lname:'Patwa'
}

let newName = stud.getStudName.apply(stud2)
console.log(newName)

console .log(stud.getStudName.call(stud2))


// Function Currying
console.log('---------Function Currying---------')
function multiply(a,b){
    return a*b
}

var multiplyByTwo = multiply.bind(this,2)
console.log(multiplyByTwo(12))

//Arguments Objects in JS

console.log('--------------Arguments Objects in JS-------------------')
function add()
{
    var sum = 0
    for(let i=0; i<arguments.length;i++){
        sum = sum +arguments[i]
        console.log(arguments)
    }
    console.log(sum)
}
add(2,3,4)


