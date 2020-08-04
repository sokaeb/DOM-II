const pageHeading = document.querySelector('h1');
pageHeading.addEventListener('mouseover', function(event){
    event.target.style.color = 'aqua';

    setTimeout(function(){
        event.target.style.color = "";
    }, 400)
}, false)

// selecting all <a> in the nav to be able to manipulate each <a> individually 
let navLinks = document.querySelectorAll('nav a')
// creating variables for each <a> to apply individual event listeners
navLink1 = navLinks[0];
navLink2 = navLinks[1];
navLink3 = navLinks[2];
navLink4 = navLinks[3];

navLink1.addEventListener('mouseover', function(event){
    event.target.style.color = 'red';

    setTimeout(function(){
        event.target.style.color = "";
    }, 400)
}, false)

navLink2.addEventListener('mouseover', function(event){
    event.target.style.color = 'orange';

    setTimeout(function(){
        event.target.style.color = "";
    }, 400)
}, false)

navLink3.addEventListener('mouseover', function(event){
    event.target.style.color = 'yellow';

    setTimeout(function(){
        event.target.style.color = "";
    }, 400)
}, false)

navLink4.addEventListener('mouseover', function(event){
    event.target.style.color = 'green';

    setTimeout(function(){
        event.target.style.color = "";
    }, 400)
}, false)