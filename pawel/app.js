const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('a');
const header = document.querySelector('header')
const sessionButton = document.querySelector('.session')

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
    })
})

window.addEventListener('scroll', ()=>{
header.classList.toggle('on-scroll', window.scrollY > 0);
sessionButton.classList.toggle('on-scroll', window.scrollY > 0);

});