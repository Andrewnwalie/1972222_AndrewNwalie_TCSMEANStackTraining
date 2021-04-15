let fs = require("fs");
let obj = require("mongoose");
obj.Promise = global.Promise;
let url = "mongodb://localhost:27017/meanstack";
const monOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

obj.connect(url, monOption); //ready to connect


let db = obj.connection;

db.on("error", (err) => console.log(err));

db.once("open", () => {

    let callSchema = obj.Schema({
        _id: Number,
        source: String,
        destination: String,
        sourceLocation: String,
        destinationLocation: String,
        callDuration: String,
        roaming: String,
        callCharge: String
    })

    let callData = obj.model("", callSchema, "CallRecords");


    fs.readFile("./call_data.json", "utf-8", (err, jsonString) => {
        // console.log(jsonString);
        if (!err) {
            var jsonData = JSON.parse(jsonString);
            let size = Object.keys(jsonData).length;
            //console.log(jsonData[0].source);

            for (i = 0; i < size; i++) {

                let data = new callData(
                    {
                        _id: jsonData[i]._id,
                        source: jsonData[i].source,
                        destination: jsonData[i].destination,
                        sourceLocation: jsonData[i].sourceLocation,
                        destinationLocation: jsonData[i].destinationLocation,
                        callDuration: jsonData[i].callDuration,
                        roaming: jsonData[i].roaming,
                        callCharge: jsonData[i].callCharge
                    })

                if (i == size - 1) {
                    data.save((result, err) => {
                        obj.disconnect();
                    });
                }
                else {
                   
                    data.save();
                }
            }


        }

    });

})


