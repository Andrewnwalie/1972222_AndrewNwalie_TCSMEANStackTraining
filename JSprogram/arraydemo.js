var obj1 = [100, 200, 300, 400, 500]; //creating object using literal style
var obj2 = new Array(100, 200, 300, 400, 500) // using new keyword
document.write("<br>");
document.write(obj1 + "<br>");
document.write(obj2);

document.write("<br> <br>Using for loop");

for (var i = 0; i < obj1.length; i++) {
    document.write("<br>" + obj1[i]);
}

obj1.forEach(dis); // forEach keyword and send a function
function dis(a) {
    document.write("</br>" + a + 10)
}