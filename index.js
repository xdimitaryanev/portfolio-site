const aboutEl = document.getElementById("about");
const contactEl = document.getElementById("contact");
const projectsEl = document.getElementById("projects");
const helloel = document.getElementById("hello");

aboutEl.addEventListener("click", scrolEl)
function scrolEl() {
 helloel.scrollIntoView({ behavior: "smooth",inline: "nearest" });
}