const year = document.getElementById("year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const track = document.getElementById("reviews-track");

if (track) {
  const prev = document.querySelector(".carousel-prev");
  const next = document.querySelector(".carousel-next");

  const step = () => {
    const card = track.querySelector(".review-card");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 16;
    return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
  };

  if (prev) {
    prev.addEventListener("click", () => {
      track.scrollBy({ left: -step(), behavior: "smooth" });
    });
  }

  if (next) {
    next.addEventListener("click", () => {
      track.scrollBy({ left: step(), behavior: "smooth" });
    });
  }
}
