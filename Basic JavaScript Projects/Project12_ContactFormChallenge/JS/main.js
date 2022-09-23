function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if (x =="") {
        alert("First name must be filled out");
        return false;
    }
}