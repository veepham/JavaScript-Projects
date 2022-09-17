function my_Dictionary(){
    var Animal ={
        Species: "Dog",
        Color: "Tan",
        Breed: "Havanese Mix",
        Age: 10,
        Sound: "Woof!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}