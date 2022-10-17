//BigInt
//Js solo permite cómo maximo el n 2^56

//si añadimos una n podemos añadir un numero mayor a este

const aBigNumber = 9007199254740991n;

//nuevo método BigInt
const anotherBigNumber = BigInt(9007199254740991);

// Promise All Settled -> nos devuelve una promesa q se resuelve
// despues de q todas las promesas dadas se hayan cumplido o rechazado
// en una serie de obj que se describe el resultado de cada promesa
const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

Promise.allSettled([promise1, promise2, promise3]).then(
  (response) => console.log(response) //no importa el estado de las promesas, solo espera a que se cmplan
);

// [
//  { status: 'rejected', reason: 'reject' },
//  { status: 'fulfilled', value: 'resolve' },
//  { status: 'fulfilled', value: 'resolve 1' }
// ]

//GLOBAL THIS

console.log(window); //window is not defined
console.log(globalThis); //nos da todos los obj globales

//New Logic Operator!!!!! NULL OPERATOR

const fooo = null ?? 'default string';
console.log(fooo);

// const fooo2 = 'not null' ?? 'default string';
// console.log(fooo2); ---> 'not null' nos devuelve el primer string pq no es null

//OPTIONAL CHAINING

const user = {};
console.log(user?.profile?.email ?? ); //undefined
// de esta forma sigue funcionando y no se rompe el código, es una forma de validar algo que no está disponible todavía pq por ejemplo este valor vendrá de un api :)

//uso real
// const user = { email: 'mail' };
// console.log(user?.email ?? 'pepe'); 

if (user?.profile?.email) {
  console.log('email');
} else {
  console.log('fail');
}
