//Las funciones de flecha es una alternativa más compacta y utilizada en React.

//SINTAXIS: (p, p1, p2) => { sentencias }
//          (p, p1, p2) => expresión
//                  ()  => { return expresion }
// Si tengo un solo parámetro, los paréntesis son opcionales.
//             parametro => { sentencias }
// Si la función no tiene parámetros los paréntesis son obligatorios.
//             () => { sentencias }
// Ejemplos:


let miFuncion = function (nombre) {
   return "Hola " + nombre ;
}
console.log(miFuncion('Lu'));

let miFuncionFlecha = nombre => 'Hola ' + nombre ;
console.log(miFuncionFlecha('Juan'));


let miFuncion2 = function () {
   return "Hola" ;
}
console.log(miFuncion2('Lu'));

let miFuncion3 = () => 'Hola';*/

/*let operoDosNumeros = (a,b) => {
  return 'El producto de ' + a + ' y ' + b + " es: " + a * b + 'o \ y La suma de ' + a + ' y ' + b + " es: " + (a + b);*/

//PARAMETROS POR DEFECTO
//Permiten que los parámetros sean inicializados con valores por defecto si no se pasan valores o si los valores pasados son undefined.
//SINTAXIS function (p=valor1, p=valor2) { sentencias}
//Anteriormente haciamos lo siguiente:
function suma (a, b){
   return a + b
}
/*function multiplico (a, b){
   if (typeof b === 'undefined'){
      b = 1;
   }
   return a * b;
}
console.log(multiplico(8));*/

function multiplico (a=1, b=1){
   return a * b;
}
console.log(multiplico());
//HACER EL MISMO EJERCICIO CON FUNCIONES FLECHAS
/*let multiplico = (a=1, b=1) => 'El producto es ' + a * b;
console.log(multiplico(5,4));*/