class Employee {
    id: number = 100;
    name: string = "Andrew";
    salary: number = 1000;

    empInfo(): void {
        console.log("id is " + this.id);
        console.log("name is " + this.name);
        console.log("salary is " + this.salary);
    }
}

let emp1 = new Employee;
emp1.empInfo();
console.log("This is salary " + emp1.salary);

//class with constructor literally use the word constructor
// add parameters to the constructor not the class 
class EmployeeC {
    id: number;
    name: string;
    salary: number;
    constructor(id: number, name: string, salary?: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        console.log("object created...");
        console.log(id, name, salary);
    }
    disInfo(): void {
        console.log("employee function");
    }
}

let empc1 = new EmployeeC(20, "Andrew", 2000);
empc1.disInfo();
let empc2 = new EmployeeC(100, "billy");

//access specified variable in construcotr for less code 
// YOU DONT NEED VARIABLES MADE just public or private
// if you write public for the first it applies to all
class EmployeeC2 {

    constructor(public id: number, private name: string, public salary?: number) {
        console.log("object created...");
        console.log(id, name, salary);
    }
    disInfo(): void {
        console.log("employee function");
    }
}

let empc21 = new EmployeeC2(20, "James", 2000);
empc1.disInfo();
let empc22 = new EmployeeC2(100, "Sally");
