import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// ES6 code loveeeeee
// let firstname = "Collin";
// let familyname = "Van der Vorst";
// let fullname = `${firstname} "the big one" ${familyname}`;
const multiply = (a, b) => a * b;

console.log(multiply(5, 10));

// const square = (a) => {
//   return a * a
// };

// const square2 = a => a * a;

let user = {
  name: "Collin",
  age: 31,
  isAwesome: true,
}

const { name: username, age } = user;

console.log(`Hello ${user.name}, you are ${user.age}`);
console.log(`Hello ${username}, you are ${age}`);

// const harryPotterChars = ["Harry Potter", "Ron Weasley", "Hermione Granger"];
// const [harry, ron, hermione] = harryPotterChars;

// console.log(harry);

const males = ["Collin", "Jeroen", 20];
const females = ["Lisa", "Anna"];
const students = [...males, ...females];
console.log(students);

const admin = {
  name: "Collin",
  isAdmin: false
};

const personalInfo = {
  age: 31,
}

const collin = {
  ...admin,
  ...personalInfo,
}

console.log(collin);

import { User, Teacher } from "./User.js";
import cedricVariable from "./User.js";

console.log(cedricVariable);
let user1 = new User("Collin", 31);
let user2 = new User("Elke", 31);
let teacher1 = new Teacher("Jeroen", 31, "teacher");
user1.sayHello();
user2.sayHello();
teacher1.sayHello();
teacher1.teach();

let grades = [8, 5, 7, 10];
grades = grades.map((grade) => {
  return grade * 2;
})

console.log(grades);

grades.forEach((grade) => {
  console.log(grade);
});

let gradesStudents = [
  {
    name:"Collin",
    score: 8
  },
  {
    name: "Youssef",
    score: 16
  },
  {
    name: "Yassine",
    score: 2
  }
];

let passedStudents = [];

gradesStudents.forEach((student) => {
  if (student.score >= 10) {
    passedStudents.push(student);
  }
});

console.log(passedStudents);

let passedStudents2 = gradesStudents.filter(student => student.score >= 10);

console.log(passedStudents2);