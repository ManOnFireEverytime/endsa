$(document).ready(function () {
  lax.setup();
  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
  window.addEventListener("resize", function () {
    lax.updateElements();
  });
});
