// let Employee = function (name, company, salary) {
//   this.name = name || "";
//   this.company = company || "";
//   this.salary = salary || 5000;

//   let increaseSalary = function () {
//     this.salary = this.salary + 1000;
//   }.bind(this);

//   this.displayIncreasedSalary = function () {
//     increaseSalary();
//     console.log(this.salary);
//   };
// };

// var emp1 = new Employee("John", "Pluto", 3000);
// emp1.displayIncreasedSalary();

let EmployeeData = function (name, company, salary) {
  this.name = name || "";
  this.company = company || "";
  this.salary = salary || 5000;
};

const data = function () {
  this.salary = this.salary + 1000;
};
