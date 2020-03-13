// String To Array
function stringToarr(){
    let prodcode = 'LOG-MO-500-A'
    let values = [...prodcode]
    console.log(values)
}
stringToarr()

// Copy Array
function copyArr()
{
    let oldArr = [1,2,3]
    let newArr = [...oldArr,true,false,4,5,6]
    let newArr1 = [true,false,...oldArr,'a','b']
    console.log(newArr)
    console.log(newArr1)
    console.log(oldArr)
}
copyArr()

// Copying array with objects
console.log('------Copying array with objects--------')
let products = [
    {
        pId:100,
        pName: 'PencilBox',
        cost: 345.89
    },
    {
        pId:101,
        pName: 'PenBox',
        cost: 100.89
    }
]

let productsNew = [
    {
        pId:100,
        pName: 'PencilBox',
        cost: 345.89
    },
    {
        pId:101,
        pName: 'PenBox',
        cost: 100.89
    }
]

// function copyObjectArrays(){
//     let diff = [...products]
//     diff[0].pName = 'Laptop'
//     diff[0].cost = 20000
//     console.log(`${products[0].cost} and Name is ${products[0].pName}')
//     console.log('${diff[0].cost} and Name is ${diff[0].pName}')
//   }
//  copyObjectArrays()

// Spread Operator to concatenate

let allProducts = products.concat(productsNew)
console.log(allProducts + 'Without Spread ........')
console.log(allProducts.length)
console.log('---------------------------')
allProductsSpread = [...productsNew,...products]
console.log(allProductsSpread)
console.log(allProductsSpread.length)

// Spread in Constructor Function
console.log('-------------Spread in Constructor Function---------------')
let dt = new Date(2020,03,13)
console.log(dt)

let x = [2020,11,31]
let chutti = new Date(...x)
console.log(chutti)

// Spread in Function Parameters
console.log('-------------Spread in Function Parameters---------------')
function funParams(){
    multiplePrams(1,2,3)
    let args = [1,2,3]
    multiplePrams(...args)
}
function multiplePrams(arg1,arg2,arg3){
    console.log(`function parameters are 
    ${arg1},${arg2} and ${arg3}`)
    console.log(``)
}
    funParams()

// Spread to shallow copy object
    console.log('--------Spread to shallow copy object----------')
    function objLiteral(){
        let product = {
            pId:100,
            pName: 'Pencil',
            cost: 345.89
        }

        let prod2 = {...product}
        console.log(prod2)
    }
    objLiteral()

