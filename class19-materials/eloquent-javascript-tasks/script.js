// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.
function range (start, end){
    const arr = [];
    for (let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}
console.log(range(1, 10));

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
function sum (arr){
    let total = 0
    for (let i = 0; i <= arr.length-1; i++){
        total = total + arr[i];
    }
    return total;
}
console.log(sum([2, 4, 6, 5, 3]))

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. 
// If no step is given, the elements should go up by increments of one, corresponding to the old behavior. 
// The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
// Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
function rangeStep(start, end, step = 1) {
    const arr = [];

    // Prevent infinite loops
    if (step === 0) {
        throw new Error("Step cannot be 0");
    }

    // Count upward
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    } 
    // Count downward
    else {
        for (let i = start; i >= end; i += step) { // step is negative
            arr.push(i);
        }
    }

    return arr;
}

console.log(rangeStep(1, 10, 2));   // [1, 3, 5, 7, 9]
console.log(rangeStep(5, 2, -1));   // [5, 4, 3, 2]
console.log(rangeStep(1, 5));       // [1, 2, 3, 4, 5]
