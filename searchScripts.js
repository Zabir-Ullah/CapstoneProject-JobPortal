document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("job-search-input").value.toLowerCase();
  const searchResultsSection = document.getElementById("search-results");

  searchResultsSection.innerHTML = "";

  const filteredJobs = jobListings.filter(
    (job) =>
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query)
  );

  filteredJobs.forEach((job) => {
    const jobItem = document.createElement("div");
    jobItem.classList.add("job-item");
    jobItem.innerHTML = `
            <img src="assets/logos/company1.png" alt="Company Logo" style="width: 50px;">
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Type:</strong> ${job.type}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <button>Apply Now</button>
            <button>Save Job</button>
        `;
    searchResultsSection.appendChild(jobItem);
  });
});
