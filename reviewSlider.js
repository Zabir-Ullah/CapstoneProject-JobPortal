document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const reviews = document.querySelectorAll(".review");
  const totalReviews = reviews.length;

  function showNextReview() {
    reviews.forEach((review, index) => {
      review.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
    currentIndex = (currentIndex + 1) % totalReviews;
  }

  setInterval(showNextReview, 3000);
});
