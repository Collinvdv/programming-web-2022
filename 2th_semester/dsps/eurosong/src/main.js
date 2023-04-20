import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// ES 5 variables
// var firstName = "Collin";
// console.log(firstName);

// ES 6 variables
// let firstName = "Collin";
// const lastName = "Van der Vorst";
// firstName = "Collina";
// console.log(firstName + " " + lastName);
// console.log(`${firstName.toUpperCase()} the awesome teacher ${lastName}`);

// let combinationOfTwoWords = (word1, word2) => {
//   return `${word1} ${word2}`;
// }

// let combinationOfTwoWords = (word1, word2) => `${word1} ${word2}`;

// let square = (number) => {
//   return number * number;
// }

// console.log(square(4));
// console.log(combinationOfTwoWords(firstName, lastName));
// console.log("--------")

// let person = {
//   firstName: "Collin",
//   lastName: "Van der Vorst",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// console.log(person.getFullName());
// let {firstName: fn, lastName: ln } = person;

// console.log(fn + " " + ln);

// const persons = ["Collin", "Lisa", "Baby"];
// const family2 = ["Sharon", "Yves", "Lev"];
// let family = [...persons, ...family2, "Kamiel"];

// console.log(family);

// import Person from "./Person.js";
// import Teacher from "./Teacher.js";

// const collin = new Person("Collin", "Van der Vorst");

// console.log(collin.getFullName());

// const collinTeacher = new Teacher("Collin", "Van der Vorst");

// console.log(collinTeacher.teach());

// import { square } from "./Utils.js";
// console.log(square(4));

let grades = [
  {
    name: "Mo",
    score: 16
  }, {
    name: "Lisa",
    score: 8 
  }, {
    name: "Rex",
    score: 20
  }
];

grades = grades.map((grade) => {
  grade.score =  grade.score / 20 * 100;
  return grade;
});

// let peoplePasing = [];

// for (let i = 0; i < grades.length; i++) {
//   console.log(grades[i]);
//   if (grades[i].score > 50) {
//     peoplePasing.push(grades[i]);
//   }
// }

let peoplePasing = grades.filter((grade) => grade.score > 50)[0];

console.log(peoplePasing);