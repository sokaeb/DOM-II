
                            // MOUSEOVER event listener applied to H1  1
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
                            // MOUSEOVER event listener applied to all <a> 
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

                            // WHEEL event listener applied to header image 2
const busImg = document.querySelector('.intro img')
let scale = 1;
busImg.addEventListener('wheel', grow);

function grow(event){
    scale += event.deltaY * 0.1; // as wheel scrolls up or down, img grows incrementally 
    scale = Math.min(Math.max(.5, scale), 1); // Math.min doesn't allow the image to grow bigger than default size, 
    busImg.style.transform = `scale(${scale})`;
}

                            // SELECT event listener applied to all H2 3
const pageSubHeadings = document.querySelectorAll('h2')

const pageSubHead1 = pageSubHeadings[0]
const pageSubHead2 = pageSubHeadings[1]
const pageSubHead3 = pageSubHeadings[2]
const pageSubHead4 = pageSubHeadings[3]

pageSubHead1.addEventListener('select', selectHeading)

function selectHeading(event){

}

                                // LOAD event listener 4
window.addEventListener('load', (event) => {
    console.log('The page has been loaded.');
    // alert('The page is loaded')
})

                            // KEYDOWN event listener 5
document.addEventListener('keydown', keyPressed)
function keyPressed(event){
    pageSubHeadings.forEach(item => {
        item.style.color = 'purple'
    });
}

                            // DBL CLICK event listeners on <p> 6
const paras = document.querySelectorAll('.text-content p')
const para1 = paras[0];
const para2 = paras[1];
const para3 = paras[2];
const para4 = paras[3];

para1.addEventListener('dblclick', function(event){
    para1.style.color = 'blue'

    setTimeout(function(){
        event.target.style.color = "";
    }, 2000)
}, false)

para2.addEventListener('dblclick', function(event){
    para2.style.color = 'violet'

    setTimeout(function(){
        event.target.style.color = "";
    }, 3000)
}, false)

para3.addEventListener('dblclick', function(event){
    para3.style.color = 'dodgerblue'

    setTimeout(function(){
        event.target.style.color = "";
    }, 4000)
}, false)

para4.addEventListener('dblclick', function(event){
    para4.style.color = 'rosybrown'

    setTimeout(function(){
        event.target.style.color = "";
    }, 5000)
}, false)


                            // SCROLL event listener 7

let scroll = document.querySelector('header')
    document.addEventListener('scroll', event =>{
    scroll.style.backgroundColor = 'pink'

    setTimeout(function(){
        event.target.style.color = " ";
    }, 2000)
}, false)


// MOUSEDOWN 8 
const bttns = document.querySelectorAll('.btn');

document.addEventListener('mousedown', buttonClick)
function buttonClick(event){
    bttns.forEach(item => {
        item.style.background = 'black'
    });
}



// 9

// 10
