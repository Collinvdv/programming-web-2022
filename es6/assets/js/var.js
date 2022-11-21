// W3 LINKS
// https://www.w3schools.com/js/js_es6.asp#mark_let
// https://www.w3schools.com/js/js_es6.asp#mark_let

// -------------------------------------------------------------------------
// ES 5 
// Defining a var in es5 = use var variableName
// -------------------------------------------------------------------------
// var age = 31;
// age = 32;
// console.log(age);

// -------------------------------------------------------------------------
// ES 5 
// Problem with block scope
// -------------------------------------------------------------------------
// function countDown() {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }

//     // Say whut? I still existing
//   console.log(i);
// }

// countDown();


// -------------------------------------------------------------------------
// ES 5 
// Problem with multiple variables with the same name
// -------------------------------------------------------------------------
// var age = 31;
// var age = 40;
// console.log(age);



// -------------------------------------------------------------------------
// ES 6
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// Const
// Use const if you got a variable where the variable will never change
// -------------------------------------------------------------------------
// const age = 31; 
// age = 32; // It will complain because data of a const has changed
// console.log(age);

// -------------------------------------------------------------------------
// Let
// Use let if you got a variable where the data could change 
// -------------------------------------------------------------------------
// let age = 31; 
// age = 32;
// console.log(age);

// -------------------------------------------------------------------------
// Const let vs scope
// -------------------------------------------------------------------------
// const countDown = () => {
//     for (let i = 0; i < 10; i++) {
//         console.log(i)
//     }

//     // it will complain because I can not live out of the score
//     console.log(i);
// }

// countDown();



