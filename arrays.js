const miArray = [4, 5, 8];

const miArray3 = ['Juan', 'Pedro', "Melisa"]

const miArray2 = new Array(10);


const array = [1, 2, 3, 8];
array = [7, 8, 10, 12]
array[0] = 7;
array[1] = 8;
console.log(array);

//¿Cómo asignamos nuevos valores si lo definimos con const?
 
//array = [4, 5, 6]; Da error como esperábamos. Lo que se hace es cambiar el valor 1 a 1.

array[0] = 4;
array[1] = 5;
array[2] = 6;
console.log(array);
//Una forma que no se usa, pero que la pueden ver escrita en algún lugar.
//const array1 = new Array(10);
//console.log(array1)