gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


let sprite = document.querySelector(".sprite");
const body = document.querySelector("body");

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
  x: "-60vw",
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

let speed = 200;

gsap.to('.oiseau_3', {
  rotation: 1000,
  y: 10 * speed,
  scrollTrigger: {
    scrub: true,
    start: 'top',
    end: 'bottom',
    trigger: '.debutchap3',
  }
});

gsap.to('.nuage_3', {
  y: 7 * speed,
  scrollTrigger: {
    scrub: true,
    start: 'top',
    end: 'bottom',
    trigger: '.debutchap3',
  }
});

gsap.to('.debutchap3', {
  y: -10 * speed,
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
gsap.to('.txt4', {
  duration: 2,
  text: "Le loup vient aider l'oiseau",
  ease: "none",
  scrollTrigger: {
    pin: true,
    scrub: true,
    start: 'top',
    end: 'bottom -200%',
    trigger: '.debutchap4',
  }
});

/*---------------------------------------------------- 
# Chapitre 5 
---------------------------------------------------------*/

var ami = gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: true,
    start: 'top',
    end: 'bottom',
    trigger: '.debutchap5',
  }
})

ami.to(".cerf_5", { x: "35vw", y: "5vw", });
ami.to(".lapin_5", { x: "-40vw", y: "-5vw", });

/*--------------------------------------------------------- 
# Chapitre 6
---------------------------------------------------------*/

gsap.to('.arbre_lac_6', {
  x: "-50%",
  scrollTrigger: {
    pin: true,
    scrub: true,
    start: 'top',
    end: 'bottom',
    trigger: '.debutchap6',
  }
});