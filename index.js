const aboutEl = document.getElementById("about");
const contactEl = document.getElementById("contact");
const workel = document.getElementById("work");
const helloel = document.getElementById("hello");

aboutEl.addEventListener("click", scrolEl)
function scrolEl() {
 helloel.scrollIntoView({ behavior: "smooth",inline: "nearest" });
}