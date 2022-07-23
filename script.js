const likes = document.querySelectorAll(".like");

likes.forEach((like, idx) => {
  like.addEventListener("click", () => like.classList.toggle("liked"));
});

const cards = {
  headline: "New Jobs",
  description:
    "Aim at 50.000 additional (!) tech workers in Porto through local job offers & remote workers choosing Porto as base.",
};
