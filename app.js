function getConfirmation() {
   var retVal = confirm('Welcome to Our Website. Do You Want To Continue?');
     if( retVal == true) {
        document.write ('Thank You. Hope You Will Learn More About Knowing God!');
        return true;
     }
     else {
         document.write ('Sorry To See You Go!');
         return false;
     }

}


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


