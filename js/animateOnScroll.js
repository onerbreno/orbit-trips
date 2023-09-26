function animateOnScroll(canvasID, videoInfo) {
  const canvas = document.getElementById(canvasID);
  const canvasContext = canvas.getContext("2d");

  // Configuração da altura e largura do canvas
  canvas.height = window.innerHeight
  canvas.width  = window.innerWidth

  // Carrega as imagens
  for (let i = 0; i <= videoInfo.totalFrames; i++) {
    const img = new Image();
    img.src = videoInfo.currentImage(i);
    videoInfo.images.push(img);
  }

  // Animação com GSAP
  gsap.to(videoInfo, {
    currentFrame: videoInfo.totalFrames,
    snap: "currentFrame",
    ease: "none",
    scrollTrigger: {
      trigger: canvas,
      start: "top",
      end: `bottom+=${videoInfo.totalFrames * videoInfo.totalTime}`,
      scrub: 2,
      pin: true,
      //   markers: true,
    },
    onUpdate: render,
  });

  videoInfo.images[0].onload = () => {
    canvasContext.drawImage(videoInfo.images[0], 0, 0);
  };

  // Renderização
  function render() {
    canvasContext.drawImage(videoInfo.images[videoInfo.currentFrame], 0, 0);
  }
}
