import { Employee } from "./employee.js";

export class Dev extends Employee {
    constructor(id, salary) {
        super(id, salary);
    }

    #jobType = `I am a Dev`;

    getJobType() {
        return this.#jobType
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
