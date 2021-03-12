/*
object: any real world entity like c++ */

// creat obj using literal style

var empObj = { id: 100, name: "Andrew", salary: 1000 };
document.write("Employee Object <br>");
document.write("Id is " + empObj.id);

var empString = JSON.stringify(empObj);
document.write("<br>");
document.write("Emp object in string format <br>");
document.write(empString);
document.write("<br> ID is " + empString.id);
document.write("<br> name is " + empString.name);
document.write("<br> salary is " + empString.salary + "<br> <br><br>");

//convert string to json format
var empJson = JSON.parse(empString)
document.write("Emp object in string format <br>");
document.write(empJson);
document.write("<br> ID is " + empJson.id);
document.write("<br> name is " + empJson.name);
document.write("<br> salary is " + empJson.salary);