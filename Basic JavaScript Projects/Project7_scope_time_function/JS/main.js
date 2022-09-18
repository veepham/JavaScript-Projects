var X = 100;        //utilizing a global variable//
function Add_1(){
    document.write(40 + X + "<br>");
}
function Add_2(){
    document.write(X+50 + "<br>");
}
Add_1();
Add_2();

//utilizing a local variable with an intentional mistake//
function Add_3(){
    var Y = 5;
    document.write(20 + Y + "<br>");
}
function Add_4(){
    console.log(Y + 100 + "<br>");
}
Add_3();
Add_4();

function get_Date(){        //utilizing a date method//
    if (new Date().getHours() < 18){
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function myFunction(){
    if (new Date().getDay() > 5){
        document.getElementById("Hello").innerHTML = "Happy weekend!";
    }
}

function Age_Function(){        //utilizing else statement//
    Age = document.getElementById("Age").value;
    if (Age >= 21){
        Alcohol = "You are old enough to buy alcohol.";
    } 
    else {
        Alcohol = "You are not old enough to buy alcohol.";
    }
    document.getElementById("How_old").innerHTML = Alcohol;
}

function Time_Function(){       //utilizing else if statement//
    var Time = new Date().getDay();
    var Reply;
    if (Time < 2 == Time > 0) {
        Reply = "The week is just starting!";
    }
    else if (Time >= 3 == Time < 5){
        Reply = "We are in mid-week.";
    }
    else {
        Reply = "Happy weekend!";
    }
    document.getElementById("What_Day").innerHTML = Reply;
}