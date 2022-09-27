const reviews = [
  {
    id: 1,
    name: "Steve Jobs",
    img: "https://www.kindpng.com/picc/m/28-286383_steve-jobs-face-steve-jobs-hd-png-download.png",
    text: "Melhor decisão financeira de todas!",
    city: "Poá, São Paulo",
  },
  {
    id: 2,
    name: "Elon Musk",
    img: "https://i.pinimg.com/564x/fc/f4/f1/fcf4f129bad7002ce6cc3e736425544d.jpg",
    text: "O último passo para se tornar um minimalista completo.",
    city: "Poá, São Paulo",
  },
  {
    id: 3,
    name: "Jeff Bezos",
    img: "https://gsfiles.s3.amazonaws.com/images/folder73/profilePic73-1462417920217.jpg",
    text: "Finalmente livre de bancos da velha guarda.",
    city: "Poá, São Paulo",
  },
];

const btnClose = document.querySelector(".navbar__btn-close");
const links = document.querySelector(".navbar__links");
const section2 = document.querySelector(".section-2");
const section5 = document.querySelector(".section-5");
const btnScrollTo = document.querySelector(".btn-scroll");
const btntop = document.querySelector(".btn-footer");
const nav = document.querySelector(".navbar");
const year = document.querySelector(".year");
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const city = document.getElementById("city");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
const linksFooter = document.querySelectorAll(".link-footer");

btnClose.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

btnScrollTo.addEventListener("click", () => {
  section2.scrollIntoView({ behavior: "smooth" });
});

btntop.addEventListener("click", () => {
  section5.scrollIntoView({ behavior: "smooth" });
});

linksFooter.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  });
});

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  city.textContent = item.city;
  info.textContent = item.text;
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  city.textContent = item.city;
  info.textContent = item.text;
}
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

const date = new Date();
year.innerHTML = date.getFullYear();
