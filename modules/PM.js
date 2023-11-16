import { Employee } from "./employee.js";

export class PM extends Employee {
    constructor(id, salary) {
        super(id, salary);
    }

    #jobType = `I am a PM`;

    getJobType() {
        return this.#jobType
    }
}
