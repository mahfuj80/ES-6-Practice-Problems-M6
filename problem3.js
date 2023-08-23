/* 
Write an arrow function where it will do the following: x^2
a)  Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements

NB: Print The result;
*/

const numbers = [2, 3, 5, 7, 9, 3, 8, 6];
let squareSum = 0;
const process = (numbers) => {
    for (const num of numbers) {
        const square = num * num;
        squareSum = squareSum + square;
    }
    const average = squareSum / numbers.length;
    return average;

}

console.log(process(numbers));