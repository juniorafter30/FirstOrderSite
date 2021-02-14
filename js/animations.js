gsap.registerPlugin(ScrollTrigger);



// GSAP ANIMATIONS
const sessionButton = document.querySelector('.session') // Session button
const landingMotto= document.querySelector('.landing-text'); // Motto on landing page
const tl = new TimelineMax();
tl.fromTo(landingMotto, 3, {opacity: "0"}, {opacity: "1"}, 1);


gsap.to(".intoduction-text-1", {
    scrollTrigger: {
        trigger:  ".home-text",
    },
    x:0,
    duration: 2

})
gsap.to(".intoduction-text-2", {
    scrollTrigger: {
        trigger:  ".intoduction-text-1",
    },
    x:0,
    duration: 2.5,
    snap:{
    delay: 2
    }

})
gsap.to(".intoduction-text-3", {
    scrollTrigger: {
        trigger:  ".intoduction-text-1",
    },
    x:0,
    duration: 3,
    snap:{
    delay: 2
    }

})
gsap.to(".intoduction-text-4", {
    scrollTrigger: {
        trigger:  ".intoduction-text-1",
    },
    x:0,
    duration: 3.5,
    snap:{
    delay: 2
    }

})
gsap.to(".intoduction-text-5", {
    scrollTrigger: {
        trigger:  ".intoduction-text-1",
    },
    x:0,
    duration: 4,
    snap:{
    delay: 2
    }

})
gsap.to(".intoduction-text-6", {
    scrollTrigger: {
        trigger:  ".intoduction-text-1",
    },
    x:0,
    duration: 4.5,
    snap:{
    delay: 2
    }

})


gsap.to(".ofert-text-top", {
    scrollTrigger: {
        trigger:  ".ofert-text-top",
    },
    x:0,
    opacity: 1,
    duration: 3,
    snap:{
        delay: 1
    }

})


gsap.to(".kontakt-text-top", {
    scrollTrigger: {
        trigger:  ".screen",
    },
    x:0,
    opacity: 1,
    duration: 3,
    snap:{
        delay: 1
    }

})


gsap.to(".app-title", {
    scrollTrigger: {
        trigger:  ".app-title",
    },
    x:0,
    opacity: 1,
    duration: 5,
    delay: 3,
    snap:{
        delay: 5
    }

})

gsap.to(".about-motto-first", {
    scrollTrigger: {
        trigger:  ".about-motto-first",
    },
    x:0,
    opacity: 1,
    duration: 5,
    delay: 3,
    snap:{
        delay: 5
    }

})

gsap.to(".about-motto-second", {
    scrollTrigger: {
        trigger:  ".about-motto-second",
    },
    x:0,
    opacity: 1,
    duration: 7,
    delay: 3,
    snap:{
        delay: 5
    }

})

