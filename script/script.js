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

gsap.to('.nuage_1', { 
    x: '50vw',
    scrollTrigger: {
      pin: true,
      scrub: true,
      start: 'top',
      end: 'bottom',
      trigger: '.debutchap1',
    }
  });


/*--------------------------------------------------------- 
# Chapitre 2 
---------------------------------------------------------*/

gsap.to('.oiseau_2', { 
    x : "-60vw",
    scrollTrigger: {
      pin: true,
      scrub: true,
      start: 'top',
      end: 'bottom',
      trigger: '.debutchap2',
    }
  });

/*--------------------------------------------------------- 
# Chapitre 3 
---------------------------------------------------------*/

gsap.to('.oiseau_3', { 
  rotation : 360,
  scrollTrigger: {
    pin: true,
    scrub: true,
    start: 'top',
    end: 'bottom',
    trigger: '.debutchap3',
  }
});

/*--------------------------------------------------------- 
# Chapitre 4 
---------------------------------------------------------*/



/*---------------------------------------------------- 
# Chapitre 5 
---------------------------------------------------------*/

var ami = gsap.timeline ({
  scrollTrigger : {
    pin: true,
    scrub: true,
    start: 'top',
    end: 'bottom',
    trigger: '.debutchap5',
  }
})

ami.to(".cerf_5",{x : "35vw", y : "5vw",});
ami.to(".lapin_5",{x : "-35vw", y : "-5vw",});

/*--------------------------------------------------------- 
# Chapitre 6
---------------------------------------------------------*/

gsap.to('.arbre_lac_6', { 
  x : "-50%",
  scrollTrigger: {
    pin: true,
    scrub: true,
    start: 'top',
    end: 'bottom',
    trigger: '.debutchap6',
  }
});