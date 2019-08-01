var hourNow = prompt('Want To Know More About God?');
var greeting;

if (hourNow > 18) {
    greeting = 'Good Evening. Hope You Will Learn More About God.';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon. Perfect Time For Learning More About God';
} else if (hourNow > 0) {
    greeting = 'Welcome to Our Website. Commited to Preach The Love Of God';
} else {
    greeting = 'Welcome to Our Website!'
}

alert(greeting + 'Welcome to Our Website');

// this will update the HTML
document.write('<h2>' + greeting + '</h2>');




var el_up = document.getElementById("GFG_UP"); 
var el_down = document.getElementById("GFG_DOWN"); 
var str = "Click on button to change the background color"; 

el_up.innerHTML = str; 

function changeColor(color) { 
    document.body.style.background = color; 
} 
  
function gfg_Run() { 
    changeColor('pink'); 
    el_down.innerHTML = "Background Color changed"; 
}        


