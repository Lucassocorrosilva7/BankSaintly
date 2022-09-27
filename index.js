const btnClose = document.querySelector(".navbar__btn-close");
const links = document.querySelector(".navbar__links");
const section2 = document.querySelector(".section-2");
const btnScrollTo = document.querySelector(".btn-scroll");
const nav = document.querySelector(".navbar");

btnClose.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

btnScrollTo.addEventListener("click", () => {
  const s1coords = section2.getBoundingClientRect();
  section2.scrollIntoView({ behavior: "smooth" });
});
