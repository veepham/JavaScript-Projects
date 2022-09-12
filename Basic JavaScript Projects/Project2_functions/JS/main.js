function My_Function() {        //Naming a function
    var str = "This is my function for this assignment!";       //Assigning my variable and defining it
    document.getElementById("Button_text").innerHTML = str;     //Changing text inside button to match var str
}

function myFunction() {     //Naming function
    var sentence = "I am learning";     //defining a string variable
    sentence += " a lot from this book!";       //concatenating a string
    document.getElementById("Concatenate").innerHTML = sentence;        //modifying HTML to show the concatenated strings
}