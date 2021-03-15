//IIFE immediate Invoke function experssion
function dis1() {
    document.write("Normal function <br>");
}

dis1();

(function () {
    document.write("This is a type of IIEF function <br>")
})();

//using arrow function
(()=>document.write("This is a type of IIEF function <br>"))();