var myButton = document.getElementById("changecolor");
var square = document.getElementById("box");
var count = 0;

myButton.addEventListener('click',function(){
    
    count += 1

    switch(count){
        case 1:

        myButton.innerText ='colors'
        square.style.background ='red'

        break;

        case 2:
    
        myButton.innerText = 'colors'
        square.style.background = 'orange'

        break;

        case 3:
    
        myButton.innerText = 'colors'
        square.style.background = 'yellow'

        break;

        case 4:
    
        myButton.innerText = 'colors'
        square.style.background = 'green'

        break;

        case 5:
    
        myButton.innerText = 'colors'
        square.style.background = 'blue'
        
        break;

        case 6:
    
        myButton.innerText = 'colors'
        square.style.background = 'purple'

        count = 0
        
        break;

    };

});
