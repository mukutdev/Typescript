"use strict";
const testDefault = (num1, num2 = 20) => {
    return num1 * num2;
};
console.log(testDefault(15));
//spread operator
const newFriends = ['mukut', 'mimu', 'akash'];
const newFriends2 = ['rony', 'hamid', 'joy'];
newFriends.push(...newFriends2);
// rest parameters
const greetFriends = (...friends) => {
    friends.forEach((friend) => console.log(`Hello ${friend}`));
};
greetFriends('mimu', 'mukut', 'dipu', 'ts');
