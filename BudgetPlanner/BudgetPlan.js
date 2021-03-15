var pair = [0];

function NewBudget() {
    var budgetObj = addInfo();
    pair[0] += 1;
    sessionStorage.setItem("BudInfo" + pair[0], JSON.stringify(budgetObj));
    //var newtable = JSON.parse(sessionStorage.getItem("BudInfo"));
    // document.getElementById("demo").innerHTML = newtable[0];
}

function addInfo() {
    var obj = {};
    obj.client = document.getElementById("clientN").value;
    obj.proj = document.getElementById("projN").value;
    obj.bud = document.getElementById("budgetN").value;
    console.log(obj);
    ResetData();
    return obj;

}


function ResetData() {

    document.getElementById("clientN").value = "";
    document.getElementById("projN").value = "";
    document.getElementById("budgetN").value = "";

}

function InsertRows() {
    var sum = 0;
    var len = sessionStorage.length
    var obj = sessionStorage.getItem("BudInfo");
    var data = JSON.parse(obj);

    for (i = 1; i < len + 1; i++) {
        var obj = sessionStorage.getItem("BudInfo" + i);
        var data = JSON.parse(obj);

        var table = document.getElementById("t1")
        var body = table.getElementsByTagName("tbody")[0];
        var newRow = body.insertRow(body.length);

        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.client;
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.proj;

        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.bud;
        sum += parseInt(data.bud);
    }

    var table = document.getElementById("t1")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);

    var cell1 = newRow.insertCell(0);
    cell1.colSpan = "2";
    cell1.innerHTML = "Total Budget:"
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = sum;

}