//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiplyAndAlert(arr){
    let product = 1
    arr.forEach( num => product *= num )
    alert (product)
    // let product = 1
    // for (let i = 0; i = arr.length; i++)
    // product *= arr[i]
}
multiplyAndAlert([2, 3, 6, 2])

//note: arr is a paramater, same as num, they do not need to be declared 