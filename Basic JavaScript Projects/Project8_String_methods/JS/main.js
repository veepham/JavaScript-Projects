function full_sentence(){       //concat method//
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function slice_Method(){        //slice method//
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var section = Sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}
function myFunction(){      //toUpperCase method//
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = text.toUpperCase();
}

function mySearch(){        //search method//
let str = "Please locate the word 'dog' in this sentence";      
document.getElementById("search").innerHTML = str.search("dog");
}