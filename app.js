var hourNow = prompt('Do you want to know God? Yes/No');
var greeting;

if (hourNow = 'Yes') {
    greeting = 'Welcome to Our Website';
} else if (hourNow = 'No') {
    greeting = 'Welcome. Maybe it is your time to know God!';
} 

alert(greeting + ' Please go ahead and know more.');

// this will update the HTML
document.write('<h2>' + greeting + '</h2>');