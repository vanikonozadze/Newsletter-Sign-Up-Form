const dismissButton = document.querySelector(".dismiss-button");
const backToIndex = document.getElementById("dismiss-form");
const email = document.querySelector(".email");
const emailValue = localStorage.getItem("email");

dismissButton.addEventListener("click", () => {
  window.location.href = backToIndex.action;
});

email.innerHTML = emailValue;
