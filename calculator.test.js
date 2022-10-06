const calculator = require("./Calculator");
const calc = new calculator();
describe("Clear funcion testing", () => {
  test("Checking clear operation", () => {
    calc.clear();
    expect(this.operation).toBeUndefined();
  });
  test("Checking clear operation", () => {
    calc.compute((this.operation = "+"));
    calc.clear();
    expect(this.operation).toEqual("+");
  });
});
