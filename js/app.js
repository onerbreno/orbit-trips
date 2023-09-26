gsap.registerPlugin(ScrollTrigger);

const demoVideo1Info = {
  totalFrames: 158,
  totalTime: 15,
  images: [],
  currentFrame: 0,
  currentImage: (index) =>
    `./img/spaceship-frames/spaceship_anim_${index.toString().padStart(3, "0")}.jpg`,
};

animateOnScroll("video_id", demoVideo1Info);
