class ToyotaCar {
  constructor(brand, mileage) {
    console.log("constructor");
    this.brandName = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  price() {
    console.log("price");
  }
  //   setBrand(brand) {
  //     this.brandName = brand;
  //   }
}
let fortuner = new ToyotaCar("Innova", "22200");
const data = console.log(fortuner);
// fortuner.setBrand("fortuner");
// let Lexus = new ToyotaCar();
// lexus.setBrand("lexus");
