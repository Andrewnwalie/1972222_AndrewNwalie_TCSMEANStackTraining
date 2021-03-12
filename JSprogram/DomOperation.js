
var empobj = [];
function storeSession() {
    sessionStorage.setItem("empInfo", empobj);
}

function getsession() {
    sessionStorage.getItem("empInfo");
    console.log("empInfo");
}
function onFormSubmit() {
    alert("Event generated");
    var data = readFormData();
    insertNewRecord(data);
    empobj.push(data); //store in emp obj
    ResetData();
}

function readFormData() {
    var obj = {} //empty object
    obj.name = document.getElementById("name").value;
    obj.age = document.getElementById("Age").value;
    console.log(obj);
    return obj;
}

function insertNewRecord(data) {

    var table = document.getElementById("employees")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length); //row created
    var cell1 = newRow.insertCell(0);  // cell created
    cell1.innerHTML = data.name; // value placed
    cell2 = newRow.insertCell(1); // next cell
    cell2.innerHTML = data.age; // next value

}

function ResetData() {

    document.getElementById("name").value = "";
    document.getElementById("Age").value = "";
}