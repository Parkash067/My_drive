/// <reference path="./typings/node/node.d.ts" />
/// <reference path="./typings/express/express.d.ts" />
/// <reference path="./typings/mongodb/mongodb.d.ts" />
/// <reference path="./typings/socket.io/socket.io.d.ts" />
var mongo = require('mongodb').MongoClient;
var client = require('socket.io').listen(8080).sockets;
mongo.connect('mongodb://127.0.0.1/chat', function (err, db) {
    if (err) {
        console.log(err);
    }
    client.on('connection', function (socket) {
        var col = db.collection('message');
        var sendstatus = function (s) {
            socket.emit('status', s);
        };
        col.find().limit(100).sort({ _id: 1 }).toArray(function (err, res) {
            if (err)
                throw err;
            socket.emit('output', res);
        });
        socket.on('input', function (data) {
            var name = data.name, message = data.message, white_space_pattern = /^\s*$/;
            if (white_space_pattern.test(name) || white_space_pattern.test(message)) {
                sendstatus("Name and message required");
            }
            else {
                col.insert({ name: name, message: message }, function () {
                    client.emit('output', [data]);
                    sendstatus({
                        message: "Message Sent",
                        clear: true
                    });
                    console.log("Inserted");
                    console.log(data.message);
                });
            }
        });
        //console.log("someone has connected");
    });
});
console.log("server started");
