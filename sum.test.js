var sum = require("./sum.js");

describe("probar el componente de suma", () => {
  it("que retorne valores correctos con numeros", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("que retorne un error si se mandan valores no numericos", () => {
    expect(() => sum("1", "2")).toThrow("Los argumentos deben ser numeros");
    // expect(() => sum("1", "2")).toThrow(TypeError);
  });
});
