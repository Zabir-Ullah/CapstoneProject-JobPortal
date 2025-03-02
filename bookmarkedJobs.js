document.addEventListener("DOMContentLoaded", function () {
  const bookmarkedJobsContainer = document.getElementById("bookmarked-jobs");
  let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

  function displayBookmarkedJobs() {
    bookmarkedJobsContainer.innerHTML = "";

    if (savedJobs.length === 0) {
      bookmarkedJobsContainer.innerHTML = `
        <p class="empty-message">No bookmarked jobs found.</p>
      `;
      return;
    }

    savedJobs.forEach((job) => {
      const jobItem = document.createElement("div");
      jobItem.classList.add("job-item");

      jobItem.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <button class="remove-btn" data-id="${job.id}">Remove</button>
      `;

      bookmarkedJobsContainer.appendChild(jobItem);
    });

    document.querySelectorAll(".remove-btn").forEach((button) => {
      button.addEventListener("click", function () {
        removeBookmarkedJob(this.dataset.id);
      });
    });
  }

  function removeBookmarkedJob(jobId) {
    savedJobs = savedJobs.filter((job) => job.id !== jobId);
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    displayBookmarkedJobs();
  }

  function applyDarkMode() {
    if (document.body.classList.contains("dark-mode")) {
      document.querySelectorAll(".job-item").forEach((item) => {
        item.classList.add("dark-mode");
      });
    }
  }

  displayBookmarkedJobs();
  applyDarkMode();
});
