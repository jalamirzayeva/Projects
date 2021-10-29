// NAVBAR
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".fresh-nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
// NAVBAR-END

// about slider
$('.aboutSlider').slick({
  infinite: true ,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1000,
});