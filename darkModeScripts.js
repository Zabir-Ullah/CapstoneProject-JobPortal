document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "🌙";
  toggleButton.id = "dark-mode-toggle";
  toggleButton.style.cssText =
    "position: fixed; top: 10px; right: 10px; background-color: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; z-index: 1000;";
  document.body.appendChild(toggleButton);

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header")?.classList.toggle("dark-mode");
    document.querySelector("footer")?.classList.toggle("dark-mode");

    document
      .querySelectorAll(
        ".job-item, form, input, textarea, select, #bookmarked-jobs, .dashboard, table"
      )
      .forEach((item) => item.classList.toggle("dark-mode"));

    document
      .querySelectorAll("button, .remove-btn, #dark-mode-toggle, .apply-btn")
      .forEach((button) => button.classList.toggle("dark-mode"));

    document
      .querySelectorAll("nav ul li a")
      .forEach((link) => link.classList.toggle("dark-mode"));

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
      toggleButton.textContent = "☀️";
    } else {
      localStorage.setItem("dark-mode", "disabled");
      toggleButton.textContent = "🌙";
    }
  }

  if (localStorage.getItem("dark-mode") === "enabled") {
    toggleDarkMode();
  }

  toggleButton.addEventListener("click", toggleDarkMode);
});
