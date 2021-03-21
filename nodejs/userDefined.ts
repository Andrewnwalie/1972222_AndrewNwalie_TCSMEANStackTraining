//ES6 -- classes, they dont exist in es5 you just use functions.
class Person {
    fname: string = "Andrew";
    disPersonInfo(): void {
        console.log("Person class function");
        console.log("Name is " + this.fname);
    }
}

let p1 = new Person();
p1.disPersonInfo();
