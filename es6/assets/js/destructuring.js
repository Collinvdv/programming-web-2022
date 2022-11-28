// -------------------------------------------------------------------------
// ES 5 
// -------------------------------------------------------------------------
const user = {
  name: "Van der Vorst",
  firstname: "Collin",
  age: 30
};

const { firstname } = user;

const goats = ["T-rex", "Connie", "Clyde"];
const [goat1, ...otherGoats] = goats;
console.log(goat1);
console.log(otherGoats);

// -------------------------------------------------------------------------
// ES 6
// Object destructuring
// -------------------------------------------------------------------------
// const user = {
//   name: "Van der Vorst",
//   firstname: "Collin",
//   age: 30
// };

// const { name: username, firstname, age } = user;

// -------------------------------------------------------------------------
// ES 6
// Array destructuring
// -------------------------------------------------------------------------
// const colors = ["red", "green", "blue"];

// const [color1, color2, color3] = colors;
