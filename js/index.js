const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});
mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

const setTilt = () => {
  //if size is desktop enable tilt
  if (window.innerWidth > 1250) {
    $(".tilt-outer").tilt({
      maxTilt: 4,
      perspective: 300,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: 1.2,
    });
  } else {
    const elements = $(".tilt-outer");
    elements.tilt.destroy.call(elements);
  }
};

$(document).ready(() => setTilt());
window.addEventListener("resize", setTilt);
