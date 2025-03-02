document.getElementById("apply-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const confirmationMessage = document.getElementById("confirmation-message");
  confirmationMessage.style.display = "block";
});
