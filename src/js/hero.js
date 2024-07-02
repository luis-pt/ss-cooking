// console.log('Hero component loaded');
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, Flip);

document.addEventListener('DOMContentLoaded', () => {
    const square = document.querySelector(".square");
    const content = document.querySelector(".content");
    const hideOnLoad = document.querySelector(".hide-on-load");
    function flip() {
        const state = Flip.getState(square);
        if (typeof(square) != 'undefined' && square != null) {
            square.classList.toggle("full-screen");
        }
        if (typeof(content) != 'undefined' && content != null) {
            content.classList.toggle("hide");
        }
        if (typeof(content) != 'undefined' && content != null) {
            hideOnLoad.classList.toggle("hide-on-load");
        }
        Flip.from(state);
    }
    var animationStart = gsap.timeline({
        scrollTrigger: {
            trigger: square,
            scrub: 1,
            markers: false, 
            start: "top top",
            end: `+=${innerHeight * .2}`,
            onEnter: flip,
            onLeaveBack: flip,
        }
    })
    
});