let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let mon = require('mongoose');
mon.Promise = global.Promise;

let url = "mongodb://localhost:27017/Chatlog";

const monOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
} //avoid the error

mon.connect(url, monOption); //ready to connect

let db = mon.connection;
db.on("error", (err) => console.log(err));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

db.once("open", () => {
    let msgSchema = mon.Schema({ name: String, chatmsg: String });

    let message = mon.model("", msgSchema, "Chatlog");
    io.on("connection", (socket) => {

        socket.on("username", (msg) => {

            let m1 = new message({ name: msg });

            socket.on("msg", (msg) => {

                m1.chatmsg = msg;


                m1.save((result, err) => {
                    if (!err) {
                        console.log("Record inserted successfully");
                    }
                    else {
                        console.log(err)
                    }

                });

            })

        })


    })

})
http.listen(9091);