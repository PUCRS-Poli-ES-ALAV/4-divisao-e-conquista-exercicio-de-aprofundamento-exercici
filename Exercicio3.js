function maxVal2(A, init, end) {
  if (end - init <= 1) {
    return Math.max(A[init], A[end]);
  } else {
    const m = Math.floor((init + end) / 2);
    const v1 = maxVal2(A, init, m);
    const v2 = maxVal2(A, m + 1, end);
    return Math.max(v1, v2);
  }
}

function testMaxVal2() {
  const n = 32; 
  const A = Array.from({ length: n }, () => Math.floor(Math.random() * 1000)); // Cria o vetor com números aleatórios entre 0 e 99

  const start = performance.now();
  const max = maxVal2(A, 0, n - 1);
  const end = performance.now();

  console.log(`Valor Máximo: ${max}`);
  console.log(`Número de iterações: ${Math.log2(n)}`);
  console.log(`Tempo de execução: ${end - start} milissegundos`);
}

function testMaxVal3() {
  const n2 = 2048; 
  const A2 = Array.from({ length: n2 }, () => Math.floor(Math.random() * 1000)); // Cria o vetor com números aleatórios entre 0 e 99

  const start2 = performance.now();
  const max2 = maxVal2(A2, 0, n2 - 1);
  const end2 = performance.now();

  console.log(`Valor Máximo: ${max2}`);
  console.log(`Número de iterações: ${Math.log2(n2)}`);
  console.log(`Tempo de execução: ${end2 - start2} milissegundos`);
}

function testMaxVal4() {
  const n3 = 1048576; 
  const A3 = Array.from({ length: n3 }, () => Math.floor(Math.random() * 1000)); // Cria o vetor com números aleatórios entre 0 e 99

  const start3 = performance.now();
  const max3 = maxVal2(A3, 0, n3 - 1);
  const end3 = performance.now();

  console.log(`Valor Máximo: ${max3}`);
  console.log(`Número de iterações: ${Math.log2(n3)}`);
  console.log(`Tempo de execução: ${end3 - start3} milissegundos`);
}

console.log("TESTANDO COM 32")
testMaxVal2();
console.log("")
console.log("TESTANDO COM 2048")
testMaxVal3()
console.log("")
console.log("TESTANDO COM 1048576")
testMaxVal4()















