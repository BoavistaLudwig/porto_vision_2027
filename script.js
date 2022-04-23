const likes = document.querySelectorAll(".like");

likes.forEach((like, idx) => {
  like.addEventListener("click", () => like.classList.toggle("liked"));
});
