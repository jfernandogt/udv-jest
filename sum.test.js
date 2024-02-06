var sum = require("./sum.js");

describe("probar el componente de suma", () => {
  it("que retorne valores correctos con numeros", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
