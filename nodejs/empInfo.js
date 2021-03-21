var Employee = /** @class */ (function () {
    function Employee() {
        this.id = 100;
        this.name = "Andrew";
        this.salary = 1000;
    }
    Employee.prototype.empInfo = function () {
        console.log("id is " + this.id);
        console.log("name is " + this.name);
        console.log("salary is " + this.salary);
    };
    return Employee;
}());
var emp1 = new Employee;
emp1.empInfo();
console.log("This is salary " + emp1.salary);
//class with constructor literally use the word constructor
// add parameters to the constructor not the class 
var EmployeeC = /** @class */ (function () {
    function EmployeeC(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        console.log("object created...");
        console.log(id, name, salary);
    }
    EmployeeC.prototype.disInfo = function () {
        console.log("employee function");
    };
    return EmployeeC;
}());
var empc1 = new EmployeeC(20, "Andrew", 2000);
empc1.disInfo();
var empc2 = new EmployeeC(100, "billy");
//access specified variable in construcotr for less code 
// YOU DONT NEED VARIABLES MADE
var EmployeeC2 = /** @class */ (function () {
    function EmployeeC2(id, name, salary) {
        this.id = id;
        console.log("object created...");
        console.log(id, name, salary);
    }
    EmployeeC2.prototype.disInfo = function () {
        console.log("employee function");
    };
    return EmployeeC2;
}());
var empc21 = new EmployeeC2(20, "James", 2000);
empc1.disInfo();
var empc22 = new EmployeeC2(100, "Sally");
