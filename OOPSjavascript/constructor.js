function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = (amount) => {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}
const rakeshAccount = new BankAccount("Rakesh K", 1000);
rakeshAccount.deposit(6000);
// rakeshAccount.withdraw(6000);

// const lokeshAccount = new BankAccount("Lokesh");
// lokeshAccount.balance = 15200;
// console.log(lokeshAccount);
console.log(rakeshAccount);

// property in class based variable
// function in class based in method based
