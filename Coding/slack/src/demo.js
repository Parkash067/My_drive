 var slack=require('node-slackr');
 var slackService = new slack('https://hooks.slack.com/services/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',{
 channel: localStorage.getItem("channelName"),
 username: "Blankcanvas",
 });
 var messsage={
 text: "Card created which contains these properties ",
 };
 slackService.notify(messsage,function(err,data) {
 if(err){
 console.log("Message sending failed",err);
 }
 else{
 console.log("Message sent..")
 }
 });

