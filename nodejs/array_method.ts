let num1: Array<number> = [100, 200, 300, 400];
let num3: Array<number> = new Array();
console.log('Size ' + num1.length);
console.log('Size ' + num3.length);
num1.push(500);
num1.push(600);
num1.push(700);
num3.push(700);
num3.push(700);
num3.push(700);
console.log('Size ' + num1.length);
console.log('Size ' + num3.length);
num1.pop() // remove last element
let temp = num1.shift(); //remove first element 
num3.shift();
console.log(num1);
console.log(temp);