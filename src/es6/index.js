//default params before ES6

function newFunction(name, age, country) {
  var name = name || 'manuela';
  var age = age || 28;
  var country = country || 'SP ';
}

// with ES6

function newFunction2(name = 'manuela', age = 28, country = 'SP') {
  console.log(name, age, country);
}

// to use it...
newFunction2(); // if i dont use a parameter, it will give me by default
newFunction2('Manuela', '28', 'SP');

// template literals

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world; //ooooold!!!
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`; //goooood!!!
console.log(epicPhrase2);

// multilinie string

//old
let lorem = 'quiero escribir una frase \n' + 'quiero escribir otra frase';

//ES6

let lorem2 = `ota frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

//Destructuring

let person = {
  name: 'manuela',
  age: 28,
  country: 'SP',
};
console.log(person.name, person.age);

let { name, age } = person;
console.log(name);

//destructuring an array

const words = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const [first, second, third] = words;
console.log(first, second, third);

//destructuring returned values from a function
function useState(value) {
  return [value, updateValue()];
}

//old way

// const estado = useState(3);
// const valor = estado[0];
// const actualizador = estado[1];

//New way
const [valor, actualizador] = useState(3);
//new better way, they re objects so whe can use it with the index and giving a variable

const array = [1, 2, 3, 4, 5, 6, 7];
const { 4: manuela } = array;
console.log(cinco);

// Spread Operator

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];
let education = ['David', ...team1, ...team2]; //antes

//making a copy of an array with spread operator

const originalArray = [1, 2, 3, 4, 5];
const copyArray = originalArray;
copyArray[0] = 0;

originalArray; // [0,2,3,4,5]
originalArray === copyArray; // true

// achtung!!! change an element into the copied array modifies too into the original array
// if you want only to avoid this, use instead:

const originalArray2 = [1, 2, 3, 4, 5];
const copyArray2 = [...originalArray];
copyArray2[0] = 0;

originalArray2; // [1,2,3,4,5]
copyArray2; // [0,2,3,4,5]
originalArray2 === copyArray2; // false

//u can use too structured clone if the array is deeper f.e

const originalArray3 = [1, [2, 3], 4, 5];
const copyArray3 = structuredClone(originalArray);

originalArray3 === copyArray3; // false
originalArray3[1] === copyArray3[1]; // false
