let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let fs = require("fs");
let mon = require("mongoose");
let url = "mongodb://localhost:27017/meanstack";
var arr = [];
mon.Promise = global.Promise;
const monOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
} //avoid the error

mon.connect(url, monOption);
let db = mon.connection;
db.on("error", (err) => console.log(err));

db.on("open", () => {
    var courseSchema = mon.Schema({
        _id: Number,
        courseName: String,
        description: String,
        Amount: Number
    });
    var Courses = mon.model("", courseSchema, "Courses");

    //inital index page
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/index.html");

    });

    //delete page
    app.get("/delete", (req, res) => {
        res.sendFile(__dirname + "/delete.html");

        io.on("connection", (socket) => {
            socket.on("cId", (msg) => {
                console.log("deleted data: " + msg)
                Courses.deleteOne({ _id: msg }, (err, result) => {

                    if (result.deletedCount > 0) {
                        console.log("Course Deleted");
                        socket.emit("delete", "Course Deleted");
                    }
                    else {
                        console.log("this is delete count: " + result.deletedCount)
                        console.log("Course not Found");
                        socket.emit("delete", "Course not Found");
                    }

                });

            })



        })

    });
    //update code
    app.get("/update", (req, res) => {
        res.sendFile(__dirname + "/update.html");
        io.on("connection", (socket) => {
            socket.on("cIdupdate", (msg) => {
                socket.on("price", (msg1) => {
                    Courses.updateOne({ _id: msg }, { $set: { Amount: msg1 } }, (err, result) => {

                        if (result.nModified > 0) {
                            console.log("Course Updated");
                            socket.emit("update", "Course Modified");

                        }
                        else {
                            console.log("Course not Found for update");
                            socket.emit("update", "Course not updated");
                        }

                    });
                })


            })

        })

    });

    //fetch code
    app.get("/fetch", (req, res) => {
        res.sendFile(__dirname + "/fetch.html");
        Courses.find({}, (err, result) => {
            if (!err) {
                arr = [];
                result.forEach(doc => arr.push(doc));
            }
            io.on("connection", (socket) => {
                socket.emit("array", arr);
            })
        });


    });


    // add course index
    app.get("/addCourse", (req, res) => {
        res.sendFile(__dirname + "/addCourse.html");

        io.on("connection", (socket) => {
            //
            let course1 = new Courses();

            socket.on("uId", (msg) => {

                course1._id = msg;

                socket.on("cName", (msg) => {
                    course1.courseName = msg;

                    socket.on("desp", (msg) => {
                        course1.description = msg;

                        socket.on("cAmount", (msg) => {
                            course1.Amount = msg;
                            Courses.count({ _id: course1._id }, (err, count) => {

                                if (count > 0) {

                                    socket.emit("added", "id already exist")
                                }
                                if (count == 0) {
                                    socket.emit("added", "Record inserted successfully")
                                    course1.save((result, err) => {
                                        if (!err) { }
                                        else {
                                            console.log(err)
                                        }
                                    });
                                }
                            })

                        });
                    });
                });
            });

        })
    })


})

http.listen(9092, () => console.log("server running on port 9092"));