document.addEventListener("DOMContentLoaded", function () {
  const jobListings = document.getElementById("job-listings");

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      location: "Remote",
      type: "Full-time",
      salary: "$80,000",
      description: "Develop cutting-edge applications.",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Biz Inc",
      location: "New York",
      type: "Full-time",
      salary: "$100,000",
      description: "Manage product lifecycle.",
    },
  ];

  function displayJobs() {
    jobListings.innerHTML = "";
    jobs.forEach((job) => {
      const jobItem = document.createElement("div");
      jobItem.classList.add("job-item");
      jobItem.innerHTML = `
                <h3>${job.title}</h3>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <button class="apply-btn" data-id="${job.id}">Apply Now</button>
                <button class="save-btn" data-id="${job.id}">Save</button>
            `;
      jobListings.appendChild(jobItem);
    });

    attachEventListeners();
  }

  function attachEventListeners() {
    document.querySelectorAll(".apply-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const jobId = this.dataset.id;
        const job = jobs.find((j) => j.id == jobId);
        if (job) {
          const jobData = encodeURIComponent(JSON.stringify(job));
          window.location.href = `Apply.html?job=${jobData}`;
        }
      });
    });

    document.querySelectorAll(".save-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const jobId = this.dataset.id;
        let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

        if (!savedJobs.some((j) => j.id == jobId)) {
          const job = jobs.find((j) => j.id == jobId);
          if (job) {
            savedJobs.push(job);
            localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
            alert("Job saved successfully!");
          }
        } else {
          alert("Job already saved!");
        }
      });
    });
  }

  displayJobs();
});
