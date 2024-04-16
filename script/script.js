gsap.registerPlugin(ScrollTrigger);

let sprite = document.querySelector(".sprite");
const body = document.querySelector("body");
let timer;

gsap.to('.level', { 
  rotate: '0',
  scrollTrigger: {
    scrub: 0.25,
    start: 'top 400vh',
    end: 'bottom 800vh',
    onUpdate: (e) => {
      
timer = setTimeout(function() {
  body.classList.remove("is-scrolling");
}, 250);
  
window.addEventListener("scroll", function() {body.classList.add("is-scrolling");}); 

    }
  }
});