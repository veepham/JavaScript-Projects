document.write(typeof 3);       //typeof operator//

function coercion() {       //type coercion of a string and number//
    document.getElementById("coercion").innerHTML = "10" + 5
}
function my_Function() {        //NaN//
    document.getElementById("Test").innerHTML = 0/0;
}
function my_Function2() {       //Checking if something is NaN, true//
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}
function my_Function3() {       //Checking if something is NaN, false//
    document.getElementById("Test3").innerHTML = isNaN('123');       
}

function my_Function4(){        //utilizing greater than, less than, AND//
    document.getElementById("Test4").innerHTML = 100>2 && 5<10;
}
function my_Function5(){        //utilizing == and OR//
    document.getElementById("Test5").innerHTML = 2==2 || 10<1;
}
function my_Function6(){        //utilizing  ===//
    document.getElementById("test6").innerHTML = ("2") === 2;
}
function not_Function(){
    document.getElementById("not").innerHTML = !(20 < 10);
}