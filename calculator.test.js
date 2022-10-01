const calculator = require("./Calculator");
const calc = new calculator();
test("Checking clear operation", () => {
  calc.clear();
  expect(this.operation).toBeUndefined();
});
