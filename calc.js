function price() {
    var a = document.getElementById("adultValue").value;
    var c = document.getElementById("childValue").value;
    var sum;
    sum = a*4 + c*2.5;
    document.getElementById("printout").innerHTML = "£"+sum.toFixed(2);
    }