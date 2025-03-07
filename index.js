
document.addEventListener("DOMContentLoaded", function () {

  //let title = document.getElementById("")

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

  gsap.from("#hero", {
    duration: 2, // start the animation when ".box" enters the viewport (once)
    x: "100%",
  });


  const cards = [
    {id: "#card-1", endTranslateX: -2000, rotate: 45},
    {id: "#card-2", endTranslateX: -1000, rotate: -30},
    {id: "#card-3", endTranslateX: -2000, rotate: 45},
    {id: "#card-4", endTranslateX: -1500, rotate: -30},
  ]

  ScrollTrigger.create({
    trigger: ".wrapper-404",
    start: "top top",
    end: "+=900vh",
    scrub: 1,
    pin: true,
    onUpdate: (self) => {
      gsap.to(".wrapper-404", {
        x: `${-350 * self.progress}vw`,
        duration: 0.5,
        ease: "power3.out",
      })
    }
  })

  cards.forEach((card) => {
    ScrollTrigger.create({
      trigger: "card.id",
      start: "top top",
      start: "+=1200vh",
      rotate: "+=100",
      onUpdate: (self) => {
        gsap.to(card.id, {
          x: `${card.endTranslateX * self.progress}px`,
          rotation: `${card.rotate * self.progress * 10}`,
          duration: 0.5,
          ease: "power3.out",
        })
      }
    })
  })
});

let element = document.querySelector("#about .box:nth-child(2) div:nth-child(1)")
gsap.from(element, {
  opacity: 0,
  x: "-100%",
  duration: 3,
  delay: 0.5,
  ease: "elastic(1, 0.3)",
  scrollTrigger: {
    trigger: ".box",  // Elemento que ativa a animação
    start: "top 80%", // Inicia quando o topo do elemento chega a 80% da tela
    //toggleActions: "play none none none", // Reproduz uma vez ao entrar
   // delay:10,
  }
})

let element2 = document.querySelector("#about .box:nth-child(2) div:nth-child(2)")
gsap.from(element2, {
  opacity: 0,
  x: "100%",
  duration: 2.5,
  delay: 1,
  ease: "elastic(1, 0.3)",
  scrollTrigger: {
    trigger: ".box",  // Elemento que ativa a animação
    start: "top 80%", // Inicia quando o topo do elemento chega a 80% da tela
    //toggleActions: "play none none none", // Reproduz uma vez ao entrar
   // delay:10,
  }
})

let element3 = document.querySelector("#about .box:nth-child(2) div:nth-child(3)")
gsap.from(element3, {
  opacity: 0,
  x: "-100%",
  duration: 3,
  delay: 1.5,
  ease: "elastic(1, 0.3)",
  scrollTrigger: {
    trigger: ".box",  // Elemento que ativa a animação
    start: "top 80%", // Inicia quando o topo do elemento chega a 80% da tela
    //toggleActions: "play none none none", // Reproduz uma vez ao entrar
   // delay:10,
  }
})

let element4 = document.querySelector("#about .box:nth-child(2) div:nth-child(4)")
gsap.from(element4, {
  opacity: 0,
  x: "100%",
  duration: 3,
  delay: 2,
  ease: "elastic(1, 0.3)",
  scrollTrigger: {
    trigger: ".box",  // Elemento que ativa a animação
    start: "top 80%", // Inicia quando o topo do elemento chega a 80% da tela
    //toggleActions: "play none none none", // Reproduz uma vez ao entrar
   // delay:10,
  }
})

let element5 = document.querySelector("#about .box:nth-child(2) div:nth-child(5)")
gsap.from(element5, {
  opacity: 0,
  x: "-100%",
  duration: 3,
  delay: 2.5,
  ease: "elastic(1, 0.3)",
  scrollTrigger: {
    trigger: ".box",  // Elemento que ativa a animação
    start: "top 80%", // Inicia quando o topo do elemento chega a 80% da tela
    //toggleActions: "play none none none", // Reproduz uma vez ao entrar
   // delay:10,
  }
})

let element6 = document.querySelector("#about .box:nth-child(2) div:nth-child(6)")
gsap.from(element6, {
  opacity: 0,
  x: "100%",
  duration: 3,
  delay: 3,
  ease: "elastic(1, 0.3)",
  scrollTrigger: {
    trigger: "#about",  // Elemento que ativa a animação
    start: "top 70%", // Inicia quando o topo do elemento chega a 80% da tela
    //toggleActions: "play none none none", // Reproduz uma vez ao entrar
   // delay:10,
  }
})