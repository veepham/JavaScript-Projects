function Hello_Function(){
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "Hey I'm different!";
}
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Tahoma";
ctx.strokeText("Hello World", 10, 50);
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(10,100,200,100);