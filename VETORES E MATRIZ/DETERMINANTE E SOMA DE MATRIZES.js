/*DETERMINANTE DE MATRIZ- FORMA 1

let matriz =[

[1 , 2, 3],
[4 , 5, 6], 
[7 , 8, 9] 

];

var a= ((matriz[0][0])*(matriz[1][1])*(matriz[2][2]))+((matriz[0][1])*(matriz[1][2])*(matriz[2][0]))+((matriz[0][2])*(matriz[1][0])*(matriz[2][1]))
var b = ((matriz[0][2])*(matriz[1][1])*(matriz[2][0]))+((matriz[0][0])*(matriz[1][2])*(matriz[2][1]))+((matriz[0][1])*(matriz[1][0])*(matriz[2][2]))
console.log(a-b)

DETERMINANTE DE MATRIZ- FORMA 2

let matriz = [

    [1 , 2, 3],
    [4 , 5, 6], 
    [7 , 8, 9] 
    
];

var a = matriz[0][0]
var b = matriz[0][1]
var c = matriz[0][2]
var d = matriz[1][0]
var e = matriz[1][1]
var f = matriz[1][2]
var g = matriz[2][0]
var h = matriz[2][1]
var i = matriz[2][2]

var det = ((a*e*i)+(b*f*g)+(c*d*h))-((c*e*g)+(a*f*h)+(b*d*i))
console.log(det)

SOMA DE MATRIZES */

let MatrizA =[

[1,2],
[3,4],

];

let MatrizB = [

[2,3],
[5,6],

];

var a = (MatrizA[0][0] + MatrizB[0][0]);
var b = (MatrizA[0][1] + MatrizB[0][1]);
var c = (MatrizA[1][0] + MatrizB[1][0]);
var d = (MatrizA[1][1] + MatrizB[1][1]);
console.log(`[${a},${b}]\n[${c},${d}]`);
