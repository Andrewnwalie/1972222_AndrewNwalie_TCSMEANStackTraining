let fs = require("fs");
let http = require("http");
let url = require("url");
let data2 = fs.readFileSync("task.json");
var jsondata = JSON.parse(data2.toString());

var body = `<html>
<div style="border: 2px solid black; width: 700px;">
        <h2 style="text-align: center;">Task Planner</h2>
        <form action="/add" method="get">
            <div>
                <div style="width: 120px;display: inline-block;">Employee Id</div>
                <input type="text" name='id'> <br> <br>
            </div>
            <div>
                <div style="width: 120px;display: inline-block;"> Task id</div>
                <input type="text" name="TaskID"> <br> <br>
            </div>
            <div>
                <div style="width: 120px;display:inline-block">Task</div>
                <input type="text" name="Task" style="height:80px;">  <br> <br>
            </div>
            <div>
                <div style="width: 120px; display: inline-block;">Duedate</div>
                <input type="text" name="date"> <br> <br>

            </div>
            <div><input type="submit" id="submit" value="Add Task"></div>
        </form>
    </div>
    </div>
    <div>
    <br> <br>
    <form action="/delete" method="get">
        <div>
            <div style="width: 80px;display: inline-block;"> Task ID</div>
                <input type="text" name="TaskID" placeholder="Delete Task ID" style="inline-block">
             <input type="submit" id="submit" value="Delete Task">
         </div>  
    </form>
   
</div>
<br><br>
<form action="/display" method="get"> <div><input type="submit" id="submit" value="Display Data"></div> </form>
</html>`

let server = http.createServer((request, response) => {
    console.log(request.url);
    var pathInfo = url.parse(request.url, true).pathname;
    if (request.url == "/") {
        response.setHeader("content-type", "text/html");
        response.write(body);
    }
    if (request.url != "/favicon.ico") {
        var pathInfo = url.parse(request.url, true).pathname;
        console.log("this is path info")
        console.log(pathInfo);
        if (pathInfo == "/add") {

            let newTask = new Object();
            var data = url.parse(request.url, true).query;
            newTask.id = data.id;
            newTask.TaskID = data.TaskID;
            newTask.Task = data.Task;
            newTask.date = data.date;
            jsondata.push(newTask);
            response.write(body);
            console.log(jsondata);

            //convert json to string 
            var empString = JSON.stringify(jsondata);
            fs.writeFile("task.json", empString, (err) => {
                if (!err) {
                    console.log("Record stored successfully...")
                }
            })

        }

        else if (pathInfo == "/delete") {
            response.write(body);
            console.log("entered delete");
            var Deletedata = url.parse(request.url, true).query;
            let del = Deletedata.TaskID;
            var json = JSON.parse(data2);
            // console.log(json);
            // console.log("this is del");
            // console.log(del);
            var Len = Object.keys(json).length;
            for (i = 0; i < Len; i++) {
                console.log(json[i].TaskID);
                if (json[i].TaskID == del) {
                    json.splice(i, 1);
                    break;

                }
            }
            //convert json to string 
            var empString1 = JSON.stringify(json);
            fs.writeFile("task.json", empString1, (err) => {
                if (!err) {
                    console.log("Record stored successfully...")
                }
            })

        }
        else if (pathInfo == "/display") {
            var table = ` <table style="border:2px solid black;">
                            <tr>
                                 <th style="padding-right: 90px;">Employee ID</th>
                                <th style="padding-right: 90px;">Task ID</th>
                                <th style="padding-right: 90px;">Task</th>
                                <th style="padding-right: 90px;">DueDate</th>
                           </tr>`
            response.write(body);
            let json = JSON.parse(data2);
            console.log(json);
            let size = Object.keys(json).length
            console.log(size);
            for (let i = 0; i < size; i++) {
                let tablerows = `<tr>
                                        <td style="padding-right: 90px;">${jsondata[i].id}</td>
                                        <td style="padding-right: 90px;">${jsondata[i].TaskID}</td>
                                        <td style="padding-right: 90px;">${jsondata[i].Task}</td>
                                        <td style="padding-right: 90px;">${jsondata[i].date}</td>
                                </tr>`
                table = table + tablerows
            }

            table = table + `</table>`;
            //response.end(table);
        }
    }
    //else {
    //  response.write("failure");
    //}

    response.end(table);

}); server.listen(9091, console.log("running on port 9091"));



/*fs.writeFile("task.json", Jsonobj, (err) => {
    if (!err) {
        console.log("Data store in a file info2");
    }
});*/


