//ES6 -- classes, they dont exist in es5 you just use functions.
var Person = /** @class */ (function () {
    function Person() {
        this.fname = "Andrew";
    }
    Person.prototype.disPersonInfo = function () {
        console.log("Person class function");
        console.log("Name is " + this.fname);
    };
    return Person;
}());
var p1 = new Person();
p1.disPersonInfo();
