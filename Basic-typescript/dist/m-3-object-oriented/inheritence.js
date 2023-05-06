"use strict";
class Parent {
    constructor(name, age, address) {
        (this.name = name), (this.age = age), (this.address = address);
    }
    makeSleep(hours) {
        return `${this.name} will sleep for ${hours}`;
    }
}
class teacher extends Parent {
    constructor(name, age, address, designation, salary) {
        super(name, age, address);
        this.designation = designation;
        this.salary = salary;
    }
}
class student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student12 = new student("Mukut", 26, "chattogram");
const teacher1 = new teacher('Dipu', 30, 'Dhaka', 'Dep Head', 6542120);
console.log(student12);
console.log(teacher1);
