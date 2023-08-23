/* 
write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the result;

NB: Print the result;
*/

const arr1 = [2, 8, 9, 22, 33];
const arr2 = [3, 5, 89, 29, 25];

const process = (one, two) => {
    const arr3 = [...one, ...two];
    return Math.max(...arr3)
}

console.log(process(arr1, arr2));