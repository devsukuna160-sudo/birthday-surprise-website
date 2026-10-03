document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelector(".cta");
  const brand = document.querySelector(".brand");

  if (cta) {
    cta.addEventListener("mouseenter", () => {
      cta.style.transform = "translateY(-2px) scale(1.02)";
    });

    cta.addEventListener("mouseleave", () => {
      cta.style.transform = "";
    });
  }

  if (brand) {
    brand.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
