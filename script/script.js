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

/*--------------------------------------------------------- 
# Chapitre 1 
---------------------------------------------------------*/

const chap1 = document.querySelector(".debutchap1");

chap1.addEventListener("scroll", function () {
 gsap
  .timeline()
  .to('.debutchap1', { 
    width: '100vw',
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      start: 'top -20vh',
      end: 'bottom -80vh',
      trigger: '.debutchap1',
    }
  })
  .to(".nuage_1",{x:"-20vw",duration:5});
});


/*--------------------------------------------------------- 
# Chapitre 2 
---------------------------------------------------------*/

const chap2 = document.querySelector(".debutchap2");

chap2.addEventListener("scroll", function () {
 gsap
  .timeline()
  .to('.debutchap2', { 
    width: '100vw',
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      start: 'top -20vh',
      end: 'bottom -80vh',
      trigger: '.debutchap2',
    }
  })
  .to(".oiseau_2",{x:"-20vw",duration:2});
});

/*--------------------------------------------------------- 
# Chapitre 3 
---------------------------------------------------------*/

const chap3 = document.querySelector(".debutchap3");

chap3.addEventListener("scroll", function () {
 gsap
  .timeline()
  .to('.oiseau_3', { 
    width: '100vw',
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      start: 'top -20vh',
      end: 'bottom -80vh',
      trigger: '.oiseau_3',
    }
  })
  .to(".oiseau_3",{rotate:"720",duration:5});
});


/*--------------------------------------------------------- 
# Chapitre 4 
---------------------------------------------------------*/
const chap4 = document.querySelector(".debutchap4");

chap4.addEventListener("scroll", function () {
 gsap.timeline()
 .to('.debutchap4', { 
   width: '100vw',
   scrollTrigger: {
     pin: true,
     scrub: true,
     markers: true,
     start: 'top -20vh',
     end: 'bottom -80vh',
     trigger: '.debutchap4',
   }
 }).to(".debutchap4",{scale:"140%",duration:5});
});
/*--------------------------------------------------------- 
# Chapitre 5 
---------------------------------------------------------*/

const chap5 = document.querySelector(".debutchap5");

chap5.addEventListener("scroll", function () {
 gsap
  .timeline()
  .to('.debutchap5', { 
    width: '100vw',
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      start: 'top -20vh',
      end: 'bottom -80vh',
      trigger: '.debutchap5',
    }
  })
  .to(".cerf_5",{x:"30vw",duration:2})
  .to(".lapin_5",{x:"-30vw",duration:2});
});
/*--------------------------------------------------------- 
# Chapitre 6
---------------------------------------------------------*/

const chap6 = document.querySelector(".debutchap6");

chap6.addEventListener("scroll", function () {
 gsap.to('.debutchap6', { 
    width: '100vw',
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      start: 'top -20vh',
      end: 'bottom -80vh',
      trigger: '.debutchap6',
    }
  })
  .to(".arbre_lac_6",{x:"-100%",duration:5})
  .to(".debutchap6",{x:"-100%",duration:20});
});