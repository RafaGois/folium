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
    x: "100%"
});
