var hourNow = prompt('Want To Know More About God?');
var greeting;

if (hourNow == 'Yes') {
    greeting = 'Hope You Will Learn More About God.';
} else if (hourNow == 'No') {
    greeting = 'Sorry To See You Gone Without Knowing More About God!';
} else {
    greeting = 'Hello.'
}

alert(greeting + 'Welcome to Our Website!');

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


