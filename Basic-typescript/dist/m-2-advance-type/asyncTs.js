"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = "data is fetched";
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetched");
        }
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const getData = yield makePromise();
    return getData;
});
getPromiseData()
    .then(result => console.log(result))
    .catch(error => console.log(error));
const fetchTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
});
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const getData = yield fetchTodoData();
    console.log(getData);
});
getTodoData();
