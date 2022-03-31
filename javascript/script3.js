var myButton = document.getElementById("changecolor");
var square = document.getElementById("box");
var count = 0;

myButton.addEventListener('click',function(){
    
    count += 1

    if(count+1){
        myButton.innerText ='Make red'
        square.style.background ='green'
    }

    else if(count+1){
        myButton.innerText = 'Make green'
        square.style.background = 'red'
    }


});
