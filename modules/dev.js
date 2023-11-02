import { Employee } from "./employee.js";

export class Dev extends Employee {
    constructor(id, salary) {
        super(id, salary)
    }

    // get getId() {
    //     return this.id
    // }

    // get getSalary() {
    //     return this.salary
    // }

    getJobType() {
        return `I am a Dev`
    }

    static returnArrayOfDevs(...args) {
        let arrayOfDevs = [];

        args.forEach(obj => {
            if (obj instanceof Dev) {
                arrayOfDevs.push(obj);
            }
        });
        return arrayOfDevs;
    }
}