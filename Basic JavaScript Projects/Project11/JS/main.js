function Hello_Function(){
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "Hey I'm different!";
}
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Tahoma";
ctx.strokeText("Hello World", 10, 50);