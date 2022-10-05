//rest parameter

const obj = {
  name: 'manuela',
  age: '28',
  country: 'SP',
};

let { name, ...all } = obj;
console.log(name, all);

//para no destructurar todos los elementos.. uso

// let {country, ...all} = obj;
// console.log(all)

//Propagation Properties

// const obj = {
//     name: 'manuela',
//     age: '28'
// }
// const obj1 = {
//     ...obj,
//     country: 'SP'
// }

//FINALLY METHOD

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finalizó'));

//RegEx Regular Expressions
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2022-10-04');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
