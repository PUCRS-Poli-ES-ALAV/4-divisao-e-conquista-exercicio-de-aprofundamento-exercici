function maxVal2(A, init, end) {  
    if (end - init <= 1)
        return max(A[init], A[end]);  
    else {
          var m = (init + end)/2;
          var v1 = maxVal2(A,init,m);   
          var v2 = maxVal2(A,m+1,end);  
          return max(v1,v2);
         }
}