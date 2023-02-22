// -------------------------------------------------------------------------
// ES 5 
// -------------------------------------------------------------------------
const users1 = ["collin", "jan", "tom"];
const users2 = ["jef", "john", "lisa"];

const users = [...users1, ...users2];
console.log(users);


const userinformation1 = {
    username: "collinvdv",
    password: 'reverberoibbehriub'
};

const userinformation2 = {
    firstname: "Collin",
    familyname: "Van der Vorst",
    age: 31
}

const user = {
    ...userinformation1,
    ...userinformation2
}

console.log(user);
// -------------------------------------------------------------------------
// ES 6
// Array destructuring
// -------------------------------------------------------------------------
// let users1 = ["collin", "tom"];
// let users2 = ["jef", "john", "lisa"];

// let users = [...users1, ...users2];
// console.log(users);