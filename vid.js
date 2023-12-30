

var input = document.getElementById("input");
var video = document.getElementById("video");
var p= document.getElementById("thala");
var button = document.getElementById("button");
var stop = document.getElementById("stop");

button.onclick = function () {
    if (input.value.length=== 7 || input.value==='7') {
        video.play();
        p.innerText="Thala for a reason";
        
    } else {
        p.innerText="No Thala for you";
        video.pause();
    }
};
stop.onclick=function(){
    video.pause();
}


video.onclick=function(){
    if(video.paused){
        video.play();}
   else {
    video.pause();
   }
}