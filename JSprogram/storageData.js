var i = 0;
function addData() {
    sessionStorage.setItem("obj1", i);
    i++;
    displayData();
}

function displayData() {
    var obj = sessionStorage.getItem("obj1");
    document.getElementById("info").innerHTML = obj
}