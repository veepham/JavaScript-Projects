function Vote_Function(){       //ternary//
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young": "You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color){         //Keywords "new" "this"//
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Dog(Color, Breed, Age){        //creating my own object constructor//
    this.Dog_Color = Color;
    this.Dog_Breed = Breed;
    this.Dog_Age = Age;
}
var Mup = new Dog("Tan and White", "Havanese Mix", 10)
function myFunction2(){
    document.getElementById("New_and_This").innerHTML = "My dog is a " + Mup.Dog_Age + " year old " + Mup.Dog_Breed;
}


function count_Function(){      //nested function//
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count(){
        var starting_point = 4;
        function Plus_two() {starting_point += 2;}
        Plus_two();
        return starting_point;
    }
}