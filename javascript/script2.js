var myButton = document.getElementById("makegreen");
var myButton2 = document.getElementById("makered");
var square = document.getElementById("box");

myButton.addEventListener('click', function() {
    square.style.background ='green';
}) ;

myButton2.addEventListener('click', function() {
    square.style.background ='red';
}) ;
