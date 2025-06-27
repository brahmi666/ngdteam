let lastTime = 0;
document.body.addEventListener("pointermove", (e) => {
  if (performance.now() - lastTime < 5) return; // Limits to ~60 FPS
  lastTime = performance.now();

  const x = e.clientX;
  const y = e.clientY;
  document.body.style.setProperty("--posX", x);
  document.body.style.setProperty("--posY", y);
});
