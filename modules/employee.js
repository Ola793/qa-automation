export class Employee {
    constructor (id, salary) {
      this.id = id;
      this.salary = salary;
    }
    
    static compareSalary(employee_1, employee_2) {
      return  employee_1.salary > employee_2.salary  ?  `User with ${employee_1.id} has greater salary` : 
              employee_1.salary < employee_2.salary  ?  `User with ${employee_2.id} has greater salary` :
                                                        `Salaries are equal`
    }
  }