// inheritance is passing down properties & methods from parent class to child class
//

// class Parent {
// extends  use passed the parent class in child class
// } class 2
// class Child extends Parent {
// }

// class Person {
//   eat() {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
// }

// class Engineer extends Person {
//   work() {
//     console.log("solve problems, build something");
//   }
//   show() {
//     return this.present() + ", it is a " + this.model;
//   }
// }
// let surajObj = new Engineer("Ford", "Mustang");
// console.log(surajObj.show());

class Person {
  constructor(name) {
    this.name = name;
  }

  present() {
    return "My name is " + this.name;
  }
}

class Engineer extends Person {
  constructor(name, model) {
    super(name);
    this.model = model;
  }

  work() {
    console.log("solve problems, build something");
  }

  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let surajObj = new Engineer("Suraj", "Ford Mustang");
console.log(surajObj.show());

//  2nd logic

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  data() {
    return this.name + " " + this.year + " " + this.model;
  }
}

class Engineers extends Car {
  constructor(name, year, model) {
    super(name, year);
    this.model = model;
  }

  show() {
    return this.data() + "  ";
  }
}

let showData = new Engineers("Ford", 2020, " 2015125412");
console.log(showData.show());

// 3rd logic
class Employee {
  constructor(name, employee) {
    this.name = name;
    this.employee = employee;
  }
  employeeData() {
    return this.name + " " + this.employee;
  }
}

class Manager extends Employee {
  constructor(name, employee, year, company) {
    super(name, employee);
    this.name = name;
    this.employee = employee;
    this.year = year;
    this.company = company;
  }
  showEmployee() {
    return this.employeeData() + "  " + this.year + " " + this.company;
  }
}
let showEmplyoee = new Manager("suraj", "singh", "2015", "hero");
console.log(showEmplyoee.showEmployee());
