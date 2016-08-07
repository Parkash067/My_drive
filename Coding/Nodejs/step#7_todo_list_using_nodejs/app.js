///<!reference path='./typings/node/node.d.ts'>
var http = require('http');
var url = require('url');
var query_string = require('querystring');
var list = [];
var server = http.createServer(function (req, res) {
    console.log("Request hit");
    //console.log(req.url);
    var currentaddress = url.parse(req.url);
    //console.log(currentaddress.query);//return query
    var value_query = query_string.parse(currentaddress.query);
    //console.log(value_query);
    //console.log(typeof value_query);
    if (typeof (value_query) == 'object') {
        list.push(value_query);
    }
    console.log(list[0]);
    res.end();
    /*if(req.url="/index.html")
    {
        fs.readFile('./index.html',function(er,data)
        {
            if(er)
            {
                console.log("Invalid request"+er);
                res.write("404 error");
                res.end();
            }
            
            res.write(data.toString());
            res.end();
        })
    }*/
}).listen(3000);
