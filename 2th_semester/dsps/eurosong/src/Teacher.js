import Person from "./Person.js";

export default class Teacher extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }

    teach() {
        return `Lala I am teaching`;
}
}