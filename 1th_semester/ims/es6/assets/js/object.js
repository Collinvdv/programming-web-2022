// -------------------------------------------------------------------------
// ES 5 
// -------------------------------------------------------------------------
let person = {
  name: "Collin",
  sayHi() {
    console.log("How you doing, I am " + this.name);
  },
    setName: (name) => {
        console.log(this.name, name);
        this.name = name;
        
  }
};

// person.name = "Collina";
// person["name"] = "Collintje";
person.setName("Collina");
console.log(person);

// // 2 ways to call something from an object
// person.name = "Collin Van der vorst";
// person['name'] = "Collin Van der Vorst";
// person.sayHi();

// -------------------------------------------------------------------------
// ES 6 
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