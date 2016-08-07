navigator.webkitGetUserMedia({video:true,audio:true},function(stream) {
var Peer = require('simple-peer');
var peer = new Peer({
    initiator: location.hash === '#init',
    trickle: false,
    stream:stream,
});
peer.on('signal', function (data) {
    document.getElementById('yourid').value = JSON.stringify(data);
    console.log(data);
});
document.getElementById('connect').addEventListener('click', function () {
    var otherid = JSON.parse(document.getElementById('otherid').value);
    peer.signal(otherid);
    console.log("others id")
});
document.getElementById('send').addEventListener('click', function () {
    var yourmessage = document.getElementById('yourmessage').value;
    console.log("yourmessage",yourmessage);
    peer.send(yourmessage);
});
peer.on('data', function (data) {
    document.getElementById('messages').textContent += data + '\n';
});
peer.on('stream',function(stream){
    var video=document.createElement('video');
    document.body.appendChild(video);
    video.src=window.URL.createObjectURL(stream);
    video.play();
})
},function(err){
    console.error(err);
});