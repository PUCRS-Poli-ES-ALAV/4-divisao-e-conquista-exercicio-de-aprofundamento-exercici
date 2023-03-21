function MULTIPLY(x, y, n) {
    if (n === 1) {
      return x * y;
    } else {
      const m = Math.floor(n / 2);
      const a = x >> m; const b = x % (1 << m);
      const c = y >> m; const d = y % (1 << m);
      const e = MULTIPLY(a, c, m);
      const f = MULTIPLY(b, d, m);
      const g = MULTIPLY(b, c, m);
      const h = MULTIPLY(a, d, m);
      return (1 << (2 * m)) * e + (1 << m) * (g + h) + f;
    }
  }

// testando com 4 bitss
let n = 4;
let xList = Array.from({ length: 100 }, () => Math.floor(Math.random() * (1 << n)));
let yList = Array.from({ length: 100 }, () => Math.floor(Math.random() * (1 << n)));
let numIterations = 0;
let startTime = Date.now();
for (let i = 0; i < xList.length; i++) {
  MULTIPLY(xList[i], yList[i], n);
  numIterations++;
}
let endTime = Date.now();
console.log(`Teste com ${n}-bits:`);
console.log(`  Número de iterações: ${numIterations}`);
console.log(`  Tempo de execução: ${(endTime - startTime) / 1000} segundos`);

// testando com 16 bitssss
n = 16;
xList = Array.from({ length: 100 }, () => Math.floor(Math.random() * (1 << n)));
yList = Array.from({ length: 100 }, () => Math.floor(Math.random() * (1 << n)));
numIterations = 0;
startTime = Date.now();
for (let i = 0; i < xList.length; i++) {
  MULTIPLY(xList[i], yList[i], n);
  numIterations++;
}
endTime = Date.now();
console.log(`Teste com ${n}-bits:`);
console.log(`  Número de iterações: ${numIterations}`);
console.log(`  Tempo de execução: ${(endTime - startTime) / 1000} segundos`);
