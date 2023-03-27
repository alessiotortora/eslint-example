const name = 'James';

const person = { first: name };

// eslint-disable-next-line no-console
console.log(person);

// eslint-disable-next-line no-unused-vars
const sayHelloLinting = (fName) => {
  // eslint-disable-next-line no-console
  console.log(`Hello linting, ${fName}`);
};
