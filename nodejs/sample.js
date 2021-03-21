console.log("Welcome to Typescript program");
var a = 7;
console.log(a);
var fname = "blue";
var msg;
console.log(fname);
msg = 100;
console.log(msg);
msg = "purple";
console.log(msg);
// for arrays
var num = [100, 200, 300, 400];
for (var property in num) {
    console.log("" + num[property]);
    console.log("this is prop:", property);
}
var num2 = [500, 600, 700, 800, 900];
console.log("using for in loop");
for (var i in num) {
    console.log("index " + i + " value is " + num2[i]);
}
for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
    var n = num_1[_i];
    console.log("Value " + n);
}
