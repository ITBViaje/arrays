//Métodos arrays (nuevos)
//findIndex: devuelve el índice del array del primer elemento que cumple con una condición.
//Primero vemos cuál es el método que devuelve el índice de un array:
//const array = [12, 5, 8, 30];
//const array = [4, 5, 8, 20, 30, 1]
//console.log(array.indexOf(5));//Devuelve la posición en la que está el elemento indicado.

//findIndex: es similar a indexOf, pero  hay que pasar como argumento una función flecha;

//Sintaxis: let posicion = miArray.findIndex(() => condicion)

//console.log(array.findIndex( x => x > 12 ));

//find: Este método en lugar de devolver la posición devuelve el valor del elemento.
// También hay que pasarle la función flecha como argumento.

//console.log(array.find (  x => x < 8));

//fill: crea un array de un tamaño determinado e inicializa su contenido
//Sintaxis: const array = new Array(tamaño).fill(valor, inicio?, fin?)

/*const array1 = new Array(5).fill('z');
console.log(array1);
const array2 = new Array('a','b','c','d','e','f');
array2.fill('x', 2,5);
console.log(array2);*/

//copyWithin: copia los elementos que están entre los índices de inicio y fin a partir
//de una posición.

const array3 = new Array('a','b','c','d','e','f','g','h');
console.log(array3.copyWithin(1, 2, 3));
console.log(array3.copyWithin(2, 5, 7));