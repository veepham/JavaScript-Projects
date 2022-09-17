function my_Dictionary(){
    var Animal ={
        Species: "Dog",
        Color: "Tan",
        Breed: "Havanese Mix",
        Age: 10,
        Sound: "Woof!",
        Sound: "Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}