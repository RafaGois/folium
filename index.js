gsap.from(".name", {
  opacity: 0,
  y: -250,
  duration: 2.5,
  ease: "slow(0.7,0.7,false)",
});

gsap.from([".degree", ".title"], {
  opacity: 0,
  duration:2.5,
  ease: "steps(12)",
  x: "400%"
});
