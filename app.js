const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");

previews.forEach((p) => {
  p.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    // dynamic image and text change
    const originalSrc = p.getAttribute("data-original");
    original.src = originalSrc;
    alt = p.alt;
    imgText.innerHTML = alt;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
