//ES8

//Object.entries devuelve la clave y valores de una matriz, devuelve un array en forma [propiedad, valor]

const data = {
  frontend: 'manuela',
  backend: 'daniel',
  design: 'ismael',
};

//transformar valores en matriz

const entries = Object.entries(data);
console.log(entries);

//[
//    [ 'frontend', 'manuela' ],
//    [ 'backend', 'daniel' ],
//    [ 'design', 'ismael' ]
//  ]

console.log(entries.length); // y  ya no necesitamos transformar el objeto en array y hacer cosas raras

//Object.values me devuelve los valores de objeto en forma de array

const values = Object.values(data);
console.log(values); //return an stringyfied array : ['manuela,'daniel','ismael']
console.log(values.length); //3
//Object.key me deuelve un array de la propiedades en este caso seria [name email y age]

//PadStart & PadEnd

const string = 'hello';
//agregar una cadena vacia al string
console.log(string.padStart(7, 'hi'));
//los parámaetros de padStart cuantos caracteres voy a tener y cuantos son los que quiero añadir
console.log(string.padEnd(12, ' ----'));
//nos puede servir para presentar una lista de un menu

//asyn and await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  // const hello2 = await otraFuncion();
  console.log(hello + '1');
};

helloAsync();

const anotherFunction = async () => {
  //esta es la forma más correcta de manejar los errores
  try {
    const hello = await helloWorld();
    console.log(hello + '2');
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
