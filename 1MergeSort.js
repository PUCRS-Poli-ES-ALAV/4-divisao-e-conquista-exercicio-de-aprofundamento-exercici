function mergeSort(array) {
    if(array.length===1) {
        return array;
    } else {
        let left = array.slice(0, array.length/2);
        let right = array.slice(array.length/2);
        
        return merge(mergeSort(left), mergeSort(right));
    }
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

// Test with an array of size 32
const arr32 = Array.from({ length: 32 }, () => Math.floor(Math.random() * 100));
console.log(`Input array of size 32:`);
let start = Date.now();
let sortedArr = mergeSort(arr32);
let end = Date.now();
console.log(`Sorted array of size 32: ${sortedArr}`);
console.log(`Iterations: ${sortedArr.length}`);
console.log(`Time taken: ${end - start} ms`);