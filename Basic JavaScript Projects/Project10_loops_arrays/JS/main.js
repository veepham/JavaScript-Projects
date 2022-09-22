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

function Constant_Function(){       //Constant function, dislaying property and value of constant//
    const Car = {type: "crossover", make: "Honda", color: "green"};
    Car.color = "gray";         //change property's value//
    Car.model = "HR-V";         //adding a property with a value//
    document.getElementById("Constant").innerHTML = "She drives a " + Car.make + " that is " + Car.color;
}

document.getElementById("return").innerHTML = myFunction("Vivian");
function myFunction(name) {
    return "Hello " + name;     //return statement//
}

let car = {
    make: "Honda ",
    model: "HR-V ",
    year: "2016 ",
    color: "green ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

let text ="";
for (let i = 0; i < 10; i++){
    if (i=== 3) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break_loop").innerHTML = text;
