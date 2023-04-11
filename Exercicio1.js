function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// teste para vetor de tamanho 30 
const arr = Array.from({ length: 32 }, () => Math.floor(Math.random() * 100));

const start = new Date().getTime();
const sorted = mergeSort(arr);
const end = new Date().getTime();

console.log("TESTE VETOR COM TAMANHO 30");
console.log("Input do Vetor:", arr);
console.log("Vetor Ordenado:", sorted);
console.log(`Número de iterações: ${arr.length * (Math.log2(arr.length) + 1)}`);
console.log(`Tempo de execução: ${end - start} ms`);


// teste para vetor de tamanho 2048
const arr2 = Array.from({ length: 2048 }, () => Math.floor(Math.random() * 100));

const start2 = new Date().getTime();
const sorted2 = mergeSort(arr2);
const end2 = new Date().getTime();

console.log("");
console.log("TESTE VETOR COM TAMANHO 2048");
console.log("Input do Vetor: ", arr2);
console.log("Vetor Ordenado:", sorted2);
console.log(`Número de iterações: ${arr2.length * (Math.log2(arr2.length) + 1)}`);
console.log(`Tempo de execução: ${end2 - start2} ms`);

// teste para vetor de tamanho 1.048.576
const arr3 = Array.from({ length: 1048576 }, () => Math.floor(Math.random() * 100));

const start3 = new Date().getTime();
const sorted3 = mergeSort(arr3);
const end3 = new Date().getTime();

console.log("");
console.log("TESTE VETOR COM TAMANHO 1048576");
console.log("Input do Vetor: ", arr3);
console.log("Vetor Ordenado:", sorted3);
console.log(`Número de iterações: ${arr3.length * (Math.log2(arr3.length) + 1)}`);
console.log(`Tempo de execução: ${end3 - start3} ms`);
