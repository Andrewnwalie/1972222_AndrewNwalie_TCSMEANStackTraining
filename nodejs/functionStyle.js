//1st function passing parameter
function empInfo(id, name, salary) {
    console.log("id is " + id);
    console.log("name is " + name);
    console.log("salary is " + salary);
}
empInfo(10, "Andrew", 30);
//function with return specified value
function sayHello(name) {
    return "Welcome " + name;
}
console.log(sayHello("Andrew Nwalie"));
//function with no return
function add(a, b) {
    var sum = a + b;
    console.log(sum);
}
add(10, 6);
// optional parameter, doesn't have to be there but it can 
//syntax variablename?:variabletype
function person(id, name, age) {
    console.log("id is " + id);
    console.log("name is " + name);
    console.log("age is " + age);
}
person(30, "billy");
person(40, "john", 34);
