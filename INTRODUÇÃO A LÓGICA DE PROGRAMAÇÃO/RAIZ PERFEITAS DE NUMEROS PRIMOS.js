var n = 200;

 function escreverNumerosPrimos(n) {

  var numerosPrimos = [];

  for (var i = 2; i < n; i++){  quantidadeDeDivisores = 0; 

     for(var div = 0; div < i; div++) { 
        if (i % div == 0) {
           quantidadeDeDivisores ++;
        }
     }

     if (quantidadeDeDivisores % i == 2) {
        numerosPrimos.push(i);
     }

  }

return numerosPrimos;

}

console.log(escreverNumerosPrimos(n))