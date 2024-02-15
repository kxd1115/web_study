export function sayHi(user) {
    alert(`Hello! ${user}`);
};

export function sayBye(user) {
    alert(`Bye! ${user}`);
};

export default class {
    constructor(name) {
        this.name = name;
    }
};

export {sayHi as hi, sayBye as bye};