export const User = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}

export const Teacher = class extends User {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }

    teach() {
        console.log(`I am teaching`);
    }
}

export default "cedric stelt moeilijke vragen";
