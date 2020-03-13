if(5===5)
{
    console.log(`yes`)
}
if(5>10)
{
    console.log('No')
}
if(5>=5)
{
    console.log(`yes`)
}
if(5){      // If statement always return a thruthy
    console.log(`YES`)
}

if(5){
    let x=20    // Block level scope
   // var x=22  // Function Scoped
    x = x+1
    console.log(x)
}
//console.log(x)      //Undefined because x has globle scope

let designation = "manager"
if(designation){
    console.log(`Avail Company Car`)
}
else{
    console.log(`Use public transport`)
}

//Ternary Operator
// Syntax - (condition)?true-statement:false statement

let transport = (!designation)?`Avail company car`:`Public transport`
console.log(transport)

console.log(`-----For Loops------`)
var nums=[2,5,6,9,0,1]
for(let i=0;i<nums.length;i++){
    console.log(nums[i])
}

console.log(`------ For IN-------`)
for(let n in nums){
    console.log(n)
}

console.log(`------ For Of-------`)
for(let n of nums){
    console.log(n)
}

// Use for in when working with object or non enumerables
// Use for of when working with enumerables

var person={
    fname:'Hi',
    lname:'Bye'
}
for(let p in person){
    console.log(p)
}

//while Loops

let count =1
console.log(`---------While Loop--------`)
while(count<=10){
    console.log(count)
    count++
}
