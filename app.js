let nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    nav.style.boxShadow = "";
  } else {
    nav.style.boxShadow = "0px 10px 6px -6px rgba(0,0,0,0.3)";
  }
});
