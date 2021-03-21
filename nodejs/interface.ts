interface Emp {
    id: number;
    name: string;
    salary: number;
    age?: number;
}

/*class empinfo implements Emp{
    id:number=100; // YOU HAVE TO REDECLARE VARIABLE FROM INTERFACE
    disp():void{
console.log("this function implments emp info class")
    }
}*/
let emp2: Emp = { id: 100, name: "andrew", salary: 300 }; // object is bound to interface variables

interface Bike {
    speed(): void;

}

class Honda implements Bike {
    speed(): void {
        console.log("Speed is 90");
    }
}

let honda = new Honda();
honda.speed();