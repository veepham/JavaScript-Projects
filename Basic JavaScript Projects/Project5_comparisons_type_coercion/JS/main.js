function my_Function() {        //NaN//
    document.getElementById("Test").innerHTML = 0/0;
}
function my_Function2() {       //Checking if something is NaN, true//
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}
function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN('123');       //Checking if something is NaN, false//
}

document.write(100<2);