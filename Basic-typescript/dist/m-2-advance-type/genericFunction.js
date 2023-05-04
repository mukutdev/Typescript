"use strict";
// non gen function
const nonGenArray = (param) => {
    return [param];
};
// generic function
const makeArray = (param) => {
    return [param];
};
const res = makeArray("Bangladesh");
const res2 = makeArray(true);
const res3 = nonGenArray('Bangladesh');
const res4 = makeArray({ name: 'mukut', age: 26 });
//
const makeTuple = (param, param2) => {
    return [param, param2];
};
const res5 = makeTuple("mukut", 20);
