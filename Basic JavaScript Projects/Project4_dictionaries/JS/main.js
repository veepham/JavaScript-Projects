function my_Dictionary(){           //creating a dictionary//
    var Animal ={
        Species: "Dog",
        Color: "Tan",
        Breed: "Havanese Mix",
        Age: 10,
        Sound: "Woof!",
        Sound: "Bark!"            //adding an identical key - it showed this secondary value//
    };
    delete Animal.Sound;        //deleting a KVP - result will show undefined//
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}