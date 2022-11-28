// MORE INFORMATION:
// https://medium.com/@apalshah/javascript-class-difference-between-es5-and-es6-classes-a37b6c90c7f8

// -------------------------------------------------------------------------
// ES 5 
// -------------------------------------------------------------------------
// sadly not possible in ES5;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hello I am ${this.name} and I am ${this.age} years old`);
    }

    setAge(age) {
        this.age = age;
    }
}

class Teacher extends Person {
    constructor(name, age, degree) {
        super(name, age);

        this.degree = degree;
    }

    teach() {
        console.log("AI AI AI AI ");
    }
}

let person1 = new Person("Van der Vorst Collin", 31);
const teacher1 = new Teacher("Boonen Elke", 31, "Master");
teacher1 = new Teacher("Tom Cruise", 22, "bachelor");

teacher1.name = "Elktje boonen";
teacher1.sayHi();
teacher1.teach();


person1.setAge(44);
console.log(person1.name);
person1.sayHi();

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