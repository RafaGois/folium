gsap.from(".name", {
  opacity: 0,
  y: -250,
  duration: 1.5,
  ease: "slow(0.7,0.7,false)",
});

gsap.from(".degree", {
  opacity: 0,
  duration: 7.5,
  ease: "steps(12)",

});

gsap.from(".header .title", {
    opacity: 0,
    y: 250,
    duration: 1.5,
    ease: "slow(0.7,0.7,false)",
  });

  gsap.from('.hero', {
    duration: 1, // start the animation when ".box" enters the viewport (once)
    x: 500
});

gsap.to(".about .box img", /* { x: 100 } */),
  st = ScrollTrigger.create({
    trigger: ".trigger",
    start: "top center",
    end: "+=500",
    onUpdate: (self) => console.log("progress:", self.progress),
    animation: tween,
  });