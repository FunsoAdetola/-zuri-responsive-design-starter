const bars = document.querySelector("div.bars");
const navLinks = document.querySelector("ul.nav-links");

const toggleNav = () => {
  navLinks.classList.toggle("show-nav");
};
bars.addEventListener("click", toggleNav);
