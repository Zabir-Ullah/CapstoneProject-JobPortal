document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const jobData = params.get("job");

  if (jobData) {
    const job = JSON.parse(decodeURIComponent(jobData));
    document.getElementById("job-title").textContent = job.title;
    document.getElementById("job-company").textContent = job.company;
    document.getElementById("job-location").textContent = job.location;
    document.getElementById("job-type").textContent = job.type;
    document.getElementById("job-salary").textContent = job.salary;
    document.getElementById("job-description").textContent = job.description;
  } else {
    document.body.innerHTML = "<p>Job details not found.</p>";
  }
});
