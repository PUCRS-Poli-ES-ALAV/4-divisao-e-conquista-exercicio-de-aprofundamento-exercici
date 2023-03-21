function maxVal1(A) {
    let max = A[0];
    for (let i = 1; i < A.length; i++) {
      if (A[i] > max) {
        max = A[i];
      }
    }
    return max;
  }

  for (const n of sizes) {
    const A = new Array(n).fill(0).map(() => Math.floor(Math.random() * Math.pow(2, 31)));
    
    const start = new Date();
    const max = maxVal1(A);
    const end = new Date();
    const time = end - start;
    const iterations = n - 1;
  
    console.log(`Tamanho do vetor: ${n}`);
    console.log(`Maior valor: ${max}`);
    console.log(`Tempo gasto: ${time} milissegundos\n`);
  }
  
  const sizes = [32, 2048, 1048576];