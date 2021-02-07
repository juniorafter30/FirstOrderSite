// OUR VARIABLES

const burger = document.querySelector('.burger');  //Navigation burger
const nav = document.querySelector('nav'); // Navigation
const navLinks = nav.querySelectorAll('a'); // Navigation links
const header = document.querySelector('header') // Our whole header
const sessionButton = document.querySelector('.session') // Session button

//NAVIGATION BURGER FUNCTION

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
})

// Function that closes navigation when user clicks on single position

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
    })
})

// Changing color of Header while scrolling

window.addEventListener('scroll', () => {
header.classList.toggle('on-scroll', window.scrollY > 0);
sessionButton.classList.toggle('on-scroll', window.scrollY > 0);

});