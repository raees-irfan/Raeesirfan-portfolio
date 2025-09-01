const gradient = document.querySelector(".mouse-gradient");

document.addEventListener("mousemove", (e) => {
  gradient.style.left = e.clientX + "px";
  gradient.style.top = e.clientY + "px";
});
