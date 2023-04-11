function maxVal1(A) {
  let max = A[0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }
  }
  return max;
}

function testMaxVal1() {
  const n = 32; 
  const A = Array.from({length: n}, () => Math.floor(Math.random() * 100)); // Cria o vetor com números aleatórios entre 0 e 99

  const start = performance.now();
  const max = maxVal1(A);
  const end = performance.now();

  console.log(`Valor Máximo: ${max}`);
  console.log(`Número de iterações: ${n - 1}`);
  console.log(`Tempo de execução: ${end - start} milissegundos`);
}

function testMaxVal2() {
  const n2 = 2048; 
  const A2 = Array.from({length: n2}, () => Math.floor(Math.random() * 100)); // Cria o vetor com números aleatórios entre 0 e 99

  const start2 = performance.now();
  const max2 = maxVal1(A2);
  const end2 = performance.now();

  console.log(`Valor Máximo: ${max2}`);
  console.log(`Número de iterações: ${n2 - 1}`);
  console.log(`Tempo de execução: ${end2 - start2} milissegundos`);
}

function testMaxVal3() {
  const n3 = 1048576; 
  const A3 = Array.from({length: n3}, () => Math.floor(Math.random() * 100)); // Cria o vetor com números aleatórios entre 0 e 99

  const start3 = performance.now();
  const max3 = maxVal1(A3);
  const end3 = performance.now();

  console.log(`Valor Máximo: ${max3}`);
  console.log(`Número de iterações: ${n3 - 1}`);
  console.log(`Tempo de execução: ${end3 - start3} milissegundos`);
}
console.log("TESTANDO COM 32")
testMaxVal1();
console.log("")
console.log("TESTANDO COM 2048")
testMaxVal2();
console.log("")
console.log("TESTANDO COM 1048576")
testMaxVal3();
