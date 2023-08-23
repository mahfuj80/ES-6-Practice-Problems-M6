/* 
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the name of your friends
b) Check if the length of each element is even, push elements with even length to a new array and return the result

Nb: please print the result.
*/

const friends = ['Nobel', 'Poros', 'Kamrul', 'Shajidul', 'Badhon', 'Al-Amin', 'Sahed', 'Sporsho', 'Ponckot', 'Mehedi', 'Condom', 'Unckle', 'alex'];
const evenFriends = [];
for (const friend of friends) {
    if (friend.length % 2 === 0) {
        evenFriends.push(friend);
    }
}

console.log(evenFriends);