import '../scss/style.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, Flip);

document.addEventListener('DOMContentLoaded', () => {
    gsap.from('h1', { y: -30, opacity: 0, duration: 1, ease: "expo.inOut" });
    gsap.from('p', { y: -10, opacity: 0, duration: 1, delay: .2, ease: "expo.inOut" });
});

//
// LOAD COMPONENTS
//
import headerHTML from '../html/header.html';
import heroHTML from '../html/hero.html';
import contentHTML from '../html/content.html';

//
// INJECT COMPONENTS
//
document.getElementById('header').innerHTML = headerHTML;
document.getElementById('hero').innerHTML = heroHTML;
document.getElementById('content').innerHTML = contentHTML;

//
// LOAD COMPONENT SCRIPTS
//
import './header.js';
import './hero.js';
import './content.js';
