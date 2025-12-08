// Create a function that takes in an array. 
function newArr(arr){
// If the first number, is less than the last number, alert "Hi". 
if( arr[0] < arr[arr.length -1]) {
alert('Hi!')
}
}

// If the first number is greater than the last number, alert "Bye". 
// If they are equal, alert "We close in an hour".

newArr([1,2,3,4,5]); // Alerts "Hi!"

//practice

let anotherArr = ['cheese', 'ham', 'salami', 'lettuce']

anotherArr.forEach( (l, n, p, c) => console.log(l, n, p, c))
//c shows undefined