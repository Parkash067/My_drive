///<!reference path='./typings/node/node.d.ts'>
import http=require('http');
import fs=require('fs');
import url=require('url');
import query_string=require('querystring');

var list=[];
var server=http.createServer(function(req,res){
	console.log("Request hit");
	//console.log(req.url);
	
	var currentaddress=url.parse(req.url);
	
	console.log(currentaddress.query);//return query
	
var value_query=query_string.parse(currentaddress.query);
console.log(value_query);
//console.log(typeof value_query);
	
	if(value_query.action=='add')
	{
		list.push(value_query.task);
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