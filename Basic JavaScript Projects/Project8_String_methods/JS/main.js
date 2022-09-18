function full_sentence(){
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var section = Sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}