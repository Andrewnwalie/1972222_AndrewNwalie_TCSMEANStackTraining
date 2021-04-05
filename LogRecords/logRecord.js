function Records() {
    var obj = require('readline-sync');
    var fs = require('fs');

    let count2 = obj.question("How many data: ");
    let count = parseInt(count2);

    var data2 = fs.readFileSync('Users.json');
    data = JSON.parse(data2.toString());
    debugger

    for (var i = 0; i < count; i++) {
        var users = new Object();
        users.fname = obj.question('Enter First Name: ');
        users.lname = obj.question('Enter  Last Name: ');
        users.gender = obj.question('Enter Gender: ');
        users.email = obj.question("Enter Email: ")
        var date = new Date();
        users.date = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
        users.time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        data.push(users);
        debugger
    }
    Jsonobj = JSON.stringify(data);
    fs.writeFileSync('Users.json', Jsonobj);

}

exports.Records = Records();