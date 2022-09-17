window.alert(Math.random() * 100);      //Utiiliziing math.random()

function addition_Function (){      //addition//
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + addition;
}
function subtraction_Function () {      //subtraction//
    var subtraction = 5 - 2;
    document.getElementById("math2").innerHTML = "5 - 2 = " + subtraction
}
function multiplication () {        //multiplication//
    var simple_Math = 6 * 8;
    document.getElementById("Multiply").innerHTML = "6 x 8 = " + simple_Math;
}
function division (){       //division//
    var divide = 48 / 6;
    document.getElementById("divide").innerHTML = "48 / 6 = " + divide;
}
function more_Math(){   //multiple operations//
    var math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("maths").innerHTML = "1 plus 2, multiplies by 10, divided in hald and then subtracted by 5 equals " + math;
}
function modulus_Operator() {       //modulus operator aka remainder operator//
    var modulus_Math = 25 % 6;
    document.getElementById("mod_math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus_Math;
}
function negation_Operator(){       //negation is a unary operator//
    var x = 10;
    document.getElementById("number").innerHTML = -x;
}
function increment(){       //increment is to increase//
var A = 5;
A++;
document.getElementById("A").innerHTML = A;
}

function decrement(){       //decrement is to decrease//
var B = 5.25;
B--;
document.getElementById("B").innerHTML = B;
}

function math_Object(){     //math object method can b used without creating object first//
    document.getElementById("object").innerHTML = "Rounding 4.6 to the nearest integer equals: " + Math.round(4.6);
}
