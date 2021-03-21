
console.log("Welcome to Typescript program");
let a: number = 7;
console.log(a);
let fname: string = "blue";
let msg: any;
console.log(fname);
msg = 100;
console.log(msg);
msg = "purple";
console.log(msg);
// for arrays
var num: number[] = [100, 200, 300, 400];
for (let property in num) {
    console.log(`${num[property]}`);
    console.log("this is prop:", property);
}

let num2: Array<number> = [500, 600, 700, 800, 900];

console.log("using for in loop");

for (let i in num) {
    console.log("index " + i + " value is " + num2[i]);
}

for (let n of num) { console.log("Value " + n) }

