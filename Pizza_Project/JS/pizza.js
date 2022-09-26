function getReceipt(){
    var text1 = "<h3>You ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getSauce(runningTotal,text1);
}

function getSauce(runningTotal, text1){
    var sauceTotal = 0;
    var sauceArray = document.getElementsByClassName("sauce");
    for (var x = 0; x < sauceArray.length; x++) {
        if (sauceArray[x].checked) {
            var selectedSauce = sauceArray[x].value;
            text1 = text1+selectedSauce+"<br>";
        }
    }
    if (selectedSauce === "House Marinara") {
        sauceTotal = 0;
    } else if (selectedSauce === "White Sauce") {
        sauceTotal = 0;
    } else if (selectedSauce === "BBQ Sauce") {
        sauceTotal = 0;
    } else if (selectedSauce === "No Sauce") {
        sauceTotal = 0;
    } 
    runningTotal = (runningTotal + sauceTotal);
    console.log(selectedSauce+" =$"+sauceTotal+".00");
    console.log("sauce text1: " +text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal,text1);
}

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item ("+toppingArray[j].value+")");
            text1= text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount=selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
}