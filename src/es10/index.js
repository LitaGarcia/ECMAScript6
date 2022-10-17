//flat(recibe como argumento la profundidad) y aplana la matriz

let array = [1, 2, (3)[(1, 2, 3)]]; // tiene 3 niceles de prof
console.log(array.flat());
console.log(array.flat(2)); // lo aplana dos niveles

//flatMap
//aplana un elemento y lo mapea

array = [1, 2, 3, 4, 5];
console.log(array.flatMap((value) => [value, value * 2]));
// el primer valor lp imprimimos y el segundo lo multiplicamos por dos

//trimStart() elimina los espacios al inicio de un string
let hello = '     hello World';
console.log(hello.trimStart());

//trimEnd() elimina los espacios al inicio de un string
hello = 'hello World          ';
console.log(hello.trimEnd());

//opcional catch

//Object.fromEntries()  Nos devuelve un objeto de arreglos
let entries = [
  ['name', 'manuela'],
  ['age', '28'],
];
console.log(Object.fromEntries(entries));

//symbol.prototype.desciption

let Symbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);
