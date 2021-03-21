//1st function passing parameter
function empInfo(id: number, name: string, salary: number) {
    console.log("id is " + id);
    console.log("name is " + name);
    console.log("salary is " + salary);
}

empInfo(10, "Andrew", 30);

//function with return specified value
function sayHello(name: string): string {
    return "Welcome " + name;
}
console.log(sayHello("Andrew Nwalie"));
//function with no return
function add(a: number, b: number): void {
    let sum = a + b;
    console.log(sum);
}
add(10, 6);

// optional parameter, doesn't have to be there but it can 
//syntax variablename?:variabletype
function person(id: number, name: string, age?: number) {
    console.log("id is " + id);
    console.log("name is " + name);
    console.log("age is " + age);
}

person(30, "billy");
person(40, "john", 34);