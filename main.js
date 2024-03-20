"use strict";

document.querySelectorAll("li").forEach(function (li) {
  li.addEventListener("click", function () {
    const target = this.getAttribute("target");
    const article = document.getElementById(target);
    article.scrollIntoView({ behavior: "smooth" });
  });
});
