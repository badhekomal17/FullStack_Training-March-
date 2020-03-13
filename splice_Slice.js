//Splice: It returns the removed items from an array
// It will change the original array

//slice: It returns the selected items from an array
// Does not change the original array

var arr1 = [1,2,3,4,5]
var res1 = arr1.splice(2)
for(let r of res1){
    console.log(r)
}

console.log(arr1)

console.log(`-------------------------------`)
var arr2 = [1,2,3,4,5]
var res2 = arr2.splice(2,2)
for(let r of res2)
{
    console.log(r)
}
console.log(arr2)

console.log(`-------------------------------`)
var arr3 = [1,2,3,4,5]
var res3 = arr3.splice(3)
for(let r of res3)
{
    console.log(r)
}
console.log(arr3)


console.log(`------------Slice-------------------`)
var arr5 = [1,2,3,4,5]
var res5 = arr5.slice()

for(let r of res5)
{
    console.log(r)
}
console.log(arr5)

console.log(`-------------slice with one parameter---------------`)
var arr4 = [1,2,3,4,5]
var res4 = arr4.slice(4)

for(let r of res4)
{
    console.log(r)
}
console.log(arr4)

console.log(`-------------slice with two parameter----------------`)
var arr6 = [1,2,3,4,5]
var res6 = arr6.slice(2,4)

for(let r of res6)
{
    console.log(r)
}
console.log(arr6)

console.log(`-------------slice with two parameter - string------------------`)
var arr7 = ['x','y','z','a','b','c']
var res7 = arr7.slice(2,5)

for(let r of res7)
{
    console.log(r)
}
console.log(arr7)

console.log(`-------------slice with two parameter and -ve No.-------------`)
var arr8 = [3,6,8,-2,-7,-9]
var res8 = arr8.slice(2,5)

for(let r of res8)
{
    console.log(r)
}
console.log(arr8)

console.log(`-------------POP & Push-------------`)
var arr9 = [3,6,8,-2,-7,-9]
arr9.push(-11)
console.log("push:-", arr9)
arr9.pop()
var res9 = arr9.reverse()

for(let r of res9)
{
    console.log(r)
}
console.log(arr9)
arr9.shift()
console.log("Shift:- ",arr9)
arr9.unshift('a')
console.log("Unshift:- ",arr9)

console.log(`-------filter------`)
const values = ['one','two','three','four']
// const ans = values.filter(function(e)
// {
//     return e.length != 3
// })
// console.log(ans)

const ans = values.filter((e)=>e.startsWith('t'))
console.log("start with t:- ",ans)
console.log(values)

console.log(`---------find--------`)
const found = values.find((item)=>item.substr(4))
console.log(found)

console.log(`---------IndexOf--------`)
var ind = ['a','b','c','d','e']
console.log(ind.indexOf('d'))

console.log(`---------Map--------`)
arrMap = [10,2,4,6,8,9,4,18,-1,'a']
let resMap = arrMap.map(e=>e*2)
resMap.forEach(element => console.log(element))
console.log(arrMap)