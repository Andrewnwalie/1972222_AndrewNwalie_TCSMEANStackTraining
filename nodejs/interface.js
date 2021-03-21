/*class empinfo implements Emp{
    id:number=100; // YOU HAVE TO REDECLARE VARIABLE FROM INTERFACE
    disp():void{
console.log("this function implments emp info class")
    }
}*/
var emp2 = { id: 100, name: "andrew", salary: 300 }; // object is bound to interface variables
var Honda = /** @class */ (function () {
    function Honda() {
    }
    Honda.prototype.speed = function () {
        console.log("Speed is 90");
    };
    return Honda;
}());
var honda = new Honda();
honda.speed();
