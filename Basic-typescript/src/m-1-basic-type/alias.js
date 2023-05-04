"use strict";
const student1 = {
    stuName: 'Mukut',
    stuAge: 26,
    isAttentive: true
};
const student2 = {
    stuName: 'Dipu',
    stuAge: 25,
    isAttentive: false
};
console.log(student1, student2);
const calculateTwoNumbers = (num1, num2, operation) => {
    return (operation(num1, num2));
};
console.log(calculateTwoNumbers(10, 5, (x, y) => x + y));
