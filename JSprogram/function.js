function add(a, b) {
    return a + b;
}

document.write("Normal Function <br>");
document.write(add(100, 200))
document.write("<br>")

var sum = function addNumber(a, b) {
    return a + b;
}
document.write(sum(20, 40)); //if u assign fun to var, the var ius func name
document.write("<br>")
var sum2 = function (a, b) {
    return a + b;
}
document.write(sum2(20, 40)) //u can remove func name since u cant use it
document.write("<br>");

function sayHello(fname, callback) {
    document.write("<br> Welcome, your name is " + callback(fname));
}

var maleInfo = function (fname) {
    return "Mr " + fname;
}

var femaleInfo = function (fname) {
    return "Miss " + fname
}

sayHello("Andrew", maleInfo);
sayHello("Rita", femaleinfo);

