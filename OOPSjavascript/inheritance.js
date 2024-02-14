// inheritance is passing down properties & methods from parent class to child class
//

// class Parent {
// extends  use passed the parent class in child class
// } class 2
// class Child extends Parent {
// }

class Person {
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
}

class Engineer extends Person {
  work() {
    console.log("solve problems, build something");
  }
}
let surajObj = new Engineer();
