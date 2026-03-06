class Employee {
  constructor(name) {
    this.name = name;
    console.log("Constructor rendered by " + name);
  }

  info(name, age, salary) {
    this.empName = name;
    this.empAge = age;
    this.empSalary = salary;
    console.log(`Employee class
        Name: ${this.empName}
        Age: ${this.empAge}
        Salary: ${this.empSalary}`);
  }
}

class Manager extends Employee {
  constructor(name) {
    super(name);
  }

  info(name, age, salary) {
    super.info(name, age, salary);
    const ta = 1000;
    const pa = 400;
    const totalSalary = Number(this.empSalary) + ta + pa;
    console.log(`Manager class
        Name: ${this.empName}
        Age: ${this.empAge}
        Total Salary: ${totalSalary}`);
  }
}

const managerData = new Manager("NZ");
const employeeData = new Employee("NZ");

managerData.info("Najaf Khan", 22, 20000);
employeeData.info("Najaf Ali", 26, 22000);
