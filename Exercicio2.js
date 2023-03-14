const maxNumbers = 10;
let list = [];
for (let i = 0; i < maxNumbers; i++) {
   list[i] = i + 1;
}
console.log(list); 

function maxVal1(maxNumbers, n) {  
     max = maxNumbers[0];
    for (var i = 1; i < n; i++) {  
        if( maxNumbers[i] > max ) 
           max = maxNumbers[i];
    }
    return max;
}

