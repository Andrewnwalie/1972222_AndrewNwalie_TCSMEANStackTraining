let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    //console.log("Client connected to application");

     socket.on("username", (msg) => {
        console.log("Hello " + msg);
        return msg;
    })

    socket.on("msg", (msg) => {
        console.log("Message: " + msg);
    })
    console.log("this is blue ")
    console.log(blue.msg);
})

http.listen(9091);