const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#sidebarLinks a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;
const sectionHeight = section.clientHeight;

if (scrollY >= sectionTop) {
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});
/* ========================= */
/* HAMBURGER MENU */
/* ========================= */

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {

menu.classList.toggle("show");

});
