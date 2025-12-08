//Create a function that takes in an array of numbers. 
function returnEvenNums (nums){

let evens = []

for (let i = 0; i < nums.length; i++){
//Return a new array containing every even number from the original array (do not use map or filter)
    if (nums[i] % 2 === 0){
        evens.push(nums[i]);
    }
}
return evens;
}
console.log (returnEvenNums ([2, 3, 5, 7, 8, 6]))

//forEach example
function logEvens (nums){

    let evens = []

    nums.forEach( n => {
        if (n % 2 === 0){
            evens.push(n);
        }
    });
    return evens;
        
    };
console.log (logEvens ([2, 3, 5, 7, 8, 6]))

function makeNegative(num) {
  if(num > 0){
    return num * -1;
  }
  return num;
} 
