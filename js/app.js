const section2 = document.querySelector(".section-anim");
const msgText = section2.querySelector(".msg-elem");

const canvas2 = document.getElementById("spaceship");
const context2 = canvas2.getContext("2d");
document.documentElement.style.overflowX = 'hidden';
canvas2.width = 1458;
canvas2.height = 820;

/* ScrollMagic Controller */
let controller = new ScrollMagic.Controller();

const images2 = [];
const headturn = {
  frame: 0,
};
const frameCount2 = 158;

// Populating images
const currentFrame2 = (index) => `./img/spaceship-frames/spaceship_anim_${index.toString().padStart(3, "0")}.jpg`;

for (let i = 0; i < frameCount2; i++) {
  const img = new Image();
  img.src = currentFrame2(i);
  images2.push(img);
}

// GSAP Timeline #2
let tl2 = gsap.timeline();
tl2
  .add("start0")

  /* Main Text Animation */
  .to(msgText, { delay: 1, duration: 3.5, opacity: 1}, "start0")
  .to(msgText, { duration: 3.5, opacity: 0})

  /* BG 'Image Change' Animation */
  .to(
    headturn,
    {
      duration: 9,
      frame: frameCount2 - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render2,
    },
    "start0"
  );

// ScrollMagic Scene #2
let scene2 = new ScrollMagic.Scene({
  triggerElement: ".section-anim",
  duration: "4000",
  triggerHook: 0,
  //   offset: "100",
})
  .setTween(tl2)
  .setPin(".section-anim")
  .addTo(controller);

// Initial image loading
images2[0].onload = render2;

// Rendering image on canvas
function render2() {
  context2.clearRect(0, 0, canvas2.width, canvas2.height);
  context2.drawImage(images2[headturn.frame], 0, 0);
}

