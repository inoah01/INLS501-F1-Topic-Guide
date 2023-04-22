// const introGallery = document.querySelector(".intro-gallery");
// introGallery.style.height = window.innerHeight + "px";
// window.addEventListener("resize", () => {
//   introGallery.style.height = window.innerHeight + "px";
// });

// let scrollPosition = 0;
// setInterval(() => {
//   scrollPosition += window.innerWidth;
//   if (scrollPosition >= introGallery.scrollWidth) {
//     scrollPosition = 0;
//   }
//   introGallery.scrollTo({
//     left: scrollPosition,
//     behavior: "smooth",
//   });
// }, 5000);

document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.querySelector(".nav-container");
  const container = document.querySelector(".container");

  if (navContainer && container) {
    navContainer.style.width = getComputedStyle(container).width;
  }
});

function sendEmail() {
  window.location.href = "mailto:noahidavis@unc.edu";
}
