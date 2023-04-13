function multiply(x, y, n) {
  multiply.iterations++;
  if (n === 1) {
    return x * y;
  } else {
    let m = Math.floor(n / 2);
    let a = Math.floor(x / 2 ** m);
    let b = x % 2 ** m;
    let c = Math.floor(y / 2 ** m);
    let d = y % 2 ** m;
    let e = multiply(a, c, m);
    let f = multiply(b, d, m);
    let g = multiply(b, c, m);
    let h = multiply(a, d, m);
    return 2 ** (2 * m) * e + 2 ** m * (g + h) + f;
  }
}

function test(n) {
  let x = (2 ** n) - 1;
  let y = (2 ** n) - 1;
  let startTime = performance.now();
  let endTime = performance.now();
  let duration = endTime - startTime;
  console.log(`bites = ${n}, iterações = ${multiply.iterations}, tempo = ${duration} ms`);
}

for (let n of [4, 16, 64]) {
  multiply.iterations = 0;
  test(n);
}



