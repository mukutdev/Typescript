class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    (this.name = name), (this.age = age), (this.address = address);
  }

  makeSleep(hours: number): string {
    return `${this.name} will sleep for ${hours}`;
  }
}

class teacher extends Parent {
  designation: string;
  salary: number;
  constructor(
    name: string,
    age: number,
    address: string,
    designation: string,
    salary: number
  ) {
    super(name, age, address);
    this.designation = designation;
    this.salary = salary;
  }
}

class student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}


const student12 = new student("Mukut", 26, "chattogram");
const  teacher1 = new teacher ('Dipu' , 30 , 'Dhaka' , 'Dep Head' , 6542120)
console.log(student12);
console.log(teacher1);
