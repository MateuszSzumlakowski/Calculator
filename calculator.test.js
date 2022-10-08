const { expect } = require("expect");
const calculator = require("./Calculator");
describe("Clear funcion testing", () => {
  test("Checking clear operation", () => {
    const calc = new calculator();
    calc.clear();
    expect(this.operation).toBeUndefined();
  });
  test("Checking clear operation", () => {
    const calc = new calculator(12, 12);
    calc.clear();
    expect(this.currentOperand).toEqual("");
  });
  test("Checking clear operation", () => {
    const calc = new calculator();
    calc.compute((this.operation = "+"));
    calc.clear();
    expect(this.operation).toEqual("+");
  });
});
describe("Delete function testing", () => {
  test("Deleting last numbers", () => {
    const calc = new calculator(12, 13);
    const slice = calc.delete();
    expect(slice).toEqual(1);
  });
});
