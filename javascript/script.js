var myButton = document.getElementById("makegreen");
var myButton2 = document.getElementById("makered");
var square = document.getElementById("greenbox");
var square2 = document.getElementById("redbox");

myButton.addEventListener('click', function() {
    square.style.background ='green';
}) ;

myButton2.addEventListener('click', function() {
    square2.style.background ='red';
}) ;
