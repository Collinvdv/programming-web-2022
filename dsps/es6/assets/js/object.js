// -------------------------------------------------------------------------
// ES 5 
// Defining a var in es5 = use var variableName
// -------------------------------------------------------------------------
// var person = {
//   name: "Collin",
//   sayHi: function() {
//     console.log("How you doing, I am " + this.name);
//   }
// };

// // 2 ways to call something from an object
// person.name = "Collin Van der vorst";
// person['name'] = "Collin Van der Vorst";
// person.sayHi();

// -------------------------------------------------------------------------
// ES 6 
// Problem with block scope
// -------------------------------------------------------------------------
// let person = {
//   name: "Collin",
//   sayHi() {
//       console.log(`How you doing, I am ${this.name}`);
//   }
// };

// // 2 ways to call something from an object
// person.name = "Collin Van der vorst";
// person['name'] = "Collin Van der Vorst";

// person.sayHi();