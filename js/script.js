"use strict";

setInterval(createSnow, 50);

function createSnow() {
  const snow = document.createElement("i");
  snow.classList.add("fas");
  snow.classList.add("fa-snowflake");

  snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.animationDuration = Math.random() * 3 + 2 + "s";
  snow.style.opacity = Math.random();
  snow.style.fontSize = 10 + 10 + "px";

  document.body.append(snow);

  setTimeout(() => {
    snow.remove();
  }, 5000);
}
