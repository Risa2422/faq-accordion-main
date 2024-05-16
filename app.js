const p = document.querySelectorAll(".button");
const a = document.querySelectorAll(".answer");

p.forEach((button, index) => {
  button.addEventListener("click", function () {
    a[index].classList.toggle("show");
    button.classList.toggle("visible");
  });
});
