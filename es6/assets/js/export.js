export let exportedVariable = "This is an exported variable";

export let exportedFunction = () => {
    console.log("Exported function");
};

export class Person {
    constructor(name) {
        this.name = name;
    }

    talk() {
        console.log("Hello I am " + this.name);
    }
}
