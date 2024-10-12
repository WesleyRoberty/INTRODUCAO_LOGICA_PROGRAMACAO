/*let num = [1,2,3,5,7,11,13,17,19,21,23,29,31,37,41,43,47,51,53,57,61,63,67,71,73,79,83,87,93,97,101,103,,107,109,111,113,117,127,131,133,137,141,143,147,151,157,161,167,171,173,181,187,191,193,197];
console.log(num)*/

function primeNumber(num) {
    for (var divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}

var n = 200;

for (var i = 2; i < n; i++) if (primeNumber(i)) console.log(i);

/*var n = 200;

 function buscaNumeroPrimos(N) {

  var numerosPrimos = [];

  for (var i = 2; i < n; i++){   
     var quantidadeDeDivisores = 0; 

     for(var b = 2; b < i; b++) {
        if (i % b == 0) {
           quantidadeDeDivisores ++;
        }
     }

     if (quantidadeDeDivisores % i == 0) {
        numerosPrimos.push(i);
     }

  }

return numerosPrimos;
}*/