/// <reference path="./typings/node/node.d.ts" />
/// <reference path="./typings/express/express.d.ts" />


import express=require('express');
var app=express();
var fs=require('fs');
var path=require('path');
var slackUpload=require('node-slack-upload');
var slack=require('node-slackr');
var slackService = new slack('https://hooks.slack.com/services/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',{
  channel: "#links",
  username: "Blankcanvas",
 //icon_url: "http://localhost:9000/editor/images/profiles/1.jpg",
  //icon_emoji: ":ghost:"
});


//slack token: 'xoxp-31568411235-31568411363-33393214835-ae99a2816e'

var slackUploadService =new slackUpload('xoxp-31568411235-31568411363-35045740402-57a66b3da2');
slackUploadService.uploadFile({
	file: fs.createReadStream (path.join(__dirname,'.','image.jpg')),
	filetype: 'auto',
	title: 'image.jpg',
	//initialComment: 'my comment',
	channels: '#links'
}, function(err) {
	if (err) {
		console.error("here is error: ",err);
        console.log(path.join(__dirname,'..','./slackIntegration/image.jpg'));
	}
	else {
		console.log('Your file has been uploaded done');
	}
});
app.get('/',function(req:any,res){
   // console.log("request:",req.query);
 /*   var inc_message=req.query;
    console.log(inc_message);
   // console.log("response:",res);
    var messsage={
    text: "Card created which contains these properties \n"+JSON.parse(req.query),
    channel: "#links",
   //username: "parkash",
   // icon_url: "https://slack.com/img/icons/app-57.png"
}
    slackService.notify(messsage,function(err,data) {
    if(err){
        console.log("Message sending failed",err);
    }
    else{
        console.log("Message sent..")
    }
})*/
    res.send("<h1>Slack Integration</h1>");
});

var port:number=process.env.Port ||3000;
var server=app.listen(port,function() {
    var listeningPort=server.address().port;
    console.log("Server is listening at Port number: "+listeningPort);
});