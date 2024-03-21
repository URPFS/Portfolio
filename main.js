"use strict";

const cabeza = document.getElementById("cabeza");
const headerHeight = cabeza.offsetHeight;
let lastScrollY = window.scrollY;
document.querySelectorAll("li").forEach(function (li) {
  li.addEventListener("click", function () {
    const target = this.getAttribute("target");
    const article = document.getElementById(target);
    article.scrollIntoView({ behavior: "smooth" });
  });
});

function updateHeaderPosition() {
  const scrollY = window.scrollY;
  if (scrollY > lastScrollY) {
    if (scrollY >= headerHeight) {
      cabeza.style.position = "fixed";
      cabeza.style.top = "0";
    }
  } else {
    if (scrollY <= headerHeight) {
      cabeza.style.position = "relative";
    }
  }
  lastScrollY = scrollY;
}

window.addEventListener("scroll", updateHeaderPosition);
