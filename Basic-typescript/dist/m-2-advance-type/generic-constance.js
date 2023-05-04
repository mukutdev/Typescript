"use strict";
const a = 'name';
const b = 'age';
const c = 'house';
const newPersonDetails2 = {
    name: 'Mukut',
    age: 26
};
function getProperty(obj, key) {
    return obj[key];
}
const property = getProperty(newPersonDetails2, 'age');
console.log(property);
