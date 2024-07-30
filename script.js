function loadingAnimation() {
  let time = gsap.timeline();

  // loader animation at the first coming from down
  time.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  // for text now

  time.from("line1-part1", {
    opacity: 0,
    onStart: function () {
      // counter 0 - 100
      let h5timer = document.querySelector("#line1-part1 h5");
      let counter = 0;

      setInterval(function () {
        if (counter < 100) {
          h5timer.innerHTML = counter++;
        } else {
          h5timer.innerHTML = counter;
        }
      }, 30);
    },
  });

  time.to(".line h2", {
    animationName: "animation",
    opactiy: 1,
  });

  time.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
  });

  time.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    ease: Power4,
    duration: 0.5,
  });

  time.to("#loader", {
    display: "none",
  });

  time.from("#nav", {
    opacity: 0,
  });

  time.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
    y: 120,
    stagger: 0.2,
  });
}

function cursorAnimation() {
  document.addEventListener("mousemove", function (details) {
    gsap.to("#cursor", {
      left: details.x,
      top: details.y,
    });
  });

  Shery.makeMagnet("#nav2 h4", {});
}

loadingAnimation();

cursorAnimation();
