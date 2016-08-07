/// <reference path="./typings/node/node.d.ts" />
/// <reference path="./typings/express/express.d.ts" />
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var slackUpload = require('node-slack-upload');
var slack = require('node-slackr');
var slackService = new slack('https://hooks.slack.com/services/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', {
    channel: "#links",
    username: "Blankcanvas"
});
//slack token: 'xoxp-31568411235-31568411363-33393214835-ae99a2816e'
var slackUploadService = new slackUpload('xoxp-31568411235-31568411363-35045740402-57a66b3da2');
slackUploadService.uploadFile({
    //file: fs.createReadStream (path.join(__dirname,'.','image.jpg')),
    content: '{"wall":{"stickies":[{"id":"61d6688f-a5cf-4b3d-9075-f835b50d80a1","x":286,"y":91,"text":"","shape":"sticky","color":"rgb(255, 255, 107)","size":"medium"},{"id":"ed68eb3b-947a-4045-b9f9-1eaf5cb38ef7","x":452,"y":98,"text":"","shape":"sticky","color":"rgb(255, 255, 107)","size":"medium"},{"id":"6831916f-3a2e-4512-ab44-4281d75bb315","x":597,"y":113,"text":"","shape":"sticky","color":"rgb(255, 255, 107)","size":"medium"},{"id":"ab65e600-dff6-4b76-8742-57e27bdb9d05","x":493,"y":206,"text":"","shape":"sticky","color":"rgb(255, 255, 107)","size":"medium"},{"id":"1f99d341-46a9-49ae-be9c-961cf4cc273d","x":742,"y":224,"text":"","shape":"sticky","color":"rgb(255, 255, 107)","size":"medium"},{"id":"d6843303-36ed-4560-b817-988f011af783","x":662,"y":225,"text":"","shape":"sticky","color":"rgb(255, 255, 107)","size":"medium"},{"id":"f81b2512-d932-4588-9c77-a0a2253a25a5","x":768,"y":82,"text":"","shape":"sticky","color":"rgb(255, 255, 107)","size":"medium"},{"id":"946da5ad-bdf1-4c45-8147-a33386332182","x":310,"y":218,"text":"","shape":"sticky","color":"rgb(255, 255, 107)","size":"medium"},{"id":"b869255e-c991-48bc-a955-ea6ca1edd994","x":143,"y":117,"text":"","shape":"sticky","color":"rgb(255, 255, 107)","size":"medium"},{"id":"ea72d7cd-f129-4bd7-a604-57c16e7754ea","x":172,"y":314,"text":"","shape":"sticky","color":"rgb(255, 255, 107)","size":"medium"},{"id":"fed87b3e-3885-4774-ae6e-ba4fd76ba918","x":328,"y":326,"text":"","shape":"sticky","color":"rgb(255, 255, 107)","size":"medium"}],"connections":[],"groups":[]},"graph":{"cells":[{"type":"bc.Card","content":"","shape":"sticky","color":"#FFFF6B","size_name":"medium","size":{"width":100,"height":81.25},"groups":[],"position":{"x":286,"y":91},"angle":0,"id":"61d6688f-a5cf-4b3d-9075-f835b50d80a1","z":1,"attrs":{".card-body":{"rx":1.625,"ry":2.4615384615384617,"fill":"#FFFF6B"},".card-content":{"ref":".card-body","ref-height":1,"ref-width":1,"viewBox":"0 0 100 81.25"},".card-media-container":{"ref":".card-body","y":0,"display":"none"},".card-media":{"xlink:href":"","height":60},".card-title":{"ref":".card-body","y":"0.8em","ref-x":0.5,"ref-y":0.5,"ref-width":0.8,"ref-height":1,"y-alignment":"middle","text-anchor":"middle","text":"","font-size":14}}},{"type":"bc.Card","content":"","shape":"sticky","color":"#FFFF6B","size_name":"medium","size":{"width":100,"height":81.25},"groups":[],"position":{"x":452,"y":98},"angle":0,"id":"ed68eb3b-947a-4045-b9f9-1eaf5cb38ef7","z":2,"attrs":{".card-body":{"rx":1.625,"ry":2.4615384615384617,"fill":"#FFFF6B"},".card-content":{"ref":".card-body","ref-height":1,"ref-width":1,"viewBox":"0 0 100 81.25"},".card-media-container":{"ref":".card-body","y":0,"display":"none"},".card-media":{"xlink:href":"","height":60},".card-title":{"ref":".card-body","y":"0.8em","ref-x":0.5,"ref-y":0.5,"ref-width":0.8,"ref-height":1,"y-alignment":"middle","text-anchor":"middle","text":"","font-size":14}}},{"type":"bc.Card","content":"","shape":"sticky","color":"#FFFF6B","size_name":"medium","size":{"width":100,"height":81.25},"groups":[],"position":{"x":597,"y":113},"angle":0,"id":"6831916f-3a2e-4512-ab44-4281d75bb315","z":3,"attrs":{".card-body":{"rx":1.625,"ry":2.4615384615384617,"fill":"#FFFF6B"},".card-content":{"ref":".card-body","ref-height":1,"ref-width":1,"viewBox":"0 0 100 81.25"},".card-media-container":{"ref":".card-body","y":0,"display":"none"},".card-media":{"xlink:href":"","height":60},".card-title":{"ref":".card-body","y":"0.8em","ref-x":0.5,"ref-y":0.5,"ref-width":0.8,"ref-height":1,"y-alignment":"middle","text-anchor":"middle","text":"","font-size":14}}},{"type":"bc.Card","content":"","shape":"sticky","color":"#FFFF6B","size_name":"medium","size":{"width":100,"height":81.25},"groups":[],"position":{"x":493,"y":206},"angle":0,"id":"ab65e600-dff6-4b76-8742-57e27bdb9d05","z":4,"attrs":{".card-body":{"rx":1.625,"ry":2.4615384615384617,"fill":"#FFFF6B"},".card-content":{"ref":".card-body","ref-height":1,"ref-width":1,"viewBox":"0 0 100 81.25"},".card-media-container":{"ref":".card-body","y":0,"display":"none"},".card-media":{"xlink:href":"","height":60},".card-title":{"ref":".card-body","y":"0.8em","ref-x":0.5,"ref-y":0.5,"ref-width":0.8,"ref-height":1,"y-alignment":"middle","text-anchor":"middle","text":"","font-size":14}}},{"type":"bc.Card","content":"","shape":"sticky","color":"#FFFF6B","size_name":"medium","size":{"width":100,"height":81.25},"groups":[],"position":{"x":742,"y":224},"angle":0,"id":"1f99d341-46a9-49ae-be9c-961cf4cc273d","z":5,"attrs":{".card-body":{"rx":1.625,"ry":2.4615384615384617,"fill":"#FFFF6B"},".card-content":{"ref":".card-body","ref-height":1,"ref-width":1,"viewBox":"0 0 100 81.25"},".card-media-container":{"ref":".card-body","y":0,"display":"none"},".card-media":{"xlink:href":"","height":60},".card-title":{"ref":".card-body","y":"0.8em","ref-x":0.5,"ref-y":0.5,"ref-width":0.8,"ref-height":1,"y-alignment":"middle","text-anchor":"middle","text":"","font-size":14}}},{"type":"bc.Card","content":"","shape":"sticky","color":"#FFFF6B","size_name":"medium","size":{"width":100,"height":81.25},"groups":[],"position":{"x":662,"y":225},"angle":0,"id":"d6843303-36ed-4560-b817-988f011af783","z":6,"attrs":{".card-body":{"rx":1.625,"ry":2.4615384615384617,"fill":"#FFFF6B"},".card-content":{"ref":".card-body","ref-height":1,"ref-width":1,"viewBox":"0 0 100 81.25"},".card-media-container":{"ref":".card-body","y":0,"display":"none"},".card-media":{"xlink:href":"","height":60},".card-title":{"ref":".card-body","y":"0.8em","ref-x":0.5,"ref-y":0.5,"ref-width":0.8,"ref-height":1,"y-alignment":"middle","text-anchor":"middle","text":"","font-size":14}}},{"type":"bc.Card","content":"","shape":"sticky","color":"#FFFF6B","size_name":"medium","size":{"width":100,"height":81.25},"groups":[],"position":{"x":768,"y":82},"angle":0,"id":"f81b2512-d932-4588-9c77-a0a2253a25a5","z":7,"attrs":{".card-body":{"rx":1.625,"ry":2.4615384615384617,"fill":"#FFFF6B"},".card-content":{"ref":".card-body","ref-height":1,"ref-width":1,"viewBox":"0 0 100 81.25"},".card-media-container":{"ref":".card-body","y":0,"display":"none"},".card-media":{"xlink:href":"","height":60},".card-title":{"ref":".card-body","y":"0.8em","ref-x":0.5,"ref-y":0.5,"ref-width":0.8,"ref-height":1,"y-alignment":"middle","text-anchor":"middle","text":"","font-size":14}}},{"type":"bc.Card","content":"","shape":"sticky","color":"#FFFF6B","size_name":"medium","size":{"width":100,"height":81.25},"groups":[],"position":{"x":310,"y":218},"angle":0,"id":"946da5ad-bdf1-4c45-8147-a33386332182","z":8,"attrs":{".card-body":{"rx":1.625,"ry":2.4615384615384617,"fill":"#FFFF6B"},".card-content":{"ref":".card-body","ref-height":1,"ref-width":1,"viewBox":"0 0 100 81.25"},".card-media-container":{"ref":".card-body","y":0,"display":"none"},".card-media":{"xlink:href":"","height":60},".card-title":{"ref":".card-body","y":"0.8em","ref-x":0.5,"ref-y":0.5,"ref-width":0.8,"ref-height":1,"y-alignment":"middle","text-anchor":"middle","text":"","font-size":14}}},{"type":"bc.Card","content":"","shape":"sticky","color":"#FFFF6B","size_name":"medium","size":{"width":100,"height":81.25},"groups":[],"position":{"x":143,"y":117},"angle":0,"id":"b869255e-c991-48bc-a955-ea6ca1edd994","z":9,"attrs":{".card-body":{"rx":1.625,"ry":2.4615384615384617,"fill":"#FFFF6B"},".card-content":{"ref":".card-body","ref-height":1,"ref-width":1,"viewBox":"0 0 100 81.25"},".card-media-container":{"ref":".card-body","y":0,"display":"none"},".card-media":{"xlink:href":"","height":60},".card-title":{"ref":".card-body","y":"0.8em","ref-x":0.5,"ref-y":0.5,"ref-width":0.8,"ref-height":1,"y-alignment":"middle","text-anchor":"middle","text":"","font-size":14}}},{"type":"bc.Card","content":"","shape":"sticky","color":"#FFFF6B","size_name":"medium","size":{"width":100,"height":81.25},"groups":[],"position":{"x":172,"y":314},"angle":0,"id":"ea72d7cd-f129-4bd7-a604-57c16e7754ea","z":10,"attrs":{".card-body":{"rx":1.625,"ry":2.4615384615384617,"fill":"#FFFF6B"},".card-content":{"ref":".card-body","ref-height":1,"ref-width":1,"viewBox":"0 0 100 81.25"},".card-media-container":{"ref":".card-body","y":0,"display":"none"},".card-media":{"xlink:href":"","height":60},".card-title":{"ref":".card-body","y":"0.8em","ref-x":0.5,"ref-y":0.5,"ref-width":0.8,"ref-height":1,"y-alignment":"middle","text-anchor":"middle","text":"","font-size":14}}},{"type":"bc.Card","content":"","shape":"sticky","color":"#FFFF6B","size_name":"medium","size":{"width":100,"height":81.25},"groups":[],"position":{"x":328,"y":326},"angle":0,"id":"fed87b3e-3885-4774-ae6e-ba4fd76ba918","z":11,"attrs":{".card-body":{"rx":1.625,"ry":2.4615384615384617,"fill":"#FFFF6B"},".card-content":{"ref":".card-body","ref-height":1,"ref-width":1,"viewBox":"0 0 100 81.25"},".card-media-container":{"ref":".card-body","y":0,"display":"none"},".card-media":{"xlink:href":"","height":60},".card-title":{"ref":".card-body","y":"0.8em","ref-x":0.5,"ref-y":0.5,"ref-width":0.8,"ref-height":1,"y-alignment":"middle","text-anchor":"middle","text":"","font-size":14}}}]}}',
    filetype: 'auto',
    title: 'image.jpg',
    //initialComment: 'my comment',
    channels: '#links'
}, function (err) {
    if (err) {
        console.error("here is error: ", err);
        console.log(path.join(__dirname, '..', './slackIntegration/image.jpg'));
    }
    else {
        console.log('Your file has been uploaded done');
    }
});
app.get('/', function (req, res) {
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
var port = process.env.Port || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log("Server is listening at Port number: " + listeningPort);
});
