var sayHello = function (name) {
    return "Welcome " + name;
}

document.write("<br> Expression style <br>");
document.write(sayHello("Andrew1 <br>"));

// arrow function is known as anoymous function

var sayhi = (name2) => "Welcome " + name2
document.write(sayhi("Andrew2"));