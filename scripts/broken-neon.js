var neon = document.getElementById("broken");
while (true) {
    var animationRandom = Math.random();
    neon.style.animationName = "brokenNeon";
    neon.style.animationDuration = animationRandom.toString();
    neon.style.animationIterationCount = "infinite";
    neon.style.animationDirection = "alternate";
}
