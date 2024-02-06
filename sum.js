const sum = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  throw new TypeError("Los argumentos deben ser numeros");
};

module.exports = sum
