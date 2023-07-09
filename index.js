const aboutEl = document.getElementById("about");
const contactEl = document.getElementById("contact");
const workel = document.getElementById("work");
const helloel = document.getElementById("hello");
const svgEl = document.getElementById("svg");
window.addEventListener("scroll", rotateSvg);

function rotateSvg () {
    const rotationAngle = window.scrollY * 0.2;
    svgEl.style.transform = `rotate(${rotationAngle}deg)`;
}

aboutEl.addEventListener("click", scrolEl)
function scrolEl() {
 helloel.scrollIntoView({ behavior: "smooth",inline: "nearest" });
}