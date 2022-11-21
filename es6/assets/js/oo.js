// MORE INFORMATION:
// https://medium.com/@apalshah/javascript-class-difference-between-es5-and-es6-classes-a37b6c90c7f8

// -------------------------------------------------------------------------
// ES 5 
// -------------------------------------------------------------------------
// sadly not possible in ES5;

// -------------------------------------------------------------------------
// ES 6
// -------------------------------------------------------------------------
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     talk() {
//         console.log("Hello I am " + this.name);
//     }
// }

// const person1 = new Person("Collin");
// const person2 = new Person("Lisa");

// person1.talk();
// person2.talk();


// -------------------------------------------------------------------------
// ES 6: inheritance
// -------------------------------------------------------------------------
// class Teacher extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }
//   teach() {
//     console.log("I am teaching");
//   }
// }

// const teacher1 = new Teacher("Collin");
// teacher1.talk();
// teacher1.teach();