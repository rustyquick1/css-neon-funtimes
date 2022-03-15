
let neon: HTMLElement = document.getElementById("broken");

while(true) {
  const animationRandom: Number = Math.random();

  neon.style.animationName = "brokenNeon";
  neon.style.animationDuration = animationRandom.toString();
  neon.style.animationIterationCount = "infinite";
  neon.style.animationDirection = "alternate";
}