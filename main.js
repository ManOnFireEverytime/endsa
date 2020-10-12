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

$(".navbar-toggler").on("click", function () {
  $(this).toggleClass("menu-open");
});
lightbox.option({
  disableScrolling: true,
});
const links = document.querySelectorAll(".alternate-style"),
  totalLinks = links.length;

function setActiveStyle(color) {
  for (let i = 0; i < totalLinks; i++) {
    if (color === links[i].getAttribute("title")) {
      links[i].removeAttribute("disabled");
    } else {
      links[i].setAttribute("disabled", "true");
    }
  }
}
const bodySkin = document.querySelectorAll(".body-skin"),
  totalBodySkin = bodySkin.length;
for (let i = 0; i < totalBodySkin; i++) {
  bodySkin[i].addEventListener("change", function () {
    if (this.value === "dark") {
      document.body.className = "dark";
    } else {
      document.body.className = "";
    }
  });
}
document
  .querySelector(".toggle-color-switcher")
  .addEventListener("click", () => {
    document.querySelector(".color-switcher").classList.toggle("open");
  });
