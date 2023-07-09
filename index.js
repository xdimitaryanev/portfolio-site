const aboutBtn = document.getElementById("about");
const contactBtn = document.getElementById("contact");
const workeBtn = document.getElementById("work");
const aboutContent = document.querySelector(".about")
const svgEl = document.getElementById("svg");
window.addEventListener("scroll", rotateSvg);

function rotateSvg () {
    const rotationAngle = window.scrollY * 0.2;
    svgEl.style.transform = `rotate(${rotationAngle}deg)`;
}

aboutBtn.addEventListener("click", scrolEl)
function scrolEl() {
 aboutContent.scrollIntoView({ behavior: "smooth",inline: "nearest" });
}