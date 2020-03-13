    'use strict'
    var x=10        //es5
    x='Hi'
console.log(x)
//y = 'Hello'     //not be used global variable
let z = true    //Most recomended
//let z= 'new vakue u-of'
console.log(z)
const c = 40    //

//Objects(Short Hand)
let person = {} // empty Objects
console.log(person)

let empId=46726
let employee={
    //empId:empId,
    empId,
    empName:'Komal',
    deptName:'Tech Learning',
    isEmployed:true,
    salary:786789
};
console.log(employee)
console.log(employee.deptName)  // To access deptName

//Constructor function 
function Employee(fname,lname){
    this.fname=fname
    this.lname=lname
}
console.log(Employee)

let e1 = new Employee
e1.fname='komal',
e1.lname='badhe'
console.log(e1)

console.log('-------------------------------------------------------------')
// Objects (Long Hands notation of creating an object)
var stud = new Object()
stud.rollNo=123
stud.name='Komal'
stud.marks=99

console.log(`Student ${stud}`)

var stud1={}
console.log(`student1 ${stud1}`)

let arr=[3,4,5,6]   //Short hand notation
let arr1 = new Array(3,4,6,8)
console.log(arr==arr1)
console.log(arr[1]==arr1[0])

//Equality
let a='3'
let b=3
console.log(a==b)
