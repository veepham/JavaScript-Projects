function Call_Loop(){       //while loop//
    var Digit ="";
    var X = 1;
    while (X<11){
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function String_Length(){       //length property//
    let text = "Hello";
    let length = text.length;
    document.getElementById("length").innerHTML = length;
}

//for loop//
var Cities = ["Portland", "Los Angeles", "Philadelphia", "New York City", "Las Vegas", "Cleveland", "Austin"];
var Content ="";
var Y;
function for_Loop(){
    for (Y = 0; Y < Cities.length; Y++){
        Content += Cities[Y] + "<br>";
    }
    document.getElementById("List_Cities").innerHTML = Content;
}
function array_Function(){      //using document.getElementById to dispay a value of array//
    document.getElementById("Array").innerHTML = "The next city I am travelling to will be " + Cities[1];
}